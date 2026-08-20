import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

export function Logo({
  theme = "light",
  size = "md",
  className,
  asLink = true,
}: LogoProps) {
  const sizeMap = {
    sm: { img: 28, text: "text-lg", subtext: "text-[9px]" },
    md: { img: 36, text: "text-xl", subtext: "text-[10px]" },
    lg: { img: 44, text: "text-2xl", subtext: "text-[11px]" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      <div className="relative flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/brand-logo-mark.png"
          alt="ByteForce Africa Logo"
          width={currentSize.img}
          height={currentSize.img}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-bold tracking-tight transition-colors duration-200",
            currentSize.text,
            theme === "dark" ? "text-white" : "text-brand-slate-900 group-hover:text-brand-blue-600"
          )}
        >
          ByteForce
        </span>
        <span
          className={cn(
            "font-semibold tracking-[0.25em] uppercase transition-colors duration-200",
            currentSize.subtext,
            theme === "dark" ? "text-brand-slate-400" : "text-brand-slate-500"
          )}
        >
          Africa
        </span>
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="ByteForce Africa Home">
        {content}
      </Link>
    );
  }

  return content;
}
