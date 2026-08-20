import React from "react";
import { cn } from "@/lib/utils";

interface TwoToneHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  text: string;
  highlightText: string;
  className?: string;
  highlightClassName?: string;
  theme?: "light" | "dark";
  align?: "left" | "center" | "right";
}

export function TwoToneHeading({
  as: Component = "h2",
  text,
  highlightText,
  className,
  highlightClassName,
  theme = "light",
  align = "left",
}: TwoToneHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const defaultStyles = {
    h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]",
    h2: "text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2]",
    h3: "text-2xl sm:text-3xl font-bold tracking-tight leading-snug",
    h4: "text-xl font-bold tracking-tight",
  };

  const baseTextColor = theme === "dark" ? "text-white" : "text-brand-slate-900";
  const defaultHighlightColor =
    theme === "dark" ? "text-brand-cyan-400" : "text-brand-blue-600";

  return (
    <Component
      className={cn(
        defaultStyles[Component],
        baseTextColor,
        alignClasses[align],
        className
      )}
    >
      {text}{" "}
      <span className={cn(defaultHighlightColor, highlightClassName)}>
        {highlightText}
      </span>
    </Component>
  );
}
