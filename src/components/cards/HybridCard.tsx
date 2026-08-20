"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  X,
  ChevronRight,
  Code2,
  Sparkles,
  BarChart3,
  Layers,
  Cloud,
  Building2,
  Truck,
  Activity,
  GraduationCap,
  ShoppingCart,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const iconMap = {
  Code2,
  Sparkles,
  BarChart3,
  Layers,
  Cloud,
  Building2,
  Truck,
  Activity,
  GraduationCap,
  ShoppingCart,
};

export type IconName = keyof typeof iconMap;

export interface HybridItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  icon?: React.ComponentType<{ className?: string }>;
  iconName?: IconName | string;
  accentColor?: string;
  detailHref: string;
}

interface HybridCardProps {
  item: HybridItem;
  isActive: boolean;
  onSelect: (item: HybridItem) => void;
  type?: "service" | "solution";
}

function resolveIcon(item: HybridItem) {
  if (item.icon) return item.icon;
  if (item.iconName && (item.iconName in iconMap)) {
    return iconMap[item.iconName as IconName];
  }
  return Code2;
}

export function HybridCard({
  item,
  isActive,
  onSelect,
  type = "service",
}: HybridCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = resolveIcon(item);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(item);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${item.title}`}
      aria-pressed={isActive}
      onClick={() => onSelect(item)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 min-h-[360px]",
        isActive
          ? "bg-brand-navy-950 text-white shadow-xl shadow-brand-navy-950/20 border-2 border-brand-blue-500"
          : "bg-white border border-brand-slate-200/90 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-200 hover:-translate-y-1"
      )}
    >
      {/* Default State & Content */}
      <div className="relative z-10 space-y-4">
        {/* Top bar: Number & Icon */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-mono text-lg sm:text-xl font-bold tracking-tight",
              isActive ? "text-brand-cyan-400" : "text-brand-blue-600"
            )}
          >
            {item.number}
          </span>
          <div
            className={cn(
              "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200",
              isActive
                ? "bg-brand-blue-600/30 text-brand-cyan-300 border border-brand-cyan-400/30"
                : "bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white"
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-2xl font-bold tracking-tight pt-2 transition-colors",
            isActive ? "text-white" : "text-brand-slate-900 group-hover:text-brand-blue-600"
          )}
        >
          {item.title}
        </h3>

        {/* Short Description */}
        <p
          className={cn(
            "text-sm leading-relaxed",
            isActive ? "text-brand-slate-300" : "text-brand-slate-600"
          )}
        >
          {item.shortDescription}
        </p>
      </div>

      {/* Bottom Action / Link Indicator */}
      <div className="relative z-10 pt-6 mt-auto border-t border-brand-slate-100 dark:border-white/10 flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-semibold flex items-center gap-1.5 transition-colors",
            isActive
              ? "text-brand-cyan-300"
              : "text-brand-blue-600 group-hover:text-brand-blue-700"
          )}
        >
          Explore {type === "service" ? "Service" : "Solution"}
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
            isActive
              ? "bg-brand-cyan-400 text-brand-navy-950"
              : "bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white group-hover:translate-x-1"
          )}
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Desktop Hover Quick Preview Overlay (Fades in when not actively selected) */}
      {!isActive && isHovered && (
        <div className="hidden lg:flex absolute inset-0 z-20 rounded-3xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 p-7 text-white flex-col justify-between animate-in fade-in duration-200 shadow-2xl border border-brand-blue-500/40">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-cyan-400 font-bold">
                PREVIEW // {item.number}
              </span>
              <Icon className="w-5 h-5 text-brand-cyan-300" />
            </div>
            <h4 className="text-xl font-bold text-white">{item.title}</h4>
            <p className="text-xs text-brand-slate-300 line-clamp-3 leading-relaxed">
              {item.fullDescription}
            </p>
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan-400 mb-1.5">
                Core Capabilities:
              </div>
              <ul className="space-y-1">
                {item.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan-400" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-cyan-300 font-semibold">
            <span>Click for Full Breakdown</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );
}

interface HybridCardGridProps {
  items: HybridItem[];
  type?: "service" | "solution";
}

export function HybridCardGrid({ items, type = "service" }: HybridCardGridProps) {
  const [selectedItem, setSelectedItem] = useState<HybridItem>(items[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (item: HybridItem) => {
    setSelectedItem(item);
    // On small screens, open detail modal for clean viewing
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  };

  const SelectedIcon = selectedItem ? resolveIcon(selectedItem) : Code2;

  return (
    <div className="relative">
      {/* 3-Column Grid for Desktop with 5 cards + 6th slot for detail panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item) => (
          <HybridCard
            key={item.id}
            item={item}
            isActive={selectedItem?.id === item.id}
            onSelect={handleSelect}
            type={type}
          />
        ))}

        {/* 6th Slot: Full Detail Panel matching mockup-services-index.png */}
        {selectedItem && (
          <div className="hidden lg:flex flex-col justify-between p-8 rounded-3xl bg-brand-navy-950 text-white border-2 border-brand-blue-500 shadow-2xl relative overflow-hidden animate-in fade-in duration-200">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-blue-600/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header with back indicator */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brand-cyan-400 uppercase tracking-wider">
                  Active Selection // {selectedItem.number}
                </span>
                <div className="p-1.5 rounded-lg bg-white/10 text-brand-cyan-300">
                  <SelectedIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  {selectedItem.fullDescription}
                </p>
              </div>

              {/* WHAT WE DO Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan-400 mb-3">
                  WHAT WE DO
                </h4>
                <ul className="space-y-2">
                  {selectedItem.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <Button
                href={selectedItem.detailHref}
                variant="primary"
                size="md"
                showArrow
                className="w-full justify-center shadow-lg"
              >
                View Full {type === "service" ? "Service" : "Solution"}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile / Tablet Full Detail Modal */}
      {isModalOpen && selectedItem && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-brand-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-brand-blue-500/50 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand-cyan-400">
                {selectedItem.number} // {selectedItem.title}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
              <p className="text-sm text-brand-slate-300 leading-relaxed">
                {selectedItem.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan-400 mb-3">
                WHAT WE DO
              </h4>
              <ul className="space-y-2">
                {selectedItem.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-3">
              <Button
                href={selectedItem.detailHref}
                variant="primary"
                size="md"
                showArrow
                className="flex-1 justify-center"
              >
                View Full {type === "service" ? "Service" : "Solution"}
              </Button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
