/**
 * ByteForce Africa - Insights & Articles Data Layer
 * 
 * PLACEHOLDER CONTENT — replace with real articles/authors before launch
 * This file serves client-presentation purposes to showcase blog layout and filtering capabilities.
 */

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  category: "AI & Data" | "Software Engineering" | "Digital Transformation" | "Industry" | "Business" | "Product";
  filterCategory: "all" | "ai-data" | "software-engineering" | "digital-transformation" | "industry" | "business" | "product";
  excerpt: string;
  readTime: string;
  date: string;
  featured: boolean;
  popularRank?: number;
  author: Author;
  tags: string[];
}

export const insightCategories = [
  { id: "all", name: "All Insights" },
  { id: "ai-data", name: "AI & Data" },
  { id: "software-engineering", name: "Software Engineering" },
  { id: "digital-transformation", name: "Digital Transformation" },
  { id: "industry", name: "Industry" },
  { id: "business", name: "Business" },
  { id: "product", name: "Product" },
] as const;

export const insights: InsightArticle[] = [
  {
    slug: "building-ai-for-african-market-infrastructure",
    title: "Engineering AI Systems for Africa's Infrastructure Reality: Lessons from the Field",
    category: "AI & Data",
    filterCategory: "ai-data",
    excerpt: "Why Silicon Valley AI playbooks fail in emerging markets, and how designing for low bandwidth, edge compute, and offline-first operations drives real industrial value.",
    readTime: "6 min read",
    date: "Aug 14, 2025",
    featured: true,
    popularRank: 1,
    author: {
      name: "Emmanuel Mensah",
      role: "Founder & CEO",
      avatar: "EM",
    },
    tags: ["Artificial Intelligence", "Edge Compute", "Infrastructure", "Emerging Markets"],
  },
  {
    slug: "microservices-vs-modular-monolith-in-emerging-markets",
    title: "Modular Monoliths vs Microservices: Architectural Pragmatism for African Scale",
    category: "Software Engineering",
    filterCategory: "software-engineering",
    excerpt: "Navigating team velocity, cloud latency, and infrastructure maintenance costs when choosing architectural paradigms for fast-scaling African software platforms.",
    readTime: "8 min read",
    date: "Jul 28, 2025",
    featured: false,
    popularRank: 2,
    author: {
      name: "Kofi Boateng",
      role: "Lead Software Architect",
      avatar: "KB",
    },
    tags: ["Software Architecture", "TypeScript", "Performance", "Cloud"],
  },
  {
    slug: "fintech-credit-scoring-alternative-data-africa",
    title: "Beyond Traditional Bureau Scores: Building Resilient Alternative Credit Models",
    category: "AI & Data",
    filterCategory: "ai-data",
    excerpt: "How mobile money cashflow telemetry, utility micropayments, and behavioral signals allow lenders to accurately underwrite informal small businesses.",
    readTime: "5 min read",
    date: "Jul 12, 2025",
    featured: false,
    popularRank: 3,
    author: {
      name: "Abena Osei",
      role: "Head of Data Science",
      avatar: "AO",
    },
    tags: ["FinTech", "Credit Scoring", "Machine Learning", "Financial Inclusion"],
  },
  {
    slug: "digital-transformation-logistics-corridors",
    title: "From Paper Manifests to IoT Corridors: Digitizing West African Freight Logistics",
    category: "Digital Transformation",
    filterCategory: "digital-transformation",
    excerpt: "A practical deep dive into digitizing border transit documentation, telemetry tracking, and reducing transit hold-ups across ECOWAS commercial trade routes.",
    readTime: "7 min read",
    date: "Jun 30, 2025",
    featured: false,
    popularRank: 4,
    author: {
      name: "Farouk Bello",
      role: "VP of Digital Solutions",
      avatar: "FB",
    },
    tags: ["Supply Chain", "Logistics", "Digital Transformation", "Trade"],
  },
  {
    slug: "offline-first-mobile-architecture-clinical-settings",
    title: "Designing Offline-First Healthcare Software for Remote African Clinics",
    category: "Software Engineering",
    filterCategory: "software-engineering",
    excerpt: "State synchronization strategies, conflict resolution algorithms, and SQLite local caching that keep clinical EHR software running without interruption during internet outages.",
    readTime: "6 min read",
    date: "Jun 18, 2025",
    featured: false,
    popularRank: 5,
    author: {
      name: "Dr. Amina Diallo",
      role: "HealthTech Systems Lead",
      avatar: "AD",
    },
    tags: ["HealthTech", "Offline First", "System Design", "Database Sync"],
  },
  {
    slug: "the-future-of-omnichannel-retail-in-accra-and-lagos",
    title: "The Next Era of Omnichannel Retail: Unifying In-Store POS and Social Commerce",
    category: "Industry",
    filterCategory: "industry",
    excerpt: "How forward-thinking African retailers are bridging WhatsApp storefronts, physical retail point-of-sale systems, and unified warehouse inventories.",
    readTime: "5 min read",
    date: "May 25, 2025",
    featured: false,
    author: {
      name: "Kwame Asante",
      role: "Product Strategy Lead",
      avatar: "KA",
    },
    tags: ["E-commerce", "Retail", "Mobile Money", "POS"],
  },
  {
    slug: "managing-technical-debt-high-growth-african-startups",
    title: "Strategic Tech Debt: When to Move Fast and When to Refactor for African Scale",
    category: "Business",
    filterCategory: "business",
    excerpt: "A founder's guide to balancing rapid product iteration with security hardening, database index tuning, and foundational engineering standards.",
    readTime: "4 min read",
    date: "May 10, 2025",
    featured: false,
    author: {
      name: "Emmanuel Mensah",
      role: "Founder & CEO",
      avatar: "EM",
    },
    tags: ["Product Strategy", "Engineering Leadership", "Startups"],
  },
  {
    slug: "low-bandwidth-ux-patterns-for-mobile-platforms",
    title: "10 UX Patterns for Low-Bandwidth, High-Friction Mobile Environments",
    category: "Product",
    filterCategory: "product",
    excerpt: "Practical UI guidelines for optimistic updates, skeleton fallbacks, low-data asset compression, and instant perceptual response times.",
    readTime: "5 min read",
    date: "Apr 22, 2025",
    featured: false,
    author: {
      name: "Nia Mensah",
      role: "Head of Product Design",
      avatar: "NM",
    },
    tags: ["UI/UX Design", "Mobile", "Accessibility", "Frontend"],
  },
  {
    slug: "building-scalable-telecom-ussd-integrations",
    title: "Building Resilient Telecom USSD and SMS Gateways for Mass Market Reach",
    category: "Software Engineering",
    filterCategory: "software-engineering",
    excerpt: "Technical patterns for session management, queue concurrency, and timeout handling when serving non-smartphone users across major telco aggregators.",
    readTime: "7 min read",
    date: "Apr 05, 2025",
    featured: false,
    author: {
      name: "Kofi Boateng",
      role: "Lead Software Architect",
      avatar: "KB",
    },
    tags: ["Telecom", "USSD", "High Concurrency", "APIs"],
  },
];

export function getFeaturedArticle(): InsightArticle {
  return insights.find((a) => a.featured) || insights[0];
}

export function getPopularArticles(): InsightArticle[] {
  return insights
    .filter((a) => a.popularRank !== undefined)
    .sort((a, b) => (a.popularRank || 0) - (b.popularRank || 0));
}

export function getLatestArticles(): InsightArticle[] {
  return insights.filter((a) => !a.featured);
}
