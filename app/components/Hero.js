export default function Hero() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-slate-900 px-10 py-16 text-white sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2, 6, 23, 0.82), rgba(2, 6, 23, 0.24)), url('/HeroBack.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full py-6 sm:py-10 lg:py-12">
        <span className="inline-flex items-center rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-[0.02em] text-slate-100">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Future Construction
        </span>
        <h1 className="mt-5 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
          Sustainable
          <br />
          Materials for a
          <br />
          <span className="text-emerald-400">Greener Bharat</span>
        </h1>
        <p className="mt-5 w-full text-xl leading-8 text-slate-200 sm:text-2xl sm:leading-9 lg:w-[56%] lg:text-[31px] lg:leading-10">
          Innovating construction with eco-friendly solutions designed
          specifically for the future of India&apos;s infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="rounded-xl bg-white/75 px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-white"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
