import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pillars = [
  {
    title: "Sustainable Innovation",
    text: "Developing bio-based alternatives that reduce environmental impact while improving lifecycle compatibility.",
  },
  {
    title: "Waste Reducing",
    text: "Through circular process reuse and by-products, our solutions actively minimize manufacturing waste.",
  },
  {
    title: "Social Focused",
    text: "Localized sourcing and upskilling in the region builds livelihoods and long-term economic resilience.",
  },
];

const leaders = [
  { name: "Bhau", role: "Founder, CEO" },
  { name: "Vaibhav", role: "Co-Founder, CTO" },
];

function FeatureCard({ title, text }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_14px_24px_-18px_rgba(15,23,42,0.45)]">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 8v8" />
        </svg>
      </span>
      <h3 className="mt-3 text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>
      <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">{text}</p>
    </article>
  );
}

function ProgressRow({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-700 sm:text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#eef2f0] text-slate-900">
      <Navbar />

      <main className="w-full px-6 py-6 lg:px-8 lg:py-8">
        <section
          className="relative overflow-hidden rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.12)), url('/Susbatinty.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full p-5 sm:p-8 lg:p-10">
            <div className="w-full rounded-2xl bg-white/22 p-5 text-white backdrop-blur-sm sm:max-w-[56%] sm:p-7 lg:max-w-[54%]">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-200">
                Sustainable Innovation
              </p>
              <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
                Innovating Green
                <br />
                Tech for a Cleaner
                <br />
                India
              </h1>
              <p className="mt-3 text-xs leading-6 text-slate-100 sm:text-sm">
                Econova is pioneering sustainable materials to combat plastic
                waste and building a greener future through advanced innovation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="/contact"
                  className="rounded-lg bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Our Mission
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </section>

        <section className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-500">
              Our Core Purpose
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              We envision a world where
              <br />
              waste is a resource, not a
              <br />
              burden.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We are a team of scientists, engineers, and sustainability leaders
              dedicated to transforming how materials are created and consumed.
              Our mission is to reduce global plastic footprint by 50% by 2030
              through bio-based innovation at scale.
            </p>

            <div className="mt-5 space-y-4">
              <ProgressRow label="Plastic Waste Reduction" value={88} />
              <ProgressRow label="Green Supply Adoption" value={74} />
            </div>
          </article>

          <article className="rounded-2xl bg-white p-4 shadow-[0_14px_24px_-18px_rgba(15,23,42,0.45)]">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/Image.png"
                alt="Green sustainability visual"
                width={900}
                height={560}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-lg bg-black/45 px-3 py-2 text-xs text-white backdrop-blur-sm">
                <p className="font-semibold">Bio Polymers in Use</p>
                <p className="text-[11px] text-slate-200">Certified by ECO standards</p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-10">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Our Leadership</h2>
          <p className="mt-1 text-center text-xs text-slate-500 sm:text-sm">
            The minds helping the green transition
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="group w-full max-w-[280px] rounded-2xl bg-white p-6 text-center shadow-[0_14px_24px_-18px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="relative mx-auto h-20 w-20">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-emerald-50 text-xl font-bold text-emerald-700 ring-4 ring-emerald-50/50 transition-colors group-hover:bg-emerald-100">
                    {leader.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{leader.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  {leader.role}
                </p>
                <div className="mt-4 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-1 w-12 rounded-full bg-emerald-100" />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
