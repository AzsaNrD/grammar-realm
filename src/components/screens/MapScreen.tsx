"use client";

import { useGame } from "@/context/GameContext";
import { REGIONS, REGION_ORDER } from "@/data/regions";
import StatusPanel from "@/components/StatusPanel";
import AboutButton from "@/components/AboutButton";

export default function MapScreen() {
  const { state, dispatch } = useGame();

  function resetGame() {
    if (
      window.confirm(
        "Mulai ulang dari awal? Semua progress (level, item, fame) akan dihapus.",
      )
    ) {
      dispatch({ type: "RESET" });
    }
  }

  return (
    <div className="min-h-screen bg-ink p-4 md:p-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-wide text-parchment">
            Grammar Realm
          </h1>
          <p className="text-sm italic text-parchment/60">
            Peta Dunia | semua wilayah terbuka, pilih tujuanmu dengan bijak
          </p>
        </header>

        <StatusPanel />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {REGION_ORDER.map((id) => {
            const region = REGIONS[id];
            const visited = state.player.visitedRegions.includes(id);
            const isFinal = id === "regionFinal";
            return (
              <button
                key={id}
                onClick={() => dispatch({ type: "ENTER_REGION", region: id })}
                className={`group relative h-48 overflow-hidden rounded-xl border-4 text-left shadow-lg transition hover:scale-[1.02] ${
                  isFinal ? "border-rust" : "border-ochre"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
                  style={{ backgroundImage: `url('${region.background}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 w-full p-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-parchment">
                      {region.name}
                    </h2>
                    {visited && (
                      <span className="rounded bg-moss px-1.5 py-0.5 text-[10px] font-bold text-parchment">
                        ✓ Pernah dikunjungi
                      </span>
                    )}
                    {isFinal && state.player.defeatedFinalBoss && (
                      <span className="rounded bg-ochre px-1.5 py-0.5 text-[10px] font-bold text-ink">
                        👑 Ditaklukkan
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-parchment/80">{region.topic}</p>
                  <p className="mt-1 text-xs font-bold text-ochre">
                    {region.recommendedLevel}
                    {region.hasGuildHall && " · 🏛 Guild Hall"}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-5">
          <AboutButton light />
          <button
            onClick={resetGame}
            className="text-xs text-parchment/40 underline hover:text-rust"
          >
            Mulai ulang dari awal
          </button>
        </div>
      </div>
    </div>
  );
}
