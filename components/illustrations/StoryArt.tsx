// Three illustrated story motifs — abstract, hand-feel, no faces.
// Each variant returns a 16:10 SVG sized to fill its container.

type Variant = "halima" | "musa" | "fatima";

export function StoryArt({ variant, className }: { variant: Variant; className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id={`stars-${variant}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z"
            fill="#2F5A3F"
            opacity="0.06"
          />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="#F5EFE5" />
      <rect width="320" height="200" fill={`url(#stars-${variant})`} />

      {variant === "halima" && (
        <g>
          {/* Soft horizon */}
          <path d="M0 140 Q160 110 320 140 L320 200 L0 200 Z" fill="#E9DFCC" />
          {/* Broom + bucket suggestion */}
          <rect x="92" y="60" width="6" height="100" rx="3" fill="#2F5A3F" />
          <path d="M70 158 Q95 148 120 158 L116 172 Q95 178 74 172 Z" fill="#234430" />
          <ellipse cx="210" cy="150" rx="42" ry="14" fill="#D4A858" opacity="0.85" />
          <path d="M170 150 L172 110 L248 110 L250 150 Z" fill="#B88A3D" />
          <rect x="184" y="98" width="52" height="12" rx="6" fill="#234430" />
        </g>
      )}

      {variant === "musa" && (
        <g>
          {/* Path + parcel */}
          <path d="M0 170 Q160 140 320 170" stroke="#D4C5A8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="120" y="70" width="80" height="64" rx="6" fill="#B88A3D" />
          <rect x="120" y="98" width="80" height="6" fill="#234430" />
          <rect x="156" y="70" width="8" height="64" fill="#234430" />
          <circle cx="160" cy="62" r="14" fill="none" stroke="#2F5A3F" strokeWidth="3" />
        </g>
      )}

      {variant === "fatima" && (
        <g>
          {/* Pot + steam */}
          <path d="M88 150 Q160 200 232 150 L222 100 L98 100 Z" fill="#2F5A3F" />
          <ellipse cx="160" cy="100" rx="64" ry="10" fill="#234430" />
          <path d="M130 80 Q140 60 134 44 Q128 30 140 18" stroke="#D4A858" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M160 78 Q170 58 164 42 Q158 28 170 16" stroke="#D4A858" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M190 80 Q200 60 194 44 Q188 30 200 18" stroke="#D4A858" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
