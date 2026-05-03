import { ShieldCheck, Lock, HandHeart } from "lucide-react";
import { strings } from "@/lib/i18n";

const items = [
  { Icon: ShieldCheck, label: strings.landing.trust.vetted },
  { Icon: Lock, label: strings.landing.trust.escrow },
  { Icon: HandHeart, label: strings.landing.trust.community },
] as const;

export function TrustRow() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-caption text-ink-700">
      {items.map(({ Icon, label }, i) => (
        <li key={label} className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sand-100 text-forest-600">
            <Icon size={14} strokeWidth={2} aria-hidden />
          </span>
          <span>{label}</span>
          {i < items.length - 1 && (
            <span aria-hidden className="hidden md:inline text-sand-300">·</span>
          )}
        </li>
      ))}
    </ul>
  );
}
