/**
 * ByteForce Africa - Services Data Layer
 * Detailed specifications for all 5 core service offerings
 */

export interface ServiceSubCapability {
  title: string;
  shortDescription: string;
  points: string[];
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  iconName: "Code2" | "Sparkles" | "BarChart3" | "Layers" | "Cloud";
  badges: string[];
  capabilities: string[];
  subCapabilities: ServiceSubCapability[];
  processSteps: ServiceProcessStep[];
  featuredCaseStudySlugs: string[];
  detailHref: string;
}

export const services: Service[] = [
  {
    slug: "software-engineering",
    number: "01",
    name: "Software Engineering",
    shortDescription: "Custom software solutions that are secure, scalable and built to solve real business problems.",
    heroDescription: "We build robust, scalable and user-centric software solutions tailored to your business goals. From web and mobile applications to enterprise systems and APIs.",
    iconName: "Code2",
    badges: ["Scalable Architecture", "Clean Code", "Security by Design"],
    capabilities: [
      "Web Applications",
      "Enterprise Systems",
      "APIs & Integrations",
      "SaaS Platforms",
      "Custom Platforms",
    ],
    subCapabilities: [
      {
        title: "Web Applications",
        shortDescription: "High-performance, responsive web applications built with modern frontend frameworks and clean design.",
        points: ["Responsive Single Page Apps", "Progressive Web Applications (PWA)", "High-conversion User Interfaces", "SEO & Performance Optimized"],
      },
      {
        title: "Enterprise Systems",
        shortDescription: "Mission-critical internal tooling, resource planning, and operational dashboards that streamline business operations.",
        points: ["Role-Based Access Control", "Complex Workflow Automation", "Legacy System Migration", "Real-Time Telemetry & Auditing"],
      },
      {
        title: "APIs & Integrations",
        shortDescription: "Robust, secure REST and GraphQL APIs connecting payment systems, telecom gateways, and third-party services.",
        points: ["Telecom & Mobile Money APIs", "Banking Gateway Connectors", "Secure Webhooks & Rate Limiting", "Comprehensive API Documentation"],
      },
      {
        title: "SaaS Platforms",
        shortDescription: "Multi-tenant cloud platforms designed for rapid feature iteration, subscription billing, and enterprise security.",
        points: ["Multi-Tenant Architecture", "Automated Billing & Subscriptions", "Self-Service Onboarding", "Usage Analytics & Reporting"],
      },
      {
        title: "Custom Platforms",
        shortDescription: "Bespoke digital products designed from the ground up to solve unique industry challenges in emerging markets.",
        points: ["Low-Bandwidth Optimization", "Offline-First Synchronization", "Multi-Language & Localization", "Scalable Modular Architecture"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Architecture",
        description: "We map out your business objectives, data requirements, and technical constraints to establish a resilient system blueprint.",
      },
      {
        number: "02",
        title: "UI/UX & Prototype",
        description: "Interactive wireframes and high-fidelity clickable mockups validated with real end-users before writing production code.",
      },
      {
        number: "03",
        title: "Agile Engineering",
        description: "Sprint-driven modular development with strict TypeScript typing, clean code standards, and regular client demo syncs.",
      },
      {
        number: "04",
        title: "Testing & Quality Assurance",
        description: "End-to-end automated testing, vulnerability scanning, penetration checks, and performance load profiling under peak stress.",
      },
      {
        number: "05",
        title: "Deployment & Scaling",
        description: "Zero-downtime deployment, automated CI/CD pipelines, live monitoring, and ongoing support for continuous evolution.",
      },
    ],
    featuredCaseStudySlugs: ["supply-chain-intelligence", "digital-lending-management", "healthcare-operations"],
    detailHref: "/services/software-engineering",
  },
  {
    slug: "ai-intelligent-systems",
    number: "02",
    name: "AI & Intelligent Systems",
    shortDescription: "We harness AI and machine learning to unlock insights, automate processes and create intelligent solutions.",
    heroDescription: "From predictive algorithms to intelligent workflows, we build AI solutions that transform data into automated competitive advantage.",
    iconName: "Sparkles",
    badges: ["High-Accuracy Models", "Real-Time Inference", "Ethical AI Standards"],
    capabilities: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Process Automation",
      "Computer Vision",
      "Predictive Modeling",
    ],
    subCapabilities: [
      {
        title: "Machine Learning Models",
        shortDescription: "Custom statistical and neural models trained on proprietary domain datasets to automate high-stakes decisions.",
        points: ["Credit Risk Scoring", "Customer Churn Prediction", "Demand & Yield Forecasting", "Anomaly & Fraud Detection"],
      },
      {
        title: "Natural Language Processing",
        shortDescription: "Intelligent document processing, multilingual chatbots, and sentiment classification tailored for African dialects and languages.",
        points: ["Multilingual Chatbots", "Automated Invoice & Document Parsing", "Customer Sentiment Analysis", "Voice & Audio Transcription"],
      },
      {
        title: "Process Automation",
        shortDescription: "End-to-end intelligent automation that replaces repetitive administrative bottlenecks with smart bots.",
        points: ["Intelligent RPA Bots", "Automated Reconciliation", "Approval Workflow Routing", "Error Trapping & Auto-Correction"],
      },
      {
        title: "Computer Vision",
        shortDescription: "Visual recognition systems for identity verification, crop health diagnosis, and automated warehouse barcode scanning.",
        points: ["ID & KYC Verification", "Visual Quality Inspection", "Satellite Crop Monitoring", "Facial & Biometric Auth"],
      },
      {
        title: "Predictive Analytics",
        shortDescription: "Forward-looking intelligence platforms that help executive teams forecast market shifts and operational bottlenecks.",
        points: ["Trend & Seasonality Analysis", "Real-Time Metric Projections", "Scenario Simulation Engines", "Executive Intelligence Reports"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Data Audit & Feasibility",
        description: "We audit existing datasets, evaluate data hygiene, and assess the feasibility of custom ML models against real business metrics.",
      },
      {
        number: "02",
        title: "Model Research & Prototyping",
        description: "Rapid experimentation with diverse algorithmic architectures, feature engineering, and baseline benchmarking.",
      },
      {
        number: "03",
        title: "Training & Optimization",
        description: "Rigorous model training, hyperparameter tuning, cross-validation, and bias mitigation for dependable real-world output.",
      },
      {
        number: "04",
        title: "Integration & API Deployment",
        description: "Wrapping models in low-latency REST/gRPC endpoints that connect seamlessly with your operational business software.",
      },
      {
        number: "05",
        title: "Monitoring & Retraining",
        description: "Continuous telemetry tracking model drift, latency, and prediction confidence with automated retraining triggers.",
      },
    ],
    featuredCaseStudySlugs: ["agritech-yield-portal", "digital-lending-management", "supply-chain-intelligence"],
    detailHref: "/services/ai-intelligent-systems",
  },
  {
    slug: "data-analytics",
    number: "03",
    name: "Data & Analytics",
    shortDescription: "Transform your data into actionable insights that drive growth and improve decision-making.",
    heroDescription: "Modern data warehousing, automated ETL pipelines, and real-time executive dashboards that give your team clarity and leverage.",
    iconName: "BarChart3",
    badges: ["Single Source of Truth", "Sub-Second Queries", "Automated Governance"],
    capabilities: [
      "Data Warehousing",
      "Business Intelligence",
      "Pipeline Engineering",
      "Predictive Analytics",
      "Real-time Dashboards",
    ],
    subCapabilities: [
      {
        title: "Data Warehousing",
        shortDescription: "Scalable centralized analytical databases structuring messy transactional logs into fast queryable schemas.",
        points: ["Star & Snowflake Schemas", "Columnar Data Storage", "Partitioning & Index Tuning", "Multi-Source Data Ingestion"],
      },
      {
        title: "Business Intelligence",
        shortDescription: "Custom executive BI reporting suites giving decision makers instant visibility into revenue, margins, and churn.",
        points: ["Executive KPI Cockpits", "Cohort Retention Reports", "Automated PDF/Slack Digest Delivery", "Self-Serve Ad-Hoc Querying"],
      },
      {
        title: "Pipeline Engineering",
        shortDescription: "Fault-tolerant ETL and ELT data pipelines streaming millions of daily transactions with zero data loss.",
        points: ["Batch & Real-Time Streaming", "Automated Schema Validation", "Dead-Letter Queue Handling", "Idempotent Data Syncs"],
      },
      {
        title: "Predictive Analytics",
        shortDescription: "Statistical models forecasting cash flow, supply requirements, and customer lifetime value.",
        points: ["Lifetime Value Modeling", "Inventory Depletion Forecasts", "Price Elasticity Testing", "Seasonal Demand Modeling"],
      },
      {
        title: "Real-time Dashboards",
        shortDescription: "Sub-second live operational monitoring screens for logistics fleets, fintech transactions, and medical facilities.",
        points: ["WebSocket Live Streaming", "Geospatial Heatmaps", "Real-Time Threshold Alerts", "Mobile-Optimized Dashboards"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Source Audit & Schema Design",
        description: "Cataloging all existing data silos, transactional DBs, third-party APIs, and defining standard analytical schemas.",
      },
      {
        number: "02",
        title: "ETL Pipeline Engineering",
        description: "Building resilient ingestion pipelines that extract, cleanse, transform, and load data into structured warehouses.",
      },
      {
        number: "03",
        title: "Data Modeling & Aggregation",
        description: "Constructing business-logic data marts and analytical cubes optimized for high-speed reporting queries.",
      },
      {
        number: "04",
        title: "Dashboard & Visualization",
        description: "Designing intuitive, role-tailored dashboards and metric alerts for leadership, operations, and finance teams.",
      },
      {
        number: "05",
        title: "Data Governance & Training",
        description: "Establishing access controls, audit logs, data lineage, and training internal stakeholders for self-serve analytics.",
      },
    ],
    featuredCaseStudySlugs: ["supply-chain-intelligence", "healthcare-operations", "digital-lending-management"],
    detailHref: "/services/data-analytics",
  },
  {
    slug: "digital-transformation",
    number: "04",
    name: "Digital Transformation",
    shortDescription: "Modernize your operations and build future-ready organizations with digital strategies and solutions.",
    heroDescription: "End-to-end modernization of legacy systems, digital workflow adoption, and technology strategy for scaling African enterprises.",
    iconName: "Layers",
    badges: ["Zero Downtime Migration", "Operational Velocity", "Future-Ready Architecture"],
    capabilities: [
      "Legacy Modernization",
      "Workflow Automation",
      "Cloud Migration Strategy",
      "Tech Stack Audits",
      "Change Management",
    ],
    subCapabilities: [
      {
        title: "Legacy Modernization",
        shortDescription: "Incrementally refactoring outdated monolithic legacy systems into clean, modular, API-first architectures.",
        points: ["Strangler Fig Pattern Migration", "Monolith to Microservices", "Database Schema Modernization", "Zero-Disruption Cutover"],
      },
      {
        title: "Workflow Automation",
        shortDescription: "Eliminating paper approvals, manual spreadsheets, and email chains with streamlined digital workflows.",
        points: ["Digital Form Builders", "Automated Approval Matrices", "Document Signing Integration", "Real-Time Status Tracking"],
      },
      {
        title: "Cloud Migration Strategy",
        shortDescription: "Strategic roadmap for transitioning on-premise servers to modern, cost-efficient cloud environments.",
        points: ["TCO & Cost Analysis", "Security & Compliance Audits", "Data Migration Scripts", "Disaster Recovery Planning"],
      },
      {
        title: "Tech Stack Audits",
        shortDescription: "Comprehensive technical audits pinpointing architecture bottlenecks, security vulnerabilities, and technical debt.",
        points: ["Codebase Quality Review", "Infrastructure Cost Optimization", "Security Assessment", "Scalability Roadmap"],
      },
      {
        title: "Change Management",
        shortDescription: "Hands-on team training and change management protocols to ensure rapid adoption of new digital tools.",
        points: ["Interactive Staff Workshops", "SOP & Documentation Handbooks", "Feedback Loops & Iteration", "Long-Term Technical Mentorship"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Operational Audit",
        description: "In-depth review of existing workflows, software bottlenecks, manual pain points, and organizational goals.",
      },
      {
        number: "02",
        title: "Transformation Blueprint",
        description: "Delivering a phased, low-risk digital modernization roadmap with clear milestones, ROI targets, and budget estimates.",
      },
      {
        number: "03",
        title: "Phased Implementation",
        description: "Executing system modernizations in decoupled sprints to ensure continuous business continuity and immediate wins.",
      },
      {
        number: "04",
        title: "Team Enablement & Training",
        description: "Equipping your internal staff and leadership with hands-on training, video walkthroughs, and standard operating procedures.",
      },
      {
        number: "05",
        title: "Continuous Value Optimization",
        description: "Tracking adoption metrics, gathering end-user feedback, and iterating features for sustained competitive advantage.",
      },
    ],
    featuredCaseStudySlugs: ["digital-lending-management", "pan-african-logistics-hub", "healthcare-operations"],
    detailHref: "/services/digital-transformation",
  },
  {
    slug: "cloud-devops",
    number: "05",
    name: "Cloud & DevOps",
    shortDescription: "Build, deploy and scale applications with secure, reliable and cost-effective cloud solutions.",
    heroDescription: "Infrastructure as Code, bulletproof CI/CD pipelines, container orchestration, and 24/7 cloud reliability engineering.",
    iconName: "Cloud",
    badges: ["99.99% Uptime SLA", "Automated CI/CD", "Cost Optimization"],
    capabilities: [
      "Cloud Architecture",
      "CI/CD Automation",
      "Infrastructure as Code",
      "Security & Compliance",
      "Performance Tuning",
    ],
    subCapabilities: [
      {
        title: "Cloud Architecture",
        shortDescription: "Designing resilient, highly available server architectures tailored for high traffic and localized latency.",
        points: ["Multi-Region Redundancy", "Load Balancer Optimization", "Edge Caching & CDNs", "Auto-Scaling Groups"],
      },
      {
        title: "CI/CD Automation",
        shortDescription: "Automated test-and-deploy pipelines that take code from pull request to production in minutes with zero downtime.",
        points: ["GitHub Actions Workflows", "Automated Regression Testing", "Blue-Green Deployments", "Instant Rollback Controls"],
      },
      {
        title: "Infrastructure as Code",
        shortDescription: "Version-controlled, reproducible infrastructure definitions that eliminate configuration drift and human error.",
        points: ["Terraform & CloudFormation", "Environment Parity (Dev/Staging/Prod)", "Automated Provisioning", "Immutable Infrastructure"],
      },
      {
        title: "Security & Compliance",
        shortDescription: "Hardened firewall rules, secrets management, encryption at rest and in transit, and continuous compliance checks.",
        points: ["Secrets Vault Integration", "TLS/SSL Automation", "Vulnerability Scanning", "DDoS Protection & WAF"],
      },
      {
        title: "Performance Tuning",
        shortDescription: "Database query optimization, server resource sizing, and caching layers that reduce cloud costs while accelerating speed.",
        points: ["Resource Rightsizing", "Database Connection Pooling", "Query Execution Profiling", "24/7 APM & Log Telemetry"],
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Infrastructure Assessment",
        description: "Analyzing current hosting configurations, uptime history, monthly expenditure, and security posture.",
      },
      {
        number: "02",
        title: "Architecture Blueprint",
        description: "Designing a modular, scalable cloud topology with automated failover, load balancing, and secure VPC networks.",
      },
      {
        number: "03",
        title: "IaC & Pipeline Setup",
        description: "Codifying all server resources into reproducible scripts and establishing automated CI/CD deployment pipelines.",
      },
      {
        number: "04",
        title: "Security Hardening & Testing",
        description: "Running automated penetration tests, vulnerability audits, failover drills, and configuring alert telemetry.",
      },
      {
        number: "05",
        title: "24/7 Monitoring & Optimization",
        description: "Real-time uptime tracking, automated cost anomaly alerts, and regular performance tuning audits.",
      },
    ],
    featuredCaseStudySlugs: ["pan-african-logistics-hub", "omnichannel-retail-core", "supply-chain-intelligence"],
    detailHref: "/services/cloud-devops",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
