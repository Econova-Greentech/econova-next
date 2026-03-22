import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const advantages = [
  {
    title: "Indian Feedstock",
    text: "Using abundant local resources to cut import dependency and strengthen regional supply chains.",
  },
  {
    title: "Contract Mfg.",
    text: "Scalable production through strategic manufacturing partnerships across India.",
  },
  {
    title: "Dual-SKU Strategy",
    text: "Sustainable and performance options to fit varied industry needs without compromise.",
  },
  {
    title: "Early-Mover",
    text: "Pioneering green material innovation with rapid adoption and proven results.",
  },
];

const metrics = [
  { label: "Carbon Reduction", value: "40%", note: "lower footprint on average" },
  { label: "Product Portfolio", value: "12+", note: "in sustainable SKUs" },
  { label: "Market Growth", value: "25%", note: "year-over-year increase" },
];

function AdvantageCard({ title, text }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_15px_24px_-20px_rgba(15,23,42,0.5)]">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </span>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#eef2f0] text-slate-900">
      <Navbar />

      <main className="w-full px-6 pb-10 pt-6 lg:px-8 lg:pt-8">
        <section
          className="rounded-2xl px-6 py-10 text-center text-white sm:px-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(2, 6, 23, 0.6), rgba(2, 6, 23, 0.8)), url('/HeroBack.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Sustainable Innovation
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Why Econova?</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
            Leading the green revolution in India with sustainable materials,
            advanced technology, and a commitment to a zero-carbon future.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Our Technology
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View Impact Report
            </a>
          </div>
        </section>

        <section className="px-1 py-10">
          <h2 className="text-center text-3xl font-bold text-slate-900">Our Competitive Advantage</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
            We leverage local resources and strategic foresight to deliver
            sustainable solutions efficiently, setting new standards in the
            bio-materials industry.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <AdvantageCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-1 text-4xl font-bold text-slate-900">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold text-emerald-600">{metric.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-2">
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-12 text-center text-white"
            style={{
              backgroundImage: "linear-gradient(115deg, #071433, #091b44 58%, #0d4a45)",
            }}
          >
            <div className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
            <h2 className="relative z-10 text-4xl font-bold">Join the Sustainable Future</h2>
            <p className="relative z-10 mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Partner with Econova to redefine your supply chain with green
              materials and measurable sustainability impact.
            </p>
            <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
