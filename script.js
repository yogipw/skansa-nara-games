
// ===== DATA =====
const FACTS = [
  {
    icon:'🧠', title:'Narkoba Merusak Otak Selamanya',
    stat:'8 poin IQ', statContext:'hilang permanen menurut riset Harvard',
    text:'Zat adiktif mengubah struktur otak secara permanen. Penggunaan ganja saat remaja menurunkan IQ rata-rata <span class="story-card-stat">8 poin</span> secara permanen karena otak remaja masih berkembang hingga usia 25 tahun.',
    color:'#9B59FF', emoji:'🧬'
  },
  {
    icon:'📊', title:'Fakta Indonesia 2023',
    stat:'3,6 Juta', statContext:'pengguna narkoba di Indonesia',
    text:'BNN mencatat <span class="story-card-stat">3,6 juta</span> pengguna narkoba di Indonesia. Yang mengkhawatirkan: <span class="story-card-stat">27%</span> adalah pelajar dan mahasiswa berusia 15–24 tahun — seusia kamu!',
    color:'#FF6B9D', emoji:'📈'
  },
  {
    icon:'⚖️', title:'Hukuman Sangat Berat',
    stat:'Hukuman Mati', statContext:'untuk pengedar > 5 gram',
    text:'Pengedar narkoba golongan I dalam jumlah besar bisa dijatuhi <span class="story-card-stat">hukuman mati</span>. Pemakai bisa dipenjara <span class="story-card-stat">4–12 tahun</span> sesuai UU No.35/2009. Tidak ada ampun!',
    color:'#FF4757', emoji:'⚖️'
  },
  {
    icon:'💰', title:'Jebakan Finansial Mematikan',
    stat:'Rp 5 Juta/hari', statContext:'kebutuhan pecandu sabu stadium lanjut',
    text:'Pecandu sabu-sabu bisa menghabiskan <span class="story-card-stat">Rp 500rb–5 juta/hari</span>. Setara menghancurkan tabungan keluarga dalam hitungan minggu. Narkoba mencuri masa depan finansialmu.',
    color:'#FF8C42', emoji:'💸'
  },
  {
    icon:'🚪', title:'Pintu Masuk: Teman Sebaya',
    stat:'70%', statContext:'kasus berawal dari ajakan teman',
    text:'<span class="story-card-stat">70%</span> kasus penyalahgunaan narkoba berawal dari ajakan teman. "Coba sekali aja" adalah kebohongan paling mematikan. Sekali bisa selamanya — otak tidak bisa di-reset!',
    color:'#4ECDC4', emoji:'👥'
  },
  {
    icon:'💉', title:'Risiko Penyakit Mematikan',
    stat:'20× lebih berisiko', statContext:'terkena HIV bagi pengguna jarum suntik',
    text:'Pengguna narkoba suntik <span class="story-card-stat">20×</span> lebih berisiko tertular HIV/AIDS. Ganja meningkatkan risiko skizofrenia <span class="story-card-stat">5×</span> lipat. Tubuhmu terlalu berharga untuk dirusak!',
    color:'#6BCB77', emoji:'🦠'
  }
];

const TIPS = [
  {
    icon:'🗣️', title:'Teman menawarkan: "Coba deh sekali aja, enak!"',
    sub:'Skenario paling umum yang terjadi di kehidupan nyata',
    response:'"Makasih tapi nggak, gue emang gak tertarik."',
    body:'Jawab singkat, tegas, TANPA alasan panjang. Semakin banyak alasan = semakin banyak celah yang dicari. Kalau mereka tetap maksa, langsung pergi — itu bukan pengecut, itu SMART!'
  },
  {
    icon:'😤', title:'Ditantang: "Ih pengecut, takut doang!"',
    sub:'Tekanan sosial lewat ejekan dan gengsi',
    response:'"Gue lebih takut rusakin hidup gue sendiri. Lo jaga diri lo deh."',
    body:'Putar balik narasi: yang berani adalah yang bisa menolak tekanan, bukan yang ikut-ikutan. Orang yang benar-benar peduli sama kamu tidak akan pernah memaksamu untuk berbahaya.'
  },
  {
    icon:'🏃', title:'Situasi makin gawat, semua orang mulai pakai',
    sub:'Terjebak dalam situasi berbahaya di pesta atau kumpulan',
    response:'Langsung keluar dari situasi itu. Tidak perlu permisi panjang.',
    body:'Buat alasan apapun — "ada urusan mendadak", "ortu nelpon" — dan langsung pergi. Keselamatan > gengsi. Segera hubungi orang tua atau teman terpercaya. Ceritakan situasinya.'
  },
  {
    icon:'📞', title:'Teman sudah kecanduan dan minta tolong',
    sub:'Mengetahui teman sedang dalam masalah narkoba',
    response:'"Gue bantu lo, tapi kita harus lapor ke yang bisa bantu beneran."',
    body:'Kamu tidak bisa sembuhkan teman sendiri. Segera hubungi BNN di <strong>1500 235</strong> (bebas pulsa, 24 jam, rahasia). Ajak guru BK atau orang tua terlibat. Itu bukan pengkhianatan — itu cinta sejati!'
  },
  {
    icon:'🤝', title:'Cara pilih circle yang aman',
    sub:'Strategi pencegahan jangka panjang',
    response:'Bergabung aktif di komunitas positif yang membuat kamu sibuk produktif.',
    body:'Remaja dengan aktivitas padat (olahraga, seni, esport, OSIS, PMR) 60% lebih tahan dari tekanan narkoba. Waktu luang yang banyak adalah celah masuknya pengaruh buruk. Isi waktumu!'
  }
];

