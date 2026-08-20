/**
 * ByteForce Africa - Solutions Data Layer
 * Detailed specifications for all 5 industry solution verticals
 */

export interface SolutionSubCapability {
  title: string;
  shortDescription: string;
  points: string[];
}

export interface SolutionProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  iconName: "Building2" | "Truck" | "Activity" | "GraduationCap" | "ShoppingCart";
  features: string[];
  capabilities: string[];
  subCapabilities: SolutionSubCapability[];
  processSteps: SolutionProcessStep[];
  featuredCaseStudySlugs: string[];
  detailHref: string;
}

export const solutions: Solution[] = [
  {
    slug: "fintech",
    number: "01",
    name: "FinTech",
    shortDescription: "Digital lending, core banking, wallet infrastructure, and real-time payment integrations across Africa.",
    heroDescription: "Secure, compliant financial technology platforms that expand access, streamline payments, and power next-generation financial services.",
    iconName: "Building2",
    features: [
      "Real-time Settlement",
      "Bank-grade Security",
      "Multi-currency Support",
      "Regulatory Compliance",
    ],
    capabilities: [
      "Digital Lending Engines",
      "Payment Gateway Integration",
      "Core Banking Modernization",
      "Fraud Detection & Risk Scoring",
      "Agent Banking & Mobile Wallets",
    ],
    subCapabilities: [
      {
        title: "Digital Lending Engines",
        shortDescription: "Automated underwriting, loan origination, and automated mobile money disbursement platforms.",
        points: ["Alternative Credit Scoring", "Instant Mobile Disbursement", "Automated Repayment Deductions", "Delinquency Tracking"],
      },
      {
        title: "Payment Gateway Integration",
        shortDescription: "Seamless checkout connecting card networks, USSD, bank rails, and all regional mobile money providers.",
        points: ["Multi-Network Mobile Money", "Bank Rail & ACH Connectors", "Split Payments & Escrow", "Dynamic QR Code Invoicing"],
      },
      {
        title: "Core Banking Modernization",
        shortDescription: "Modular microservices architecture replacing rigid legacy core banking applications.",
        points: ["Real-time Ledger Balancing", "Multi-Currency Accounts", "Regulatory Audit Feeds", "API-First Architecture"],
      },
      {
        title: "Fraud Detection & Risk Scoring",
        shortDescription: "Machine-learning risk evaluation and behavioral fraud detection preventing transaction fraud in real time.",
        points: ["Real-time Transaction Flagging", "Device Fingerprinting", "KYC & Sanction List Checks", "Behavioral Anomaly Alarms"],
      },
      {
        title: "Agent Banking & Wallets",
        shortDescription: "Offline-capable POS and smartphone applications for rural agent networks and mobile wallets.",
        points: ["Agent Liquidity Management", "Low-Bandwidth Offline Mode", "Commission Calculation", "Biometric Authentication"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Assess & Compliance",
        description: "Reviewing regulatory frameworks, security requirements, and third-party payment partner specifications.",
      },
      {
        number: "02",
        title: "Security Architecture",
        description: "Designing PCI-DSS aligned data isolation, encryption keys, tokenized payment flows, and audit logs.",
      },
      {
        number: "03",
        title: "Integration & Build",
        description: "Engineering robust transactional microservices with idempotent state machines and fallback routing.",
      },
      {
        number: "04",
        title: "Stress Testing & Audits",
        description: "Simulating peak concurrency, penetration attempts, network dropouts, and regulatory reconciliation checks.",
      },
      {
        number: "05",
        title: "Regulated Launch & Scale",
        description: "Deploying with live telemetry, fraud monitoring dashboards, and 24/7 automated transaction alerts.",
      },
    ],
    featuredCaseStudySlugs: ["digital-lending-management", "supply-chain-intelligence", "pan-african-logistics-hub"],
    detailHref: "/solutions/fintech",
  },
  {
    slug: "supply-chain",
    number: "02",
    name: "Supply Chain",
    shortDescription: "End-to-end logistics visibility, warehouse management, and intelligent route optimization for distribution networks.",
    heroDescription: "Intelligent supply chain platforms connecting manufacturers, distributors, and logistics providers with real-time tracking and predictive analytics.",
    iconName: "Truck",
    features: [
      "Real-time Visibility",
      "Smarter Decisions",
      "Optimized Performance",
      "Built for Scale",
    ],
    capabilities: [
      "Fleet & Asset Tracking",
      "Warehouse Management (WMS)",
      "Demand Forecasting & Planning",
      "Vendor & Supplier Portal",
      "Route Optimization Engine",
    ],
    subCapabilities: [
      {
        title: "Fleet & Asset Tracking",
        shortDescription: "Live GPS telemetry, driver performance analytics, fuel consumption logs, and trip verification.",
        points: ["Sub-Minute GPS Updates", "Geo-Fencing & Route Alerts", "Fuel & Mileage Telemetry", "Offline Black-Box Recording"],
      },
      {
        title: "Warehouse Management (WMS)",
        shortDescription: "Barcode-driven inventory intake, bin-level tracking, and automated dispatch workflows.",
        points: ["Barcode & QR Scanning", "FIFO/FEFO Inventory Logic", "Automated Pick-and-Pack Lists", "Stock Discrepancy Alerts"],
      },
      {
        title: "Demand Forecasting & Planning",
        shortDescription: "Predictive algorithms forecasting seasonal inventory needs and preventing costly stockouts.",
        points: ["Historical Sales Analysis", "Reorder Point Triggers", "Lead-Time Buffering", "Regional Demand Heatmaps"],
      },
      {
        title: "Vendor & Supplier Portal",
        shortDescription: "Centralized web interface for purchase orders, shipping manifests, invoice approvals, and supplier ratings.",
        points: ["Digital PO Issuance", "Delivery ASN Tracking", "Automated Invoice Matching", "Supplier Performance Scorecards"],
      },
      {
        title: "Route Optimization Engine",
        shortDescription: "Dynamic dispatch algorithm factoring road quality, traffic bottlenecks, and cargo priority.",
        points: ["Multi-Stop Delivery Sequencing", "Turn-by-Turn Mobile App", "Proof-of-Delivery Capture", "Fuel & Toll Cost Minimization"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Assess & Map",
        description: "Mapping existing distribution nodes, fleet telemetry hardware, warehouse workflows, and bottleneck corridors.",
      },
      {
        number: "02",
        title: "Design & Protocol",
        description: "Establishing data ingestion protocols, offline fallback sync rules, and role-tailored dashboard wireframes.",
      },
      {
        number: "03",
        title: "Implement & Connect",
        description: "Deploying the core tracking backend, mobile driver apps, and warehouse scanning terminals in phased cohorts.",
      },
      {
        number: "04",
        title: "Optimize & Automate",
        description: "Activating route optimization algorithms, automated reorder triggers, and SLA violation warning systems.",
      },
      {
        number: "05",
        title: "Evolve & Scale",
        description: "Expanding connected fleet capacity, refining predictive demand accuracy, and onboarding cross-border partners.",
      },
    ],
    featuredCaseStudySlugs: ["supply-chain-intelligence", "pan-african-logistics-hub", "agritech-yield-portal"],
    detailHref: "/solutions/supply-chain",
  },
  {
    slug: "healthcare",
    number: "03",
    name: "Healthcare",
    shortDescription: "Digital health records, telemedicine platforms, clinic management systems, and medical supply tracking.",
    heroDescription: "Transforming healthcare delivery across African clinics, hospitals, and pharmacies with secure, connected digital health infrastructure.",
    iconName: "Activity",
    features: [
      "HIPAA/GDPR Aligned",
      "Offline-first Sync",
      "Interoperable EHR",
      "Clinical Workflows",
    ],
    capabilities: [
      "Electronic Health Records (EHR)",
      "Telemedicine & Video Triage",
      "Pharmacy & Inventory Control",
      "Lab & Diagnostic Integrations",
      "Patient Engagement Portals",
    ],
    subCapabilities: [
      {
        title: "Electronic Health Records (EHR)",
        shortDescription: "Secure, structured digital medical records accessible across clinic branches with sub-second lookups.",
        points: ["Encrypted Patient Histories", "Custom Clinical Templates", "Role-Based Doctor/Nurse Access", "Offline Sync for Remote Clinics"],
      },
      {
        title: "Telemedicine & Triage",
        shortDescription: "Low-bandwidth video consultations, SMS appointment reminders, and digital symptom checkers.",
        points: ["Adaptive Bitrate Video Calls", "Automated SMS/WhatsApp Alerts", "Pre-Consultation Questionnaires", "Digital Prescription Dispatch"],
      },
      {
        title: "Pharmacy & Inventory Control",
        shortDescription: "Barcode tracking for pharmaceutical stock, expiration date alerts, and automated reorder points.",
        points: ["Batch & Expiry Date Tracking", "Dispensing Audit Logs", "Drug Interaction Warnings", "Centralized Supplier Orders"],
      },
      {
        title: "Lab & Diagnostic Integrations",
        shortDescription: "Direct connectivity between laboratory test equipment, radiologist notes, and central patient charts.",
        points: ["Automated Result Ingestion", "PDF Diagnostic Reports", "Critical Value SMS Alerts", "Historical Lab Trend Graphs"],
      },
      {
        title: "Patient Engagement Portals",
        shortDescription: "Mobile-friendly web portals enabling patients to book appointments, review lab results, and pay clinic fees.",
        points: ["Online Appointment Booking", "Mobile Money Bill Pay", "Secure Result Downloads", "Health Education Tips"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Assess & Clinical Audit",
        description: "Reviewing outpatient clinic workflows, doctor consultation patterns, and diagnostic data silos.",
      },
      {
        number: "02",
        title: "Design for Privacy",
        description: "Structuring medical data compliance, end-to-end encryption standards, and user-friendly clinical UI.",
      },
      {
        number: "03",
        title: "Implement & Train",
        description: "Deploying clinic software, configuring pharmacy scanners, and conducting hands-on medical staff training.",
      },
      {
        number: "04",
        title: "Optimize Workflows",
        description: "Refining queue management algorithms, prescription turnaround times, and automated SMS reminders.",
      },
      {
        number: "05",
        title: "Evolve & Network",
        description: "Connecting additional branch clinics, integrating health insurance portals, and scaling telehealth coverage.",
      },
    ],
    featuredCaseStudySlugs: ["healthcare-operations", "supply-chain-intelligence", "digital-lending-management"],
    detailHref: "/solutions/healthcare",
  },
  {
    slug: "education",
    number: "04",
    name: "Education",
    shortDescription: "E-learning management systems, student information platforms, and automated assessment tools.",
    heroDescription: "Scalable educational technology platforms empowering schools, universities, and training institutes with interactive digital learning.",
    iconName: "GraduationCap",
    features: [
      "Low-bandwidth Optimization",
      "Automated Grading",
      "Interactive Assessments",
      "Student Analytics",
    ],
    capabilities: [
      "Learning Management Systems (LMS)",
      "Student Information Systems (SIS)",
      "Virtual Classrooms & Video",
      "Assessment & Examination Engines",
      "Institutional Analytics Dashboards",
    ],
    subCapabilities: [
      {
        title: "Learning Management Systems (LMS)",
        shortDescription: "Interactive course delivery, downloadable offline lesson modules, and modular syllabus tracking.",
        points: ["Modular Course Builders", "Offline-Downloadable Lessons", "Discussion Forums & Messaging", "Certification Generation"],
      },
      {
        title: "Student Information Systems (SIS)",
        shortDescription: "Centralized admissions, gradebooks, attendance monitoring, and parent notification portals.",
        points: ["Digital Enrollment & Records", "Automated Grade Calculations", "SMS Attendance Alerts to Parents", "Tuition Fee Billing & Receipts"],
      },
      {
        title: "Virtual Classrooms & Video",
        shortDescription: "Bandwidth-optimized live lecture streaming, screen sharing, and recorded lecture archives.",
        points: ["Low-Data Video Streaming", "Interactive Whiteboards", "Recorded Session Repositories", "In-Class Polls & Quizzes"],
      },
      {
        title: "Assessment & Exam Engines",
        shortDescription: "Secure timed online exams with randomized question banks, anti-cheating controls, and automated grading.",
        points: ["Randomized Question Banks", "Automated Multiple Choice Grading", "Plagiarism & Integrity Checks", "Instant Student Scorecards"],
      },
      {
        title: "Institutional Analytics",
        shortDescription: "Real-time dashboards for university administrators tracking graduation rates, student engagement, and retention.",
        points: ["At-Risk Student Indicators", "Faculty Performance Telemetry", "Course Completion Metrics", "Accreditation Reporting Feeds"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Assess & Curriculum Mapping",
        description: "Understanding institutional academic structures, student device access constraints, and curriculum goals.",
      },
      {
        number: "02",
        title: "Design for Accessibility",
        description: "Optimizing UI for mobile screens, low-bandwidth data speeds, and clear typography hierarchy.",
      },
      {
        number: "03",
        title: "Implement & Migrate",
        description: "Migrating historical student records, configuring LMS course structures, and conducting faculty onboarding.",
      },
      {
        number: "04",
        title: "Optimize Engagement",
        description: "Activating interactive assessments, automated grading pipelines, and mobile money fee payment portals.",
      },
      {
        number: "05",
        title: "Evolve & Expand",
        description: "Adding AI study assistants, advanced learning analytics, and expanding multi-campus institutional support.",
      },
    ],
    featuredCaseStudySlugs: ["digital-lending-management", "healthcare-operations", "agritech-yield-portal"],
    detailHref: "/solutions/education",
  },
  {
    slug: "ecommerce",
    number: "05",
    name: "E-commerce",
    shortDescription: "High-conversion commerce platforms, multi-vendor marketplaces, and omnichannel retail inventory solutions.",
    heroDescription: "Fast, localized e-commerce solutions supporting mobile money, localized checkout, and automated fulfillment across African markets.",
    iconName: "ShoppingCart",
    features: [
      "Mobile Money Checkout",
      "High Peak Concurrency",
      "Automated Dispatch",
      "Omnichannel Inventory",
    ],
    capabilities: [
      "Multi-Vendor Marketplaces",
      "Mobile Money & Card Checkout",
      "Inventory & Order Orchestration",
      "Customer Loyalty & Rewards",
      "Drop-shipping & Courier APIs",
    ],
    subCapabilities: [
      {
        title: "Multi-Vendor Marketplaces",
        shortDescription: "Scalable marketplace platforms supporting seller onboarding, product catalogs, and automated commission payouts.",
        points: ["Seller Onboarding Portals", "Automated Commission Splits", "Storefront Customization", "Unified Product Catalogs"],
      },
      {
        title: "Mobile Money & Card Checkout",
        shortDescription: "One-click checkout optimized for MTN MoMo, Telecel Cash, AirtelTigo, and international credit cards.",
        points: ["Instant MoMo Prompts", "Card Tokenization & 3DS", "Cash on Delivery OTP Verification", "Cart Abandonment Recovery SMS"],
      },
      {
        title: "Inventory & Order Orchestration",
        shortDescription: "Real-time stock synchronization across web stores, physical retail branches, and distribution centers.",
        points: ["Real-Time Branch Stock Sync", "Automated Packing Slips", "Split-Shipment Routing", "Return & Refund Workflows"],
      },
      {
        title: "Customer Loyalty & Rewards",
        shortDescription: "Integrated reward points, tier-based VIP discounts, and automated referral programs driving repeat purchases.",
        points: ["Points Earning & Redemption", "Referral Cashbacks", "Tier-Based VIP Perks", "Personalized SMS Coupon Drops"],
      },
      {
        title: "Courier & Logistics APIs",
        shortDescription: "Direct connectivity with local delivery dispatchers, motorcycle couriers, and cross-border express freight.",
        points: ["Automated Courier Waybills", "Live Rider Tracking for Customers", "Zone-Based Shipping Rates", "Proof-of-Delivery Signatures"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Assess & Market Architecture",
        description: "Evaluating target buyer demographics, payment preferences, logistics corridors, and catalog complexity.",
      },
      {
        number: "02",
        title: "Design for Conversion",
        description: "Crafting lightning-fast mobile product pages, streamlined checkout funnels, and clear trust badges.",
      },
      {
        number: "03",
        title: "Implement & Integrate",
        description: "Connecting mobile money gateways, inventory databases, courier dispatch APIs, and marketing automation.",
      },
      {
        number: "04",
        title: "Optimize Speed & UX",
        description: "Load testing for high-traffic flash sales, optimizing image delivery, and fine-tuning cart conversion funnels.",
      },
      {
        number: "05",
        title: "Evolve & Scale",
        description: "Deploying personalized recommendation algorithms, loyalty systems, and multi-country regional store views.",
      },
    ],
    featuredCaseStudySlugs: ["omnichannel-retail-core", "supply-chain-intelligence", "pan-african-logistics-hub"],
    detailHref: "/solutions/ecommerce",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
