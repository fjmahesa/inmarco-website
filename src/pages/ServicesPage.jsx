import FadeInSection from "../components/common/FadeInSection";
import { Link } from "react-router-dom";

const servicesList = [
  {
    id: "mice",
    badge: "Event & MICE",
    title: "MICE & Event Management",
    subtitle: "Penyelenggaraan Event Hybrid, Konferensi, & Pameran Profesional",
    description:
      "Layanan perencanaan dan eksekusi acara skala besar secara komprehensif. Mulai dari pameran nasional, peluncuran produk, rapat kerja pemerintah, hingga manajemen event hybrid terkoneksi.",
    features: [
      "Manajemen Event Hybrid & Virtual",
      "Pameran & Expo Industri",
      "Konferensi & Seminar Nasional/Internasional",
      "Produksi Stage, Lighting, & Sound System",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-sky-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
        />
      </svg>
    ),
  },
  {
    id: "digital-comm",
    badge: "Media & Digital",
    title: "Digital Communication & Branding",
    subtitle: "Strategi Media Terukur, Personal Branding, & Engagement",
    description:
      "Membangun dan memperkuat persepsi publik terhadap lembaga/korporasi melalui kampanye media digital, strategi komunikasi krisis, manajemen media sosial, serta hubungan pers.",
    features: [
      "Digital Campaign & Social Media Management",
      "Personal Branding & Executive Public Relations",
      "Media Monitoring & Crisis Communication",
      "Produksi Konten Kreatif & Video Profil",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-sky-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  },
  {
    id: "security",
    badge: "Pengamanan Swasta",
    title: "Jasa Pengamanan Swasta (Security Services)",
    subtitle: "Proteksi Aset, SDM Disiplin, & Teknologi Deteksi Modern",
    description:
      "Penyediaan personel Satpam bersertifikat resmi, Tenaga Ahli Security Risk Assessment, sistem pemantauan terpadu, hingga pembersihan ruangan berbasis elektronik (anti-penyadapan).",
    features: [
      "Penyediaan & Pengelolaan Personel Satpam (BUJP)",
      "Security Risk Assessment & Audit Kelayakan",
      "Electronic Countermeasures (Sweep Anti-Penyadapan)",
      "Sistem Pemantauan CCTV & Akses Kontrol Digital",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-sky-400"
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
    id: "consulting",
    badge: "Konsultasi Bisnis",
    title: "Corporate & Management Consulting",
    subtitle: "Solusi Tata Kelola Layanan Terintegrasi & Efisiensi Operasional",
    description:
      "Dukungan konsultasi strategis bagi instansi pemerintah dan swasta untuk meningkatkan efisiensi tata kelola operasional, analisis kepatuhan, serta optimalisasi sumber daya.",
    features: [
      "Tata Kelola Operasional & Standar Prosedur (SOP)",
      "Konsultasi Manajemen Risiko & Kepatuhan",
      "Optimalisasi Alokasi Sumber Daya Manusia",
      "Perencanaan Program Kerja Terintegrasi",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-sky-400"
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
];

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Banner Section Services */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeInSection>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-300 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              Our Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-4 mb-4">
              Layanan Layanan Terintegrasi
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Mitra strategis terpercaya dengan tata kelola profesional,
              menghadirkan solusi terpadu untuk kebutuhan instansi pemerintah
              dan korporasi.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Grid Layanan Utama */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <FadeInSection key={service.id}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-sky-600 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Fitur/Cakupan Layanan */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2.5">
                      Cakupan Layanan:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <svg
                            className="w-4 h-4 text-sky-500 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://wa.me/6281323459296"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-navy-950 group-hover:text-sky-600 flex items-center gap-1.5 transition-colors"
                  >
                    Konsultasi Layanan
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Call to Action Bottom */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-12">
        <FadeInSection>
          <div className="bg-navy-950 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Butuh Solusi Khusus untuk Instansi Anda?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tim profesional kami siap membantu merancang dan mengeksekusi
                program kerja terintegrasi sesuai kebutuhan spesifik Anda.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-block px-7 py-3 text-xs font-extrabold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-md active:scale-95"
                >
                  Pelajari Lebih Lanjut Tentang Kami
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
