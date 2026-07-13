import type { Question } from "@/lib/types";

// Zona Final Boss | Puncak: Nouns, Pronouns & Word Choice + gabungan seluruh materi
// Catatan: answerIndex selalu 0 di data; urutan opsi diacak otomatis saat ditampilkan.

export const FINAL_BOSS_QUESTIONS: Question[] = [
  {
    id: "wfb01",
    question: "The company changed _____ marketing policy last month.",
    options: ["its", "it's", "their", "theirs"],
    answerIndex: 0,
    explanation:
      "'Company' itu singular, jadi kata ganti miliknya 'its' (tanpa apostrof). 'It's' = 'it is'.",
  },
  {
    id: "wfb02",
    question: "Everyone must submit _____ report by Friday.",
    options: ["his or her", "them", "its", "ours"],
    answerIndex: 0,
    explanation:
      "'Everyone' singular, jadi dalam bahasa formal/TOEFL kata gantinya 'his or her', bukan 'them'.",
  },
  {
    id: "wfb03",
    question: "She gave the confidential files to my colleague and _____.",
    options: ["me", "I", "myself", "mine"],
    answerIndex: 0,
    explanation:
      "Setelah preposisi 'to', pakai object pronoun 'me'. Tes cepat: hapus 'my colleague and' | 'she gave the files to me' ✔.",
  },
  {
    id: "wfb04",
    question:
      "The new regulation will _____ all small businesses in the region.",
    options: ["affect", "effect", "affection", "effective"],
    answerIndex: 0,
    explanation:
      "'Affect' adalah verb (memengaruhi); 'effect' umumnya noun (dampak). Di sini butuh verb setelah 'will'.",
  },
  {
    id: "wfb05",
    question: "A large _____ of people attended the graduation ceremony.",
    options: ["number", "amount", "deal", "sum"],
    answerIndex: 0,
    explanation:
      "'Number' untuk benda yang bisa dihitung (people); 'amount' hanya untuk uncountable noun.",
  },
  {
    id: "wfb06",
    question: "The children enjoyed _____ at the beach all day.",
    options: ["themselves", "theirselves", "themself", "them"],
    answerIndex: 0,
    explanation:
      "Reflexive pronoun yang benar untuk 'they' adalah 'themselves'. 'Theirselves' tidak ada dalam bahasa Inggris.",
  },
  {
    id: "wfb07",
    question: "_____ who arrive early will get the best seats.",
    options: ["Those", "Them", "This", "That"],
    answerIndex: 0,
    explanation:
      "'Those who...' = 'orang-orang yang...'. 'Them' tidak bisa jadi subjek kalimat.",
  },
  {
    id: "wfb08",
    question: "The advice she gave me _____ very helpful.",
    options: ["was", "were", "are", "have been"],
    answerIndex: 0,
    explanation:
      "'Advice' adalah uncountable noun → selalu singular: 'was'. (Gabungan materi subject-verb agreement.)",
  },
  {
    id: "wfb09",
    question: "_____ in the 19th century, this bridge is still in use today.",
    options: ["Built", "Building", "To build", "It was built"],
    answerIndex: 0,
    explanation:
      "Reduced clause pasif: jembatan itu DIBANGUN → 'Built in the 19th century'. (Gabungan materi reduced clause.)",
  },
  {
    id: "wfb10",
    question: "Rarely _____ a student with such extraordinary talent.",
    options: ["do we meet", "we meet", "we do meet", "met we"],
    answerIndex: 0,
    explanation:
      "'Rarely' di awal kalimat memicu inversion: 'do we meet'. (Gabungan materi inversion.)",
  },
  {
    id: "wfb11",
    question:
      "He is one of the students who _____ chosen for the exchange program.",
    options: ["were", "was", "is", "has been"],
    answerIndex: 0,
    explanation:
      "'Who' merujuk ke 'the students' (plural), bukan 'one' → 'were chosen'. Jebakan klasik TOEFL!",
  },
  {
    id: "wfb12",
    question: "The team celebrated _____ championship victory with the fans.",
    options: ["its", "it's", "they", "them"],
    answerIndex: 0,
    explanation:
      "'Team' (collective noun) dianggap singular → possessive-nya 'its'. 'It's' = 'it is', bukan kepemilikan.",
  },
];

