# Hand-Coded Use Case Page Layout Pattern Prompt

Use this prompt when building or rebuilding use-case pages following the `ai-content-creation-workflow` template pattern.

---

## The Task

Hand-code a use-case page's section components using the `ai-content-creation-workflow` template as the structural and styling reference. Do NOT use arrays, `.map()`, or generated code — every repeated element must be written by hand.

---

## Section Structure Requirements

Each section (except FAQ/PAA) must have **two parallel `<section>` blocks**:

### 1. Mobile Section (`lg:hidden`)
- Use `<section className="min-h-screen bg-[#COLOR] text-white py-5 lg:hidden">`
- Inside: full-width container with 12-column grid
- Grid layout for heading: **alternating col-span pattern**
  - Odd sections (1st, 3rd, 5th...): `col-span-5` empty (left) + `col-span-7` heading (right)
  - Even sections (2nd, 4th, 6th...): `col-span-7` heading (left) + `col-span-5` empty (right)
- All body content: `col-span-12` (full width below heading)

### 2. Desktop Section (`hidden lg:block`)
- Use `<section className="min-h-screen bg-[#COLOR] text-white py-5 hidden lg:block">`
- Same alternating col-span pattern as mobile, but with actual images OR empty divs
- Desktop heading uses larger font: `lg:text-[3.5rem]` (vs mobile `text-[6vw] sm:text-4xl md:text-5xl`)
- Body content in the content column, empty div on the opposite side

### 3. Special Case: FAQ/PAA Section
- Single `<section>` block (no mobile/desktop split)
- Use `col-span-9` for the `<h2>`, then `col-span-12` for the full-width FAQ body
- No alternating pattern needed

---

## Grid Column Layout (12-column grid)

**Alternating pattern (mobile & desktop identical):**
```
Section 1 (Lede):
  [col-span-5 empty] [col-span-7 content]
  [col-span-12 body]

Section 2 (Benefits):
  [col-span-7 content] [col-span-5 empty]
  [col-span-12 body]

Section 3 (Streamlining):
  [col-span-5 empty] [col-span-7 content]
  [col-span-12 body]

Section 4 (Implementing):
  [col-span-7 content] [col-span-5 empty]
  [col-span-12 body]

Section 5 (PAA):
  [col-span-9 heading]
  [col-span-12 body]
```

---

## Background Color Rotation

Apply this 5-color rotation to sections (not including hero or FAQ/PAA):

1. `#023059` (dark blue)
2. `#024059` (blue)
3. `#025E73` (teal)
4. `#8C4E2A` (brown)
5. `#BF5934` (rust/orange)

Then repeat if more sections exist.

**Color assignment:** Hardcode each color directly as `bg-[#HEX]` on the `<section>` tag — no arrays, no props, no dynamic assignment.

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
- Paragraphs: `<p className="pt-3 text-md font-normal text-white shadow-text">`
- Bullet lists: Write each `<li>` individually inside `<ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">`
  - Do NOT use `.map()` over an array of bullets
  - Each bullet is a separate `<li>` element

### Links
- Use `<Link>` component with unique `id` attributes: `id="tools-marketing-[toolname]"` or `id="tools-marketing-[toolname]-[number]"` (for duplicates on same page)
- Color: `className="text-[#C83803] hover:underline"`

---

## Shared Body Pattern (Optional)

For sections with multiple paragraphs and subsections, define a reusable `const body = ( <> ... </> )` before the return statement, then use it in both mobile and desktop sections:

```tsx
const body = (
  <>
    <p>...</p>
    <h3>...</h3>
    <p>...</p>
    <ul>
      <li>...</li>
    </ul>
  </>
);

return (
  <>
    <section className="... lg:hidden">
      <div>...{body}</div>
    </section>
    <section className="... hidden lg:block">
      <div>...{body}</div>
    </section>
  </>
);
```

---

## Verification Checklist

- [ ] All sections (except PAA) have both `lg:hidden` (mobile) and `hidden lg:block` (desktop) blocks
- [ ] Mobile and desktop sections use the SAME heading/column layout (same alternation)
- [ ] Desktop section heading font is `lg:text-[3.5rem]`, mobile is `text-[6vw] sm:text-4xl md:text-5xl`
- [ ] Col-span pattern alternates: empty↔heading on left/right across sections
- [ ] Background colors follow the 5-color rotation (hardcoded on each `<section>`)
- [ ] All content is hand-written JSX (no `.map()`, no arrays for repeated items)
- [ ] All headings and links have `id` attributes matching the raw HTML source
- [ ] PAA section is single block with `col-span-9` heading and `col-span-12` body
- [ ] Build passes with `npm run build` (no missing imports, no syntax errors)
- [ ] Page loads and sections display correctly on mobile and desktop

---

## Example File Structure

```
src/components/use-cases/marketing/[use-case-name]/
  hero-section.tsx (custom hero, not parameterized)
  lede-section.tsx (2 sections: mobile + desktop)
  [feature-section]-section.tsx (2 sections each)
  [another]-section.tsx
  paa-section.tsx (single section, FAQ format)
```

---

## Links to Reference Files

- Template page: `src/app/(site)/use-cases/marketing/ai-content-creation-workflow/page.tsx`
- Template section example: `src/components/use-cases/marketing/ai-content-creation-workflow/lede-section.tsx`
- Raw content source (if needed): `/backup/marketing/[use-case-folder]/` (HTML files)
