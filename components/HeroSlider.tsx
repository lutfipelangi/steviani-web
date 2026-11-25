'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 'produk-buku-kenangan',
    navLabel: 'Buku Kenangan',
    badge: 'Spesialis Buku Kenangan Sekolah & Kampus',
    titleLine1: 'Abadikan momen',
    titleLine2: 'kelulusan dalam',
    highlight: 'buku kenangan berkelas.',
    description:
      'Pendampingan mulai dari konsep tema, layout halaman siswa & guru, hingga cetak hardcover premium sesuai RAB sekolah.',
    spec: 'Art Paper / Matte · Hardcover & Softcover Custom',
    shortName: 'Buku Kenangan (Yearbook)',
    image: '/images/buku-kenangan.webp',
    alt: 'Desain dan Cetak Buku Kenangan Sekolah — Steviani Kios Pelangi',
    waText:
      'Halo Kak, kami ingin konsultasi konsep dan harga cetak Buku Kenangan Sekolah.',
  },
  {
    id: 'produk-kalender',
    navLabel: 'Kalender 2027',
    badge: 'Open Order Kalender Dinding & Meja 2027',
    titleLine1: 'Cetak kalender 2027',
    titleLine2: 'custom logo untuk',
    highlight: 'sekolah & instansi.',
    description:
      'Tersedia pilihan Art Paper 120 gsm & 150 gsm dengan finishing klep seng maupun spiral. Cocok untuk promosi PPDB dan agenda lembaga.',
    spec: 'Art Paper 120 gsm & 150 gsm · Finishing Klep Seng / Spiral',
    shortName: 'Daftar Harga Cetak Kalender 2027',
    image: '/images/kalender2027.webp',
    alt: 'Daftar Harga Cetak Kalender Sekolah dan Instansi 2027 — Steviani Kios Pelangi',
    waText:
      'Halo Kak, kami ingin minta penawaran cetak Kalender 2027 untuk sekolah/instansi kami.',
  },
  {
    id: 'produk-souvenir',
    navLabel: 'Souvenir',
    badge: 'Souvenir Wisuda, Seminar & Acara Resmi',
    titleLine1: 'Kenang-kenangan',
    titleLine2: 'acara resmi yang',
    highlight: 'rapi & bermanfaat.',
    description:
      'Pengadaan plakat, tumbler, mug, totebag, hingga seminar kit custom logo instansi dengan pengemasan aman dan pengiriman tepat waktu.',
    spec: 'Plakat, Tumbler, Mug, Totebag & Seminar Kit Custom Logo',
    shortName: 'Souvenir & Merchandise Acara',
    image: '/images/surabaya-souvenir.webp',
    alt: 'Paket Souvenir Wisuda dan Seminar Instansi — Steviani Kios Pelangi',
    waText:
      'Halo kak, kami ingin tanya paket souvenir wisuda / acara instansi.',
  },
  {
    id: 'produk-percetakan',
    navLabel: 'Percetakan',
    badge: 'Layanan Cetak Promosi & Administrasi',
    titleLine1: 'Solusi lengkap',
    titleLine2: 'percetakan untuk',
    highlight: 'kebutuhan lembaga.',
    description:
      'Mulai dari brosur PPDB, map raport/dokumen custom, sertifikat, hingga banner acara dengan hasil warna tajam bersama Kios Pelangi.',
    spec: 'Brosur PPDB, Map Custom, Sertifikat & Banner Lembaga',
    shortName: 'Percetakan Umum & Promosi',
    image: '/images/cetak-umkm.webp',
    alt: 'Layanan Percetakan Umum dan Promosi Lembaga — Steviani Kios Pelangi',
    waText:
      'Halo Kak, kami ingin konsultasi kebutuhan cetak brosur / map / promosi lembaga.',
  },
];

