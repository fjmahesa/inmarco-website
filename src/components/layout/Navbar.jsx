import { useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State khusus untuk toggle dropdown sub-menu di Mobile
  const [isMobileProjectOpen, setIsMobileProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectSubMenu = [
    { label: "Events", href: "#events" },
    { label: "Education & Training", href: "#education" },
    { label: "Package Tour", href: "#tour" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight text-navy-900 group-hover:text-blue-600 transition-colors">
              INMARCO
              <span className="text-blue-600 group-hover:text-navy-900">
                .ID
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#blog"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#service"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Service
            </a>

            {/* Dropdown Project Desktop */}
            <NavDropdown title="Project" items={projectSubMenu} />

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
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Blog
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#service"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              Service
            </a>

            {/* Mobile Project Accordion / Toggleable Dropdown */}
            <div className="py-1">
              <button
                onClick={() => setIsMobileProjectOpen(!isMobileProjectOpen)}
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 focus:outline-none"
              >
                <span>Project</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileProjectOpen
                      ? "rotate-180 text-blue-600"
                      : "text-slate-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Sub-menu Mobile yang dapat di-toggle */}
              {isMobileProjectOpen && (
                <div className="mt-1 pl-3 border-l-2 border-navy-900 space-y-1 my-1 animate-fade-in">
                  {projectSubMenu.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileProjectOpen(false);
                      }}
                      className="block py-2 px-3 text-xs font-bold text-slate-600 hover:text-white hover:bg-navy-900 rounded-lg transition-all"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
