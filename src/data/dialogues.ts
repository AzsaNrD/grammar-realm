import type { DialogueEntry } from "@/lib/types";

export const INTRO_TEXT =
  "Eh, akhirnya ada yang berani juga buat jadi Grand Scholar! Gampang kok | kamu tinggal jelajah, hajar monster pakai jawaban yang bener, terus makin kuat deh. Siapa nama kamu?";

export const DIALOGUES: Record<string, DialogueEntry> = {
  enter_region1: {
    id: "enter_region1",
    lines: [
      "Nah, ini Hutan Awal. Tempat paling pas buat pemanasan.",
      "Monster di sini suka ngejebak soal | hati-hati, kata benda setelah 'of', 'on', 'in' itu BUKAN subjek ya, jangan sampai ketipu.",
      "Inget juga: satu kalimat wajib punya subjek dan kata kerja. Kalau clause-nya dua, harus ada connector kayak 'because', 'although', atau 'when'. Gas!",
    ],
  },
  enter_region2: {
    id: "enter_region2",
    lines: [
      "Wih, berani juga masuk Reruntuhan. Hantu-hantu di sini demen banget sama kalimat yang 'disingkat'.",
      "Reduced clause itu clause yang subjek + be-nya dibuang. 'The man who is standing there' jadi 'The man standing there'. Simpel kan?",
      "Terus awas inversion: abis kata negatif kayak 'never', 'rarely', 'not until', subjek dan kata kerjanya DIBALIK. 'Never have I seen...' | gitu lho.",
    ],
  },
  enter_region3: {
    id: "enter_region3",
    lines: [
      "Kamu udah sampai Kota nih. Kalau berani, coba mampir ke Guild Hall | kalau bisa jawab 8 dari 10 soal bener, level kamu langsung melejit.",
      "Tapi kalau gagal, kamu harus menang 1 battle dulu sebelum bisa coba lagi, jadi mending latihan dulu ya.",
      "Oh iya, monster di sini jagonya jebakan subject-verb agreement. Inget: 'the number of' itu singular, 'a number of' itu plural!",
    ],
  },
  enter_regionFinal: {
    id: "enter_regionFinal",
    lines: [
      "Ini dia, Puncak. Udaranya aja udah kerasa beda...",
      "Final Boss di sini nggak main-main | dia bakal ngelempar soal dari SEMUA materi: clause, reduced clause, inversion, agreement, parallel structure, sampai word choice.",
      "Pastiin level kamu udah cukup. Kalau ragu, balik latihan dulu | nggak ada yang buru-buru kok.",
    ],
  },
  before_final_boss: {
    id: "before_final_boss",
    lines: [
      "Ini dia, puncaknya. Semua yang udah kamu pelajari bakal diuji sekaligus di sini.",
      "Dia punya 3 fase | tiap fase temanya beda, jadi jangan kaget kalau gaya soalnya berubah di tengah jalan.",
      "Tenang aja, kamu udah lebih siap dari yang kamu kira. Gelar Grand Scholar menantimu!",
    ],
  },
  guild_pass: {
    id: "guild_pass",
    lines: [
      "GILA, KEREN! Kamu lulus Ujian Guild | level langsung naik!",
      "Fame bisa dicari lewat battle, tapi otak encer gini yang bikin kamu beda. Lanjutkan!",
    ],
  },
  guild_fail: {
    id: "guild_fail",
    lines: [
      "Yah, belum kali ini. Nggak apa-apa, coba menangin satu battle dulu buat pemanasan, abis itu boleh balik lagi ke sini.",
      "Coba perhatiin penjelasan di soal yang salah tadi | jebakannya biasanya itu-itu aja kok.",
    ],
  },
  ending: {
    id: "ending",
    lines: [
      "Selamat, kamu resmi jadi Grand Scholar! Semua wilayah udah kamu taklukin, semua jebakan grammar udah kamu lewatin.",
      "Not bad, not bad at all. Sekarang giliran kamu yang ngajarin dunia.",
    ],
  },
};
