import { useState, useRef, useEffect } from "react";
import FadeInSection from "../../common/FadeInSection";

const missionPillars = [
  {
    title: "Kualitas & Integritas",
    subtitle: "Pilar 01",
    description:
      "Memberikan layanan profesional dan kepuasan klien secara konsisten.",
    iconBg: "bg-amber-100 text-amber-600 border border-amber-200",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    title: "Solusi Kreatif",
    subtitle: "Pilar 02",
    description:
      "Mengembangkan inovasi sesuai kebutuhan instansi pemerintah dan perusahaan.",
    iconBg: "bg-teal-100 text-teal-600 border border-teal-200",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Integrasi",
    subtitle: "Pilar 03",
    description:
      "Memadukan SDM, teknologi, komunikasi, dan manajemen secara terpadu.",
    iconBg: "bg-purple-100 text-purple-600 border border-purple-200",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Kemitraan",
    subtitle: "Pilar 04",
    description:
      "Membangun relasi jangka panjang yang saling percaya dengan pemangku kepentingan.",
    iconBg: "bg-blue-100 text-blue-600 border border-blue-200",
    icon: (
      <svg
        className="w-8 h-8"
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
  },
  {
    title: "SDM Unggul",
    subtitle: "Pilar 05",
    description:
      "Mengembangkan SDM yang kompeten, disiplin, profesional, dan bertanggung jawab.",
    iconBg: "bg-orange-100 text-orange-600 border border-orange-200",
    icon: (
      <svg
        className="w-8 h-8"
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
];

export default function VisionMissionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, missionPillars.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
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
    <section className="py-12 sm:py-24 bg-slate-100 text-slate-800 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch rounded-none sm:rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200/80">
            {/* KIRI: BLOK BIRU DENGAN JUDUL & NAVIGASI */}
            <div className="lg:col-span-5 bg-navy-900 text-white p-6 sm:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 sm:space-y-6 relative z-10">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
                  Visi & Misi Perusahaan
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Our Core <br className="hidden sm:inline" />
                  <span className="text-sky-400">Values & Vision</span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  “Menjadi perusahaan penyedia jasa dan solusi terintegrasi yang
                  profesional, terpercaya, inovatif, dan berorientasi pada
                  kualitas pelayanan serta kebutuhan klien.”
                </p>
              </div>

              {/* Tombol Navigasi Panah */}
              <div className="flex items-center gap-3 pt-2 relative z-10">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-sky-400 hover:text-navy-950 text-white flex items-center justify-center transition-all border border-white/10 active:scale-95 cursor-pointer"
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
                  aria-label="Next Slide"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-navy-950 hover:bg-sky-400 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
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

            {/* KANAN: CAROUSEL SLIDE HORIZONTAL */}
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="lg:col-span-7 bg-slate-50 p-4 sm:p-10 flex items-center overflow-hidden"
            >
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform w-full"
                style={{
                  transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
                }}
              >
                {missionPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 shrink-0 px-2 sm:px-3"
                  >
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-6">
                      <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                          >
                            {item.icon}
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                            {item.subtitle}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-navy-900 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-sky-600">
                        <span>Pilar Nilai Utama</span>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
