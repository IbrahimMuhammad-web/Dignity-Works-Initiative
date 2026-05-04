import Link from "next/link";
import Mark from "@/components/ui/Mark";

export default function Footer() {
  return (
    <footer className="bg-forest-900 pb-24 pt-12 text-sand-100 md:pb-12">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-gold-400">
            <Mark size={26} />
            <span className="text-[18px] font-semibold tracking-tight text-sand-50">
              Dignity Works
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-sand-200/85">
            Honest work, paid honestly. Built with care in Northern Nigeria for
            anyone ready to earn — and anyone ready to hire.
          </p>
        </div>

        <nav aria-label="Footer">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-sand-200/60">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-[14px] text-sand-100/90">
            <li><Link href="/services" className="hover:text-gold-400">Services</Link></li>
            <li><Link href="/stories" className="hover:text-gold-400">Stories</Link></li>
            <li><Link href="/donate" className="hover:text-gold-400">Donate</Link></li>
          </ul>
        </nav>

        <nav aria-label="Get involved">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-sand-200/60">
            Get involved
          </h4>
          <ul className="mt-4 space-y-2 text-[14px] text-sand-100/90">
            <li><Link href="/request" className="hover:text-gold-400">Request a worker</Link></li>
            <li><Link href="/register" className="hover:text-gold-400">Become a worker</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-2 px-5 text-[12px] text-sand-200/55 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Dignity Works Initiative</span>
        <span>Built with care in Northern Nigeria.</span>
      </div>
    </footer>
  );
}
