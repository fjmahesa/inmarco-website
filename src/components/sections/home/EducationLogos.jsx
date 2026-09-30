import FadeInSection from "../../common/FadeInSection";

const educationLogos = [
  { name: "Fakultas Psikologi Universitas Indonesia", src: "/uipsikolog.webp" },
  {
    name: "Sekolah Tinggi Sandi Negara (STSN)",
    src: "/sekolahtinggisandinegara.webp",
  },
];

export default function EducationLogos() {
  // Duplikasi logo khusus untuk animasi slider di tampilan mobile
  const duplicatedLogosMobile = [
    ...educationLogos,
    ...educationLogos,
    ...educationLogos,
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-100 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Sektor Akademik
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
            Pendidikan
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 font-medium">
            Kemitraan strategis bersama perguruan tinggi dan institusi
            pendidikan tinggi nasional.
          </p>
        </FadeInSection>

        <FadeInSection>
          {/* Card Container: Menggunakan w-full sm:w-fit mx-auto agar menyesuaikan dengan isi di desktop */}
          <div className="relative w-full sm:w-fit mx-auto rounded-3xl bg-white border border-slate-200/80 py-8 sm:py-10 px-6 sm:px-16 shadow-sm">
            {/* 1. DESKTOP VIEW: Statis, Ringkas, & Sejajar di Tengah */}
            <div className="hidden sm:flex items-center justify-center gap-12 sm:gap-16">
              {educationLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[180px] sm:min-w-[200px] h-24 sm:h-28 transition-transform duration-300 transform hover:scale-125 cursor-pointer select-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-20 sm:max-h-24 w-auto object-contain drop-shadow-sm"
                  />
                </div>
              ))}
            </div>

            {/* 2. MOBILE VIEW: Infinite Scroll Slider (Hanya Tampil di Layar HP) */}
            <div className="block sm:hidden relative w-full overflow-hidden">
              {/* Soft Gradient Mask Kiri & Kanan di Mobile */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

              <div className="flex items-center w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-8">
                {duplicatedLogosMobile.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[150px] h-20 transition-transform duration-300 transform active:scale-125 select-none"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-16 w-auto object-contain drop-shadow-sm"
                    />
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
