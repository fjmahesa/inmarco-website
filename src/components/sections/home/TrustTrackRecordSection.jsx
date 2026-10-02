import FadeInSection from "../../common/FadeInSection";

// Impor file gambar background gedung perkotaan (sesuaikan path gambar di project kamu)
import bgCity from "../../../assets/business-coach-001.webp";

const trackRecordItems = [
  {
    id: 1,
    title: "Pemerintah Provinsi DKI Jakarta (Kantor Gubernur)",
    description: "Layanan pengamanan lingkungan kantor pemerintahan.",
    badge: "Sektor Pemerintah",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
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
    id: 2,
    title: "Pemerintah Provinsi DKI Jakarta (Badan Pengadaan Barang/Jasa)",
    description: "Pengamanan operasional lingkungan kerja.",
    badge: "Sektor Pemerintah",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "DPRD Provinsi DKI Jakarta",
    description: "Pengamanan fasilitas rumah dinas dan kantor pimpinan.",
    badge: "Institusi Publik",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "PT Insight Investment Management Jakarta",
    description: "Dukungan keamanan operasional perusahaan.",
    badge: "Sektor Korporasi",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function TrustTrackRecordSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden text-slate-800 bg-slate-100">
      {/* Background Gambar Gedung Perkotaan */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgCity}
          alt="Gedung Perkotaan"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[0.9]"
        />
        {/* Overlay Light Gradient untuk Meningkatkan Keterbacaan Teks */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-100/90 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-left max-w-3xl space-y-2 mb-10 sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200 backdrop-blur-md">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-navy-900 leading-tight">
              Rekam Jejak <span className="text-blue-600">Kepercayaan</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Kepercayaan jangka panjang dari institusi pemerintahan dan
              perusahaan skala nasional.
            </p>
          </div>
        </FadeInSection>

        {/* GRID KARTU REKAM JEJAK (GLASSMORPHISM LIGHT STYLES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {trackRecordItems.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 100}>
              <div className="bg-white/70 hover:bg-white/90 border border-white/80 shadow-lg shadow-slate-200/50 hover:shadow-xl rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex items-start gap-4 sm:gap-5 group">
                {/* WADAH IKON */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon}
                </div>

                {/* KONTEN TEKS */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-navy-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
