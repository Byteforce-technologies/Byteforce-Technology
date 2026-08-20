import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AfricaWatermark } from "@/components/brand/AfricaWatermark";
import { cn } from "@/lib/utils";

export interface CtaBannerProps {
  eyebrow?: string;
  heading?: string;
  highlightWord?: string;
  subtext?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export function CtaBanner({
  eyebrow = "READY TO BUILD SOMETHING GREAT?",
  heading = "Have a challenge worth solving?",
  highlightWord,
  subtext = "Let's turn it into technology that drives real results.",
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
  className,
}: CtaBannerProps) {
  return (
    <section className={cn("py-12 sm:py-16 bg-white", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta text-white p-8 sm:p-12 lg:p-16 shadow-2xl shadow-brand-blue-600/30">
          {/* Background Africa & Brand Watermark */}
          <AfricaWatermark opacity={0.28} />

          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-cyan-300/20 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl space-y-4 sm:space-y-6">
            {eyebrow && (
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                {eyebrow}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {heading}{" "}
              {highlightWord && (
                <span className="text-cyan-200 underline decoration-cyan-300/60 decoration-wavy decoration-2">
                  {highlightWord}
                </span>
              )}
            </h2>

            {subtext && (
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
                {subtext}
              </p>
            )}

            <div className="pt-2 sm:pt-4">
              <Button
                href={buttonHref}
                variant="white"
                size="lg"
                showArrow
                className="shadow-xl"
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
