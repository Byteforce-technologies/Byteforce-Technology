import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  Linkedin, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Rocket, 
  ArrowRight,
  Globe2,
  Building2,
  Cpu
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
    "ByteForce Africa is a premier technology holding company and digital engineering firm empowering enterprises across Africa with scalable software and AI infrastructure.",
};

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-12 bg-gradient-to-b from-brand-slate-50/80 via-white to-white">
        {/* Globe Motif watermark */}
        <GlobeMotif
          variant="subtle"
          size={580}
          opacity={0.12}
          className="absolute -top-12 right-0 sm:right-10 pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>ABOUT US</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Built in Africa. Engineered for the"
              highlightText="world."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              We are a premier technology holding company and digital engineering partner. We combine deep African market intuition with global-grade software architecture to power the continent&apos;s leading enterprises.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="#story" variant="primary" size="lg" showArrow>
                Our Story
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. "Our Story" & Company Positioning */}
      <section id="story" className="scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow>OUR STORY</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate-900 leading-tight">
                Architecting the backbone of Africa&apos;s digital economy.
              </h2>

              <div className="space-y-4 text-brand-slate-600 text-base leading-relaxed">
                <p>
                  ByteForce Africa was founded with a singular conviction: that Africa’s next era of economic growth will be powered by resilient, purpose-engineered technology infrastructure.
                </p>
                <p>
                  Operating as a modern <strong>technology holding company</strong> and global tech engineering partner, we bridge the gap between complex emerging market realities—such as offline constraints, diverse payment rails, and fragmented supply chains—and world-class software standards.
                </p>
                <p>
                  From real-time cross-border freight tracking across ECOWAS corridors to automated fintech micro-lending engines processing millions in disbursements, our platforms are designed from first principles to drive efficiency, transparency, and sustainable growth.
                </p>
              </div>

              {/* Founder Signature Block */}
              <div className="pt-6 border-t border-brand-slate-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-mono font-bold text-lg shadow-md shadow-brand-blue-500/20">
                  EM
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-slate-900">Emmanuel Mensah</h4>
                  <p className="text-xs font-mono text-brand-slate-500">Founder & Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Right Visual Stats Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-8 rounded-3xl bg-brand-slate-50 border border-brand-slate-200 shadow-card-subtle space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-brand-blue-600 uppercase tracking-wider">
                    AT A GLANCE
                  </span>
                  <Globe2 className="w-5 h-5 text-brand-blue-600" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-brand-slate-200/80">
                    <div className="text-3xl font-bold font-mono text-brand-blue-600">30+</div>
                    <div className="text-xs font-semibold text-brand-slate-800 mt-0.5">Enterprise Projects Delivered</div>
                    <div className="text-xs text-brand-slate-500">Across fintech, supply chain, healthcare & commerce.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-brand-slate-200/80">
                    <div className="text-3xl font-bold font-mono text-brand-blue-600">8</div>
                    <div className="text-xs font-semibold text-brand-slate-800 mt-0.5">African Countries Covered</div>
                    <div className="text-xs text-brand-slate-500">Headquartered in Accra, Ghana with regional impact.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-brand-slate-200/80">
                    <div className="text-3xl font-bold font-mono text-brand-blue-600">99.9%</div>
                    <div className="text-xs font-semibold text-brand-slate-800 mt-0.5">Production Architecture SLA</div>
                    <div className="text-xs text-brand-slate-500">High availability, low-latency, and hardened security.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. "Our Values" — Deep Navy Band */}
      <section className="bg-brand-navy-950 text-white py-16 sm:py-24 border-y border-brand-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue-600/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="space-y-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
                WHAT GUIDES US
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Our Core <span className="text-brand-cyan-400">Values</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-slate-300 mt-2">
                Principles that define every architectural decision, line of code, and client partnership we build.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/40 transition-colors space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Impact First</h3>
                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  We measure engineering success by tangible commercial ROI, operational velocity, and real end-user adoption.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/40 transition-colors space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Integrity</h3>
                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  Uncompromising code quality, open communication, transparent architectures, and rigorous data protection.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/40 transition-colors space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Innovation</h3>
                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  Harnessing modern AI, predictive modeling, and edge paradigms specifically tailored for African business environments.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-cyan-400/40 transition-colors space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan-400/10 text-brand-cyan-300 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Collaboration</h3>
                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  We work as an embedded technical wing of your leadership team, ensuring total alignment and long-term knowledge transfer.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. "Our Team" Grid */}
      <section id="team" className="scroll-mt-24">
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-brand-slate-200 pb-6">
              <div>
                <Eyebrow>OUR PEOPLE</Eyebrow>
                <TwoToneHeading
                  text="Leadership &"
                  highlightText="Engineering Minds"
                  as="h2"
                />
              </div>
              <p className="text-sm text-brand-slate-500 max-w-md">
                A multidisciplinary team of systems architects, data scientists, product strategists, and domain specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle flex flex-col justify-between space-y-5 hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Placeholder Avatar Box */}
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-brand-slate-100 to-brand-slate-200 border border-brand-slate-200 flex items-center justify-center relative overflow-hidden">
                      <span className="text-3xl font-mono font-bold text-brand-slate-500 select-none">
                        {member.initials}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-brand-slate-900 leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue-600 mt-0.5">
                        {member.title}
                      </p>
                      <span className="text-[10px] font-mono text-brand-slate-400 block mt-1">
                        {member.department}
                      </span>
                    </div>

                    <p className="text-xs text-brand-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-brand-slate-100 flex items-center gap-2 text-brand-slate-400">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-colors"
                      aria-label={`${member.name} X (Twitter)`}
                    >
                      <XTwitterIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CTA Banner */}
      <CtaBanner
        eyebrow="READY TO PARTNER WITH US?"
        heading="Let's build Africa's next digital"
        highlightWord="breakthrough."
        subtext="Talk directly with our leadership and discover how ByteForce can accelerate your technology roadmap."
        buttonLabel="Schedule a Call"
        buttonHref="/contact"
      />
    </div>
  );
}
