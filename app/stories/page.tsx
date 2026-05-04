import Mark from "@/components/ui/Mark";

const stories = [
  {
    name: "Halima",
    role: "Home cleaning · Kano",
    quote: "Three families now book me every week. My sons are back in school.",
    body: "Before Dignity Works, Halima sold sachet water at a junction in Sabon Gari. A neighbour mentioned the platform; her first client called within a fortnight. Today she cleans for three families on a regular schedule — quiet, careful work, paid honestly.",
  },
  {
    name: "Musa",
    role: "Errands & deliveries · Kaduna",
    quote: "My imam vouched for me. Six months later, I am training two others.",
    body: "Musa knew every shortcut in Tudun Wada market but had no formal references. A single phone call from his imam was enough to start. Today he runs errands for nine regular families and mentors two younger workers.",
  },
  {
    name: "Fatima",
    role: "Cooking · Zaria",
    quote:
      "I cook the way my grandmother taught me. Patience, then more patience.",
    body: "Tuwo, miyan kuka, jollof for parties — Fatima refuses to cut corners. She delivers in covered baskets, keeps her kitchen spotless, and her best moment is hearing that a family ate quietly together.",
  },
];

export const metadata = { title: "Stories — Dignity Works" };

export default function StoriesPage() {
  return (
    <>
      <section className="pattern-stars">
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 md:pt-24 md:pb-14">
          <Mark size={28} className="text-gold-400" />
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-wider text-forest-600">
            Community stories
          </p>
          <h1 className="mt-2 text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
            Real people, <span className="text-forest-600">real work</span>.
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-700">
            A few of the families and helpers who have built trust together. Every
            story below was shared with permission.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <ul className="mx-auto flex max-w-3xl flex-col gap-6 px-5">
          {stories.map((s) => (
            <li
              key={s.name}
              className="rounded-card bg-white p-6 shadow-soft md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-[20px] font-semibold tracking-tight text-ink-900">
                    {s.name}
                  </h2>
                  <p className="text-[12px] text-ink-500">{s.role}</p>
                </div>
                <Mark size={18} className="text-gold-400" />
              </div>
              <blockquote className="mt-5 text-[18px] font-semibold leading-snug text-ink-900 md:text-[20px]">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
