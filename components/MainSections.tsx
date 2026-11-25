const WA_CONSULT_LINK =
  'https://wa.me/62818470027?text=Halo%20Bu%20Steviani,%20kami%20dari%20sekolah/instansi%20ingin%20berdiskusi%20mengenai%20kebutuhan%20desain%20dan%20percetakan.';

export default function MainSections() {
  return (
    <>
      {/* PROFIL STEVIANI (PIC PROJECT PARTNER) */}
      <section
        id="profil"
        className="scroll-mt-24 border-b border-blue-100 bg-[#FFFBF7]/70 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Foto Steviani */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-950/5">
                <img
                  src="/images/steviani.webp"
                  alt="Steviani — Project Partner Kios Pelangi Mojokerto & Surabaya"
                  className="h-auto w-full rounded-2xl object-cover"
                />
                <div className="mt-3 px-2 pb-1 text-center">
                  <h3 className="text-lg font-extrabold text-blue-950">
                    Steviani
                  </h3>
                  <p className="text-xs font-semibold text-orange-600">
                    Project Partner · Kios Pelangi
                  </p>
                </div>
              </div>
            </div>

            {/* Keterangan Profil & Peran */}
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                Profil Pendamping Pengadaan
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-blue-950 sm:text-3xl">
                Komunikasi satu pintu untuk kebutuhan cetak sekolah, kampus &amp;
                instansi.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-blue-900/90 sm:text-base">
                Sebagai <strong className="text-blue-950">Project Partner Kios Pelangi</strong> untuk
                wilayah <strong className="text-blue-950">Surabaya, Sidoarjo, dan Mojokerto</strong>,
                Steviani mendampingi panitia sekolah, bagian tata usaha, maupun
                tim pengadaan instansi agar proses pemesanan berjalan tertib,
                transparan, dan sesuai jadwal kegiatan.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <h3 className="text-sm font-bold text-blue-950">
                    1. Konsultasi Konsep &amp; RAB
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-blue-800">
                    Membantu pemilihan ukuran, gramatur kertas, dan finishing
                    agar selaras dengan anggaran panitia atau lembaga.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <h3 className="text-sm font-bold text-blue-950">
                    2. Kontrol Desain &amp; Proofing
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-blue-800">
                    Pengecekan tata letak nama siswa, jadwal akademik, maupun
                    logo instansi sebelum masuk tahap cetak massal.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <h3 className="text-sm font-bold text-blue-950">
                    3. Produksi Terintegrasi Kios Pelangi
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-blue-800">
                    Didukung workshop produksi berpengalaman untuk buku
                    kenangan, kalender 2027, souvenir wisuda, dan percetakan
                    umum.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <h3 className="text-sm font-bold text-blue-950">
                    4. Pengiriman Tepat Jadwal
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-blue-800">
                    Koordinasi pengiriman langsung ke sekolah atau kantor di
                    area Mojokerto, Surabaya, dan Jawa Timur.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_CONSULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-green-600"
                >
                  <span>Hubungi Bu Steviani (0818 470 027)</span>
                  <span>→</span>
                </a>
                <a
                  href="https://kiospelangi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:border-orange-300"
                >
                  <span>Rumah Produksi Kios Pelangi ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BERSIH BIRU DONGKER */}
      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
          <div>
            <p className="text-sm font-bold text-blue-950">
              Steviani — Project Partner · Kios Pelangi
            </p>
            <p className="mt-0.5 text-xs text-blue-800">
              Layanan Desain, Buku Kenangan, Kalender 2027 &amp; Souvenir ·
              Surabaya ; Sidoarjo  dan Mojokerto
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-blue-950">
            <a href="#beranda" className="hover:text-orange-600">
              Beranda
            </a>
            <a href="#etalase-produk" className="hover:text-orange-600">
              Katalog
            </a>
            <a href="#profil" className="hover:text-orange-600">
              Profil PIC
            </a>
            <a
              href={WA_CONSULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-4 py-1.5 font-bold text-white hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}