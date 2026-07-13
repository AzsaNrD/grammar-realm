"use client";

import { useGame } from "@/context/GameContext";
import { REGIONS } from "@/data/regions";
import { MONSTERS } from "@/data/monsters";
import StatusPanel from "@/components/StatusPanel";

const TIER_LABEL: Record<string, string> = {
  basic: "Biasa",
  elite: "Elite",
  boss: "FINAL BOSS",
};

export default function RegionScreen() {
  const { state, dispatch } = useGame();
  const region = state.currentRegion ? REGIONS[state.currentRegion] : null;
  if (!region) return null;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${region.background}')` }}
    >
      <div className="min-h-screen bg-ink/60 p-4 md:p-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5">
          <header className="flex w-full max-w-3xl items-center justify-between gap-3">
            <button
              onClick={() => dispatch({ type: "GO_MAP" })}
              className="rounded border-2 border-parchment/60 bg-ink/70 px-4 py-1.5 text-sm font-bold text-parchment hover:bg-ink"
            >
              ◂ Peta Dunia
            </button>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-parchment">
                {region.name}
              </h1>
              <p className="text-xs italic text-parchment/70">{region.topic}</p>
            </div>
          </header>

          <StatusPanel />

          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {region.monsterIds.map((id) => {
              const monster = MONSTERS[id];
              const isBoss = monster.tier === "boss";
              return (
                <div
                  key={id}
                  className={`flex flex-col items-center rounded-xl border-4 bg-parchment/95 p-4 shadow-lg ${
                    isBoss
                      ? "border-rust sm:col-span-2"
                      : monster.tier === "elite"
                        ? "border-ochre"
                        : "border-ink/60"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={monster.sprite}
                    alt={monster.name}
                    className={`pixelated object-contain ${isBoss ? "h-40" : "h-28"}`}
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <h2 className="text-lg font-bold text-ink">
                      {monster.name}
                    </h2>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        isBoss
                          ? "bg-rust text-parchment"
                          : monster.tier === "elite"
                            ? "bg-ochre text-ink"
                            : "bg-ink/70 text-parchment"
                      }`}
                    >
                      {TIER_LABEL[monster.tier]}
                    </span>
                  </div>
                  <p className="text-xs text-ink/70">
                    HP {monster.hp} · ATK {monster.atk} · ✦ Fame{" "}
                    {monster.fameReward}
                    {isBoss && " · 3 Fase"}
                  </p>
                  <button
                    onClick={() =>
                      dispatch({ type: "START_BATTLE", monsterId: id })
                    }
                    className={`mt-3 w-full rounded-lg border-2 border-ink px-4 py-2 font-bold shadow hover:brightness-110 ${
                      isBoss
                        ? "bg-rust text-parchment"
                        : "bg-moss text-parchment"
                    }`}
                  >
                    ⚔ {isBoss ? "Tantang Final Boss" : "Lawan"}
                  </button>
                </div>
              );
            })}

            {region.hasGuildHall && (
              <div className="flex flex-col items-center rounded-xl border-4 border-ochre bg-parchment/95 p-4 shadow-lg sm:col-span-2">
                <div className="text-5xl">🏛</div>
                <h2 className="mt-1 text-lg font-bold text-ink">Guild Hall</h2>
                <p className="text-center text-xs text-ink/70">
                  Ujian Guild: 10 soal acak dari materi yang sudah kamu temui.
                  Benar minimal 8 → langsung naik 1 level!
                </p>
                {state.player.guildCooldown ? (
                  <p className="mt-3 rounded border-2 border-rust bg-rust/10 px-4 py-2 text-center text-sm font-bold text-rust">
                    🔒 Terkunci | menangkan 1 battle dulu di wilayah manapun
                    sebelum mencoba lagi.
                  </p>
                ) : (
                  <button
                    onClick={() => dispatch({ type: "OPEN_GUILD" })}
                    className="mt-3 w-full rounded-lg border-2 border-ink bg-ochre px-4 py-2 font-bold text-ink shadow hover:brightness-110 sm:w-auto sm:px-10"
                  >
                    📜 Ikuti Ujian Guild
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
