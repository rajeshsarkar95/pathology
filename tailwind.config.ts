import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        blue: {
          50: "#EBF3FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#0A5EC0",
          700: "#0952A8",
          800: "#063E80",
          900: "#03357A",
        },
        red: {
          50: "#FFF0F1",
          100: "#FEE2E2",
          500: "#EF4444",
          600: "#C8293A",
          700: "#B91C1C",
        },
        teal: {
          50: "#F0FDFA",
          500: "#14B8A6",
          600: "#0D9488",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 10px 30px rgba(10,94,192,0.12)",
        hero: "0 25px 60px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
