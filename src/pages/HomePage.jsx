import HeroSection from "../components/sections/home/HeroSection";
import AboutPreview from "../components/sections/home/AboutPreview";
import Services from "../components/sections/home/Services";
import Projects from "../components/sections/home/Projects";
import ProcessWorkflow from "../components/sections/home/ProcessWorkflow";
import ClientLogos from "../components/sections/home/ClientLogos";
import EducationLogos from "../components/sections/home/EducationLogos";
import CorporateLogos from "../components/sections/home/CorporateLogos";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-navy-900 selection:text-white">
      <main>
        <HeroSection />
        <AboutPreview />
        <Services />
        <Projects />
        <ProcessWorkflow />
        <ClientLogos />
        <EducationLogos />
        <CorporateLogos />
      </main>
    </div>
  );
}
