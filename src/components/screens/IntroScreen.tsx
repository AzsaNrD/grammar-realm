"use client";

import { useState } from "react";
import { useGame } from "@/context/GameContext";
import { INTRO_TEXT } from "@/data/dialogues";
import AboutButton from "@/components/AboutButton";

export default function IntroScreen() {
  const { dispatch } = useGame();
  const [name, setName] = useState("");

  function start() {
    dispatch({ type: "START_GAME", name });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink p-4">
      <div className="animate-pop-in w-full max-w-xl rounded-xl border-4 border-ochre bg-parchment p-8 text-center shadow-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-rust">
          TOEFL Grammar RPG
        </p>
        <h1 className="mt-1 text-5xl font-bold tracking-wide text-ink">
          Grammar Realm
        </h1>
        <p className="mt-1 text-sm italic text-ink/60">
          Kalahkan monster dengan jawaban grammar yang tepat, dan raih gelar
          Grand Scholar!
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/player.png"
          alt="Karakter pemain"
          className="pixelated mx-auto mt-6 h-32 w-32 object-contain"
        />

        <div className="mt-6 rounded-lg border-2 border-ink/30 bg-parchment-dark/60 p-4 text-left">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-rust">
            ✦ Catatan dari Guide
          </p>
          <p className="leading-relaxed text-ink">{INTRO_TEXT}</p>
        </div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && start()}
          placeholder="Tulis nama kamu di sini..."
          maxLength={20}
          className="mt-5 w-full rounded border-2 border-ink bg-parchment px-4 py-2.5 text-center text-lg text-ink outline-none placeholder:text-ink/40 focus:border-ochre"
        />
        <button
          onClick={start}
          className="mt-4 w-full rounded-lg border-2 border-ink bg-moss px-6 py-3 text-lg font-bold text-parchment shadow hover:brightness-110"
        >
          ⚔ Mulai Petualangan
        </button>

        <div className="mt-4">
          <AboutButton />
        </div>
      </div>
    </div>
  );
}
