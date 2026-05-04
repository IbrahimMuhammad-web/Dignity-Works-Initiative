import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Aisha M.",
    role: "Family in Kano",
    quote:
      "I had a worker at my house within an hour. Polite, careful, and I paid him directly. I will use DWI again.",
  },
  {
    name: "Musa Y.",
    role: "Worker, Kaduna",
    quote:
      "Before DWI I was on the road every morning hoping for work. Now I get jobs through WhatsApp.",
  },
  {
    name: "Hauwa T.",
    role: "Family in Zaria",
    quote:
      "Honest pricing, no hidden fees. The worker did exactly what we agreed.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-xl font-bold">What people say</h2>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <p className="text-sm text-gray-800">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-3 text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
