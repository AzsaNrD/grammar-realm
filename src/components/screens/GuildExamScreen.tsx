"use client";

import { useMemo, useState } from "react";
import { useGame } from "@/context/GameContext";
import { QUESTION_BANK } from "@/data/questions";
import { prepareOptions, shuffle, type BattleOption } from "@/lib/utils";
import type { WrongAnswer } from "@/lib/types";

const TOTAL = 10;

export default function GuildExamScreen() {
  const { state, dispatch } = useGame();
  const player = state.player;

  // Pool: gabungan soal guildExam dari semua wilayah yang sudah dikunjungi,
  // diacak Fisher-Yates, ambil 10 tanpa pengulangan dalam 1 attempt.
  const questions = useMemo(() => {
    const regions =
      player.visitedRegions.length > 0
        ? player.visitedRegions
        : (["region1"] as const);
    const pool = regions.flatMap((r) => QUESTION_BANK[r].guildExam);
    return shuffle(pool).slice(0, TOTAL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);

  const question = questions[idx];
  const options = useMemo<BattleOption[]>(
    () => (question ? prepareOptions(question, false) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question?.id],
  );

  if (!question) return null;

  function answer(opt: BattleOption) {
    if (flash) return;
    const correct = opt.isCorrect;
    const newResults = [...results, correct];
    const newWrong = correct
      ? wrongAnswers
      : [...wrongAnswers, { question, chosenText: opt.text }];
    setResults(newResults);
    setWrongAnswers(newWrong);
    setFlash(correct ? "correct" : "wrong");

    window.setTimeout(() => {
      if (idx + 1 >= questions.length) {
        dispatch({
          type: "GUILD_FINISHED",
          score: newResults.filter(Boolean).length,
          wrongAnswers: newWrong,
        });
      } else {
        setFlash(null);
        setIdx(idx + 1);
      }
    }, 700);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/region-3.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center bg-ink/75 p-4">
        <div className="w-full max-w-2xl rounded-xl border-4 border-ochre bg-parchment p-6 shadow-2xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-rust">
              🏛 Guild Hall
            </p>
            <h1 className="text-2xl font-bold text-ink">Ujian Guild</h1>
            <p className="text-xs italic text-ink/60">
              Jawab benar minimal 8 dari {TOTAL} soal untuk langsung naik level!
            </p>
          </div>

          {/* Progress 10 soal */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <span
                key={i}
                className={`h-3.5 w-3.5 rounded-full border-2 border-ink/60 ${
                  i < results.length
                    ? results[i]
                      ? "bg-moss"
                      : "bg-rust"
                    : i === idx
                      ? "bg-ochre"
                      : "bg-parchment-deep/50"
                }`}
              />
            ))}
          </div>
          <p className="mt-1 text-center text-xs font-bold text-ink/60">
            Soal {idx + 1}/{TOTAL}
          </p>

          <div className="mt-4 rounded-lg border-2 border-ink/30 bg-parchment-dark/50 p-4">
            <p className="text-lg font-medium leading-relaxed text-ink">
              {question.question}
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {options.map((opt, i) => (
              <button
                key={`${question.id}-${i}`}
                onClick={() => answer(opt)}
                disabled={!!flash}
                className={`rounded-lg border-2 px-4 py-2.5 text-left font-medium transition ${
                  flash && opt.isCorrect
                    ? "border-moss bg-moss text-parchment"
                    : flash === "wrong" && !opt.isCorrect
                      ? "border-ink/30 bg-parchment text-ink/50"
                      : "border-ink/50 bg-parchment text-ink hover:border-ochre hover:bg-parchment-dark/60"
                } disabled:cursor-default`}
              >
                {String.fromCharCode(65 + i)}. {opt.text}
              </button>
            ))}
          </div>

          {flash && (
            <p
              className={`mt-3 text-center font-bold ${
                flash === "correct" ? "text-moss" : "text-rust"
              }`}
            >
              {flash === "correct"
                ? "✓ Benar!"
                : "✗ Salah | pembahasan ada di akhir ujian."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
