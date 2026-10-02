import FadeInSection from "../../common/FadeInSection";

// Import gambar background suasana rapat perkantoran
import bgMeeting from "../../../assets/business-coach-001.webp";

const commitmentPillars = [
  {
    title: "Profesionalisme & Integritas",
    color: "from-sky-400/90 to-cyan-500/90 border-cyan-300",
    shadow: "shadow-cyan-500/20",
    position: "sm:-mr-6 z-10",
  },
  {
    title: "Ketepatan & Komunikasi",
    color: "from-amber-400/90 to-orange-500/90 border-amber-300",
    shadow: "shadow-orange-500/20",
    position: "sm:-ml-6 z-10",
  },
  {
    title: "Orientasi Kebutuhan Klien",
    color: "from-blue-600/90 to-navy-900/90 border-blue-400",
    shadow: "shadow-blue-600/30",
    position: "sm:-mt-10 sm:col-span-2 z-20",
  },
];

export default function SustainableCommitmentSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden text-slate-800 bg-slate-100">
      {/* Background Gambar Meeting Perkantoran */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgMeeting}
          alt="Suasana Diskusi Tim"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[0.9]"
        />
        {/* Overlay Gradient Terang agar Teks Bertenaga & Ringan */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50/90 px-4 py-1.5 rounded-full border border-blue-200 backdrop-blur-sm">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-navy-900 leading-tight">
              Komitmen <span className="text-blue-600">Berkelanjutan</span>
            </h2>
          </div>
        </FadeInSection>

        {/* DIAGRAM VENN 3 LINGKARAN TERHUBUNG (DESKTOP & MOBILE) */}
        <FadeInSection>
          <div className="max-w-2xl mx-auto my-8">
            {/* Tampilan Desktop: Diagram Venn Saling Overlap */}
            <div className="hidden sm:flex flex-col items-center justify-center">
              {/* Baris Atas (2 Lingkaran) */}
              <div className="flex items-center justify-center -mb-8">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400/85 to-sky-500/85 border-2 border-white/80 shadow-xl shadow-cyan-500/20 backdrop-blur-md flex items-center justify-center p-6 text-center text-white font-extrabold text-base tracking-tight transform hover:scale-105 transition-transform cursor-default -mr-6 z-10">
                  Profesionalisme <br /> & Integritas
                </div>
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-amber-400/85 to-orange-500/85 border-2 border-white/80 shadow-xl shadow-orange-500/20 backdrop-blur-md flex items-center justify-center p-6 text-center text-white font-extrabold text-base tracking-tight transform hover:scale-105 transition-transform cursor-default -ml-6 z-10">
                  Ketepatan & <br /> Komunikasi
                </div>
              </div>

              {/* Baris Bawah (1 Lingkaran Pusat Bawah) */}
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-600/90 to-navy-900/90 border-2 border-white/80 shadow-2xl shadow-blue-900/30 backdrop-blur-md flex items-center justify-center p-6 text-center text-white font-extrabold text-base tracking-tight transform hover:scale-105 transition-transform cursor-default z-20">
                Orientasi <br /> Kebutuhan Klien
              </div>
            </div>

            {/* Tampilan Mobile: Vertical Stacked Cards / Circles */}
            <div className="sm:hidden grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-center font-extrabold text-base shadow-md">
                Profesionalisme & Integritas
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white text-center font-extrabold text-base shadow-md">
                Ketepatan & Komunikasi
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-navy-900 text-white text-center font-extrabold text-base shadow-md">
                Orientasi Kebutuhan Klien
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* STATEMENT BANNER BAWAH (GLASSMORPHISM CARD) */}
        <FadeInSection>
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-white/80 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg backdrop-blur-md text-center">
            <p className="text-xs sm:text-base font-semibold text-slate-700 leading-relaxed">
              "Kami percaya keberhasilan tidak hanya ditentukan oleh eksekusi
              tugas, tetapi oleh kapasitas untuk menjadi mitra strategis yang
              adaptif dan dapat diandalkan."
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
