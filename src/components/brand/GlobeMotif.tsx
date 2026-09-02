"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface GlobeMotifProps {
  variant?: "hero" | "header" | "watermark" | "subtle";
  crop?: "full" | "africa-focus" | "equatorial" | "watermark";
  animated?: boolean;
  opacity?: number;
  className?: string;
  size?: number | string;
}

interface DotPoint {
  cx: number;
  cy: number;
  r: number;
  pulse?: boolean;
  highlight?: boolean;
  label?: string;
}

export function GlobeMotif({
  variant = "header",
  crop = "full",
  animated = true,
  opacity = 1,
  className,
  size = 500,
}: GlobeMotifProps) {
  const uid = useId().replace(/:/g, "");

  // High-density dot coordinate map representing the African continent accurately
  const africaDots: DotPoint[] = [
    // --- North Africa & Maghreb ---
    { cx: 160, cy: 90, r: 2.2 }, // Morocco / Tangier
    { cx: 175, cy: 95, r: 2.5 },
    { cx: 195, cy: 92, r: 2.2 },
    { cx: 215, cy: 90, r: 3, pulse: true, label: "Casablanca" }, // Casablanca / Rabat
    { cx: 235, cy: 88, r: 2.4 }, // Algiers
    { cx: 255, cy: 85, r: 2.2 },
    { cx: 275, cy: 82, r: 2.6, pulse: true, label: "Tunis" }, // Tunis
    { cx: 295, cy: 90, r: 2.2 }, // Tripoli
    { cx: 315, cy: 95, r: 2.4 }, // Benghazi
    { cx: 335, cy: 100, r: 2.2 },
    { cx: 355, cy: 102, r: 3.5, pulse: true, highlight: true, label: "Cairo" }, // Cairo / Nile Delta
    { cx: 370, cy: 110, r: 2.5 }, // Suez

    // North Africa interior / Sahara belt
    { cx: 150, cy: 110, r: 2 },
    { cx: 170, cy: 115, r: 2.2 },
    { cx: 190, cy: 112, r: 2 },
    { cx: 210, cy: 110, r: 2.4 },
    { cx: 230, cy: 108, r: 2 },
    { cx: 250, cy: 105, r: 2.2 },
    { cx: 270, cy: 105, r: 2 },
    { cx: 290, cy: 110, r: 2.4 },
    { cx: 310, cy: 118, r: 2 },
    { cx: 330, cy: 122, r: 2.2 },
    { cx: 350, cy: 125, r: 2.4 },
    { cx: 365, cy: 130, r: 2 },

    { cx: 140, cy: 130, r: 2.2 },
    { cx: 160, cy: 135, r: 2 },
    { cx: 180, cy: 132, r: 2.2 },
    { cx: 200, cy: 130, r: 2 },
    { cx: 220, cy: 128, r: 2.4 },
    { cx: 240, cy: 126, r: 2 },
    { cx: 260, cy: 125, r: 2.2 },
    { cx: 280, cy: 130, r: 2 },
    { cx: 300, cy: 138, r: 2.4 },
    { cx: 320, cy: 142, r: 2 },
    { cx: 340, cy: 148, r: 2.2 },
    { cx: 360, cy: 152, r: 2 },

    // Sahel belt (Mauritania, Mali, Niger, Chad, Sudan)
    { cx: 125, cy: 152, r: 2.2 },
    { cx: 145, cy: 155, r: 2 },
    { cx: 165, cy: 152, r: 2.4 },
    { cx: 185, cy: 150, r: 2 },
    { cx: 205, cy: 148, r: 2.2 },
    { cx: 225, cy: 146, r: 2 },
    { cx: 245, cy: 146, r: 2.2 },
    { cx: 265, cy: 150, r: 2 },
    { cx: 285, cy: 155, r: 2.2 },
    { cx: 305, cy: 160, r: 2 },
    { cx: 325, cy: 166, r: 2.4 },
    { cx: 345, cy: 172, r: 2 },
    { cx: 365, cy: 176, r: 2.6, pulse: true, label: "Khartoum" }, // Khartoum

    // --- West Africa Bulge & Coast ---
    { cx: 105, cy: 175, r: 3.2, pulse: true, label: "Dakar" }, // Dakar / Senegal
    { cx: 125, cy: 176, r: 2.2 },
    { cx: 145, cy: 175, r: 2 },
    { cx: 165, cy: 172, r: 2.2 },
    { cx: 185, cy: 170, r: 2 },
    { cx: 205, cy: 168, r: 2.4 },
    { cx: 225, cy: 166, r: 2 },
    { cx: 245, cy: 168, r: 2.2 },
    { cx: 265, cy: 172, r: 2 },
    { cx: 285, cy: 178, r: 2.2 },
    { cx: 305, cy: 184, r: 2 },
    { cx: 325, cy: 190, r: 2.2 },
    { cx: 345, cy: 196, r: 2 },
    { cx: 365, cy: 200, r: 2.2 },
    { cx: 385, cy: 205, r: 3, pulse: true, label: "Addis Ababa" }, // Addis Ababa
    { cx: 405, cy: 210, r: 2.4 }, // Horn of Africa tip / Somalia

    // West Africa Coastal Spine (Guinea, Liberia, Ivory Coast, Ghana, Nigeria)
    { cx: 115, cy: 198, r: 2.2 }, // Conakry
    { cx: 130, cy: 212, r: 2.4 }, // Monrovia
    { cx: 150, cy: 224, r: 2.8, pulse: true, label: "Abidjan" }, // Abidjan
    { cx: 170, cy: 232, r: 4.5, pulse: true, highlight: true, label: "Accra HQ" }, // ACCRA HQ (Main Hub)
    { cx: 185, cy: 235, r: 2.4 }, // Lome / Cotonou
    { cx: 202, cy: 236, r: 4, pulse: true, highlight: true, label: "Lagos" }, // LAGOS Hub
    { cx: 220, cy: 238, r: 2.6 }, // Niger Delta / Port Harcourt
    { cx: 238, cy: 240, r: 2.4 }, // Douala / Cameroon

    // Inland West & Central Africa
    { cx: 135, cy: 190, r: 2 },
    { cx: 155, cy: 192, r: 2.2 },
    { cx: 175, cy: 190, r: 2 },
    { cx: 195, cy: 188, r: 2.4 },
    { cx: 215, cy: 186, r: 2 },
    { cx: 235, cy: 188, r: 2.2 },
    { cx: 255, cy: 192, r: 2 },
    { cx: 275, cy: 198, r: 2.2 },
    { cx: 295, cy: 204, r: 2 },
    { cx: 315, cy: 210, r: 2.2 },
    { cx: 335, cy: 216, r: 2 },
    { cx: 355, cy: 220, r: 2.2 },
    { cx: 375, cy: 225, r: 2.4 },
    { cx: 395, cy: 228, r: 2 },

    // --- Equatorial & Central Africa ---
    { cx: 225, cy: 258, r: 2.2 }, // Gabon / Libreville
    { cx: 245, cy: 260, r: 2.4 }, // Congo / Brazzaville
    { cx: 265, cy: 258, r: 3.2, pulse: true, label: "Kinshasa" }, // Kinshasa
    { cx: 285, cy: 254, r: 2.2 },
    { cx: 305, cy: 250, r: 2 },
    { cx: 325, cy: 248, r: 3.2, pulse: true, label: "Kigali" }, // Kigali Hub
    { cx: 345, cy: 246, r: 2.4 }, // Kampala
    { cx: 365, cy: 248, r: 4.2, pulse: true, highlight: true, label: "Nairobi" }, // NAIROBI Hub
    { cx: 385, cy: 254, r: 2.2 }, // Mombasa

    { cx: 235, cy: 280, r: 2.2 },
    { cx: 255, cy: 282, r: 2 },
    { cx: 275, cy: 280, r: 2.2 },
    { cx: 295, cy: 276, r: 2 },
    { cx: 315, cy: 272, r: 2.2 },
    { cx: 335, cy: 270, r: 2 },
    { cx: 355, cy: 272, r: 2.4 },
    { cx: 375, cy: 278, r: 2.8, pulse: true, label: "Dar es Salaam" }, // Dar es Salaam

    // --- Southern Africa ---
    { cx: 225, cy: 305, r: 2.6, pulse: true, label: "Luanda" }, // Luanda / Angola
    { cx: 245, cy: 308, r: 2.2 },
    { cx: 265, cy: 306, r: 2 },
    { cx: 285, cy: 302, r: 2.4 }, // Lubumbashi
    { cx: 305, cy: 298, r: 2 },
    { cx: 325, cy: 296, r: 2.4, pulse: true, label: "Lusaka" }, // Lusaka
    { cx: 345, cy: 300, r: 2 },
    { cx: 365, cy: 308, r: 2.2 }, // Mozambique coast

    { cx: 220, cy: 330, r: 2.2 },
    { cx: 240, cy: 332, r: 2 },
    { cx: 260, cy: 330, r: 2.2 },
    { cx: 280, cy: 325, r: 2 },
    { cx: 300, cy: 322, r: 2.4, pulse: true, label: "Harare" }, // Harare
    { cx: 320, cy: 324, r: 2 },
    { cx: 340, cy: 332, r: 2.2 }, // Beira

    // Botswana, Namibia, South Africa
    { cx: 215, cy: 358, r: 2.2 }, // Windhoek / Namibia
    { cx: 235, cy: 360, r: 2 },
    { cx: 255, cy: 356, r: 2.4, pulse: true, label: "Gaborone" }, // Gaborone
    { cx: 275, cy: 352, r: 4.2, pulse: true, highlight: true, label: "Johannesburg" }, // JOHANNESBURG Hub
    { cx: 295, cy: 356, r: 2.2 }, // Maputo
    { cx: 315, cy: 364, r: 2.6, pulse: true, label: "Durban" }, // Durban

    // Madagascar Island
    { cx: 395, cy: 320, r: 2.2 },
    { cx: 405, cy: 338, r: 2.6, pulse: true, label: "Antananarivo" }, // Antananarivo
    { cx: 412, cy: 356, r: 2.2 },
    { cx: 418, cy: 374, r: 2 },

    // Cape Peninsula / Southernmost Tip
    { cx: 230, cy: 388, r: 2.2 },
    { cx: 248, cy: 396, r: 3.6, pulse: true, highlight: true, label: "Cape Town" }, // Cape Town
    { cx: 268, cy: 398, r: 2.2 }, // Port Elizabeth
    { cx: 285, cy: 388, r: 2 },

    // --- Surrounding Global Network Nodes (for global context) ---
    { cx: 175, cy: 35, r: 2.4 }, // Lisbon / Madrid
    { cx: 220, cy: 25, r: 3.2, pulse: true, label: "London / Europe" }, // London Gateway
    { cx: 255, cy: 28, r: 2.4 }, // Frankfurt
    { cx: 420, cy: 75, r: 3.5, pulse: true, label: "Dubai / Middle East" }, // Dubai
    { cx: 460, cy: 110, r: 2.6 }, // Mumbai
    { cx: 75, cy: 95, r: 3.2, pulse: true, label: "New York / Americas" }, // New York
  ];

  // Interconnected network conduits across hubs and international gateways
  const connections = [
    // Intra-Africa primary data corridors
    { x1: 170, y1: 232, x2: 202, y2: 236, active: true }, // Accra <-> Lagos
    { x1: 170, y1: 232, x2: 150, y2: 224 }, // Accra <-> Abidjan
    { x1: 150, y1: 224, x2: 105, y2: 175 }, // Abidjan <-> Dakar
    { x1: 105, y1: 175, x2: 215, y2: 90 }, // Dakar <-> Casablanca
    { x1: 215, y1: 90, x2: 275, y2: 82 }, // Casablanca <-> Tunis
    { x1: 275, y1: 82, x2: 355, y2: 102 }, // Tunis <-> Cairo
    { x1: 202, y1: 236, x2: 325, y2: 248 }, // Lagos <-> Kigali
    { x1: 325, y1: 248, x2: 365, y2: 248, active: true }, // Kigali <-> Nairobi
    { x1: 365, y1: 248, x2: 385, y2: 205 }, // Nairobi <-> Addis Ababa
    { x1: 385, y1: 205, x2: 355, y2: 102 }, // Addis Ababa <-> Cairo
    { x1: 365, y1: 248, x2: 275, y2: 352, active: true }, // Nairobi <-> Johannesburg
    { x1: 170, y1: 232, x2: 275, y2: 352 }, // Accra <-> Johannesburg (direct trunk)
    { x1: 275, y1: 352, x2: 248, y2: 396 }, // Johannesburg <-> Cape Town
    { x1: 275, y1: 352, x2: 315, y2: 364 }, // Johannesburg <-> Durban
    { x1: 365, y1: 248, x2: 405, y2: 338 }, // Nairobi <-> Madagascar

    // Intercontinental connection conduits
    { x1: 105, y1: 175, x2: 75, y2: 95 }, // Dakar <-> New York
    { x1: 170, y1: 232, x2: 220, y2: 25 }, // Accra <-> London
    { x1: 215, y1: 90, x2: 220, y2: 25 }, // Casablanca <-> London
    { x1: 355, y1: 102, x2: 420, y2: 75 }, // Cairo <-> Dubai
    { x1: 365, y1: 248, x2: 420, y2: 75 }, // Nairobi <-> Dubai
  ];

  // ViewBox & scale mapping based on crop setting
  const viewBoxConfig = {
    full: "0 0 500 460",
    "africa-focus": "70 60 380 370",
    equatorial: "100 150 320 220",
    watermark: "60 40 400 400",
  }[crop];

  return (
    <div
      className={cn(
        "relative pointer-events-none select-none flex items-center justify-center transition-opacity duration-300",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox={viewBoxConfig}
        width={typeof size === "number" ? `${size}px` : size}
        height={typeof size === "number" ? `${size}px` : size}
        className="w-full h-auto max-w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Brand Radial Ambient Glow */}
          <radialGradient id={`${uid}-globeGlow`} cx="52%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.14" />
            <stop offset="55%" stopColor="#00D2FF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </radialGradient>

          {/* Network Conduit Gradient */}
          <linearGradient id={`${uid}-conduitGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0066FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0052D4" stopOpacity="0.2" />
          </linearGradient>

          {/* Orbit Rings Gradient */}
          <linearGradient id={`${uid}-orbitGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.08" />
          </linearGradient>

          {/* High-Glow Filter for Hub Nodes */}
          <filter id={`${uid}-glowFilter`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient radial lighting layer */}
        <circle cx="250" cy="225" r="215" fill={`url(#${uid}-globeGlow)`} />

        {/* Latitude / Longitude & Orbital Geodesic Guide Rings */}
        <g stroke={`url(#${uid}-orbitGrad)`} strokeWidth="1.2" fill="none">
          <ellipse
            cx="250"
            cy="225"
            rx="210"
            ry="200"
            strokeDasharray="4 6"
            className={animated ? "animate-spin-slow origin-center opacity-40" : "opacity-30"}
          />
          <ellipse
            cx="250"
            cy="225"
            rx="210"
            ry="90"
            strokeDasharray="6 8"
            className="opacity-35"
          />
          <ellipse
            cx="250"
            cy="225"
            rx="110"
            ry="200"
            strokeDasharray="6 8"
            className="opacity-35"
          />
          <line
            x1="40"
            y1="225"
            x2="460"
            y2="225"
            strokeDasharray="2 4"
            className="opacity-25"
          />
        </g>

        {/* Connection Network Conduits */}
        <g stroke={`url(#${uid}-conduitGrad)`} strokeWidth="1.2" strokeDasharray="3 3">
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              strokeWidth={c.active ? "1.6" : "1"}
              strokeOpacity={c.active ? "0.85" : "0.45"}
            />
          ))}
        </g>

        {/* Radiating Signal Waves from Accra HQ */}
        <circle
          cx="170"
          cy="232"
          r="16"
          stroke="#00D2FF"
          strokeWidth="1.2"
          fill="none"
          className={animated ? "animate-ping origin-center opacity-50" : "opacity-30"}
        />
        <circle
          cx="170"
          cy="232"
          r="30"
          stroke="#0066FF"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="2 4"
          className="opacity-45"
        />

        {/* Radiating Waves from Nairobi Hub */}
        <circle
          cx="365"
          cy="248"
          r="14"
          stroke="#00D2FF"
          strokeWidth="1"
          fill="none"
          className={animated ? "animate-ping origin-center opacity-40" : "opacity-25"}
          style={{ animationDelay: "1s" }}
        />

        {/* Radiating Waves from Johannesburg Hub */}
        <circle
          cx="275"
          cy="352"
          r="14"
          stroke="#00D2FF"
          strokeWidth="1"
          fill="none"
          className={animated ? "animate-ping origin-center opacity-40" : "opacity-25"}
          style={{ animationDelay: "2s" }}
        />

        {/* Continental Dot Matrix Map Nodes */}
        {africaDots.map((dot, i) => (
          <g key={i}>
            {dot.highlight && (
              <circle
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r * 2.4}
                fill="#00D2FF"
                fillOpacity="0.3"
                filter={`url(#${uid}-glowFilter)`}
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
