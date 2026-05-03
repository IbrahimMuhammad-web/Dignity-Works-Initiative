import Link from "next/link";
import { Container } from "./Container";
import { Mark } from "@/components/illustrations/Mark";
import { strings } from "@/lib/i18n";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-sand-50/85 backdrop-blur-md border-b border-sand-200/60">
      <Container as="div" className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-forest-600">
          <Mark size={26} />
          <span className="font-serif text-[19px] tracking-tight text-ink-900">
            {strings.brand.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-caption text-ink-700">
          <Link href="/how-it-works" className="hover:text-forest-600 transition">
            {strings.landing.footer.links.how}
          </Link>
          <Link href="/stories" className="hover:text-forest-600 transition">
            {strings.landing.footer.links.stories}
          </Link>
          <Link href="/onboarding/worker" className="hover:text-forest-600 transition">
            {strings.landing.footer.links.worker}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
