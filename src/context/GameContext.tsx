"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import type {
  GameState,
  ItemId,
  PlayerState,
  RegionId,
  SavedGame,
  WrongAnswer,
} from "@/lib/types";
import { fameWithBonus } from "@/lib/utils";
import { MONSTERS } from "@/data/monsters";
import { DIALOGUES } from "@/data/dialogues";

const STORAGE_KEY = "grammar-realm-save-v1";

function createPlayer(name: string): PlayerState {
  return {
    name,
    level: 1,
    hp: 100,
    maxHp: 100,
    exp: 0,
    maxExp: 100,
    atk: 15,
    fame: 0,
    items: [],
    guildCooldown: false,
    visitedRegions: [],
    defeatedFinalBoss: false,
  };
}

const initialState: GameState = {
  loaded: false,
  screen: "intro",
  player: createPlayer(""),
  currentRegion: null,
  currentMonsterId: null,
  lastResult: null,
  dialogue: null,
  seenDialogues: [],
};

export type GameAction =
  | { type: "LOAD"; saved: SavedGame | null }
  | { type: "START_GAME"; name: string }
  | { type: "GO_MAP" }
  | { type: "ENTER_REGION"; region: RegionId }
  | { type: "START_BATTLE"; monsterId: string }
  | {
      type: "BATTLE_WON";
      monsterId: string;
      hpLeft: number;
      droppedItem: ItemId | null;
    }
  | { type: "BATTLE_LOST"; monsterId: string }
  | { type: "OPEN_GUILD" }
  | { type: "GUILD_FINISHED"; score: number; wrongAnswers: WrongAnswer[] }
  | { type: "RESULT_CONTINUE" }
  | { type: "DISMISS_DIALOGUE" }
  | { type: "RESET" };

/** Naik 1 level: +20 Max HP, +3 ATK, HP restore penuh, maxExp naik ~20%. */
function levelUp(p: PlayerState): PlayerState {
  return {
    ...p,
    level: p.level + 1,
    maxHp: p.maxHp + 20,
    atk: p.atk + 3,
    maxExp: Math.round(p.maxExp * 1.2),
    hp: p.maxHp + 20,
  };
}

/** Tambahkan EXP dan proses level up berulang jika melewati maxExp. */
function applyExp(p: PlayerState, gained: number): { player: PlayerState; levels: number } {
  let player = { ...p, exp: p.exp + gained };
  let levels = 0;
  while (player.exp >= player.maxExp) {
    player = levelUp({ ...player, exp: player.exp - player.maxExp });
    levels++;
  }
  return { player, levels };
}

