# ByteForce Africa — Website Build Instructions

## 0. Project Context & Phase

This is **Phase One** of the ByteForce Africa website: a client-presentation build. The goal is a polished, fully-clickable, production-quality-looking site to show prospective clients — not a fully production-hardened system.

- **Content is placeholder.** Team names, headshots, testimonial stats, case study numbers, blog articles/authors, and legal copy are all placeholders for now. Build them as clearly swappable data (see Section 5), not hardcoded strings buried in JSX.
- **There is no backend yet.** No database, no auth, no real email delivery. Do not over-engineer infrastructure for this phase — a JSON-file data layer is correct and sufficient. Backend/DB (MongoDB, if ever needed) comes later, only if needed.
- **Design and interaction quality should be real.** Even though content is placeholder, the design system, components, responsiveness, and polish should be built to the standard of a real launch — because this is what closes clients.

### Tech Stack (locked)
- **Framework:** React + Next.js (App Router)
- **Data:** Local JSON files (no database this phase)
- **Styling:** Tailwind CSS (or equivalent utility-first approach) — implementer's choice, but must support the design tokens in Section 2 cleanly
- **Deployment:** Vercel
- **Explicitly excluded this phase:** AWS, MongoDB, Docker

### Mockup Reference Files
All mockups live in `/mockups/`:
```
brand-logo-mark.png                              — canonical logo (see Section 2.5)
mockup-home.png
mockup-about.png
mockup-services-index.png
mockup-services-single-software-engineering.png  — TEMPLATE for all 5 service detail pages
mockup-solutions-index.png
mockup-solutions-single-supply-chain.png         — TEMPLATE for all 5 solution detail pages
mockup-work.png
mockup-insights.png
mockup-contact.png
```

---

## 1. Build Order

Build in this sequence. Do not build Home first — it reuses components established by other sections and will cause drift if built before the shared system exists.

1. **Design tokens** (Section 2) — colors, type, spacing as a central config (e.g. `tailwind.config` theme or a `tokens.ts`)
2. **Shared components** (Section 3) — Navbar, Footer, CTA Banner shell, Globe/Africa SVG component, Service/Solution Card (hybrid hover)
3. **Data layer** (Section 5) — JSON schemas and placeholder data files
4. **Pages, in this order:**
   - Services index → Single Service template
   - Solutions index → Single Solution template
   - Work
   - About
   - Contact
   - Insights
   - Home (last — it pulls pieces from every other page)
5. **Global polish pass** — favicon, meta, 404, QA checklist (Section 6)

---

## 2. Design System

