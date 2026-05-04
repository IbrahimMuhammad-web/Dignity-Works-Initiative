"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, BookOpen, MessageCircle } from "lucide-react";
import { DWI_WHATSAPP } from "@/lib/whatsapp";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/services", label: "Services", Icon: Sparkles },
  { href: "/stories", label: "Stories", Icon: BookOpen },
] as const;

// Thumb-friendly bottom nav with a floating WhatsApp action.
export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Floating WhatsApp pill — gold, sits above the tab bar. */}
      <a
        href={`https://wa.me/${DWI_WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-40 inline-flex h-12 items-center gap-2 rounded-pill bg-gold-400 px-4 text-forest-900 shadow-lift transition hover:bg-gold-500 md:hidden"
      >
        <MessageCircle size={18} aria-hidden />
        <span className="text-[13px] font-semibold">WhatsApp</span>
      </a>

      <nav
        aria-label="Mobile primary"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-200 bg-sand-50/95 backdrop-blur md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-3">
          {items.map(({ href, label, Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "flex h-16 flex-col items-center justify-center gap-1 transition",
                    active ? "text-forest-600" : "text-ink-500 hover:text-ink-700",
                  ].join(" ")}
                >
                  <Icon size={22} strokeWidth={active ? 2.2 : 1.6} aria-hidden />
                  <span className="text-[11px] font-medium">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
