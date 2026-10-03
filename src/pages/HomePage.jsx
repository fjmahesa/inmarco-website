import HeroSection from "../components/sections/home/HeroSection";
import AboutUsBrief from "../components/sections/home/AboutUsBrief";
import VisionMissionSection from "../components/sections/home/VisionMissionSection";
import BusinessPillarsSection from "../components/sections/home/BusinessPillarsSection";
import MiceServicesSection from "../components/sections/home/MiceServicesSection";
import SecurityMatrixSection from "../components/sections/home/SecurityMatrixSection";
import DigitalEcosystemSection from "../components/sections/home/DigitalEcosystemSection";
import WorkApproach from "../components/sections/home/WorkApproach";
import TrustTrackRecordSection from "../components/sections/home/TrustTrackRecordSection";
import ConsultingStrategySection from "../components/sections/home/ConsultingStrategySection";
import SecurityServicesSection from "../components/sections/home/SecurityServicesSection";
import PemdaBumdLogos from "../components/sections/home/PemdaBumdLogos";
import SustainableCommitmentSection from "../components/sections/home/SustainableCommitmentSection";

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
        <AboutUsBrief />
        {/* <VisionMissionSection /> */}
        <BusinessPillarsSection />
        <MiceServicesSection />
        <ConsultingStrategySection />
        <DigitalEcosystemSection />
        <SecurityServicesSection />
        <SecurityMatrixSection />
        {/* <WorkApproach /> */}
        <TrustTrackRecordSection />

        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <ProcessWorkflow /> */}
        <ClientLogos />
        <PemdaBumdLogos />
        <EducationLogos />
        <CorporateLogos />
        {/* <SustainableCommitmentSection /> */}
      </main>
    </div>
  );
}
