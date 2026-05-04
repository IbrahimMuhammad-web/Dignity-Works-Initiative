import Link from "next/link";
import {
  Sparkles,
  Shirt,
  ChefHat,
  ShoppingBag,
  Home as HomeIcon,
  Trees,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { id: "cleaning", label: "Home cleaning", desc: "Homes and offices, weekly or one-off.", Icon: Sparkles },
  { id: "laundry", label: "Laundry", desc: "Washed, folded, and quietly delivered.", Icon: Shirt },
  { id: "cooking", label: "Cooking", desc: "Local and continental, made with care.", Icon: ChefHat },
  { id: "errands", label: "Errands", desc: "Markets, deliveries, small runs.", Icon: ShoppingBag },
  { id: "homecare", label: "Home assistance", desc: "Light tasks, elder care, daily help.", Icon: HomeIcon },
  { id: "yardwork", label: "Yard & garden", desc: "Sweeping, planting, tidy outdoors.", Icon: Trees },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
              Services
            </p>
            <h2 className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-ink-900 md:text-[34px]">
              Calm, simple help — close to home.
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-[13px] font-medium text-forest-600 hover:text-forest-700 md:inline-flex md:items-center md:gap-1"
          >
            See all <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {services.map(({ id, label, desc, Icon }) => (
            <li key={id}>
              <Link
                href="/request"
                className="group flex h-full items-start gap-4 rounded-card border border-sand-200/70 bg-white p-5 shadow-soft transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-forest-600/30 hover:shadow-lift"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-sand-100 text-forest-600 transition group-hover:bg-forest-600 group-hover:text-sand-50">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-ink-900">{label}</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-ink-700">{desc}</div>
                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-forest-600 transition group-hover:gap-2">
                    Request <ArrowUpRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
