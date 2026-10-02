import FadeInSection from "../../common/FadeInSection";

const consultingServices = {
  left: [
    {
      id: "business",
      title: "Business Consulting",
      description: "Pengembangan strategi bisnis dan organisasi.",
      icon: (
        <svg
          className="w-5 h-5 text-teal-600"
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
      id: "social-media",
      title: "Social Media Strategy",
      description: "Pemetaan dan taktik media sosial.",
      icon: (
        <svg
          className="w-5 h-5 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ],
  right: [
    {
      id: "digital-comm",
      title: "Digital Communication",
      description: "Arsitektur komunikasi era digital.",
      icon: (
        <svg
          className="w-5 h-5 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      id: "branding",
      title: "Branding",
      description: "Penguatan identitas dan citra lembaga.",
      icon: (
        <svg
          className="w-5 h-5 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ],
};

export default function ConsultingStrategySection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-teal-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-left max-w-3xl space-y-2 mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              Strategic Consulting
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight leading-tight">
              Pendampingan & Strategi{" "}
              <span className="text-teal-600">Konsultan</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Dukungan penuh bagi organisasi dan lembaga pemerintah dalam
              merancang strategi komunikasi yang terukur dan berdampak.
            </p>
          </div>
        </FadeInSection>

        {/* TAMPILAN DESKTOP & TABLET: DIAGRAM CABANG TERHUBUNG */}
        <div className="hidden md:grid grid-cols-12 items-center gap-4 lg:gap-8 my-6 relative">
          {/* SISI KIRI (2 KARTU) */}
          <div className="col-span-4 space-y-8 z-10">
            {consultingServices.left.map((item) => (
              <FadeInSection key={item.id}>
                <div className="bg-white border-2 border-teal-600/70 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-extrabold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed pl-11">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* SISI TENGAH: GARIS KONEKTOR KIRI & KARTU SOLUSI STRATEGIS */}
          <div className="col-span-4 flex items-center justify-center relative z-20">
            {/* Garis Cabang Kiri */}
            <div className="absolute left-0 w-1/2 h-32 border-y-2 border-r-2 border-teal-500 rounded-r-2xl pointer-events-none -z-10" />

            {/* Kartu Pusat: Solusi Strategis */}
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 border-4 border-white shadow-2xl flex flex-col items-center justify-center p-6 text-center text-white transform hover:scale-105 transition-transform duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-200 font-mono mb-1">
                Core Focus
              </span>
              <h3 className="text-xl lg:text-2xl font-black leading-tight tracking-tight">
                Solusi <br /> Strategis
              </h3>
            </div>

            {/* Garis Cabang Kanan */}
            <div className="absolute right-0 w-1/2 h-32 border-y-2 border-l-2 border-teal-500 rounded-l-2xl pointer-events-none -z-10" />
          </div>

          {/* SISI KANAN (2 KARTU) */}
          <div className="col-span-4 space-y-8 z-10">
            {consultingServices.right.map((item) => (
              <FadeInSection key={item.id}>
                <div className="bg-white border-2 border-teal-600/70 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-extrabold text-navy-900 group-hover:text-teal-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed pl-11">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* TAMPILAN MOBILE: RESPONSIVE STACKED CARDS */}
        <div className="md:hidden space-y-4">
          {/* Badge Pusat di Mobile */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-800 text-white text-center shadow-md space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200">
              Core Hub
            </span>
            <h3 className="text-lg font-black">Solusi Strategis</h3>
          </div>

          {/* Grid 4 Kartu Layanan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[...consultingServices.left, ...consultingServices.right].map(
              (item) => (
                <FadeInSection key={item.id}>
                  <div className="p-4 rounded-2xl bg-white border-2 border-teal-600/70 shadow-sm flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-navy-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
