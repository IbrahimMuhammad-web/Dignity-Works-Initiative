import { strings } from "@/lib/i18n";

// Floating WhatsApp action — bottom-right, subtle gold.
// Sits above the bottom nav on mobile.
export function WhatsAppFab({ phone = "2348000000000" }: { phone?: string }) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Salam — I'd like to learn more about Dignity Works.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={strings.landing.whatsapp}
      className="fixed bottom-20 right-4 z-40 md:bottom-6 md:right-6
                 inline-flex h-12 items-center gap-2 rounded-full
                 bg-gold-400 pl-4 pr-5 text-forest-900 shadow-lift
                 transition duration-[240ms] ease-dwi hover:bg-gold-500"
    >
      <WhatsAppGlyph />
      <span className="text-caption font-semibold">{strings.landing.whatsapp}</span>
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.05 18.4L2 22l3.7-1.96A10 10 0 1 0 19.05 4.91Zm-7.04 15.2a8.34 8.34 0 0 1-4.25-1.16l-.3-.18-2.2 1.16.59-2.13-.2-.32a8.35 8.35 0 1 1 6.36 2.63Zm4.59-6.24c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.56.13-.17.25-.65.82-.79.99-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.39-1.72c-.15-.25 0-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.39 1 2.55.13.17 1.74 2.65 4.21 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}
