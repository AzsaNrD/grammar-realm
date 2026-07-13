import type { ItemDef } from "@/lib/types";

/** Diurutkan dari drop chance terbesar; roll drop mengecek satu per satu. */
export const ITEMS: ItemDef[] = [
  {
    id: "ancientScroll",
    name: "Gulungan Leluhur",
    sprite: "/assets/ancient-scroll.png",
    description: "+10% Fame/EXP dari setiap battle yang dimenangkan.",
    dropChance: 0.08,
  },
  {
    id: "magicalQuill",
    name: "Pena Kritis",
    sprite: "/assets/magical-quill.png",
    description:
      "Setelah 2 jawaban benar berturut-turut, jawaban benar ke-3 otomatis jadi Critical Hit (damage x2).",
    dropChance: 0.05,
  },
  {
    id: "glowingCrystal",
    name: "Kristal Pelindung",
    sprite: "/assets/glowing-crystal.png",
    description: "Mengurangi damage balasan monster (saat jawaban salah) sebesar 25%.",
    dropChance: 0.04,
  },
  {
    id: "ornateCompass",
    name: "Kompas Petunjuk",
    sprite: "/assets/ornate-compass.png",
    description: "Di setiap soal battle, 1 opsi jawaban salah otomatis tersingkir (hint 50:50).",
    dropChance: 0.03,
  },
  {
    id: "glowingWand",
    name: "Tongkat Kekuatan",
    sprite: "/assets/glowing-wand.png",
    description: "ATK dasar permanen naik +20%.",
    dropChance: 0.02,
  },
];

export const ITEM_MAP: Record<string, ItemDef> = Object.fromEntries(
  ITEMS.map((item) => [item.id, item])
);
