import type { Question } from "@/lib/types";

// Wilayah 2 | Reruntuhan: Reduced Clauses & Inversion
// Catatan: answerIndex selalu 0 di data; urutan opsi diacak otomatis saat ditampilkan.

export const REGION2_BATTLE_BASIC: Question[] = [
  {
    id: "w2b01",
    question:
      "_____ in 1889, the Eiffel Tower attracts millions of visitors every year.",
    options: ["Built", "Building", "It was built", "To build"],
    answerIndex: 0,
    explanation:
      "Reduced clause pasif: 'Which was built in 1889' disingkat jadi 'Built in 1889'. Menara itu DIBANGUN, jadi pakai past participle.",
  },
  {
    id: "w2b02",
    question: "While _____ dinner, she listened to the radio.",
    options: ["preparing", "prepared", "to prepare", "prepares"],
    answerIndex: 0,
    explanation:
      "Reduced clause aktif: 'While she was preparing dinner' disingkat jadi 'While preparing dinner'. Subjeknya sama, jadi pakai -ing.",
  },
  {
    id: "w2b03",
    question: "The man _____ near the door is my uncle.",
    options: ["standing", "stands", "stood", "is standing"],
    answerIndex: 0,
    explanation:
      "'Who is standing' direduksi jadi 'standing'. Main verb kalimat ini sudah ada, yaitu 'is', jadi tidak boleh ada verb kedua tanpa connector.",
  },
  {
    id: "w2b04",
    question: "Never _____ such a beautiful sunset before.",
    options: ["have I seen", "I have seen", "I saw", "seen I have"],
    answerIndex: 0,
    explanation:
      "Kalimat diawali kata negatif 'Never', jadi subjek dan auxiliary DIBALIK (inversion): 'Never have I seen...'.",
  },
  {
    id: "w2b05",
    question: "Rarely _____ his opinion in meetings.",
    options: ["does he share", "he shares", "he does share", "shares"],
    answerIndex: 0,
    explanation:
      "'Rarely' di awal kalimat memicu inversion: auxiliary 'does' pindah ke depan subjek | 'Rarely does he share...'.",
  },
  {
    id: "w2b06",
    question: "_____ from the top of the hill, the city looks amazing.",
    options: ["Seen", "Seeing", "To see", "Saw"],
    answerIndex: 0,
    explanation:
      "Kota itu DILIHAT (pasif), jadi pakai past participle 'Seen'. 'Seeing' berarti kotanya yang melihat | tidak logis.",
  },
  {
    id: "w2b07",
    question: "The novel _____ by that famous author became a bestseller.",
    options: ["written", "writing", "wrote", "writes"],
    answerIndex: 0,
    explanation:
      "'Which was written by...' direduksi jadi 'written by...'. Novel itu DITULIS (pasif), pakai past participle.",
  },
  {
    id: "w2b08",
    question: "Not once _____ about the change of plans.",
    options: [
      "did they tell me",
      "they told me",
      "they did tell me",
      "told they me",
    ],
    answerIndex: 0,
    explanation:
      "'Not once' adalah frasa negatif di awal kalimat, jadi wajib inversion: 'did they tell', bukan 'they told'.",
  },
];

