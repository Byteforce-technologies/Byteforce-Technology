# ByteForce (Africa → Global rebrand) — Merge & Reconciliation Instructions

## 0. Context

This is a **reconciliation pass**, not a fresh build. Two independent AI-built attempts at this site exist — **Antigravity** (Next.js App Router, the trunk/base project — this codebase, at the project root) and **Manus AI** (Vite + wouter + shadcn/ui, built as a single-page reference — not a real multi-page codebase).

**Manus's project files are located at `/reference/manus-project/`** in this same project root. This folder is reference material only — read it to understand layout, spacing, and visual treatment described throughout this document, but never import code from it, never run its `package.json`/install its dependencies, and never treat it as part of this build. It uses a different framework (Vite, not Next.js) and a different routing/component library, so its code is not compatible with this project regardless.

**Antigravity's codebase is the trunk.** All final code lives in Antigravity's structure — its routing, its component system (`src/components/`), its design tokens. Manus is **reference only** — its layouts, spacing, and visual treatment are things to rebuild natively inside Antigravity, never copied directly as code (different framework, different UI library, incompatible).

The four kinds of instructions below are deliberately different in scope. Do not treat them all the same:

- **UNTOUCHED** — do not modify. Working as intended.
- **FIX IN PLACE** — same component, targeted correction only.
- **REBUILD (Manus-referenced)** — rebuild the section natively in Antigravity's system, using the described Manus behavior/layout as the visual target, not as code to import.
- **BUILD FRESH** — neither existing version is correct; build new against the spec given.

---

## 1. Rebrand — ByteForce Africa → ByteForce Global

Client-requested name change: **"ByteForce Africa" becomes "ByteForce Global"** across the entire site. This is a find-and-replace at the data/config level, not a page-by-page task — treat it as its own pass across the whole codebase, done once, rather than fixing it separately on every page.

