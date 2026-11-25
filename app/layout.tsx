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
    default: 'Steviani — Project Partner Kios Pelangi | Percetakan Sekolah & Instansi',
    template: '%s | Steviani — Kios Pelangi',
  },
  description:
    'Pendampingan pengadaan percetakan & kreatif untuk sekolah, kampus, dan instansi di Mojokerto, Surabaya, dan sekitarnya. Spesialis buku kenangan (yearbook), kalender custom 2027, souvenir acara, dan percetakan kebutuhan lembaga.',
  keywords: [
    'Steviani Kios Pelangi',
    'percetakan buku kenangan sekolah Mojokerto',
    'jasa yearbook Surabaya Mojokerto',
    'cetak kalender sekolah instansi 2027',
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
    title: 'Steviani — Partner Kreatif & Pengadaan Percetakan Sekolah & Instansi',
    description:
      'Konsultasi desain, penyesuaian anggaran/RAB, hingga produksi buku kenangan, kalender 2027, souvenir, dan layanan percetakan bersama Kios Pelangi.',
    images: [
      {
        url: '/images/buku-kenangan.webp',
        width: 1200,
        height: 630,
        alt: 'Layanan Percetakan Sekolah & Instansi — Steviani Kios Pelangi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steviani — Project Partner Kios Pelangi',
    description:
      'Partner kreatif & pengadaan percetakan buku kenangan, kalender 2027, souvenir, dan kebutuhan lembaga untuk sekolah & instansi.',
    images: ['/images/buku-kenangan.webp'],
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
        className={`${plusJakarta.className} bg-white text-slate-700 antialiased selection:bg-sky-100 selection:text-sky-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}