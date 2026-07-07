import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C1618", // deep teal-black, primary dark bg
          800: "#142226",     // card surface on dark
          700: "#1B2C30",     // elevated surface / borders
        },
        paper: {
          DEFAULT: "#EDEFEA", // soft sage-white, light mode bg
          dim: "#E2E5DD",
        },
        gold: {
          DEFAULT: "#D8A93E", // primary accent — "rank #1" gold
          light: "#F1CE82",
          dark: "#B4841F",
        },
        teal: {
          DEFAULT: "#4FD1C5", // secondary accent — "growth / verified"
          dark: "#2FA79B",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
