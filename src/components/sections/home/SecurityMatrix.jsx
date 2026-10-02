import FadeInSection from "../../common/FadeInSection";

export default function SecurityMatrix() {
  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              Security Services Highlight
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Matriks Keamanan Terpadu{" "}
              <span className="text-sky-400">360°</span>
            </h2>
            [cite: 18]
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sistem pengamanan modern yang memadukan keahlian personil
              profesional, analisis risiko, serta teknologi deteksi elektronik
              terkini[cite: 15, 18].
            </p>
          </div>
        </FadeInSection>

        {/* Grid Matriks 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1: Manusia x Preventif */}
          <FadeInSection delay={100}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  Manusia • Preventif
                </span>
                [cite: 18]
                <span className="text-xs font-mono text-slate-400">01</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Tenaga Ahli Pengamanan
              </h3>
              [cite: 18]
              <p className="text-xs text-slate-300 leading-relaxed">
                Security Assessment, penyusunan SOP pengamanan, analisis risiko
                keamanan, serta perancangan pola keamanan berbasis
                teknologi[cite: 16, 18].
              </p>
            </div>
          </FadeInSection>

          {/* Box 2: Manusia x Aktif */}
          <FadeInSection delay={150}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  Manusia • Aktif
                </span>
                [cite: 18]
                <span className="text-xs font-mono text-slate-400">02</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Garda Depan (Satpam)
              </h3>
              [cite: 16, 18]
              <p className="text-xs text-slate-300 leading-relaxed">
                Penyediaan Satpam profesional untuk penjagaan akses masuk,
                pengawasan lingkungan, patroli area, pengendalian pengunjung,
                dan pelaporan kejadian[cite: 16, 18].
              </p>
            </div>
          </FadeInSection>

          {/* Box 3: Teknologi x Preventif */}
          <FadeInSection delay={200}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-sky-500/50 shadow-lg shadow-sky-500/5 hover:border-sky-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Teknologi • Preventif
                </span>
                [cite: 18]
                <span className="text-xs font-mono text-emerald-400">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Deteksi Elektronik (Security Sweep)
              </h3>
              [cite: 17, 18]
              <p className="text-xs text-slate-300 leading-relaxed">
                Pemeriksaan dan pembersihan ruang kerja, rapat, dan pimpinan
                dari potensi perangkat elektronik yang tidak semestinya untuk
                menjaga kerahasiaan informasi[cite: 17].
              </p>
            </div>
          </FadeInSection>

          {/* Box 4: Teknologi x Aktif */}
          <FadeInSection delay={250}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  Teknologi • Aktif
                </span>
                [cite: 18]
                <span className="text-xs font-mono text-slate-400">04</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                CCTV & Monitoring Center
              </h3>
              [cite: 17, 18]
              <p className="text-xs text-slate-300 leading-relaxed">
                Instalasi, pemantauan area secara real-time, pengawasan akses,
                dan integrasi pusat kendali monitoring untuk melengkapi personil
                pengamanan fisik[cite: 17, 18].
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
