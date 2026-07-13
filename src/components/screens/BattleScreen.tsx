"use client";

import { useMemo, useRef, useState } from "react";
import { useGame } from "@/context/GameContext";
import { MONSTERS, BOSS_PHASE_HP } from "@/data/monsters";
import { REGIONS } from "@/data/regions";
import { QUESTION_BANK, BOSS_PHASE_POOLS } from "@/data/questions";
import {
  damageTaken,
  effectiveAtk,
  prepareOptions,
  rollDrop,
  shuffle,
  type BattleOption,
} from "@/lib/utils";
import type { Question } from "@/lib/types";
import Bar from "@/components/Bar";

interface Feedback {
  type: "correct" | "wrong";
  crit?: boolean;
  explanation?: string;
  correctText?: string;
  playerDead?: boolean;
}

interface FloatingDmg {
  id: number;
  target: "monster" | "player";
  text: string;
  crit: boolean;
}

export default function BattleScreen() {
  const { state, dispatch } = useGame();
  const player = state.player;
  const monster = MONSTERS[state.currentMonsterId ?? ""];
  const isBoss = monster?.tier === "boss";

  const phases = useMemo(
    () => (isBoss ? BOSS_PHASE_HP : [monster?.hp ?? 1]),
    [isBoss, monster],
  );
  const pools = useMemo<Question[][]>(() => {
    if (!monster) return [[]];
    if (isBoss) return BOSS_PHASE_POOLS;
    const bank = QUESTION_BANK[monster.region];
    return [monster.tier === "elite" ? bank.battle.elite : bank.battle.basic];
  }, [monster, isBoss]);

  const [phaseIdx, setPhaseIdx] = useState(0);
  const [monsterHp, setMonsterHp] = useState(phases[0]);
  const [playerHp, setPlayerHp] = useState(player.hp);
  const [queue, setQueue] = useState<Question[]>(() => shuffle(pools[0]));
  const [qPos, setQPos] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [phaseBanner, setPhaseBanner] = useState<number | null>(null);
  const [floats, setFloats] = useState<FloatingDmg[]>([]);
  const floatId = useRef(0);

  const hasQuill = player.items.includes("magicalQuill");
  const hasCompass = player.items.includes("ornateCompass");

  const question = queue.length > 0 ? queue[qPos % queue.length] : null;
  const options = useMemo<BattleOption[]>(
    () => (question ? prepareOptions(question, hasCompass) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question?.id, phaseIdx],
  );

  if (!monster || !question) return null;
  const region = REGIONS[monster.region];

  function addFloat(target: "monster" | "player", text: string, crit = false) {
    const id = ++floatId.current;
    setFloats((f) => [...f, { id, target, text, crit }]);
    window.setTimeout(
      () => setFloats((f) => f.filter((x) => x.id !== id)),
      900,
    );
  }

  function nextQuestion() {
    const next = qPos + 1;
    if (next >= queue.length) {
      setQueue(shuffle(pools[phaseIdx]));
      setQPos(0);
    } else {
      setQPos(next);
    }
  }

  function answer(opt: BattleOption) {
    if (feedback || !question) return;

    if (opt.isCorrect) {
      const atk = effectiveAtk(player);
      const crit = hasQuill && streak === 2;
      const dmg = crit ? atk * 2 : atk;
      const newHp = Math.max(0, monsterHp - dmg);
      addFloat("monster", `-${dmg}`, crit);
      setMonsterHp(newHp);
      setStreak(crit ? 0 : streak + 1);
      setFeedback({ type: "correct", crit });

      window.setTimeout(() => {
        if (newHp <= 0) {
          if (phaseIdx < phases.length - 1) {
            const next = phaseIdx + 1;
            setPhaseIdx(next);
            setMonsterHp(phases[next]);
            setQueue(shuffle(pools[next]));
            setQPos(0);
            setFeedback(null);
            setPhaseBanner(next + 1);
            window.setTimeout(() => setPhaseBanner(null), 1500);
          } else {
            dispatch({
              type: "BATTLE_WON",
              monsterId: monster.id,
              hpLeft: playerHp,
              droppedItem: rollDrop(player.items),
            });
          }
        } else {
          setFeedback(null);
          nextQuestion();
        }
      }, 900);
    } else {
      const dmg = damageTaken(player, monster.atk);
      const newHp = Math.max(0, playerHp - dmg);
      addFloat("player", `-${dmg}`);
      setPlayerHp(newHp);
      setStreak(0);
      setFeedback({
        type: "wrong",
        explanation: question.explanation,
        correctText: question.options[question.answerIndex],
        playerDead: newHp <= 0,
      });
    }
  }

  function continueAfterWrong() {
    if (feedback?.playerDead) {
      dispatch({ type: "BATTLE_LOST", monsterId: monster.id });
    } else {
      setFeedback(null);
      nextQuestion();
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${region.background}')` }}
    >
      <div className="flex min-h-screen flex-col bg-ink/70 p-4">
        {/* Banner fase boss */}
        {phaseBanner !== null && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-ink/60">
            <div className="animate-pop-in rounded-xl border-4 border-rust bg-parchment px-10 py-6 text-center shadow-2xl">
              <p className="text-3xl font-bold text-rust">
                FASE {phaseBanner}!
              </p>
              <p className="text-sm text-ink/70">
                Topik soal berganti | tetap fokus!
              </p>
            </div>
          </div>
        )}

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-4">
          {/* Panel monster */}
          <div className="relative mx-auto flex w-full max-w-xl flex-col items-center rounded-xl border-4 border-ink/70 bg-parchment/90 p-4 shadow-lg">
            <div className="flex w-full items-center justify-between">
              <span className="font-bold text-ink">
                {monster.name}
                {isBoss && (
                  <span className="ml-2 rounded bg-rust px-1.5 py-0.5 text-[10px] font-bold text-parchment">
                    FASE {phaseIdx + 1}/{phases.length}
                  </span>
                )}
              </span>
              <span className="text-xs text-ink/60">ATK {monster.atk}</span>
            </div>
            <div className="mt-1 w-full">
              <Bar
                label="HP Monster"
                value={monsterHp}
                max={phases[phaseIdx]}
                colorClass="bg-rust"
              />
            </div>
            <div className="relative mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={monster.sprite}
                alt={monster.name}
                className={`pixelated object-contain ${isBoss ? "h-44" : "h-36"} ${
                  feedback?.type === "correct" ? "animate-shake" : ""
                }`}
              />
              {floats
                .filter((f) => f.target === "monster")
                .map((f) => (
                  <span
                    key={f.id}
                    className={`animate-float-dmg absolute left-1/2 top-2 -translate-x-1/2 font-bold ${
                      f.crit ? "text-3xl text-rust" : "text-2xl text-ink"
                    }`}
                  >
                    {f.text}
                    {f.crit && " KRITIS!"}
                  </span>
                ))}
            </div>
          </div>

          {/* Panel player + soal */}
          <div className="mx-auto w-full max-w-2xl rounded-xl border-4 border-ink/70 bg-parchment p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/player.png"
                  alt={player.name}
                  className={`pixelated h-14 w-14 object-contain ${
                    feedback?.type === "wrong" ? "animate-shake" : ""
                  }`}
                />
                {floats
                  .filter((f) => f.target === "player")
                  .map((f) => (
                    <span
                      key={f.id}
                      className="animate-float-dmg absolute left-1/2 top-0 -translate-x-1/2 text-xl font-bold text-rust"
                    >
                      {f.text}
                    </span>
                  ))}
              </div>
              <div className="flex-1">
                <Bar
                  label={`${player.name} | HP`}
                  value={playerHp}
                  max={player.maxHp}
                  colorClass="bg-moss"
                />
              </div>
              {hasQuill && (
                <span
                  className="shrink-0 rounded border-2 border-ochre bg-parchment-dark px-2 py-1 text-xs font-bold text-ink"
                  title="Pena Kritis: 2 jawaban benar beruntun → jawaban ke-3 jadi Critical Hit"
                >
                  ✒ Combo {streak}/2
                </span>
              )}
            </div>

            <div className="mt-4 rounded-lg border-2 border-ink/30 bg-parchment-dark/50 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-rust">
                {isBoss ? `Soal Fase ${phaseIdx + 1}` : "Soal Grammar"}
                {hasCompass && (
                  <span className="ml-2 text-ochre">
                    🧭 1 opsi salah tersingkir
                  </span>
                )}
              </p>
              <p className="mt-1 text-lg font-medium leading-relaxed text-ink">
                {question.question}
              </p>
            </div>

            {feedback?.type === "wrong" ? (
              <div className="animate-pop-in mt-3 rounded-lg border-2 border-rust bg-rust/10 p-4">
                <p className="font-bold text-rust">
                  ✗ Salah! {monster.name} menyerang balik!
                </p>
                <p className="mt-1 text-sm text-ink">
                  Jawaban yang benar:{" "}
                  <span className="font-bold">{feedback.correctText}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">
                  {feedback.explanation}
                </p>
                <button
                  onClick={continueAfterWrong}
                  className="mt-3 w-full rounded border-2 border-ink bg-ochre px-4 py-2 font-bold text-ink hover:brightness-110"
                >
                  {feedback.playerDead ? "Kamu tumbang... ▸" : "Lanjut ▸"}
                </button>
              </div>
            ) : (
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {options.map((opt, i) => (
                  <button
                    key={`${question.id}-${i}`}
                    onClick={() => answer(opt)}
                    disabled={!!feedback}
                    className={`rounded-lg border-2 px-4 py-2.5 text-left font-medium transition ${
                      feedback?.type === "correct" && opt.isCorrect
                        ? "border-moss bg-moss text-parchment"
                        : "border-ink/50 bg-parchment text-ink hover:border-ochre hover:bg-parchment-dark/60"
                    } disabled:cursor-default`}
                  >
                    {String.fromCharCode(65 + i)}. {opt.text}
                  </button>
                ))}
              </div>
            )}

            {feedback?.type === "correct" && (
              <p className="mt-2 text-center font-bold text-moss">
                ✓ Benar!{feedback.crit ? " CRITICAL HIT | damage x2! ✒" : ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
