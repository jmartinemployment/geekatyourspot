# Hand-Coded Page Layout Pattern Prompt

Use this prompt when building or rebuilding use-case pages and tool pages following the `ai-content-creation-workflow` template pattern.

**Pillar pages, tool pages and blog posts share this one layout** (Jeff, 2026-10-18): the same two blocks per breakpoint, the same seven/five column split alternating sides, the same five-colour rotation, the same link colours and the same single-block FAQ with a rule above each question. Pillars and tools are hand-coded to it; blog posts are rendered to it by the blog template (see Blog Posts below). A change to the layout is a change to all three.

---

## The Task

Hand-code a page's section components using the `ai-content-creation-workflow` template as the structural and styling reference. This pattern applies to both use-case pages and tool pages. Do NOT use arrays, `.map()`, or generated code — every repeated element must be written by hand.

---

## Section Structure Requirements

Each section (except FAQ/PAA) must have **two parallel `<section>` blocks** (applies to both use-case and tool pages):

### 1. Mobile Section (`lg:hidden`)
- Use `<section className="min-h-screen bg-[#COLOR] text-white py-5 lg:hidden">`
- Inside: full-width container with 12-column grid
- Grid layout for heading: **alternating col-span pattern**
  - Odd sections (1st, 3rd, 5th...): `col-span-5` empty (left) + `col-span-7` heading (right)
  - Even sections (2nd, 4th, 6th...): `col-span-7` heading (left) + `col-span-5` empty (right)
- All body content: `col-span-12` (full width below heading)

### 2. Desktop Section (`hidden lg:block`)
- Use `<section className="min-h-screen bg-[#COLOR] text-white py-5 hidden lg:block">`
- Same alternating col-span pattern as mobile (empty↔content on left/right)
- **KEY DIFFERENCE**: Body content goes **inside the content column** with the heading, NOT in a separate col-span-12 row
- Desktop heading uses larger font: `lg:text-[3.5rem]` (vs mobile `text-[6vw] sm:text-4xl md:text-5xl`)
- Grid structure: Two columns only on desktop (col-span-5 empty div + col-span-7 with heading+body)
- **NOTE:** Use empty divs for now—do NOT add Image components until corresponding images are generated

### 3. Special Case: FAQ/PAA Section
- Single `<section>` block (no mobile/desktop split)
- Use `col-span-12` for the `<h2>`, then `col-span-12` for the full-width FAQ body
- No alternating pattern needed
- **PAA Q&A separator:** Add `<hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />` before the first Q&A item and between each Q&A item (but NOT after the last one)

---

## Grid Column Layout (12-column grid)

**Mobile (`lg:hidden`) — Heading and body separated:**
```
Section 1 (Lede):
  [col-span-5 empty] [col-span-7 heading]
  [col-span-12 body]

Section 2 (Benefits):
  [col-span-7 heading] [col-span-5 empty]
  [col-span-12 body]

Section 3 (Streamlining):
  [col-span-5 empty] [col-span-7 heading]
  [col-span-12 body]

Section 4 (Implementing):
  [col-span-7 heading] [col-span-5 empty]
  [col-span-12 body]

Section 5 (PAA):
  [col-span-12 heading]
  [col-span-12 body]
```

**Desktop (`hidden lg:block`) — Heading and body together in content column:**
```
Section 1 (Lede):
  [col-span-5 empty] [col-span-7 heading+body]

Section 2 (Benefits):
  [col-span-7 heading+body] [col-span-5 empty]

Section 3 (Streamlining):
  [col-span-5 empty] [col-span-7 heading+body]

Section 4 (Implementing):
  [col-span-7 heading+body] [col-span-5 empty]

Section 5 (PAA):
  [col-span-12 heading]
  [col-span-12 body] (single section, no mobile/desktop split)
```

---

## Background Color Rotation

Apply this 5-color rotation to the sections in H2 order, the FAQ/PAA included. Section N takes color N, so a page's colors are set by its H2s and nothing else (Jeff, 2026-10-21: "all sections of pillars, blog posts, and tools use same background colors and alternating layout which is also determined by h2's"):

1. `#023059` (dark blue)
2. `#024059` (blue)
3. `#025E73` (teal)
4. `#8C4E2A` (brown)
5. `#BF5934` (rust/orange)

Then repeat if more sections exist.

**Color assignment:** Hardcode each color directly as `bg-[#HEX]` on the `<section>` tag — no arrays, no props, no dynamic assignment.

