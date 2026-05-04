import Link from "next/link";
import Mark from "@/components/ui/Mark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/stories", label: "Stories" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand-200/60 bg-sand-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-forest-600 transition hover:text-forest-700"
        >
          <Mark size={24} />
          <span className="text-[17px] font-semibold tracking-tight text-ink-900">
            Dignity Works
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[14px] text-ink-700">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-forest-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/request"
          className="inline-flex h-10 items-center rounded-pill bg-forest-600 px-4 text-[13px] font-medium text-sand-50 shadow-soft transition hover:bg-forest-700"
        >
          Request a helper
        </Link>
      </div>
    </header>
  );
}