- Update `siteConfig.json`/`siteConfig.ts` (the single source of truth for the company name) — this should cascade to every place that reads from it (navbar wordmark, footer brand column, footer copyright line, meta titles/descriptions)
- Update the navbar wordmark text next to the logo
- Update the footer tagline if it references "Africa" by name — reword naturally rather than a literal find-replace if the sentence reads awkwardly with "Global" swapped in (e.g. "across Africa and beyond" may need rephrasing — confirm final tagline wording once this pass is done, don't just leave it half-changed)
- Update every page's `<title>` and meta description that includes the company name
- Update favicon/logo alt text
- Search the whole codebase for literal "ByteForce Africa" and "Africa" occurrences tied to the brand name specifically (not the Africa/globe visual motif itself, which stays — the *company name* changes, not the African design identity or the Africa-shaped SVG)
- **Do not touch:** the Africa/globe SVG motif, the "About" story content discussing being built in/for Africa (unless the client also wants that narrative reworded — flag this to them if unclear, since "Global" positioning may warrant revisiting that copy too, but that's a content decision, not assumed here)

---

## 2. Untouched — Do Not Modify

These are confirmed correct as currently built in Antigravity. Do not regenerate, restyle, or "improve" them as a side effect of other work.

- **Navbar** (`src/components/navigation/Navbar.tsx`) — current version preferred over Manus's (Manus's nav text/styling was inconsistent)
- **Home page hero/header** — keep as-is for now (the pulsing circle + logo animation the client responded well to). Revisit in a future phase, not this pass.
- **Buttons** (`src/components/ui/Button.tsx`) — style and hover states are working
- **Solutions page — entire page** (index and single-solution template) — clear preference over Manus, no changes
- **Contact page** — structure and content preferred over Manus, **except** CTA banner sizing (see Section 2)
- **Work page — header section specifically** — preferred over Manus's Work header
- **Work page — the banner/section placed before the CTA banner** (already added by Antigravity, not present in Manus) — keep as-is, it works well
- **Single Service page template — "Technologies We Use" dark band** — not present in Manus, works well as currently built, keep

---

## 3. Fix In Place — Same Component, Targeted Correction

### 3.1 Global type & spacing scale
Recurring issue across multiple pages: text and section sizing read as too large at 100% browser zoom (only looks correct when zoomed to ~50–75%). This is a calibration problem, not a responsive-breakpoint problem.

- Audit and reduce heading sizes: no heading anywhere should exceed the hero H1's size; section H2s should be visibly smaller than hero text
- Reduce section vertical padding to a moderate range — sections should not force full viewport height unless it's the hero
- Re-verify all fixes at **100% zoom on real desktop widths (1440px and 1920px)** — do not rely on measurements taken from static mockup PNGs, which were rendered at their own arbitrary scale

### 3.2 Contact page CTA banner
Same oversizing issue, isolated to this one banner specifically. Reduce to match the corrected scale from 3.1. Rest of the Contact page is untouched (Section 2).

### 3.3 Mobile menu bug
Current behavior: tapping the hamburger icon reveals the mobile nav, but the header remains layered on top of/overlapping the open menu instead of the menu properly taking over the screen. Also, the navbar itself currently disappears at mobile resolution rather than staying visible with just the menu icon showing.

**Exact behavior required:**
- Navbar stays visible at mobile resolution (logo left, hamburger icon far right) — it should never fully disappear
- Tapping the three-line (hamburger) icon: icon transforms into an X, and a mobile menu panel gently opens/slides in to fill **2/3 of the page height** (not full screen, not overlapping/hidden behind the header)
- Nav options are listed **vertically** inside this open panel
- Tapping the X: menu closes (reverse of the open transition) and the icon transforms back into the three horizontal lines
- No z-index conflict — the open menu must render above the header/page content, fully visible, not obscured by anything

### 3.4 Generated-image placeholders standing in for the Africa/globe SVG
Currently, some sections use a static generated image where the proper SVG dot-map component was intended (e.g. About page header, Work page header). Once the fresh Globe/Africa component is built (Section 5.1), swap these placements over to the real component instead of the static image.

---

## 4. Rebuild — Native Antigravity Code, Manus as Visual Reference

For each item below: rebuild using Antigravity's existing component system, design tokens, and data layer. Match Manus's described layout/spacing/visual treatment as the target — do not import Manus code or dependencies.

### 4.1 Home page — stats bar section
The section directly below the hero ("We turn complex technology into business advantage" + 30+ Projects Delivered / 20+ Happy Clients / 2+ Years of Impact / Across 8 Countries stats row).

- Manus's version preferred. Antigravity's current version uses a very dark navy background that reads as off-brand/inconsistent with the rest of the page.
- Rebuild with a lighter background treatment consistent with the rest of the site's palette, matching Manus's general layout and spacing for this section.

### 4.2 Home page — everything after the stats bar
Includes the "What We Do" / end-to-end technology solutions section and generally the remainder of the Home page below the stats bar.

- Manus's version preferred throughout — better section design and flow than Antigravity's current build.
- Rebuild these sections natively, using Manus's layout/spacing/visual approach as the reference.

### 4.3 About page — entire page
Manus's version preferred over Antigravity's, in full.

- Rebuild the entire About page in Antigravity's system (Our Story, Values, Team sections) matching Manus's layout and spacing.
- **Known issue to fix during rebuild, not carry over:** the About page header currently uses a static generated image instead of the proper Africa/globe SVG component — use the real component (Section 5.1) here, not an image.

### 4.4 Services index page — CTA banner and general typography/spacing
- CTA banner: Manus's version preferred (better visual treatment than Antigravity's).
- General page typography/spacing: Manus's version preferred — reads closer to the original mockup's proportions.
- Do not change the service cards themselves here — see Section 5.2 for the card interaction, which is a fresh build, not a reference to either version.

### 4.5 Single Service page template — layout and image handling
- Manus's version of this page is generally preferred, largely due to better image integration.
- Rebuild layout to match Manus's approach.
- **Important distinction on images:** Manus's actual generated image files are not present in the delivered project (confirmed empty asset folders) and will not be recreated as part of this pass (see Section 5). Build this page with a clean, correctly-proportioned image slot/container in place of where each image belongs — proper aspect ratio and object-fit/cropping treatment so a real image can be dropped in later without layout rework. Do not leave a broken image reference or an unstyled empty box.
- **Keep from Antigravity, do not touch:** the "Technologies We Use" dark band (Section 2).

