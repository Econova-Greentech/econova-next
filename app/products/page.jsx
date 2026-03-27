import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Badge({ text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-emerald-600">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18" />
        <path d="M4.5 7.5h15" />
      </svg>
      {text}
    </span>
  );
}

function FeaturePill({ title, subtitle, tone = "emerald" }) {
  const toneClass =
    tone === "blue"
      ? "bg-blue-50 text-blue-600"
      : tone === "slate"
        ? "bg-slate-100 text-slate-600"
        : "bg-emerald-50 text-emerald-600";

  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${toneClass}`}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        </svg>
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#f2f4f3] text-slate-900">
      <Navbar />

      <main className="w-full px-6 pb-20 pt-12 lg:px-24">
        <section className="w-full">
          <div className="mt-5 flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="text-5xl font-bold leading-[1.02] text-slate-900 lg:text-7xl">
              Sustainable <span className="text-emerald-500">Solutions</span>
              <br />
              for Tomorrow
            </h1>
            <svg viewBox="0 0 24 24" className="mt-3 h-24 w-24 text-emerald-200" fill="currentColor" aria-hidden="true">
              <path d="M14.5 2.5h6l-2 5.2a7.9 7.9 0 01-4-2.1A8.6 8.6 0 0114.5 2.5zM9.6 3.2A9.1 9.1 0 019 8.5a9.2 9.2 0 01-5.3.6l2.9-4.8 3-1.1zM3 12.8l4.8-2.6a8.4 8.4 0 012.5 4.8 8.5 8.5 0 01-.7 5.2L3 18v-5.2zM12.7 21.4l-1.5-5.6a8.7 8.7 0 015.1-2.4 8.8 8.8 0 015.1 1.8l-1.7 5.1-7 .1zM21.4 13.8L16 12.4a8.4 8.4 0 01-2.1-5 8.6 8.6 0 011.9-5.1h5.3l2.6 6.5-2.3 5z" />
            </svg>
          </div>
          <p className="mt-4 text-lg leading-8 text-slate-600 lg:w-[52%]">
            Innovative biodegradable materials engineering for a cleaner future
            in India. Explore our premium product range.
          </p>
        </section>

        <section className="mt-12 space-y-8">
          <article className="rounded-2xl bg-white p-6 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.35)] lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_1fr]">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Product1.png"
                  alt="PLA granules"
                  width={900}
                  height={620}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute bottom-3 left-3 flex gap-2 text-xs font-medium text-white">
                  <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">Compostable</span>
                  <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">Packaging Grade</span>
                </div>
              </div>

              <div className="rounded-2xl bg-linear-to-br from-emerald-50 to-white p-6">
                <Badge text="Biodegradable Polymer" />
                <h2 className="mt-3 text-4xl font-bold text-slate-900">PLA Granules</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our Polylactic Acid (PLA) granules offer superior clarity and
                  strength while being fully sustainable. Engineered specifically
                  for high-performance packaging and coating applications, these
                  granules provide a perfect eco-friendly alternative to
                  traditional plastics.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <FeaturePill title="High Clarity" subtitle="Perfect for clear packaging" />
                  <FeaturePill title="Durable" subtitle="Excellent tensile strength" tone="blue" />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_18px_-6px_rgba(16,185,129,0.9)] transition hover:bg-emerald-300"
                  >
                    Inquire Now →
                  </Link>
                  <Link
                    href="/spec-sheet/spec-sheet.pdf"
                    download="Econova_Spec_Sheet.pdf"
                    className="text-sm font-semibold text-slate-500 transition hover:text-slate-700"
                  >
                    Download Spec Sheet ↳
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-[0_20px_45px_-28px_rgba(15,23,42,0.35)] lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.02fr]">
              <div>
                <Badge text="Industrial Chemical" />
                <h2 className="mt-3 text-4xl font-bold text-slate-900">Lactic Acid</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Derived from renewable sugarcane molasses, our 88% Concentration
                  Lactic Acid stands for purity and sustainability. It is
                  meticulously processed for versatile use in industrial
                  formulations, food processing, and pharmaceutical applications.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <FeaturePill title="Plant Based" subtitle="100% Molasses origin" />
                  <FeaturePill title="High Purity" subtitle="88% Concentration" tone="slate" />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_18px_-6px_rgba(16,185,129,0.9)] transition hover:bg-emerald-300"
                  >
                    Inquire Now →
                  </Link>
                  <Link
                    href="/spec-sheet/spec-sheet.pdf"
                    download="Econova_Spec_Sheet.pdf"
                    className="text-sm font-semibold text-slate-500 transition hover:text-slate-700"
                  >
                    Download Spec Sheet ↳
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/product2.png"
                  alt="Lactic acid flask"
                  width={900}
                  height={620}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 right-3 flex gap-2 text-xs font-medium text-white">
                  <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">88% Conc.</span>
                  <span className="rounded-full bg-black/50 px-3 py-1 backdrop-blur">Industrial Grade</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
