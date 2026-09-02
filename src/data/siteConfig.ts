/**
 * ByteForce Global - Global Site Configuration
 * Central source of truth for sitewide constants, branding, and contact details
 */

export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  fullTagline: string;
  url: string;
  contact: {
    location: string;
    address: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    hours: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
  stats: {
    projectsDelivered: string;
    happyClients: string;
    yearsOfImpact: string;
    countriesCovered: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "ByteForce Global",
  shortName: "ByteForce",
  tagline: "Technology built for Africa's next chapter.",
  // Canonical tagline locked per Section 3.2
  fullTagline: "We build technology that drives efficiency, growth and impact for businesses across Africa and beyond.",
  url: "https://byteforce.global",
  contact: {
    location: "Accra, Ghana",
    address: "Airport Residential Area, Accra, Ghana",
    email: "hello@byteforce.global",
    phone: "+233591234567",
    phoneFormatted: "+233 59 123 4567",
    hours: "Monday – Friday: 8:00 AM – 6:00 PM GMT",
  },
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    github: "https://github.com",
  },
  stats: {
    projectsDelivered: "30+",
    happyClients: "20+",
    yearsOfImpact: "2+",
    countriesCovered: "8",
  },
};
