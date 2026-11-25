'use client';

const WA_LINK =
  'https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20saya%20ingin%20konsultasi%20kebutuhan%20desain%20dan%20percetakan%20untuk%20sekolah/instansi.';

export default function Navbar() {
  const openProductZoom = (productId: string) => {
    window.dispatchEvent(
      new CustomEvent('open-product-modal', { detail: productId })
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-extrabold text-white shadow-xs">
            S
          </div>
          <div className="leading-tight">
            <span className="block text-base font-bold text-slate-900">
              Steviani
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              Project Partner · Kios Pelangi
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <button
            type="button"
            onClick={() => openProductZoom('produk-buku-kenangan')}
            className="cursor-pointer transition hover:text-orange-600"
          >
            Buku Kenangan
          </button>
          <button
            type="button"
            onClick={() => openProductZoom('produk-kalender')}
            className="cursor-pointer font-semibold text-orange-600 transition hover:text-orange-700"
          >
            Kalender 2027
          </button>
          <button
            type="button"
            onClick={() => openProductZoom('produk-souvenir')}
            className="cursor-pointer transition hover:text-orange-600"
          >
            Souvenir
          </button>
          <button
            type="button"
            onClick={() => openProductZoom('produk-percetakan')}
            className="cursor-pointer transition hover:text-orange-600"
          >
            Percetakan
          </button>
          <a href="#profil" className="transition hover:text-orange-600">
            Profil PIC
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-5 sm:text-sm"
          >
            <span>Konsultasi WA</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Sub-menu kategori khusus tampilan HP / Tablet */}
      <div className="flex items-center gap-2 overflow-x-auto border-t border-orange-50 bg-white px-4 py-2 text-xs font-semibold text-slate-600 lg:hidden">
        <button
          type="button"
          onClick={() => openProductZoom('produk-buku-kenangan')}
          className="shrink-0 cursor-pointer rounded-full border border-orange-100 bg-[#FFFBF7] px-3 py-1 text-orange-700"
        >
          Buku Kenangan
        </button>
        <button
          type="button"
          onClick={() => openProductZoom('produk-kalender')}
          className="shrink-0 cursor-pointer rounded-full border border-orange-300 bg-orange-50 px-3 py-1 font-bold text-orange-700"
        >
          Kalender 2027
        </button>
        <button
          type="button"
          onClick={() => openProductZoom('produk-souvenir')}
          className="shrink-0 cursor-pointer rounded-full border border-orange-100 bg-[#FFFBF7] px-3 py-1 text-orange-700"
        >
          Souvenir
        </button>
        <button
          type="button"
          onClick={() => openProductZoom('produk-percetakan')}
          className="shrink-0 cursor-pointer rounded-full border border-orange-100 bg-[#FFFBF7] px-3 py-1 text-orange-700"
        >
          Percetakan
        </button>
        <a
          href="#profil"
          className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700"
        >
          Profil PIC
        </a>
      </div>
    </header>
  );
}