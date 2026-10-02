import { useState, useRef } from "react";
import FadeInSection from "../../common/FadeInSection";

// Import gambar ilustrasi lokal .webp
import ecosystemIllustration from "../../../assets/mediasocial.webp";

const ecosystemItems = [
  {
    id: 1,
    title: "Social Media Management",
    desc: "Pengelolaan akun media sosial terencana & konsisten.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
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
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "Pemasaran berbasis konten kreatif untuk menggaet audiens.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
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
    position: "top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 3,
    title: "Digital Advertising",
    desc: "Iklan berbayar terukur di Meta, Google, & TikTok Ads.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
    position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 4,
    title: "Social Media Monitoring",
    desc: "Analisis persepsi publik & respons audiens real-time.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
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
    position: "bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2",
  },
  {
    id: 5,
    title: "Personal Branding",
    desc: "Penguatan reputasi pimpinan, profesional, & figur publik.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    id: 6,
    title: "Digital Campaign",
    desc: "Kampanye digital strategis dari perancangan hingga aktivasi.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    position: "bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2",
  },
  {
    id: 7,
    title: "Creative & Content Creator",
    desc: "Produksi visual, copywriting, dan video kreatif bernilai tinggi.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 8,
    title: "Digital Communication Strategy",
    desc: "Arsitektur komunikasi komprehensif era transformasi digital.",
    icon: (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    position: "top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2",
  },
];

export default function DigitalEcosystemSection() {
  const [mobileSlide, setMobileSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Membagi 8 item menjadi 2 grup (masing-masing 4 item per slide di mobile)
  const mobilePages = [ecosystemItems.slice(0, 4), ecosystemItems.slice(4, 8)];

  const handleNextMobile = () => {
    setMobileSlide((prev) => (prev + 1) % mobilePages.length);
  };

  const handlePrevMobile = () => {
    setMobileSlide((prev) => (prev === 0 ? mobilePages.length - 1 : prev - 1));
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
      handleNextMobile();
    } else if (distance < -50) {
      handlePrevMobile();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background Soft Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 bg-purple-100/80 px-4 py-1.5 rounded-full border border-purple-200">
              Integrated Media Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-navy-900 leading-tight">
              Ekosistem Komunikasi{" "}
              <span className="text-purple-600">Digital</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Membangun komunikasi yang konsisten dan terukur di tengah dinamika
              perkembangan lanskap digital[cite: 13].
            </p>
          </div>
        </FadeInSection>

        {/* TAMPILAN DESKTOP & TABLET: PERFECT CIRCULAR ORBIT */}
        <div className="hidden md:block relative w-[520px] h-[520px] lg:w-[580px] lg:h-[580px] mx-auto my-12">
          {/* Garis Orbit Lingkaran Sempurna Putus-Putus */}
          <div className="absolute inset-0 rounded-full border-[3px] border-purple-400 border-dashed animate-[spin_120s_linear_infinite] pointer-events-none shadow-[0_0_20px_rgba(168,85,247,0.25)]" />

          {/* GAMBAR ILUSTRASI PUSAT */}
          <div className="absolute inset-0 m-auto w-52 h-52 lg:w-60 lg:h-60 rounded-full bg-white/90 border border-purple-200 shadow-2xl backdrop-blur-md flex items-center justify-center p-5 z-10 transition-transform duration-500 hover:scale-105">
            <img
              src={ecosystemIllustration}
              alt="Ekosistem Komunikasi Digital"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>

          {/* ITEM LAYANAN MELINGKAR */}
          {ecosystemItems.map((item) => (
            <div
              key={item.id}
              className={`absolute z-20 ${item.position} group`}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white border border-purple-200 shadow-lg hover:shadow-xl hover:border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-md">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 text-purple-600 group-hover:bg-white group-hover:text-purple-600 flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-extrabold whitespace-nowrap text-slate-800 group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TAMPILAN MOBILE: SLIDE/CAROUSEL 4 POIN PER PAGE DENGAN TOMBOL NAVIGASI & INDIKATOR */}
        <div className="md:hidden space-y-5">
          {/* Visual Ilustrasi Pusat di Mobile */}
          <div className="w-full max-w-xs mx-auto p-5 bg-white border border-purple-100 rounded-3xl shadow-md text-center space-y-2">
            <img
              src={ecosystemIllustration}
              alt="Ekosistem Komunikasi Digital"
              className="w-40 h-40 mx-auto object-contain"
            />
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 font-mono">
              360° Digital Infrastructure
            </p>
          </div>

          {/* Container Carousel Slide */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden relative"
          >
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform w-full"
              style={{
                transform: `translateX(-${mobileSlide * 100}%)`,
              }}
            >
              {mobilePages.map((pageItems, pageIdx) => (
                <div key={pageIdx} className="w-full shrink-0 px-1">
                  <div className="grid grid-cols-1 gap-3">
                    {pageItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div className="space-y-0.5">
                          <h3 className="text-xs font-bold text-navy-900">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kontrol Navigasi Mobile: Tombol Panah & Indikator Titik */}
          <div className="flex items-center justify-between pt-2 px-2">
            <div className="text-[11px] font-extrabold text-purple-600 font-mono">
              Halaman {mobileSlide + 1} dari {mobilePages.length}
            </div>

            {/* Indikator Titik Slide */}
            <div className="flex items-center gap-1.5">
              {mobilePages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === mobileSlide
                      ? "w-6 h-2 bg-purple-600"
                      : "w-2 h-2 bg-purple-200"
                  }`}
                />
              ))}
            </div>

            {/* Tombol Panah Navigasi */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevMobile}
                aria-label="Previous Page"
                className="w-8 h-8 rounded-full bg-white border border-purple-200 text-purple-600 flex items-center justify-center shadow-sm active:scale-95"
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
              <button
                onClick={handleNextMobile}
                aria-label="Next Page"
                className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm active:scale-95"
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
        </div>
      </div>
    </section>
  );
}
