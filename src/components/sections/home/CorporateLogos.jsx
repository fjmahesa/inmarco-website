import FadeInSection from "../../common/FadeInSection";

const corporateLogos = [
  { name: "Nusantara Infrastructure", src: "/nusantara-infrastruktur.webp" },
  { name: "BII Maybank", src: "/biimaybank.webp" },
  { name: "Orico Balimor Finance", src: "/client-1.webp" },
];

export default function CorporateLogos() {
  // Duplikasi array logo agar animasi infinite scroll bergulir tanpa jeda
  const duplicatedLogos = [
    ...corporateLogos,
    ...corporateLogos,
    ...corporateLogos,
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-100 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Sektor Swasta & BUMD
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
            Corporate
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-medium">
            Dipercaya oleh berbagai perusahaan korporasi, perbankan, dan BUMD
            terkemuka.
          </p>
        </FadeInSection>

        {/* Carousel Container dengan Efek Fade / Gradient Mask di Ujung Kiri & Kanan */}
        <FadeInSection>
          <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-slate-200/80 py-10 sm:py-14 shadow-sm">
            {/* Soft Gradient Overlay di Ujung Layout (Kiri & Kanan) */}
            <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Moving Infinite Scroll Rail */}
            <div className="flex items-center w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-12 sm:gap-16">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[180px] sm:min-w-[220px] h-24 sm:h-32 px-4 transition-transform duration-300 transform hover:scale-125 active:scale-125 cursor-pointer select-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-sm"
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
