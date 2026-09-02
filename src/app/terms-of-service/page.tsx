import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms of Service — ByteForce Global",
  description: "Terms of Service and commercial engagement standards for ByteForce Global.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 sm:py-24 space-y-12">
      <Container size="narrow">
        <div className="space-y-6">
          <Eyebrow>LEGAL INFORMATION</Eyebrow>
          <TwoToneHeading
            as="h1"
            text="Terms of"
            highlightText="Service"
          />
          <p className="text-sm font-mono text-brand-slate-500">
            Last Updated: January 1, 2026 • Effective Date: January 1, 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-brand-slate-600 leading-relaxed pt-6 border-t border-brand-slate-200">
            <div className="p-4 rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100 text-xs font-mono text-brand-blue-800">
              NOTE: This is a placeholder legal document scaffolded for client presentation purposes. Commercial client engagements are governed by custom Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </div>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">1. Agreement to Terms</h2>
            <p>
              By accessing our website or engaging ByteForce Global for engineering services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">2. Intellectual Property Rights</h2>
            <p>
              All trademarks, logos, service marks, and interface designs on this website are the proprietary property of ByteForce Global. Bespoke client deliverables, codebase repositories, and architectural assets are transferred to clients per the explicit terms in their respective executed Master Services Agreement.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">3. Limitation of Liability</h2>
            <p>
              ByteForce Global shall not be liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or third-party services linked from this platform.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">4. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Ghana, without giving effect to any principles of conflicts of law.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-slate-200 flex items-center gap-4">
            <Button href="/" variant="secondary" size="md">
              Return Home
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Contact Legal Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
