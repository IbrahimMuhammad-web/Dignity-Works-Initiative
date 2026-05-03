import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    // Reset the default palette so accidental `bg-blue-500` etc. fail loud.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      sand: {
        50: "#FBF8F3",
        100: "#F5EFE5",
        200: "#E9DFCC",
        300: "#D4C5A8",
      },
      forest: {
        600: "#2F5A3F",
        700: "#234430",
        900: "#122418",
      },
      gold: {
        400: "#D4A858",
        500: "#B88A3D",
      },
      ink: {
        900: "#1C1C1C",
        700: "#3D3D3D",
        500: "#6B6B6B",
      },
      clay: {
        500: "#B5654A",
      },
    },
    fontFamily: {
      sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      serif: ["var(--font-dm-serif)", "Georgia", "serif"],
    },
    extend: {
      fontSize: {
        display: ["clamp(2.5rem, 6vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["2rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h2: ["1.5rem", { lineHeight: "1.25" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
      },
      borderRadius: {
        card: "1rem",
        btn: "0.75rem",
        sheet: "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(28, 28, 28, 0.08)",
        lift: "0 8px 28px -10px rgba(28, 28, 28, 0.12)",
      },
      spacing: {
        section: "4.5rem",
      },
      transitionTimingFunction: {
        dwi: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        DEFAULT: "240ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 240ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