const QUESTIONS = [
  { ch:1, emoji:'💊', q:'Apa perbedaan utama narkotika, psikotropika, dan zat adiktif lainnya?', opts:['Ketiganya sama-sama vitamin','Narkotika dari alam, psikotropika sintetis, zat adiktif seperti alkohol & rokok','Ketiganya hanya ada di apotek','Psikotropika lebih aman dari narkotika'], ans:1, fact:'Narkotika bekerja pada SSP menyebabkan ketergantungan. Psikotropika mengubah suasana hati. Zat adiktif lain seperti alkohol & nikotin juga menyebabkan ketergantungan.' },
  { ch:1, emoji:'🌿', q:'Ganja (Cannabis sativa) masuk golongan narkotika berapa dan mengapa paling berbahaya bagi remaja?', opts:['Golongan III — efeknya ringan','Golongan II — untuk pengobatan terbatas','Golongan I — merusak perkembangan otak remaja yang masih berkembang','Bukan narkotika, tergolong herbal'], ans:2, fact:'Otak remaja masih berkembang sampai usia 25 tahun. Ganja mengganggu perkembangan ini secara permanen, menurunkan memori dan kemampuan belajar.' },
  { ch:1, emoji:'🧪', q:'Methamphetamine (sabu-sabu) termasuk zat golongan apa dan apa efek awalnya yang bikin ketagihan?', opts:['Depresan — bikin ngantuk','Stimulan — euphoria, energi meledak, percaya diri tinggi','Halusinogen — melihat warna-warni','Sedatif — mengurangi kecemasan'], ans:1, fact:'Sabu-sabu melepaskan dopamin 10× lebih banyak dari normal. Efek euphoria inilah yang membuat otak "ketagihan" dan terus minta lagi meski menghancurkan tubuh.' },
  { ch:1, emoji:'🔬', q:'New Psychoactive Substances (NPS) atau "designer drugs" seperti apa bahayanya?', opts:['Lebih aman karena baru','Efeknya belum diketahui, sulit dideteksi tes urin, sering mematikan','Hanya untuk penelitian ilmiah','Disetujui WHO untuk pengobatan'], ans:1, fact:'NPS terus bermutasi agar lolos hukum dan tes. Tanpa data keamanan, penggunanya jadi "kelinci percobaan" dengan risiko kematian mendadak yang jauh lebih tinggi.' },
  { ch:2, emoji:'🧠', q:'Bagian otak mana yang pertama kali rusak akibat narkoba, dan dampak terburuknya apa?', opts:['Otak kecil (keseimbangan)','Batang otak (pernapasan)','Prefrontal cortex — hilang kendali diri, moral, dan kemampuan membuat keputusan','Hipokampus — hanya melupakan nama orang'], ans:2, fact:'Prefrontal cortex adalah "CEO otak" yang mengatur moralitas dan keputusan rasional. Rusaknya bagian ini = pecandu tidak bisa menolak dorongan pakai narkoba meski tahu akibatnya.' },
  { ch:2, emoji:'⚖️', q:'Seorang siswa ketahuan membawa 0,5 gram ganja di sekolah. Hukuman apa yang bisa dijatuhkan?', opts:['Hanya diperingatkan','Hukuman percobaan saja','Dipenjara 4-12 tahun sesuai UU No.35/2009','Tidak ada hukuman untuk pelajar'], ans:2, fact:'UU No.35/2009 berlaku untuk semua WNI tanpa pengecualian usia. Namun anak di bawah 18 tahun bisa diarahkan ke rehabilitasi. Tetap ada catatan kriminal yang merusak masa depan.' },
  { ch:2, emoji:'💔', q:'Urutan dampak sosial yang paling umum terjadi pada pecandu narkoba adalah?', opts:['Makin populer → kaya → sukses','Prestasi menurun → izolasi → mencuri → penjara → kehancuran keluarga','Langsung penjara dari pertama','Tidak ada dampak sosial, hanya medis'], ans:1, fact:'Narkoba menciptakan spiral kehancuran: performa turun → kehilangan kepercayaan → putus sekolah/kerja → mencuri untuk beli narkoba → penjara → keluarga hancur.' },
  { ch:2, emoji:'💉', q:'Mengapa overdosis opioid (heroin, morfin) bisa membunuh dalam hitungan menit?', opts:['Menyebabkan serangan jantung langsung','Menghentikan sinyal pernapasan di batang otak — penderita berhenti napas','Membuat suhu tubuh naik fatal','Meledakkan pembuluh darah otak'], ans:1, fact:'Opioid menekan pusat pernapasan di batang otak. Overdosis = napas berhenti total dalam 3-5 menit. Naloxone (antidot) harus diberikan SEGERA untuk menyelamatkan nyawa.' },
  { ch:3, emoji:'🛡️', q:'Teman memaksa "Coba sekali aja bro, gak bakal ketagihan!" Respons paling tepat adalah?', opts:['"Oke deh, sekali aja"','"Makasih tapi nggak, gue gak tertarik" + langsung tinggalkan','Diam dan pura-pura tidak dengar','Minta waktu untuk mikir dulu'], ans:1, fact:'Jawaban tegas tanpa penjelasan panjang adalah yang paling efektif. Semakin banyak alasan kamu berikan, semakin banyak celah yang mereka cari. Pergi = smart, bukan pengecut.' },
  { ch:3, emoji:'📞', q:'Hotline BNN yang bisa dihubungi gratis 24 jam dari semua operator adalah?', opts:['119 ext 8','110','1500 235','021-80880175'], ans:2, fact:'BNN Hotline 1500 235 (bebas pulsa) atau WA 0811-1211-535. Bersifat rahasia. Kalau kamu atau temanmu butuh bantuan, hubungi sekarang — tidak ada yang terlambat.' },
  { ch:3, emoji:'🧩', q:'Faktor protektif terkuat yang terbukti mencegah remaja dari penyalahgunaan narkoba adalah?', opts:['Punya banyak uang','Komunikasi terbuka dengan orang tua + keterlibatan kegiatan positif','Tinggal di kota besar','Sekolah di sekolah favorit'], ans:1, fact:'Riset NIDA: remaja dengan hubungan keluarga kuat dan aktivitas positif (olahraga, seni, organisasi) 60% lebih tahan terhadap tekanan teman untuk mencoba narkoba.' },
  { ch:3, emoji:'🌟', q:'Jika menemukan teman yang sudah kecanduan narkoba, langkah paling tepat adalah?', opts:['Jauhi dan putus pertemanan selamanya','Coba sembuhkan sendiri tanpa bilang siapapun','Segera lapor ke BNN/guru/orang tua tanpa menghakimi — ajak rehabilitasi','Ikut-ikutan agar diterima'], ans:2, fact:'Kecanduan adalah penyakit, bukan pilihan. Teman sejati melaporkan ke pihak yang tepat agar mendapat rehabilitasi. BNN menjamin kerahasiaan dan perlindungan hukum bagi yang mau pulih.' }
];

const MINIGAMES = [
  [
    { text:'Ganja "medical" aman dikonsumsi remaja karena dosis kecil tidak berbahaya', isMitos:true, explain:'MITOS BERBAHAYA! Otak remaja yang masih berkembang JAUH lebih rentan kerusakan permanen dari ganja dibanding otak dewasa, berapapun dosisnya.' },
    { text:'Overdosis narkoba bisa membunuh orang yang baru pertama kali mencoba', isMitos:false, explain:'FAKTA KERAS! Tidak ada "dosis aman" untuk pertama kali. Tubuh setiap orang berbeda. Banyak korban overdosis fatal justru baru pertama kali coba.' },
    { text:'"Coba sekali tidak akan kecanduan, cukup punya tekad kuat"', isMitos:true, explain:'MITOS PALING MEMATIKAN! Sabu-sabu bisa menyebabkan craving kuat setelah 1-2 kali penggunaan. Ketergantungan psikologis bisa terjadi dalam hitungan hari.' },
    { text:'Pecandu narkoba bisa pulih sepenuhnya melalui program rehabilitasi BNN', isMitos:false, explain:'FAKTA HARAPAN! Rehabilitasi BNN gratis dan terbukti efektif. Ribuan mantan pecandu berhasil pulih dan produktif kembali. Belum terlambat untuk minta bantuan.' }
  ],
  [
    { text:'Alkohol lebih aman dari narkoba jadi boleh dikonsumsi remaja sebagai "pengganti"', isMitos:true, explain:'MITOS GANDA! Alkohol adalah zat adiktif yang juga merusak otak remaja, meningkatkan risiko kecelakaan, dan sering jadi "pintu" ke narkoba yang lebih keras.' },
    { text:'Pengedar narkoba di Indonesia bisa dijatuhi hukuman mati sesuai UU', isMitos:false, explain:'FAKTA HUKUM! Pasal 113 UU No.35/2009: pengedar narkoba golongan I dalam jumlah besar dapat dijatuhi hukuman mati. Indonesia serius berantas narkoba.' },
    { text:'Narkoba hanya merusak pengguna sendiri, tidak mempengaruhi orang sekitar', isMitos:true, explain:'MITOS EGOIS! Pecandu narkoba rata-rata merusak 5-10 orang di sekitarnya: keluarga, teman, korban kejahatan yang dilakukan untuk beli narkoba.' },
    { text:'Tes urin narkoba bisa mendeteksi penggunaan sabu-sabu hingga 3-4 hari setelah konsumsi', isMitos:false, explain:'FAKTA ILMIAH! Sabu-sabu terdeteksi 3-4 hari di urin. Ganja bisa terdeteksi hingga 30 hari pada pengguna berat. Tes rambut bahkan bisa deteksi 90 hari ke belakang!' }
  ]
];

const QUOTES = [
  '"Hidupmu terlalu berharga untuk dirusak narkoba." 🌟',
  '"Berani bilang tidak adalah tanda orang kuat." 💪',
  '"Masa depanmu dimulai dari pilihan hari ini." 🚀',
  '"Otakmu adalah aset terbesar — jaga baik-baik!" 🧠',
  '"Generasi bebas narkoba = Indonesia maju." 🇮🇩',
  '"Narkoba mencuri impianmu. Jangan biarkan!" 🛡️',
  '"Teman sejati tidak pernah menawari narkoba." ❤️',
  '"Kamu lebih kuat dari tekanan apapun." ⚡'
];

const RANKS = [
  { min:90, icon:'👑', label:'LEGENDA', sub:'Anti-Narkoba Hall of Fame!', color:'#FFD93D', badgeStart:'#FFE066', badgeEnd:'#FF8C42', badgeGlow:'rgba(255, 184, 77, 0.38)' },
  { min:75, icon:'🏆', label:'PAHLAWAN', sub:'Anti-Narkoba Sejati!', color:'var(--green)', badgeStart:'#6BCB77', badgeEnd:'#2FAE66', badgeGlow:'rgba(47, 174, 102, 0.28)' },
  { min:60, icon:'⭐', label:'PEJUANG', sub:'Hampir sempurna, terus belajar!', color:'var(--purple)', badgeStart:'#9B59FF', badgeEnd:'#6F42E8', badgeGlow:'rgba(111, 66, 232, 0.28)' },
  { min:40, icon:'📚', label:'CALON PAHLAWAN', sub:'Belajar lagi, pasti bisa!', color:'var(--orange)', badgeStart:'#FFB45C', badgeEnd:'#FF8C42', badgeGlow:'rgba(255, 140, 66, 0.28)' },
  { min:0, icon:'💪', label:'PEMULA BERANI', sub:'Langkah pertama yang hebat!', color:'var(--red)', badgeStart:'#FF6B7A', badgeEnd:'#FF4757', badgeGlow:'rgba(255, 71, 87, 0.28)' }
];

