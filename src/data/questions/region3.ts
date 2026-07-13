import type { Question } from "@/lib/types";

// Wilayah 3 | Kota: Subject-Verb Agreement & Parallel Structure + Comparatives
// Catatan: answerIndex selalu 0 di data; urutan opsi diacak otomatis saat ditampilkan.

export const REGION3_BATTLE_BASIC: Question[] = [
  {
    id: "w3b01",
    question: "The list of new students _____ on the notice board.",
    options: ["is", "are", "were", "have been"],
    answerIndex: 0,
    explanation:
      "Subjeknya 'the list' (singular), bukan 'students' | kata setelah 'of' bukan subjek. Jadi verbnya 'is'.",
  },
  {
    id: "w3b02",
    question: "Each of the players _____ a new uniform.",
    options: ["has", "have", "are having", "were having"],
    answerIndex: 0,
    explanation:
      "'Each' selalu singular, meskipun diikuti 'of the players'. Jadi pakai 'has'.",
  },
  {
    id: "w3b03",
    question: "She enjoys reading, cooking, and _____.",
    options: ["swimming", "to swim", "swims", "swam"],
    answerIndex: 0,
    explanation:
      "Parallel structure: 'reading, cooking, and swimming' | semua harus bentuk -ing karena item pertama dan kedua -ing.",
  },
  {
    id: "w3b04",
    question: "This bag is _____ than that one.",
    options: ["cheaper", "more cheap", "cheapest", "cheap"],
    answerIndex: 0,
    explanation:
      "Perbandingan dua benda dengan adjective pendek: cukup tambah -er → 'cheaper than'. 'More cheap' salah.",
  },
  {
    id: "w3b05",
    question: "The news about the earthquake _____ not good.",
    options: ["was", "were", "are", "have been"],
    answerIndex: 0,
    explanation:
      "'News' terlihat plural (ada -s) tapi sebenarnya uncountable dan selalu singular: 'the news was'.",
  },
  {
    id: "w3b06",
    question: "My brother and my sister _____ in Jakarta now.",
    options: ["live", "lives", "is living", "has lived"],
    answerIndex: 0,
    explanation:
      "Dua subjek digabung 'and' = plural, jadi verbnya 'live' (tanpa -s).",
  },
  {
    id: "w3b07",
    question: "The instructions were clear, short, and _____.",
    options: ["helpful", "helpfully", "help", "to helping"],
    answerIndex: 0,
    explanation:
      "Parallel structure: 'clear, short, and helpful' | semuanya harus adjective.",
  },
  {
    id: "w3b08",
    question: "Today is _____ day of the year.",
    options: ["the hottest", "the most hot", "hotter", "hot"],
    answerIndex: 0,
    explanation:
      "Superlative untuk adjective pendek: 'the hottest'. Membandingkan satu hari dengan SEMUA hari dalam setahun.",
  },
];

export const REGION3_BATTLE_ELITE: Question[] = [
  {
    id: "w3e01",
    question: "The number of visitors to this museum _____ every year.",
    options: ["increases", "increase", "are increasing", "have increased"],
    answerIndex: 0,
    explanation:
      "'The number of + plural noun' selalu SINGULAR → 'increases'. Bandingkan dengan 'a number of' yang plural.",
  },
  {
    id: "w3e02",
    question: "A number of students _____ absent from class yesterday.",
    options: ["were", "was", "is", "has been"],
    answerIndex: 0,
    explanation:
      "'A number of + plural noun' berarti 'banyak' dan selalu PLURAL → 'were'. Kebalikan dari 'the number of'.",
  },
  {
    id: "w3e03",
    question:
      "Neither the manager nor the employees _____ about the new policy.",
    options: ["know", "knows", "is knowing", "has known"],
    answerIndex: 0,
    explanation:
      "Dengan 'neither... nor', verb mengikuti subjek TERDEKAT. 'Employees' (plural) paling dekat, jadi 'know'.",
  },
  {
    id: "w3e04",
    question: "Economics _____ often considered a difficult subject.",
    options: ["is", "are", "were", "have been"],
    answerIndex: 0,
    explanation:
      "Nama bidang ilmu berakhiran -s (economics, physics, mathematics) tetap SINGULAR → 'is'.",
  },
  {
    id: "w3e05",
    question:
      "The committee's goals are raising funds, training volunteers, and _____ public awareness.",
    options: ["increasing", "to increase", "increased", "increase"],
    answerIndex: 0,
    explanation:
      "Parallel structure: 'raising..., training..., and increasing...' | semua item harus gerund (-ing).",
  },
  {
    id: "w3e06",
    question:
      "The population of this city is larger than _____ of the capital.",
    options: ["that", "this", "those", "it"],
    answerIndex: 0,
    explanation:
      "Yang dibandingkan adalah 'population' (singular), jadi pakai 'that of' sebagai penggantinya. 'Those of' untuk plural.",
  },
  {
    id: "w3e07",
    question: "The harder you study, _____ your results will be.",
    options: ["the better", "better", "the best", "more good"],
    answerIndex: 0,
    explanation:
      "Double comparative: 'The + comparative..., the + comparative...' → 'The harder..., the better...'.",
  },
  {
    id: "w3e08",
    question: "Five hundred dollars _____ too much for that jacket.",
    options: ["is", "are", "were", "have been"],
    answerIndex: 0,
    explanation:
      "Jumlah uang, jarak, dan waktu dianggap SATU kesatuan → singular: 'Five hundred dollars is...'.",
  },
];

