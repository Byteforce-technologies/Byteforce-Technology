import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Users,
  ArrowRight,
  Play,
  Linkedin,
  Target,
  User,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us — Built in Africa. Engineered for the World",
  description:
    "ByteForce Global is a premier technology holding company and digital engineering firm empowering enterprises across Africa with scalable software and AI infrastructure.",
};

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const valuesList = [
  {
    icon: Target,
    title: "Impact First",
    description:
      "We build solutions that create measurable value for our clients and communities.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We are transparent, honest and committed to doing what’s right.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We challenge the status quo and leverage technology to create better outcomes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe the best solutions come from strong, high-trust partnerships.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-12 overflow-hidden">
      {/* 1. Hero Section (Manus-referenced layout with flat SVG GlobeMotif) */}
      <section className="relative pt-12 sm:pt-20 pb-12 bg-gradient-to-br from-white via-white to-brand-blue-50/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5">
              <Eyebrow>ABOUT BYTEFORCE GLOBAL</Eyebrow>
              <TwoToneHeading
                as="h1"
                text="Built in Africa. Engineered for"
                highlightText="the world."
              />
              <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-xl">
                We are a technology company helping forward-thinking
                organizations solve complex problems and unlock new
                opportunities through resilient digital infrastructure.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="#story" variant="primary" size="md" showArrow>
                  Our Story
                </Button>
                <Button
                  href="#story"
                  variant="secondary"
                  size="md"
                  className="gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch Our Story
                </Button>
              </div>
            </div>

            {/* Right Visual: Native Flat SVG Continent Map */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <GlobeMotif
                variant="hero"
                crop="africa-focus"
                size={440}
                opacity={0.95}
                className="w-full max-w-[420px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. "Our Story" Section (Manus-referenced pale grid) */}
      <section
        id="story"
        className="py-14 sm:py-18 bg-brand-slate-50/70 border-y border-brand-slate-200/80 scroll-mt-20"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <Eyebrow>OUR STORY</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-slate-900 leading-[1.2]">
                Solving real problems.
                <br />
                <span className="text-brand-blue-600">
                  Creating lasting impact.
                </span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-brand-slate-600 leading-relaxed">
                <p>
                  ByteForce Global is a technology holding company founded with
                  a simple conviction: technology should create leverage and
                  opportunity for businesses and communities, not complexity.
                </p>
                <p>
                  We partner with ambitious organizations across Africa and
                  beyond to engineer software, AI platforms, and distributed
                  systems that drive operational momentum, efficiency, and
                  scale—crafted locally, built to global standards.
                </p>
              </div>

              {/* Founder Signature Block */}
              <div className="pt-5 border-t border-brand-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand text-white flex items-center justify-center font-mono font-bold text-base shadow-md shadow-brand-blue-500/20">
                  EM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-slate-900">
                    Emmanuel Mensah
                  </h4>
                  <p className="text-xs font-mono text-brand-slate-500">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Team Collaborating Placeholder Slot (Section 6 Placeholder Spec) */}
            <div className="lg:col-span-6">
              {/* IMAGE SLOT: team_collaboration_photo (awaiting final asset) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-blue-50/80 via-white to-brand-slate-100 border border-brand-slate-200 shadow-card-subtle flex flex-col items-center justify-center p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-3 shadow-inner">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-brand-slate-800">
                  ByteForce Engineering Studio
                </h4>
                <p className="text-xs text-brand-slate-500 mt-1 max-w-sm">
                  Collaborative software development, systems architecture, and
                  AI modeling teams in Accra, Ghana.
                </p>
                <span className="mt-4 px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-600 text-[10px] font-mono font-bold uppercase tracking-wider border border-brand-blue-200">
                  Engineered in Africa • Global Delivery
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "Our Values" — Manus Deep Navy Value Grid */}
      <section className="bg-brand-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-600/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan-400">
                OUR VALUES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                The principles that guide everything{" "}
                <span className="text-brand-cyan-400">we do.</span>
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate-400 leading-relaxed pt-1">
                Our code of craftsmanship, transparency, and relentless focus on
                measurable client outcomes.
              </p>
            </div>

            {/* Right 4-Item Values Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {valuesList.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/40 hover:bg-white/[0.08] transition-colors space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-500/20 text-brand-cyan-300 flex items-center justify-center border border-brand-cyan-400/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "Our Team" — Manus 6-Column Team Grid */}
      <section id="team" className="py-8 scroll-mt-20">
        <Container>
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Eyebrow>OUR TEAM</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900">
                A diverse team united{" "}
                <span className="text-brand-blue-600">by purpose.</span>
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate-600">
                Engineers, architects, and product leaders committed to
                technological excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-brand-slate-200 bg-white overflow-hidden shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-200 transition-all text-center flex flex-col justify-between"
                >
                  {/* IMAGE SLOT: team_headshot (awaiting final asset) */}
                  <div className="h-36 sm:h-40 bg-gradient-to-b from-brand-slate-100 to-brand-slate-200 flex flex-col items-center justify-center relative group p-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue-50 border-2 border-brand-blue-200 text-brand-blue-600 flex items-center justify-center font-bold text-sm">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  <div className="p-3 space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-brand-slate-900 line-clamp-1">
                      {member.name}
                    </h3>
                    <p className="text-[11px] text-brand-slate-500 font-medium line-clamp-1">
                      {member.title}
                    </p>
                    <div className="pt-2 flex items-center justify-center gap-2 text-brand-slate-400">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="hover:text-brand-blue-600 transition-colors p-1"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on X`}
                          className="hover:text-brand-blue-600 transition-colors p-1"
                        >
                          <XTwitterIcon className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Shared CTA Banner */}
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
