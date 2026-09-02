# Hand-Coded Tool Page Layout Pattern Prompt

Use this prompt when building or rebuilding tool pages for individual marketing tools. Tool pages follow a specific structure distinct from use-case/pillar pages, featuring a single-section layout (no mobile/desktop split) for most components.

---

## The Task

Hand-code a marketing tool page using the ContentStudio tool page as the structural and styling reference. Do NOT use arrays, `.map()`, or generated code — every element must be written by hand.

Tool pages are simpler than use-case pages: they focus on a single product/tool and its capabilities, not a broad business problem.

---

## Page Component Structure

Each tool page has exactly **6 components**:

```
ToolsHeroSection (shared, prop-based)
├─ OverviewSection (tool-specific)
├─ KeyCapabilitiesSection (tool-specific)
├─ ImplementationSection (tool-specific)
├─ WhenToUseSection (tool-specific)
└─ SchedulerShell (shared CTA)
```

**Note:** Unlike use-case pages, tool pages do NOT have an `<article>` wrapper — sections are rendered directly after the hero.

---

## Section Structure & Styling

### 1. ToolsHeroSection (Shared)
- **File location:** `src/components/shared/tools-hero-section.tsx`
- **Props:** `title` (tool name), `summary` (value proposition)
- **Styling:** Dark blue background with large headline + summary + "Get Your Free AI Assessment" CTA button
- **No custom variants needed** — reuse as-is

---

### 2. OverviewSection (Tool-Specific)
- **Structure:** **Mobile/desktop split** (like use-case pages) — **alternating layout, same as use-case pillars**
  - Mobile (`lg:hidden`): col-span-5 empty (left) + col-span-7 heading (right) + col-span-12 body
  - Desktop (`hidden lg:block`): col-span-5 empty (left) + col-span-7 content (right, heading + body)
  - **Alternating:** Overview is **Section 1 (odd)** — text on right (empty left). Same side for both mobile heading and desktop content. Matches use-case pillar Section 1 pattern.
- **Background color:** `#023059` (dark blue)
- **Heading:** "Overview" (not tool-specific)
- **Content:** 3-4 paragraphs explaining tool purpose, value, and differentiation vs competitors
  - Start with "What is this tool and why use it?"
  - Mention business value and problem solved
  - Discuss differentiation (e.g., "compared to Zapier, Make.com excels at...")
  - End with strategic value
- **Styling:**
  - Mobile heading: `text-[6vw] sm:text-4xl md:text-5xl`
  - Desktop heading: `lg:text-[3.5rem]`
  - Paragraphs: `text-md font-normal text-white shadow-text pt-3`

---

### 3. KeyCapabilitiesSection (Tool-Specific)
- **Structure:** **Single section** (no mobile/desktop split — rendered as-is on all screen sizes) — **alternating layout**
- **Background color:** `#024059` (medium blue)
- **Grid layout:** `col-span-7` content (left) + `col-span-5` empty (right)
- **Alternating:** Key Capabilities is **Section 2 (even)** — text on left (empty right). Opposite side from Overview/Implementation.
- **Heading:** "Key Capabilities" (not tool-specific)
- **Content structure:**
  1. Intro paragraph (why these capabilities matter)
  2. **5 bullet points** (hand-written `<li>` elements, NOT mapped from array)
     - Each bullet is 1-2 sentences describing a specific feature
     - Bullets are about what the tool CAN DO, not general benefits
- **Styling:**
  - Heading: `lg:text-[3.5rem]` (desktop size ONLY — no mobile variant for single-section components)
  - Bullets: `list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3`

---

### 4. ImplementationSection (Tool-Specific)
- **Structure:** **Single section** (desktop only) — **alternating layout, same as use-case pillars**
- **Background color:** `#025E73` (teal/blue-green)
- **Grid layout:** `col-span-5` empty (left) + `col-span-7` content (right, heading + body) — **text on right**
- **Alternating:** Implementation is **Section 3 (odd)** — text on right (empty left). Same side as Overview, opposite from Key Capabilities/When to Use.
- **Heading:** "Implementation Considerations" (not tool-specific)
- **Content structure:**
  - 1 intro paragraph (context for implementation)
  - **4 subsections** (hand-written, NOT generated), each with `<h3>` + paragraph:
    1. **Accelerated Deployment** — how quickly can you get it live?
    2. **Data Model Design** — how should data be structured/mapped?
    3. **Workflow and Process Configuration** — customization options, approval chains, routing
    4. **Custom Code and Development** — extensibility, scripting, APIs (explain if tool supports custom code)
  - Reference Geek At Your Spot services in the text where appropriate
