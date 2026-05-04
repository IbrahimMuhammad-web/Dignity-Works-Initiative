import Mark from "@/components/ui/Mark";

const testimonials = [
  {
    name: "Aisha M.",
    role: "Family in Kano",
    quote:
      "I had a worker at my home within an hour. Polite, careful, and I paid him directly. The whole thing felt human.",
  },
  {
    name: "Musa Y.",
    role: "Worker in Kaduna",
    quote:
      "Before Dignity Works I was on the road every morning hoping for work. Now jobs come to my WhatsApp.",
  },
  {
    name: "Hauwa T.",
    role: "Family in Zaria",
    quote:
      "Honest pricing, no hidden fees. The worker did exactly what we agreed, and we have booked her again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-100/60 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="max-w-xl">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
            Voices from the network
          </p>
          <h2 className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-ink-900 md:text-[34px]">
            Trust, in their own words.
          </h2>
        </div>

        {/* Mobile: snap rail. Desktop: 3-up grid. */}
        <ul
          className="
            no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2
            md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0
          "
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="
                snap-start shrink-0 basis-[86%] sm:basis-[60%]
                md:basis-auto md:shrink
              "
            >
              <figure className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft">
                <Mark size={22} className="text-gold-400" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-900">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <div className="text-[14px] font-semibold text-ink-900">{t.name}</div>
                  <div className="text-[12px] text-ink-500">{t.role}</div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