**The hero is `#0B162A`**, set by `SharedHeroSection` / `ToolsHeroSection`. The rotation above starts at the first body section, so `#0B162A` is never the first entry.

**Where the home page fits.** The home page is the reference for the site palette, and it uses a subset of it: its top-level sections run `#0B162A` (hero) → `#023059` (Clone Yourself) → `#025E73` (Use Cases) → `#0B162A` (The Methodology) → `#8C4E2A` (Seamless Integrations), with `#C83803` and `#CBCBCB` as card/accent colors inside those sections, never as section backgrounds. `#024059` and `#BF5934` appear only in the page rotation — they are deliberately not on the home page, so do not treat their absence there as evidence the rotation is stale. Checked against `src/components/home/*.tsx` on 2026-10-02.

---

## Hand-Coding Content

All content must be written by hand in the JSX:

### Headings
- Mobile: `<h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">`
- Desktop: `<h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">`
- All must have `id` attribute matching the h2 id from the raw HTML source

### Subheadings (h3, h4)
- `<h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">`
- `<h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">`

### Body Text & Lists
- Paragraphs: `<p className="pt-3 text-base font-normal text-white shadow-text">`
- Bullet lists: Write each `<li>` individually inside `<ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">`
  - Do NOT use `.map()` over an array of bullets
  - Each bullet is a separate `<li>` element

### Links
- Use `<Link>` component with unique `id` attributes: `id="tools-marketing-[toolname]"` or `id="tools-marketing-[toolname]-[number]"` (for duplicates on same page)
- **Link color by background:**
  - On `#023059` and `#024059`: `className="text-[#C83803] hover:underline"` (orange)
  - On `#025E73`, `#8C4E2A` and `#BF5934`: `className="text-[#0B162A] hover:underline"` (dark blue), because orange is not visible on them. Teal joined this group on 2026-10-21 (Jeff).
- **Every link in the page content is bold** (Jeff, 2026-10-21). A base rule in `src/app/globals.css` sets it for every `a` inside `main`, so no link needs a `font-bold` class. A link inside a heading keeps the heading's weight.
- **Heading links follow the same rule** (Jeff, 2026-10-18). A `Link` or `GlossaryLink` inside an `h1` to `h6` takes the colour of the body links on that ground and carries `hover:underline`. It is never `text-white`, and it is never a bare `<a>` with no class. A heading names a tool with no page as plain text, with no link.
- A `GlossaryLink` on `#025E73`, `#8C4E2A` or `#BF5934` must pass `className="text-[#0B162A] hover:underline"`; its default is the orange.
- Links are relative (`/tools/...`), never `https://geekatyourspot.com/...`.

### Internal links (Jeff, 2026-10-19)
Every page in a cluster links to the others on words already in its text, at their first mention in body text (a paragraph, list item or table cell, not a heading). When a section has a block for each breakpoint, both blocks carry the link.

- **Tool page to its pillar:** the first mention of the pillar's topic (for example "approval workflows" or "Multi-State Sales Tax Nexus") links to the pillar.
- **Pillar to its blog post:** the pillar's lede, or the first section after the hero when there is no lede, ends with the sentence "For a shorter overview, read <post title> on our blog." The title links to the post.
- **Blog post to its pillar:** the first mention of the pillar's topic in the post's body links to the pillar. The export carries the anchor, so edit every copy of that export.
- **Pillar to pillar:** a pillar links its parent category page (Accounts Payable, Cash Flow Forecasting, Tax Compliance, Lead Capture Pipeline, Content Creation Workflow) and any sibling pillar whose topic it names. A passing mention such as "manual data entry" or "a spreadsheet" is not that topic.
- **Tool names:** a tool that has a page is linked at its first mention on every page that names it, the pillar's own tool page when the tool has one under several pillars. QuickBooks stays plain text until a general QuickBooks page exists.
- "More from the Blog" under each post lists the posts after it in its `BLOG_MENU` category, then the rest of its department (`src/lib/content-writer/related-posts.ts`), so a new post must be in `BLOG_MENU` to appear there.

### Navbar categories
Use Cases, Blog and Tools are `USE_CASES_MENU`, `BLOG_MENU` and `TOOLS_MENU` in `src/data/navigation/site-menus.ts`, which `src/components/layout/navbar.tsx` renders. Each department holds the categories the home page cards use (Lead Capture Pipeline, Content Creation Workflow, Automated Ad Spend Optimization; Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations), and a page that fits none goes in the department's own `items`.

