import FadeInSection from "../../common/FadeInSection";

const serviceList = [
  {
    id: "visioning",
    title: "Visioning",
    subtitle: "Merumuskan arah dan strategi jangka panjang brand Anda.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: "planning",
    title: "Planning",
    subtitle: "Perencanaan eksekusi kampanye digital yang terstruktur.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    id: "research",
    title: "Research",
    subtitle: "Riset pasar dan analisis kompetitor mendalam.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    id: "networking",
    title: "Networking",
    subtitle: "Membangun relasi ekosistem mitra & influencer strategis.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: "branding",
    title: "Branding",
    subtitle: "Membentuk identitas visual dan persepsi positif audiens.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "Strategi pemasaran terpadu untuk tingkatkan konversi.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    id: "hiring",
    title: "Hiring",
    subtitle: "Pengembangan talenta dan SDM bidang pemasaran.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "operations",
    title: "Operations",
    subtitle: "Manajemen operasional kegiatan event & kampanye.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="service"
      className="py-20 sm:py-28 bg-slate-50/70 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Layanan Kami
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
            Integrated Business Capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
            Solusi komprehensif untuk mendukung pertumbuhan brand Anda dari
            perencanaan hingga operasional.
          </p>
        </FadeInSection>

        {/* Services Grid (8 Cards) */}
        <FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceList.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Background Highlight saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 group-hover:bg-navy-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Sub-text / Description */}
                  <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 leading-relaxed font-medium">
                    {item.subtitle}
                  </p>
                </div>

                {/* Subtle Indicator Bar */}
                <div className="mt-6 w-8 h-1 rounded-full bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-300" />
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* CTA Consultation Button (Sesuai Referensi Gambar) */}
        <FadeInSection className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm font-extrabold text-white bg-navy-900 hover:bg-blue-600 rounded-full shadow-lg shadow-navy-900/15 hover:shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Consultation Now</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
