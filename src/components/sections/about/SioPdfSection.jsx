import FadeInSection from "../../common/FadeInSection";

export default function SioPdfSection() {
  // URL file PDF dari Media Library WordPress admin.inmarco.id
  const pdfUrl =
    "https://admin.inmarco.id/wp-content/uploads/2026/10/SIO-PT-GIS.pdf";

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          {/* Header Judul Section */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Leglegalitas & Perizinan
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight leading-snug">
              Surat Izin Operasional Bidang Usaha Jasa Pengamanan
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Dokumen resmi perizinan operasional jasa pengamanan PT Global
              Inmarco Sejahtera yang telah terverifikasi.
            </p>
          </div>

          {/* Container Viewer PDF */}
          <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
            {/* Top Bar Viewer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 bg-slate-100/80 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-rose-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-slate-700 truncate max-w-[250px] sm:max-w-none">
                  SIO PT GIS.pdf
                </span>
              </div>

              {/* Tombol Buka / Unduh PDF */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2 text-xs font-extrabold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-sm active:scale-95"
              >
                Unduh / Buka Dokumen
              </a>
            </div>

            {/* Embed / Preview PDF Body */}
            <div className="w-full h-[500px] sm:h-[650px] bg-slate-200 relative">
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback Tampilan Mobile atau Browser Tanpa Support Viewer PDF */}
                <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4 bg-slate-50">
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                    Pratinjau langsung dokumen PDF tidak didukung oleh browser
                    Anda.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-xl shadow-md transition-all"
                  >
                    Klik untuk Membuka Dokumen SIO
                  </a>
                </div>
              </object>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
