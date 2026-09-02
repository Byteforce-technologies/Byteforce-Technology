/**
 * ByteForce Global - Projects & Case Studies (Canonical Data Source)
 * 
 * This is the SINGLE SOURCE OF TRUTH for case study names, statistics,
 * industries, and descriptions referenced across Home, Services, Solutions, and Work pages.
 */

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "AI & Data" | "FinTech" | "Supply Chain" | "Healthcare" | "Education" | "E-commerce" | "Software Engineering";
  filterCategory: "ai-data" | "fintech" | "supply-chain" | "healthcare" | "education" | "ecommerce" | "web-mobile";
  industry: string;
  client: string;
  year: string;
  duration: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  stats: ProjectStat[];
  techTags: string[];
  featured: boolean;
  serviceSlugs: string[];
  solutionSlugs: string[];
}

export const projects: Project[] = [
  {
    slug: "supply-chain-intelligence",
    title: "Supply Chain Intelligence Platform",
    category: "Supply Chain",
    filterCategory: "supply-chain",
    industry: "Logistics & Distribution",
    client: "Pan-African FMCG Distributor",
    year: "2025",
    duration: "6 Months",
    tagline: "Real-time visibility, automated fleet dispatch, and predictive route optimization across 8 countries.",
    description: "An enterprise telemetry and predictive logistics management platform connecting over 450 fleet vehicles and 30 regional distribution warehouses across West and East Africa.",
    challenge: "Fragmented distribution routes, frequent border customs bottlenecks, and lack of real-time telemetry resulted in average delivery delays of 4.2 days and high inventory spoilage.",
    solution: "Engineered an offline-resilient telemetry ingestion pipeline, real-time IoT vehicle tracking engine, and predictive inventory balancing dashboard for warehouse operators.",
    impact: "Cut delivery transit delays by 42%, increased inventory turnover by 3.2x, and provided central dispatch with 100% live location tracking.",
    stats: [
      { value: "42%", label: "Reduction in Delivery Delay" },
      { value: "3.2x", label: "Inventory Turnover Speed" },
      { value: "450+", label: "Connected Vehicles" },
      { value: "30", label: "Regional Warehouses" },
    ],
    techTags: ["TypeScript", "Next.js", "Python", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    featured: true,
    serviceSlugs: ["software-engineering", "data-analytics", "ai-intelligent-systems"],
    solutionSlugs: ["supply-chain", "ecommerce"],
  },
  {
    slug: "digital-lending-management",
    title: "Digital Lending Management System",
    category: "FinTech",
    filterCategory: "fintech",
    industry: "Financial Services",
    client: "West African Microfinance Group",
    year: "2025",
    duration: "5 Months",
    tagline: "Automated underwriting, alternative credit scoring, and instant mobile money disbursement engine.",
    description: "End-to-end automated loan origination, credit risk scoring, and automated mobile wallet disbursement platform processing over $12M in micro-enterprise working capital loans.",
    challenge: "Manual paper-based underwriting took 5–7 business days per loan, leading to high abandonment rates and limited reach among unbanked informal traders.",
    solution: "Designed a mobile-first lending portal integrating telecom mobile money APIs, automated credit scoring models using transaction histories, and instant loan disbursement workflows.",
    impact: "Accelerated loan decisioning to under 3 minutes with 99.4% repayment tracking accuracy and over $12M total credit disbursed.",
    stats: [
      { value: "$12M+", label: "Disbursed Volume" },
      { value: "<3 min", label: "Avg. Approval Time" },
      { value: "99.4%", label: "Repayment Tracking" },
      { value: "65k+", label: "Borrowers Served" },
    ],
    techTags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    featured: true,
    serviceSlugs: ["software-engineering", "digital-transformation", "cloud-devops"],
    solutionSlugs: ["fintech"],
  },
  {
    slug: "healthcare-operations",
    title: "Healthcare Operations & EHR Platform",
    category: "Healthcare",
    filterCategory: "healthcare",
    industry: "HealthTech & Clinical",
    client: "Regional Healthcare Network",
    year: "2024",
    duration: "7 Months",
    tagline: "Unified electronic health records, digital triage, and real-time pharmacy inventory across 18 clinics.",
    description: "Integrated patient record management, digital triage scheduling, and pharmacy stock control system deployed across 18 regional medical clinics and diagnostic laboratories.",
    challenge: "Siloed paper filing systems created 3+ hour outpatient wait times, frequent prescription drug stockouts, and duplicate medical tests across branches.",
    solution: "Architected a low-bandwidth, offline-capable Electronic Health Records (EHR) platform with barcode-enabled pharmacy tracking and digital patient queue management.",
    impact: "Reduced patient waiting times by 65%, eliminated drug stockouts in all 18 clinics, and securely indexed over 120,000 patient history records.",
    stats: [
      { value: "18", label: "Clinics Deployed" },
      { value: "120k+", label: "Patient Records Managed" },
      { value: "65%", label: "Wait Time Reduction" },
      { value: "0", label: "Critical Stockouts" },
    ],
    techTags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "REST APIs"],
    featured: true,
    serviceSlugs: ["software-engineering", "data-analytics", "digital-transformation"],
    solutionSlugs: ["healthcare"],
  },
  {
    slug: "pan-african-logistics-hub",
    title: "Pan-African Cross-Border Logistics Hub",
    category: "Supply Chain",
    filterCategory: "supply-chain",
    industry: "Cross-Border Trade",
    client: "Regional Freight Alliance",
    year: "2024",
    duration: "8 Months",
    tagline: "Customs document digitization, automated tariff calculations, and live border corridor tracking.",
    description: "Customs document automation, route calculation, and multi-currency tariff settlement platform operating across 5 West African commercial transit corridors.",
    challenge: "Complex cross-border customs paperwork caused 48–72 hour truck hold-ups at borders and high administrative compliance expenses.",
    solution: "Built a centralized web portal connecting freight forwarders, customs brokers, and transport fleets with automated document verification and multi-currency tax escrow.",
    impact: "Shortened border clearance delays by 70% and enabled 24/7 digital visibility across all 5 major transit corridors.",
    stats: [
      { value: "5", label: "Border Corridors" },
      { value: "70%", label: "Faster Customs Clearance" },
      { value: "24/7", label: "Live Telemetry" },
      { value: "$4.5M", label: "Monthly Transit Volume" },
    ],
    techTags: ["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL"],
    featured: false,
    serviceSlugs: ["software-engineering", "cloud-devops", "digital-transformation"],
    solutionSlugs: ["supply-chain", "fintech"],
  },
  {
    slug: "agritech-yield-portal",
    title: "AgriTech Yield & Distribution Portal",
    category: "AI & Data",
    filterCategory: "ai-data",
    industry: "Agriculture & Commodities",
    client: "Commodities Export Consortium",
    year: "2025",
    duration: "6 Months",
    tagline: "Satellite crop intelligence, weather telemetry, and automated mobile money farmer payout engine.",
    description: "Satellite imagery analysis combined with local weather telemetry and automated farmer payout management for cocoa and grain producer cooperatives.",
    challenge: "Lack of field-level yield forecasts led to inaccurate export forward contracts and delayed farmer harvest payments.",
    solution: "Developed machine learning predictive models correlating satellite vegetation indices with rainfall data, paired with a USSD/SMS harvest collection portal.",
    impact: "Boosted harvest yield forecast accuracy by 28% and enabled 100% digital instant payouts to 35,000+ registered smallholder farmers.",
    stats: [
      { value: "35k+", label: "Registered Smallholders" },
      { value: "28%", label: "Yield Prediction Boost" },
      { value: "100%", label: "Digital Payouts" },
      { value: "12", label: "Farming Districts" },
    ],
    techTags: ["Python", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
    featured: false,
    serviceSlugs: ["ai-intelligent-systems", "data-analytics", "software-engineering"],
    solutionSlugs: ["supply-chain", "fintech"],
  },
  {
    slug: "omnichannel-retail-core",
    title: "Omnichannel Commerce & POS Integration",
    category: "E-commerce",
    filterCategory: "ecommerce",
    industry: "Retail & Consumer",
    client: "Urban Retail Brands",
    year: "2024",
    duration: "4 Months",
    tagline: "Unified real-time inventory synchronization, mobile money POS, and omnichannel customer rewards.",
    description: "Unified stock synchronization, mobile money POS terminals, and customer loyalty rewards engine for an apparel and electronics retail chain with 40+ branch locations.",
    challenge: "Disconnected point-of-sale machines and e-commerce storefronts resulted in constant stock discrepancies and disjointed customer reward balances.",
    solution: "Created an event-driven inventory reconciliation engine linking in-store POS terminals, e-commerce storefronts, and warehouse dispatch systems in real time.",
    impact: "Achieved 99.99% real-time stock sync accuracy and boosted loyalty customer repeat order rate by 2.4x across 40+ stores.",
    stats: [
      { value: "40+", label: "Retail Stores" },
      { value: "99.99%", label: "Stock Sync Accuracy" },
      { value: "2.4x", label: "Loyalty Repeat Purchases" },
      { value: "<500ms", label: "POS Checkout Speed" },
    ],
    techTags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    featured: false,
    serviceSlugs: ["software-engineering", "cloud-devops"],
    solutionSlugs: ["ecommerce"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.serviceSlugs.includes(serviceSlug));
}

export function getProjectsBySolution(solutionSlug: string): Project[] {
  return projects.filter((p) => p.solutionSlugs.includes(solutionSlug));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
