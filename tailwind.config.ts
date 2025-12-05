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
        battle: "#000000", // primary black
        stealth: "#2B2B2B", // dark gray
        iron: "#717171", // mid gray
        crimson: "#C1272D", // brand red
      },
    },
  },
  plugins: [
    // Custom shadows for the "elite" look
    function ({ addUtilities }: any) {
      addUtilities({
        ".shadow-crimson": {
          boxShadow: "0 0 20px rgba(193,39,45,0.55)",
        },
        ".shadow-stealth": {
          boxShadow: "0 0 14px rgba(43,43,43,0.7)",
        },
        ".shadow-iron": {
          boxShadow: "0 0 12px rgba(113,113,113,0.45)",
        },
      });
    },
  ],
};

export default config;
