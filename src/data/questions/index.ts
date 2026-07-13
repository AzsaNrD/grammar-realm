import type { Question, RegionId } from "@/lib/types";
import {
  REGION1_BATTLE_BASIC,
  REGION1_BATTLE_ELITE,
  REGION1_GUILD,
} from "./region1";
import {
  REGION2_BATTLE_BASIC,
  REGION2_BATTLE_ELITE,
  REGION2_GUILD,
} from "./region2";
import {
  REGION3_BATTLE_BASIC,
  REGION3_BATTLE_ELITE,
  REGION3_GUILD,
} from "./region3";
import { FINAL_BOSS_QUESTIONS, FINAL_GUILD } from "./regionFinal";

export interface RegionQuestionBank {
  battle: {
    basic: Question[];
    elite: Question[];
  };
  guildExam: Question[];
}

export const QUESTION_BANK: Record<RegionId, RegionQuestionBank> = {
  region1: {
    battle: { basic: REGION1_BATTLE_BASIC, elite: REGION1_BATTLE_ELITE },
    guildExam: REGION1_GUILD,
  },
  region2: {
    battle: { basic: REGION2_BATTLE_BASIC, elite: REGION2_BATTLE_ELITE },
    guildExam: REGION2_GUILD,
  },
  region3: {
    battle: { basic: REGION3_BATTLE_BASIC, elite: REGION3_BATTLE_ELITE },
    guildExam: REGION3_GUILD,
  },
  regionFinal: {
    battle: { basic: FINAL_BOSS_QUESTIONS, elite: FINAL_BOSS_QUESTIONS },
    guildExam: FINAL_GUILD,
  },
};

/** Pool soal tiap fase Final Boss | fase 1: materi Wilayah 1, fase 2: Wilayah 2+3, fase 3: materi Puncak. */
export const BOSS_PHASE_POOLS: Question[][] = [
  [...REGION1_BATTLE_BASIC, ...REGION1_BATTLE_ELITE],
  [
    ...REGION2_BATTLE_BASIC,
    ...REGION2_BATTLE_ELITE,
    ...REGION3_BATTLE_BASIC,
    ...REGION3_BATTLE_ELITE,
  ],
  FINAL_BOSS_QUESTIONS,
];
