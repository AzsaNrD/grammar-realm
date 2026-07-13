"use client";

import { useGame } from "@/context/GameContext";
import { ITEM_MAP } from "@/data/items";

export default function ResultScreen() {
  const { state, dispatch } = useGame();
  const result = state.lastResult;
  if (!result) return null;

  const isWin = result.kind === "battleWin";
  const isLose = result.kind === "battleLose";
  const isPass = result.kind === "guildPass";
  const isFail = result.kind === "guildFail";
  const droppedItem =
    isWin && result.droppedItem ? ITEM_MAP[result.droppedItem] : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink p-4">
      <div className="animate-pop-in w-full max-w-xl rounded-xl border-4 border-ochre bg-parchment p-6 text-center shadow-2xl">
        {isWin && (
          <>
            <h1 className="text-4xl font-bold text-moss">
              {result.isFinalBoss ? "👑 BOSS TUMBANG!" : "⚔ KEMENANGAN!"}
            </h1>
            <p className="mt-2 text-ink">
              {result.monsterName} berhasil dikalahkan!
            </p>
            <p className="mt-1 text-lg font-bold text-ochre">
              +{result.fameGained} Fame (EXP)
            </p>
          </>
        )}

        {isLose && (
          <>
            <h1 className="text-4xl font-bold text-rust">☠ KALAH...</h1>
            <p className="mt-2 text-ink">
              {result.monsterName} terlalu kuat kali ini.
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Kamu dibawa kembali ke Kota. HP dipulihkan penuh | item dan EXP
              tidak hilang. Latihan dulu, terus coba lagi!
            </p>
          </>
        )}

        {(isPass || isFail) && (
          <>
            <h1
              className={`text-4xl font-bold ${isPass ? "text-moss" : "text-rust"}`}
            >
              {isPass ? "📜 LULUS UJIAN GUILD!" : "📜 BELUM LULUS"}
            </h1>
            <p className="mt-2 text-2xl font-bold text-ink">
              Skor: {result.score}/10
            </p>
            <p className="text-xs text-ink/60">Syarat lulus: minimal 8 benar</p>
          </>
        )}

        {result.levelsGained > 0 && (
          <div className="animate-pop-in mx-auto mt-4 max-w-xs rounded-lg border-4 border-ochre bg-ink px-6 py-3">
            <p className="text-2xl font-bold tracking-widest text-gold">
              ★ LEVEL UP! ★
            </p>
            <p className="text-sm text-parchment">
              Sekarang Lv {state.player.level} | +20 Max HP, +3 ATK, HP pulih
              penuh!
            </p>
          </div>
        )}

        {droppedItem && (
          <div className="animate-pop-in mx-auto mt-4 flex max-w-sm items-center gap-3 rounded-lg border-2 border-ochre bg-parchment-dark/60 p-3 text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={droppedItem.sprite}
              alt={droppedItem.name}
              className="pixelated h-14 w-14 shrink-0 object-contain"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-rust">
                ✨ Item Langka Ditemukan!
              </p>
              <p className="font-bold text-ink">{droppedItem.name}</p>
              <p className="text-xs text-ink/70">{droppedItem.description}</p>
            </div>
          </div>
        )}

        {isFail && (
          <>
            <p className="mt-3 rounded border-2 border-rust bg-rust/10 px-3 py-2 text-sm font-bold text-rust">
              🔒 Guild Hall terkunci | menangkan 1 battle dulu sebelum mencoba
              lagi.
            </p>
            {result.wrongAnswers.length > 0 && (
              <div className="mt-4 max-h-64 space-y-3 overflow-y-auto rounded-lg border-2 border-ink/30 bg-parchment-dark/40 p-3 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-rust">
                  Pembahasan soal yang salah:
                </p>
                {result.wrongAnswers.map(({ question, chosenText }) => (
                  <div
                    key={question.id}
                    className="border-b border-ink/20 pb-2 last:border-b-0"
                  >
                    <p className="text-sm font-medium text-ink">
                      {question.question}
                    </p>
                    <p className="text-xs text-rust">
                      Jawabanmu: {chosenText} ✗ · Benar:{" "}
                      {question.options[question.answerIndex]} ✓
                    </p>
                    <p className="text-xs text-ink/70">
                      {question.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <button
          onClick={() => dispatch({ type: "RESULT_CONTINUE" })}
          className="mt-6 w-full rounded-lg border-2 border-ink bg-moss px-6 py-3 text-lg font-bold text-parchment shadow hover:brightness-110"
        >
          {isWin && result.isFinalBoss
            ? "🎓 Lihat Ending ▸"
            : isLose
              ? "Kembali ke Kota ▸"
              : "Lanjut ▸"}
        </button>
      </div>
    </div>
  );
}