const NARA_COMMENTS = {
  start: ['Yayyy gaspol! Kamu bisa! 🔥','Ready to slay this quiz? 😤','Bismillah, kita bisa! ✊'],
  correct: ['YASS! Kamu beneran pinter sih! 🤩','Gilak bener!! Top banget! 💯','Nailed it bestie! Bangga sama kamu! 🌟','Wiiih gila benerrr! 🔥','Auto sultan kalau soal ini! 😤','Skrrttt!! Jawaban dewa! ⚡'],
  wrong: ['Eh salah sih, tapi gapapa ya! 💪','Yaah, next soal pasti bisa bestie! 😊','Hayuk baca faktanya dulu hehe 📖','Tenang, dari sini kita belajar! 🌸','Gak masalah, tetep glow up! ✨','Sedikit salah, tapi masih W! 🫶'],
  nearMiss: ['Hmm hampir! Dikit lagi bestie! 😅','Close call! Next pasti dapet! 😄','Tipis banget salahnya wkwkw 🤏'],
  streak3: ['STREAK 3 BESTIE!! YOU\'RE INSANE! 🔥🔥','3 berturut! Siapa yang bisa ngalahin lo?! 😤','TRIPLE KILL! Gamer mode ON! 🎮'],
  streak5: ['STREAK 5 BROLLL!! 🤯','NGERI PARAH!! 5 STREAK?! LEGIT BEAST! 🏆','ABSOLUTE UNIT! STREAK 5! 🌋'],
  streakBreak: ['ADUH! Streak kabur! 😱','Yaaaaah streak-nya pergi liburan 😭','Hufft ntar sambung lagi ya bestie! 😤'],
  minigame: ['Gas! Ini saatnya jadi fakta checker! 🎯','Fokus fokus fokus! Nara percaya kamu! ⚡','Mode detektif: ON! 🕵️'],
  mgCorrect: ['Faktanya ada di kepalamu! 🧠','Kamu tidak bisa dibohongi! 🛡️','Big brain moment! 💡'],
  mgWrong: ['Itu jebakan bestie! Baca faktanya! 😅','Next kamu pasti lebih kritis! 📖'],
  mgTimeout: ['Wah kehabisan waktu! Baca faktanya ya! ⏰','Jangan panik, baca dulu faktanya! 📖'],
  win: ['JUARA!! SMK 1 Kongbeng BANGGA BANGET! 🏆🎊','INCREDIBLE!! Pahlawan anti-narkoba dari Kaltim! 🦸','CHAMPION! Indonesia butuh orang kayak kamu! 🇮🇩'],
  lose: ['Belum max score, tapi udah berani! 💪','Belajar lagi yuk, kamu pasti bisa! 📚','Perjalanan ribuan langkah dimulai dari sini! 🌟'],
  hint_near: ['Psst! Perhatiin pilihan yang paling "common sense"! 🤫','Hint dari Nara: biasanya jawaban yang paling spesifik itu bener! 💡']
};

const NARA_CARD_COMMENTS = {
  ch1: ['Soal bab pertama, masih hangat-hangatnya! 🔥','Kenali musuhnya dulu baru bisa lawan! 💪','Bab 1 basa-basi dulu, next baru serius! 😜'],
  ch2: ['Nah ini serius nih bestie! Konsen! 😤','Bab 2: fakta-fakta yang wajib masuk otak! 🧠','Dampak narkoba gak main-main, yuk pelajari! ⚠️'],
  ch3: ['Bab terakhir! Yang paling penting: cara nolak! 🛡️','Bab 3: skill survival yang wajib dikuasai! ⚡','Ini soal yang bakal berguna IRL! 💯'],
  mg: ['Mini game time! Nara di sini nemenin! 🎯','Combo time! Jawab cepet ya! ⚡','Mitos atau fakta? Nara udah tau jawabannya hehe 😏']
};

// ===== STATE =====
let state = {
  playerName:'', score:0, streak:0, bestStreak:0, correct:0, wrong:0,
  currentQ:0, storyIndex:0, mgRound:0, mgAnswers:0,
  chCorrect:[0,0,0], chTotal:[4,4,4],
  mgScore:0, gamePhase:'welcome', questionCount:12,
  lastChapter: 0,
  seenFacts: new Set()
};

let isMuted = false;
let mgTimers = [];
let certMobileVisible = false;

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[ch]);
}

function renderMobileCert(rank, pct) {
  const slot = document.getElementById('mobile-cert-slot');
  const safeName = escapeHTML(state.playerName || 'Anonim');
  const safeRank = escapeHTML(rank.label);
  slot.innerHTML = `
    <div class="cert-area-card">
      <span class="cert-corner tl">🌟</span>
      <span class="cert-corner tr">🌟</span>
      <span class="cert-corner bl">🛡️</span>
      <span class="cert-corner br">🛡️</span>
      <div class="cert-header">
        <div class="cert-school">🏫 SMK NEGERI 1 KONGBENG</div>
        <div class="cert-school-sub">Kabupaten Kutai Timur - Kalimantan Timur</div>
        <div class="cert-title">Sertifikat Digital - Narkoba Quest</div>
      </div>
      <hr class="cert-divider">
      <div style="font-size:10px;color:rgba(255,255,255,0.6);text-align:center;font-weight:700;margin-bottom:2px">DIBERIKAN KEPADA</div>
      <div class="cert-name">${safeName}</div>
      <div class="cert-score-row">
        <div class="cert-score-item"><div class="cert-score-val">${state.score}</div><div class="cert-score-lbl">SKOR</div></div>
        <div class="cert-score-item"><div class="cert-score-val">${pct}%</div><div class="cert-score-lbl">AKURASI</div></div>
        <div class="cert-score-item"><div class="cert-score-val">${state.bestStreak}</div><div class="cert-score-lbl">STREAK</div></div>
      </div>
      <div class="cert-rank"><div class="cert-rank-text">${rank.icon} ${safeRank}</div></div>
      <div class="cert-footer">Generasi Bebas Narkoba 🇮🇩 | NarkobaQuest v2.0</div>
    </div>
    <div class="cert-hint">📸 Screenshot sertifikat ini untuk kenang-kenangan!</div>
  `;
}

function updateResultExtras(pct, rank, chapterData) {
  const strongest = [...chapterData].sort((a, b) => b.pct - a.pct)[0];
  const highlightItems = [
    `${rank.icon} ${rank.label}`,
    `🔥 Streak terbaik ${state.bestStreak}`,
    `📘 Bab terkuat: ${strongest.label} ${strongest.pct}%`
  ];

  if (pct >= 85) highlightItems.push('🛡️ Siap jadi teladan anti-narkoba');
  else if (pct >= 60) highlightItems.push('⚡ Tinggal sedikit lagi ke level juara');
  else highlightItems.push('📚 Masih bisa naik jauh di percobaan berikutnya');

  document.getElementById('result-highlights').innerHTML = highlightItems
    .map(item => `<span class="result-highlight-chip">${escapeHTML(item)}</span>`)
    .join('');

  let nextTitle = 'Naikkan levelmu sedikit lagi';
  let nextText = `Ulangi fokus di ${strongest.label.toLowerCase()} dulu, lalu coba main lagi sampai akurasimu naik dan sertifikatmu makin keren.`;

  if (pct >= 90) {
    nextTitle = 'Kamu pantas jadi role model';
    nextText = 'Screenshot hasil ini, bagikan ke temanmu, lalu tantang mereka buat nyusul skor tinggi sambil bawa pesan anti-narkoba.';
  } else if (pct >= 75) {
    nextTitle = 'Tinggal satu dorongan lagi ke puncak';
    nextText = `Hasilmu sudah kuat. Coba ulang sekali lagi sambil fokus memperbaiki ${strongest.label.toLowerCase()} supaya tembus kategori legenda.`;
  } else if (pct >= 60) {
    nextTitle = 'Fondasimu sudah bagus';
    nextText = `Kamu sudah paham banyak hal penting. Review cepat ${strongest.label.toLowerCase()} dan pertajam bab lain biar skor berikutnya meledak.`;
  } else if (pct >= 40) {
    nextTitle = 'Semangatmu sudah benar';
    nextText = `Main lagi setelah baca ulang fakta pentingnya. Mulai dari ${strongest.label.toLowerCase()} sebagai pijakan biar progresnya terasa cepat.`;
  }

  document.getElementById('next-step-title').textContent = nextTitle;
  document.getElementById('next-step-text').textContent = nextText;
}

