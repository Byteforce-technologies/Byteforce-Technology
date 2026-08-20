import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Code2, 
  Sparkles, 
  BarChart3, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Rocket, 
  Globe2, 
  TrendingUp, 
  Cpu
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { InteractiveHeroGlobe } from "@/components/brand/InteractiveHeroGlobe";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { getFeaturedProjects, Project } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "ByteForce Africa — Technology Built for Africa's Next Chapter",
  description:
    "We build technology that drives efficiency, growth and impact for businesses across Africa and beyond. Custom software engineering, AI & intelligent systems, data ecosystems, and cloud solutions.",
};

const whatWeDoCards = [
  {
    number: "01",
    title: "Software Engineering",
    description: "Custom web, mobile and enterprise systems that are secure, scalable and built to solve real business problems.",
    icon: Code2,
    href: "/services/software-engineering",
    capabilities: ["Web Applications", "Enterprise Systems", "APIs & Integrations", "SaaS Platforms"],
  },
  {
    number: "02",
    title: "AI & Intelligent Systems",
    description: "We harness AI and machine learning to unlock insights, automate processes and create intelligent solutions.",
    icon: Sparkles,
    href: "/services/ai-intelligent-systems",
    capabilities: ["Machine Learning", "NLP & Chatbots", "Process Automation", "Computer Vision"],
  },
  {
    number: "03",
    title: "Data & Analytics",
    description: "Transform your data into actionable insights that drive growth and improve executive decision-making.",
    icon: BarChart3,
    href: "/services/data-analytics",
    capabilities: ["Data Warehousing", "Business Intelligence", "ETL Pipelines", "Real-Time Dashboards"],
  },
  {
    number: "04",
    title: "Digital Transformation",
    description: "Modernize your operations and build future-ready organizations with digital strategies and cloud solutions.",
    icon: Layers,
    href: "/services/digital-transformation",
    capabilities: ["Legacy Modernization", "Workflow Automation", "Cloud Strategy", "Change Enablement"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Idea & Strategy",
    description: "We dissect your core business model, assess technical feasibility, and blueprint a scalable architecture.",
  },
  {
    step: "02",
    title: "Design & Engineer",
    description: "Iterative agile development with clean TypeScript code, modern frameworks, and strict security standards.",
  },
  {
    step: "03",
    title: "Deploy & Integrate",
    description: "Automated CI/CD deployment, live telemetry, and seamless integration with existing payment rails and databases.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    description: "Continuous performance profiling, 24/7 reliability engineering, and feature expansion as your business grows.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 bg-gradient-to-b from-brand-slate-50/80 via-white to-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <Eyebrow>EMPOWERING AFRICAN ENTERPRISES</Eyebrow>

              <TwoToneHeading
                as="h1"
                text="Technology built for Africa's next"
                highlightText="chapter."
              />

              <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed max-w-2xl">
                We engineer high-leverage software, intelligent AI systems, and scalable data infrastructure that empower businesses to lead across Africa and beyond.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" size="lg" showArrow>
                  Start a Project
                </Button>
                <Button href="/solutions" variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </div>

              {/* Trust Badge & Avatar Row */}
              <div className="pt-4 border-t border-brand-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-brand-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    BF
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-cyan-500 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    AI
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-navy-950 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    GH
                  </div>
                  <div className="w-9 h-9 rounded-full bg-brand-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    +20
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-slate-600">
                  Trusted by forward-thinking businesses across Africa
                </p>
              </div>
            </div>

            {/* Right Interactive Globe Hero Graphic (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <InteractiveHeroGlobe />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-brand-navy-950 text-white py-12 border-y border-brand-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-5 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-brand-cyan-400">
                {siteConfig.stats.projectsDelivered}
              </div>
              <div className="text-xs sm:text-sm text-brand-slate-300 font-medium">
                Projects Delivered
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-white">
                {siteConfig.stats.happyClients}
              </div>
              <div className="text-xs sm:text-sm text-brand-slate-300 font-medium">
                Happy Clients
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-brand-cyan-400">
                {siteConfig.stats.yearsOfImpact}
              </div>
              <div className="text-xs sm:text-sm text-brand-slate-300 font-medium">
                Years of Impact
              </div>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-white">
                Across {siteConfig.stats.countriesCovered}
              </div>
              <div className="text-xs sm:text-sm text-brand-slate-300 font-medium">
                Countries Covered
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "What We Do" — 4 Cards */}
      <section>
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
              <div>
                <Eyebrow>CORE PRACTICE AREAS</Eyebrow>
                <TwoToneHeading
                  text="What We"
                  highlightText="Do"
                  as="h2"
                />
              </div>
              <Button href="/services" variant="secondary" size="sm" showArrow>
                View All 5 Services
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {whatWeDoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.number}
                    className="group flex flex-col justify-between p-7 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-300 space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono font-bold text-brand-blue-600">
                          {card.number}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white transition-colors duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed">
                        {card.description}
                      </p>

                      <div className="pt-2 border-t border-brand-slate-100 space-y-1.5">
                        {card.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-brand-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-slate-100">
                      <Link
                        href={card.href}
                        className="text-xs font-bold text-brand-blue-600 group-hover:text-brand-blue-700 flex items-center gap-1.5"
                      >
                        Explore Capability <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "From Idea to Infrastructure" — 4-Step Horizontal Process */}
      <section className="bg-brand-slate-50/70 py-16 sm:py-24 border-y border-brand-slate-200/80">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Eyebrow>OUR METHODOLOGY</Eyebrow>
              <TwoToneHeading
                text="From idea to"
                highlightText="infrastructure."
                as="h2"
                align="center"
              />
              <p className="text-sm sm:text-base text-brand-slate-600">
                A battle-tested engineering methodology designed to move from strategic concept to mission-critical execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-7 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 text-brand-blue-600 font-mono font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-brand-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. "Solutions We're Proud to Have Built" — 2 Featured Case Studies */}
      <section>
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
              <div>
                <Eyebrow>FEATURED WORK</Eyebrow>
                <TwoToneHeading
                  text="Solutions we're proud to have"
                  highlightText="built."
                  as="h2"
                />
              </div>
              <Button href="/work" variant="secondary" size="sm" showArrow>
                View All Case Studies
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle flex flex-col justify-between space-y-6 hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-3 py-1 rounded-lg border border-brand-blue-100">
                        {proj.category}
                      </span>
                      <span className="text-xs font-mono text-brand-slate-400 font-medium">
                        {proj.client}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-brand-slate-900 leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-brand-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-brand-slate-100">
                      {proj.stats.slice(0, 3).map((st, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-2xl bg-brand-slate-50 border border-brand-slate-100">
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

                  <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techTags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-slate-100 text-brand-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/work"
                      className="text-xs font-bold text-brand-blue-600 hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. "Why ByteForce" — 4-Icon Value Row */}
      <section className="bg-brand-navy-950 text-white py-16 sm:py-24 border-y border-brand-navy-800 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
                OUR ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Why Partner With <span className="text-brand-cyan-400">ByteForce</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-slate-300">
                We combine deep African context with uncompromised engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Business First</h3>
                <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                  We align technical decisions with your commercial metrics, cash flows, and growth targets.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Built to Last</h3>
                <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                  Scalable, maintainable, and secure architectures that stand up to real production stress.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Collaborative</h3>
                <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                  We work seamlessly alongside your executive team with radical transparency.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Impact Driven</h3>
                <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                  Delivering clear efficiency gains, automated processes, and measurable bottom-line value.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Reusable CTA Banner */}
      <CtaBanner
        eyebrow="LET'S BUILD WHAT'S NEXT"
        heading="Let's build what's next,"
        highlightWord="together."
        subtext="Turn ambitious digital concepts into secure, high-performing software that transforms your market position."
        buttonLabel="Start a Project"
        buttonHref="/contact"
      />
    </div>
  );
}
