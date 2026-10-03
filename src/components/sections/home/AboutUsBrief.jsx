import FadeInSection from "../../common/FadeInSection";

// Import aset gambar lokal .webp dari src/assets/
import aboutImg from "../../../assets/business-coach-005.webp";

export default function AboutUsBrief() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-slate-50 text-slate-800 relative overflow-hidden"
    >
      {/* Visual Ambient Glow Background (Light Theme) */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* GAMBAR VISUAL & RINGKASAN PROFIL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* SISI KIRI: GAMBAR VISUAL (5 COL) */}
          <FadeInSection className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={aboutImg}
                  alt="PT Global Inmarco Sejahtera"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-semibold text-sky-300 uppercase tracking-widest">
                    Integrated Agency
                  </p>
                  <h4 className="text-lg font-black mt-0.5">
                    PT. Global Inmarco Sejahtera
                  </h4>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* SISI KANAN: HEADER & VISI UTAMA (7 COL) */}
          <FadeInSection className="lg:col-span-7">
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                Tentang Kami
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                Transformasi Menuju <br className="hidden sm:inline" />
                <span className="text-blue-600">
                  Solusi Terintegrasi & Adaptif
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Dimulai dari badan usaha berbentuk CV pada tahun 2011,
                perusahaan kami berkembang pesat hingga resmi bertransformasi
                menjadi{" "}
                <strong className="text-navy-900 font-semibold">
                  PT. Global Inmarco Sejahtera
                </strong>{" "}
                pada 28 Mei 2024 guna menghadirkan ekosistem layanan
                terintegrasi skala besar bagi pemerintah dan swasta.
              </p>

              {/* KARTU VISI UTAMA */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Visi Perusahaan
                  </span>
                </div>

                <p className="text-sm font-bold text-navy-900 italic leading-relaxed">
                  "Menjadi perusahaan penyedia jasa dan solusi terintegrasi yang
                  profesional, terpercaya, inovatif, dan berorientasi pada
                  kualitas pelayanan serta kebutuhan klien."
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