// ===== CERT MOBILE TOGGLE =====
function toggleCertMobile() {
  if (window.innerWidth > 720) return;
  certMobileVisible = !certMobileVisible;
  const slot = document.getElementById('mobile-cert-slot');
  const btn = document.getElementById('cert-toggle-btn');
  const icon = document.getElementById('cert-toggle-icon');
  const text = document.getElementById('cert-toggle-text');
  if (certMobileVisible) {
    slot.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
    icon.textContent = '🔼';
    text.textContent = 'Sembunyikan Sertifikat';
    setTimeout(() => {
      slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  } else {
    slot.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    icon.textContent = '🎓';
    text.textContent = 'Lihat Sertifikat';
  }
}

// ===== AUDIO ENGINE =====
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let masterGain = null;
let bgmGain = null;
let bgmNodes = [];
let bgmRunning = false;
let bgmLoopTimer = null;
let bgmStarted = false;
let tickInterval = null;

function initAudio() {
  if (audioCtx) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  try {
    audioCtx = new AudioCtx();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 1.0;
    masterGain.connect(audioCtx.destination);
    bgmGain = audioCtx.createGain();
    bgmGain.gain.value = 0;
    bgmGain.connect(masterGain);
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch(e) { console.warn('Audio init failed:', e); }
}

function note(freq, waveType, gainVal, duration, delay=0, targetGain=null) {
  if (!audioCtx || isMuted) return;
  try {
    const t = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.connect(g);
    g.connect(targetGain || masterGain);
    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(gainVal, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.start(t);
    osc.stop(t + duration + 0.02);
  } catch(e) {}
}

function noise(gainVal, duration, delay=0, hpFreq=3000, targetGain=null) {
  if (!audioCtx || isMuted) return;
  try {
    const t = audioCtx.currentTime + delay;
    const bufLen = Math.ceil(audioCtx.sampleRate * (duration + 0.01));
    const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufLen);
    const src = audioCtx.createBufferSource();
    const g = audioCtx.createGain();
    const hf = audioCtx.createBiquadFilter();
    hf.type = 'highpass';
    hf.frequency.value = hpFreq;
    src.buffer = buf;
    src.connect(hf);
    hf.connect(g);
    g.connect(targetGain || masterGain);
    g.gain.setValueAtTime(gainVal, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.start(t);
    src.stop(t + duration + 0.02);
    return src;
  } catch(e) {}
}

const BPM = 128, BEAT = 60/BPM, BAR = BEAT*4, BARS = 8, LOOP_LEN = BAR*BARS;
const MELODY_SEQ = [
  [523.25,0,0.85],[659.25,1,0.85],[783.99,2,0.85],[659.25,3,0.45],[698.46,3.5,0.45],
  [783.99,4,1.2],[880,5.5,0.5],[987.77,6,0.85],[880,7,0.85],
  [783.99,8,0.85],[698.46,9,0.85],[659.25,10,0.85],[523.25,11,0.85],
  [587.33,12,0.85],[698.46,13,0.85],[783.99,14,1.7],
  [1046.5,16,0.5],[987.77,16.5,0.5],[880,17,0.85],[783.99,18,0.85],[698.46,19,0.45],[659.25,19.5,0.45],
  [783.99,20,0.85],[659.25,21,0.5],[587.33,21.5,0.5],[523.25,22,1.7],
  [659.25,24,0.4],[698.46,24.5,0.4],[783.99,25,0.4],[880,25.5,0.4],[987.77,26,0.85],[1046.5,27,0.85],
  [880,28,0.5],[783.99,28.5,0.5],[698.46,29,0.5],[659.25,29.5,0.5],[523.25,30,1.8],
];
const BASS_SEQ = [
  [130.81,0],[164.81,2],[196.00,4],[164.81,6],
  [130.81,8],[146.83,10],[146.83,12],[130.81,14],
  [261.63,16],[220,18],[196.00,20],[130.81,22],
  [164.81,24],[196.00,26],[174.61,28],[130.81,30],
];
const CHORD_BEATS = [2,6,10,14,18,22,26,30];
const CHORD_FREQS = [
  [523.25,659.25,783.99],[523.25,659.25,783.99],[392,523.25,659.25],[392,523.25,659.25],
  [440,554.37,659.25],[440,554.37,659.25],[349.23,440,523.25],[349.23,440,523.25],
];

function scheduleBGMLoop(startTime) {
  if (!audioCtx || isMuted) return;
  const t0 = startTime;
  MELODY_SEQ.forEach(([freq, beat, dur]) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const lp = audioCtx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 2000;
    osc.connect(lp); lp.connect(g); g.connect(bgmGain);
    osc.type = 'square'; osc.frequency.value = freq;
    const st = t0 + beat * BEAT, d = dur * BEAT * 0.82;
    g.gain.setValueAtTime(0, st);
    g.gain.linearRampToValueAtTime(0.18, st + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, st + d);
    osc.start(st); osc.stop(st + d + 0.02);
    bgmNodes.push(osc);
  });
  BASS_SEQ.forEach(([freq, beat]) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.connect(g); g.connect(bgmGain);
    osc.type = 'triangle'; osc.frequency.value = freq;
    const st = t0 + beat * BEAT, d = BEAT * 0.78;
    g.gain.setValueAtTime(0, st);
    g.gain.linearRampToValueAtTime(0.3, st + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, st + d);
    osc.start(st); osc.stop(st + d + 0.02);
    bgmNodes.push(osc);
  });
  CHORD_BEATS.forEach((beat, ci) => {
    const freqs = CHORD_FREQS[ci] || CHORD_FREQS[0];
    freqs.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.connect(g); g.connect(bgmGain);
      osc.type = 'sine'; osc.frequency.value = freq;
      const st = t0 + beat * BEAT, d = BEAT * 0.3;
      g.gain.setValueAtTime(0, st);
      g.gain.linearRampToValueAtTime(0.09, st + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, st + d);
      osc.start(st); osc.stop(st + d + 0.02);
      bgmNodes.push(osc);
    });
  });
  for (let beat = 0; beat < BARS * 4; beat++) {
    const st = t0 + beat * BEAT;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.connect(g); g.connect(bgmGain);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, st);
    osc.frequency.exponentialRampToValueAtTime(38, st + 0.1);
    g.gain.setValueAtTime(0.55, st);
    g.gain.exponentialRampToValueAtTime(0.0001, st + 0.14);
    osc.start(st); osc.stop(st + 0.16);
    bgmNodes.push(osc);
    if (beat % 4 === 1 || beat % 4 === 3) {
      const sn = noise(0.12, 0.08, beat * BEAT, 2000, bgmGain);
      if (sn) bgmNodes.push(sn);
    }
    const htSt = beat * BEAT + BEAT * 0.5;
    const ht = noise(0.06, 0.035, htSt, 7000, bgmGain);
    if (ht) bgmNodes.push(ht);
  }
}

function startBGM() {
  if (bgmRunning || !audioCtx || isMuted) return;
  bgmRunning = true; bgmStarted = true;
  bgmGain.gain.cancelScheduledValues(audioCtx.currentTime);
  bgmGain.gain.setValueAtTime(0, audioCtx.currentTime);
  bgmGain.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 1.2);
  let loopStart = audioCtx.currentTime + 0.05;
  scheduleBGMLoop(loopStart);
  function scheduleNext() {
    loopStart += LOOP_LEN;
    scheduleBGMLoop(loopStart);
    bgmLoopTimer = setTimeout(scheduleNext, (LOOP_LEN - 1) * 1000);
  }
  bgmLoopTimer = setTimeout(scheduleNext, (LOOP_LEN - 1) * 1000);
  document.getElementById('bgm-status').classList.add('show');
}

function stopBGM(fade=true) {
  if (!bgmRunning || !audioCtx) return;
  bgmRunning = false;
  clearTimeout(bgmLoopTimer);
  document.getElementById('bgm-status').classList.remove('show');
  if (fade) {
    bgmGain.gain.cancelScheduledValues(audioCtx.currentTime);
    bgmGain.gain.setValueAtTime(bgmGain.gain.value, audioCtx.currentTime);
    bgmGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
    setTimeout(() => { bgmNodes.forEach(n => { try { n.stop(); } catch(e) {} }); bgmNodes = []; }, 900);
  } else {
    bgmGain.gain.value = 0;
    bgmNodes.forEach(n => { try { n.stop(); } catch(e) {} });
    bgmNodes = [];
  }
}

function setBGMVolume(v, rampTime=0.3) {
  if (!audioCtx || !bgmGain) return;
  bgmGain.gain.cancelScheduledValues(audioCtx.currentTime);
  bgmGain.gain.setValueAtTime(bgmGain.gain.value, audioCtx.currentTime);
  bgmGain.gain.linearRampToValueAtTime(v, audioCtx.currentTime + rampTime);
}

function duckBGM(duckTo=0.06, duckDur=500) {
  if (!bgmRunning) return;
  setBGMVolume(duckTo, 0.1);
  setTimeout(() => setBGMVolume(0.22, 0.3), duckDur);
}

