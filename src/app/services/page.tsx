import React from "react";
import type { Metadata } from "next";
import { 
  Rocket, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ArrowRight,
  Check
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
    "Explore ByteForce Global's core service offerings: Software Engineering, AI & Intelligent Systems, Data & Analytics, Digital Transformation, and Cloud & DevOps.",
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
    <div className="space-y-16 sm:space-y-20 pb-12 overflow-hidden">
      {/* 1. Hero Section (Manus-referenced layout with flat SVG GlobeMotif) */}
      <section className="relative pt-12 sm:pt-18 pb-8 bg-gradient-to-br from-white via-white to-brand-blue-50/40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Eyebrow>OUR SERVICES</Eyebrow>
              <TwoToneHeading
                as="h1"
                text="Technology capabilities built for"
                highlightText="impact."
              />
              <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-xl">
                We design, build and scale digital systems that help businesses solve real problems, improve operations, and unlock new growth opportunities.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Start a Project
                </Button>
                <Button href="/work" variant="secondary" size="md">
                  See Our Work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <GlobeMotif
                variant="hero"
                crop="africa-focus"
                size={400}
                opacity={0.9}
                className="w-full max-w-[380px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive 5-Card Hybrid Grid (Section 5.2 Fresh Build) */}
      <section className="py-4">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-brand-slate-200 pb-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600">
                  5 CORE PRACTICE AREAS
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-slate-900 mt-1">
                  Explore Our Technical Capabilities
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-brand-slate-500 max-w-md">
                Hover to preview key focus areas, or click any practice area to review its complete capability breakdown.
              </p>
            </div>

            <HybridCardGrid items={hybridItems} type="service" />
          </div>
        </Container>
      </section>

      {/* 3. Reassurance Strip (Manus-referenced 4-box layout) */}
      <section className="py-4">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-brand-slate-200 bg-white shadow-card-subtle">
            <div className="flex items-start gap-3.5 pr-4 sm:border-r border-brand-slate-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-slate-900">Business First</h3>
                <p className="text-xs text-brand-slate-500 mt-0.5 leading-relaxed">
                  We start with your business goals, not just technology.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pr-4 lg:border-r border-brand-slate-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-slate-900">Quality Assured</h3>
                <p className="text-xs text-brand-slate-500 mt-0.5 leading-relaxed">
                  We follow engineering best practices and strict QA standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pr-4 sm:border-r border-brand-slate-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-slate-900">Collaborative</h3>
                <p className="text-xs text-brand-slate-500 mt-0.5 leading-relaxed">
                  We work closely with your team with complete transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-slate-900">Future Ready</h3>
                <p className="text-xs text-brand-slate-500 mt-0.5 leading-relaxed">
                  We build resilient solutions that scale with business growth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        eyebrow="READY TO BUILD SOMETHING GREAT?"
        heading="Let’s turn your ideas into"
        highlightWord="real impact."
        subtext="Tell us about your project requirements and let's engineer a solution that delivers."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
