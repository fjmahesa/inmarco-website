import FadeInSection from "../../common/FadeInSection";

const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    subtitle: "Memahami Kebutuhan",
    description:
      "Mendalami kebutuhan, tujuan, tantangan, serta karakteristik unik organisasi atau perusahaan Anda.",
    icon: (
      <svg
        className="w-6 h-6"
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
    number: "02",
    title: "ANALYZE",
    subtitle: "Analisis Data",
    description:
      "Mengumpulkan informasi dan menganalisis data relevan secara mendalam untuk merumuskan landasan strategi.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "STRATEGIZE",
    subtitle: "Perancangan Konsep",
    description:
      "Menyusun strategi terukur, arsitektur komunikasi, serta ide kampanye/eksekusi yang inovatif.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "EXECUTE",
    subtitle: "Eksekusi Program",
    description:
      "Melaksanakan program secara presisi dengan dukungan penuh SDM berpengalaman dan teknologi terintegrasi.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "MONITOR",
    subtitle: "Pengawasan Kualitas",
    description:
      "Melakukan pengawasan berkala selama pelaksanaan untuk menjamin kualitas layanan tetap terjaga optimal.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "EVALUATE",
    subtitle: "Evaluasi & Rekomendasi",
    description:
      "Evaluasi menyeluruh serta pemberian rekomendasi strategis untuk pengembangan bisnis berkelanjutan.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function WorkApproach() {
  return (
    <section className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-100/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
              Work Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-navy-900 leading-tight">
              Pendekatan Kerja{" "}
              <span className="text-blue-600">Terintegrasi</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Metodologi 6 langkah terstruktur PT. Global Inmarco Sejahtera
              untuk memastikan setiap proyek berjalan terukur, profesional, dan
              memberikan dampak nyata.
            </p>
          </div>
        </FadeInSection>

        {/* GRID 6 LANGKAH METODOLOGI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <FadeInSection key={step.number} delay={index * 80}>
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col justify-between group relative overflow-hidden">
                {/* Accent Line Hover Effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-blue-600 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 font-mono">
                      {step.subtitle}
                    </p>
                    <h3 className="text-xl font-black text-navy-900 tracking-tight mt-0.5">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Tahap {index + 1} dari 6</span>
                  <svg
                    className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
