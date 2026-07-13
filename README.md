# Grammar Realm | TOEFL Grammar RPG

Web game edukasi 2D RPG untuk tugas Bahasa Inggris Bisnis 2. Pemain berkelana
melewati 3 wilayah + 1 zona final boss, mengalahkan monster dengan cara
menjawab soal grammar TOEFL (soal berbahasa Inggris, UI & narasi berbahasa
Indonesia), naik level lewat battle maupun Ujian Guild, dan mengumpulkan
5 item langka.

Dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS**,
state global memakai React Context + `useReducer`, progress tersimpan di
`localStorage`.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000

Untuk build produksi:

```bash
npm run build
npm start
```

## Fitur Utama

- **Battle "Shield Break via Soal"** | jawaban benar memberi damage sebesar
  ATK; jawaban salah membuat monster menyerang balik + menampilkan pembahasan.
- **Peta terbuka** | 4 wilayah bisa diakses sejak awal, level rekomendasi
  hanya sebagai info.
- **Dua jalur naik level** | EXP dari Fame battle, atau lulus Ujian Guild
  (10 soal acak, benar ≥ 8 → naik 1 level instan; gagal → terkunci sampai
  menang 1 battle).
- **Final Boss 3 fase** | tiap fase memakai pool soal dari materi berbeda.
- **5 item langka** dengan efek pasif, masing-masing hanya bisa drop 1 kali.
- **Guide naratif** bergaya santai muncul di momen-momen penting.
- **BGM looping** | "Journey of a Lifetime ~ Frieren Main Theme" di
  lobby/eksplorasi dan "Knife to the Throat" saat battle, dengan tombol
  mute di pojok kanan bawah (file di `public/audio/`).

## Struktur Kode

| Folder            | Isi                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `src/app/`        | Entry Next.js (layout, page, styling global)                                                                             |
| `src/components/` | Semua screen (Map, Region, Battle, GuildExam, Result, Ending, Intro) + komponen reusable (StatusPanel, DialogueBox, Bar) |
| `src/context/`    | `GameContext.tsx`                                                                                                        | reducer game state + persistensi localStorage |
| `src/data/`       | Data statis: monster, wilayah, item, dialog Guide, dan bank soal (124 soal)                                              |
| `src/lib/`        | Tipe TypeScript + utilitas (Fisher-Yates shuffle, kalkulasi damage/drop)                                                 |
| `public/assets/`  | Aset pixel art (karakter, monster, wilayah, item)                                                                        |

## Materi Grammar per Wilayah

1. **Hutan Awal** | Sentences with One & Multiple Clauses (Connectors)
2. **Reruntuhan** | Reduced Clauses & Inversion
3. **Kota** | Subject-Verb Agreement & Parallel Structure (lokasi Guild Hall)
4. **Puncak** | Nouns/Pronouns/Word Choice + gabungan semua materi (Final Boss)
