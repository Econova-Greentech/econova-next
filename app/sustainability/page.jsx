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
  { name: "Dr. Aditi Rao", role: "Chief Executive" },
  { name: "Rajesh Kumar", role: "Head of Operations" },
  { name: "Saanvi Jogi", role: "Sustainability Lead" },
  { name: "Vikram Singh", role: "Technology Lead" },
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
                <a
                  href="#"
                  className="rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
                >
                  Watch Video
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

            <a
              href="/contact"
              className="mt-5 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              Find Out What&apos;s New
            </a>
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

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="rounded-2xl bg-white p-4 text-center shadow-[0_14px_24px_-18px_rgba(15,23,42,0.45)]"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{leader.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                  {leader.role}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
