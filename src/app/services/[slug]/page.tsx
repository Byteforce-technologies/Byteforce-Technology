import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  Code2,
  Cloud
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { services, getServiceBySlug } from "@/data/services";
import { getProjectBySlug, Project } from "@/data/projects";
import { techBadgeList } from "@/data/techStack";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} — ByteForce Global Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ByteForce Global`,
      description: service.heroDescription,
    },
  };
}

export default function SingleServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Fetch featured case studies from canonical projects data
  const featuredProjects: Project[] = service.featuredCaseStudySlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined)
    .slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Dark Navy Hero Section */}
      <section className="relative bg-brand-navy-950 text-white pt-10 pb-20 sm:pb-28 border-b border-brand-navy-800 overflow-hidden">
        {/* Subtle background network globe */}
        <GlobeMotif
          variant="subtle"
          size={640}
          opacity={0.16}
          className="absolute -top-16 -right-20 pointer-events-none"
        />

        {/* Ambient colored lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-brand-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-slate-600" />
            <span className="text-brand-cyan-400 font-semibold">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/30 text-brand-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
                <span>SERVICE // {service.number}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                {service.name}
              </h1>

              <p className="text-sm sm:text-base text-brand-slate-300 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Start a Project
                </Button>
                <Button href="/work" variant="secondary-dark" size="lg">
                  See Our Work
                </Button>
              </div>

              {/* 3 Small Feature Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {service.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-brand-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Dashboard Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#121C3D] to-[#0A1026] border border-brand-navy-700/80 p-6 shadow-2xl space-y-4">
                {/* Visual Dashboard Mockup Frame */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-brand-slate-400">
                    byteforce://systems/{service.slug}
                  </span>
                </div>

                {/* Dashboard Metrics preview */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-brand-slate-400 uppercase">
                      System Uptime
                    </span>
                    <div className="text-lg font-bold text-brand-cyan-300 font-mono">99.98%</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-brand-slate-400 uppercase">
                      Avg Response Time
                    </span>
                    <div className="text-lg font-bold text-emerald-400 font-mono">&lt;45ms</div>
                  </div>
                </div>

                {/* Code Terminal Snippet */}
                <div className="p-4 rounded-2xl bg-[#060A17] border border-white/5 font-mono text-xs text-brand-slate-300 space-y-1.5">
                  <div className="text-brand-slate-500 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-cyan-400" />
                    <span>// Architecture Readiness Check</span>
                  </div>
                  <div className="text-brand-cyan-300">const system = await byteforce.init(&#123;</div>
                  <div className="pl-4 text-emerald-300">tier: &quot;enterprise-scale&quot;,</div>
                  <div className="pl-4 text-brand-blue-300">region: &quot;africa-west&quot;,</div>
                  <div className="pl-4 text-white">resilience: &quot;high-availability&quot;</div>
                  <div className="text-brand-cyan-300">&#125;);</div>
                </div>

                {/* Status Bar */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-brand-slate-400 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Production Ready
                  </span>
                  <span className="font-mono text-brand-cyan-300">v2.4.0</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. "What We Build" - 5-Card Sub-Capabilities Grid */}
      <section>
        <Container>
          <div className="space-y-10">
            <div>
              <Eyebrow>CAPABILITIES</Eyebrow>
              <TwoToneHeading
                text="What We Build Under"
                highlightText={service.name}
                as="h2"
              />
              <p className="text-sm sm:text-base text-brand-slate-600 mt-2 max-w-2xl">
                Every solution is designed with modularity, maintainability, and real-world African market infrastructure in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {service.subCapabilities.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-brand-slate-200/90 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-blue-600">
                      0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                      <Code2 className="w-4 h-4" />
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
      <section className="bg-brand-slate-50/70 py-16 sm:py-20 border-y border-brand-slate-200/80">
        <Container>
          <div className="space-y-12">
            <div>
              <Eyebrow>HOW WE WORK</Eyebrow>
              <TwoToneHeading
                text="Our 5-Step Engineering"
                highlightText="Approach"
                as="h2"
              />
              <p className="text-sm sm:text-base text-brand-slate-600 mt-2 max-w-2xl">
                A disciplined development lifecycle ensuring high velocity, strict transparency, and rock-solid delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {service.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-sm space-y-3"
                >
                  <div className="text-2xl font-mono font-bold text-brand-blue-600">
                    {step.number}
                  </div>
                  <h4 className="text-base font-bold text-brand-slate-900">{step.title}</h4>
                  <p className="text-xs text-brand-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "Featured Case Studies" - Pulled from canonical projects.ts */}
      {featuredProjects.length > 0 && (
        <section>
          <Container>
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
                <div>
                  <Eyebrow>PROVEN RESULTS</Eyebrow>
                  <TwoToneHeading
                    text="Featured Work in"
                    highlightText={service.name}
                    as="h2"
                  />
                </div>
                <Button href="/work" variant="secondary" size="sm" showArrow>
                  Explore All Projects
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((proj) => (
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

      {/* 5. "Technologies We Use" - Badge Row */}
      <section className="bg-brand-navy-950 text-white py-14 border-y border-brand-navy-800">
        <Container>
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
              CORE TOOLING & PROTOCOLS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technologies We Use
            </h3>
            <p className="text-sm text-brand-slate-400">
              Modern, battle-tested programming languages, frontend systems, backend engines, and database architectures.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {techBadgeList.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/50 hover:bg-white/10 text-xs font-mono font-medium text-brand-slate-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA Banner */}
      <CtaBanner
        eyebrow={`READY TO BUILD YOUR ${service.name.toUpperCase()} SOLUTION?`}
        heading="Let's build technology that drives"
        highlightWord="real impact."
        subtext="Speak with our lead engineers today and get an architectural assessment for your project."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </div>
  );
}