function playSound(type) {
  if (isMuted || !audioCtx) return;
  try {
    switch(type) {
      case 'click': note(800, 'sine', 0.08, 0.06); break;
      case 'correct':
        duckBGM(0.07, 600);
        [[523.25, 0], [659.25, 0.09], [783.99, 0.18], [1046.5, 0.28]].forEach(([f, d]) => note(f, 'sine', 0.22, 0.28, d));
        break;
      case 'wrong':
        duckBGM(0.07, 550);
        note(220, 'sawtooth', 0.18, 0.15, 0);
        note(185, 'sawtooth', 0.14, 0.18, 0.13);
        note(160, 'sawtooth', 0.10, 0.2, 0.26);
        break;
      case 'fanfare3':
        duckBGM(0.05, 800);
        [[523.25,0],[659.25,0.08],[783.99,0.16],[1046.5,0.24]].forEach(([f,d]) => note(f, 'square', 0.24, 0.22, d));
        note(1046.5, 'sine', 0.28, 0.45, 0.38);
        break;
      case 'fanfare5':
        duckBGM(0.04, 1200);
        [[523.25,0],[659.25,0.07],[783.99,0.14],[880,0.21],[1046.5,0.28],[1318.5,0.36]].forEach(([f,d]) => note(f, 'square', 0.26, 0.24, d));
        note(1318.5, 'sine', 0.3, 0.65, 0.52);
        note(130.81, 'triangle', 0.35, 0.2, 0);
        note(261.63, 'triangle', 0.25, 0.2, 0.05);
        break;
      case 'levelup':
        duckBGM(0.05, 1000);
        [[261.63,0],[329.63,0.1],[392,0.2],[523.25,0.3],[659.25,0.42],[783.99,0.54],[1046.5,0.66]].forEach(([f,d]) => note(f, 'triangle', 0.22, 0.3, d));
        [1046.5, 1318.5, 1568].forEach((f,i) => note(f, 'sine', 0.15, 0.5, 0.7 + i * 0.08));
        break;
      case 'sparkle':
        [[1318.5,0],[1568,0.06],[1760,0.12],[2093,0.18],[2637,0.24]].forEach(([f,d]) => note(f, 'sine', 0.13, 0.2, d));
        break;
      case 'mg_correct': note(880, 'sine', 0.18, 0.18, 0); note(1046.5, 'sine', 0.15, 0.15, 0.1); break;
      case 'mg_wrong': note(220, 'triangle', 0.15, 0.25, 0); note(180, 'triangle', 0.1, 0.2, 0.12); break;
      case 'mg_timeout': note(440, 'sine', 0.12, 0.12, 0); note(330, 'sine', 0.10, 0.15, 0.1); note(220, 'sine', 0.08, 0.2, 0.22); break;
      case 'tick': note(1400, 'square', 0.07, 0.04, 0); break;
      case 'tock': note(1050, 'square', 0.08, 0.04, 0); break;
      case 'end':
        stopBGM();
        setTimeout(() => {
          [783.99, 987.77, 1046.5, 1174.66, 1318.5].forEach((f,i) => note(f, 'sine', 0.24, 0.3, i * 0.12));
        }, 400);
        break;
    }
  } catch(e) {}
}

function startTickTock() {
  stopTickTock();
  let flip = false;
  tickInterval = setInterval(() => {
    if (!isMuted) { flip = !flip; playSound(flip ? 'tick' : 'tock'); }
  }, 500);
}

function stopTickTock() {
  if (tickInterval) { clearInterval(tickInterval); tickInterval = null; }
}

function toggleMute() {
  isMuted = !isMuted;
  document.getElementById('mute-btn').textContent = isMuted ? '🔇' : '🔊';
  if (isMuted) {
    if (bgmGain) bgmGain.gain.value = 0;
    stopTickTock();
    document.getElementById('bgm-status').classList.remove('show');
  } else {
    if (bgmRunning && bgmGain) bgmGain.gain.value = 0.22;
    if (bgmRunning) document.getElementById('bgm-status').classList.add('show');
  }
}

// STARS
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [], W, H;
  function resize() {
    W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight;
    stars = Array.from({length:60}, () => ({
      x: Math.random()*W, y: Math.random()*H, r: Math.random()*3+1,
      vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
      opacity: Math.random()*0.5+0.1, pulse: Math.random()*Math.PI*2
    }));
  }
  function draw() {
    ctx.clearRect(0,0,W,H);
    const colors = ['#FF6B9D','#9B59FF','#FFD93D','#4ECDC4','#FF8C42'];
    stars.forEach((s,i) => {
      s.pulse += 0.02; s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
      const op = s.opacity + Math.sin(s.pulse) * 0.1;
      ctx.save(); ctx.globalAlpha = Math.max(0,op); ctx.fillStyle = colors[i%colors.length];
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  resize(); window.addEventListener('resize', resize); draw();
}

function launchFireworks() {
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#FF6B9D','#9B59FF','#FFD93D','#4ECDC4','#FF8C42','#6BCB77','#FFFFFF'];
  function burst(x,y) {
    for (let i=0;i<60;i++) {
      const angle=Math.random()*Math.PI*2, speed=Math.random()*8+2;
      particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:1,color:colors[Math.floor(Math.random()*colors.length)],r:Math.random()*4+2});
    }
  }
  const positions=[[0.2,0.2],[0.8,0.2],[0.5,0.4],[0.2,0.7],[0.8,0.7],[0.5,0.8]];
  let bi=0;
  const bInterval=setInterval(()=>{if(bi<positions.length){burst(canvas.width*positions[bi][0],canvas.height*positions[bi][1]);bi++;}else clearInterval(bInterval);},400);
  let frame=0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=0.15;p.life-=0.015;p.vx*=0.98;
      if(p.life>0){ctx.save();ctx.globalAlpha=p.life;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.r*p.life,0,Math.PI*2);ctx.fill();ctx.restore();}});
    if(++frame<300&&particles.some(p=>p.life>0)) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const pieces = Array.from({length:150},()=>({
    x:Math.random()*canvas.width, y:-20,
    w:Math.random()*12+4, h:Math.random()*8+3,
    color:['#FF6B9D','#9B59FF','#FFD93D','#4ECDC4','#FF8C42','#6BCB77'][Math.floor(Math.random()*6)],
    vx:(Math.random()-0.5)*6, vy:Math.random()*6+2, rot:Math.random()*Math.PI*2, vr:(Math.random()-0.5)*0.2
  }));
  let frame=0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.vy+=0.1;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();});
    if(++frame<200) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

function triggerScreenShake() {
  document.body.classList.add('screen-shake');
  setTimeout(()=>document.body.classList.remove('screen-shake'), 500);
}

function floatScore(pts, btn) {
  const rect = btn ? btn.getBoundingClientRect() : {top:window.innerHeight/2,left:window.innerWidth/2,width:0};
  const el = document.createElement('div');
  el.className = 'floating-score';
  el.textContent = '+' + pts;
  el.style.left = (rect.left + rect.width/2 - 20) + 'px';
  el.style.top = rect.top + 'px';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 1300);
}

function showLevelUpBanner(chNum) {
  const info = [null,
    {emoji:'🧠', title:'Bab 1 Selesai!', sub:'Lanjut ke Bab 2 — Bahaya & Dampak ⚠️'},
    {emoji:'⚠️', title:'Bab 2 Selesai!', sub:'Lanjut ke Bab 3 — Cara Menolak 🛡️'},
    {emoji:'🛡️', title:'Bab 3 Selesai!', sub:'Wah kamu luar biasa! 🎉'},
  ];
  const d = info[chNum];
  if (!d) return;
  document.getElementById('lu-emoji').textContent = d.emoji;
  document.getElementById('lu-title').textContent = d.title;
  document.getElementById('lu-sub').textContent = d.sub;
  const banner = document.getElementById('level-up-banner');
  banner.classList.add('show');
  playSound('levelup');
  setTimeout(()=>banner.classList.remove('show'), 2500);
}