- **Styling:**
  - h3 subsection headings: `text-[5vw] sm:text-3xl lg:text-3xl`
  - Body paragraphs: `text-md font-normal text-white shadow-text pt-3`

---

### 5. WhenToUseSection (Tool-Specific)
- **Structure:** **Single section** (desktop only) — **alternating layout**
- **Background color:** `#8C4E2A` (warm brown/rust)
- **Grid layout:** `col-span-7` content (left) + `col-span-5` empty (right)
- **Alternating:** When to Use is **Section 4 (even)** — text on left (empty right). Same side as Key Capabilities, opposite from Overview/Implementation.
- **Heading:** "When to Use" (not tool-specific)
- **Content:** **4 paragraphs** describing ideal use cases and business contexts:
  1. General scenario when this tool is best (problem it solves)
  2. Specific org type or use case (e.g., "enterprises with diverse tech stacks")
  3. Why this tool over similar alternatives (comparison to competitors like Zapier, ContentStudio)
  4. Concluding thought on strategic value and decision factors
- **Styling:**
  - Heading: `lg:text-[3.5rem]`
  - Paragraphs: `text-md font-normal text-white shadow-text pt-3`

---

## Color Palette (No Variation)

Tool pages use a **fixed 4-color sequence** (does NOT rotate per tool):
- Hero: handled by ToolsHeroSection component
- Overview: `#023059` (dark blue)
- Key Capabilities: `#024059` (slightly darker blue)
- Implementation: `#025E73` (teal)
- When to Use: `#8C4E2A` (warm brown)

---

## Hand-Coding Requirements

### Headings
- **Heading tags:** Always use **SAME ID for both mobile and desktop sections** — do NOT use different IDs
  - Correct: `id="overview"` on both mobile and desktop h2 elements
  - WRONG: `id="overview"` (mobile) and `id="overview-desktop"` (desktop)
  - Use: `id="overview"`, `id="key-capabilities"`, `id="implementation-considerations"`, `id="when-to-use"`
- **Mobile heading font (OverviewSection only):** `text-[6vw] sm:text-4xl md:text-5xl`
- **Desktop heading font (all sections):** `lg:text-[3.5rem]`
- **All headings:** `font-black font-[var(--font-sora)] shadow-text leading-[0.95]`

### Body Content
- **Paragraphs:** `<p className="pt-3 text-md font-normal text-white shadow-text">`
- **Bullet lists:** `<ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">` with individual `<li>` elements (NEVER `.map()`)
- **Subsection headings (h3 in Implementation):** `text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text`

### Links
- Use `<Link>` component with unique `id` attributes for GTM tracking
- **Color by background (same as use-case pillars):**
  - Light backgrounds (`#023059`, `#024059`, `#025E73`): `text-[#C83803] hover:underline` (orange)
  - Dark backgrounds (`#8C4E2A`, `#BF5934`): `text-[#0B162A] hover:underline` (dark blue) — orange is not visible on dark brown/rust
- Example: `id="tools-marketing-zapier"`

### Glossary
- If content contains words/terms that should be in the Glossary (e.g., `lead scoring`, `CRM`, `predictive analytics`, `marketing automation`, `AI`), **create a glossary entry and link to the definition**.
- Check existing terms via `GET /api/glossary/terms` (or `src/lib/glossary.ts`); if missing, create entry via `POST /api/glossary/terms` with `X-API-Key` and trigger revalidation (`POST /api/revalidate`).
- Wrap every occurrence with `<GlossaryLink slug="term-slug">term</GlossaryLink>` (defaults to `text-[#C83803] hover:underline`, links to `/glossary/{slug}`).
- Use kebab-case slug (e.g., `lead-scoring`, `predictive-analytics`); ensure slug matches glossary entry.

