import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9EC",
          200: "#FFF3D4",
          300: "#FFE9B3",
          400: "#FFD980",
          DEFAULT: "#FFF9EC",
        },
        gold: {
          50: "#FDF9EC",
          100: "#F9EDCA",
          200: "#F0D58A",
          300: "#E8BC4A",
          400: "#D4A017",
          500: "#B8860B",
          600: "#9A700A",
          700: "#7A5808",
          800: "#5C4206",
          DEFAULT: "#B8860B",
        },
        espresso: {
          DEFAULT: "#2C1A0E",
          light: "#4A2E1A",
        },
        blush: "#F5E6D3",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Garamond", "Georgia", "serif"],
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(184,134,11,0.15)",
        "gold-lg": "0 8px 40px rgba(184,134,11,0.25)",
        soft: "0 2px 20px rgba(44,26,14,0.08)",
        "soft-lg": "0 8px 40px rgba(44,26,14,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
