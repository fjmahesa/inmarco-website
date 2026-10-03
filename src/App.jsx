import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-navy-900 selection:text-white flex flex-col justify-between">
        {/* Navbar tampil konstan di semua halaman */}
        <Navbar />

        {/* Konten Utama Berubah Sesuai Route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* Footer tampil konstan di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
}
