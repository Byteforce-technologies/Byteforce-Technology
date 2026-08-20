"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Calendar, 
  Mail, 
  CheckCircle2,
  TrendingUp,
  Tag
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TwoToneHeading } from "@/components/ui/TwoToneHeading";
import { Button } from "@/components/ui/Button";
import { GlobeMotif } from "@/components/brand/GlobeMotif";
import { 
  insights, 
  insightCategories, 
  getFeaturedArticle, 
  getPopularArticles, 
  getLatestArticles,
  InsightArticle 
} from "@/data/insights";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredArticle = useMemo(() => getFeaturedArticle(), []);
  const popularArticles = useMemo(() => getPopularArticles(), []);

  const filteredArticles = useMemo(() => {
    let result = insights.filter((a) => a.slug !== featuredArticle.slug);

    if (activeCategory !== "all") {
      result = result.filter((a) => a.filterCategory === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery, featuredArticle]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setSubscribed(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
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
            <Eyebrow>INSIGHTS & PERSPECTIVES</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Ideas. Insights."
              highlightText="Real impact."
            />
            <p className="text-lg sm:text-xl text-brand-slate-600 leading-relaxed">
              Engineering deep dives, market architecture patterns, and executive perspectives on building digital systems for Africa&apos;s fastest-growing sectors.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-brand-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by topic, architecture, or technology..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-brand-slate-200 bg-white text-sm text-brand-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Category Filter Bar */}
      <section>
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-brand-slate-200 scrollbar-none">
            {insightCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-brand-blue-600 text-white shadow-sm shadow-brand-blue-500/25"
                    : "bg-brand-slate-100 hover:bg-brand-slate-200 text-brand-slate-700"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Featured Article + Popular Insights Sidebar */}
      {activeCategory === "all" && !searchQuery && (
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              {/* Featured Article Card (8 cols) */}
              <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 text-white p-8 sm:p-10 border border-brand-navy-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-cyan-400/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-brand-cyan-400/15 border border-brand-cyan-400/30 text-brand-cyan-300 text-xs font-mono font-bold uppercase">
                      FEATURED ESSAY
                    </span>
                    <span className="text-xs font-mono text-brand-slate-400">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight group-hover:text-brand-cyan-300 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-brand-slate-300 leading-relaxed max-w-2xl">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan-400/20 border border-brand-cyan-400/40 text-brand-cyan-300 font-mono font-bold text-xs flex items-center justify-center">
                      {featuredArticle.author.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {featuredArticle.author.name}
                      </div>
                      <div className="text-[11px] text-brand-slate-400">
                        {featuredArticle.date} • {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-brand-cyan-300 group-hover:text-white flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Popular Insights Sidebar (4 cols) */}
              <div className="lg:col-span-4 rounded-3xl bg-white border border-brand-slate-200 p-6 sm:p-8 shadow-card-subtle flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-600 mb-4 pb-2 border-b border-brand-slate-100">
                    <TrendingUp className="w-4 h-4" />
                    <span>Popular Insights</span>
                  </div>

                  <div className="space-y-4">
                    {popularArticles.slice(0, 4).map((art, idx) => (
                      <div
                        key={art.slug}
                        className="group flex items-start gap-3.5 pb-4 border-b border-brand-slate-100 last:border-none last:pb-0"
                      >
                        <span className="text-lg font-mono font-bold text-brand-blue-600/60 group-hover:text-brand-blue-600 transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-brand-slate-400 uppercase">
                            {art.category}
                          </span>
                          <h4 className="text-xs font-bold text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
                            {art.title}
                          </h4>
                          <span className="text-[10px] text-brand-slate-400 block">
                            {art.readTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4. Latest Insights Grid */}
      <section>
        <Container>
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-brand-slate-200 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-slate-900">
                {activeCategory === "all" ? "Latest Articles" : `${activeCategory} Articles`}
              </h3>
              <span className="text-xs font-mono text-brand-slate-500">
                Showing {filteredArticles.length} results
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 bg-brand-slate-50 rounded-3xl border border-brand-slate-200 space-y-3">
                <p className="text-base font-medium text-brand-slate-700">
                  No articles matched your search query.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-brand-blue-600 hover:underline"
                >
                  Clear Filters & Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <div
                    key={art.slug}
                    className="group flex flex-col justify-between p-7 rounded-3xl bg-white border border-brand-slate-200 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-300 space-y-5"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue-600 bg-brand-blue-50 px-2.5 py-0.5 rounded-md border border-brand-blue-100">
                          {art.category}
                        </span>
                        <span className="text-[11px] font-mono text-brand-slate-400">
                          {art.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
                        {art.title}
                      </h3>

                      <p className="text-xs text-brand-slate-600 leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-brand-blue-50 text-brand-blue-600 font-mono font-bold text-[10px] flex items-center justify-center">
                          {art.author.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-brand-slate-800">
                            {art.author.name}
                          </div>
                          <div className="text-[10px] text-brand-slate-400">
                            {art.date}
                          </div>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 5. Email Subscribe CTA Strip (Replaces CTA banner per Section 4.9) */}
      <section>
        <Container>
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-brand-navy-950 text-white border border-brand-navy-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/30 text-brand-cyan-300 text-xs font-mono font-bold uppercase">
                <Mail className="w-3.5 h-3.5" />
                <span>BYTEFORCE DISPATCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Stay ahead of Africa&apos;s digital evolution.
              </h2>

              <p className="text-sm text-brand-slate-300 leading-relaxed">
                Join founders, CTOs, and enterprise leaders receiving our monthly engineering blueprints, tech stack benchmarks, and emerging market reports.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>You&apos;re subscribed to ByteForce Dispatch! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-brand-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-sm font-bold shadow-lg shadow-brand-blue-600/30 transition-all shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-[11px] text-brand-slate-400">
                Zero spam. Unsubscribe at any time with one click.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
