import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        battle: "#000000",   // primary black
        stealth: "#2B2B2B",  // dark gray
        iron: "#717171",     // mid gray
        crimson: "#C1272D",  // brand red (for CTAs)
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
