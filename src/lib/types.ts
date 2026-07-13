export type RegionId = "region1" | "region2" | "region3" | "regionFinal";

export type ItemId =
  | "ancientScroll"
  | "magicalQuill"
  | "glowingCrystal"
  | "ornateCompass"
  | "glowingWand";

export type Screen =
  | "intro"
  | "map"
  | "region"
  | "battle"
  | "guildExam"
  | "result"
  | "ending";

export interface Question {
  id: string;
  question: string;
  /** Opsi jawaban. answerIndex selalu menunjuk ke opsi yang benar di data; urutan tampil diacak saat render. */
  options: string[];
  answerIndex: number;
  explanation: string;
}

export type MonsterTier = "basic" | "elite" | "boss";

export interface Monster {
  id: string;
  name: string;
  region: RegionId;
  tier: MonsterTier;
  hp: number;
  atk: number;
  fameReward: number;
  sprite: string;
}

export interface ItemDef {
  id: ItemId;
  name: string;
  sprite: string;
  description: string;
  dropChance: number;
}

export interface RegionDef {
  id: RegionId;
  name: string;
  topic: string;
  recommendedLevel: string;
  background: string;
  monsterIds: string[];
  hasGuildHall: boolean;
}

export interface PlayerState {
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  exp: number;
  maxExp: number;
  atk: number;
  fame: number;
  items: ItemId[];
  guildCooldown: boolean;
  visitedRegions: RegionId[];
  defeatedFinalBoss: boolean;
}

export interface WrongAnswer {
  question: Question;
  chosenText: string;
}

export interface BattleResult {
  kind: "battleWin" | "battleLose";
  monsterName: string;
  fameGained: number;
  levelsGained: number;
  droppedItem: ItemId | null;
  isFinalBoss: boolean;
}

export interface GuildResult {
  kind: "guildPass" | "guildFail";
  score: number;
  wrongAnswers: WrongAnswer[];
  levelsGained: number;
}

export type ResultData = BattleResult | GuildResult;

export interface DialogueEntry {
  id: string;
  lines: string[];
}

export interface GameState {
  loaded: boolean;
  screen: Screen;
  player: PlayerState;
  currentRegion: RegionId | null;
  currentMonsterId: string | null;
  lastResult: ResultData | null;
  dialogue: DialogueEntry | null;
  seenDialogues: string[];
}

export interface SavedGame {
  player: PlayerState;
  seenDialogues: string[];
}
