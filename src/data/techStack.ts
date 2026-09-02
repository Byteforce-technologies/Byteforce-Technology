/**
 * ByteForce Global - Tech Stack Directory
 * 
 * NOTE: This file represents demonstrated engineering capabilities and technologies
 * utilized across client solutions. It does not imply that every technology is used
 * in this client-presentation static build. AWS, MongoDB, and Docker are explicitly excluded this phase.
 */

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "language" | "database" | "api" | "tooling";
  featured?: boolean;
}

export const techStack: TechItem[] = [
  { name: "React", category: "frontend", featured: true },
  { name: "Next.js", category: "frontend", featured: true },
  { name: "TypeScript", category: "language", featured: true },
  { name: "Node.js", category: "backend", featured: true },
  { name: "Python", category: "language", featured: true },
  { name: "PostgreSQL", category: "database", featured: true },
  { name: "Tailwind CSS", category: "frontend", featured: true },
  { name: "REST APIs", category: "api", featured: true },
  { name: "GraphQL", category: "api", featured: true },
  { name: "Git", category: "tooling", featured: true },
];

export const techBadgeList = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "Git",
];
