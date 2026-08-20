import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: "light" | "dark" | "blue";
}

export function Eyebrow({
  children,
  theme = "light",
  className,
  ...props
}: EyebrowProps) {
  const themeClasses = {
    light: "text-brand-blue-600",
    dark: "text-brand-cyan-400",
    blue: "text-blue-100",
  };

  return (
    <div
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-block",
        themeClasses[theme],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
