import { useTranslation } from "react-i18next";
import FadeInSection from "../../common/FadeInSection";

export default function PemdaBumdLogos() {
  const { t } = useTranslation("homeLists");

  const pemdaBumdLogos = [
    { name: t("regional.logos.0.name"), src: "/kotadepok.webp" },
    { name: t("regional.logos.1.name"), src: "/kab.cianjur.webp" },
    { name: t("regional.logos.2.name"), src: "/banksumselbabel.webp" },
    { name: t("regional.logos.3.name"), src: "/tirtabhagasi.webp" },
  ];

  // Duplikasi array logo agar animasi infinite scroll bergulir mulus tanpa jeda
  const duplicatedLogos = [
    ...pemdaBumdLogos,
    ...pemdaBumdLogos,
    ...pemdaBumdLogos,
    ...pemdaBumdLogos,
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            {t("regional.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
            {t("regional.title")}
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-medium">
            {t("regional.description")}
          </p>
        </FadeInSection>

        {/* Carousel Container dengan Efek Gradient Mask */}
        <FadeInSection>
          <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-slate-200/80 py-8 sm:py-12 shadow-sm">
            {/* Soft Gradient Overlay di Ujung Layout (Kiri & Kanan) */}
            <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Moving Infinite Scroll Rail */}
            <div className="flex items-center w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-10 sm:gap-16">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[160px] sm:min-w-[200px] h-20 sm:h-28 px-4 transition-transform duration-300 transform hover:scale-110 active:scale-110 cursor-pointer select-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-16 sm:max-h-24 w-auto object-contain hover:grayscale-0 transition-all duration-300 drop-shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
