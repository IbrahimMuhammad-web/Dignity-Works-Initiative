const stats = [
  { value: "1,200+", label: "Workers in our network" },
  { value: "3,500+", label: "Jobs completed" },
  { value: "12", label: "Cities across Nigeria" },
];

export default function Stats() {
  return (
    <section className="border-y border-sand-200 bg-sand-100/50 py-10">
      <ul className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-sand-200/80 px-5 text-center">
        {stats.map((s) => (
          <li key={s.label} className="px-2">
            <div className="text-[26px] font-semibold tracking-tight text-forest-600 md:text-[32px]">
              {s.value}
            </div>
            <div className="mt-1 text-[12px] uppercase tracking-wider text-ink-500 md:text-[13px]">
              {s.label}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
