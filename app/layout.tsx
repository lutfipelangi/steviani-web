import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://steviani.my.id'),
  title: {
    default: 'Steviani — Project Partner Kios Pelangi | Kalender 2027 & Percetakan Sekolah',
    template: '%s | Steviani — Kios Pelangi',
  },
  description:
    'Pendampingan pengadaan percetakan & kreatif untuk sekolah, kampus, dan instansi di Surabaya, Sidoarjo, dan Mojokerto dan sekitarnya. Spesialis buku kenangan (yearbook), kalender custom 2027, souvenir acara, dan percetakan kebutuhan lembaga.',
  keywords: [
    'Steviani Kios Pelangi',
    'cetak kalender sekolah instansi 2027',
    'daftar harga cetak kalender 2027',
    'percetakan buku kenangan sekolah Mojokerto',
    'jasa yearbook Surabaya Mojokerto',
    'souvenir wisuda seminar instansi',
    'percetakan brosur map sertifikat sekolah',
    'vendor percetakan sekolah dan instansi',
    'Kios Pelangi Mojokerto',
  ],
  authors: [{ name: 'Steviani', url: 'https://steviani.my.id' }],
  creator: 'Steviani — Kios Pelangi',
  publisher: 'Kios Pelangi',
  alternates: {
    canonical: 'https://steviani.my.id',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://steviani.my.id',
    siteName: 'Steviani — Project Partner Kios Pelangi',
    title: 'Daftar Harga Cetak Kalender 2027 — Steviani · Kios Pelangi (Gratis Desain)',
    description:
      'Cek pricelist resmi cetak Kalender 2027 (AP 120 gsm & 150 gsm, finishing klep seng / spiral), buku kenangan, souvenir, dan layanan percetakan sekolah & instansi.',
    images: [
      {
        url: 'https://steviani.my.id/images/kalender2027.webp',
        width: 1200,
        height: 630,
        alt: 'Daftar Harga Cetak Kalender Dinding 2027 — Steviani Kios Pelangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daftar Harga Cetak Kalender 2027 — Steviani · Kios Pelangi',
    description:
      'Cek pricelist resmi cetak Kalender 2027, buku kenangan, souvenir, dan kebutuhan lembaga untuk sekolah & instansi bersama Steviani — Kios Pelangi.',
    images: ['https://steviani.my.id/images/kalender2027.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://steviani.my.id/#steviani',
        name: 'Steviani',
        jobTitle: 'Project Partner',
        url: 'https://steviani.my.id',
        telephone: '+62818470027',
        worksFor: {
          '@type': 'Organization',
          name: 'Kios Pelangi',
          url: 'https://kiospelangi.com',
        },
        areaServed: [
          { '@type': 'City', name: 'Mojokerto' },
          { '@type': 'City', name: 'Surabaya' },
          { '@type': 'City', name: 'Sidoarjo' },
          { '@type': 'AdministrativeArea', name: 'Jawa Timur' },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://steviani.my.id/#service',
        name: 'Steviani — Project Partner Kios Pelangi',
        url: 'https://steviani.my.id',
        telephone: '+62818470027',
        priceRange: '$$',
        description:
          'Layanan konsultasi desain dan pengadaan percetakan untuk sekolah, kampus, dan instansi: buku kenangan, kalender custom 2027, souvenir acara, dan percetakan kebutuhan lembaga.',
        provider: {
          '@id': 'https://steviani.my.id/#steviani',
        },
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${plusJakarta.className} bg-white text-blue-950 antialiased selection:bg-orange-100 selection:text-blue-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        {/* TOMBOL WA MELAYANG DI POJOK KANAN BAWAH (MENIMPA & MENGGANTIKAN BADGE NETLIFY) */}
        <a
          id="floating-wa-steviani"
          href="https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20kami%20ingin%20konsultasi%20dan%20tanya%20penawaran%20percetakan%20/%20Kalender%202027."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp Admin"
          className="fixed right-4 bottom-4 z-[2147483647] inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-xs font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:scale-105 hover:bg-green-600 sm:right-5 sm:bottom-5 sm:px-5 sm:py-3.5 sm:text-sm"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
          <span>Chat WA · <Admin></Admin></span>
        </a>

        {/* PEMBERSIH OTOMATIS ELEMEN NETLIFY */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function purgeNetlify() {
                  document.querySelectorAll('a[href*="netlify"], iframe[src*="netlify"], [id*="netlify"], [class*="netlify"], [data-netlify-deploy-id]').forEach(function (el) {
                    if (el.id !== 'floating-wa-steviani') el.remove();
                  });

                  document.querySelectorAll('body > *').forEach(function (el) {
                    if (el.id === 'floating-wa-steviani' || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
                    var style = window.getComputedStyle(el);
                    var txt = (el.textContent || '').toLowerCase();
                    var isFloatingCorner =
                      style.position === 'fixed' &&
                      parseInt(style.zIndex || '0', 10) >= 9999;

                    if (txt.includes('netlify') || isFloatingCorner || el.shadowRoot) {
                      el.remove();
                    }
                  });
                }

                purgeNetlify();
                setInterval(purgeNetlify, 800);
                var obs = new MutationObserver(purgeNetlify);
                obs.observe(document.documentElement, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}