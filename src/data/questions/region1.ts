import type { Question } from "@/lib/types";

// Wilayah 1 | Hutan Awal: Sentences with One & Multiple Clauses (Connectors)
// Catatan: answerIndex selalu 0 di data; urutan opsi diacak otomatis saat ditampilkan.

export const REGION1_BATTLE_BASIC: Question[] = [
  {
    id: "w1b01",
    question: "The professor _____ the lesson clearly every morning.",
    options: ["explains", "explaining", "to explain", "explanation"],
    answerIndex: 0,
    explanation:
      "Setiap kalimat wajib punya main verb. 'Explaining' dan 'to explain' bukan kata kerja utama, dan 'explanation' itu kata benda.",
  },
  {
    id: "w1b02",
    question: "_____ is my best friend from high school.",
    options: ["Dina", "Because Dina", "Although Dina", "When Dina"],
    answerIndex: 0,
    explanation:
      "Kalimat satu clause hanya butuh subjek + verb. Menambahkan connector seperti 'because/although/when' membuat clause jadi tidak lengkap.",
  },
  {
    id: "w1b03",
    question: "The birds in the forest _____ beautifully at dawn.",
    options: ["sing", "singing", "to sing", "song"],
    answerIndex: 0,
    explanation:
      "Subjeknya 'the birds' (kata setelah 'in' bukan subjek!). Kalimat ini masih butuh main verb, yaitu 'sing'.",
  },
  {
    id: "w1b04",
    question: "I stayed home _____ it was raining heavily.",
    options: ["because", "because of", "due to", "despite"],
    answerIndex: 0,
    explanation:
      "'It was raining' adalah clause (subjek + verb), jadi butuh connector 'because'. 'Because of' dan 'due to' hanya untuk noun phrase.",
  },
  {
    id: "w1b05",
    question: "_____ she was tired, she finished her homework.",
    options: ["Although", "Despite", "Because of", "However"],
    answerIndex: 0,
    explanation:
      "'She was tired' adalah clause, jadi butuh connector 'Although'. 'Despite' diikuti noun, dan 'However' tidak menghubungkan dua clause dalam satu kalimat seperti ini.",
  },
  {
    id: "w1b06",
    question: "He studied hard, _____ he passed the test.",
    options: ["so", "because", "although", "unless"],
    answerIndex: 0,
    explanation:
      "Hubungannya sebab → akibat: belajar keras, MAKA lulus. Connector yang tepat adalah 'so'.",
  },
  {
    id: "w1b07",
    question: "We will go hiking _____ the weather is good.",
    options: ["if", "despite", "because of", "however"],
    answerIndex: 0,
    explanation:
      "Ini kalimat pengandaian: mendaki HANYA KALAU cuacanya bagus. 'If' adalah connector syarat yang tepat.",
  },
  {
    id: "w1b08",
    question: "The movie had already started _____ we arrived at the cinema.",
    options: ["when", "during", "despite", "because of"],
    answerIndex: 0,
    explanation:
      "'We arrived' adalah clause, jadi butuh connector waktu 'when'. 'During' hanya diikuti noun, bukan clause.",
  },
];

export const REGION1_BATTLE_ELITE: Question[] = [
  {
    id: "w1e01",
    question: "_____ arrived at the station, the train had already left.",
    options: ["When we", "We", "Despite we", "Because"],
    answerIndex: 0,
    explanation:
      "Kalimat ini punya dua clause, jadi clause pertama butuh connector + subjek: 'When we arrived...'. Tanpa connector, dua clause tidak boleh digabung begitu saja.",
  },
  {
    id: "w1e02",
    question: "The flight was delayed _____ the heavy storm.",
    options: ["because of", "because", "since", "although"],
    answerIndex: 0,
    explanation:
      "'The heavy storm' hanyalah noun phrase (bukan clause), jadi pakai 'because of'. 'Because' dan 'since' harus diikuti subjek + verb.",
  },
  {
    id: "w1e03",
    question: "It was raining hard; _____, the match was postponed.",
    options: ["therefore", "because", "although", "unless"],
    answerIndex: 0,
    explanation:
      "Setelah titik koma (;), yang dipakai adalah conjunctive adverb seperti 'therefore' (= oleh karena itu), bukan subordinator seperti 'because'.",
  },
  {
    id: "w1e04",
    question: "You will not improve _____ you practice every day.",
    options: ["unless", "if", "so", "therefore"],
    answerIndex: 0,
    explanation:
      "'Unless' berarti 'kecuali jika'. Maknanya: kamu tidak akan berkembang KECUALI kalau latihan tiap hari.",
  },
  {
    id: "w1e05",
    question: "_____ the committee decided surprised all the members.",
    options: ["What", "That decided", "Because", "Which"],
    answerIndex: 0,
    explanation:
      "'What the committee decided' adalah noun clause yang berfungsi sebagai subjek dari verb 'surprised'.",
  },
  {
    id: "w1e06",
    question: "The old house, _____ was built in 1920, still looks beautiful.",
    options: ["which", "that", "who", "what"],
    answerIndex: 0,
    explanation:
      "Adjective clause dengan koma (non-restrictive) untuk benda memakai 'which', bukan 'that'. 'Who' hanya untuk orang.",
  },
  {
    id: "w1e07",
    question: "_____ hard the exam was, she remained calm.",
    options: ["However", "Whatever", "Although", "Despite"],
    answerIndex: 0,
    explanation:
      "'However + adjective + subjek + verb' berarti 'seberapa pun...'. 'However hard the exam was' = seberapa pun sulitnya ujian itu.",
  },
  {
    id: "w1e08",
    question: "She spoke slowly _____ everyone could understand her.",
    options: ["so that", "because of", "despite", "unless"],
    answerIndex: 0,
    explanation:
      "'So that' menyatakan tujuan (supaya). Dia bicara pelan SUPAYA semua orang paham.",
  },
];