- A new pillar, tool page or blog post goes into its category's `items`. A new category gets an entry with an `id` of the form `<section>-<department>-<category>`.
- A category shows its pages on hover with a mouse and on tap on a touch screen; a second tap or Enter closes it. Below `lg` the pages open under the category, and from `lg` up they open beside the category list, so hovering one never moves the others.
- The category is a button, not a link, so it does not use the tap toggle below. A category page that exists is the first entry in that category's `items`.

### Hover on touch screens
Tailwind's `hover:` variant sits inside `@media (hover: hover)`, so a phone never shows it. The site makes it show with a tap toggle, and no page needs anything extra for it:

- `src/app/globals.css` redefines `hover:` with `@custom-variant hover` so it also matches `[data-tapped]` and anything inside a `[data-tapped]` element.
- `src/components/shared/link-tap-toggle.tsx`, mounted once in `src/app/(site)/layout.tsx`, sets `data-tapped` on the first tap of a link on a screen that cannot hover. The second tap follows the link, and a tap anywhere else clears it. A keyboard, a screen reader and a mouse are not affected and follow the link at once.
- It covers every link whose class contains `hover:underline`, and every link that wraps a heading carrying a `hover:` class (the home page cards). A card whose only hover is a background change, such as the tool index cards, is not a text link and opens on the first tap.
- So a new link gets the toggle by carrying `hover:underline`, the same class it needs for the desktop hover.

### Glossary
- If content contains words/terms that should be in the Glossary (e.g., `lead scoring`, `CRM`, `predictive analytics`, `marketing automation`, `AI`), **create a glossary entry and link to the definition**.
- The glossary is served from the repo, not GeekAPI: `src/data/glossary/terms.ts` is the only copy of the definitions and `src/lib/glossary.ts` reads it. Check a slug exists there before linking it; adding a term is a code change and a deploy, not an API call. (The old `POST /api/glossary/terms` route is gone — do not reach for it.)
- Wrap every occurrence with `<GlossaryLink slug="term-slug">term</GlossaryLink>` (defaults to `text-[#C83803] hover:underline`, links to `/glossary/{slug}`).
- Use kebab-case slug (e.g., `lead-scoring`, `predictive-analytics`); ensure slug matches glossary entry.

---

## Shared Body Pattern (Recommended)

For sections with multiple paragraphs and subsections, define a reusable `const body = ( <> ... </> )` before the return statement, then use it in both mobile and desktop sections. This avoids code duplication.

**Mobile section structure:**
```tsx
<section className="min-h-screen bg-[#COLOR] text-white py-5 lg:hidden">
  <div className="container">
    <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
      <div className="col-span-5"></div>
      <div className="col-span-7">
        <h2>Heading</h2>
      </div>
      <div className="col-span-12">
        {body}
      </div>
    </div>
  </div>
</section>
```

**Desktop section structure:**
```tsx
<section className="min-h-screen bg-[#COLOR] text-white py-5 hidden lg:block">
  <div className="container">
    <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
      <div className="col-span-5"></div>
      <div className="col-span-7">
        <h2 className="lg:text-[3.5rem]">Heading</h2>
        {body}
      </div>
    </div>
  </div>
</section>
```

**Key difference:** Desktop has body INSIDE the col-span-7 div with the heading, not in a separate col-span-12 row.

---

## Verification Checklist

- [ ] All sections (except PAA) have both `lg:hidden` (mobile) and `hidden lg:block` (desktop) blocks
- [ ] **Mobile sections:** Heading in content column, body in separate `col-span-12` row
- [ ] **Desktop sections:** Heading AND body both inside the content column (same `col-span-7` or `col-span-5` div)
- [ ] Desktop section heading font is `lg:text-[3.5rem]`, mobile is `text-[6vw] sm:text-4xl md:text-5xl`
- [ ] Col-span pattern alternates: empty↔heading on left/right across sections (same for mobile & desktop)
- [ ] Background colors follow the 5-color rotation (hardcoded on each `<section>`)
- [ ] All content is hand-written JSX (no `.map()`, no arrays for repeated items)
- [ ] All headings and links have `id` attributes matching the raw HTML source
- [ ] PAA section is single block with `col-span-12` heading and `col-span-12` body
- [ ] PAA section has `<hr>` separators before first Q&A item and between each Q&A item (but not after the last)
- [ ] Link colors match background: `text-[#C83803]` (default), `text-[#0B162A]` (on `#025E73`, `#8C4E2A` or `#BF5934` backgrounds)
- [ ] Every link, including one inside a heading, carries `hover:underline` and the ground's link colour
- [ ] Internal links are in place: pillar to parent, siblings and blog post; every tool named with a page is linked (see "Internal links")
- [ ] Build passes with `npm run build` (no missing imports, no syntax errors)
- [ ] Page loads and sections display correctly on mobile and desktop