---

## Shared Body Pattern (Optional)

For sections with multiple paragraphs, you can optionally define a `const body` JSX fragment at the component level, then use it in the return statement:

```tsx
const body = (
  <>
    <p>First paragraph...</p>
    <p>Second paragraph...</p>
    <h3>Subheading...</h3>
    <p>More content...</p>
  </>
);

return (
  <section className="...">
    <div className="...">
      <div className="...">
        <div className="...">
          <h2>...</h2>
          {body}
        </div>
      </div>
    </div>
  </section>
);
```

---

## Page.tsx Template

```tsx
import type { Metadata } from "next";
import ToolsHeroSection from "@/components/shared/tools-hero-section";
import OverviewSection from "@/components/tools/marketing/[tool-name]/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/[tool-name]/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/[tool-name]/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/[tool-name]/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "[Tool Name]",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/[tool-slug]",
        "description": "[From backup meta description]",
        "keywords": "AI Content Repurposing, content transformation, [Tool Name], workflow automation",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing"
        }
        // ... full JSON-LD from backup HTML head
    };
    // Return full metadata object
};

export default async function Page() {
    const title = "[Tool Name]";
    const summary = "[From backup heroSummary meta tag]";

    return (
        <>
            <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
```

---

## Raw Content Source

All tool pages pull content from `/Users/jeffmartin/development/geekatyourspot/backup/marketing/AI Content Repurposing/tools/[tool-name].html`

Each HTML file contains:
- `<meta name="slug">` → tool-slug
- `<meta name="department">` → "marketing"
- `<meta name="date">` → publication date
- `<meta name="heroSummary">` → value prop for ToolsHeroSection
- `<meta name="description">` → SEO description
- `<title>` → page title
- JSON-LD SoftwareApplication schema in `<script type="application/ld+json">`
- Body content: `<h2>Overview</h2>`, `<h2>Key Capabilities</h2>`, `<h2>Implementation Considerations</h2>`, `<h2>When to Use</h2>`

Extract and hand-code each section's content from the backup HTML exactly as written.

---

## Directory Structure

```
src/components/tools/marketing/[tool-name]/
├── overview-section.tsx (mobile/desktop split)
├── key-capabilities-section.tsx (single section)
├── implementation-section.tsx (single section)
└── when-to-use-section.tsx (single section)

src/app/(site)/tools/marketing/[tool-name]/
└── page.tsx (main entry, imports ToolsHeroSection + 4 sections + SchedulerShell)
```

---

## Verification Checklist

- [ ] Page.tsx imports ToolsHeroSection (shared), 4 tool-specific sections, SchedulerShell
- [ ] OverviewSection has mobile (`lg:hidden`) and desktop (`hidden lg:block`) variants
- [ ] OverviewSection uses alternating col-span layout (mobile: empty left + heading right; desktop: empty left + content right) — both on right (Section 1 odd)
- [ ] OverviewSection background: `#023059`
- [ ] **FONT SIZES CORRECT:**
  - [ ] OverviewSection mobile heading: `text-[6vw] sm:text-4xl md:text-5xl` (NOT `lg:text-[3.5rem]` in mobile section)
  - [ ] OverviewSection desktop heading: `lg:text-[3.5rem]` (ONLY in desktop section, NOT mobile)
  - [ ] All section headings use same ID for both mobile/desktop (e.g., `id="overview"` not `id="overview-desktop"`)
- [ ] KeyCapabilitiesSection: single section, `#024059` background, exactly 5 hand-written bullet points, heading with `lg:text-[3.5rem]`, alternating **text on left** (Section 2 even: `col-span-7` content + `col-span-5` empty)
- [ ] ImplementationSection: single section, `#025E73` background, exactly 4 h3 subsections, heading with `lg:text-[3.5rem]`, alternating **text on right** (Section 3 odd: `col-span-5` empty + `col-span-7` content)
- [ ] WhenToUseSection: single section, `#8C4E2A` background, exactly 4 paragraphs, heading with `lg:text-[3.5rem]`, alternating **text on left** (Section 4 even: `col-span-7` content + `col-span-5` empty)
- [ ] All content is hand-written JSX (no `.map()`, no arrays for repeated items)
- [ ] All headings have proper `id` attributes (consistent between mobile/desktop sections)
- [ ] Build passes with `npm run build`

