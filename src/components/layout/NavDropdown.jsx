import { useState, useRef, useEffect } from "react";

export default function NavDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 py-2 text-sm font-semibold transition-colors ${
          isOpen ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
        }`}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
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

      {/* Dropdown Card */}
      <div
        className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-2xl p-2 space-y-1">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group flex items-center justify-between px-4 py-3 text-xs font-bold text-slate-700 hover:text-white hover:bg-navy-900 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:translate-x-1"
            >
              <span>{item.label}</span>
              {/* Icon panah kecil yang muncul lebih tajam saat di-hover */}
              <svg
                className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
