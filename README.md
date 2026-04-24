# Skansa Nara Games

Game edukasi interaktif bertema anti-narkoba untuk siswa, dikemas dengan gaya visual cerah, nuansa gamification, dan alur belajar yang ringan tetapi tetap serius pada isi materinya.

Project ini menampilkan pengalaman belajar berbasis web untuk:

- mengenalkan fakta penting tentang bahaya narkoba
- mengajak siswa memahami dampak sosial, hukum, dan kesehatan
- melatih pengambilan keputusan lewat kuis dan mini game
- memberi hasil akhir yang menarik lengkap dengan rank, statistik, dan sertifikat digital

## Gambaran Singkat

`Narkoba Quest v2 — SMK 1 Kongbeng` adalah game satu halaman yang dirancang untuk pembelajaran sekolah. Pemain memasukkan nama, membaca fakta dan tips, menjawab kuis, bermain mini game, lalu menerima hasil akhir berupa skor, badge rank, dan sertifikat.

Karakter utama pengalaman ini adalah **Nara**, maskot pendamping yang memberi komentar, semangat, dan nuansa interaktif sepanjang permainan.

## Fitur Utama

- Halaman pembuka dengan identitas sekolah dan input nama pemain
- Story facts interaktif tentang narkoba, dampak, dan pencegahan
- Kuis multi-bab dengan efek visual, streak, dan progres
- Mini game `Mitos atau Fakta?` dengan timer
- Sistem rank dari `PEMULA BERANI` sampai `LEGENDA`
- Halaman hasil yang menampilkan:
  - akurasi per bab
  - statistik permainan
  - rank badge dinamis
  - insight hasil
  - langkah selanjutnya
  - sertifikat digital
  - tombol bagikan ke WhatsApp
- Responsif untuk desktop dan mobile
- Efek UI seperti confetti, fireworks, toast, shake, dan animasi mascot

## Alur Permainan

1. Pemain memasukkan nama di halaman awal.
2. Pemain membaca fakta-fakta inti tentang narkoba.
3. Pemain masuk ke kuis utama per bab.
4. Pemain menjalani mini game cepat `Mitos atau Fakta?`.
5. Sistem menghitung skor, streak, akurasi, dan rank.
6. Halaman hasil menampilkan performa akhir dan sertifikat.

## Teknologi

- HTML
- CSS
- JavaScript vanilla
- Google Fonts: `Nunito` dan `Fredoka One`

Tidak memakai framework tambahan, sehingga mudah dijalankan langsung di browser.

## Struktur File

```text
.
├── index.html
├── style.css
└── script.js
```

Catatan:

- `index.html` saat ini memuat versi halaman yang bisa langsung dijalankan.
- `style.css` dan `script.js` tersedia sebagai file terpisah untuk memudahkan pengembangan atau pemisahan aset ke depannya.

## Cara Menjalankan

Paling sederhana:

1. clone atau download repo ini
2. buka folder project
3. jalankan `index.html` di browser

Kalau ingin pengalaman pengembangan yang lebih nyaman, gunakan local server seperti Live Server di VS Code.

Contoh:

```bash
cd game-dutasmk
```

Lalu buka `index.html`.

## Kustomisasi Cepat

Bagian yang paling mudah disesuaikan:

- nama sekolah dan identitas banner
- daftar fakta dan tips edukatif
- soal kuis dan jawaban
- mini game
- kutipan hasil akhir
- warna tema dan rank
- teks sertifikat

Data utama yang biasanya diedit ada di bagian:

- `FACTS`
- `TIPS`
- `QUESTIONS`
- `MINIGAMES`
- `QUOTES`
- `RANKS`

## Highlight UX

Beberapa elemen yang jadi kekuatan project ini:

- pendekatan edukatif tanpa terasa seperti materi statis
- tone yang dekat dengan siswa
- hasil akhir yang terasa rewarding
- mobile experience yang sudah disesuaikan untuk area hasil dan sertifikat
- rank badge yang lebih menonjol dan mudah dibaca

## Cocok Untuk

- media pembelajaran sekolah
- presentasi edukasi anti-narkoba
- kampanye siswa / OSIS / BK
- lomba atau showcase web interaktif edukatif
- project portfolio frontend berbasis vanilla web

## Pengembangan Berikutnya

Beberapa ide pengembangan lanjutan:

- simpan skor ke localStorage
- leaderboard antarsiswa
- mode guru / admin
- ekspor sertifikat ke gambar
- integrasi suara yang lebih lengkap
- pemisahan final antara HTML, CSS, dan JS
- penambahan analytics sederhana untuk melihat performa per bab

## Pesan Edukasi

Isi project ini membawa pesan utama bahwa pencegahan narkoba bukan hanya soal larangan, tetapi soal:

- keberanian mengambil keputusan
- kemampuan menolak tekanan teman sebaya
- pemahaman dampak nyata narkoba
- keberanian mencari bantuan saat dibutuhkan

## Kredit

Dibuat untuk pengalaman edukasi bertema anti-narkoba dengan identitas:

- **SMK Negeri 1 Kongbeng**
- maskot pendamping: **Nara**

## Lisensi

Belum ditentukan.

Jika repo ini ingin dipublikasikan untuk umum, disarankan menambahkan lisensi seperti `MIT` atau lisensi sekolah/internal sesuai kebutuhan.