export const REGION2_BATTLE_ELITE: Question[] = [
  {
    id: "w2e01",
    question:
      "_____ the data carefully, the researcher discovered a serious error.",
    options: ["Having analyzed", "Analyzed", "Being analyzed", "To analyzing"],
    answerIndex: 0,
    explanation:
      "'After she had analyzed the data' direduksi jadi 'Having analyzed the data'. Peneliti yang menganalisis (aktif) dan terjadi lebih dulu.",
  },
  {
    id: "w2e02",
    question: "Only after the storm passed _____ to the harbor.",
    options: [
      "did the boats return",
      "the boats returned",
      "the boats did return",
      "returned the boats",
    ],
    answerIndex: 0,
    explanation:
      "'Only after...' di awal kalimat memicu inversion di clause utama: 'did the boats return'.",
  },
  {
    id: "w2e03",
    question: "Hardly _____ down when the phone rang.",
    options: ["had she sat", "she had sat", "did she sat", "she sat"],
    answerIndex: 0,
    explanation:
      "Pola 'Hardly + had + subjek + V3 ... when ...'. Kata negatif 'hardly' di awal memicu inversion: 'Hardly had she sat down'.",
  },
  {
    id: "w2e04",
    question: "_____ you change your mind, please let me know immediately.",
    options: ["Should", "Would", "Could", "Might"],
    answerIndex: 0,
    explanation:
      "Inversion pada conditional: 'If you should change your mind' bisa ditulis 'Should you change your mind' ('if' dihapus, 'should' pindah ke depan).",
  },
  {
    id: "w2e05",
    question: "Not until the final exam _____ how important grammar was.",
    options: ["did he realize", "he realized", "he did realize", "realized he"],
    answerIndex: 0,
    explanation:
      "'Not until...' di awal kalimat memicu inversion: 'did he realize'. Tanpa inversion, kalimatnya salah.",
  },
  {
    id: "w2e06",
    question:
      "_____ to the cold weather, the tourists decided to stay indoors.",
    options: [
      "Unaccustomed",
      "Unaccustoming",
      "To unaccustom",
      "Being unaccustom",
    ],
    answerIndex: 0,
    explanation:
      "Reduced clause dari 'Because they were unaccustomed to...'. Setelah 'be' dihapus, tersisa adjective/participle 'Unaccustomed'.",
  },
  {
    id: "w2e07",
    question: "Seldom _____ such dedication in a young player.",
    options: ["do we see", "we see", "we do see", "seen we"],
    answerIndex: 0,
    explanation:
      "'Seldom' (jarang) di awal kalimat memicu inversion: 'do we see', bukan 'we see'.",
  },
  {
    id: "w2e08",
    question:
      "The instructions, _____ carefully, will help you finish the task quickly.",
    options: ["if followed", "if following", "follow", "if follows"],
    answerIndex: 0,
    explanation:
      "Reduced conditional pasif: 'if they are followed carefully' disingkat jadi 'if followed carefully'. Instruksi itu DIIKUTI, jadi pakai V3.",
  },
];

