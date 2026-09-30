import { useState } from "react";
import FadeInSection from "../../common/FadeInSection";

const workflowSteps = [
  {
    step: "01",
    title: "We Meet You & Discus",
    tagline: "Langkah Pertama",
    description:
      "Pertemuan & diskusi mendalam untuk memetakan ekspektasi, kebutuhan, serta tujuan utama brand Anda.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Understand Your Business Process",
    tagline: "Analisis Internal",
    description:
      "Mempelajari alur operasional dan keunikan ekosistem bisnis Anda agar solusi yang dirancang tepat sasaran.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Data Gathering & Analysis",
    tagline: "Riset Komprehensif",
    description:
      "Mengumpulkan data riil mengenai kondisi pasar, kompetitor, serta tren audiens sebagai landasan strategi.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Campaign Ideas & Concept",
    tagline: "Pengembangan Ide",
    description:
      "Merumuskan konsep kreatif dan pesan kunci komunikasi pemasaran yang berdaya pikat tinggi.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Grow Your Business",
    tagline: "Eksekusi Strategis",
    description:
      "Pelaksanaan kampanye terpadu melalui berbagai kanal digital dan event untuk mengakselerasi pertumbuhan bisnis.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
        />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Welcome To Happy Client Club",
    tagline: "Kemitraan Berkelanjutan",
    description:
      "Evaluasi performa berkala dan pendampingan jangka panjang sebagai mitra terpercaya bisnis Anda.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

export default function ProcessWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isFade, setIsFade] = useState(false);

  // Handler untuk mengubah langkah dengan efek pudar (fade)
  const handleStepChange = (index) => {
    if (index === activeStep) return;
    setIsFade(true);
    setTimeout(() => {
      setActiveStep(index);
      setIsFade(false);
    }, 200); // Penundaan halus 200ms saat memudar keluar lalu masuk
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Work Process
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
            “Inmarco – Integrated Marketing Communication”
          </h2>
          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Metodologi 6 langkah yang teruji untuk membantu brand Anda melangkah
            lebih pasti.
          </p>
        </FadeInSection>

        {/* DESKTOP VIEW: Stepper Timeline Center-Aligned */}
        <FadeInSection className="hidden lg:block">
          {/* Stepper Navigation Container */}
          <div className="relative mb-14 px-6">
            {/* Base Background Line (Tepat setinggi lingkaran h-12 / 2 = top-6) */}
            <div className="absolute top-6 left-12 right-12 h-1 bg-slate-200 -translate-y-1/2 z-0" />

            {/* Active Progress Line */}
            <div
              className="absolute top-6 left-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 -translate-y-1/2 transition-all duration-500 z-0"
              style={{
                width: `${(activeStep / (workflowSteps.length - 1)) * 90}%`,
              }}
            />

            {/* Stepper Circles & Text */}
            <div className="relative z-10 flex items-start justify-between">
              {workflowSteps.map((item, idx) => {
                const isActive = idx === activeStep;
                const isPassed = idx < activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => handleStepChange(idx)}
                    className="flex flex-col items-center group focus:outline-none w-28 cursor-pointer"
                  >
                    {/* Circle Indicator (h-12 w-12) */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-navy-900 text-white ring-4 ring-navy-900/20 scale-110 shadow-lg shadow-navy-900/20"
                          : isPassed
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-400 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      {item.step}
                    </div>

                    {/* Tagline Below Circle */}
                    <span
                      className={`mt-4 text-xs font-bold text-center leading-tight transition-colors ${
                        isActive
                          ? "text-navy-900 font-extrabold"
                          : "text-slate-500 group-hover:text-slate-800"
                      }`}
                    >
                      {item.tagline}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card dengan Transisi Smooth State */}
          <div
            className={`bg-slate-50 border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl flex items-center gap-8 max-w-4xl mx-auto transition-all duration-300 transform ${
              isFade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-navy-900/10">
              {workflowSteps[activeStep].icon}
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
                Langkah {workflowSteps[activeStep].step} —{" "}
                {workflowSteps[activeStep].tagline}
              </span>
              <h3 className="text-2xl font-black text-navy-900">
                {workflowSteps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {workflowSteps[activeStep].description}
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* MOBILE & TABLET VIEW: Vertical Connected Timeline */}
        <FadeInSection className="lg:hidden space-y-6">
          {workflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-slate-200 space-y-2 group"
            >
              {/* Circle Badge */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-navy-900 text-navy-900 flex items-center justify-center text-xs font-black shadow-sm">
                {item.step}
              </div>

              {/* Card Container */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-navy-900 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-navy-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
}
