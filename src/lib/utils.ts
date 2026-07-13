import type { ItemId, PlayerState, Question } from "./types";
import { ITEMS } from "@/data/items";

/** Fisher-Yates shuffle | mengembalikan array baru tanpa mengubah aslinya. */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** ATK efektif | Tongkat Kekuatan menambah 20%. */
export function effectiveAtk(player: PlayerState): number {
  return player.items.includes("glowingWand")
    ? Math.round(player.atk * 1.2)
    : player.atk;
}

/** Fame setelah bonus Gulungan Leluhur (+10%). */
export function fameWithBonus(player: PlayerState, baseFame: number): number {
  return player.items.includes("ancientScroll")
    ? Math.round(baseFame * 1.1)
    : baseFame;
}

/** Damage yang diterima player | Kristal Pelindung mengurangi 25%. */
export function damageTaken(player: PlayerState, monsterAtk: number): number {
  return player.items.includes("glowingCrystal")
    ? Math.round(monsterAtk * 0.75)
    : monsterAtk;
}

/**
 * Roll drop item setelah menang battle. Hanya item yang belum dimiliki yang
 * ikut di-roll; maksimal 1 item per battle.
 */
export function rollDrop(owned: ItemId[]): ItemId | null {
  for (const item of ITEMS) {
    if (owned.includes(item.id)) continue;
    if (Math.random() < item.dropChance) return item.id;
  }
  return null;
}

export interface BattleOption {
  text: string;
  isCorrect: boolean;
}

/**
 * Siapkan opsi jawaban untuk ditampilkan: acak urutannya, dan kalau player
 * punya Kompas Petunjuk, buang satu opsi salah secara acak (hint 50:50).
 */
export function prepareOptions(
  q: Question,
  hasCompass: boolean,
): BattleOption[] {
  let opts: BattleOption[] = q.options.map((text, i) => ({
    text,
    isCorrect: i === q.answerIndex,
  }));
  if (hasCompass) {
    const wrong = opts.filter((o) => !o.isCorrect);
    const removed = wrong[Math.floor(Math.random() * wrong.length)];
    opts = opts.filter((o) => o !== removed);
  }
  return shuffle(opts);
}
