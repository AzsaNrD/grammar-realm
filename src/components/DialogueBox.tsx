"use client";

import { useEffect, useState } from "react";
import { useGame } from "@/context/GameContext";

/** Dialog Guide | murni teks bergaya catatan/pesan, tanpa portrait. */
export default function DialogueBox() {
  const { state, dispatch } = useGame();
  const [lineIdx, setLineIdx] = useState(0);
  const dialogue = state.dialogue;

  useEffect(() => {
    setLineIdx(0);
  }, [dialogue?.id]);

  if (!dialogue) return null;
  const isLast = lineIdx >= dialogue.lines.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 pb-12">
      <div className="animate-pop-in w-full max-w-2xl rounded-lg border-4 border-ink/80 bg-parchment p-5 shadow-2xl">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rust">
          <span>✦ Catatan dari Guide</span>
          <span className="text-ink/40">
            ({lineIdx + 1}/{dialogue.lines.length})
          </span>
        </div>
        <p className="min-h-16 text-lg leading-relaxed text-ink">
          {dialogue.lines[lineIdx]}
        </p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() =>
              isLast
                ? dispatch({ type: "DISMISS_DIALOGUE" })
                : setLineIdx(lineIdx + 1)
            }
            className="rounded border-2 border-ink bg-ochre px-6 py-1.5 font-bold text-ink shadow hover:brightness-110"
          >
            {isLast ? "Oke!" : "Lanjut ▸"}
          </button>
        </div>
      </div>
    </div>
  );
}
