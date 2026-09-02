import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Sparkles,
  BarChart3,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  Cpu,
  Workflow,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { InteractiveHeroGlobe } from "@/components/brand/InteractiveHeroGlobe";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "ByteForce Global — Technology Built for Africa's Next Chapter",
  description:
    "We build technology that drives efficiency, growth and impact for businesses across Africa and beyond. Custom software engineering, AI & intelligent systems, data ecosystems, and cloud solutions.",
};

const whatWeDoCards = [
  {
    slug: "software-engineering",
    title: "Software Engineering",
    description:
      "Custom software solutions that are secure, scalable and built to solve real business problems.",
    icon: Code2,
    href: "/services/software-engineering",
  },
  {
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    description:
      "We harness AI and machine learning to unlock insights, automate processes and create intelligent solutions.",
    icon: BrainCircuitIcon,
    href: "/services/ai-intelligent-systems",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "Transform your data into actionable insights that drive growth and improve decision-making.",
    icon: BarChart3,
    href: "/services/data-analytics",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Modernize your operations and build future-ready organizations with digital strategies and solutions.",
    icon: Workflow,
    href: "/services/digital-transformation",
  },
];

function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M12 5v13" />
      <path d="m9 9 3 3" />
      <path d="m15 9-3 3" />
      <path d="m9 15 3-3" />
      <path d="m15 15-3-3" />
    </svg>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Idea & Strategy",
    icon: Sparkles,
    description:
      "We help you define the right problem to solve and blueprint a scalable architecture.",
  },
  {
    step: "02",
    title: "Design & Engineer",
    icon: Code2,
    description:
      "We design and build intelligent, production-grade systems with modern standards.",
  },
  {
    step: "03",
    title: "Deploy & Integrate",
    icon: Workflow,
    description:
      "We integrate seamlessly into your ecosystem with live telemetry and CI/CD pipelines.",
  },
  {
    step: "04",
    title: "Scale & Optimize",
    icon: Zap,
    description:
      "We monitor, iterate and help you scale reliably as business volume accelerates.",
  },
];

