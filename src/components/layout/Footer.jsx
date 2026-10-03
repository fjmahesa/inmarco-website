import { useState, useEffect } from "react";
import FadeInSection from "../common/FadeInSection";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    success: false,
    title: "",
    message: "",
  });

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modal.show) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modal.show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_BASE_URL =
        import.meta.env.VITE_API_BASE_URL || "https://dashboard.inmarco.id";
      const API_KEY = import.meta.env.VITE_CONTACT_API_KEY;

      // Buat objek headers secara dinamis
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      // Hanya tambahkan header X-API-KEY jika tersimpan di Environment Variables (.env / Vercel)
      if (API_KEY) {
        headers["X-API-KEY"] = API_KEY;
      }

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Tidak Memilih",
          message: formData.message,
          source_website: "INMARCO.ID",
        }),
      });

      const result = await response.json();

      if (
        response.ok &&
        (result.success || response.status === 200 || response.status === 201)
      ) {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
        setModal({
          show: true,
          success: true,
          title: "Pesan Terkirim!",
          message:
            result.message ||
            "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
        });
      } else {
        setModal({
          show: true,
          success: false,
          title: "Gagal Mengirim",
          message:
            result.message ||
            "Gagal mengirim pesan. Silakan periksa kembali data Anda.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setModal({
        show: true,
        success: false,
        title: "Terjadi Kesalahan",
        message:
          "Terjadi masalah koneksi ke server. Silakan periksa jaringan Anda.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-navy-950 text-white pt-20 pb-10 relative overflow-hidden"
    >
      {/* Glow Backdrop */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* FORM & KONTAK CONTAINER */}
        <FadeInSection className="bg-navy-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sisi Kiri: Info Kontak */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20">
                Contact Us
              </span>

              <h2 className="text-3xl mt-2 sm:text-4xl font-black text-white tracking-tight">
                Mari Berdiskusi &{" "}
                <span className="text-sky-400">#TemukanMarket</span> Anda
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Hubungi kami untuk konsultasi strategi pemasaran terpadu,
                komunikasi digital, hingga penyelenggaraan event profesional.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Phone
                    </h4>
                    <a
                      href="tel:081323459296"
                      className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      081323459296
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </h4>
                    <a
                      href="mailto:inmarco.global@gmail.com"
                      className="text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      inmarco.global@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Address
                    </h4>
                    <p className="text-sm font-medium text-slate-200 leading-relaxed">
                      Kantor Operasional: Menara MTH Lantai 15 Suite 1508 -
                      Jalan MT Haryono Tebet Jakarta Selatan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Form Kirim */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      No. HP / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="08123456789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="Digital Communication">
                      Digital Communication
                    </option>
                    <option value="Event Management / MICE">
                      Event Management / MICE
                    </option>
                    <option value="Research & Consulting">
                      Research & Consulting
                    </option>
                    <option value="Jasa Pengamanan Swasta">
                      Jasa Pengamanan Swasta
                    </option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-extrabold text-navy-950 bg-sky-400 hover:bg-sky-300 disabled:bg-slate-600 rounded-xl shadow-lg shadow-sky-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? "Mengirim..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </FadeInSection>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              INMARCO<span className="text-sky-400">.ID</span>
            </span>
            <p className="mt-1 text-slate-400">
              Integrated Marketing Communication & Event Agency
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold">
            <a href="#" className="hover:text-sky-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About Us
            </a>
            <a href="#service" className="hover:text-sky-400 transition-colors">
              Service
            </a>
            <a
              href="#projects"
              className="hover:text-sky-400 transition-colors"
            >
              Project
            </a>
            <a href="#client" className="hover:text-sky-400 transition-colors">
              Our Client
            </a>
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} INMARCO.ID. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* POP-OUT MODAL NOTIFIKASI */}
      {modal.show && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-4 relative"
          >
            <div
              className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${
                modal.success
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
              }`}
            >
              {modal.success ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              {modal.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {modal.message}
            </p>

            <button
              onClick={closeModal}
              className="w-full py-3 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
