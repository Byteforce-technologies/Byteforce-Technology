import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";

// X (formerly Twitter) Icon SVG
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Software Engineering", href: "/services/software-engineering" },
    { name: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
    { name: "Data & Analytics", href: "/services/data-analytics" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
  ];

  const solutionsLinks = [
    { name: "FinTech", href: "/solutions/fintech" },
    { name: "Supply Chain", href: "/solutions/supply-chain" },
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Education", href: "/solutions/education" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/contact?ref=careers" },
    { name: "Blog", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#060A17] text-white border-t border-brand-navy-800 pt-16 pb-12 overflow-hidden">
      <Container>
        {/* Main 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo theme="dark" size="md" />
            <p className="text-sm text-brand-slate-400 max-w-sm leading-relaxed">
              We build technology that drives efficiency, growth and impact for businesses across Africa and beyond.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ByteForce Global on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue-600 hover:text-white border border-white/10 flex items-center justify-center text-brand-slate-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ByteForce Global on X"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue-600 hover:text-white border border-white/10 flex items-center justify-center text-brand-slate-400 transition-colors"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ByteForce Global on GitHub"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-blue-600 hover:text-white border border-white/10 flex items-center justify-center text-brand-slate-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-slate-400 hover:text-brand-cyan-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-slate-400 hover:text-brand-cyan-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-slate-400 hover:text-brand-cyan-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-brand-slate-400">
                <MapPin className="w-4 h-4 text-brand-cyan-400 shrink-0 mt-0.5" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-brand-slate-400">
                <Mail className="w-4 h-4 text-brand-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@byteforce.global"
                  className="hover:text-brand-cyan-400 transition-colors break-all"
                >
                  hello@byteforce.global
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-brand-slate-400">
                <Phone className="w-4 h-4 text-brand-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+233591234567"
                  className="hover:text-brand-cyan-400 transition-colors"
                >
                  +233 59 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-slate-500">
          <p>© {currentYear} ByteForce Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-brand-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
