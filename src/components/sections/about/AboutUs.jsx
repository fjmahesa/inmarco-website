import FadeInSection from "../../common/FadeInSection";

const coreValues = [
  {
    title: "Kualitas & Integritas",
    description:
      "Memberikan layanan profesional dengan mengutamakan mutu dan kepuasan klien.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Solusi Kreatif & Inovatif",
    description:
      "Mengembangkan gagasan segar sesuai kebutuhan instansi pemerintah dan perusahaan.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Integrasi Sistem & SDM",
    description:
      "Memadukan sumber daya manusia, teknologi, komunikasi, dan manajemen terpadu.",
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
          d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-1.5a1 1 0 01-1-1V4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 8a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Kemitraan Berkelanjutan",
    description:
      "Membangun hubungan jangka panjang yang didasari pada rasa saling percaya.",
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <main className="pt-6 sm:pt-10 pb-16 sm:pb-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* BAGIAN 1: DATA LEGALITAS RESMI PT */}
        <FadeInSection>
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Official Credentials
                </span>
                <h3 className="text-lg font-extrabold text-navy-900 mt-2">
                  Legalitas & Data Perusahaan
                </h3>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Resmi Terdaftar di Kemenkumham RI
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  Nama Badan Usaha
                </p>
                <p className="text-navy-900 font-extrabold text-xs">
                  PT. GLOBAL INMARCO SEJAHTERA
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  No. Akta Pendirian
                </p>
                <p className="text-navy-900 font-extrabold text-xs">
                  No. 06 Tanggal 28 Mei 2024
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  SK Kemenkumham
                </p>
                <p className="text-navy-900 font-extrabold text-xs">
                  AHU-0038268.AH.01.01.TAHUN 2024
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <p className="text-slate-400 text-[10px] uppercase font-bold">
                  NPWP Perusahaan
                </p>
                <p className="text-navy-900 font-extrabold text-xs font-mono">
                  20.686.913.3-014.000
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* BAGIAN 2: PILAR NILAI UTAMA (CORE VALUES) */}
        <div>
          <FadeInSection>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center sm:text-left">
              • Pilar Nilai Utama Perusahaan
            </h3>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all space-y-3 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
