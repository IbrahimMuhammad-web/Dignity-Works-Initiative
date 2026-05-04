const stats = [
  { value: "1,200+", label: "Workers registered" },
  { value: "3,500+", label: "Jobs completed" },
  { value: "12", label: "Cities covered" },
];

export default function Stats() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold text-green-700">{s.value}</div>
            <div className="text-xs text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