let naraTO;
function showNara(stateKey, commentKey, animated=true) {
  const emojis = {idle:'🦸',correct:'🤩',wrong:'😔',nearMiss:'😅',streak3:'🔥',streak5:'🏆',streakBreak:'😱',minigame:'🎯',win:'👑',lose:'💪',mgCorrect:'😎',mgWrong:'😅',mgTimeout:'⏰',dance:'🕺'};
  const anims = {correct:'mascot-jump 0.6s ease forwards',wrong:'mascot-shake 0.6s ease forwards',streak3:'mascot-spin 0.7s ease forwards',streak5:'mascot-explode 0.8s ease forwards',streakBreak:'mascot-shake-big 0.6s ease',win:'mascot-explode 1s ease forwards',dance:'mascot-dance 0.5s ease-in-out infinite'};
  const naraEl = document.getElementById('nara-emoji');
  const bubble = document.getElementById('nara-bubble');
  const text = document.getElementById('nara-text');
  const wm = document.getElementById('welcome-mascot');
  naraEl.textContent = emojis[stateKey] || '🦸';
  if (wm) { wm.textContent = emojis[stateKey]||'🦸'; wm.style.animation='none'; setTimeout(()=>{wm.style.animation=anims[stateKey]||'mascot-idle 2s ease-in-out infinite';},10); }
  if (animated) { naraEl.style.animation='none'; setTimeout(()=>{ naraEl.style.animation=anims[stateKey]||'mascot-idle 2s ease-in-out infinite'; },10); }
  const pool = NARA_COMMENTS[commentKey] || NARA_COMMENTS.correct;
  text.textContent = pool[Math.floor(Math.random()*pool.length)];
  bubble.classList.remove('show');
  clearTimeout(naraTO);
  setTimeout(()=>bubble.classList.add('show'), 50);
  naraTO = setTimeout(()=>bubble.classList.remove('show'), 4000);
}

function showNaraCardComment(ch) {
  const pool = NARA_CARD_COMMENTS['ch'+ch] || NARA_CARD_COMMENTS.ch1;
  document.getElementById('nara-card-text').textContent = pool[Math.floor(Math.random()*pool.length)];
  const el = document.getElementById('nara-card-comment');
  el.classList.remove('show');
  setTimeout(()=>el.classList.add('show'), 200);
}

function showNaraHint() {
  const hints = NARA_COMMENTS.hint_near;
  document.getElementById('nara-hint-text').textContent = hints[Math.floor(Math.random()*hints.length)];
  document.getElementById('nara-hint-box').classList.add('show');
}
function hideNaraHint() { document.getElementById('nara-hint-box').classList.remove('show'); }

let toastTO;
function showToast(msg, bonus=false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (bonus?' bonus':'');
  clearTimeout(toastTO);
  toastTO = setTimeout(()=>t.className='toast', 2200);
}

function showScreen(id) {
  const nextScreen = document.getElementById(id);
  document.querySelectorAll('.screen.active').forEach(s => {
    s.classList.add('exit');
    setTimeout(()=>s.classList.remove('active','exit'), 300);
  });
  setTimeout(() => {
    nextScreen.classList.add('active');
    nextScreen.scrollTop = 0;
  }, 300);
}

function setBgChapter(ch) {
  document.body.className = '';
  if (ch===1) document.body.classList.add('ch1-bg');
  else if (ch===2) document.body.classList.add('ch2-bg');
  else if (ch===3) document.body.classList.add('ch3-bg');
  else document.body.classList.add('mg-bg');
}

function initStoryFacts() {
  renderStoryCard();
  const dots = document.getElementById('story-dots');
  dots.innerHTML = '';
  FACTS.forEach((_,i) => {
    const d = document.createElement('div');
    d.className = 'story-dot' + (i===0?' active':'');
    d.onclick = ()=>{ state.storyIndex=i; renderStoryCard(); };
    dots.appendChild(d);
  });
}

function renderStoryCard() {
  const i = state.storyIndex;
  const f = FACTS[i];
  const display = document.getElementById('story-card-display');
  const isNew = !state.seenFacts.has(i);
  display.style.opacity = '0';
  display.style.transform = 'translateX(20px)';
  setTimeout(()=>{
    display.innerHTML = `
      <div class="story-card" style="border-color:${f.color}33">
        <div class="story-card-header" style="background:${f.color}10">
          <div class="story-icon-wrap" style="background:linear-gradient(135deg,${f.color},${f.color}cc)">${f.emoji}</div>
          <div>
            <div class="story-card-title">${f.title}</div>
            <div style="font-size:11px;color:var(--muted);font-weight:700;margin-top:3px">${f.icon} Fakta penting ke-${i+1}</div>
          </div>
        </div>
        <div class="story-card-body">${f.text}</div>
        <div style="padding:10px 18px 14px;border-top:2px dashed ${f.color}33;display:flex;align-items:center;gap:10px">
          <div style="background:${f.color}18;border:2px solid ${f.color}44;border-radius:10px;padding:6px 12px;flex:1;text-align:center">
            <div style="font-family:'Fredoka One',cursive;font-size:20px;color:${f.color}">${f.stat}</div>
            <div style="font-size:11px;font-weight:700;color:var(--muted)">${f.statContext}</div>
          </div>
        </div>
      </div>`;
    display.style.transition = 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
    display.style.opacity = '1';
    display.style.transform = 'translateX(0)';
    if (isNew) { state.seenFacts.add(i); playSound('sparkle'); }
  }, 150);
  document.getElementById('story-progress').style.width = ((i+1)/FACTS.length*100) + '%';
  document.getElementById('story-chapter-num').textContent = i+1;
  document.getElementById('story-chapter-label-text').textContent = `dari ${FACTS.length} fakta penting`;
  document.getElementById('story-prev').disabled = i===0;
  document.getElementById('story-next').disabled = i===FACTS.length-1;
  document.querySelectorAll('.story-dot').forEach((d,j)=>d.classList.toggle('active',j===i));
}

function storyNav(dir) {
  const newIdx = state.storyIndex + dir;
  if (newIdx < 0 || newIdx >= FACTS.length) return;
  state.storyIndex = newIdx;
  renderStoryCard();
  playSound('click');
}

function initTips() {
  const list = document.getElementById('tips-list');
  list.innerHTML = TIPS.map((t,i)=>`
    <div class="tip-scenario-card" id="tip-sc-${i}">
      <div class="tip-scenario-header" onclick="toggleTipScenario(${i})">
        <div class="tip-icon-badge">${t.icon}</div>
        <div><div class="tip-scenario-title">${t.title}</div><div class="tip-scenario-sub">${t.sub}</div></div>
        <span class="tip-arrow">▼</span>
      </div>
      <div class="tip-body" id="tip-body-${i}">
        <div class="tip-body-inner">
          <div class="tip-response-box"><div class="tip-response-label">✅ Respons terbaik:</div>${t.response}</div>
          <p>${t.body}</p>
        </div>
      </div>
    </div>`).join('');
}

function toggleTipScenario(i) {
  playSound('click');
  const body = document.getElementById(`tip-body-${i}`);
  const card = document.getElementById(`tip-sc-${i}`);
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.tip-body').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.tip-scenario-card').forEach(c=>c.classList.remove('open'));
  if (!isOpen) { body.classList.add('open'); card.classList.add('open'); }
}

function switchTab(tab) {
  playSound('click');
  document.getElementById('tab-facts').style.display = tab==='facts' ? '' : 'none';
  document.getElementById('tab-tips').style.display = tab==='tips' ? '' : 'none';
  document.getElementById('tab-btn-facts').style.cssText = tab==='facts'
    ? 'flex:1;padding:10px;border:none;border-radius:10px;font-family:"Nunito",sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:white;color:var(--purple);box-shadow:0 2px 8px rgba(0,0,0,0.08);'
    : 'flex:1;padding:10px;border:none;border-radius:10px;font-family:"Nunito",sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:transparent;color:var(--muted);';
  document.getElementById('tab-btn-tips').style.cssText = tab==='tips'
    ? 'flex:1;padding:10px;border:none;border-radius:10px;font-family:"Nunito",sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:white;color:var(--purple);box-shadow:0 2px 8px rgba(0,0,0,0.08);'
    : 'flex:1;padding:10px;border:none;border-radius:10px;font-family:"Nunito",sans-serif;font-weight:700;font-size:13px;cursor:pointer;background:transparent;color:var(--muted);';
}

function renderQuestion() {
  if (state.currentQ >= QUESTIONS.length) { showResults(); return; }
  if (state.currentQ === 4 && state.mgRound === 0) { showMinigame(0); return; }
  if (state.currentQ === 8 && state.mgRound === 1) { showMinigame(1); return; }
  const q = QUESTIONS[state.currentQ];
  if (q.ch !== state.lastChapter && state.lastChapter > 0 && state.lastChapter < q.ch) {
    setTimeout(()=>showLevelUpBanner(state.lastChapter), 200);
  }
  state.lastChapter = q.ch;
  setBgChapter(q.ch);
  const chLabels = ['Bab 1 — Mengenal Narkoba','Bab 2 — Bahaya & Dampak','Bab 3 — Cara Menolak'];
  const chClass = ['ch1','ch2','ch3'];
  document.getElementById('chapter-badge').textContent = chLabels[q.ch-1];
  document.getElementById('chapter-badge').className = 'chapter-badge ' + chClass[q.ch-1];
  document.getElementById('question-emoji').textContent = q.emoji;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('mini-fact-box').classList.remove('show');
  document.getElementById('mini-fact-text').textContent = q.fact;
  document.getElementById('next-btn-wrap').style.display = 'none';
  document.getElementById('score-display').textContent = state.score;
  document.getElementById('streak-display').textContent = state.streak;
  hideNaraHint();
  const pct = (state.currentQ / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-num').textContent = `${state.currentQ+1}/${QUESTIONS.length}`;
  showNaraCardComment(q.ch);
  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  const opts = ['A','B','C','D'];
  let hintShown = false;
  q.opts.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.style.animationDelay = (i*0.08) + 's';
    btn.innerHTML = `<span class="opt-label">${opts[i]}</span> ${opt}`;
    btn.onmouseenter = ()=>{ if (!hintShown && Math.random()<0.3) { hintShown=true; showNaraHint(); } };
    btn.onclick = ()=>answerQuestion(i, btn);
    grid.appendChild(btn);
  });
  const card = document.getElementById('quiz-card');
  card.style.animation = 'none';
  setTimeout(()=>card.style.animation='fadeUp 0.4s forwards', 10);
}

