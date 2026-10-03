import { useState, useEffect, useRef } from "react";
import FadeInSection from "../../common/FadeInSection";

// Import aset gambar lokal .webp dari src/assets/
import bgSlide1 from "../../../assets/business-coach-001.webp";
import bgSlide2 from "../../../assets/business-coach-002.webp";
import bgSlide3 from "../../../assets/business-coach-003.webp";

const slides = [
  {
    id: 1,
    badge: "Integrated Solutions • Est. 2011",
    title: "PT. Global Inmarco Sejahtera",
    subtitle: "MICE, Media, Consulting & Security Services",
    description:
      "Mitra strategis terpercaya dengan tata kelola profesional, menghadirkan layanan terintegrasi skala besar untuk instansi pemerintah dan korporasi.",
    image: bgSlide1,
    stats: [
      { label: "Pengalaman", value: "13+ Tahun" },
      { label: "Transformasi", value: "CV ke PT (2024)" },
    ],
  },
  {
    id: 2,
    badge: "Event & Digital Communication",
    title: "#TemukanMarket & #TetapTerhubung",
    subtitle: "Kuasai Pasar & Bangun Engagement Berkelanjutan",
    description:
      "Solusi MICE profesional, manajemen event hybrid, kampanye komunikasi digital terukur, dan personal branding untuk memperkuat citra lembaga Anda.",
    image: bgSlide2,
    stats: [
      { label: "Cakupan MICE", value: "End-to-End" },
      { label: "Layanan Media", value: "360° Digital" },
    ],
  },
  {
    id: 3,
    badge: "Jasa Pengamanan Swasta",
    subtitle: "Proteksi Aset, SDM Disiplin & Teknologi Deteksi",
    title: "Jasa Pengamanan Swasta",
    description:
      "Penyediaan Satpam profesional, Tenaga Ahli Security Assessment, pemantauan CCTV, hingga sweep ruangan berbasis deteksi elektronik (anti-penyadapan).",
    image: bgSlide3,
    stats: [
      { label: "Personel & Ahli", value: "Sertifikasi" },
      { label: "Fitur Khusus", value: "Electronic Sweep" },
    ],
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <FadeInSection>
      <section
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        /* Responsif Mobile: Menggunakan padding fleksibel alih-alih min-h-screen kaku */
        className="relative w-full pt-28 pb-16 sm:py-32 lg:py-0 lg:h-screen lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-navy-950"
      >
        {/* Visual Background Slides dengan Transition Smooth */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
            />
            {/* Gradient Overlay untuk keterbacaan teks yang optimal */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
          </div>
        ))}

        {/* Konten Hero Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl min-h-[300px] sm:min-h-[340px] flex items-center">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;

              return (
                <div
                  key={slide.id}
                  className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-out will-change-transform ${
                    isActive
                      ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                      : "opacity-0 translate-y-3 absolute inset-x-0 pointer-events-none"
                  }`}
                >
                  {/* Badge & Ikon Visual */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mt-5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[10px] sm:text-xs font-bold tracking-wide uppercase backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    {slide.badge}
                  </div>

                  {/* Headline Utama */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle / Focus Service */}
                  <p className="text-base sm:text-2xl font-bold text-sky-400 leading-snug">
                    {slide.subtitle}
                  </p>

                  {/* Deskripsi Singkat */}
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                    {slide.description}
                  </p>

                  {/* Stats Visual Quick Info (Fresh Style) */}
                  <div className="flex items-center gap-6 pt-1 border-t border-slate-800/80 max-w-md">
                    {slide.stats.map((st, i) => (
                      <div key={i} className="space-y-0.5">
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                          {st.label}
                        </p>
                        <p className="text-xs sm:text-sm font-extrabold text-white">
                          {st.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tombol Aksi (CTA) */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto text-center px-8 py-3.5 text-xs font-extrabold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      Konsultasi Layanan
                    </a>
                    <a
                      href="#service"
                      className="w-full sm:w-auto text-center px-8 py-3.5 text-xs font-bold text-white hover:text-sky-400 bg-navy-900/80 hover:bg-navy-900 border border-slate-700/80 rounded-xl shadow-sm transition-all"
                    >
                      Jelajahi Layanan
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls (Pagination & Arrows) */}
        <div className="absolute bottom-5 sm:bottom-8 z-30 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Indikator Slide Titik */}
          <div className="flex items-center gap-2 bg-navy-900/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-800 shadow-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? "w-6 sm:w-8 h-2 bg-sky-400"
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Tombol Panah Navigasi Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
              aria-label="Previous Slide"
              className="p-2.5 rounded-full bg-navy-900/80 hover:bg-sky-400 text-white hover:text-navy-950 border border-slate-800 transition-all active:scale-95 cursor-pointer"
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
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              aria-label="Next Slide"
              className="p-2.5 rounded-full bg-navy-900/80 hover:bg-sky-400 text-white hover:text-navy-950 border border-slate-800 transition-all active:scale-95 cursor-pointer"
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
    </FadeInSection>
  );
}
