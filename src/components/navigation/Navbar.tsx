"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Code2, Sparkles, BarChart3, Layers, Cloud, Building2, Truck, Activity, GraduationCap, ShoppingCart } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export const servicesNavList = [
  {
    name: "Software Engineering",
    href: "/services/software-engineering",
    description: "Custom web, mobile and enterprise systems",
    icon: Code2,
  },
  {
    name: "AI & Intelligent Systems",
    href: "/services/ai-intelligent-systems",
    description: "Machine learning, AI automation & predictive models",
    icon: Sparkles,
  },
  {
    name: "Data & Analytics",
    href: "/services/data-analytics",
    description: "Data pipelines, warehousing & BI dashboards",
    icon: BarChart3,
  },
  {
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Modernizing operations & digital business models",
    icon: Layers,
  },
  {
    name: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description: "Reliable cloud infrastructure & CI/CD delivery",
    icon: Cloud,
  },
];

export const solutionsNavList = [
  {
    name: "FinTech",
    href: "/solutions/fintech",
    description: "Digital lending, core banking & payment systems",
    icon: Building2,
  },
  {
    name: "Supply Chain",
    href: "/solutions/supply-chain",
    description: "End-to-end visibility, tracking & demand planning",
    icon: Truck,
  },
  {
    name: "Healthcare",
    href: "/solutions/healthcare",
    description: "Patient workflows, EHR systems & clinic operations",
    icon: Activity,
  },
  {
    name: "Education",
    href: "/solutions/education",
    description: "E-learning platforms, SIS & institutional analytics",
    icon: GraduationCap,
  },
  {
    name: "E-commerce",
    href: "/solutions/ecommerce",
    description: "High-conversion commerce & omnichannel retail",
    icon: ShoppingCart,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "solutions" | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur-md",
        scrolled ? "border-b border-brand-slate-200/80 shadow-sm shadow-brand-slate-900/5 py-3.5" : "border-b border-brand-slate-100 py-4"
      )}
      ref={dropdownRef}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === "services" ? null : "services")
                }
                onMouseEnter={() => setOpenDropdown("services")}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                  isActive("/services")
                    ? "text-brand-blue-600 font-semibold"
                    : "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-50"
                )}
                aria-expanded={openDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-brand-slate-400 group-hover:text-brand-blue-600",
                    openDropdown === "services" ? "rotate-180 text-brand-blue-600" : ""
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === "services" && (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full mt-2 w-80 p-3 bg-white rounded-2xl border border-brand-slate-200 shadow-xl shadow-brand-slate-900/10 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-brand-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-slate-400">
                      Our Capabilities
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-brand-blue-600 hover:underline flex items-center gap-1"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {servicesNavList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-blue-50/70 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-brand-slate-500 line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === "solutions" ? null : "solutions")
                }
                onMouseEnter={() => setOpenDropdown("solutions")}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                  isActive("/solutions")
                    ? "text-brand-blue-600 font-semibold"
                    : "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-50"
                )}
                aria-expanded={openDropdown === "solutions"}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-brand-slate-400 group-hover:text-brand-blue-600",
                    openDropdown === "solutions" ? "rotate-180 text-brand-blue-600" : ""
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === "solutions" && (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full mt-2 w-80 p-3 bg-white rounded-2xl border border-brand-slate-200 shadow-xl shadow-brand-slate-900/10 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-brand-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-slate-400">
                      Industry Solutions
                    </span>
                    <Link
                      href="/solutions"
                      className="text-xs font-semibold text-brand-blue-600 hover:underline flex items-center gap-1"
                    >
                      All Solutions <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {solutionsNavList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-blue-50/70 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-brand-blue-50 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-brand-slate-500 line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/work"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 relative",
                isActive("/work")
                  ? "text-brand-blue-600 font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-brand-blue-600 after:rounded-full"
                  : "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-50"
              )}
            >
              Work
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 relative",
                isActive("/about")
                  ? "text-brand-blue-600 font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-brand-blue-600 after:rounded-full"
                  : "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-50"
              )}
            >
              About
            </Link>

            <Link
              href="/insights"
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 relative",
                isActive("/insights")
                  ? "text-brand-blue-600 font-semibold after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-brand-blue-600 after:rounded-full"
                  : "text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-50"
              )}
            >
              Insights
            </Link>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="md" showArrow>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5 sm:flex"
            >
              Let&apos;s Talk
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-slate-700 hover:text-brand-blue-600 hover:bg-brand-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white/98 backdrop-blur-xl z-40 overflow-y-auto px-4 py-6 border-t border-brand-slate-200 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-4 max-w-lg mx-auto pb-12">
              {/* Services Accordion */}
              <div className="border border-brand-slate-200 rounded-2xl overflow-hidden bg-brand-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-4 text-base font-semibold text-brand-slate-900"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-brand-slate-500 transition-transform duration-200",
                      mobileServicesOpen ? "rotate-180 text-brand-blue-600" : ""
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="px-4 pb-4 space-y-2 border-t border-brand-slate-200 pt-3 bg-white">
                    <Link
                      href="/services"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-2"
                    >
                      → Services Overview
                    </Link>
                    {servicesNavList.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blue-50 text-sm font-medium text-brand-slate-800"
                      >
                        <item.icon className="w-4 h-4 text-brand-blue-600" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="border border-brand-slate-200 rounded-2xl overflow-hidden bg-brand-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between p-4 text-base font-semibold text-brand-slate-900"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-brand-slate-500 transition-transform duration-200",
                      mobileSolutionsOpen ? "rotate-180 text-brand-blue-600" : ""
                    )}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="px-4 pb-4 space-y-2 border-t border-brand-slate-200 pt-3 bg-white">
                    <Link
                      href="/solutions"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-blue-600 mb-2"
                    >
                      → Solutions Overview
                    </Link>
                    {solutionsNavList.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-blue-50 text-sm font-medium text-brand-slate-800"
                      >
                        <item.icon className="w-4 h-4 text-brand-blue-600" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Mobile Links */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/work"
                  className={cn(
                    "block p-4 rounded-2xl text-base font-semibold transition-colors",
                    isActive("/work")
                      ? "bg-brand-blue-50 text-brand-blue-600"
                      : "text-brand-slate-900 hover:bg-brand-slate-100"
                  )}
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "block p-4 rounded-2xl text-base font-semibold transition-colors",
                    isActive("/about")
                      ? "bg-brand-blue-50 text-brand-blue-600"
                      : "text-brand-slate-900 hover:bg-brand-slate-100"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/insights"
                  className={cn(
                    "block p-4 rounded-2xl text-base font-semibold transition-colors",
                    isActive("/insights")
                      ? "bg-brand-blue-50 text-brand-blue-600"
                      : "text-brand-slate-900 hover:bg-brand-slate-100"
                  )}
                >
                  Insights
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center text-center shadow-lg"
                  showArrow
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
