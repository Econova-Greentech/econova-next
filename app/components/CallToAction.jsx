import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#e5efe7] px-6 py-14 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-10"
        style={{
          backgroundImage: "linear-gradient(115deg, #081738, #071434 55%, #0a1a40)",
        }}
      >
        <span className="relative z-10 mx-auto mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3l2 4 4 .5-3 3 .8 4.2L12 13l-3.8 1.7L9 10.5l-3-3L10 7l2-4z" />
          </svg>
        </span>

        <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 -top-14 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />

        <h2 className="relative z-10 text-6xl font-bold leading-tight">
          Ready to build a greener future?
        </h2>
        <p className="relative z-10 mx-auto mt-4 text-xl leading-8 text-slate-200 lg:px-24">
          Join India&apos;s next wave of sustainable construction with solutions that
          are affordable, durable, and climate-conscious.
        </p>
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/products"
            className="rounded-xl bg-emerald-400 px-7 py-3 text-lg font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Explore Our Products
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/35 bg-white/5 px-7 py-3 text-lg font-semibold text-white transition hover:bg-white/15"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
