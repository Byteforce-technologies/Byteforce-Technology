import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy — ByteForce Africa",
  description: "Privacy Policy and data protection commitments for ByteForce Africa.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 space-y-12">
      <Container size="narrow">
        <div className="space-y-6">
          <Eyebrow>LEGAL INFORMATION</Eyebrow>
          <TwoToneHeading
            as="h1"
            text="Privacy"
            highlightText="Policy"
          />
          <p className="text-sm font-mono text-brand-slate-500">
            Last Updated: January 1, 2026 • Effective Date: January 1, 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm text-brand-slate-600 leading-relaxed pt-6 border-t border-brand-slate-200">
            <div className="p-4 rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100 text-xs font-mono text-brand-blue-800">
              NOTE: This is a placeholder legal document scaffolded for client presentation purposes. Real terms and privacy disclosures will be finalized prior to public commercial deployment.
            </div>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">1. Information We Collect</h2>
            <p>
              ByteForce Africa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information that you provide directly to us when contacting us via our website forms, subscribing to publications, or communicating regarding software engineering services. This may include your name, business email address, company name, and project requirements.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">2. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively to respond to your service inquiries, prepare tailored project proposals, provide ongoing technical support, and send subscribed technical newsletters. We do not sell or lease your personal information to third parties.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard technical safeguards, encryption protocols, and access controls to protect your data against unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-xl font-bold text-brand-slate-900 pt-2">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our data privacy officer at{" "}
              <a href="mailto:hello@byteforce.africa" className="text-brand-blue-600 font-semibold underline">
                hello@byteforce.africa
              </a>
              .
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
