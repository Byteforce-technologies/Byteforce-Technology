import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#0066ff", // Primary Brand Blue
            700: "#0052d4", // Deep Electric Blue
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554",
          },
          cyan: {
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#00d2ff", // Gradient Cyan Accent
          },
          navy: {
            800: "#0e1738",
            900: "#0a1026",
            950: "#060a17", // Dark Section & Footer Navy
          },
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        "glow-blue": "0 0 35px -5px rgba(0, 102, 255, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(0, 210, 255, 0.35)",
        "card-subtle": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -2px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 20px 35px -5px rgba(0, 102, 255, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)",
        "cta-glow": "0 20px 40px -15px rgba(0, 102, 255, 0.4)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
