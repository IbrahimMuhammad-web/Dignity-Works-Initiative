// Single source of truth for non-color design constants.
// Color tokens live in tailwind.config.ts so utility classes stay typed.

export const motion = {
  ease: "cubic-bezier(0.22, 1, 0.36, 1)",
  duration: 240,
} as const;

export const radius = {
  card: 16,
  button: 12,
  sheet: 24,
  pill: 999,
} as const;

export const spacing = {
  base: 4,
  containerX: 20,
  cardPadding: 24,
  sectionY: 72,
} as const;

export const breakpoints = {
  sm: 375,
  md: 414,
  lg: 768,
} as const;
