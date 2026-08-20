import React from "react";
import { cn } from "@/lib/utils";

interface AfricaWatermarkProps {
  className?: string;
  opacity?: number;
}

export function AfricaWatermark({
  className,
  opacity = 0.25,
}: AfricaWatermarkProps) {
  return (
    <div
      className={cn(
        "absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden h-full flex items-center justify-end",
        className
      )}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 400 400"
        className="h-[140%] w-auto max-w-none translate-x-12 translate-y-6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Large stylized 'b' lettermark curve */}
        <path
          d="M180 50 C 180 50, 180 320, 180 330 C 180 360, 210 380, 250 380 C 310 380, 360 330, 360 250 C 360 170, 300 130, 240 130 C 200 130, 180 160, 180 190"
          stroke="url(#wmGrad)"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />
        {/* Outer echo curve */}
        <path
          d="M340 190 C 370 230, 375 290, 345 340"
          stroke="url(#wmGrad)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.6"
        />
        {/* Africa contour accent lines */}
        <circle cx="280" cy="180" r="160" stroke="#00D2FF" strokeWidth="2" strokeDasharray="6 8" strokeOpacity="0.3" />
        <circle cx="280" cy="180" r="210" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.2" />
      </svg>
    </div>
  );
}
