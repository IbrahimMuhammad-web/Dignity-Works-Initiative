import Link from "next/link";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

const trust = [
  { Icon: ShieldCheck, label: "Vetted by community" },
  { Icon: MessageCircle, label: "Coordinated on WhatsApp" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden wash-warm pattern-stars">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pt-16 pb-20 md:grid-cols-[1.1fr_1fr] md:pt-24 md:pb-28">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-pill border border-sand-200 bg-white/70 px-3 py-1 text-[12px] text-ink-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
            A community service marketplace
          </span>

          <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-[56px]">
            Honest work,
            <br />
            <span className="text-forest-600">real opportunity.</span>
          </h1>

          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-700">
            Hire a trusted helper for cleaning, laundry, cooking, errands, and more —
            or earn a steady income through honest work near home.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request"
              className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-btn bg-forest-600 px-6 text-[15px] font-medium text-sand-50 shadow-soft transition hover:bg-forest-700 "
            >
              Request a helper
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/register"
              className="inline-flex h-[3.25rem] items-center justify-center rounded-btn border border-forest-600/70 px-6 text-[15px] font-medium text-forest-600 transition hover:bg-forest-600/5 "
            >
              Become a worker
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-700">
            {trust.map(({ Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sand-100 text-forest-600">
                  <Icon size={14} aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative medallion — geometric, restrained */}
        <div className="relative hidden md:block" aria-hidden>
          <div className="absolute inset-0 rounded-card bg-white/40 shadow-soft backdrop-blur-sm" />
          <svg
            viewBox="0 0 320 320"
            className="relative mx-auto h-[320px] w-[320px] text-forest-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          >
            <circle cx="160" cy="160" r="148" opacity="0.25" />
            <circle cx="160" cy="160" r="110" opacity="0.4" />
            <circle cx="160" cy="160" r="72" opacity="0.5" />
            <path
              d="M160 36 L186 134 L284 160 L186 186 L160 284 L134 186 L36 160 L134 134 Z"
              opacity="0.85"
            />
            <path
              d="M160 78 L176 144 L242 160 L176 176 L160 242 L144 176 L78 160 L144 144 Z"
              opacity="0.55"
            />
            {/* small gold accent dot, the only place it lives in the hero */}
            <circle cx="160" cy="160" r="3.5" fill="#D4A858" stroke="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
