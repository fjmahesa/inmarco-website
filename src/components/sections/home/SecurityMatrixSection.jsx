import FadeInSection from "../../common/FadeInSection";

// Import aset gambar background lokal .webp dari src/assets/
import bgSecurity from "../../../assets/business-coach-004.webp";

const securityFeatures = [
  {
    category: "Preventif & Strategi",
    title: "Tenaga Ahli Security Assessment",
    description:
      "Perancangan sistem pengamanan, analisis risiko keamanan, evaluasi operasional, dan penyusunan SOP pengamanan instansi.",
    badge: "Manusia x Preventif",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    category: "Layanan Lapangan",
    title: "Jasa Satpam Profesional",
    description:
      "Penyediaan personel Satpam disiplin untuk penjagaan akses, patroli area, pengawasan pengunjung, dan penanganan situasi awal.",
    badge: "Manusia x Aktif",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    category: "Fitur Khusus Berbasis Teknologi",
    title: "Pemeriksaan & Deteksi Elektronik",
    description:
      "Pembersihan (Security Sweep) ruang kerja, ruang rapat, dan pimpinan dari potensi perangkat elektronik/penyadap yang tidak semestinya.",
    badge: "Teknologi x Preventif",
    highlight: true,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    category: "Sistem Pemantauan",
    title: "Integrasi CCTV & Monitoring Center",
    description:
      "Instalasi, pemantauan akses area, dan integrasi sistem monitoring untuk melengkapi pengamanan berbasis sumber daya manusia.",
    badge: "Teknologi x Aktif",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function SecurityMatrixSection() {
  return (
    <section className="py-20 sm:py-28 text-white relative overflow-hidden bg-navy-950">
      {/* Background Gambar Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgSecurity}
          alt="Security Services Background"
          className="w-full h-full object-cover object-center filter brightness-[0.7]"
        />
        {/* Overlay Biru Navy */}
        <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-[2px]" />
      </div>

      {/* Background Glow Extra */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-sky-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              Security Services Unit
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Keamanan Berbasis Teknologi dan{" "}
              <span className="text-sky-400">Deteksi</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Integrasi sempurna antara kedisiplinan sumber daya manusia,
              perancangan sistem tenaga ahli, dan teknologi deteksi elektronik
              mutakhir untuk perlindungan aset vital instansi Anda.
            </p>
          </div>
        </FadeInSection>

        {/* MATRIX GRID 4 PILAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((item, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div
                className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 ${
                  item.highlight
                    ? "bg-gradient-to-b from-navy-900/90 to-navy-950/90 border-sky-400/60 shadow-xl shadow-sky-500/10 backdrop-blur-md"
                    : "bg-navy-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-navy-900/80 backdrop-blur-md"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-800 text-sky-300 border border-slate-700 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </p>
                    <h3 className="text-base font-bold text-white tracking-tight mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* HIGHLIGHT BANNER: AREA LAYANAN PENGAMANAN */}
        <FadeInSection>
          <div className="bg-gradient-to-r from-navy-900/90 via-navy-900/80 to-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 backdrop-blur-md">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Cakupan Fasilitas & Area Pengamanan
              </h4>
              <p className="text-xs text-slate-400">
                Layanan dirancang mendukung Instansi Pemerintah, Perkantoran,
                Rumah Dinas, Perbankan, Area Komersial, hingga Event MICE skala
                nasional.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-navy-950 font-extrabold text-xs shadow-lg shadow-sky-400/20 transition-all shrink-0"
            >
              Konsultasi Sistem Keamanan
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
