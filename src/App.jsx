import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/layout/Footer";
// import GallerySection from "./pages/GallerySection";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-navy-900 selection:text-white flex flex-col justify-between">
        {/* Navbar tampil konstan di semua halaman */}
        <Navbar />

        {/* Konten Utama Berubah Sesuai Route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/gallery" element={<GallerySection />} /> */}

            {/* Catch-all Route untuk Halaman 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer tampil konstan di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
}
