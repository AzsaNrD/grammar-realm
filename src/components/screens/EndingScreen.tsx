"use client";

import { useGame } from "@/context/GameContext";
import { ITEM_MAP } from "@/data/items";

export default function EndingScreen() {
  const { state, dispatch } = useGame();
  const p = state.player;

  function newGame() {
    if (
      window.confirm(
        "Mulai petualangan baru dari awal? Progress saat ini akan dihapus."
      )
    ) {
      dispatch({ type: "RESET" });
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/region-final.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center bg-ink/75 p-4">
        <div className="animate-pop-in w-full max-w-xl rounded-xl border-4 border-gold bg-parchment p-8 text-center shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-rust">
            Tamat
          </p>
          <h1 className="mt-1 text-4xl font-bold text-ink">🎓 GRAND SCHOLAR</h1>
          <p className="mt-2 text-lg text-ink">
            <span className="font-bold">{p.name}</span> telah menaklukkan
            seluruh Grammar Realm!
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/player.png"
            alt={p.name}
            className="pixelated mx-auto mt-4 h-28 w-28 object-contain"
          />

          <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-3">
            <div className="rounded-lg border-2 border-ink/40 bg-parchment-dark/60 p-3">
              <p className="text-2xl font-bold text-ink">Lv {p.level}</p>
              <p className="text-xs text-ink/60">Level Akhir</p>
            </div>
            <div className="rounded-lg border-2 border-ink/40 bg-parchment-dark/60 p-3">
              <p className="text-2xl font-bold text-ochre">✦ {p.fame}</p>
              <p className="text-xs text-ink/60">Total Fame</p>
            </div>
            <div className="rounded-lg border-2 border-ink/40 bg-parchment-dark/60 p-3">
              <p className="text-2xl font-bold text-rust">{p.items.length}/5</p>
              <p className="text-xs text-ink/60">Item Langka</p>
            </div>
          </div>

          {p.items.length > 0 && (
            <div className="mt-4 flex justify-center gap-2">
              {p.items.map((id) => {
                const item = ITEM_MAP[id];
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={id}
                    src={item.sprite}
                    alt={item.name}
                    title={item.name}
                    className="pixelated h-12 w-12 rounded border-2 border-ochre bg-parchment-dark object-contain p-1"
                  />
                );
              })}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => dispatch({ type: "GO_MAP" })}
              className="flex-1 rounded-lg border-2 border-ink bg-moss px-6 py-3 font-bold text-parchment shadow hover:brightness-110"
            >
              🗺 Jelajah Lagi
            </button>
            <button
              onClick={newGame}
              className="flex-1 rounded-lg border-2 border-ink bg-rust px-6 py-3 font-bold text-parchment shadow hover:brightness-110"
            >
              ↻ Petualangan Baru
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