export const REGION3_GUILD: Question[] = [
  {
    id: "w3g01",
    question: "Everyone in the two clubs _____ invited to the ceremony.",
    options: ["was", "were", "are", "have been"],
    answerIndex: 0,
    explanation:
      "'Everyone' selalu singular meskipun maknanya banyak orang → 'was invited'.",
  },
  {
    id: "w3g02",
    question: "The quality of these products _____ improved significantly.",
    options: ["has", "have", "are", "were"],
    answerIndex: 0,
    explanation:
      "Subjeknya 'the quality' (singular), bukan 'products'. Kata setelah 'of' bukan subjek → 'has improved'.",
  },
  {
    id: "w3g03",
    question: "He likes to hike, to swim, and _____ in the river.",
    options: ["to fish", "fishing", "fishes", "fished"],
    answerIndex: 0,
    explanation:
      "Parallel structure dengan infinitive: 'to hike, to swim, and to fish' | semua harus bentuk to + V1.",
  },
  {
    id: "w3g04",
    question: "Mathematics and physics _____ my favorite subjects at school.",
    options: ["are", "is", "was", "has been"],
    answerIndex: 0,
    explanation:
      "Dua subjek digabung 'and' = plural → 'are'. (Masing-masing memang singular, tapi digabung jadi plural.)",
  },
  {
    id: "w3g05",
    question: "This is _____ book I have ever read.",
    options: [
      "the most interesting",
      "the more interesting",
      "most interesting",
      "interestinger",
    ],
    answerIndex: 0,
    explanation:
      "Superlative untuk adjective panjang: 'the most interesting'. Kata 'ever' menandakan perbandingan dengan semua buku.",
  },
  {
    id: "w3g06",
    question: "There _____ several reasons for the project's delay.",
    options: ["are", "is", "was", "has been"],
    answerIndex: 0,
    explanation:
      "Subjek sebenarnya ada di belakang: 'several reasons' (plural) → 'There are'.",
  },
  {
    id: "w3g07",
    question: "The speech was long, boring, and _____.",
    options: ["repetitive", "repetitively", "repeat", "repetition"],
    answerIndex: 0,
    explanation:
      "Parallel structure: 'long, boring, and repetitive' | semuanya adjective.",
  },
  {
    id: "w3g08",
    question:
      "Either the students or the teacher _____ responsible for the mess.",
    options: ["is", "are", "were", "have been"],
    answerIndex: 0,
    explanation:
      "Dengan 'either... or', verb mengikuti subjek TERDEKAT: 'the teacher' (singular) → 'is'.",
  },
  {
    id: "w3g09",
    question: "Writing essays is easier than _____ speeches in public.",
    options: ["giving", "to give", "give", "gave"],
    answerIndex: 0,
    explanation:
      "Perbandingan harus paralel: 'Writing... than giving...' | dua-duanya gerund.",
  },
  {
    id: "w3g10",
    question: "The more you read, _____ you understand the world.",
    options: ["the more", "more", "the most", "much more"],
    answerIndex: 0,
    explanation:
      "Double comparative: 'The more..., the more...' | polanya harus sepasang.",
  },
  {
    id: "w3g11",
    question: "Ten kilometers _____ a long distance to walk in one day.",
    options: ["is", "are", "were", "be"],
    answerIndex: 0,
    explanation:
      "Jarak dianggap satu kesatuan → singular: 'Ten kilometers is...'.",
  },
  {
    id: "w3g12",
    question: "The climate of Bali is warmer than _____ of Bandung.",
    options: ["that", "this", "those", "one"],
    answerIndex: 0,
    explanation:
      "Yang dibandingkan 'climate' (singular) → pakai 'that of Bandung' supaya perbandingannya setara.",
  },
  {
    id: "w3g13",
    question: "Every teacher and student in this school _____ a library card.",
    options: ["has", "have", "are having", "were given"],
    answerIndex: 0,
    explanation:
      "'Every' membuat subjek jadi singular meskipun ada 'and' → 'has'.",
  },
  {
    id: "w3g14",
    question: "His plan is not only cheap _____ effective.",
    options: ["but also", "and also", "but too", "also but"],
    answerIndex: 0,
    explanation:
      "Correlative conjunction harus sepasang: 'not only... but also...'.",
  },
  {
    id: "w3g15",
    question:
      "The children, together with their mother, _____ waiting outside.",
    options: ["are", "is", "was", "has been"],
    answerIndex: 0,
    explanation:
      "Frasa 'together with...' tidak mengubah subjek. Subjeknya tetap 'the children' (plural) → 'are'.",
  },
  {
    id: "w3g16",
    question: "Of the two proposals, this one is clearly _____.",
    options: ["the better", "the best", "better than", "good"],
    answerIndex: 0,
    explanation:
      "Membandingkan DUA hal memakai comparative dengan 'the': 'the better'. 'The best' hanya untuk tiga atau lebih.",
  },
];
