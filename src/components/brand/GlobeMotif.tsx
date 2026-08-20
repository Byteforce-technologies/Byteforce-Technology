"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlobeMotifProps {
  variant?: "hero" | "africa-focus" | "watermark" | "subtle";
  animated?: boolean;
  opacity?: number;
  className?: string;
  size?: number;
}

export function GlobeMotif({
  variant = "hero",
  animated = true,
  opacity = 1,
  className,
  size = 500,
}: GlobeMotifProps) {
  // Dot coordinates for Africa continent and surrounding globe nodes
  const dots = [
    // North Africa
    { cx: 240, cy: 150, r: 2.5, pulse: true },
    { cx: 260, cy: 145, r: 3 },
    { cx: 280, cy: 140, r: 2 },
    { cx: 300, cy: 145, r: 3.5, pulse: true }, // Cairo
    { cx: 220, cy: 160, r: 2.5 },
    { cx: 250, cy: 165, r: 2 },
    { cx: 275, cy: 160, r: 3 },
    { cx: 310, cy: 160, r: 2.5 },
    
    // West Africa (Accra, Lagos, Dakar)
    { cx: 180, cy: 200, r: 3 }, // Dakar
    { cx: 200, cy: 210, r: 2.5 },
    { cx: 220, cy: 225, r: 4, pulse: true, highlight: true }, // Accra HQ
    { cx: 240, cy: 230, r: 3.5, pulse: true }, // Lagos
    { cx: 210, cy: 190, r: 2 },
    { cx: 230, cy: 205, r: 2.5 },
    { cx: 250, cy: 215, r: 3 },
    
    // Central Africa
    { cx: 260, cy: 240, r: 2.5 },
    { cx: 280, cy: 250, r: 3 },
    { cx: 270, cy: 225, r: 2 },
    { cx: 290, cy: 235, r: 3.5, pulse: true },
    { cx: 260, cy: 270, r: 2 },
    { cx: 280, cy: 280, r: 2.5 },
    
    // East Africa (Nairobi, Addis Ababa, Kigali)
    { cx: 320, cy: 205, r: 3, pulse: true }, // Addis
    { cx: 335, cy: 225, r: 2.5 },
    { cx: 325, cy: 250, r: 4, pulse: true, highlight: true }, // Nairobi
    { cx: 310, cy: 260, r: 3 }, // Kigali
    { cx: 330, cy: 280, r: 2.5 },
    { cx: 345, cy: 260, r: 2 },
    
    // Southern Africa (Johannesburg, Cape Town)
    { cx: 270, cy: 310, r: 2.5 },
    { cx: 290, cy: 325, r: 3 },
    { cx: 285, cy: 355, r: 4, pulse: true, highlight: true }, // Jo'burg
    { cx: 270, cy: 380, r: 3.5, pulse: true }, // Cape Town
    { cx: 305, cy: 340, r: 2 },
    { cx: 320, cy: 320, r: 2.5 },
    
    // Surrounding Global Network Nodes (Europe, Middle East, Americas, Asia)
    { cx: 240, cy: 90, r: 2 }, // Europe
    { cx: 270, cy: 80, r: 3, pulse: true }, // London
    { cx: 310, cy: 95, r: 2.5 },
    { cx: 360, cy: 140, r: 3.5, pulse: true }, // Dubai
    { cx: 390, cy: 160, r: 2 },
    { cx: 430, cy: 190, r: 3, pulse: true }, // Mumbai / Asia
    { cx: 120, cy: 130, r: 2.5 }, // Atlantic / Americas
    { cx: 90, cy: 160, r: 3, pulse: true }, // New York
  ];

  const connections = [
    // Accra to Lagos to Nairobi to Cairo to Europe
    { x1: 220, y1: 225, x2: 240, y2: 230 },
    { x1: 220, y1: 225, x2: 180, y2: 200 },
    { x1: 240, y1: 230, x2: 290, y2: 235 },
    { x1: 290, y1: 235, x2: 325, y2: 250 },
    { x1: 325, y1: 250, x2: 320, y2: 205 },
    { x1: 320, y1: 205, x2: 300, y2: 145 },
    { x1: 300, y1: 145, x2: 270, y2: 80 },
    { x1: 325, y1: 250, x2: 285, y2: 355 },
    { x1: 285, y1: 355, x2: 270, y2: 380 },
    { x1: 220, y1: 225, x2: 285, y2: 355 },
    { x1: 300, y1: 145, x2: 360, y2: 140 },
    { x1: 360, y1: 140, x2: 430, y2: 190 },
    { x1: 180, y1: 200, x2: 90, y2: 160 },
  ];

  return (
    <div
      className={cn("relative pointer-events-none select-none flex items-center justify-center", className)}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className="w-full h-auto max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#00D2FF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.05" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer ambient glow */}
        <circle cx="250" cy="250" r="230" fill="url(#globeGlow)" />

        {/* Orbit and longitude/latitude rings */}
        <circle
          cx="250"
          cy="250"
          r="210"
          stroke="url(#orbitGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          className={animated ? "animate-spin-slow origin-center opacity-60" : "opacity-40"}
        />
        <ellipse
          cx="250"
          cy="250"
          rx="210"
          ry="110"
          stroke="url(#orbitGrad)"
          strokeWidth="1"
          strokeDasharray="6 8"
          className="opacity-40"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="110"
          ry="210"
          stroke="url(#orbitGrad)"
          strokeWidth="1"
          strokeDasharray="6 8"
          className="opacity-40"
        />

        {/* Connection Network Lines */}
        <g stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="3 3">
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              className={animated ? "transition-opacity duration-1000" : ""}
            />
          ))}
        </g>

        {/* Arcs radiating from Accra HQ */}
        <circle
          cx="220"
          cy="225"
          r="16"
          stroke="#00D2FF"
          strokeWidth="1"
          fill="none"
          className={animated ? "animate-ping origin-center opacity-40" : "opacity-30"}
        />
        <circle
          cx="220"
          cy="225"
          r="32"
          stroke="#0066FF"
          strokeWidth="0.75"
          fill="none"
          strokeDasharray="2 4"
          className="opacity-40"
        />

        {/* Network Nodes / Dots */}
        {dots.map((dot, i) => (
          <g key={i}>
            {dot.highlight && (
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r * 2.5}
                fill="#00D2FF"
                fillOpacity="0.25"
                filter="url(#glowFilter)"
              />
            )}
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.highlight ? "#00D2FF" : "#0066FF"}
              className={cn(
                dot.pulse && animated ? "animate-pulse" : "",
                dot.highlight ? "fill-brand-cyan-400" : "fill-brand-blue-600"
              )}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
