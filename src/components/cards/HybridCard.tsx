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
  ExternalLink,
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
  if (item.iconName && item.iconName in iconMap) {
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
  const [isFocused, setIsFocused] = useState(false);
  const Icon = resolveIcon(item);

  const showPreview = (isHovered || isFocused) && !isActive;

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
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-200 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 min-h-[340px] overflow-hidden",
        isActive
          ? "bg-brand-navy-950 text-white shadow-xl shadow-brand-navy-950/20 border-2 border-brand-blue-500"
          : "bg-white border border-brand-slate-200/90 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 hover:-translate-y-0.5"
      )}
    >
      {/* Default Card State */}
      <div className="relative z-10 space-y-3.5">
        {/* Top bar: Number & Icon */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-mono text-base sm:text-lg font-bold tracking-tight",
              isActive ? "text-brand-cyan-400" : "text-brand-blue-600"
            )}
          >
            {item.number}
          </span>
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
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
            "text-lg sm:text-xl font-bold tracking-tight pt-1 transition-colors",
            isActive ? "text-white" : "text-brand-slate-900 group-hover:text-brand-blue-600"
          )}
        >
          {item.title}
        </h3>

        {/* Short Description */}
        <p
          className={cn(
            "text-xs sm:text-sm leading-relaxed line-clamp-3",
            isActive ? "text-brand-slate-300" : "text-brand-slate-600"
          )}
        >
          {item.shortDescription}
        </p>
      </div>

      {/* Bottom Action / Link Indicator */}
      <div className="relative z-10 pt-4 mt-auto border-t border-brand-slate-100 dark:border-white/10 flex items-center justify-between">
        <span
          className={cn(
            "text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors",
            isActive
              ? "text-brand-cyan-300"
              : "text-brand-blue-600 group-hover:text-brand-blue-700"
          )}
        >
          Explore {type === "service" ? "Service" : "Solution"}
        </span>
        <div
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200",
            isActive
              ? "bg-brand-cyan-400 text-brand-navy-950"
              : "bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white group-hover:translate-x-0.5"
          )}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Hover & Keyboard Quick Preview Overlay */}
      {showPreview && (
        <div className="hidden lg:flex absolute inset-0 z-20 rounded-2xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 p-6 text-white flex-col justify-between animate-in fade-in duration-150 shadow-2xl border border-brand-blue-500/50">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-brand-cyan-400 font-bold uppercase tracking-wider">
                QUICK PREVIEW // {item.number}
              </span>
              <Icon className="w-4 h-4 text-brand-cyan-300" />
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              {item.title}
            </h4>

            <p className="text-xs text-brand-slate-300 line-clamp-2 leading-relaxed">
              {item.shortDescription}
            </p>

            <div className="pt-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan-400 mb-1">
                Capabilities:
              </div>
              <ul className="space-y-1">
                {item.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="text-xs text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan-400 shrink-0" />
                    <span className="truncate">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <Link
              href={item.detailHref}
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-bold text-brand-cyan-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              View Full {type === "service" ? "Service" : "Solution"} <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-[10px] text-brand-slate-400 font-mono">
              Click to select
            </span>
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
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  };

  const SelectedIcon = selectedItem ? resolveIcon(selectedItem) : Code2;

  return (
    <div className="relative">
      {/* 3-Column Grid for Desktop with 5 cards + 6th slot for detail panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="hidden lg:flex flex-col justify-between p-7 rounded-2xl bg-brand-navy-950 text-white border-2 border-brand-blue-500 shadow-2xl relative overflow-hidden animate-in fade-in duration-200">
            {/* Subtle background ambient glow */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-blue-600/25 blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Header with capability tag & icon */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-brand-cyan-400 uppercase tracking-wider">
                  SELECTED // {selectedItem.number}
                </span>
                <div className="p-1.5 rounded-lg bg-white/10 text-brand-cyan-300">
                  <SelectedIcon className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1.5">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                  {selectedItem.fullDescription}
                </p>
              </div>

              {/* WHAT WE DO Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan-400 mb-2">
                  WHAT WE DELIVER
                </h4>
                <ul className="space-y-1.5">
                  {selectedItem.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan-400 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Button to full template */}
            <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
              <Button
                href={selectedItem.detailHref}
                variant="primary"
                size="md"
                showArrow
                className="w-full justify-center shadow-lg text-sm"
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
          <div className="relative w-full max-w-lg bg-brand-navy-950 text-white rounded-2xl p-6 sm:p-7 border border-brand-blue-500/50 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono font-bold text-brand-cyan-400">
                {selectedItem.number} // {selectedItem.title}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close detail panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h3>
              <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                {selectedItem.fullDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan-400 mb-2">
                WHAT WE DELIVER
              </h4>
              <ul className="space-y-1.5">
                {selectedItem.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan-400 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex gap-3">
              <Button
                href={selectedItem.detailHref}
                variant="primary"
                size="md"
                showArrow
                className="flex-1 justify-center text-xs"
              >
                View Full {type === "service" ? "Service" : "Solution"}
              </Button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-2 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white"
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
