import React from "react";
import type { Metadata } from "next";
import { 
  Rocket, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HybridCardGrid, HybridItem } from "@/components/cards/HybridCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Technology Capabilities Built for Impact",
  description:
    "Explore ByteForce Africa's core service offerings: Software Engineering, AI & Intelligent Systems, Data & Analytics, Digital Transformation, and Cloud & DevOps.",
};

export default function ServicesPage() {
  const hybridItems: HybridItem[] = services.map((s) => ({
    id: s.slug,
    number: s.number,
    title: s.name,
    slug: s.slug,
    shortDescription: s.shortDescription,
    fullDescription: s.heroDescription,
    capabilities: s.capabilities,
    iconName: s.iconName,
    detailHref: s.detailHref,
  }));

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 bg-gradient-to-b from-brand-slate-50/80 via-white to-white">
        {/* Subtle background globe watermark */}
        <GlobeMotif
          variant="subtle"
          size={560}
          opacity={0.12}
          className="absolute -top-12 right-0 sm:right-10 pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>OUR SERVICES</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Technology capabilities built for"
              highlightText="impact."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              We design, build, and deploy enterprise-grade software and intelligent systems that solve complex challenges for scaling organizations across Africa and beyond.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive 5-Card Hybrid Grid */}
      <section>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600">
                  5 CORE PRACTICE AREAS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900 mt-1">
                  Explore Our Technical Capabilities
                </h2>
              </div>
              <p className="text-sm text-brand-slate-500 max-w-md">
                Hover to preview key focus areas, or click any practice area to review its complete capability breakdown.
              </p>
            </div>

            <HybridCardGrid items={hybridItems} type="service" />
          </div>
        </Container>
      </section>

      {/* 3. Reassurance & Value Principles Row */}
      <section className="bg-brand-slate-50/60 py-16 border-y border-brand-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate-900">Business First</h3>
              <p className="text-sm text-brand-slate-600 leading-relaxed">
                We align every architectural decision with measurable commercial goals, unit economics, and real ROI.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate-900">Quality Assured</h3>
              <p className="text-sm text-brand-slate-600 leading-relaxed">
                Clean code, comprehensive TypeScript typing, automated regression testing, and security hardening by default.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate-900">Collaborative</h3>
              <p className="text-sm text-brand-slate-600 leading-relaxed">
                We embed directly alongside your technical leadership, operating with total transparency and knowledge transfer.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-slate-900">Future Ready</h3>
              <p className="text-sm text-brand-slate-600 leading-relaxed">
                Modular architectures built to handle high concurrency, cross-border scale, and rapid feature iteration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        eyebrow="READY TO SCALE YOUR SYSTEMS?"
        heading="Have a technical challenge worth"
        highlightWord="solving?"
        subtext="Let's turn your vision into robust, production-ready software that drives business growth."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </div>
  );
}
