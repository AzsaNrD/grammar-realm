"use client";

import { useGame } from "@/context/GameContext";
import { ITEM_MAP } from "@/data/items";
import { effectiveAtk } from "@/lib/utils";
import Bar from "./Bar";

export default function StatusPanel() {
  const { state } = useGame();
  const p = state.player;
  const atk = effectiveAtk(p);

  return (
    <div className="flex w-full max-w-3xl items-center gap-4 rounded-lg border-4 border-ink/70 bg-parchment/95 p-3 shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/player.png"
        alt={p.name}
        className="pixelated h-16 w-16 shrink-0 object-contain"
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="truncate font-bold text-ink">{p.name}</span>
          <span className="rounded bg-ink px-2 py-0.5 text-xs font-bold text-parchment">
            Lv {p.level}
          </span>
          <span className="text-sm font-bold text-rust">
            ⚔ ATK {atk}
            {p.items.includes("glowingWand") && (
              <span className="text-xs text-ochre"> (+20%)</span>
            )}
          </span>
          <span className="text-sm font-bold text-ochre">✦ Fame {p.fame}</span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-3">
          <Bar label="HP" value={p.hp} max={p.maxHp} colorClass="bg-moss" />
          <Bar label="EXP" value={p.exp} max={p.maxExp} colorClass="bg-ochre" />
        </div>
      </div>
      {p.items.length > 0 && (
        <div className="flex shrink-0 gap-1.5">
          {p.items.map((id) => {
            const item = ITEM_MAP[id];
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={id}
                src={item.sprite}
                alt={item.name}
                title={`${item.name} | ${item.description}`}
                className="pixelated h-9 w-9 rounded border-2 border-ochre bg-parchment-dark object-contain p-0.5"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