const whyByteforceValues = [
  {
    icon: ShieldCheck,
    title: "Business First",
    description:
      "We start by understanding your business goals and operational constraints.",
  },
  {
    icon: Building2,
    title: "Built to Last",
    description:
      "We engineer secure, scalable, and future-ready digital systems.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work as a dedicated extension of your leadership and technical team.",
  },
  {
    icon: Globe2,
    title: "Impact Driven",
    description:
      "Your measurable business success and efficiency is the yardstick of our work.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12 overflow-hidden">
      {/* 1. Hero Section (UNTOUCHED / Kept with pulsing circle + logo animation per Section 2) */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-brand-slate-50/80 via-white to-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <Eyebrow>BYTEFORCE GLOBAL</Eyebrow>

              <TwoToneHeading
                as="h1"
                text="Technology built for Africa's next"
                highlightText="chapter."
              />

              <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-xl">
                We design and build digital solutions that help businesses
                operate smarter, scale faster, and compete globally.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Start a Project
                </Button>
                <Button href="/solutions" variant="secondary" size="md">
                  Explore Solutions
                </Button>
              </div>

              {/* Trust Badge & Avatar Row */}
              <div className="pt-4 border-t border-brand-slate-200/80 flex items-center gap-3.5">
                <div className="flex -space-x-1.5">
                  <span className="w-7 h-7 rounded-full bg-brand-navy-950 text-white font-mono font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    EM
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand-blue-600 text-white font-mono font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    AA
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand-cyan-500 text-white font-mono font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    KB
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand-slate-700 text-white font-mono font-bold text-[10px] flex items-center justify-center border-2 border-white">
                    NS
                  </span>
                </div>
                <p className="text-xs font-medium text-brand-slate-600">
                  Trusted by forward-thinking businesses across Africa
                </p>
              </div>
            </div>

            {/* Right Interactive Globe Hero Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <InteractiveHeroGlobe />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Stats Bar (REBUILD: Manus-referenced pale treatment per Section 4.1) */}
      <section className="bg-brand-blue-50/40 border-y border-brand-slate-200/80 py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Intro statement */}
            <div className="lg:col-span-4 text-base sm:text-lg font-bold tracking-tight text-brand-slate-900 leading-snug">
              We turn complex technology into{" "}
              <span className="text-brand-blue-600">business advantage.</span>
            </div>

            {/* 4 Stats Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-x divide-brand-slate-200/90">
              <div className="pl-4 first:pl-0 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-blue-600">
                  {siteConfig.stats.projectsDelivered}
                </div>
                <div className="text-xs text-brand-slate-500 font-medium">
                  Projects Delivered
                </div>
              </div>

              <div className="pl-4 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-blue-600">
                  {siteConfig.stats.happyClients}
                </div>
                <div className="text-xs text-brand-slate-500 font-medium">
                  Happy Clients
                </div>
              </div>

              <div className="pl-4 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-blue-600">
                  {siteConfig.stats.yearsOfImpact}
                </div>
                <div className="text-xs text-brand-slate-500 font-medium">
                  Years of Impact
                </div>
              </div>

              <div className="pl-4 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-blue-600">
                  {siteConfig.stats.countriesCovered}
                </div>
                <div className="text-xs text-brand-slate-500 font-medium">
                  Countries Covered
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "What We Do" (REBUILD: Manus-referenced 4-card grid per Section 4.2) */}
      <section className="py-6">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900">
                End-to-end technology solutions{" "}
                <span className="text-brand-blue-600">
                  for modern businesses
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatWeDoCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <Link
                    key={card.slug}
                    href={card.href}
                    className="group p-6 rounded-2xl bg-white border border-brand-slate-200/90 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-brand-slate-500 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-brand-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-blue-600">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "From idea to infrastructure" (REBUILD: Manus Process Section per Section 4.2) */}
      <section className="bg-brand-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-400">
                WHAT WE BUILD
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                From idea to{" "}
                <span className="text-brand-cyan-400">infrastructure.</span>
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                We architect and build secure, scalable systems that power
                businesses and products across industries.
              </p>
              <div className="pt-2">
                <Button
                  href="/work"
                  variant="secondary"
                  size="md"
                  className="border-white/30 text-white hover:bg-white/10"
                  showArrow
                >
                  See How We Work
                </Button>
              </div>
            </div>

            {/* Right 4 Horizontal Process Steps with Dashed Line */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="relative space-y-3">
                    <span className="text-[11px] font-mono font-bold text-brand-cyan-400">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-brand-blue-400/40 text-brand-cyan-300 flex items-center justify-center bg-brand-blue-900/30">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-brand-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. "Solutions we're proud to have built" (REBUILD: Manus Featured Projects per Section 4.2) */}
      <section className="py-6">
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <Eyebrow>WHAT WE BUILD</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900">
                  Solutions we’re proud to have built
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-bold text-brand-blue-600 hover:underline flex items-center gap-1 shrink-0"
              >
                View all projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2-Card Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-brand-slate-200 bg-white overflow-hidden shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  {/* IMAGE SLOT: project_card_thumbnail (placeholder slot) */}
                  <div className="h-48 bg-gradient-to-br from-brand-slate-100 via-brand-blue-50/50 to-brand-slate-200 border-b border-brand-slate-100 flex flex-col items-center justify-center p-6 text-center relative">
                    <span className="px-3 py-1 rounded-full bg-white/90 shadow-sm text-brand-blue-600 text-[11px] font-mono font-bold uppercase tracking-wider border border-brand-blue-100">
                      {project.industry} // {project.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 relative">
                    <span className="text-[10px] font-mono font-bold text-brand-blue-600 uppercase tracking-widest block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="pt-3 border-t border-brand-slate-100 flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-4">
                        {project.stats.slice(0, 2).map((stat, sIdx) => (
                          <div key={sIdx} className="space-y-0.5">
                            <span className="text-sm font-extrabold font-mono text-brand-slate-900 block">
                              {stat.value}
                            </span>
                            <span className="text-[10px] text-brand-slate-500 block">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/work"
                        className="w-8 h-8 rounded-full border border-brand-slate-200 bg-white hover:bg-brand-blue-600 hover:text-white hover:border-brand-blue-600 flex items-center justify-center text-brand-blue-600 transition-colors shrink-0"
                        aria-label={`View details for ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. "Why ByteForce" (REBUILD: Manus Value Strip per Section 4.2) */}
      <section className="py-8 bg-brand-slate-50/50 border-y border-brand-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-4 space-y-2">
              <Eyebrow>WHY BYTEFORCE</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900 leading-tight">
                We don’t just deliver software.
                <br />
                <span className="text-brand-blue-600">
                  We build lasting impact.
                </span>
              </h2>
            </div>

            {/* Right 4 Values */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyByteforceValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="space-y-2 pl-4 border-l-2 border-brand-blue-600/30"
                  >
                    <IconComponent className="w-5 h-5 text-brand-blue-600" />
                    <h4 className="text-sm font-bold text-brand-slate-900">
                      {val.title}
                    </h4>
                    <p className="text-xs text-brand-slate-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Shared CTA Banner */}
      <CtaBanner
        eyebrow="READY TO BUILD SOMETHING GREAT?"
        heading="Let’s build what’s next, together."
        subtext="Tell us about your challenge and let’s turn it into technology that creates real results."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
