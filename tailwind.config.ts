import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        btn: "0.875rem",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(28, 28, 28, 0.08)",
        lift: "0 10px 30px -12px rgba(28, 28, 28, 0.14)",
        inset: "inset 0 0 0 1px rgba(35, 68, 48, 0.08)",
      },
      transitionTimingFunction: {
        dwi: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
