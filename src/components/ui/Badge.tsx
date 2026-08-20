import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "slate" | "outline" | "cyan" | "dark";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Badge({
  variant = "blue",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-blue-50 text-brand-blue-700 border border-blue-100",
    slate: "bg-brand-slate-100 text-brand-slate-700 border border-brand-slate-200",
    outline: "bg-transparent text-brand-slate-600 border border-brand-slate-200",
    cyan: "bg-cyan-50 text-cyan-800 border border-cyan-100",
    dark: "bg-white/10 text-white/90 border border-white/15 backdrop-blur-sm",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-medium rounded-md tracking-wide",
    md: "text-xs px-2.5 py-1 font-semibold rounded-lg tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase font-mono select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
