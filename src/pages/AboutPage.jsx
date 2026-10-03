import AboutUs from "../components/sections/about/AboutUs";
import AboutHeroSection from "../components/sections/about/AboutHeroSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-navy-900 selection:text-white">
      <main>
        <AboutHeroSection />

        <AboutUs />
      </main>
    </div>
  );
}
