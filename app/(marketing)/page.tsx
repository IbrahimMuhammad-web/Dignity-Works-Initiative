import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { TrustRow } from "@/components/patterns/TrustRow";
import { HeroArt } from "@/components/illustrations/HeroArt";
import { StoryArt } from "@/components/illustrations/StoryArt";
import { Mark } from "@/components/illustrations/Mark";
import { strings } from "@/lib/i18n";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Trust />
      <Stories />
      <Endorsement />
      <Footer />
    </>
  );
}

function Hero() {
  const [line1, line2] = strings.landing.heroHeadline.split("\n");
  return (
    <section className="relative overflow-hidden pattern-stars">
      <Container className="relative pt-12 pb-section md:pt-20 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 text-caption text-ink-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
              {strings.landing.heroEyebrow}
            </p>
            <h1 className="font-serif text-display text-ink-900">
              <span className="block">{line1}</span>
              <span className="block text-forest-600">{line2}</span>
            </h1>
            <p className="mt-5 max-w-md text-body text-ink-700">
              {strings.landing.heroSubhead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/request" variant="primary" size="lg">
                {strings.landing.ctaPrimary}
                <ArrowRight size={18} aria-hidden />
              </LinkButton>
              <LinkButton href="/onboarding/worker" variant="outline" size="lg">
                {strings.landing.ctaSecondary}
              </LinkButton>
            </div>
          </div>

          <div className="hidden md:block text-forest-600/60" aria-hidden>
            <HeroArt className="h-[260px] w-[260px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-sand-200 bg-sand-100/60">
      <Container className="py-6">
        <TrustRow />
      </Container>
    </section>
  );
}

function Stories() {
  return (
    <section className="py-section md:py-24">
      <Container>
        <div className="mb-10 max-w-xl">
          <h2 className="font-serif text-h1 text-ink-900">{strings.landing.storiesTitle}</h2>
          <p className="mt-3 text-body text-ink-700">{strings.landing.storiesSubtitle}</p>
        </div>

        {/* Mobile: horizontal snap carousel. Desktop: 3-column grid. */}
        <ul
          className="
            -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2
            md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0
          "
          style={{ scrollbarWidth: "none" }}
        >
          {strings.stories.map((s) => (
            <li
              key={s.id}
              className="
                snap-start shrink-0 basis-[82%] sm:basis-[60%]
                md:basis-auto md:shrink
              "
            >
              <Link
                href={`/stories/${s.id}`}
                className="
                  group block h-full overflow-hidden rounded-card bg-sand-100
                  shadow-soft transition duration-[240ms] ease-dwi
                  hover:-translate-y-0.5 hover:shadow-lift
                "
              >
                <StoryArt
                  variant={s.id as "halima" | "musa" | "fatima"}
                  className="h-44 w-full"
                />
                <div className="p-5">
                  <p className="text-caption text-forest-600">{s.role}</p>
                  <h3 className="mt-2 font-serif text-[22px] leading-tight text-ink-900">
                    {s.headline}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                    {s.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-caption font-medium text-forest-600 transition group-hover:gap-2">
                    Read {s.name}&apos;s story
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Endorsement() {
  return (
    <section className="bg-sand-100/70 py-section">
      <Container>
        <figure className="mx-auto max-w-xl text-center">
          <Mark size={32} className="mx-auto text-forest-600/70" />
          <blockquote className="mt-5 font-serif text-[22px] italic leading-relaxed text-ink-900 md:text-[26px]">
            {strings.landing.imamQuote}
          </blockquote>
          <figcaption className="mt-4 text-caption text-ink-500">
            {strings.landing.imamAttribution}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-900 text-sand-100 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-gold-400">
            <Mark size={26} />
            <span className="font-serif text-[20px] text-sand-50">
              {strings.brand.name}
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-sand-200/90">
            {strings.landing.footer.mission}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-caption text-sand-200/90 sm:gap-x-16">
            <li><Link href="/how-it-works" className="hover:text-gold-400">{strings.landing.footer.links.how}</Link></li>
            <li><Link href="/stories" className="hover:text-gold-400">{strings.landing.footer.links.stories}</Link></li>
            <li><Link href="/onboarding/worker" className="hover:text-gold-400">{strings.landing.footer.links.worker}</Link></li>
            <li><Link href="/help" className="hover:text-gold-400">{strings.landing.footer.links.help}</Link></li>
          </ul>
        </nav>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 text-caption text-sand-200/70 md:flex-row md:items-center md:justify-between">
        <span>{strings.landing.footer.rights}</span>
        <span>Built with care in Northern Nigeria.</span>
      </Container>
    </footer>
  );
}
