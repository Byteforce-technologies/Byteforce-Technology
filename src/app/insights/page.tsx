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
  Tag,
  BookOpen
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
      {/* 1. Hero Section (Manus-referenced search + subscribe row) */}
      <section className="relative pt-12 sm:pt-18 pb-8 bg-gradient-to-br from-white via-white to-brand-blue-50/40">
        {/* Flat SVG Globe Motif */}
        <GlobeMotif
          variant="hero"
          crop="africa-focus"
          size={480}
          opacity={0.85}
          className="absolute -top-10 right-0 sm:right-10 pointer-events-none w-full max-w-[400px]"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-5">
            <Eyebrow>INSIGHTS</Eyebrow>
            <TwoToneHeading
              as="h1"
              text="Signals for smarter"
              highlightText="decisions."
            />
            <p className="text-base sm:text-lg text-brand-slate-600 leading-relaxed max-w-xl">
              Practical perspectives on data, software engineering, and operating systems from the people building digital infrastructure across Africa.
            </p>

            {/* Manus-Referenced Search + Subscribe Row */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-brand-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-slate-200 bg-white text-xs sm:text-sm text-brand-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("dispatch");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Subscribe</span>
              </button>
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
                  "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200",
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

      {/* 3. Featured Article Card (Manus Horizontal Split Card) */}
      {activeCategory === "all" && !searchQuery && (
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-brand-slate-200 bg-white overflow-hidden shadow-card-subtle hover:shadow-card-hover transition-all duration-200 group">
              {/* Left: Featured Image Placeholder Slot (Section 6 Placeholder Spec) */}
              <div className="lg:col-span-5 h-64 lg:h-auto min-h-[260px] bg-gradient-to-br from-brand-slate-100 via-brand-blue-50/80 to-brand-slate-200 border-b lg:border-b-0 lg:border-r border-brand-slate-100 flex flex-col items-center justify-center p-6 text-center relative">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-2 shadow-inner">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-mono text-brand-slate-700">
                  {featuredArticle.category}
                </span>
                <span className="text-[10px] text-brand-slate-500 mt-1">
                  Featured Lead Article
                </span>
              </div>

              {/* Right: Body Copy & Author Info */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue-600 block">
                    FEATURED ESSAY
                  </span>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Author line */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-50 text-brand-blue-600 font-mono font-bold text-xs flex items-center justify-center border border-brand-blue-200">
                      {featuredArticle.author.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-slate-800">
                        {featuredArticle.author.name}
                      </div>
                      <div className="text-[10px] text-brand-slate-500">
                        {featuredArticle.date} • {featuredArticle.readTime}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-brand-blue-600 group-hover:text-brand-blue-700 flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4. Latest Insights Grid with Card Image Slots (REBUILD per Section 4.7) */}
      <section>
        <Container>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-brand-slate-200 pb-3">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-brand-slate-900">
                {activeCategory === "all" ? "Latest Insights" : `${activeCategory} Articles`}
              </h3>
              <span className="text-xs font-mono text-brand-slate-500">
                Showing {filteredArticles.length} results
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12 bg-brand-slate-50 rounded-2xl border border-brand-slate-200 space-y-2">
                <p className="text-sm font-medium text-brand-slate-700">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredArticles.map((art) => (
                  <article
                    key={art.slug}
                    className="group flex flex-col justify-between rounded-2xl bg-white border border-brand-slate-200 shadow-card-subtle hover:shadow-card-hover hover:border-brand-blue-300 transition-all duration-200 overflow-hidden"
                  >
                    <div>
                      {/* IMAGE SLOT: insight_card_thumbnail (Section 4.7 & 6 Placeholder Spec) */}
                      <div className="h-36 bg-gradient-to-br from-brand-slate-100 via-brand-blue-50/40 to-brand-slate-200 border-b border-brand-slate-100 flex flex-col items-center justify-center p-3 text-center relative overflow-hidden">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 shadow-sm text-brand-blue-600 text-[10px] font-mono font-bold uppercase tracking-wider border border-brand-blue-100">
                          {art.category}
                        </span>
                      </div>

                      <div className="p-4 space-y-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue-600 block">
                          {art.category}
                        </span>

                        <h4 className="text-sm font-bold tracking-tight text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug line-clamp-2">
                          {art.title}
                        </h4>

                        <p className="text-xs text-brand-slate-500 leading-relaxed line-clamp-2">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-2 border-t border-brand-slate-100 flex items-center justify-between text-[11px] text-brand-slate-400">
                      <span>{art.date}</span>
                      <span>{art.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 5. Email Subscribe Strip (Manus-referenced dispatch container) */}
      <section id="dispatch">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-brand-navy-950 text-white border border-brand-navy-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-600/15 blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan-400">
                BYTEFORCE DISPATCH
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Get the latest insights delivered to your inbox.
              </h2>

              <p className="text-xs sm:text-sm text-brand-slate-300 leading-relaxed max-w-lg mx-auto">
                No spam. Just practical engineering perspectives, benchmarks, and emerging market technology reports.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>You&apos;re subscribed to ByteForce Dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-brand-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-brand-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold shadow-md transition-all shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
