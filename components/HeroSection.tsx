'use client';

import { useState, useEffect } from 'react';

const products = [
  {
    id: 'produk-buku-kenangan',
    dlgId: 'dlg-buku-kenangan',
    navLabel: 'Buku Kenangan',
    shortName: 'Buku Kenangan (Yearbook)',
    spec: 'Art Paper / Matte · Hardcover & Softcover Custom',
    image: '/images/buku-kenangan.webp',
    alt: 'Desain dan Cetak Buku Kenangan Sekolah — Steviani Kios Pelangi',
  },
  {
    id: 'produk-kalender',
    dlgId: 'dlg-kalender',
    navLabel: 'Kalender 2027',
    shortName: 'Daftar Harga Cetak Kalender 2027',
    spec: 'Art Paper 120 gsm & 150 gsm · Finishing Klep Seng / Spiral',
    image: '/images/kalender2027.webp',
    alt: 'Daftar Harga Cetak Kalender Sekolah dan Instansi 2027 — Steviani Kios Pelangi',
  },
  {
    id: 'produk-souvenir',
    dlgId: 'dlg-souvenir',
    navLabel: 'Souvenir',
    shortName: 'Souvenir & Merchandise Acara',
    spec: 'Plakat, Tumbler, Mug, Totebag & Seminar Kit Custom Logo',
    image: '/images/surabaya-souvenir.webp',
    alt: 'Paket Souvenir Wisuda dan Seminar Instansi — Steviani Kios Pelangi',
  },
  {
    id: 'produk-percetakan',
    dlgId: 'dlg-percetakan',
    navLabel: 'Percetakan',
    shortName: 'Percetakan Umum & Promosi',
    spec: 'Brosur PPDB, Map Custom, Sertifikat & Banner Lembaga',
    image: '/images/cetak-umkm.webp',
    alt: 'Layanan Percetakan Umum dan Promosi Lembaga — Steviani Kios Pelangi',
  },
];

const WA_CONSULT_LINK =
  'https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20kami%20dari%20sekolah/instansi%20ingin%20berdiskusi%20mengenai%20kebutuhan%20desain%20dan%20percetakan.';

function openDialog(dlgId: string) {
  const dlg = document.getElementById(dlgId) as HTMLDialogElement | null;
  if (dlg && typeof dlg.showModal === 'function') {
    if (!dlg.open) dlg.showModal();
  }
}

function closeDialog(dlgId: string) {
  const dlg = document.getElementById(dlgId) as HTMLDialogElement | null;
  if (dlg && dlg.open) {
    dlg.close();
  }
}

