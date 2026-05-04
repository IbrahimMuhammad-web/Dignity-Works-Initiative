import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Mark from "@/components/ui/Mark";

export default function CTASection() {
  return (
    <section className="bg-forest-900 py-16 text-sand-50 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Mark size={28} className="mx-auto text-gold-400" />
        <h2 className="mt-5 text-[28px] font-semibold leading-tight tracking-tight md:text-[36px]">
          Ready to begin?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-sand-200/85">
          One tap to start. We will reach out on WhatsApp and stay with you all the way.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/request"
            className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-btn bg-gold-400 px-6 text-[15px] font-semibold text-forest-900 shadow-soft transition hover:bg-gold-500 "
          >
            Request a helper
            <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/register"
            className="inline-flex h-[3.25rem] items-center justify-center rounded-btn border border-sand-50/40 px-6 text-[15px] font-medium text-sand-50 transition hover:bg-sand-50/10 "
          >
            Become a worker
          </Link>
        </div>

        <p className="mt-6 text-[12px] text-sand-200/55">
          Free to use. We never take more than 8% as a community support fee.
        </p>
      </div>
    </section>
  );
}
