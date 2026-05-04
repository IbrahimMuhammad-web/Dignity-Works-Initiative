import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { DWI_WHATSAPP } from "@/lib/whatsapp";

export const metadata = { title: "Donate — Dignity Works" };

export default function DonatePage() {
  return (
    <>
      <section className="pattern-stars">
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 md:pt-24 md:pb-14">
          <span className="inline-flex items-center gap-2 rounded-pill border border-sand-200 bg-white/70 px-3 py-1 text-[12px] text-ink-700 backdrop-blur">
            <Heart size={12} className="text-gold-500" aria-hidden /> Support the work
          </span>
          <h1 className="mt-5 text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
            Help bring more workers <br className="hidden md:block" />
            into <span className="text-forest-600">honest work</span>.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-700">
            Your contribution funds verification, training, and safety for new
            workers in our network. Every naira goes to people, not overhead.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-card bg-white p-6 shadow-soft md:p-8">
              <h2 className="text-[18px] font-semibold tracking-tight text-ink-900">
                Bank transfer
              </h2>
              <dl className="mt-4 space-y-2 text-[14px] text-ink-700">
                <div className="flex justify-between">
                  <dt className="text-ink-500">Bank</dt>
                  <dd>Example Bank PLC</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-500">Account</dt>
                  <dd>Dignity Works Initiative</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-500">Number</dt>
                  <dd className="font-mono">0000000000</dd>
                </div>
              </dl>
            </article>

            <article className="rounded-card bg-forest-900 p-6 text-sand-50 shadow-soft md:p-8">
              <h2 className="text-[18px] font-semibold tracking-tight">
                Talk to us
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-sand-200/85">
                Larger gift, partnership, or zakat enquiry? Reach out on WhatsApp
                and we will share details quietly.
              </p>
              <Link
                href={`https://wa.me/${DWI_WHATSAPP}?text=${encodeURIComponent(
                  "Salam — I'd like to support Dignity Works.",
                )}`}
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-btn bg-gold-400 px-5 text-[14px] font-semibold text-forest-900 transition hover:bg-gold-500"
              >
                Donate via WhatsApp <ArrowRight size={16} aria-hidden />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
