"use client";

import { useEffect, useRef, useState } from "react";
import { useGame } from "@/context/GameContext";

const TRACKS = {
  /** Journey of a Lifetime ~ Frieren Main Theme | lobby/eksplorasi */
  lobby: "/audio/bgm-lobby.mp3",
  /** Knife to the Throat | battle */
  battle: "/audio/bgm-battle.mp3",
} as const;

/**
 * Pemutar BGM global: musik battle saat layar battle, musik lobby di layar
 * lainnya. Looping otomatis. Browser memblokir autoplay sebelum ada interaksi,
 * jadi musik juga dicoba dimulai lagi pada klik/ketikan pertama.
 */
export default function BgmPlayer() {
  const { state } = useGame();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  const track = state.screen === "battle" ? TRACKS.battle : TRACKS.lobby;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    if (muted) {
      audio.pause();
      return;
    }

    const tryPlay = () => {
      audioRef.current?.play().catch(() => {
        /* autoplay diblokir | akan dicoba lagi saat interaksi pertama */
      });
    };
    tryPlay();
    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("keydown", tryPlay);
    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, [track, muted]);

  return (
    <>
      <audio ref={audioRef} src={track} loop preload="auto" />
      <button
        onClick={() => setMuted((m) => !m)}
        title={muted ? "Nyalakan musik" : "Matikan musik"}
        className="fixed bottom-3 right-3 z-[60] flex h-10 w-10 items-center justify-center rounded-full border-2 border-ochre bg-ink/80 text-lg shadow-lg hover:brightness-125"
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
}
