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

**Status:** Open, waiting on your decision.
