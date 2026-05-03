"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/cn";
import { strings } from "@/lib/i18n";

const items = [
  { href: "/", label: strings.nav.home, Icon: Home },
  { href: "/services", label: strings.nav.services, Icon: Sparkles },
  { href: "/my-requests", label: strings.nav.requests, Icon: ClipboardList },
  { href: "/profile", label: strings.nav.profile, Icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 md:hidden",
        "border-t border-sand-200 bg-sand-50/95 backdrop-blur",
        "pb-[env(safe-area-inset-bottom)]",
      )}
    >
      <ul className="grid grid-cols-4">
        {items.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex h-16 flex-col items-center justify-center gap-1",
                  "text-[11px] font-medium transition duration-[240ms] ease-dwi",
                  active ? "text-forest-600" : "text-ink-500 hover:text-ink-700",
                )}
              >
                <Icon size={22} strokeWidth={active ? 2.2 : 1.6} aria-hidden />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
