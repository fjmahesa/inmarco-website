import FadeInSection from "../../common/FadeInSection";

// Impor file gambar background atau gambar layanan security lokal
import bgSecurityGroup from "../../../assets/business-coach-004.webp";

const coverageAreas = [
  "Instansi Pemerintah & Rumah Dinas",
  "Area Komersial & Properti Perusahaan",
  "Kegiatan & Event (MICE Terintegrasi)",
  "Kawasan & Fasilitas Publik",
  "Perkantoran & Gedung",
];

const humanServices = [
  {
    title: "Garda Depan (Satpam)",
    subtitle: "Penyediaan tenaga pengamanan profesional.",
    details:
      "Penjagaan akses, pengawasan lingkungan, patroli area, pengendalian pengunjung, penanganan situasi awal, dan pelaporan kejadian.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-600"
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
    title: "Strategi & Sistem (Tenaga Ahli)",
    subtitle: "Perancangan sistem pengamanan organisasi.",
    details:
      "Security assessment, penyusunan SOP, analisis risiko, evaluasi operasional, dan pengembangan pola keamanan berbasis teknologi.",
    icon: (
      <svg
        className="w-7 h-7 text-blue-600"
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
];

const techServices = [
  {
    title: "Deteksi Elektronik (Security Sweep)",
    details:
      "Pemeriksaan dan pembersihan ruang kerja, rapat, dan pimpinan dari potensi perangkat elektronik yang tidak semestinya. Meningkatkan keamanan informasi pada area bersensitivitas tinggi.",
    badge: "Teknologi Sweep",
    icon: (
      <svg
        className="w-7 h-7 text-sky-600"
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
    title: "CCTV & Monitoring Center",
    details:
      "Instalasi, pemantauan area, pengawasan akses, dan integrasi sistem monitoring untuk melengkapi pengamanan berbasis sumber daya manusia.",
    badge: "Surveillance System",
    icon: (
      <svg
        className="w-7 h-7 text-sky-600"
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

export default function SecurityServicesSection() {
  return (
    <section
      id="security-services"
      className="py-16 sm:py-24 bg-slate-50 text-slate-800 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        {/* ==================== PART 1: HERO OVERVIEW (GAMBAR 1) ==================== */}
        <FadeInSection>
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
            {/* Background Image Personel Pengamanan */}
            <div className="relative h-[480px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden">
              <img
                src={bgSecurityGroup}
                alt="Jasa Pengamanan Swasta"
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/40 sm:to-transparent" />
            </div>

            {/* Content Card Overlay Glassmorphism */}
            <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between max-w-2xl text-white">
              <div className="space-y-4">
                <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 backdrop-blur-md">
                  Security Unit
                </span>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Jasa Pengamanan <span className="text-sky-400">Swasta</span>
                </h2>

                {/* 3 Pilar Utama Badge */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 border-t border-white/20">
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-sky-300">
                      Profesionalisme
                    </p>
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-sky-300">
                      Disiplin
                    </p>
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-sky-300">
                      Implementasi Teknologi
                    </p>
                  </div>
                </div>
              </div>

              {/* Area Layanan List */}
              <div className="space-y-2 pt-4">
                <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-300 font-mono">
                  Cakupan Fasilitas & Area Layanan:
                </p>
                <div className="flex flex-wrap gap-2">
                  {coverageAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all cursor-default"
                    >
                      • {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* ==================== PART 2: KEAMANAN BERBASIS MANUSIA & STRATEGI (GAMBAR 2) ==================== */}
        <div className="space-y-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                Human & Operational Strategy
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
                Pengamanan Berbasis{" "}
                <span className="text-blue-600">Manusia & Strategi</span>
              </h3>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {humanServices.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 transition-all duration-300 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-black text-navy-900 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs font-bold text-blue-600 mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Meliputi: {item.details}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>Sertifikasi Kualifikasi</span>
                    <span className="text-blue-600">
                      • Layanan Lapangan & System Assessment
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* ==================== PART 3: KEAMANAN BERBASIS TEKNOLOGI & DETEKSI (GAMBAR 3) ==================== */}
        <div className="space-y-8">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-200">
                Advanced Surveillance & Sweep
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
                Keamanan Berbasis{" "}
                <span className="text-sky-600">Teknologi & Deteksi</span>
              </h3>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techServices.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-300 transition-all duration-300 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100 font-mono">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-navy-900 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>High Sensitivity Protection</span>
                    <span className="text-sky-600">
                      • Electronic Security Feature
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