export const FINAL_GUILD: Question[] = [
  {
    id: "wfg01",
    question: "My car is too old, so I want to buy a new _____.",
    options: ["one", "it", "this", "ones"],
    answerIndex: 0,
    explanation:
      "'One' menggantikan singular countable noun ('car') supaya tidak mengulang kata yang sama.",
  },
  {
    id: "wfg02",
    question: "The dog wagged _____ tail happily when the owner came home.",
    options: ["its", "it's", "his or her", "their"],
    answerIndex: 0,
    explanation:
      "Possessive untuk hewan/benda singular adalah 'its' | tanpa apostrof. 'It's' = 'it is'.",
  },
  {
    id: "wfg03",
    question: "Between you and _____, this plan will probably fail.",
    options: ["me", "I", "myself", "mine"],
    answerIndex: 0,
    explanation:
      "Setelah preposisi 'between', pakai object pronoun: 'between you and me'. 'Between you and I' salah meski sering terdengar.",
  },
  {
    id: "wfg04",
    question: "How much _____ do you need for this research project?",
    options: ["information", "informations", "informs", "informative"],
    answerIndex: 0,
    explanation:
      "'Information' adalah uncountable noun | tidak pernah ditambah -s.",
  },
  {
    id: "wfg05",
    question: "The manager praised the staff for _____ hard work this quarter.",
    options: ["their", "its", "his", "theirs"],
    answerIndex: 0,
    explanation:
      "'The staff' di sini merujuk ke banyak orang → possessive 'their'. 'Theirs' tidak bisa diikuti noun.",
  },
  {
    id: "wfg06",
    question: "Neither of the answers _____ correct.",
    options: ["is", "are", "were", "have been"],
    answerIndex: 0,
    explanation:
      "'Neither' (tanpa 'nor') selalu singular → 'is'. Kata setelah 'of' bukan subjek.",
  },
  {
    id: "wfg07",
    question:
      "The new medicine had a positive _____ on the patient's recovery.",
    options: ["effect", "affect", "effective", "affected"],
    answerIndex: 0,
    explanation:
      "Setelah artikel 'a... positive' butuh noun: 'effect' (dampak). 'Affect' adalah verb.",
  },
  {
    id: "wfg08",
    question: "She taught _____ to play the guitar by watching videos.",
    options: ["herself", "her", "hers", "she"],
    answerIndex: 0,
    explanation:
      "Subjek dan objeknya orang yang sama → reflexive pronoun 'herself' (mengajari dirinya sendiri).",
  },
  {
    id: "wfg09",
    question: "There is too much old _____ in this room.",
    options: ["furniture", "furnitures", "furnishing", "furnished"],
    answerIndex: 0,
    explanation:
      "'Furniture' adalah uncountable noun | tidak ada bentuk 'furnitures'.",
  },
  {
    id: "wfg10",
    question: "The students finished the entire project by _____.",
    options: ["themselves", "theirselves", "themself", "their"],
    answerIndex: 0,
    explanation:
      "'By themselves' = sendirian/tanpa bantuan. 'Theirselves' dan 'themself' bukan bentuk baku.",
  },
  {
    id: "wfg11",
    question: "_____ is no reason to panic about the exam.",
    options: ["There", "It", "That", "This"],
    answerIndex: 0,
    explanation:
      "Pola 'There is/are + noun' dipakai untuk menyatakan keberadaan sesuatu: 'There is no reason...'.",
  },
  {
    id: "wfg12",
    question:
      "The professor, _____ research is world-famous, will give a lecture tonight.",
    options: ["whose", "who", "whom", "which"],
    answerIndex: 0,
    explanation:
      "'Whose' menyatakan kepemilikan: profesor YANG PENELITIANNYA terkenal. (Gabungan materi clause.)",
  },
  {
    id: "wfg13",
    question: "Not until yesterday _____ the truth about the incident.",
    options: ["did I learn", "I learned", "I did learn", "learned I"],
    answerIndex: 0,
    explanation:
      "'Not until...' di awal kalimat memicu inversion: 'did I learn'. (Gabungan materi inversion.)",
  },
  {
    id: "wfg14",
    question: "Playing chess and _____ novels are his favorite hobbies.",
    options: ["reading", "to read", "read", "reads"],
    answerIndex: 0,
    explanation:
      "Parallel structure: 'Playing... and reading...' | dua-duanya harus gerund. (Gabungan materi parallel structure.)",
  },
  {
    id: "wfg15",
    question: "The three brothers divided the housework among _____.",
    options: ["themselves", "them", "they", "theirs"],
    answerIndex: 0,
    explanation:
      "Pekerjaan dibagi di antara mereka SENDIRI → 'among themselves' (reflexive).",
  },
  {
    id: "wfg16",
    question: "Each country has _____ own unique traditions.",
    options: ["its", "their", "it's", "his"],
    answerIndex: 0,
    explanation:
      "'Each country' singular → possessive 'its'. Jangan tertukar dengan 'it's' (= it is).",
  },
];
