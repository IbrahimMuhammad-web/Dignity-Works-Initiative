// Eight-point star — soft Islamic geometry as a quiet brand mark.
// Used in the navbar, footer, and section accents.
export default function Mark({
  size = 26,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M20 2 L24 14 L36 18 L24 22 L20 38 L16 22 L4 18 L16 14 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M20 8 L22 16 L30 18 L22 20 L20 30 L18 20 L10 18 L18 16 Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
