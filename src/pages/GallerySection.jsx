import FadeInSection from "../components/common/FadeInSection";

export default function GallerySection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          {/* Header Judul Section */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Galeri & Dokumentasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Kegiatan & Portofolio Terbaru
            </h2>
          </div>

          {/* Container iFrame Embed Galeri */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-50">
            <iframe
              src="https://admin.inmarco.id/carousel/"
              title="Galeri Dokumentasi INMARCO"
              className="w-full h-[400px] sm:h-[550px] border-0"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
