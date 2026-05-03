import { cn } from "@/lib/cn";

// Custom hand-drawn star — slightly irregular so it does not feel like a
// stock icon. Renders 5, fills proportionally to `value`.
type RatingStarsProps = {
  value: number; // 0..5
  size?: number;
  className?: string;
  ariaLabel?: string;
};

const STAR_PATH =
  "M12 2.6 L14.6 9.1 L21.4 9.6 L16.2 14 L17.9 20.6 L12 17.1 L6.1 20.6 L7.8 14 L2.6 9.6 L9.4 9.1 Z";

export function RatingStars({ value, size = 18, className, ariaLabel }: RatingStarsProps) {
  const clamped = Math.max(0, Math.min(5, value));
  const fillPct = (clamped / 5) * 100;
  const label = ariaLabel ?? `${clamped.toFixed(1)} out of 5`;

  return (
    <span
      role="img"
      aria-label={label}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      <span className="relative inline-flex">
        {/* Empty layer */}
        <span className="inline-flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={size} className="text-sand-300" />
          ))}
        </span>
        {/* Filled layer, masked by width */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 inline-flex overflow-hidden"
          style={{ width: `${fillPct}%` }}
          aria-hidden
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={size} className="text-gold-400" />
          ))}
        </span>
      </span>
    </span>
  );
}

function Star({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path d={STAR_PATH} />
    </svg>
  );
}
