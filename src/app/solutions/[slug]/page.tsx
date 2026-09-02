import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Truck, 
  Building2, 
  GraduationCap, 
  ShoppingCart,
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { getProjectBySlug, Project } from "@/data/projects";

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export function generateMetadata({ params }: SolutionPageProps): Metadata {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.name} Solutions — ByteForce Global`,
    description: solution.shortDescription,
    openGraph: {
      title: `${solution.name} Solutions | ByteForce Global`,
      description: solution.heroDescription,
    },
  };
}

export default function SingleSolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  // Fetch success stories from canonical projects data
  const successStories: Project[] = solution.featuredCaseStudySlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined)
    .slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-slate-50/90 via-white to-white pt-10 pb-16 sm:pb-24 border-b border-brand-slate-200/80 overflow-hidden">
        {/* Background Network Globe */}
        <GlobeMotif
          variant="subtle"
          size={580}
          opacity={0.12}
          className="absolute -top-12 -right-16 pointer-events-none"
        />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-brand-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-slate-400" />
            <Link href="/solutions" className="hover:text-brand-blue-600 transition-colors">
              Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-slate-400" />
            <span className="text-brand-blue-600 font-semibold">{solution.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow>INDUSTRY SOLUTION // {solution.number}</Eyebrow>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-slate-900 leading-[1.12]">
                {solution.name} <span className="text-brand-blue-600">Solutions</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-2xl">
                {solution.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Start a Project
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See Our Work
                </Button>
              </div>

              {/* 4 Feature Bullets */}
              <div className="pt-6 border-t border-brand-slate-200 grid grid-cols-2 gap-3">
                {solution.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-brand-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl bg-white border border-brand-slate-200 shadow-xl p-6 space-y-5">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-brand-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold text-brand-slate-800">
                      {solution.name.toUpperCase()} CONTROL CENTER
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-600 font-bold">
                    LIVE
                  </span>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-brand-slate-50 border border-brand-slate-100 space-y-1">
                    <span className="text-[10px] font-mono text-brand-slate-500 uppercase">
                      Efficiency Boost
                    </span>
                    <div className="text-2xl font-bold font-mono text-brand-blue-600">+42.8%</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-slate-50 border border-brand-slate-100 space-y-1">
                    <span className="text-[10px] font-mono text-brand-slate-500 uppercase">
                      Active Users
                    </span>
                    <div className="text-2xl font-bold font-mono text-brand-slate-900">45,000+</div>
                  </div>
                </div>

                {/* Status List */}
                <div className="space-y-2 pt-1">
                  <div className="p-3 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 flex items-center justify-between text-xs">
                    <span className="text-brand-slate-700 font-medium">Real-Time Data Pipeline</span>
                    <span className="font-mono font-bold text-emerald-600">Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-slate-50 border border-brand-slate-100 flex items-center justify-between text-xs">
                    <span className="text-brand-slate-700 font-medium">Regional API Gateways</span>
                    <span className="font-mono font-bold text-brand-blue-600">Connected</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-slate-50 border border-brand-slate-100 flex items-center justify-between text-xs">
                    <span className="text-brand-slate-700 font-medium">Offline Sync Cache</span>
                    <span className="font-mono font-bold text-brand-cyan-700">Synchronized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. "What We Do" - 5 Sub-Capabilities Grid */}
      <section>
        <Container>
          <div className="space-y-10">
            <div>
              <Eyebrow>CAPABILITIES</Eyebrow>
              <TwoToneHeading
                text="What We Do in"
                highlightText={solution.name}
                as="h2"
              />
              <p className="text-sm sm:text-base text-brand-slate-600 mt-2 max-w-2xl">
                Modular software modules engineered to solve distinct domain challenges in {solution.name.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solution.subCapabilities.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-brand-slate-200/90 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-blue-600">
                      0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-slate-900">{sub.title}</h3>

                  <p className="text-sm text-brand-slate-600 leading-relaxed">
                    {sub.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-brand-slate-100 space-y-2">
                    {sub.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-brand-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "Our Approach" - 5-Step Process */}
      <section className="bg-brand-navy-950 text-white py-16 sm:py-20 border-y border-brand-navy-800">
        <Container>
          <div className="space-y-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
                LIFECYCLE & DELIVERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Our 5-Step Implementation <span className="text-brand-cyan-400">Approach</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-slate-300 mt-2 max-w-2xl">
                How we take industry solutions from discovery to enterprise deployment across African regions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {solution.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3"
                >
                  <div className="text-2xl font-mono font-bold text-brand-cyan-400">
                    {step.number}
                  </div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-brand-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "Success Stories" - Pulled from canonical projects.ts */}
      {successStories.length > 0 && (
        <section>
          <Container>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
                <div>
                  <Eyebrow>SUCCESS STORIES</Eyebrow>
                  <TwoToneHeading
                    text="Proven Impact in"
                    highlightText={solution.name}
                    as="h2"
                  />
                </div>
                <Button href="/work" variant="secondary" size="sm" showArrow>
                  Explore All Case Studies
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((proj) => (
                  <div
                    key={proj.slug}
                    className="p-8 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle flex flex-col justify-between space-y-6 hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-2.5 py-1 rounded-md">
                          {proj.category}
                        </span>
                        <span className="text-xs font-mono text-brand-slate-400">{proj.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-brand-slate-900 leading-snug">
                        {proj.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed">
                        {proj.description}
                      </p>

                      {/* Stat Highlight */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-slate-100">
                        {proj.stats.slice(0, 2).map((st, sIdx) => (
                          <div key={sIdx} className="p-2.5 rounded-xl bg-brand-slate-50">
                            <div className="text-lg font-bold font-mono text-brand-blue-600">
                              {st.value}
                            </div>
                            <div className="text-[11px] text-brand-slate-500 line-clamp-1">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techTags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-slate-100 text-brand-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/work`}
                        className="text-xs font-bold text-brand-blue-600 hover:underline inline-flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 5. CTA Banner */}
      <CtaBanner
        eyebrow={`READY TO DEPLOY ${solution.name.toUpperCase()} INFRASTRUCTURE?`}
        heading="Let's build technology that transforms your"
        highlightWord="operations."
        subtext="Speak with our technical leads to schedule a comprehensive discovery and architecture consultation."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </div>
  );
}