---

## Known Issues in Existing Pages

**CRITICAL: 9 pages missing mobile/desktop split entirely**

These pages have OverviewSection with:
- Single section (no `lg:hidden` / `hidden lg:block`)
- Heading font size `lg:text-4xl` (WRONG — should be responsive)
- No mobile optimization

Pages affected:
- Marketo
- OpenAI GPT-4
- Salesforce Pardot
- Active Campaign
- Adobe Sensei
- Grammarly
- HubSpot
- Jasper AI
- Mailchimp
- Avalara (accounting)
- ChatGPT (AI Content Creation Workflow variant)

**All need rewrite:** Each OverviewSection must have both mobile (`lg:hidden`) and desktop (`hidden lg:block`) sections with correct font sizes.

---

**OTHER PAGES WITH MAJOR STRUCTURAL ISSUES:**

**Marketo** (`src/components/tools/marketo/`)
- ALL section headings use `lg:text-4xl` (should be `lg:text-[3.5rem]`)
- Implementation section: "Implementation Considerations" and "When to Use" are in the SAME section
  - Should be SEPARATE sections with different background colors
  - Implementation: should have 4 h3 subsections (currently missing — has bullet list instead)
  - When to Use: should be separate section with 4 paragraphs
- Key Capabilities: heading is `lg:text-4xl` (should be `lg:text-[3.5rem]`)
- Needs complete restructuring to match pattern

**Other pages with similar issues to fix:**

**Surfer SEO** (`src/components/tools/marketing/surfer-seo/`)
- OverviewSection desktop layout: empty div and content divs are reversed (should be content left, empty right)
- OverviewSection IDs: desktop section uses `id="overview-desktop"` instead of `id="overview"`

**Claude, ChatGPT, HubSpot AI** (similar issues)
- OverviewSection IDs: desktop section uses `id="overview-desktop"` (or similar) instead of same ID as mobile

**OpenAI GPT-4 Tool** — CRITICAL ISSUES
- OverviewSection is missing ENTIRE mobile/desktop split structure
- Currently has single section with desktop-only layout (`col-span-7` content right, `col-span-5` empty left)
- Heading uses `lg:text-4xl` (WRONG) — should use:
  - Mobile (`lg:hidden` section): `text-[6vw] sm:text-4xl md:text-5xl`
  - Desktop (`hidden lg:block` section): `lg:text-[3.5rem]`
- Needs complete rewrite to match Zapier/ContentStudio pattern with both mobile and desktop sections

**Key principles to prevent future issues:**
1. **Alternating:** All sections alternate text side like use-case pillars — Odd (1,3) text on right (`col-span-5` empty left + `col-span-7` content right), Even (2,4) text on left (`col-span-7` content left + `col-span-5` empty right)
2. Desktop OverviewSection layout should mirror use-case pillar pattern (empty left + content right for odd sections), not the old Zapier/ContentStudio buggy left+empty
3. Use ONE ID for headings across mobile/desktop sections (`id="overview"`, not separate IDs)
4. Mobile heading font: only in OverviewSection mobile variant
5. Single-section components (Key Capabilities, Implementation, When to Use) should NOT have mobile/desktop split but still alternate empty/content side per section number
6. **Link colors alternate by background:** `text-[#C83803]` on `#023059`/`#024059`/`#025E73`, `text-[#0B162A]` on `#8C4E2A`/`#BF5934`

---

## Example Files

- **Reference page:** `src/app/(site)/tools/marketing/contentstudio/page.tsx`
- **Reference components:** `src/components/tools/marketing/contentstudio/{overview,key-capabilities,implementation,when-to-use}-section.tsx`
- **Raw content:** `/backup/marketing/AI Content Repurposing/tools/contentstudio.html`