function answerQuestion(idx, btn) {
  const q = QUESTIONS[state.currentQ];
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach(b=>b.disabled=true);
  hideNaraHint();
  if (navigator.vibrate) navigator.vibrate(idx===q.ans ? [50] : [100,50,100]);
  if (idx === q.ans) {
    btn.classList.add('correct');
    state.correct++; state.chCorrect[q.ch-1]++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    let bonus = 10;
    if (state.streak >= 5) { bonus += 15; showToast(`🔥 STREAK ${state.streak}! +25 poin!`, true); playSound('fanfare5'); showNara('streak5','streak5'); }
    else if (state.streak >= 3) { bonus += 10; showToast(`⚡ STREAK ${state.streak}! +20 poin!`, true); playSound('fanfare3'); showNara('streak3','streak3'); }
    else if (state.streak >= 2) { bonus += 5; showToast(`✨ Streak ${state.streak}! +15 poin!`, true); playSound('correct'); showNara('correct','correct'); }
    else { playSound('correct'); showNara('correct','correct'); }
    state.score += bonus;
    floatScore(bonus, btn);
    document.getElementById('score-display').textContent = state.score;
  } else {
    btn.classList.add('wrong');
    btns[q.ans].classList.add('correct');
    state.wrong++;
    const wasStreak = state.streak >= 2;
    state.streak = 0;
    playSound('wrong'); triggerScreenShake();
    if (wasStreak) showNara('streakBreak','streakBreak');
    else showNara('wrong','wrong');
  }
  document.getElementById('streak-display').textContent = state.streak;
  document.getElementById('mini-fact-box').classList.add('show');
  document.getElementById('next-btn-wrap').style.display = 'block';
  state.currentQ++;
}

const MG_TIMER_SEC = 8;

function showMinigame(round) {
  state.mgRound = round + 1;
  setBgChapter(0);
  showNara('minigame','minigame');
  const items = MINIGAMES[round];
  let answered = 0;
  let mgRoundScore = 0;
  document.getElementById('mg-next-btn').style.display = 'none';
  document.getElementById('mg-subtitle').textContent = `Ronde ${round+1} — Jawab sebelum timer habis! ⏱️`;
  document.getElementById('mg-score-num').textContent = '+0';
  document.getElementById('mg-score-display').textContent = state.score;
  document.getElementById('mg-recap-box').classList.remove('show');
  document.getElementById('mg-recap-box').style.display = 'none';
  mgTimers.forEach(t=>clearInterval(t));
  mgTimers = [];
  const container = document.getElementById('myth-items');
  container.innerHTML = '';
  items.forEach((item, i) => {
    container.innerHTML += `
      <div class="mg-item-wrap" id="mg-wrap-${i}">
        <div class="mg-timer-bar"><div class="mg-timer-fill" id="mg-timer-${i}" style="width:100%"></div></div>
        <div class="mg-item-body">
          <div class="mg-item-num">
            <span>Pernyataan ${i+1} dari ${items.length}</span>
            <span class="mg-countdown-badge" id="mg-cd-${i}">${MG_TIMER_SEC}s</span>
          </div>
          <div class="mg-statement">${item.text}</div>
          <div class="myth-buttons">
            <button type="button" class="myth-btn mitos" id="mb-mitos-${i}" onclick="answerMyth(${i},true,${item.isMitos})">🚫 Mitos</button>
            <button type="button" class="myth-btn fakta" id="mb-fakta-${i}" onclick="answerMyth(${i},false,${item.isMitos})">✅ Fakta</button>
          </div>
        </div>
        <div class="mg-explain-box" id="mg-explain-${i}"></div>
      </div>`;
  });
  showScreen('screen-minigame');
  setTimeout(()=>{
    startTickTock();
    window._mgAnswered = Array(items.length).fill(false);
    items.forEach((item, i) => startMgTimer(i, item, items, ()=>{
      answered++;
      if (answered === items.length) setTimeout(()=>onAllMgAnswered(mgRoundScore, items), 600);
    }));
  }, 400);
  window.answerMyth = function(i, choseMitos, isMitos) {
    if (window._mgAnswered[i]) return;
    window._mgAnswered[i] = true;
    clearInterval(mgTimers[i]);
    const correct = choseMitos === isMitos;
    revealMgItem(i, correct, choseMitos, isMitos, MINIGAMES[round][i].explain);
    if (correct) {
      state.score += 5; state.mgScore += 5; mgRoundScore += 5;
      floatScore(5, document.getElementById(choseMitos ? `mb-mitos-${i}` : `mb-fakta-${i}`));
      playSound('mg_correct'); showNara('correct','mgCorrect');
      if (navigator.vibrate) navigator.vibrate([50]);
    } else {
      playSound('mg_wrong'); triggerScreenShake(); showNara('wrong','mgWrong');
      if (navigator.vibrate) navigator.vibrate([100,50,100]);
    }
    document.getElementById('mg-score-num').textContent = '+' + mgRoundScore;
    document.getElementById('mg-score-display').textContent = state.score;
    answered++;
    if (answered === items.length) { stopTickTock(); setTimeout(()=>onAllMgAnswered(mgRoundScore, items), 600); }
  };
}

function startMgTimer(i, item, items, onDone) {
  const timerFill = document.getElementById(`mg-timer-${i}`);
  const cdBadge = document.getElementById(`mg-cd-${i}`);
  const wrap = document.getElementById(`mg-wrap-${i}`);
  const TOTAL = MG_TIMER_SEC * 1000, TICK = 100;
  let elapsed = 0;
  wrap.classList.add('mg-active');
  const interval = setInterval(()=>{
    if (window._mgAnswered && window._mgAnswered[i]) { clearInterval(interval); return; }
    elapsed += TICK;
    const pct = Math.max(0, 100 - (elapsed/TOTAL*100));
    timerFill.style.width = pct + '%';
    const remaining = Math.ceil((TOTAL - elapsed) / 1000);
    cdBadge.textContent = remaining + 's';
    if (remaining <= 3) cdBadge.classList.add('urgent');
    if (elapsed >= TOTAL) {
      clearInterval(interval);
      if (window._mgAnswered && !window._mgAnswered[i]) {
        window._mgAnswered[i] = true;
        playSound('mg_timeout'); showNara('mgTimeout','mgTimeout');
        const mitosBtn = document.getElementById(`mb-mitos-${i}`);
        const faktaBtn = document.getElementById(`mb-fakta-${i}`);
        mitosBtn.disabled = true; faktaBtn.disabled = true;
        wrap.classList.remove('mg-active');
        const explain = document.getElementById(`mg-explain-${i}`);
        explain.style.display = 'block';
        explain.innerHTML = `<span class="mg-timeout-tag">⏰ Waktu Habis!</span><br>${items[i].explain}`;
        if (items[i].isMitos) mitosBtn.className = 'myth-btn correct-result';
        else faktaBtn.className = 'myth-btn correct-result';
        onDone();
      }
    }
  }, TICK);
  mgTimers[i] = interval;
}

function revealMgItem(i, correct, choseMitos, isMitos, explain) {
  const wrap = document.getElementById(`mg-wrap-${i}`);
  const mitosBtn = document.getElementById(`mb-mitos-${i}`);
  const faktaBtn = document.getElementById(`mb-fakta-${i}`);
  const explainEl = document.getElementById(`mg-explain-${i}`);
  wrap.classList.remove('mg-active');
  wrap.classList.add(correct ? 'mg-done-correct' : 'mg-done-wrong');
  mitosBtn.disabled = true; faktaBtn.disabled = true;
  if (choseMitos) {
    mitosBtn.className = 'myth-btn ' + (correct ? 'correct-result' : 'wrong-result');
    if (!correct) faktaBtn.className = 'myth-btn correct-result';
  } else {
    faktaBtn.className = 'myth-btn ' + (correct ? 'correct-result' : 'wrong-result');
    if (!correct) mitosBtn.className = 'myth-btn correct-result';
  }
  explainEl.style.display = 'block';
  explainEl.innerHTML = `<span class="mg-result-tag ${correct?'correct':'wrong'}">${correct?'✅ Benar!':'❌ Salah'}</span><br>${explain}`;
  const timerFill = document.getElementById(`mg-timer-${i}`);
  if (timerFill) timerFill.style.transition = 'none';
}

