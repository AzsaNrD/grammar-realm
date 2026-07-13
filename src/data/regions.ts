import type { RegionDef, RegionId } from "@/lib/types";

export const REGIONS: Record<RegionId, RegionDef> = {
  region1: {
    id: "region1",
    name: "Wilayah 1 | Hutan Awal",
    topic: "Sentences with One & Multiple Clauses (Connectors)",
    recommendedLevel: "Rekomendasi: Lv 1+",
    background: "/assets/region-1.jpg",
    monsterIds: ["snakeMonster", "spiritMonster"],
    hasGuildHall: false,
  },
  region2: {
    id: "region2",
    name: "Wilayah 2 | Reruntuhan",
    topic: "Reduced Clauses & Inversion",
    recommendedLevel: "Rekomendasi: Lv 3+",
    background: "/assets/region-2.jpg",
    monsterIds: ["wraithMonster", "golemMonster"],
    hasGuildHall: false,
  },
  region3: {
    id: "region3",
    name: "Wilayah 3 | Kota",
    topic: "Subject-Verb Agreement & Parallel Structure",
    recommendedLevel: "Rekomendasi: Lv 5+",
    background: "/assets/region-3.jpg",
    monsterIds: ["blobMonster", "armoredGolem"],
    hasGuildHall: true,
  },
  regionFinal: {
    id: "regionFinal",
    name: "Puncak | Zona Final Boss",
    topic: "Nouns, Pronouns & Word Choice + Semua Materi",
    recommendedLevel: "Rekomendasi: Lv 8+",
    background: "/assets/region-final.jpg",
    monsterIds: ["finalBoss"],
    hasGuildHall: false,
  },
};

export const REGION_ORDER: RegionId[] = [
  "region1",
  "region2",
  "region3",
  "regionFinal",
];