const WA_CONSULT_LINK =
  'https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20kami%20dari%20sekolah/instansi%20ingin%20berdiskusi%20mengenai%20kebutuhan%20desain%20dan%20percetakan.';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Auto-play: jadwalkan perpindahan untuk setiap slide.
  // Timer diulang setiap currentSlide berubah dan berhenti saat modal dibuka.
  useEffect(() => {
    if (activeModalIndex !== null) return;

    const timer = window.setTimeout(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [currentSlide, activeModalIndex]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Dukungan geser layar sentuh (swipe) di HP
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) nextSlide();
    if (diff < -45) prevSlide();
    setTouchStartX(null);
  };

  const activeModalProduct =
    activeModalIndex !== null ? slides[activeModalIndex] : null;

  return (
    <>
      {/* NAVBAR BIRU DONGKER & AKSEN ORANGE */}
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-6 sm:py-3.5">
          <a href="#beranda" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src="/images/steviani.webp"
              alt="Foto Steviani — Project Partner Kios Pelangi"
              className="h-10 w-10 shrink-0 rounded-full border-2 border-orange-200 object-cover object-top shadow-xs sm:h-11 sm:w-11"
            />
            <div className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold text-blue-950 sm:text-base">
                Steviani
              </span>
              <span className="block truncate text-[10px] font-semibold text-blue-800 sm:text-[11px]">
                Project Partner · Kios Pelangi
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {slides.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 hover:text-orange-600"
              >
                {item.navLabel}
              </a>
            ))}
            <a
              href="#profil"
              className="rounded-full px-4 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 hover:text-orange-600"
            >
              Profil PIC
            </a>
          </nav>

          {/* Tombol konsultasi dengan aksen orange */}
          <a
            href={WA_CONSULT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green-500 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-green-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-200 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span>Konsultasi WA</span>
            <span>→</span>
          </a>
        </div>

        {/* Sub-menu Kategori Khusus HP / Tablet */}
        <div className="flex items-center gap-2 overflow-x-auto border-t border-blue-50 bg-white px-3 py-2 text-xs font-semibold lg:hidden">
          {slides.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-blue-100 bg-[#FFFBF7] px-3 py-1 text-blue-950 transition hover:border-orange-300 hover:text-orange-600"
            >
              {item.navLabel}
            </a>
          ))}
          <a
            href="#profil"
            className="shrink-0 rounded-full border border-blue-100 bg-white px-3 py-1 text-blue-950"
          >
            Profil PIC
          </a>
        </div>
      </header>

      {/* HERO SLIDER PENUH (TEKS + GAMBAR BERGERAK BERSAMA-SAMA) */}
      <section
        id="beranda"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-white to-orange-50/50 pt-6 pb-12 sm:pt-12 sm:pb-16"
      >
        <div className="mx-auto max-w-6xl px-3 sm:px-6">
          {/* Track Slide yang Menggerakkan Teks + Gambar Bersamaan */}
          <div className="overflow-hidden">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="w-full min-w-full shrink-0 px-1" 
                >
                  <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
                    {/* Kolom Kiri: Teks Responsif Mengikuti Lebar HP */}
                    <div className="lg:col-span-6">
                      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-100 bg-[#FFFBF7] px-3 py-1 text-[11px] font-semibold text-orange-600 sm:px-3.5 sm:py-1.5 sm:text-xs">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                        <span className="truncate">{slide.badge}</span>
                      </div>

                      <h1 className="mt-3 text-[1.65rem] leading-[1.2] font-extrabold tracking-tight text-blue-950 sm:mt-4 sm:text-4xl lg:text-[2.7rem] lg:leading-[1.15]">
                        {slide.titleLine1} {slide.titleLine2}{' '}
                        <span className="block text-orange-500 sm:inline">
                          {slide.highlight}
                        </span>
                      </h1>

                      <p className="mt-3 text-xs leading-relaxed text-blue-900/90 sm:mt-4 sm:text-base">
                        {slide.description}
                      </p>

                      {/* Tombol Aksi */}
                      <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
                        <a
                          href={`https://wa.me/62818470027?text=${encodeURIComponent(
                            slide.waText
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-green-600 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
                        >
                          <span>Pesan &amp; Konsultasi WA</span>
                          <span>→</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setActiveModalIndex(idx)}
                          className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-xs font-semibold text-blue-950 transition hover:border-orange-300 hover:bg-[#FFFBF7] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
                        >
                          <span>🔍 Perbesar Brosur</span>
                        </button>
                      </div>
                    </div>

                    {/* Kolom Kanan: Gambar Produk */}
                    <div className="lg:col-span-6">
                      <div
                        onClick={() => setActiveModalIndex(idx)}
                        title="Klik untuk memperbesar brosur"
                        className="mx-auto max-w-xl cursor-zoom-in rounded-2xl border border-blue-100 bg-white p-2 shadow-lg shadow-blue-950/5 sm:rounded-3xl sm:p-3"
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="h-auto w-full rounded-xl object-contain sm:rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KONTROL SLIDER DI BAWAH (TOMBOL PANAH + PAGINASI 01 / 04 SEPERTI KIOSPELANGI) */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-blue-50 pt-5 sm:mt-9">
            {/* Indikator Titik & Nomor Slide (01 / 04) */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Slide ${idx + 1}: ${s.navLabel}`}
                    className={`h-2.5 cursor-pointer rounded-full transition-all ${
                      currentSlide === idx
                        ? 'w-7 bg-orange-500'
                        : 'w-2.5 bg-blue-100 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold tracking-wider text-blue-950">
                0{currentSlide + 1} <span className="text-blue-300">/</span> 0{slides.length}
              </span>
              <span className="hidden text-xs font-medium text-blue-800 sm:inline">
                — {slides[currentSlide].navLabel}
              </span>
            </div>

            {/* Tombol Navigasi Sebelumnya & Berikutnya */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Slide sebelumnya"
                className="inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-blue-200 bg-white px-3.5 text-xs font-bold text-blue-950 transition hover:border-orange-400 hover:bg-orange-500 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:h-10 sm:px-4"
              >
                <span>←</span>
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Slide berikutnya"
                className="inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-full border border-blue-200 bg-white px-3.5 text-xs font-bold text-blue-950 transition hover:border-orange-400 hover:bg-orange-500 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:h-10 sm:px-4"
              >
                <span className="hidden sm:inline">Berikutnya</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* GALERI FULL 4 PRODUK (BISA DIKLIK UNTUK PERBESAR) */}
          <div
            id="etalase-produk"
            className="mt-12 scroll-mt-24 border-t border-blue-100 pt-10"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  Katalog &amp; Daftar Harga Layanan
                </p>
                <h2 className="mt-1 text-lg font-extrabold text-blue-950 sm:text-2xl">
                  4 Lini Produk &amp; Percetakan Sekolah / Instansi
                </h2>
              </div>
              <p className="text-xs font-medium text-blue-800">
                Klik pada gambar brosur untuk memperbesar rincian ukuran dan harga
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 sm:gap-7">
              {slides.map((item, idx) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="flex scroll-mt-28 flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white transition-all hover:border-orange-300 hover:shadow-md sm:rounded-3xl"
                >
                  {/* Bar Label Rapi di Atas Gambar */}
                  <div className="flex items-center justify-between border-b border-blue-50 bg-[#FFFBF7] px-3.5 py-2.5 sm:px-4">
                    <span className="rounded-full bg-blue-950 px-3 py-1 text-[11px] font-bold text-white sm:text-xs">
                      0{idx + 1} · {item.navLabel}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalIndex(idx)}
                      className="cursor-pointer rounded-full border border-orange-200 bg-white px-3 py-1 text-[11px] font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white sm:px-3.5 sm:text-xs"
                    >
                      🔍 Klik Perbesar
                    </button>
                  </div>

                  {/* Gambar Brosur (Klik Langsung Membuka Modal Layar Penuh) */}
                  <button
                    type="button"
                    onClick={() => setActiveModalIndex(idx)}
                    className="group block w-full cursor-zoom-in overflow-hidden border-b border-blue-50 bg-white p-2.5 text-left sm:p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01] sm:rounded-2xl"
                    />
                  </button>

                  <div className="flex flex-col justify-between gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
                    <div>
                      <h3 className="text-base font-bold text-blue-950 sm:text-lg">
                        {item.shortName}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-blue-800 sm:text-sm">
                        {item.spec}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/62818470027?text=${encodeURIComponent(
                        item.waText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-green-500 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-600 sm:w-auto sm:text-sm"
                    >
                      <span>Tanya Penawaran</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL LIGHTBOX LAYAR PENUH UNTUK MEMPERBESAR BROSUR */}
      {activeModalProduct && activeModalIndex !== null && (
        <div
          onClick={() => setActiveModalIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/85 p-2.5 backdrop-blur-xs sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-blue-100 bg-white p-3 shadow-2xl sm:rounded-3xl sm:p-5"
          >
            <div className="sticky top-0 z-20 mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 bg-white/95 pb-3 backdrop-blur-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                {slides.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveModalIndex(idx)}
                    className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-bold transition sm:px-3.5 sm:py-1.5 sm:text-xs ${
                      idx === activeModalIndex
                        ? 'bg-orange-500 text-white'
                        : 'bg-blue-50 text-blue-950 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {tab.navLabel}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/62818470027?text=${encodeURIComponent(
                    activeModalProduct.waText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-500 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-green-600 sm:px-4 sm:py-2 sm:text-sm"
                >
                  Pesan via WA →
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-blue-200 bg-white text-sm font-bold text-blue-950 hover:bg-blue-50 sm:h-9 sm:w-9 sm:text-base"
                  aria-label="Tutup tampilan besar"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-3 px-1">
              <h3 className="text-sm font-extrabold text-blue-950 sm:text-xl">
                {activeModalProduct.shortName}
              </h3>
              <p className="text-xs text-blue-800 sm:text-sm">
                {activeModalProduct.spec}
              </p>
            </div>

            <img
              src={activeModalProduct.image}
              alt={activeModalProduct.alt}
              className="mx-auto h-auto w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}