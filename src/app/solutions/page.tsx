import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Truck, 
  Activity, 
  GraduationCap, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions — Industry Solutions Built for Africa",
  description:
    "Tailored digital platforms and infrastructure for FinTech, Supply Chain, Healthcare, Education, and E-commerce across Africa.",
};

const iconMap = {
  Building2,
  Truck,
  Activity,
  GraduationCap,
  ShoppingCart,
};

export default function SolutionsPage() {
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
            <Eyebrow>OUR SOLUTIONS</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Technology solutions built for your"
              highlightText="industry."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              Purpose-built digital infrastructure and platforms engineered to eliminate operational bottlenecks and drive growth across high-impact African sectors.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                See Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. 5-Card Solutions Grid */}
      <section>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600">
                  5 VERTICAL PLATFORMS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900 mt-1">
                  Industry-Specific Digital Systems
                </h2>
              </div>
              <p className="text-sm text-brand-slate-500 max-w-md">
                Pre-architected frameworks customized to meet regional compliance, low-bandwidth conditions, and payment ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol) => {
                const Icon = iconMap[sol.iconName] || Building2;

                return (
                  <div
                    key={sol.slug}
                    className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="space-y-5">
                      {/* Number & Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono font-bold text-brand-blue-600">
                          {sol.number}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white transition-colors duration-200">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                        {sol.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-brand-slate-600 leading-relaxed">
                        {sol.shortDescription}
                      </p>

                      {/* Features Bullet List */}
                      <div className="pt-2 border-t border-brand-slate-100 space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-slate-400">
                          Key Capabilities:
                        </span>
                        <ul className="space-y-1.5">
                          {sol.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs text-brand-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Link */}
                    <div className="pt-6 mt-6 border-t border-brand-slate-100 flex items-center justify-between">
                      <Link
                        href={sol.detailHref}
                        className="text-sm font-semibold text-brand-blue-600 group-hover:text-brand-blue-700 flex items-center gap-1.5"
                      >
                        Explore {sol.name}
                      </Link>
                      <div className="w-8 h-8 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Custom Solutions Callout Strip */}
      <section>
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-navy-950 text-white border border-brand-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/30 text-brand-cyan-300 text-xs font-mono font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BESPOKE ENGINEERING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Don&apos;t see your specific industry?
              </h3>
              <p className="text-sm text-brand-slate-300 leading-relaxed">
                We engineer custom digital architectures for complex domain requirements, unique regulatory models, and specialized operational workflows across emerging markets.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact" variant="white" size="lg" showArrow>
                Discuss Custom Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        eyebrow="READY TO TRANSFORM YOUR INDUSTRY?"
        heading="Let's build a solution tailored to your"
        highlightWord="operations."
        subtext="Consult with our industry solution architects to blueprint the ideal technology stack for your organization."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
