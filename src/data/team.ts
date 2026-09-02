/**
 * ByteForce Global - Leadership & Team Data Layer
 * 
 * PLACEHOLDER CONTENT — replace with real team before launch
 * This file serves client-presentation purposes to showcase the team grid on the About page.
 */

export interface TeamMember {
  name: string;
  title: string;
  department: string;
  bio: string;
  initials: string;
  linkedin: string;
  twitter: string;
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Emmanuel Mensah",
    title: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    bio: "Technology entrepreneur and systems strategist passionate about building mission-critical digital infrastructure for high-growth African enterprises.",
    initials: "EM",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: true,
  },
  {
    name: "Kofi Boateng",
    title: "Chief Technology Officer & Lead Architect",
    department: "Engineering",
    bio: "12+ years designing distributed systems, high-concurrency fintech engines, and offline-resilient enterprise platforms across Sub-Saharan Africa.",
    initials: "KB",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: true,
  },
  {
    name: "Abena Osei",
    title: "Head of AI & Data Science",
    department: "AI & Data",
    bio: "Specializing in statistical machine learning, alternative credit scoring algorithms, and satellite computer vision pipelines.",
    initials: "AO",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: true,
  },
  {
    name: "Farouk Bello",
    title: "VP of Digital Solutions & Delivery",
    department: "Client Solutions",
    bio: "Enterprise program director leading large-scale digital transformation and supply chain telemetry integrations across 6 countries.",
    initials: "FB",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: true,
  },
  {
    name: "Nia Mensah",
    title: "Head of Product Design (UI/UX)",
    department: "Design & UX",
    bio: "Pioneering user research and low-bandwidth interaction paradigms that make complex enterprise tools effortless to use.",
    initials: "NM",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: false,
  },
  {
    name: "Dr. Amina Diallo",
    title: "Lead HealthTech & Public Sector Architect",
    department: "Domain Solutions",
    bio: "Clinical systems specialist driving digital hospital management, interoperable EHR pipelines, and telemedicine platforms.",
    initials: "AD",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: false,
  },
  {
    name: "Kwame Asante",
    title: "Principal Cloud & Reliability Engineer",
    department: "DevOps & Infrastructure",
    bio: "DevOps automation, Terraform IaC, multi-region load balancing, and 99.99% uptime engineering for transaction-heavy platforms.",
    initials: "KA",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: false,
  },
  {
    name: "Yaa Antwi",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    bio: "Expert in TypeScript, Next.js, and high-performance mobile-first frontend architectures for emerging market users.",
    initials: "YA",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    featured: false,
  },
];
