import { useTranslation } from "react-i18next";
import FadeInSection from "../../common/FadeInSection";

export default function SecurityMatrix() {
  const { t } = useTranslation("homeDigital");

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
              {t("highlight.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t("highlight.titleLead")}{" "}
              <span className="text-sky-400">{t("highlight.titleAccent")}</span>
            </h2>
            {t("highlight.cite18")}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t("highlight.description")}
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
                  {t("highlight.boxes.0.tag")}
                </span>
                {t("highlight.cite18")}
                <span className="text-xs font-mono text-slate-400">
                  {t("highlight.boxes.0.number")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("highlight.boxes.0.title")}
              </h3>
              {t("highlight.cite18")}
              <p className="text-xs text-slate-300 leading-relaxed">
                {t("highlight.boxes.0.description")}
              </p>
            </div>
          </FadeInSection>

          {/* Box 2: Manusia x Aktif */}
          <FadeInSection delay={150}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  {t("highlight.boxes.1.tag")}
                </span>
                {t("highlight.cite18")}
                <span className="text-xs font-mono text-slate-400">
                  {t("highlight.boxes.1.number")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("highlight.boxes.1.title")}
              </h3>
              {t("highlight.cite16_18")}
              <p className="text-xs text-slate-300 leading-relaxed">
                {t("highlight.boxes.1.description")}
              </p>
            </div>
          </FadeInSection>

          {/* Box 3: Teknologi x Preventif */}
          <FadeInSection delay={200}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-sky-500/50 shadow-lg shadow-sky-500/5 hover:border-sky-400 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {t("highlight.boxes.2.tag")}
                </span>
                {t("highlight.cite18")}
                <span className="text-xs font-mono text-emerald-400">
                  {t("highlight.boxes.2.featured")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("highlight.boxes.2.title")}
              </h3>
              {t("highlight.cite17_18")}
              <p className="text-xs text-slate-300 leading-relaxed">
                {t("highlight.boxes.2.description")}
              </p>
            </div>
          </FadeInSection>

          {/* Box 4: Teknologi x Aktif */}
          <FadeInSection delay={250}>
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900/80 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  {t("highlight.boxes.3.tag")}
                </span>
                {t("highlight.cite18")}
                <span className="text-xs font-mono text-slate-400">
                  {t("highlight.boxes.3.number")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t("highlight.boxes.3.title")}
              </h3>
              {t("highlight.cite17_18")}
              <p className="text-xs text-slate-300 leading-relaxed">
                {t("highlight.boxes.3.description")}
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
