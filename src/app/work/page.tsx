"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Filter, 
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Building2,
  Truck,
  Activity,
  GraduationCap,
  ShoppingCart,
  Code2
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai-data", label: "AI & Data" },
  { id: "fintech", label: "FinTech" },
  { id: "supply-chain", label: "Supply Chain" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web-mobile", label: "Web & Mobile" },
] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"latest" | "name">("latest");
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeCategory !== "all") {
      if (activeCategory === "web-mobile") {
        result = result.filter(
          (p) =>
            p.category === "Software Engineering" ||
            p.filterCategory === "ecommerce" ||
            p.filterCategory === "fintech"
        );
      } else {
        result = result.filter((p) => p.filterCategory === activeCategory);
      }
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      result.sort((a, b) => b.year.localeCompare(a.year));
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-12 bg-gradient-to-b from-brand-slate-50/80 via-white to-white">
        {/* Globe Watermark */}
        <GlobeMotif
          variant="subtle"
          size={560}
          opacity={0.12}
          className="absolute -top-12 right-0 sm:right-10 pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>OUR WORK</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Building technology that drives"
              highlightText="real impact."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              Explore selected client case studies demonstrating how we engineer scalable architectures, automate business workflows, and deliver measurable return on investment.
            </p>

            {/* Stat Pill Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-blue-600" />
                <span>30+ Projects Delivered • Across 8 Countries</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Filter Bar & Projects Grid */}
      <section>
        <Container>
          <div className="space-y-8">
            {/* Filter Tabs & Sort Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-brand-slate-200 pb-6">
              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200",
                      activeCategory === cat.id
                        ? "bg-brand-blue-600 text-white shadow-sm shadow-brand-blue-500/25"
                        : "bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-3 self-end lg:self-auto">
                <span className="text-xs font-mono text-brand-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "latest" | "name")}
                  className="text-xs font-medium bg-white border border-brand-slate-200 rounded-xl px-3 py-2 text-brand-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                >
                  <option value="latest">Latest First</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-300 space-y-6"
                >
                  {/* Top Metadata */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-lg border border-brand-blue-100">
                        {proj.category}
                      </span>
                      <span className="text-xs font-mono text-brand-slate-400 font-medium">
                        {proj.year} • {proj.duration}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-brand-slate-400 block mb-1">
                        {proj.client}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                        {proj.title}
                      </h3>
                    </div>

                    <p className="text-sm text-brand-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-brand-slate-100">
                      {proj.stats.slice(0, 3).map((st, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-brand-slate-50/80 border border-brand-slate-100">
                          <div className="text-xl font-bold font-mono text-brand-blue-600">
                            {st.value}
                          </div>
                          <div className="text-[11px] text-brand-slate-500 line-clamp-1 mt-0.5">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tech Tags & Detail Modal Trigger */}
                  <div className="pt-4 border-t border-brand-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-brand-slate-100 text-brand-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedModalProject(proj)}
                      className="text-xs font-bold text-brand-blue-600 hover:text-brand-blue-800 inline-flex items-center gap-1.5 shrink-0"
                    >
                      Case Breakdown <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "More projects. More impact." Banner Strip */}
      <section>
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy-950 text-white border border-brand-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
                PROVEN TRACK RECORD
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                More projects. More impact across Africa.
              </h3>
              <p className="text-sm text-brand-slate-300 leading-relaxed">
                From microfinance credit scoring to cross-border logistics telemetry, our engineered systems power mission-critical operations daily.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="white" size="lg" showArrow>
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Detail Modal for Case Study Deep Dive */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-brand-slate-900 rounded-3xl p-6 sm:p-10 border border-brand-slate-200 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-brand-slate-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-lg">
                {selectedModalProject.category} // {selectedModalProject.industry}
              </span>
              <button
                type="button"
                onClick={() => setSelectedModalProject(null)}
                className="p-2 rounded-xl bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-600 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-slate-400">
                  Client: {selectedModalProject.client} ({selectedModalProject.year})
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-slate-900 mt-1">
                  {selectedModalProject.title}
                </h2>
                <p className="text-sm sm:text-base text-brand-slate-600 mt-2">
                  {selectedModalProject.description}
                </p>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-50/50 border border-red-100 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-800">
                    The Challenge
                  </h4>
                  <p className="text-xs text-brand-slate-700 leading-relaxed">
                    {selectedModalProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    The Solution
                  </h4>
                  <p className="text-xs text-brand-slate-700 leading-relaxed">
                    {selectedModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Impact & Key Stats */}
              <div className="p-5 rounded-2xl bg-brand-blue-50/60 border border-brand-blue-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-800">
                  Measured Business Impact
                </h4>
                <p className="text-xs text-brand-slate-800 leading-relaxed font-medium">
                  {selectedModalProject.impact}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {selectedModalProject.stats.map((st, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-brand-blue-100 text-center">
                      <div className="text-lg font-bold font-mono text-brand-blue-600">
                        {st.value}
                      </div>
                      <div className="text-[10px] text-brand-slate-500 line-clamp-1">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-slate-400 block mb-2">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.techTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-brand-slate-100 text-brand-slate-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-end gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                showArrow
              >
                Discuss a Similar Project
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 5. CTA Banner */}
      <CtaBanner
        eyebrow="WANT TO CREATE MEASURABLE IMPACT?"
        heading="Let's build your next digital"
        highlightWord="success story."
        subtext="Collaborate with our cross-disciplinary team of software architects and industry experts."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </div>
  );
}
