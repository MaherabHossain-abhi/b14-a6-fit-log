import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        <div className="relative">
          <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-cyan-500 to-purple-600 -z-10" />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Page Not Found
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Sorry, the page you are looking for does not exist or may have
            been moved to another location.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
        <p className="mt-12 text-xs text-slate-600">
          Error Code: 404
        </p>
      </div>
    </main>
  );
}