export default function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        dialog.brosur-dialog::backdrop {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(4px);
        }
      `}</style>

      {/* NAVBAR: KLIK MENU LANGSUNG SCROLL KE BAWAH SESUAI PRODUK */}
      <header className="sticky top-0 z-40 border-b border-orange-100/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#beranda" className="flex items-center gap-3">
            <img
              src="/images/steviani.webp"
              alt="Foto Steviani — Project Partner Kios Pelangi"
              className="h-11 w-11 rounded-full border-2 border-orange-200 object-cover object-top shadow-xs"
            />
            <div className="leading-tight">
              <span className="block text-base font-bold text-slate-900">
                Steviani
              </span>
              <span className="block text-[11px] font-medium text-slate-500">
                Project Partner · Kios Pelangi
              </span>
            </div>
          </a>

          {/* Menu Desktop Scroll ke Bagian Bawah */}
          <nav className="hidden items-center gap-2 lg:flex">
            {products.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {item.navLabel}
              </a>
            ))}
            <a
              href="#profil"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
            >
              Profil PIC
            </a>
          </nav>

          <a
            href={WA_CONSULT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-5 sm:text-sm"
          >
            <span>Konsultasi WA</span>
            <span>→</span>
          </a>
        </div>

        {/* Sub-menu Kategori Khusus HP / Tablet */}
        <div className="flex items-center gap-2 overflow-x-auto border-t border-orange-50 bg-white px-4 py-2 text-xs font-semibold lg:hidden">
          {products.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-orange-100 bg-[#FFFBF7] px-3.5 py-1.5 text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
            >
              {item.navLabel}
            </a>
          ))}
          <a
            href="#profil"
            className="shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-slate-700"
          >
            Profil PIC
          </a>
        </div>
      </header>

      {/* HERO + SLIDER BERGERAK OTOMATIS */}
      <section
        id="beranda"
        className="border-b border-orange-100/70 bg-white pt-8 pb-16 sm:pt-12 sm:pb-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-[#FFFBF7] px-3.5 py-1.5 text-xs font-semibold text-orange-600">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span>Buku Kenangan · Kalender 2027 · Souvenir · Percetakan</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Partner pengadaan desain &amp; percetakan untuk{' '}
                <span className="text-orange-500">sekolah &amp; instansi.</span>
              </h1>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Pendampingan lengkap mulai dari penyusunan konsep desain,
                penyesuaian spesifikasi bahan dengan RAB, hingga kontrol produksi
                bersama Kios Pelangi Mojokerto &amp; Surabaya.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WA_CONSULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <span>Konsultasi &amp; Minta Penawaran</span>
                  <span>→</span>
                </a>
                <a
                  href="#produk-kalender"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-orange-300 hover:bg-[#FFFBF7]"
                >
                  <span>Lihat Daftar Harga Kalender 2027 ↓</span>
                </a>
              </div>
            </div>

            {/* SLIDER GESER HALUS (BERGERAK OTOMATIS TIAP 3 DETIK) */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="lg:col-span-6"
            >
              <div className="relative mx-auto max-w-xl rounded-3xl border border-orange-100/80 bg-white p-3 shadow-xl shadow-orange-100/30">
                <div className="relative overflow-hidden rounded-2xl bg-white">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                  >
                    {products.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => openDialog(item.dlgId)}
                        title="Klik untuk memperbesar brosur layar penuh"
                        className="w-full shrink-0 cursor-zoom-in"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Tombol Panah Kiri & Kanan */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Slide sebelumnya"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-sm font-extrabold text-orange-600 shadow-md transition hover:bg-orange-500 hover:text-white"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Slide berikutnya"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-sm font-extrabold text-orange-600 shadow-md transition hover:bg-orange-500 hover:text-white"
                  >
                    ›
                  </button>
                </div>

                {/* Keterangan Slide Aktif + Titik Indikator */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <button
                    type="button"
                    onClick={() => openDialog(products[slideIndex].dlgId)}
                    className="cursor-pointer text-left text-xs font-bold text-slate-800 hover:text-orange-600"
                  >
                    0{slideIndex + 1}. {products[slideIndex].shortName}{' '}
                    <span className="ml-1 font-semibold text-orange-500">
                      (Klik perbesar 🔍)
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {products.map((dot, idx) => (
                      <button
                        key={dot.id}
                        type="button"
                        onClick={() => setSlideIndex(idx)}
                        aria-label={`Pilih ${dot.navLabel}`}
                        className={`h-2.5 cursor-pointer rounded-full transition-all ${
                          slideIndex === idx
                            ? 'w-6 bg-orange-500'
                            : 'w-2.5 bg-slate-200 hover:bg-orange-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galeri Full 4 Produk (2 Kolom Besar - Target Scroll dari Navbar) */}
          <div
            id="etalase-produk"
            className="mt-14 scroll-mt-24 border-t border-orange-100/70 pt-10"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                  Katalog &amp; Daftar Harga Layanan
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  4 Lini Produk &amp; Percetakan Sekolah / Instansi
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Klik pada gambar brosur untuk memperbesar rincian ukuran dan harga
              </p>
            </div>

            <div className="mt-6 grid gap-7 md:grid-cols-2">
              {products.map((item, idx) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="flex scroll-mt-28 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all hover:border-orange-300 hover:shadow-md"
                >
                  <div
                    onClick={() => openDialog(item.dlgId)}
                    className="group relative w-full cursor-zoom-in overflow-hidden border-b border-orange-100/60 bg-white p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-auto w-full rounded-2xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-bold text-white shadow-xs">
                      0{idx + 1} · {item.navLabel}
                    </span>
                    <span className="absolute bottom-5 right-5 rounded-full border border-orange-200 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-orange-600 shadow-sm">
                      🔍 Klik Perbesar
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.shortName}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                        {item.spec}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20saya%20ingin%20tanya%20penawaran%20untuk%20${encodeURIComponent(
                        item.shortName
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600 sm:text-sm"
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

      {/* 4 DIALOG NATIVE HTML5 SUPER BESAR */}
      {products.map((modalItem) => (
        <dialog
          key={modalItem.dlgId}
          id={modalItem.dlgId}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDialog(modalItem.dlgId);
          }}
          className="brosur-dialog m-auto max-h-[96vh] w-[96vw] max-w-7xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 shadow-2xl sm:rounded-3xl"
        >
          <div className="p-3 sm:p-5">
            <div className="sticky top-0 z-20 mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-white/95 pb-3 backdrop-blur-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                {products.map((tab) => (
                  <button
                    key={tab.dlgId}
                    type="button"
                    onClick={() => {
                      closeDialog(modalItem.dlgId);
                      openDialog(tab.dlgId);
                    }}
                    className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                      tab.dlgId === modalItem.dlgId
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {tab.navLabel}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20saya%20sudah%20melihat%20${encodeURIComponent(
                    modalItem.shortName
                  )}%20dan%20ingin%20konsultasi%20pesanan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800 sm:text-sm"
                >
                  Pesan via WA →
                </a>
                <button
                  type="button"
                  onClick={() => closeDialog(modalItem.dlgId)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-base font-bold text-slate-700 hover:bg-slate-100"
                  aria-label="Tutup tampilan besar"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mb-2 px-1">
              <h3 className="text-base font-extrabold text-slate-900 sm:text-xl">
                {modalItem.shortName}
              </h3>
              <p className="text-xs text-slate-500 sm:text-sm">
                {modalItem.spec}
              </p>
            </div>

            <img
              src={modalItem.image}
              alt={modalItem.alt}
              className="mx-auto h-auto w-full rounded-xl object-contain"
            />
          </div>
        </dialog>
      ))}
    </>
  );
}