export const REGION2_GUILD: Question[] = [
  {
    id: "w2g01",
    question: "_____ by the shocking news, she couldn't say a word.",
    options: ["Stunned", "Stunning", "To stun", "Stun"],
    answerIndex: 0,
    explanation:
      "Dia DIKEJUTKAN oleh berita itu (pasif), jadi pakai past participle 'Stunned'. 'Stunning' berarti dia yang mengejutkan.",
  },
  {
    id: "w2g02",
    question: "Never before _____ so many people at the festival.",
    options: [
      "have there been",
      "there have been",
      "there were being",
      "been there have",
    ],
    answerIndex: 0,
    explanation:
      "'Never before' di awal kalimat memicu inversion: auxiliary 'have' pindah ke depan 'there'.",
  },
  {
    id: "w2g03",
    question: "While _____ to school, he saw a car accident.",
    options: ["walking", "walked", "he walking", "to walk"],
    answerIndex: 0,
    explanation:
      "Reduced clause aktif: 'While he was walking' → 'While walking'. Dia yang berjalan, jadi pakai -ing.",
  },
  {
    id: "w2g04",
    question: "Little _____ that the test would be so difficult.",
    options: ["did she know", "she knew", "she did know", "knew she"],
    answerIndex: 0,
    explanation:
      "'Little' (hampir tidak) di awal kalimat bersifat negatif, jadi memicu inversion: 'Little did she know...'.",
  },
  {
    id: "w2g05",
    question: "The students _____ in the front row are all freshmen.",
    options: ["sitting", "sat", "sit", "to sit"],
    answerIndex: 0,
    explanation:
      "'Who are sitting' direduksi jadi 'sitting'. Main verb kalimat sudah ada ('are'), jadi butuh participle, bukan verb kedua.",
  },
  {
    id: "w2g06",
    question: "Nowhere in this city _____ such delicious street food.",
    options: ["can you find", "you can find", "you find can", "found you"],
    answerIndex: 0,
    explanation:
      "'Nowhere' di awal kalimat memicu inversion: 'can you find', bukan 'you can find'.",
  },
  {
    id: "w2g07",
    question: "_____ properly, this machine can last more than ten years.",
    options: ["If maintained", "If maintaining", "Maintain", "To maintain"],
    answerIndex: 0,
    explanation:
      "Reduced conditional pasif: 'If it is maintained properly' → 'If maintained properly'. Mesin itu DIRAWAT, pakai V3.",
  },
  {
    id: "w2g08",
    question: "Not only _____ the piano, but she also composes her own music.",
    options: ["does she play", "she plays", "she does play", "plays she"],
    answerIndex: 0,
    explanation:
      "'Not only' di awal kalimat memicu inversion: 'does she play'. Pasangannya 'but... also' di clause kedua.",
  },
  {
    id: "w2g09",
    question: "The bridge _____ last year has already started to crack.",
    options: ["repaired", "repairing", "repairs", "was repaired"],
    answerIndex: 0,
    explanation:
      "'Which was repaired last year' direduksi jadi 'repaired last year'. Kalau pakai 'was repaired', kalimat jadi punya dua main verb.",
  },
  {
    id: "w2g10",
    question: "Only by working together _____ this difficult problem.",
    options: ["can we solve", "we can solve", "we solve can", "solved we"],
    answerIndex: 0,
    explanation:
      "'Only by...' di awal kalimat memicu inversion: 'can we solve', bukan 'we can solve'.",
  },
  {
    id: "w2g11",
    question: "_____ his homework, Tom went out to play football.",
    options: ["Having finished", "Finished", "Being finish", "To finishing"],
    answerIndex: 0,
    explanation:
      "'After he had finished his homework' direduksi jadi 'Having finished his homework' (aktif, terjadi lebih dulu).",
  },
  {
    id: "w2g12",
    question: "So difficult _____ that nobody in the class passed.",
    options: ["was the exam", "the exam was", "did the exam", "the exam is"],
    answerIndex: 0,
    explanation:
      "Pola 'So + adjective + verb + subjek + that...': 'So difficult was the exam that...' | inversion karena 'so difficult' di depan.",
  },
  {
    id: "w2g13",
    question: "Anyone _____ to join the study trip must register today.",
    options: ["wishing", "wished", "wishes", "to wishing"],
    answerIndex: 0,
    explanation:
      "'Anyone who wishes to join' direduksi jadi 'Anyone wishing to join' (aktif → -ing).",
  },
  {
    id: "w2g14",
    question:
      "Under no circumstances _____ the laboratory without a supervisor.",
    options: [
      "should students enter",
      "students should enter",
      "students enter should",
      "entered students",
    ],
    answerIndex: 0,
    explanation:
      "'Under no circumstances' adalah frasa negatif di awal kalimat, jadi wajib inversion: 'should students enter'.",
  },
  {
    id: "w2g15",
    question: "_____ in very simple language, the book is easy to understand.",
    options: ["Written", "Writing", "To write", "Wrote"],
    answerIndex: 0,
    explanation:
      "Buku itu DITULIS dalam bahasa sederhana (pasif), jadi pakai past participle 'Written'.",
  },
  {
    id: "w2g16",
    question: "Were I in your position, I _____ the scholarship offer.",
    options: ["would accept", "will accept", "accepted", "accept"],
    answerIndex: 0,
    explanation:
      "'Were I in your position' = 'If I were in your position' (conditional tipe 2 dengan inversion), jadi clause utamanya pakai 'would + V1'.",
  },
];
