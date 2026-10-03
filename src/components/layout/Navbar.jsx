import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cek apakah halaman di-scroll melewati batas atas (20px)
      setIsScrolled(currentScrollY > 20);

      // Logika Sembunyi/Muncul Navbar:
      // Jika di paling atas -> selalu muncul
      // Jika scroll ke bawah -> sembunyikan
      // Jika scroll ke atas -> tampilkan
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Sembunyikan saat scroll ke bawah
        setIsMobileMenuOpen(false); // Tutup drawer mobile saat di-scroll
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Munculkan saat scroll ke atas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Helper style untuk menandai menu yang sedang aktif
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive
        ? "text-blue-600 font-bold"
        : "text-slate-700 hover:text-blue-600"
    }`;

  const mobileNavLinkStyle = ({ isActive }) =>
    `block py-2 text-sm font-semibold transition-colors ${
      isActive
        ? "text-blue-600 font-bold"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Gambar Website */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/inmarco_logo.png"
              alt="INMARCO.ID"
              className="h-9 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About Us
            </NavLink>
            <a
              href="#service"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Service
            </a>
            <a
              href="#client"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Our Client
            </a>
          </nav>

          {/* CTA Button (Contact Us) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-blue-600 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-white border border-slate-100 rounded-2xl shadow-xl space-y-2 animate-fade-in">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkStyle}
            >
              About Us
            </NavLink>
            <a
              href="#service"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Service
            </a>
            <a
              href="#client"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Our Client
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center py-2.5 mt-3 text-xs font-bold text-white bg-navy-900 rounded-xl shadow-md"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
