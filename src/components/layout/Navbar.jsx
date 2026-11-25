import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LanguageSwitcher({ size = "sm" }) {
  const { i18n } = useTranslation("navbar");
  const buttonClass = `font-bold rounded-md transition-colors ${
    size === "lg" ? "px-3 py-1.5 text-xs" : "px-2 py-1 text-[11px]"
  }`;

  return (
    <div className="flex items-center gap-1 shrink-0">
      {["id", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={i18n.language === lng}
          className={`${buttonClass} ${
            i18n.language === lng
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation("navbar");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handler khusus untuk Home & Logo
  const handleHomeClick = (e) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // Jika sudah di Beranda, cegah reload & scroll mulus ke paling atas
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handler khusus untuk Anchor Link (Our Client & Contact Us)
  const handleAnchorNav = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 group"
          >
            <img
              src="/inmarco_logo.png"
              alt={t("brand.alt")}
              className="h-9 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" onClick={handleHomeClick} className={navLinkStyle}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/services" className={navLinkStyle}>
              {t("nav.services")}
            </NavLink>
            <a
              href="#client"
              onClick={(e) => handleAnchorNav(e, "client")}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              {t("nav.client")}
            </a>
          </nav>

          {/* Language switcher + CTA Button (Contact Us) */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={(e) => handleAnchorNav(e, "contact")}
              className="px-6 py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-blue-600 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {t("nav.contact")}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900 rounded-lg focus:outline-none"
            aria-label={t("mobile.menu")}
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
              onClick={handleHomeClick}
              className={mobileNavLinkStyle}
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkStyle}
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={mobileNavLinkStyle}
            >
              {t("nav.services")}
            </NavLink>
            <a
              href="#client"
              onClick={(e) => handleAnchorNav(e, "client")}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 cursor-pointer"
            >
              {t("nav.client")}
            </a>
            {/* Language switcher sejajar dengan CTA di mobile */}
            <div className="flex items-center gap-3 pt-3">
              <LanguageSwitcher size="lg" />
              <a
                href="#contact"
                onClick={(e) => handleAnchorNav(e, "contact")}
                className="flex-1 text-center py-2.5 text-xs font-bold text-white bg-navy-900 hover:bg-blue-600 rounded-xl shadow-md cursor-pointer transition-colors"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
