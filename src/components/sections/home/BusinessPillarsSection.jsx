import { useTranslation } from "react-i18next";
import FadeInSection from "../../common/FadeInSection";

// Impor file gambar lokal untuk masing-masing pilar (sesuaikan path gambar di project kamu)
import imgMice from "../../../assets/business-coach-001.webp";
import imgKonsultan from "../../../assets/business-coach-002.webp";
import imgMedia from "../../../assets/mediasocial.webp";
import imgSecurity from "../../../assets/business-coach-004.webp";

export default function BusinessPillarsSection() {
  const { t } = useTranslation("homeVision");

  const businessPillars = [
    {
      id: "mice",
      title: t("businessPillars.0.title"),
      subtitle: t("businessPillars.0.subtitle"),
      description: t("businessPillars.0.description"),
      image: imgMice,
      accentColor: "from-orange-500 to-amber-500",
      badgeColor: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
      id: "konsultan",
      title: t("businessPillars.1.title"),
      subtitle: t("businessPillars.1.subtitle"),
      description: t("businessPillars.1.description"),
      image: imgKonsultan,
      accentColor: "from-teal-500 to-emerald-500",
      badgeColor: "bg-teal-50 text-teal-600 border-teal-200",
    },
    {
      id: "media",
      title: t("businessPillars.2.title"),
      subtitle: t("businessPillars.2.subtitle"),
      description: t("businessPillars.2.description"),
      image: imgMedia,
      accentColor: "from-purple-500 to-indigo-500",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: "security",
      title: t("businessPillars.3.title"),
      subtitle: t("businessPillars.3.subtitle"),
      description: t("businessPillars.3.description"),
      image: imgSecurity,
      accentColor: "from-blue-600 to-sky-500",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    },
  ];

  return (
    <section
      id="bidang-usaha"
      className="py-16 sm:py-24 bg-white text-slate-800 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-sky-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-200">
              {t("business.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-navy-900 leading-tight">
              {t("business.headingPrefix")}{" "}
              <span className="text-sky-600">
                {t("business.headingHighlight")}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t("business.description")}
            </p>
          </div>
        </FadeInSection>

        {/* GRID 4 PILAR BIDANG USAHA DENGAN GAMBAR VISUAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessPillars.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 100}>
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  {/* WADAH GAMBAR VISUAL */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay Accent */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.accentColor} opacity-20 group-hover:opacity-10 transition-opacity`}
                    />
                  </div>

                  {/* KONTEN KARTU */}
                  <div className="p-6 space-y-3">
                    {/* <span
                      className={`inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      Pilar 0{index + 1}
                    </span> */}

                    <h3 className="text-lg font-black text-navy-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[11px] font-bold text-sky-600">
                      ({item.subtitle})
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* FOOTER KARTU */}
                {/* <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-sky-600">
                  <span>Lihat Detail</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                </div> */}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
