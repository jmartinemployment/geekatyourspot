# `#C83803` link text contrast

Audit reference: GEO L2 in `plans/geo-seo-audit-2026-10-20.md`

## The problem

The brand orange, `#C83803`, is the colour of most link text on the site.
- It's used as a text colour (`text-[#C83803]`) 1,656 times in 405 files, for links, "Learn more" lines and icons (rechecked 2026-10-21).
- Almost all of those sit on dark blue or teal backgrounds.

Contrast is how strongly text stands out from its background. The accessibility standard (WCAG AA) asks for 4.5 to 1 for normal text, and 3 to 1 for large text (about 24 px, or 19 px bold).

| Background | Files that pair it with orange text | Contrast with `#C83803` |
|---|---|---|
| `#023059` (dark blue) | 213 | 2.56 to 1 |
| `#024059` (blue) | 123 | 2.14 to 1 |
| `#025E73` (teal) | 53 | 1.41 to 1 |
| `#0B162A` (navy, the tool cards) | 17 | 3.46 to 1 |
| White | 0 | 5.22 to 1 |

The file counts and ratios were rechecked on 2026-10-21. The ratios use the WCAG formula.

- Orange link text fails on every dark background the site uses.
- The orange buttons are fine: white text on `#C83803` (`src/app/globals.css:188`) measures 5.22 to 1.

Why it matters:
- Readers miss links they can't see, especially on phones outdoors.
- Lighthouse flags low contrast and lowers the accessibility score.
- Google doesn't rank on contrast directly.

## What development mode means for it

The colour can change now at no cost. Nothing about it reaches search before launch.

## What I need from you

Which way to go, since this is your brand colour:

- **Keep `#C83803` for all link text.** The look is unchanged, and links stay below the standard on every dark background.
- **A lighter orange for link text on dark backgrounds only.** Buttons, icons and headings stay `#C83803`. For example, `#FF8A5B` measures:
  - 5.76 to 1 on `#023059`;
  - 4.81 to 1 on `#024059`;
  - 7.78 to 1 on `#0B162A`;
  - 3.17 to 1 on `#025E73`, which is enough for large text only.

  It stays close to the brand, but the teal sections still need white or an even lighter tint.
- **White link text with an orange underline.** It measures 7.37 to 1 or better on every dark background, and orange becomes an accent rather than the text colour.

## My recommendation

Recommendation: a lighter orange for link text on dark backgrounds, set once as a shared colour, with white link text in the teal sections.

Reason: it keeps the orange look while meeting the standard. Defining it once avoids 1,656 separate colour choices.

## The plan once you decide

1. Add the chosen link colour as one shared value in `src/app/globals.css`.
2. Replace `text-[#C83803]` on link text in dark sections with that value, in both breakpoint copies. Icons, headings and buttons keep `#C83803`. No font classes change.
3. If you choose white with an underline, add the underline in the brand orange to the same link class.

## How I'll check it, and its status

- Recompute the contrast for every text and background pair the change touches.
- Run the Lighthouse accessibility audit on five page types, and take headless screenshots at 390 and 1440 px.

**What this document left out.** The site already had a second link colour. Since the hand-coded layout spec, links on the brown `#8C4E2A` and orange `#BF5934` sections are navy `#0B162A`, not orange, and so are blog links on those grounds (`src/components/blog/section-palette.ts`). The table above covered only the backgrounds paired with orange text. With every section colour and both link colours:

| Section background | `#C83803` orange | `#0B162A` navy | White |
|---|---|---|---|
| `#023059` (dark blue) | 2.56 to 1 | 1.35 to 1 | 13.38 to 1 |
| `#024059` (blue) | 2.14 to 1 | 1.62 to 1 | 11.17 to 1 |
| `#025E73` (teal) | 1.41 to 1 | 2.45 to 1 | 7.37 to 1 |
| `#8C4E2A` (brown) | 1.24 to 1 | 2.79 to 1 | 6.48 to 1 |
| `#BF5934` (orange) | 1.17 to 1 | 4.04 to 1 | 4.47 to 1 |

**Applied on 2026-10-21, at your direction:** "Make all links bold" and "025E73 background with 0B162A link color".
- **Bold.** A base rule in `src/app/globals.css` makes every link inside `main` bold, including the blog articles. A link inside a heading keeps the heading's heavier weight, and a weight class on a link still wins. The navbar and footer are outside `main` and don't change.
- **Teal takes navy.** In the 204 files whose only section colour is teal, 98 link classes and 115 glossary links changed from orange to `#0B162A`. Blog sections on teal take navy through `section-palette.ts`. The department link on `/use-cases` takes navy on teal, brown and orange sections. Orange rules (`<hr>`) and icons are not links and stay orange. The home page's use-case links sit on white cards, where orange measures 5.22 to 1, so they stay orange.
- **The spec.** `plans/hand-coded-use-case-page-layout-prompt.md` states both rules for new pages.
- **Checked on a production build.** A headless browser read all 7,687 visible links in `main` on all 447 pages, at 390 and 1440 px. Every one is bold, no orange link sits on a teal, brown or orange section, and links in headings keep the heading's weight.
- **Still below the standard.** Navy on teal is 2.45 to 1, better than orange's 1.41 but under 4.5 to 1, and the orange links on the two blue sections are 2.56 and 2.14. Bold makes links easier to see, but at body size the standard still asks for 4.5 to 1. White is the only link colour that passes on every section.

**Decided on 2026-10-21:** "Orange is my color." Orange stays the link colour on the two blue sections, and navy stays on teal, brown and orange, with the contrast above accepted. White links are not used.

**White shadow on orange links, decided 2026-10-21:** "That is settled, text-shadow-2xs text-shadow-white". Eight shadows were compared side by side on both blue sections, and this one, a thin sharp white edge under each letter, read the most clearly. It is on 416 orange link classes, the `GlossaryLink` default, the blog's orange link class in `section-palette.ts`, the department links on `/use-cases`, the glossary page's back link and the footer link. The home page's orange links sit on white cards, where a white shadow would not show, so they keep their class. The one-page trial of `shadow-text-white` is replaced; the class stays defined in `globals.css` at 50%.

**Status:** Done.
