import FadeInSection from "../../common/FadeInSection";
import bgAbout from "../../../assets/business-coach-004.webp";
import imgServices from "../../../assets/business-coach-005.webp";

export default function AboutPreview() {
  return (
    <div id="about" className="overflow-hidden">
      {/* 1. PARALLAX BANNER SECTION */}
      <section
        className="relative w-full py-24 sm:py-32 bg-fixed bg-cover bg-top overflow-hidden"
        style={{
          backgroundImage: `url(${bgAbout})`,
        }}
      >
        {/* Navy Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-blue-900/60 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeInSection className="max-w-2xl text-white space-y-6">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span>Tentang Kami</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              About Us
            </h2>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed">
              Inmarco adalah perusahaan Creative Digital Komunikasi dan Event
              serta team Building Manajemen.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 text-xs font-extrabold text-navy-900 bg-white hover:bg-blue-50 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 2. DETAIL CONTENT SECTION */}
      <section className="py-20 sm:py-28 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Teks & Informasi */}
            <div className="lg:col-span-6 space-y-6">
              <FadeInSection>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                  Visi & Solusi
                </span>

                <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
                  INTEGRATED MARKETING COMMUNICATION
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Didirikan untuk menjawab kebutuhan Visi Perusahaan, Organisasi
                  atau Lembaga baik Pemerintahan maupun Swasta yang membutuhkan
                  bantuan akan solusi ide-ide kreatif dan inovatif, Digital
                  Campaign, serta kebutuhan akan kegiatan Event seperti
                  Launching, Gathering, Outbound, Team Building dan lain-lain.
                </p>

                {/* Point Keunggulan / Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                      💡
                    </div>
                    <h4 className="font-bold text-navy-900 text-sm">
                      Ide Kreatif & Inovatif
                    </h4>
                    <p className="text-xs text-slate-500">
                      Strategi kampanye digital yang terukur dan berdampak
                      tinggi.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      🎯
                    </div>
                    <h4 className="font-bold text-navy-900 text-sm">
                      Event Management
                    </h4>
                    <p className="text-xs text-slate-500">
                      Launching, Gathering, Outbound & Team Building
                      profesional.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column: Gambar Kolaborasi & Frame Modern */}
            <div className="lg:col-span-6">
              <FadeInSection>
                <div className="relative">
                  {/* Decorative Accent Card */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-blue-50 rounded-3xl -z-10 transform -rotate-1 sm:-rotate-2" />

                  {/* Main Image */}
                  <div className="overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                    <img
                      src={imgServices}
                      alt="Integrated Marketing Communication Team"
                      className="w-full h-100 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-black text-xl">
                      #1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Solusi Terpadu
                      </p>
                      <p className="text-sm font-extrabold text-navy-900">
                        Creative & Event Agency
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
