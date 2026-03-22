const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "1200 Tons", label: "Carbon Reduced" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="grid w-full px-6 py-8 text-center md:grid-cols-3 lg:px-8">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="px-5 py-4 md:border-r md:border-slate-200 last:md:border-r-0"
          >
            <h3 className="text-6xl font-bold text-slate-900">{stat.value}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
