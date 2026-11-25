import { useTranslation } from "react-i18next";
import FadeInSection from "../../common/FadeInSection";

export default function CompanyLegality() {
  const { t } = useTranslation("homeMisc");

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-navy-900/60 text-white relative overflow-hidden border-y border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Sisi Kiri: Narasi Profil & Sejarah */}
          <div className="lg:col-span-6 space-y-5">
            <FadeInSection>
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
                {t("legality.badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-3">
                {t("legality.titleLead")}{" "}
                <span className="text-sky-400">
                  {t("legality.titleAccent")}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("legality.historyLead")}{" "}
                <strong className="text-white">
                  {t("legality.historyDate")}
                </strong>
                [cite: 9]
                {t("legality.historyMiddle")}{" "}
                <strong className="text-white">
                  {t("legality.historyEntity")}
                </strong>
                [cite: 9].
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t("legality.history2")}[cite: 9, 11].
              </p>
            </FadeInSection>

            {/* Timeline Singkat */}
            <FadeInSection delay={150}>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800">
                  <span className="text-xs font-bold text-sky-400">
                    {t("legality.timeline1Date")}
                  </span>
                  [cite: 9]
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    {t("legality.timeline1Title")}
                  </h4>
                  [cite: 9]
                  <p className="text-[11px] text-slate-400 mt-1">
                    {t("legality.timeline1Desc")}[cite: 9].
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-navy-950 border border-sky-500/30">
                  <span className="text-xs font-bold text-sky-400">
                    {t("legality.timeline2Date")}
                  </span>
                  [cite: 9]
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    {t("legality.timeline2Title")}
                  </h4>
                  [cite: 9]
                  <p className="text-[11px] text-slate-400 mt-1">
                    {t("legality.timeline2Desc")}[cite: 9].
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Sisi Kanan: Tabel Data Legalitas Perusahaan */}
          <div className="lg:col-span-6">
            <FadeInSection delay={200}>
              <div className="bg-navy-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-4 mb-5 flex items-center justify-between">
                  <span>{t("legality.tableTitle")}</span>
                  <span className="text-xs font-mono text-sky-400 font-normal">
                    {t("legality.tableLabel")}
                  </span>
                </h3>

                <div className="space-y-3.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-800/60 gap-1 sm:gap-0">
                    <span className="text-slate-400">
                      {t("legality.businessStatus")}
                    </span>
                    <span className="font-bold text-white">
                      PT GLOBAL INMARCO SEJAHTERA
                    </span>
                    [cite: 9]
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-800/60 gap-1 sm:gap-0">
                    <span className="text-slate-400">
                      {t("legality.deedNo")}
                    </span>
                    <span className="font-mono text-slate-200">
                      {t("legality.deedValue")}
                    </span>
                    [cite: 9]
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-800/60 gap-1 sm:gap-0">
                    <span className="text-slate-400">
                      {t("legality.decree")}
                    </span>
                    <span className="font-mono text-sky-400 font-semibold">
                      AHU-0038268.AH.01.01.TAHUN 2024
                    </span>
                    [cite: 9]
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-800/60 gap-1 sm:gap-0">
                    <span className="text-slate-400">{t("legality.tax")}</span>
                    <span className="font-mono text-slate-200">
                      20.686.913.3-014.000
                    </span>
                    [cite: 9]
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-1 sm:gap-0">
                    <span className="text-slate-400">{t("legality.field")}</span>
                    <span className="font-semibold text-slate-200 text-right">
                      {t("legality.fieldValue")}
                    </span>
                    [cite: 9, 11]
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
