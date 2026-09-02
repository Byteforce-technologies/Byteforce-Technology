"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Send,
  MessageSquare,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is ByteForce Global's typical project timeline?",
    a: "Timelines depend on the scope and complexity. Rapid prototypes and MVP platforms typically take 4 to 8 weeks, while full enterprise solutions or core banking integrations range from 3 to 6 months in phased agile milestones.",
  },
  {
    q: "How do you handle intellectual property and code ownership?",
    a: "You retain 100% of all intellectual property, source code, data pipelines, and architectural artifacts created for your project upon final payment. We provide clean Git repositories with comprehensive documentation.",
  },
  {
    q: "Can you collaborate with our existing in-house technical team?",
    a: "Yes. We frequently embed directly alongside existing engineering teams, providing specialized architecture oversight, AI modeling, or frontend expertise while establishing strict CI/CD and clean code standards.",
  },
  {
    q: "How do you handle post-launch maintenance, SLAs, and support?",
    a: "We offer dedicated 24/7 reliability engineering, automated uptime monitoring, security patching, and ongoing feature development SLAs to ensure your systems scale smoothly as your user base expands.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0].name,
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Phase-One Form Simulation:
    // Note: Connect real email service (e.g. Resend / SendGrid / API webhook) before real launch.
    setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          const submissions = JSON.parse(localStorage.getItem("byteforce_contact_submissions") || "[]");
          submissions.push({ ...formData, submittedAt: new Date().toISOString() });
          localStorage.setItem("byteforce_contact_submissions", JSON.stringify(submissions));
        }
        setFormStatus("success");
      } catch {
        setFormStatus("success");
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: services[0].name,
      message: "",
    });
    setFormStatus("idle");
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-8 bg-gradient-to-b from-brand-slate-50/80 via-white to-white">
        {/* Globe Motif watermark */}
        <GlobeMotif
          variant="subtle"
          size={560}
          opacity={0.12}
          className="absolute -top-12 right-0 sm:right-10 pointer-events-none"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Let's build something great"
              highlightText="together."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              Have a project in mind, an architectural challenge to solve, or want to explore an enterprise partnership? Reach out and our engineering team will get back to you within 24 hours.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-brand-blue-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>We typically respond within 24 hours</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Info Cards (4 Cards) */}
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="p-6 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle space-y-3 hover:border-brand-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-slate-900">Our Location</h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                Airport Residential Area,<br />Accra, Ghana
              </p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle space-y-3 hover:border-brand-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-slate-900">Email Us</h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                General inquiries & proposals:
              </p>
              <a
                href="mailto:hello@byteforce.global"
                className="text-xs font-bold text-brand-blue-600 hover:underline block"
              >
                hello@byteforce.global
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle space-y-3 hover:border-brand-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-slate-900">Call Us</h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                Direct office line:
              </p>
              <a
                href="tel:+233591234567"
                className="text-xs font-bold text-brand-blue-600 hover:underline block"
              >
                +233 59 123 4567
              </a>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle space-y-3 hover:border-brand-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-brand-slate-900">Business Hours</h3>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                Monday – Friday:<br />8:00 AM – 6:00 PM GMT
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Form & Illustration Side-by-Side */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-slate-200 shadow-xl p-8 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600">
                  DIRECT CONSULTATION INQUIRY
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-slate-900 mt-1">
                  Tell Us About Your Project
                </h2>
                <p className="text-sm text-brand-slate-600 mt-1">
                  Fill out the form below to receive an architectural review and timeline estimate.
                </p>
              </div>

              {formStatus === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 text-center animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Message Received!</h3>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.service}</strong> has been logged. Our engineering lead will review and respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-white border border-emerald-200 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-slate-800">
                        Full Name <span className="text-brand-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-4 py-3 rounded-xl border border-brand-slate-200 bg-brand-slate-50/50 text-sm text-brand-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-slate-800">
                        Work Email <span className="text-brand-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="kwame@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-slate-200 bg-brand-slate-50/50 text-sm text-brand-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-slate-800">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Enterprise Ltd"
                        className="w-full px-4 py-3 rounded-xl border border-brand-slate-200 bg-brand-slate-50/50 text-sm text-brand-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors"
                      />
                    </div>

                    {/* Service of Interest */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-slate-800">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-brand-slate-200 bg-brand-slate-50/50 text-sm text-brand-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-brand-slate-800">
                      Project Details & Requirements <span className="text-brand-blue-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, existing stack, and expected timelines..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-slate-200 bg-brand-slate-50/50 text-sm text-brand-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-3.5 px-6 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-blue-600/25 transition-all disabled:opacity-50"
                    >
                      {formStatus === "submitting" ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-brand-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-600" />
                    <span>We respect your privacy. No spam, ever.</span>
                  </p>
                </form>
              )}
            </div>

            {/* Right "Let's create impact" Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy-950 text-white border border-brand-navy-800 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-blue-600/20 blur-2xl pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/30 text-brand-cyan-300 text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PARTNER WITH US</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  Transforming high-stakes technical ideas into reality.
                </h3>

                <p className="text-sm text-brand-slate-300 leading-relaxed">
                  Whether you are digitizing an established commercial enterprise or scaling a venture-backed technology platform across West and East Africa, we provide the architectural leverage you need.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-brand-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0" />
                    <span>Full IP & Source Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-brand-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0" />
                    <span>Production-Hardened Scalability</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-brand-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan-400 shrink-0" />
                    <span>Strict Confidentiality & NDAs Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. FAQ Accordion (4 Questions) */}
      <section className="bg-brand-slate-50/70 py-16 sm:py-20 border-y border-brand-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
              <TwoToneHeading
                text="Everything You Need to"
                highlightText="Know"
                as="h2"
                align="center"
              />
              <p className="text-sm text-brand-slate-600">
                Common questions about our engagement models, security standards, and delivery process.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={idx}
                    className="border border-brand-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-brand-slate-900 hover:text-brand-blue-600 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-brand-slate-400 transition-transform duration-200 shrink-0 ml-4",
                          isOpen ? "rotate-180 text-brand-blue-600" : ""
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-brand-slate-600 leading-relaxed border-t border-brand-slate-100 pt-3 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. CTA Banner */}
      <CtaBanner
        eyebrow="LET'S DISCUSS YOUR VISION"
        heading="Have a challenge worth"
        highlightWord="solving?"
        subtext="Our senior engineering team is ready to blueprint your digital solution."
        buttonLabel="Schedule a Call"
        buttonHref="#top"
      />
    </div>
  );
}
