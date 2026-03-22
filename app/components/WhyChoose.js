const features = [
  {
    icon: "leaf",
    iconWrap: "bg-emerald-100 text-emerald-600",
    title: "Eco-Friendly",
    text: "Made from 100% recycled materials reducing carbon footprint significantly compared to traditional concrete.",
  },
  {
    icon: "rupee",
    iconWrap: "bg-blue-100 text-blue-600",
    title: "Cost Effective",
    text: "Affordable solutions that save money in the long run through energy efficiency and low maintenance.",
  },
  {
    icon: "shield",
    iconWrap: "bg-amber-100 text-amber-600",
    title: "Durability",
    text: "Engineered for longevity. Our materials are designed to withstand extreme Indian climate conditions.",
  },
];

function FeatureIcon({ icon }) {
  if (icon === "rupee") {
    return <span className="text-lg font-semibold">₹</span>;
  }

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 3c-6 1-10.5 5.5-11.5 11.5" />
      <path d="M7 15c0 3.314 2.686 6 6 6 3.314 0 6-2.686 6-6 0-2.761-2.239-5-5-5H8v5z" />
    </svg>
  );
}

export default function WhyChoose() {
  return (
    <section className="w-full px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">Why Choose Econova?</h2>
          <p className="mt-4 text-2xl leading-8 text-slate-600 lg:w-[62%]">
            We bring you the best in green technology for sustainable living,
            without compromising on quality or durability.
          </p>
        </div>
        <a href="#" className="text-lg font-semibold text-emerald-600 transition hover:text-emerald-500">
          Learn more about our tech ↗
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <span className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full ${feature.iconWrap}`}>
              <FeatureIcon icon={feature.icon} />
            </span>
            <h3 className="text-3xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-xl leading-8 text-slate-600">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
