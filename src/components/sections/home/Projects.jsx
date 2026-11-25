import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import FadeInSection from "../../common/FadeInSection";

export default function Projects() {
  const { t } = useTranslation("homeLists");

  const projects = [
    {
      id: "mice",
      title: t("projects.cards.0.title"),
      subtitle: t("projects.cards.0.subtitle"),
      description: t("projects.cards.0.description"),
      badge: t("projects.cards.0.badge"),
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
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      ),
      features: [
        t("projects.cards.0.features.0"),
        t("projects.cards.0.features.1"),
        t("projects.cards.0.features.2"),
        t("projects.cards.0.features.3"),
      ],
    },
    {
      id: "consulting",
      title: t("projects.cards.1.title"),
      subtitle: t("projects.cards.1.subtitle"),
      description: t("projects.cards.1.description"),
      badge: t("projects.cards.1.badge"),
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
      features: [
        t("projects.cards.1.features.0"),
        t("projects.cards.1.features.1"),
        t("projects.cards.1.features.2"),
        t("projects.cards.1.features.3"),
      ],
    },
    {
      id: "media",
      title: t("projects.cards.2.title"),
      subtitle: t("projects.cards.2.subtitle"),
      description: t("projects.cards.2.description"),
      badge: t("projects.cards.2.badge"),
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
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        t("projects.cards.2.features.0"),
        t("projects.cards.2.features.1"),
        t("projects.cards.2.features.2"),
        t("projects.cards.2.features.3"),
      ],
    },
    {
      id: "security",
      title: t("projects.cards.3.title"),
      subtitle: t("projects.cards.3.subtitle"),
      description: t("projects.cards.3.description"),
      badge: t("projects.cards.3.badge"),
      highlight: true,
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      features: [
        t("projects.cards.3.features.0"),
        t("projects.cards.3.features.1"),
        t("projects.cards.3.features.2"),
        t("projects.cards.3.features.3"),
      ],
    },
    {
      id: "education",
      title: t("projects.cards.4.title"),
      subtitle: t("projects.cards.4.subtitle"),
      description: t("projects.cards.4.description"),
      badge: t("projects.cards.4.badge"),
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
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      features: [
        t("projects.cards.4.features.0"),
        t("projects.cards.4.features.1"),
        t("projects.cards.4.features.2"),
        t("projects.cards.4.features.3"),
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalPages = 2; // Dibatasi persis menjadi 2 indikator halaman

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="service"
      className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
                {t("projects.eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                {t("projects.title")}{" "}
                <span className="text-sky-400">{t("projects.titleAccent")}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("projects.description")}
              </p>
            </div>

            {/* Tombol Navigasi Desktop & Tablet */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrev}
                aria-label={t("projects.prevPage")}
                className="p-3 rounded-full bg-navy-800 hover:bg-sky-400 hover:text-navy-950 text-white border border-slate-700 transition-all active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label={t("projects.nextPage")}
                className="p-3 rounded-full bg-navy-800 hover:bg-sky-400 hover:text-navy-950 text-white border border-slate-700 transition-all active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </FadeInSection>

        {/* Carousel Container */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden py-2"
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform gap-5 sm:gap-6"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {projects.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div
                  className={`h-full rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between border ${
                    item.highlight
                      ? "bg-gradient-to-b from-navy-900 to-navy-950 border-sky-500/50 shadow-xl shadow-sky-500/10 hover:border-sky-400"
                      : "bg-navy-900/60 border-slate-800 hover:border-slate-700 hover:bg-navy-900"
                  }`}
                >
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400 mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {item.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <svg
                            className="w-4 h-4 text-sky-400 shrink-0"
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
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-800/60">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>{t("projects.cardCta")}</span>
                      <svg
                        className="w-4 h-4"
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
              </div>
            ))}
          </div>
        </div>

        {/* Indicators & Mobile Navigation (Khusus 2 Indikator) */}
        <div className="flex items-center justify-between sm:justify-center gap-3 mt-8">
          <button
            onClick={handlePrev}
            className="sm:hidden p-2 rounded-full bg-navy-800 text-white border border-slate-700"
            aria-label={t("projects.prevPage")}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Hanya 2 Titik Indikator */}
          <div className="flex items-center gap-2">
            {[0, 1].map((pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => setCurrentPage(pageIndex)}
                aria-label={t("projects.goToPage", { page: pageIndex + 1 })}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  pageIndex === currentPage
                    ? "w-8 h-2 bg-sky-400"
                    : "w-2.5 h-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="sm:hidden p-2 rounded-full bg-navy-800 text-white border border-slate-700"
            aria-label={t("projects.nextPage")}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
