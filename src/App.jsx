import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-navy-900 selection:text-white">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
