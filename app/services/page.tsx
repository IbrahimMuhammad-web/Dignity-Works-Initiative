import ServicesPreview from "@/components/sections/ServicesPreview";

export const metadata = { title: "Services — Dignity Works" };

export default function ServicesPage() {
  return (
    <>
      <section className="pattern-stars">
        <div className="mx-auto max-w-5xl px-5 pt-16 pb-10 md:pt-20 md:pb-12">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
            Our services
          </p>
          <h1 className="mt-3 max-w-2xl text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
            Quiet, careful help — for the way Nigerian homes really work.
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-700">
            Tap any service to start a request. We will reach out on WhatsApp.
          </p>
        </div>
      </section>
      <ServicesPreview />
    </>
  );
}
