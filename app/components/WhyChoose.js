const features = [
  {
    id: "eco",
    accent: "#16a34a",         // green-600
    bgAccent: "#f0fdf4",       // green-50
    title: "Eco-Friendly",
    text: "Made from 100% recycled materials reducing carbon footprint significantly compared to traditional concrete.",
    Icon: () => (
      <svg
        width="32" height="32" viewBox="0 0 32 32"
        fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Stem */}
        <line x1="16" y1="28" x2="16" y2="14" />
        {/* Left curl */}
        <path d="M16 20 C10 20 6 15 8 9 C10 9 14 12 16 16" />
        {/* Right leaf */}
        <path d="M16 14 C22 10 27 13 25 20 C22 20 18 18 16 14" />
        {/* Ground line */}
        <line x1="11" y1="28" x2="21" y2="28" />
      </svg>
    ),
  },
  {
    id: "cost",
    accent: "#2563eb",         // blue-600
    bgAccent: "#eff6ff",       // blue-50
    title: "Cost Effective",
    text: "Affordable solutions that save money in the long run through energy efficiency and low maintenance.",
    Icon: () => (
      <svg
        width="32" height="32" viewBox="0 0 32 32"
        fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Coin outline */}
        <circle cx="16" cy="16" r="11" />
        {/* Rupee top bar + legs */}
        <line x1="11" y1="11" x2="21" y2="11" />
        <line x1="11" y1="15" x2="21" y2="15" />
        {/* Diagonal to bottom-right */}
        <line x1="12" y1="15" x2="21" y2="23" />
        {/* Short shelf under top bar */}
        <path d="M12 11 Q18 11 18 15" />
      </svg>
    ),
  },
  {
    id: "shield",
    accent: "#d97706",         // amber-600
    bgAccent: "#fffbeb",       // amber-50
    title: "Durability",
    text: "Engineered for longevity. Our materials are designed to withstand extreme Indian climate conditions.",
    Icon: () => (
      <svg
        width="32" height="32" viewBox="0 0 32 32"
        fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Shield body — slightly asymmetric for character */}
        <path d="M16 4 L27 8 L27 17 C27 23 22 27.5 16 30 C10 27.5 5 23 5 17 L5 8 Z" />
        {/* Checkmark inside */}
        <polyline points="11,16 14.5,20 21,12" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Why Choose Econova?
          </h2>
          <p className="mt-4 text-2xl leading-8 text-slate-600 lg:w-[62%]">
            We bring you the best in green technology for sustainable living,
            without compromising on quality or durability.
          </p>
        </div>
        <a
          href="/products"
          className="group inline-flex items-center gap-1.5 text-base font-semibold text-emerald-600 transition-colors hover:text-emerald-500"
        >
          Learn more about our tech
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ id, accent, bgAccent, title, text, Icon }) => (
          <article
            key={id}
            style={{ borderLeftColor: accent }}
            className="relative overflow-hidden rounded-xl border border-slate-200 border-l-4 bg-white p-7 transition-shadow hover:shadow-md"
          >
            {/* Subtle tinted top-right corner blob */}
            <span
              aria-hidden="true"
              style={{ background: bgAccent }}
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-60"
            />

            <div className="mb-5 flex items-center gap-3">
              <span style={{ color: accent }} className="shrink-0">
                <Icon />
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
