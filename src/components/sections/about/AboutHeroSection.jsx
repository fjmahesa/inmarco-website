import FadeInSection from "../../common/FadeInSection";

// Impor aset gambar visual hero (sesuaikan path gambar jika ada di src/assets)
import aboutHeroImg from "../../../assets/business-coach-005.webp";

export default function AboutHeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-slate-50 text-slate-800 overflow-hidden">
      {/* Background Ambient Glow (Light Theme Modern) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-tr from-blue-200/40 via-sky-100/50 to-indigo-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* SISI KIRI: TEXT & HEADLINE HERO (7 COL) */}
          <FadeInSection className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              About PT. Global Inmarco Sejahtera
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight leading-[1.15]">
              Membangun Masa Depan Melalui{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Solusi Terintegrasi
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Transformasi berkelanjutan dari badan usaha CV pada tahun 2011
              hingga resmi menjadi Perseroan Terbatas (PT) pada Mei 2024. Kami
              hadir memperkuat sinergi di bidang MICE, Konsultan Strategis,
              Media Digital, dan Jasa Pengamanan.
            </p>

            {/* QUICK HIGHLIGHT BADGES */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-2 text-xs font-extrabold text-navy-900">
                <span className="text-blue-600 font-mono font-black">13+</span>{" "}
                Tahun Pengalaman
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-2 text-xs font-extrabold text-navy-900">
                <span className="text-blue-600 font-mono font-black">4</span>{" "}
                Pilar Utama Jasa
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-2 text-xs font-extrabold text-navy-900">
                <span className="text-blue-600 font-mono font-black">100%</span>{" "}
                Resmi Kemenkumham
              </div>
            </div>
          </FadeInSection>

          {/* SISI KANAN: VISUAL BANNER & GLASS CARD (5 COL) */}
          <FadeInSection className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Bingkai Foto Utama */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={aboutHeroImg}
                  alt="Tentang PT Global Inmarco Sejahtera"
                  className="w-full h-[340px] sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-sky-300 font-mono">
                    Integrated Agency
                  </p>
                  <h3 className="text-lg font-black mt-0.5">
                    PT. Global Inmarco Sejahtera
                  </h3>
                </div>
              </div>

              {/* Floating Badge Glassmorphism (Mobile Friendly) */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/90 border border-slate-200/80 p-4 rounded-2xl shadow-xl max-w-[210px] space-y-1 backdrop-blur-md hidden sm:block">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Milestone Legalitas
                </p>
                <p className="text-xs font-black text-navy-950">
                  CV (2011) → PT (2024)
                </p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">
                  AHU-0038268.AH.01.01
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