function onAllMgAnswered(mgRoundScore, items) {
  mgTimers.forEach(t=>clearInterval(t));
  stopTickTock();
  const recapBox = document.getElementById('mg-recap-box');
  const pct = Math.round((mgRoundScore/20)*100);
  const recapEmoji = pct>=75 ? '🎉' : pct>=50 ? '👍' : '💪';
  recapBox.innerHTML = `<span style="font-size:18px">${recapEmoji}</span> <strong>Nara says:</strong> ${pct>=75 ? 'Wow kamu kritis banget! '+mgRoundScore+' dari 20 poin! 🔥' : pct>=50 ? 'Lumayan bestie! '+mgRoundScore+'/20 poin. Belajar lagi ya! 😊' : 'Gapapa '+mgRoundScore+'/20, yang penting udah nyoba! 💪 Baca faktanya ya!'}`;
  recapBox.style.display = 'block';
  recapBox.classList.add('show');
  document.getElementById('mg-next-btn').style.display = 'block';
}

function finishMinigame() {
  mgTimers.forEach(t=>clearInterval(t));
  stopTickTock();
  showScreen('screen-quiz');
  setTimeout(()=>renderQuestion(), 350);
}

function nextQuestion() {
  playSound('click');
  renderQuestion();
}

function showResults() {
  const pct = Math.round((state.correct/QUESTIONS.length)*100);
  playSound('end');

  // Reset mobile cert state
  certMobileVisible = false;
  const mobileCertSlot = document.getElementById('mobile-cert-slot');
  mobileCertSlot.classList.remove('show');
  document.getElementById('cert-toggle-btn').setAttribute('aria-expanded', 'false');
  document.getElementById('cert-toggle-icon').textContent = '🎓';
  document.getElementById('cert-toggle-text').textContent = 'Lihat Sertifikat';

  const ch1Pct = Math.round((state.chCorrect[0]/4)*100);
  const ch2Pct = Math.round((state.chCorrect[1]/4)*100);
  const ch3Pct = Math.round((state.chCorrect[2]/4)*100);
  setTimeout(()=>{
    document.getElementById('ch1-bar').style.width = ch1Pct+'%';
    document.getElementById('ch2-bar').style.width = ch2Pct+'%';
    document.getElementById('ch3-bar').style.width = ch3Pct+'%';
    document.getElementById('ch1-pct').textContent = ch1Pct+'%';
    document.getElementById('ch2-pct').textContent = ch2Pct+'%';
    document.getElementById('ch3-pct').textContent = ch3Pct+'%';
  }, 500);

  const rank = RANKS.find(r=>pct>=r.min) || RANKS[RANKS.length-1];
  const rankBadge = document.getElementById('rank-badge');
  document.getElementById('rank-icon').textContent = rank.icon;
  document.getElementById('rank-label').textContent = rank.label;
  document.getElementById('rank-sub').textContent = rank.sub;
  rankBadge.style.setProperty('--badge-start', rank.badgeStart);
  rankBadge.style.setProperty('--badge-end', rank.badgeEnd);
  rankBadge.style.setProperty('--badge-glow', rank.badgeGlow);
  document.getElementById('cert-name').textContent = state.playerName||'Anonim';
  document.getElementById('cert-score').textContent = state.score;
  document.getElementById('cert-acc').textContent = pct+'%';
  document.getElementById('cert-streak').textContent = state.bestStreak;
  document.getElementById('cert-rank-text').textContent = rank.icon+' '+rank.label;
  renderMobileCert(rank, pct);

  const chapterData = [
    { label: 'Bab 1', pct: ch1Pct },
    { label: 'Bab 2', pct: ch2Pct },
    { label: 'Bab 3', pct: ch3Pct }
  ];
  updateResultExtras(pct, rank, chapterData);

  let mascot, title, category, catStyle;
  if (pct>=90) { mascot='👑';title='SEMPURNA!!';category='👑 Legenda Anti-Narkoba';catStyle='background:linear-gradient(135deg,#FFD93D,#FF8C42);color:white';launchFireworks();launchConfetti();showNara('win','win'); }
  else if (pct>=75) { mascot='🏆';title='Luar Biasa!';category='🏆 Pahlawan Anti-Narkoba';catStyle='background:#E8FFF0;color:var(--green)';launchConfetti();showNara('win','win'); }
  else if (pct>=60) { mascot='🌟';title='Bagus Banget!';category='⭐ Pejuang Anti-Narkoba';catStyle='background:#F0E6FF;color:var(--purple)';showNara('correct','correct'); }
  else if (pct>=40) { mascot='📚';title='Terus Belajar!';category='📖 Calon Pahlawan';catStyle='background:#FFF5E8;color:var(--orange)';showNara('wrong','lose'); }
  else { mascot='💪';title='Jangan Menyerah!';category='💪 Pemula yang Berani';catStyle='background:#FFE8E8;color:var(--red)';showNara('lose','lose'); }

  document.getElementById('result-mascot').textContent = mascot;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-category').textContent = category;
  document.getElementById('result-category').style.cssText = catStyle+';padding:6px 18px;border-radius:100px;font-size:14px;font-weight:800;margin:0 auto 16px;display:block;width:fit-content';
  document.getElementById('final-score').textContent = state.score;
  document.getElementById('stat-accuracy').textContent = pct+'%';
  document.getElementById('stat-streak').textContent = state.bestStreak;
  document.getElementById('stat-correct').textContent = state.correct;
  document.getElementById('stat-wrong').textContent = state.wrong;
  document.getElementById('anti-quote').textContent = QUOTES[Math.floor(Math.random()*QUOTES.length)];
  document.getElementById('progress-fill').style.width = '100%';
  setBgChapter(pct>=75 ? 1 : 2);
  document.getElementById('screen-results').scrollTop = 0;
  showScreen('screen-results');
}

function shareWA() {
  const name = state.playerName||'Seorang siswa';
  const pct = Math.round((state.correct/QUESTIONS.length)*100);
  const rank = RANKS.find(r=>pct>=r.min)||RANKS[RANKS.length-1];
  const msg = `🎯 *Narkoba Quest v2 — SMK N 1 Kongbeng*\n\n`+
    `👤 Pemain: ${name}\n${rank.icon} Gelar: ${rank.label}\n⭐ Skor: ${state.score}/200\n📊 Akurasi: ${pct}%\n🔥 Streak Terbaik: ${state.bestStreak}\n✅ Benar: ${state.correct}/${QUESTIONS.length}\n\n🛡️ Generasi Bebas Narkoba dari Kaltim!\n#NarkobaQuest #SMK1Kongbeng #AntiNarkoba #KutaiTimur`;
  window.open('https://wa.me/?text='+encodeURIComponent(msg));
}

function startGame() {
  initAudio();
  if (!bgmStarted) startBGM();
  playSound('click');
  state.playerName = document.getElementById('player-name').value || 'Anonim';
  state.storyIndex = 0;
  state.seenFacts = new Set();
  initStoryFacts();
  initTips();
  showScreen('screen-facts');
  showNara('dance','start');
}

function goToQuiz() {
  playSound('click');
  showScreen('screen-quiz');
  showNara('correct','start');
  state.lastChapter = 0;
  setTimeout(()=>renderQuestion(), 350);
}

function restartGame() {
  playSound('click');
  mgTimers.forEach(t=>clearInterval(t));
  stopTickTock();
  state = {
    playerName: state.playerName, score:0, streak:0, bestStreak:0, correct:0, wrong:0,
    currentQ:0, storyIndex:0, mgRound:0, mgAnswers:0,
    chCorrect:[0,0,0], chTotal:[4,4,4],
    mgScore:0, gamePhase:'quiz', questionCount:12,
    lastChapter: 0, seenFacts: new Set()
  };
  document.getElementById('score-display').textContent = '0';
  document.getElementById('streak-display').textContent = '0';
  document.getElementById('progress-fill').style.width = '0%';
  setBgChapter(1);
  if (!bgmRunning) startBGM();
  showScreen('screen-quiz');
  setTimeout(()=>renderQuestion(), 350);
}

document.getElementById('screen-welcome').addEventListener('click', ()=>{ initAudio(); }, {once: true});

initStars();
setBgChapter(1);
showNara('idle','start');
