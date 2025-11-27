// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        battle: "#000000",   // primary black
        stealth: "#1E1E1E",  // dark gray
        iron: "#717171",     // mid gray
        crimson: "#C1272D",  // brand red (CTA)
      },
      boxShadow: {
        crimson: "0 0 26px rgba(193,39,45,0.70)",
        stealth: "0 0 32px rgba(0,0,0,0.95)",
        iron: "0 0 26px rgba(113,113,113,0.40)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(193,39,45,0.7)" },
          "70%": { boxShadow: "0 0 0 18px rgba(193,39,45,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(193,39,45,0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out forwards",
        "fade-up-slow": "fade-up 900ms ease-out forwards",
        "fade-in": "fade-in 600ms ease-out forwards",
        "scale-in": "scale-in 600ms ease-out forwards",
        "pulse-ring": "pulse-ring 1700ms ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
