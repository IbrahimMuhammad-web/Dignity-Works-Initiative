import { MessageCircle, Phone, Mail } from "lucide-react";
import { DWI_WHATSAPP } from "@/lib/whatsapp";

export const metadata = { title: "Contact — Dignity Works" };

const channels = [
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    body: "We reply within two hours, in English or Hausa.",
    href: `https://wa.me/${DWI_WHATSAPP}`,
    cta: "Chat on WhatsApp",
    accent: true,
  },
  {
    Icon: Phone,
    title: "Call us",
    body: "If WhatsApp isn't an option, just give us a call.",
    href: `tel:+${DWI_WHATSAPP}`,
    cta: "Place a call",
    accent: false,
  },
  {
    Icon: Mail,
    title: "Email",
    body: "For partnerships and longer questions.",
    href: "mailto:hello@dignityworks.ng",
    cta: "Email hello@dignityworks.ng",
    accent: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pattern-stars">
        <div className="mx-auto max-w-3xl px-5 pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
            Get in touch
          </p>
          <h1 className="mt-3 text-[36px] font-semibold leading-[1.1] tracking-tight text-ink-900 md:text-[48px]">
            We are here, <span className="text-forest-600">on WhatsApp</span>.
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-700">
            Reports are confidential. We respond to most messages within two hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <ul className="mx-auto grid max-w-3xl gap-4 px-5 md:grid-cols-3">
          {channels.map(({ Icon, title, body, href, cta, accent }) => (
            <li key={title}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-full flex-col rounded-card bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-pill",
                    accent
                      ? "bg-gold-400 text-forest-900"
                      : "bg-sand-100 text-forest-600",
                  ].join(" ")}
                >
                  <Icon size={18} aria-hidden />
                </span>
                <h2 className="mt-5 text-[16px] font-semibold tracking-tight text-ink-900">
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-700">
                  {body}
                </p>
                <span className="mt-5 text-[13px] font-medium text-forest-600">
                  {cta} →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
