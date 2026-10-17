import FadeInSection from "../../common/FadeInSection";
import logoInmarco from "../../../assets/logo.jpg"; // Sesuaikan path logo/avatar INMARCO kamu

export default function InstagramFeedIframe() {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          {/* Header Judul Section */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Social Media
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Ikuti Kami Di Instagram
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Kunjungi profil Instagram resmi kami{" "}
              <a
                href="https://instagram.com/inmarco.indonesia"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 font-bold hover:underline"
              >
                @inmarco.indonesia
              </a>
            </p>
          </div>

          {/* Card Container & Custom Profile Header */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-white">
            {/* Header Profil Instagram */}
            <div className="flex items-center justify-between px-3.5 sm:px-8 py-3 sm:py-4 bg-white border-b border-slate-100">
              {/* Kiri: Avatar & Username */}
              <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                <img
                  src={logoInmarco}
                  alt="INMARCO Logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 shrink-0 object-contain rounded-full border border-slate-200 p-0.5 sm:p-1"
                />
                <span className="text-xs sm:text-xl font-bold text-slate-900 tracking-tight truncate">
                  @inmarco.indonesia
                </span>
              </div>

              {/* Kanan: Tombol Follow */}
              <a
                href="https://instagram.com/inmarco.indonesia"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-3 sm:px-6 py-1.5 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-white bg-[#0095f6] hover:bg-[#1877f2] rounded-xl transition-all shadow-sm active:scale-95"
              >
                Follow on Instagram
              </a>
            </div>

            {/* Container iFrame Embed Feed */}
            <iframe
              src="https://admin.inmarco.id/instagram/"
              title="Instagram Feed INMARCO"
              className="w-full h-[315px] sm:h-[238px] border-0"
              loading="lazy"
              scrolling="no"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
