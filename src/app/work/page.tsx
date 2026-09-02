"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  ExternalLink, 
  SlidersHorizontal,
  ChevronDown,
  Building2,
  Truck,
  Activity,
  GraduationCap,
  ShoppingCart,
  Code2,
  X
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
    <div className="space-y-16 sm:space-y-24 pb-12 overflow-hidden">
      {/* 1. Hero Section (UNTOUCHED per Section 2) */}
      <section className="relative pt-12 sm:pt-18 pb-10 bg-gradient-to-b from-brand-slate-50/80 via-white to-white">
        {/* Globe Watermark */}
        <GlobeMotif
          variant="hero"
          crop="africa-focus"
          size={500}
          opacity={0.85}
          className="absolute -top-10 right-0 sm:right-10 pointer-events-none w-full max-w-[420px]"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-5">
            <Eyebrow>OUR WORK</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Building technology that drives"
              highlightText="real impact."
            />
            <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-2xl">
              Explore selected client case studies demonstrating how we engineer scalable architectures, automate business workflows, and deliver measurable return on investment.
            </p>

            {/* Stat Pill Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-blue-600 animate-pulse" />
                <span>30+ Projects Delivered • Across 8 Countries</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Filter Bar & Projects List (REBUILD: Manus-referenced Work Cards per Section 4.6) */}
      <section id="projects">
        <Container>
          <div className="space-y-6">
            {/* Filter Tabs & Sort Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-brand-slate-200 pb-5">
              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200",
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
              <div className="flex items-center gap-2 self-end lg:self-auto">
                <span className="text-xs font-mono text-brand-slate-500">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "latest" | "name")}
                  className="text-xs font-medium bg-white border border-brand-slate-200 rounded-lg px-2.5 py-1.5 text-brand-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                >
                  <option value="latest">Latest First</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* Manus-Referenced Horizontal Work Cards List */}
            <div className="space-y-4">
              {filteredProjects.map((proj) => (
                <article
                  key={proj.slug}
                  onClick={() => setSelectedModalProject(proj)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 sm:p-5 rounded-2xl border border-brand-slate-200 bg-white shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-200 cursor-pointer"
                >
                  {/* Left Column: Placeholder Image Slot Container (Section 6 Placeholder Spec) */}
                  <div className="md:col-span-4 lg:col-span-3 h-44 sm:h-48 rounded-xl bg-gradient-to-br from-brand-slate-100 via-brand-blue-50/60 to-brand-slate-200 border border-brand-slate-200 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 shadow-sm text-brand-blue-600 text-[10px] font-mono font-bold uppercase tracking-wider border border-brand-blue-100">
                      {proj.industry}
                    </span>
                    <span className="text-[11px] font-bold text-brand-slate-700 mt-2 font-mono">
                      {proj.client}
                    </span>
                  </div>

                  {/* Middle Column: Body & Metrics */}
                  <div className="md:col-span-7 lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue-600">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-brand-slate-400">
                        {proj.year} • {proj.duration}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                      {proj.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="pt-2 flex flex-wrap gap-4 items-center">
                      {proj.stats.map((st, sIdx) => (
                        <div key={sIdx} className="space-y-0.5 pr-4 border-r last:border-0 border-brand-slate-200">
                          <span className="text-sm font-extrabold font-mono text-brand-slate-900 block">
                            {st.value}
                          </span>
                          <span className="text-[10px] text-brand-slate-500 block">
                            {st.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {proj.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-slate-100 text-brand-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Round Action Arrow Button */}
                  <div className="md:col-span-1 hidden md:flex items-center justify-end pr-2">
                    <div className="w-10 h-10 rounded-full border border-brand-slate-200 bg-white group-hover:bg-brand-blue-600 group-hover:text-white group-hover:border-brand-blue-600 flex items-center justify-center text-brand-blue-600 transition-colors shrink-0 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Pre-CTA Banner Section (UNTOUCHED from Antigravity per Section 2) */}
      <section>
        <Container>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-slate-900 via-brand-navy-900 to-brand-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono font-bold text-brand-cyan-400 uppercase tracking-widest">
                CUSTOM CASE STUDY REQUESTS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Need specific metrics or architecture breakdowns for your vertical?
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate-300">
                We provide deep architectural blueprints and sanitized codebase samples under NDA.
              </p>
            </div>
            <Button
              href="/contact"
              variant="white"
              size="md"
              showArrow
              className="shrink-0 text-xs font-bold"
            >
              Request Case Details
            </Button>
          </div>
        </Container>
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        eyebrow="HAVE A PROJECT IN MIND?"
        heading="Let’s build something great"
        highlightWord="together."
        subtext="Tell us about your technical challenge and let's engineer a solution that delivers real results."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />

      {/* 5. Project Detail Modal */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white text-brand-slate-900 rounded-2xl p-6 sm:p-8 border border-brand-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-brand-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-brand-blue-600 uppercase tracking-wider">
                  {selectedModalProject.category} // {selectedModalProject.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-slate-900 mt-1">
                  {selectedModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalProject(null)}
                className="p-2 rounded-xl bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-brand-slate-600 leading-relaxed">
              {selectedModalProject.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-2">
                KEY PERFORMANCE METRICS
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedModalProject.stats.map((st, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-brand-slate-50 border border-brand-slate-100">
                    <div className="text-lg font-bold font-mono text-brand-blue-600">
                      {st.value}
                    </div>
                    <div className="text-xs text-brand-slate-600 mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-500 mb-2">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedModalProject.techTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-brand-slate-100 text-brand-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-slate-200 flex justify-end gap-3">
              <Button href="/contact" variant="primary" size="md" showArrow>
                Discuss Similar Project
              </Button>
              <button
                type="button"
                onClick={() => setSelectedModalProject(null)}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700"
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
