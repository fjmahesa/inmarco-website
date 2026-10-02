import FadeInSection from "../../common/FadeInSection";

// Impor file gambar background event/meeting (sesuaikan path gambar di project kamu)
import bgMice from "../../../assets/business-coach-001.webp";

const miceItems = [
  {
    letter: "M",
    title: "Meeting",
    description: "Pengelolaan rapat strategis.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    letter: "I",
    title: "Incentive",
    description: "Program insentif perusahaan.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    letter: "C",
    title: "Convention",
    description: "Konvensi skala besar.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-4 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    letter: "E",
    title: "Exhibition",
    description: "Pameran dan eksibisi.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function MiceServicesSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden text-slate-800 bg-slate-100">
      {/* Background Gambar Suasana Event & Ruang Rapat */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMice}
          alt="Suasana Ruang MICE"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[0.9]"
        />
        {/* Overlay Light Gradient untuk Keterbacaan Teks */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* KARTU KIRI: HEADLINE & DESKRIPSI UTAMA */}
            <div className="lg:col-span-6 bg-white/70 border border-white/80 shadow-xl shadow-slate-200/50 rounded-3xl p-8 sm:p-12 backdrop-blur-md flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
                  Event & Organizer
                </span>

                <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                  Layanan <span className="text-orange-500">MICE</span> <br />
                  Profesional
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-md">
                  Menyediakan layanan komprehensif untuk kebutuhan pemerintah,
                  perusahaan, organisasi, maupun institusi.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                  Integrated Event Solutions
                </span>
              </div>
            </div>

            {/* KARTU KANAN: LIST M-I-C-E DENGAN INDIKATOR VERTIKAL */}
            <div className="lg:col-span-6 bg-white/70 border border-white/80 shadow-xl shadow-slate-200/50 rounded-3xl p-6 sm:p-10 backdrop-blur-md flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8">
              {/* INDIKATOR VERTIKAL M-I-C-E */}
              <div className="hidden sm:flex flex-col items-center justify-between py-2 px-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 shrink-0 font-mono font-black text-xl text-orange-600">
                <span>M</span>
                <span className="w-0.5 h-6 bg-orange-300" />
                <span>I</span>
                <span className="w-0.5 h-6 bg-orange-300" />
                <span>C</span>
                <span className="w-0.5 h-6 bg-orange-300" />
                <span>E</span>
              </div>

              {/* LIST PILAR SERVICE */}
              <div className="w-full space-y-4 flex flex-col justify-between">
                {miceItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
                  >
                    {/* ICON CONE */}
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="sm:hidden text-xs font-black text-orange-600 font-mono px-2 py-0.5 rounded bg-orange-100">
                          {item.letter}
                        </span>
                        <h3 className="text-base font-extrabold text-navy-900 tracking-tight group-hover:text-orange-600 transition-colors">
                          {item.title}:
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