---

## Example File Structure

**Use-case pages:**
```
src/components/use-cases/marketing/[use-case-name]/
  hero-section.tsx (custom hero, not parameterized)
  lede-section.tsx (2 sections: mobile + desktop)
  [feature-section]-section.tsx (2 sections each)
  [another]-section.tsx
  paa-section.tsx (single section, FAQ format)
```

**Tool pages:**
```
src/components/tools/marketing/[tool-name]/
  overview-section.tsx (2 sections: mobile + desktop)
  key-capabilities-section.tsx (2 sections each)
  implementation-section.tsx (2 sections each)
  when-to-use-section.tsx (2 sections each)
```

Both follow the same mobile/desktop alternating layout pattern.

---

## Blog Posts (Rendered From the Export, Same Layout)

Blog posts are not hand-coded. `src/app/(site)/blog/[department]/[...slug]/page.tsx` renders each one from its Content Writer export, using the same section pattern as the pages above. When this pattern changes, change the blog template to match. Jeff reads a blog post next to its pillar, and any drift between them shows as an inconsistency (2026-10-18).

**Where each piece lives:**

| Piece | File |
|---|---|
| Sections | `src/components/blog/article-section.tsx` |
| Body | `src/components/blog/article-body.tsx` |
| Colour rotation and link colours | `src/components/blog/section-palette.ts` |
| Splitting the body into sections | `src/lib/content-writer/article-sections.ts` |
| Hero summary and link fixes | `src/lib/content-writer/content.ts` |

**Sections:**
- Every section has a `lg:hidden` block and a `hidden lg:block` block, with the heading in `col-span-7` beside an empty `col-span-5` spacer.
- The sections alternate sides, and on mobile the body sits in its own `col-span-12` row.
- The body is rendered once and placed in both blocks, like the hand-coded `body` constant.

**FAQ and PAA:** a section headed "Frequently Asked Questions" or "People Also Ask" is a single block. The `col-span-12` heading uses the single-block class, and each question has the `<hr>` above it, as in the Special Case above.

**Hero:**
- The hero shows the export's `<p class="hero-summary">`, as the pillar heroes do.
- The body drops that paragraph rather than running it as a section with no heading.
- Copy that comes before the first `<h2>` is titled "Overview", as the tool pages title their opening section.

**Classes:** class lists go through `clsx`, never `cn()`. `cn()` runs tailwind-merge, which reads `font-[var(--font-sora)]` as a font weight and silently drops `font-black`. That is why every blog heading rendered at 400 until 002dfd5.

**Links:**
- In-article links are colour-matched by `section-palette.ts`: `#C83803` on `#023059` and `#024059`, and `#0B162A` on `#025E73`, `#8C4E2A` and `#BF5934`.
- A link whose target was never built gets an entry in `LINK_OVERRIDES` in `content.ts`.
  - A string value sends the link to the real route.
  - A `null` value drops the anchor and keeps its words as plain text.
  - Remove the entry once the page ships.

**Blog verification:**
- [ ] Every blog post has a navbar entry, in its category's `items` in `BLOG_MENU` (`src/data/navigation/site-menus.ts`).
- [ ] The post links its pillar, and the pillar's lede links the post (see "Internal links").
- [ ] No in-article link is broken or goes through a redirect.
- [ ] No section is missing its heading.
- [ ] Headings measure weight 900 at both breakpoints.
- [ ] Links have the right colour for their ground.
- [ ] There is no horizontal overflow at 375px.

---

## Links to Reference Files

- Template page: `src/app/(site)/use-cases/marketing/ai-content-creation-workflow/page.tsx`
- Template section example: `src/components/use-cases/marketing/ai-content-creation-workflow/lede-section.tsx`
- Raw content source (if needed): `/backup/marketing/[use-case-folder]/` (HTML files)
