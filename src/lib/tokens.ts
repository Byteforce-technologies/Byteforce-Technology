/**
 * ByteForce Africa Design System Tokens
 * Source of truth for Colors, Typography, Gradients, and Elevation
 */

export const colors = {
  primary: {
    DEFAULT: "#0066FF",
    dark: "#0052D4",
    light: "#3B82F6",
    gradient: "linear-gradient(135deg, #00D2FF 0%, #0066FF 50%, #0052D4 100%)",
    gradientSoft: "linear-gradient(135deg, rgba(0,210,255,0.15) 0%, rgba(0,102,255,0.1) 100%)",
  },
  accent: {
    cyan: "#00D2FF",
    glow: "rgba(0, 210, 255, 0.4)",
  },
  navy: {
    hero: "#0A1026",
    section: "#0E1738",
    dark: "#060A17",
    card: "#121C3D",
    cardBorder: "#1E2C5A",
  },
  neutrals: {
    bg: "#FFFFFF",
    bgMuted: "#F8FAFC",
    bgSubtle: "#F1F5F9",
    border: "#E2E8F0",
    borderDark: "#334155",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#64748B",
    textInverse: "#FFFFFF",
  },
} as const;

export const typography = {
  eyebrow: "text-xs font-semibold uppercase tracking-widest text-brand-blue-600",
  heroH1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-slate-900 leading-[1.1]",
  sectionH2: "text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate-900 leading-[1.2]",
  cardH3: "text-xl font-bold text-brand-slate-900 tracking-tight",
  bodyLarge: "text-lg text-brand-slate-600 leading-relaxed",
  bodyBase: "text-base text-brand-slate-600 leading-relaxed",
  bodySmall: "text-sm text-brand-slate-500 leading-normal",
} as const;

export const containers = {
  standard: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
  wide: "max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8",
} as const;

export const transitions = {
  default: "transition-all duration-300 ease-in-out",
  fast: "transition-all duration-150 ease-in-out",
  bounce: "transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
