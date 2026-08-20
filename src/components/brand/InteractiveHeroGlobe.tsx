"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Code2, TrendingUp, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveHeroGlobe() {
  const [activeCapability, setActiveCapability] = useState<string | null>(null);

  const capabilities = [
    {
      id: "ai",
      title: "AI & DATA",
      icon: Sparkles,
      position: "top-2 sm:top-6 left-1/2 -translate-x-1/2",
      description: "Intelligent analytics & machine learning models",
    },
    {
      id: "engineering",
      title: "SOFTWARE ENGINEERING",
      icon: Code2,
      position: "left-0 sm:-left-4 top-1/2 -translate-y-1/2",
      description: "Scalable web, mobile & enterprise platforms",
    },
    {
      id: "impact",
      title: "BUSINESS IMPACT",
      icon: TrendingUp,
      position: "right-0 sm:-right-4 top-1/2 -translate-y-1/2",
      description: "Measurable ROI, efficiency & revenue growth",
    },
    {
      id: "automation",
      title: "AUTOMATION",
      icon: Cpu,
      position: "bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2",
      description: "Streamlined operations & automated workflows",
    },
  ];

  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center p-6 select-none">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue-600/20 via-brand-cyan-500/20 to-transparent blur-3xl -z-10 animate-pulse-slow" />

      {/* Orbit Rings with Dashed Borders */}
      <div className="absolute inset-8 rounded-full border border-dashed border-brand-blue-300/40 animate-spin-slow" />
      <div className="absolute inset-16 rounded-full border border-brand-cyan-400/20" />
      <div className="absolute inset-2 rounded-full border border-dotted border-brand-blue-200/50 opacity-60" />

      {/* Star / Network Grid Background SVG */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        fill="none"
      >
        <g stroke="#0066FF" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="250" y1="50" x2="250" y2="450" />
          <line x1="50" y1="250" x2="450" y2="250" />
          <line x1="100" y1="100" x2="400" y2="400" />
          <line x1="100" y1="400" x2="400" y2="100" />
        </g>
        {/* Constellation dots */}
        <circle cx="120" cy="180" r="2" fill="#00D2FF" />
        <circle cx="380" cy="140" r="2.5" fill="#0066FF" />
        <circle cx="360" cy="360" r="2" fill="#00D2FF" />
        <circle cx="140" cy="340" r="2.5" fill="#0066FF" />
        <circle cx="250" cy="90" r="3" fill="#00D2FF" className="animate-ping" />
      </svg>

      {/* Center Core Glowing Orb with Logo */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-br from-brand-cyan-400 via-brand-blue-600 to-brand-blue-800 shadow-2xl shadow-brand-blue-500/50 flex items-center justify-center animate-float group cursor-pointer">
        {/* Inner ripple border */}
        <div className="absolute -inset-2 rounded-full bg-brand-cyan-400/20 blur-md group-hover:bg-brand-cyan-400/40 transition-colors" />
        
        {/* Core circle */}
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#00A3FF] via-[#0066FF] to-[#0040C1] p-6 shadow-inner">
          <Image
            src="/brand-logo-mark.png"
            alt="ByteForce Core Mark"
            width={180}
            height={180}
            className="w-4/5 h-4/5 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      </div>

      {/* Orbiting Capability Badges */}
      {capabilities.map((cap) => {
        const IconComponent = cap.icon;
        const isActive = activeCapability === cap.id;

        return (
          <div
            key={cap.id}
            onMouseEnter={() => setActiveCapability(cap.id)}
            onMouseLeave={() => setActiveCapability(null)}
            className={cn(
              "absolute z-20 transition-all duration-300 cursor-pointer",
              cap.position
            )}
          >
            <div
              className={cn(
                "flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border shadow-lg transition-all duration-200",
                isActive
                  ? "border-brand-blue-500 shadow-brand-blue-500/30 scale-105"
                  : "border-brand-slate-200/80 shadow-brand-slate-900/5 hover:border-brand-blue-300"
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center transition-colors",
                  isActive
                    ? "bg-brand-blue-600 text-white"
                    : "bg-brand-blue-50 text-brand-blue-600"
                )}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold tracking-wider text-brand-slate-800 uppercase font-mono">
                {cap.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