### 2.1 Colors
Extract exact hex values from the mockups during implementation; the system is:
- **Primary blue** — the bright electric/gradient blue used in buttons, links, icons, active states (matches the logo's blue gradient)
- **Deep navy** — used for dark sections (values band, CTA banners, footer, service-page hero on `mockup-services-single-software-engineering.png`)
- **Neutral grays** — body text, muted labels, borders, card backgrounds
- **White** — primary page background
- Maintain a **gradient variant** of the primary blue (cyan → blue) for the logo mark and hero globe accents, matching `brand-logo-mark.png`

### 2.2 Typography
- One heading typeface, one body typeface (match mockups — clean modern sans-serif, e.g. Inter or similar)
- Establish a type scale: hero H1, section H2, card H3, body, small/label (the "eyebrow" uppercase labels like "OUR SERVICES", "SOLUTION", "INSIGHTS" used above every page's main heading)
- Headings frequently use a **two-tone treatment**: mostly dark text with the final word(s) in primary blue (e.g. "Built for **impact**.") — build this as a reusable pattern, not one-off markup per page

### 2.3 Spacing & Layout
- Consistent max content width / container, consistent section vertical padding
- Card grid patterns: 3-column (Services index, Solutions index), 2–4 column (footer, stats)
- Rounded corners on cards and the CTA banner (larger radius on the CTA banner specifically — it reads as a distinct "pill/soft rectangle" shape, not a standard card)

### 2.4 Buttons
- **Primary:** filled blue, white text, arrow icon suffix (e.g. "Start a Project →")
- **Secondary:** outline/ghost, dark text or white text depending on background, used alongside primary in heroes (e.g. "See Our Work")
- Both need hover states (slight darken/lighten + subtle transform is acceptable)

### 2.5 Logo
- **Canonical logo asset is `brand-logo-mark.png`** — the gradient teardrop/circle mark with the white "b". This is the real brand mark.
- Every mockup's header shows a **flat, simplified placeholder circle logo** — this was a limitation of the mockup generation tool, not the intended design.
- **Build the navbar logo using `brand-logo-mark.png`** (or a clean SVG recreation of it) paired with the "ByteForce AFRICA" wordmark, replacing the flat circle shown in every header screenshot.
- Logo must be clickable and route to Home on every page.
- Generate the favicon from `brand-logo-mark.png`, not a generic icon.

### 2.6 Globe / Africa Motif Component
Build **one reusable component**, not five separate images, used with different props across the site.

- Implementation: flat **SVG dot-map** approach (using a world map / Africa-focused coordinate dataset — e.g. derived from `world-atlas`/`topojson`), styled in brand blue gradient dots.
- **Exception:** the Home page hero may use a more elaborate/animated treatment (e.g. a library like `react-globe.gl` for a rotating 3D globe with connection arcs) since it's the signature first-impression moment. All other placements (About hero, Services hero, Solutions hero, Work hero, Contact hero, CTA banner backgrounds) use the lighter flat SVG version for performance.
- Component should accept props for: crop/focus (full globe vs. Africa-silhouette-only), size, opacity, and whether connection-line/pulse animation is enabled.
- Reference all mockups showing this motif for general styling direction (dot density, color, glow) — do not treat any single mockup's globe as pixel-exact, since each was independently AI-generated and none is a real source asset.

---

## 3. Shared Components

### 3.1 Navbar
- Light background on all pages (do not use the dark-navbar variant seen in the rejected service-page mockup)
- Left: clickable logo (Section 2.5). Center/left-of-center: nav links — **Services, Solutions, Work, About, Insights** (this order is consistent across all mockups). Right: **Let's Talk** primary button, routes to Contact page.
- Services and Solutions are dropdowns (chevron indicator in mockups) — dropdown reveals the 5 service/solution categories as quick links to their single-page templates.
- Active page indicated by underline/color on the current nav item.
- **Mobile:** hamburger menu collapsing all nav links + Let's Talk button into a mobile drawer/overlay. Must be fully functional, not decorative.

### 3.2 Footer
Four-column layout + brand column, consistent on every page:

- **Brand column:** logo, tagline, social icons (LinkedIn, X/Twitter, GitHub)
  - **Canonical tagline (locked):** *"We build technology that drives efficiency, growth and impact for businesses across Africa and beyond."*
- **Services column:** Software Engineering, AI & Intelligent Systems, Data & Analytics, Digital Transformation, Cloud & DevOps
- **Solutions column:** FinTech, Supply Chain, Healthcare, Education, E-commerce
- **Company column:** About Us, **Our Team** (not "Our Approach"), Careers, Blog, Contact
- **Contact column, in this order:** Location (Accra, Ghana) → Email (hello@byteforce.africa) → Phone (+233 59 123 4567)
- Bottom bar: `© {current year} ByteForce Africa. All rights reserved.` (compute year dynamically, don't hardcode) + Privacy Policy / Terms of Service links (placeholder legal pages, see Section 6)
- Phone number and email must be clickable (`tel:` / `mailto:`)

### 3.3 CTA Banner (shared shell)
- Reusable component: deep blue background (solid or gradient), rounded corners, large Africa-silhouette watermark graphic (Section 2.6) bleeding off the right edge, small uppercase eyebrow label, heading with blue-highlighted word, optional subtext, one primary button (white fill).
- **Shell/structure is identical everywhere; heading, subtext, and button label/link change per page** (e.g. Home: "Let's build what's next, together" / Contact: "Have a challenge worth solving?"). Build as one component taking `eyebrow`, `heading`, `highlightWord`, `subtext`, `buttonLabel`, `buttonHref` props.
- Sits **above** the footer, is not part of the footer.

### 3.4 Service/Solution Card — Hybrid Hover Interaction
Applies to the 5 cards on both the Services index and Solutions index pages.

- **Default state:** standard grid card — number, icon, title, short description, "Explore Service →" link.
- **On hover (desktop):** card flips (or cross-fades) to a **quick preview** — headline + a one-line teaser + "View Full Service" prompt. This is a lightweight preview, not the full detail content.
- **On click/tap:** opens the **full detail panel** (matches the content shown in the 6th-slot panel in `mockup-services-index.png` — description, "What We Do" checklist, "View Full Service" button linking to that service's single-page template). Panel can render inline (e.g. in the grid's 6th slot / below the grid) or as a modal — implementer's choice, but must include a visible close/back control.
- **Mobile/touch fallback:** since there's no hover on touch devices, tapping a card should go straight to either the preview or directly to the full detail panel (skip the hover-preview step entirely on touch — go straight to click behavior).
- **Accessibility:** this interaction must be keyboard-operable. Cards need `tabindex`/focus states, and Enter/Space should trigger the same reveal as click (not require hover). Do not ship a hover-only interaction with no keyboard equivalent.

---

## 4. Page Specifications

Each page assumes shared components from Section 3 already exist. Only unique-to-this-page content is described below. Reference the named mockup file for layout/copy; do not deviate from established copy/taglines/stats that already appear consistently across multiple mockups (e.g. Work page case study names/numbers are the single source of truth — reuse them verbatim wherever else they're referenced, such as in service page "Featured Case Studies").

### 4.1 Home — `mockup-home.png`
- Hero: heading "Technology built for Africa's next chapter.", subtext, two buttons (Start a Project / Explore Solutions), small avatar row + "Trusted by forward-thinking businesses across Africa", and the elaborate globe treatment (Section 2.6) with orbiting capability labels (AI & Data, Software Engineering, Business Impact, Automation).
- Stats bar: 30+ Projects Delivered, 20+ Happy Clients, 2+ Years of Impact, Across 8 Countries.
- "What We Do" — 4 cards: Software Engineering, AI & Intelligent Systems, Data & Analytics, Digital Transformation.
- "From idea to infrastructure" — 4-step horizontal process (Idea & Strategy → Design & Engineer → Deploy & Integrate → Scale & Optimize).
- "Solutions we're proud to have built" — 2 featured case study cards (reuse Work page data — Supply Chain Intelligence Platform, Digital Lending Management System).
- "Why ByteForce" — 4-icon value row (Business First, Built to Last, Collaborative, Impact Driven).
- CTA banner (Section 3.3) → Footer.

### 4.2 About — `mockup-about.png`
- Hero: "Built in Africa. Engineered for the world.", Our Story / Watch Our Story buttons, globe + building photo composite.
- "Our Story" narrative section — **fold in the "technology holding company" and "Global Tech" positioning language here** (from the LinkedIn company blurb), since these are identity statements, not service offerings, and don't belong on the Services/Solutions pages. Founder signature block (Emmanuel Mensah, Founder & CEO).
- "Our Values" — 4 values on deep navy band: Impact First, Integrity, Innovation, Collaboration.
- "Our Team" — grid of team member cards (photo, name, title, LinkedIn/X icons) — **placeholder data**, mark clearly in the data file as such.
- CTA banner → Footer.

### 4.3 Services Index — `mockup-services-index.png`
- Hero: "Technology capabilities built for impact."
- 5-card grid using the hybrid hover/click card component (Section 3.4): Software Engineering, AI & Intelligent Systems, Data & Analytics, Digital Transformation, Cloud & DevOps.
- 4-icon reassurance row: Business First, Quality Assured, Collaborative, Future Ready.
- CTA banner → Footer.
- **Content note:** Data Ecosystems and AI specialties from the company profile already map to existing Data & Analytics / AI & Intelligent Systems cards — no new cards needed. Blockchain and Web2.5 are **excluded from this build** (tabled for a future phase).

### 4.4 Single Service Template — `mockup-services-single-software-engineering.png`
This is a **template**, not a one-off page — build it to render for all 5 services from data (Section 5.2).

- Dark navy hero: breadcrumb (Home > Services > [Service Name]), eyebrow "SERVICE", large heading, description, Start a Project / See Our Work buttons, 3 small feature badges (e.g. Scalable Architecture / Clean Code / Security by Design), dashboard mockup graphic on the right.
- "What We Build" — 5-card grid of sub-capabilities (e.g. for Software Engineering: Web Applications, Enterprise Systems, APIs & Integrations, SaaS Platforms, Custom Platforms).
- "Our Approach" — 5-step numbered process, identical visual pattern to Home's process section but service-specific step copy.
- "Featured Case Studies" — 3 case study cards, **pulled from the same Work page data source** (do not invent new project names/stats per service page).
- "Technologies We Use" — badge row. Same general badge treatment across all service pages, showing the real project tech stack plus additional relevant technologies to demonstrate breadth to clients (see Section 5.3 for the exact list — reflects the actual stack in use this phase, no AWS/MongoDB/Docker, plus extra badges for credibility).
- CTA banner → Footer.

### 4.5 Solutions Index — `mockup-solutions-index.png`
- Hero: "Technology solutions built for your industry."
- 5-card grid (no hybrid hover needed here — simpler static cards with dashboard preview snippets and an arrow link): FinTech, Supply Chain, Healthcare, Education, E-commerce.
- "Custom Solutions" callout strip.
- CTA banner → Footer.
- **Content note:** Supply Chain Optimization from the company profile is already fully represented by the existing Supply Chain card — no changes needed.

### 4.6 Single Solution Template — `mockup-solutions-single-supply-chain.png`
Template rendering for all 5 solutions from data (Section 5.2), mirroring the service template pattern:

- Hero: breadcrumb, eyebrow "SOLUTION", heading, description, Start a Project / See Our Work, 4 feature bullets (Real-time Visibility, Smarter Decisions, Optimized Performance, Built for Scale), dashboard graphic.
- "What We Do" — 5-card grid of sub-capabilities specific to that industry vertical.
- "Our Approach" — 5-step process (Assess, Design, Implement, Optimize, Evolve).
- "Success Stories" — 3 case study cards with industry tags and metrics, sourced from Work page data where overlapping.
- CTA banner → Footer.

### 4.7 Work — `mockup-work.png`
- Hero: "Building technology that drives real impact.", stat badge (30+ Projects Delivered, Across 8 countries), globe graphic.
- Filter tabs: All Projects, AI & Data, FinTech, Supply Chain, Healthcare, Education, E-commerce, Web & Mobile + a sort dropdown (Latest First).
- Project list — **this is the canonical data source** for case study names/stats reused elsewhere on the site (Home, Service pages, Solution pages). Build this as the single JSON source of truth (Section 5.4); other pages pull from it rather than duplicating values.
- "More projects. More impact." strip + CTA banner → Footer.

### 4.8 Contact — `mockup-contact.png`
- Hero: "Let's build something great together.", "We typically respond within 24 hours" note, globe graphic.
- 4 info cards: Our Location, Email Us, Call Us, Business Hours.
- Contact form: Full Name, Work Email, Company Name, Service of Interest (dropdown populated from the 5 services), message textarea, Send Message button, privacy reassurance line.
- **Phase-one form behavior:** no real backend/email delivery. On submit, write the entry to a local JSON file (or log it) and show a real success/error UI state — the interaction must feel complete to a client clicking through, even though nothing is actually emailed yet. Flag this clearly in code comments as "connect real email service (e.g. Resend) before real launch."
- "Let's create impact" illustration panel.
- FAQ accordion (4 questions shown, expandable).
- CTA banner → Footer.

### 4.9 Insights — `mockup-insights.png`
- Hero: "Ideas. Insights. Real impact.", search bar + Subscribe button, globe graphic.
- Category filter tabs: All Insights, AI & Data, Software Engineering, Digital Transformation, Industry, Business, Product + sort dropdown.
- Featured article (large card) + "Popular Insights" numbered sidebar list.
- "Latest Insights" — 8-card grid.
- Email subscribe CTA strip.
- **Content note:** this page is aspirational/template-only this phase — no real articles exist yet. Build it fully functional against placeholder data (Section 5.5), clearly marked as placeholder in the data file (fake author names, fake dates), so it's obvious this content is swappable before real launch, not real editorial content.
- CTA banner is not present on this page per mockup (subscribe strip serves that role) → Footer.

---

## 5. Data Structure

All placeholder content should live in `/data/*.json` (or `/data/*.ts` typed constants), not hardcoded inline in components. This makes the eventual swap to real content/backend straightforward.

### 5.1 `services.json`
Array of 5 services: `{ slug, name, icon, shortDescription, heroDescription, subCapabilities[], processSteps[], featuredCaseStudySlugs[] }`

### 5.2 `solutions.json`
Array of 5 solutions: `{ slug, name, icon, shortDescription, heroDescription, subCapabilities[], processSteps[], featuredCaseStudySlugs[] }`

### 5.3 `techStack.json`
Flat badge list for the "Technologies We Use" sections: **React, Next.js, Node.js, TypeScript, Python, PostgreSQL** (kept for credibility even though this build uses JSON files, since it signals real capability to clients) — plus additional badges to round out perceived breadth (e.g. Tailwind CSS, Git, REST APIs, GraphQL) — **excluding AWS, MongoDB, Docker** per this phase's actual stack. Mark this file with a comment noting it represents demonstrated capability, not necessarily this specific site's implementation stack.

### 5.4 `projects.json` — canonical case study data
Single source of truth, referenced by Home, Service templates, Solution templates, and Work page:
`{ slug, title, category, industry, description, stats: [{value, label}], techTags[], thumbnailImage }`
Must include at minimum: Supply Chain Intelligence Platform, Digital Lending Management System, Healthcare Operations Platform (exact names/stats as shown on the Work mockup).

### 5.5 `insights.json` — placeholder blog data
`{ slug, title, category, excerpt, author: {name, role, avatar}, date, readTime, featured: boolean, image }`
Mark file header with a comment: `// PLACEHOLDER CONTENT — replace with real articles/authors before launch`

### 5.6 `team.json` — placeholder team data
`{ name, title, photo, linkedin, twitter }`
Same placeholder marking convention.

### 5.7 `siteConfig.json`
Global constants: company name, tagline (locked, Section 3.2), contact info, social links, nav structure — single place to update site-wide text.

---

## 6. Pre-Launch QA Checklist

Do not consider any page complete until all of the following are verified:

**Structural / functional**
- No horizontal scroll on any page at any breakpoint
- All buttons functional (no dead click targets)
- All links resolve (no 404s except the intentional 404 page test)
- Mobile hamburger menu opens, closes, and every link inside it works
- Footer links all resolve, including Privacy Policy and Terms of Service (placeholder legal pages — clearly boilerplate, not real legal copy, generate simple standard-structure placeholder text)
- Custom 404 page exists (on-brand, with a link back to Home)
- Copyright year in footer is computed dynamically (`{new Date().getFullYear()}`), never hardcoded
- Logo is clickable on every page, routes to Home
- Phone number is a working `tel:` link; email is a working `mailto:` link
- No unused/orphaned nav items — every nav link goes somewhere real
- Contact form and any other interactive element (search, filters) shows clear success and error states

**Content**
- No leftover Lorem Ipsum or generic placeholder text — all placeholder content should be realistic-looking ByteForce-relevant placeholder, not filler text, and internally consistent (e.g. same case study numbers wherever reused)
- Placeholder data files (`insights.json`, `team.json`) clearly commented as placeholder

**Visual / performance**
- Favicon present, generated from `brand-logo-mark.png`
- Unique `<title>` and meta description per page (not one sitewide value)
- All images use Next.js `<Image>` component for automatic compression, sizing, and lazy loading
- No mobile overflow/clipping on any section, including the globe graphic and card grids
- Full responsive check at common breakpoints (mobile ~375px, tablet ~768px, desktop ~1440px)

**Accessibility**
- Alt text on all meaningful images
- Service/Solution hover cards fully keyboard-operable (Tab to focus, Enter/Space to activate) — not hover-only
- Visible focus states on all interactive elements
- Sufficient color contrast on text over dark/blue backgrounds

---

## 7. Deployment

- **Target:** Vercel
- Next.js App Router deploys to Vercel with no special configuration required
- Environment variables (if any are introduced, e.g. for a future email service) should be scaffolded via `.env.local` + `.env.example`, not hardcoded
- Client will make the final hosting decision after reviewing the demo; this deployment is for presentation purposes
