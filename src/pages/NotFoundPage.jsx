import { Link } from "react-router-dom";
import FadeInSection from "../components/common/FadeInSection";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-navy-950 mt-5 sm:mt-10 text-slate-100 flex items-center justify-center relative overflow-hidden px-5 sm:px-6 lg:px-8 py-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        <FadeInSection>
          <div className="space-y-6">
            {/* Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              Error 404 • Page Not Found
            </div>

            {/* Typography 404 */}
            <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 select-none">
              404
            </h1>

            {/* Subtitle & Description */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Halaman Tidak Ditemukan
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
                Tautan yang Anda tuju mungkin telah dipindahkan, dihapus, atau
                tidak pernah ada. Mari kembali ke halaman utama untuk menemukan
                informasi yang Anda butuhkan.
              </p>
            </div>

            {/* Tombol Navigasi */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-extrabold text-navy-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Kembali ke Beranda
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-bold text-slate-300 hover:text-white bg-navy-900/80 hover:bg-navy-900 border border-slate-800 rounded-xl transition-all"
              >
                Kembali ke Halaman Sebelumnya
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
}
