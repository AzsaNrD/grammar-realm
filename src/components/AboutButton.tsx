"use client";

import { useState } from "react";

/** Tombol "Tentang" + modal info projek UAS. Dipakai di IntroScreen dan MapScreen. */
export default function AboutButton({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`text-xs underline hover:text-ochre ${
          light ? "text-parchment/40" : "text-ink/50"
        }`}
      >
        ℹ Tentang projek ini
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="animate-pop-in w-full max-w-md rounded-xl border-4 border-ochre bg-parchment p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-rust">
              Tentang
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Grammar Realm</h2>
            <p className="mt-1 text-sm italic text-ink/60">
              Web game edukasi 2D RPG | belajar grammar TOEFL sambil bertualang.
            </p>

            <div className="mt-4 space-y-2 rounded-lg border-2 border-ink/30 bg-parchment-dark/50 p-4 text-left text-sm text-ink">
              <p>
                <span className="font-bold">Projek:</span> UAS Mata Kuliah
                Bahasa Inggris Bisnis 2
              </p>
              <p>
                <span className="font-bold">Dosen:</span> Nuri Adlina
              </p>
              <p>
                <span className="font-bold">Kelas:</span> 4KA17 | Angkatan 2022
              </p>
              <p>
                <span className="font-bold">Teknologi:</span> Next.js,
                TypeScript, Tailwind CSS
              </p>
            </div>

            <p className="mt-3 text-xs text-ink/50">
              Materi: Sentence Structure | Clauses & Connectors, Reduced
              Clauses, Inversion, Subject-Verb Agreement, Parallel Structure,
              Nouns/Pronouns/Word Choice.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-lg border-2 border-ink bg-moss px-6 py-2 font-bold text-parchment shadow hover:brightness-110"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
}
