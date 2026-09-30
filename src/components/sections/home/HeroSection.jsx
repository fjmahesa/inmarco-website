import { useState, useEffect, useRef } from "react";
import FadeInSection from "../../common/FadeInSection";

// Impor file lokal .webp dari folder src/assets
import bgSlide1 from "../../../assets/business-coach-001.webp";
import bgSlide2 from "../../../assets/business-coach-002.webp";
import bgSlide3 from "../../../assets/business-coach-003.webp";

const slides = [
  {
    id: 1,
    title: "inmarco",
    subtitle: "Integrated Marketing Communication",
    description:
      "Solusi pemasaran dan komunikasi terintegrasi untuk memperkuat kehadiran bisnis Anda.",
    image: bgSlide1,
    tag: "Integrated Agency",
  },
  {
    id: 2,
    title: "#TetapTerhubung",
    subtitle: "Kuasai Marketmu dengan #TetapTerhubung dengan mereka",
    description:
      "Inmarco punya solusinya untuk menjaga interaksi bisnis Anda secara berkelanjutan.",
    image: bgSlide2,
    tag: "Customer Engagement",
  },
  {
    id: 3,
    title: "#TemukanMarket",
    subtitle: "Persiapkan Brand kamu agar semakin besar",
    description:
      "Buat kolam audience dan #TemukanMarket mu bersama strategi terukur dari Inmarco.",
    image: bgSlide3,
    tag: "Growth Strategy",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
    }
    if (distance < -50) {
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
        className="relative w-full pt-28 pb-20 sm:py-32 lg:py-0 lg:h-screen lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-50"
      >
        {/* Background Slides */}
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
              className="w-full h-full object-cover object-center filter brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-white/95 via-white/90 sm:via-white/80 to-white/60 sm:to-white/30 backdrop-blur-[1px]" />
          </div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl min-h-[260px] sm:min-h-[300px] flex items-center">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;

              return (
                <div
                  key={slide.id}
                  className={`space-y-4 sm:space-y-5 transition-all duration-700 ease-out will-change-transform ${
                    isActive
                      ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                      : "opacity-0 translate-y-2 absolute inset-x-0 pointer-events-none"
                  }`}
                >
                  {/* Tag Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    {slide.tag}
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-navy-900 tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle / Headline */}
                  <p className="text-base sm:text-3xl font-bold text-blue-600 leading-snug">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium max-w-lg">
                    {slide.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                      href="#contact"
                      className="w-full sm:w-auto text-center px-7 py-3.5 text-xs font-extrabold text-white bg-navy-900 hover:bg-blue-600 rounded-full shadow-lg shadow-navy-900/15 hover:shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Contact Us
                    </a>
                    <a
                      href="#service"
                      className="w-full sm:w-auto text-center px-7 py-3.5 text-xs font-bold text-slate-700 hover:text-navy-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-full shadow-sm transition-all"
                    >
                      Layanan Kami
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Controls & Arrow Navigation */}
        <div className="absolute bottom-5 sm:bottom-8 z-30 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/80 shadow-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-6 sm:w-8 h-2.5 bg-navy-900"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
              aria-label="Previous Slide"
              className="p-2.5 rounded-full bg-white/90 hover:bg-navy-900 text-navy-900 hover:text-white border border-slate-200 shadow-sm transition-all active:scale-95"
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
              className="p-2.5 rounded-full bg-white/90 hover:bg-navy-900 text-navy-900 hover:text-white border border-slate-200 shadow-sm transition-all active:scale-95"
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