### 4.6 Work page — cards and CTA banner
- Cards: Manus's version preferred (better card design/layout than Antigravity's current cards).
- CTA banner: Manus's version preferred.
- **Keep from Antigravity, do not touch:** page header, and the pre-CTA banner section (Section 2).

### 4.7 Insights page — card images
- Manus's cards include an image per card; Antigravity's current cards are mostly image-less.
- Rebuild the Insights card component to include an image slot per card, styled consistently with the rest of the card (proper cropping/masking — see Section 5 note on image treatment quality).
- Since no real images exist yet for this content (Section 6), use the same clean placeholder-slot approach as 4.5.

---

## 5. Build Fresh — Neither Version Is Correct

### 5.1 Globe / Africa SVG component
Neither codebase has this right. Manus did not build a real component at all — it used a static generated image in its place, which is not what's wanted. Antigravity has three related files already in `src/components/brand/` (`AfricaWatermark.tsx`, `GlobeMotif.tsx`, `InteractiveHeroGlobe.tsx`) — **review what currently exists in these files first**, since they may already provide a partial foundation, before rebuilding from scratch.

- Build as a proper flat SVG dot-map component (not a generated/static image), representing the African continent, in the brand blue gradient
- Must be reusable with props for size, crop/focus area, and opacity — used consistently across About, Work, Services, Solutions, and Contact headers (excluding the Home hero, which keeps its separate animated circle treatment per Section 1)
- Replace all current static-image placeholders for this motif (Section 3.4) with this component once built

### 5.2 Service/Solution card — hover + click interaction
Neither Antigravity's nor Manus's current card interaction is correct as built. This needs a fresh implementation combining what worked from the discussion, not a copy of either:

- **Default state:** standard grid card (icon, title, short description)
- **On hover:** reveals a partial preview with some real detail (not the full description, not the near-empty state Manus produced) — enough to give useful information at a glance
- **Click / "Full Service" action:** clear button/link that routes to that service's or solution's full single-page template
- Must remain keyboard-operable (focus + Enter/Space triggers the same reveal as hover) for accessibility
- Applies to both the Services index and Solutions index card grids

---

## 6. Images — Handling Policy for This Pass

Manus's project's asset folders (`public/`) were confirmed empty — the ChatGPT-5-generated images referenced/visible in Manus's UI are not present in the delivered files and are **not being regenerated in this pass** (deferred to a later phase, handled separately).

For every place across this document where a Manus-referenced rebuild involves an image (Sections 4.5, 4.7, 3.4's replacement targets):

- Build a properly sized, correctly cropped/masked image container or slot in place of the image
- Do **not** leave a broken `<img>` reference, an empty untreated box, or a low-effort filler graphic
- The slot should be ready to receive a real image later with no further layout changes needed
- Flag each such slot with a code comment noting it's a placeholder awaiting a final asset

---

## 7. Suggested Order of Work

1. **Section 1** (ByteForce Global rebrand) — do first; a sitewide config-level change, so everything built afterward already reflects the new name
2. **Section 5.1** (Globe component) — foundational, needed by multiple rebuild targets
3. **Section 3.1** (global type/spacing fix) — affects every page, do before further rebuilds so new work isn't built against the wrong scale
4. **Section 3.3** (mobile menu bug) — isolated, quick
5. **Section 5.2** (card interaction) — needed before Services/Solutions index pages are finalized
6. **Section 4.3** (About page rebuild)
7. **Section 4.1 + 4.2** (Home page sections — stats bar, then everything after it)
8. **Section 4.4** (Services index)
9. **Section 4.5** (Single Service template)
10. **Section 4.6** (Work page cards/CTA)
11. **Section 4.7** (Insights cards)
12. **Section 3.2 + 3.4** (remaining small fixes, folded in wherever their page is being touched)