function markVisited(state: GameState, region: RegionId): GameState {
  const player = state.player.visitedRegions.includes(region)
    ? state.player
    : {
        ...state.player,
        visitedRegions: [...state.player.visitedRegions, region],
      };
  const dlgId = `enter_${region}`;
  const showDialogue = !state.seenDialogues.includes(dlgId);
  return {
    ...state,
    player,
    currentRegion: region,
    screen: "region",
    dialogue: showDialogue ? DIALOGUES[dlgId] ?? null : state.dialogue,
    seenDialogues: showDialogue
      ? [...state.seenDialogues, dlgId]
      : state.seenDialogues,
  };
}

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "LOAD": {
      if (action.saved && action.saved.player.name) {
        return {
          ...state,
          loaded: true,
          screen: "map",
          player: action.saved.player,
          seenDialogues: action.saved.seenDialogues,
        };
      }
      return { ...state, loaded: true, screen: "intro" };
    }

    case "START_GAME":
      return {
        ...initialState,
        loaded: true,
        screen: "map",
        player: createPlayer(action.name.trim() || "Sang Pengembara"),
        seenDialogues: ["intro"],
      };

    case "GO_MAP":
      return { ...state, screen: "map", currentMonsterId: null };

    case "ENTER_REGION":
      return markVisited(state, action.region);

    case "START_BATTLE": {
      const monster = MONSTERS[action.monsterId];
      const isBoss = monster?.tier === "boss";
      const showBossDialogue =
        isBoss && !state.seenDialogues.includes("before_final_boss");
      return {
        ...state,
        screen: "battle",
        currentMonsterId: action.monsterId,
        dialogue: showBossDialogue ? DIALOGUES.before_final_boss : null,
        seenDialogues: showBossDialogue
          ? [...state.seenDialogues, "before_final_boss"]
          : state.seenDialogues,
      };
    }

    case "BATTLE_WON": {
      const monster = MONSTERS[action.monsterId];
      const fameGained = fameWithBonus(state.player, monster.fameReward);
      let player: PlayerState = {
        ...state.player,
        hp: Math.max(1, action.hpLeft),
        fame: state.player.fame + fameGained,
        guildCooldown: false, // menang 1 battle membuka lagi Ujian Guild
        defeatedFinalBoss:
          state.player.defeatedFinalBoss || monster.tier === "boss",
      };
      if (action.droppedItem) {
        player = { ...player, items: [...player.items, action.droppedItem] };
      }
      const { player: leveledPlayer, levels } = applyExp(player, fameGained);
      return {
        ...state,
        player: leveledPlayer,
        screen: "result",
        currentMonsterId: null,
        lastResult: {
          kind: "battleWin",
          monsterName: monster.name,
          fameGained,
          levelsGained: levels,
          droppedItem: action.droppedItem,
          isFinalBoss: monster.tier === "boss",
        },
      };
    }

    case "BATTLE_LOST": {
      const monster = MONSTERS[action.monsterId];
      // Kalah: kembali ke Kota, HP restore penuh, tanpa penalti item/EXP.
      return {
        ...state,
        player: { ...state.player, hp: state.player.maxHp },
        screen: "result",
        currentMonsterId: null,
        lastResult: {
          kind: "battleLose",
          monsterName: monster.name,
          fameGained: 0,
          levelsGained: 0,
          droppedItem: null,
          isFinalBoss: monster.tier === "boss",
        },
      };
    }

    case "OPEN_GUILD":
      if (state.player.guildCooldown) return state;
      return { ...state, screen: "guildExam" };

    case "GUILD_FINISHED": {
      const passed = action.score >= 8;
      if (passed) {
        const player = levelUp(state.player);
        return {
          ...state,
          player,
          screen: "result",
          dialogue: DIALOGUES.guild_pass,
          lastResult: {
            kind: "guildPass",
            score: action.score,
            wrongAnswers: action.wrongAnswers,
            levelsGained: 1,
          },
        };
      }
      return {
        ...state,
        player: { ...state.player, guildCooldown: true },
        screen: "result",
        dialogue: DIALOGUES.guild_fail,
        lastResult: {
          kind: "guildFail",
          score: action.score,
          wrongAnswers: action.wrongAnswers,
          levelsGained: 0,
        },
      };
    }

    case "RESULT_CONTINUE": {
      const result = state.lastResult;
      if (!result) return { ...state, screen: "map" };
      if (result.kind === "battleWin" && result.isFinalBoss) {
        const showEnding = !state.seenDialogues.includes("ending");
        return {
          ...state,
          screen: "ending",
          lastResult: null,
          dialogue: showEnding ? DIALOGUES.ending : null,
          seenDialogues: showEnding
            ? [...state.seenDialogues, "ending"]
            : state.seenDialogues,
        };
      }
      if (result.kind === "battleLose") {
        // Kembali ke Kota (Wilayah 3).
        return markVisited({ ...state, lastResult: null }, "region3");
      }
      if (result.kind === "battleWin") {
        return {
          ...state,
          screen: state.currentRegion ? "region" : "map",
          lastResult: null,
        };
      }
      // Lulus/gagal Ujian Guild → kembali ke Kota.
      return { ...state, screen: "region", currentRegion: "region3", lastResult: null };
    }

    case "DISMISS_DIALOGUE":
      return { ...state, dialogue: null };

    case "RESET":
      return { ...initialState, loaded: true, screen: "intro" };

    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameAction>;
} | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Muat save dari localStorage sekali di awal (client-only).
  useEffect(() => {
    let saved: SavedGame | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw) as SavedGame;
    } catch {
      saved = null;
    }
    dispatch({ type: "LOAD", saved });
  }, []);

  // Simpan progress tiap kali player/dialog berubah.
  useEffect(() => {
    if (!state.loaded) return;
    if (!state.player.name) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    const saved: SavedGame = {
      player: state.player,
      seenDialogues: state.seenDialogues,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [state.loaded, state.player, state.seenDialogues]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame harus dipakai di dalam GameProvider");
  return ctx;
}
