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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function removeNetlifyBadge() {
                  document.querySelectorAll('a[href*="netlify.com"], [id*="netlify"], [class*="netlify"]').forEach(function (el) {
                    el.remove();
                  });
                  document.querySelectorAll('body > div, body > aside, body > section').forEach(function (el) {
                    var txt = (el.textContent || '').toLowerCase();
                    if (txt.includes('powered by netlify') || (el.shadowRoot && (el.shadowRoot.innerHTML || '').toLowerCase().includes('netlify'))) {
                      el.remove();
                    }
                  });
                }
                removeNetlifyBadge();
                var obs = new MutationObserver(removeNetlifyBadge);
                obs.observe(document.documentElement, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}