// Hero accent — a quiet eight-point geometric medallion.
// Rendered to the right of the headline on >=md, hidden on mobile.
export function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <circle cx="120" cy="120" r="110" opacity="0.35" />
      <circle cx="120" cy="120" r="80" opacity="0.5" />
      <path
        d="M120 30 L138 96 L204 114 L138 132 L120 210 L102 132 L36 114 L102 96 Z"
        opacity="0.85"
      />
      <path
        d="M120 60 L132 102 L174 114 L132 126 L120 180 L108 126 L66 114 L108 102 Z"
        opacity="0.6"
      />
      <path
        d="M64 64 L176 176 M176 64 L64 176"
        opacity="0.18"
      />
    </svg>
  );
}
