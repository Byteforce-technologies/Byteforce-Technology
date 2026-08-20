import Link from "next/link";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center py-20 bg-brand-slate-50/50 overflow-hidden">
      {/* Background Globe Watermark */}
      <GlobeMotif
        variant="subtle"
        size={600}
        opacity={0.15}
        className="absolute inset-0 m-auto"
      />

      <Container className="relative z-10 text-center max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100 shadow-lg shadow-brand-blue-500/10 mb-2">
          <span className="font-mono text-3xl font-bold">404</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-slate-900">
          Page Not Found
        </h1>

        <p className="text-base text-brand-slate-600 leading-relaxed">
          The page you are looking for might have been moved, removed, or is temporarily unavailable. Let&apos;s get you back on track.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" showArrow>
            Return to Home
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