export const REGION1_GUILD: Question[] = [
  {
    id: "w1g01",
    question: "The children in the playground _____ happily all afternoon.",
    options: ["play", "playing", "to play", "player"],
    answerIndex: 0,
    explanation:
      "Subjeknya 'the children' (bukan 'playground' | itu setelah preposisi 'in'). Kalimat butuh main verb: 'play'.",
  },
  {
    id: "w1g02",
    question: "_____ the rain stopped, we continued our journey.",
    options: ["After", "During", "Despite", "Because of"],
    answerIndex: 0,
    explanation:
      "'The rain stopped' adalah clause, jadi butuh connector 'After'. 'During/despite/because of' hanya diikuti noun.",
  },
  {
    id: "w1g03",
    question: "She wanted to join the club, _____ she was too busy.",
    options: ["but", "because", "if", "unless"],
    answerIndex: 0,
    explanation:
      "Dua clause ini bertentangan (ingin ikut ↔ terlalu sibuk), jadi pakai 'but'.",
  },
  {
    id: "w1g04",
    question: "I will call you _____ I arrive at the airport.",
    options: ["as soon as", "despite", "because of", "however"],
    answerIndex: 0,
    explanation:
      "'As soon as' (= segera setelah) adalah connector waktu yang menghubungkan dua clause.",
  },
  {
    id: "w1g05",
    question: "_____ being tired, he kept working on his thesis.",
    options: ["Despite", "Although", "Because", "Unless"],
    answerIndex: 0,
    explanation:
      "'Despite' diikuti noun/gerund ('being tired'). 'Although' harus diikuti clause lengkap (subjek + verb).",
  },
  {
    id: "w1g06",
    question: "The manager postponed the meeting _____ a technical problem.",
    options: ["due to", "because", "since", "as if"],
    answerIndex: 0,
    explanation:
      "'A technical problem' adalah noun phrase, jadi pakai 'due to'. 'Because' dan 'since' butuh clause.",
  },
  {
    id: "w1g07",
    question: "_____ you finish your homework, you may play outside.",
    options: ["Once", "Despite", "Because of", "Therefore"],
    answerIndex: 0,
    explanation:
      "'Once' (= begitu/setelah) adalah connector yang menghubungkan clause 'you finish your homework' dengan clause utama.",
  },
  {
    id: "w1g08",
    question: "The book _____ you lent me last week was fascinating.",
    options: ["that", "who", "what", "whose"],
    answerIndex: 0,
    explanation:
      "Adjective clause untuk benda memakai 'that' (atau 'which'). 'Who' untuk orang, 'whose' untuk kepemilikan.",
  },
  {
    id: "w1g09",
    question: "He didn't come to the party, _____ made everyone sad.",
    options: ["which", "that", "what", "who"],
    answerIndex: 0,
    explanation:
      "'Which' di sini merujuk ke seluruh clause sebelumnya (fakta bahwa dia tidak datang). 'That' tidak bisa dipakai setelah koma.",
  },
  {
    id: "w1g10",
    question: "_____ of the heavy traffic, we arrived on time.",
    options: ["In spite", "Although", "Even though", "Because"],
    answerIndex: 0,
    explanation:
      "Frasa lengkapnya 'in spite of + noun'. 'Although/even though' tidak diikuti 'of', dan 'because of' maknanya tidak cocok (kontras, bukan sebab).",
  },
  {
    id: "w1g11",
    question: "Take your jacket _____ it gets cold tonight.",
    options: ["in case", "because of", "despite", "so"],
    answerIndex: 0,
    explanation:
      "'In case' berarti 'untuk berjaga-jaga kalau'. Bawa jaket SIAPA TAHU nanti malam dingin.",
  },
  {
    id: "w1g12",
    question: "_____ he says is always interesting to hear.",
    options: ["What", "That", "Which", "Because"],
    answerIndex: 0,
    explanation:
      "'What he says' adalah noun clause yang menjadi subjek kalimat ('Apa yang dia katakan...').",
  },
  {
    id: "w1g13",
    question: "The woman _____ car was stolen reported it to the police.",
    options: ["whose", "who", "which", "that"],
    answerIndex: 0,
    explanation:
      "'Whose' menyatakan kepemilikan: wanita YANG MOBILNYA dicuri. 'Who' tidak bisa langsung diikuti noun kepemilikan.",
  },
  {
    id: "w1g14",
    question: "It was getting late, _____ we decided to go home.",
    options: ["so", "because", "although", "unless"],
    answerIndex: 0,
    explanation:
      "Hubungan sebab → akibat: sudah larut, MAKA kami pulang. Pakai 'so'.",
  },
  {
    id: "w1g15",
    question: "_____ studying all night, he still failed the exam.",
    options: ["Despite", "Although", "Because", "Since"],
    answerIndex: 0,
    explanation:
      "'Studying all night' adalah gerund phrase, jadi pakai 'Despite'. 'Although' harus diikuti clause lengkap.",
  },
  {
    id: "w1g16",
    question: "We waited at the café _____ the rain stopped.",
    options: ["until", "despite", "because of", "therefore"],
    answerIndex: 0,
    explanation:
      "'Until' (= sampai) menghubungkan clause 'the rain stopped' sebagai batas waktu menunggu.",
  },
];
