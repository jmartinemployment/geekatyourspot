/**
 * The fixed section sequence shared by tool, use-case and blog pages.
 *
 * Blog posts carry 2 to 7 sections rather than the tools' fixed 4, so the
 * sequence cycles. Five entries means a cycle never places the same colour in
 * adjacent sections, which a four-entry palette would do at the wrap.
 *
 * Class strings are written out in full on purpose: Tailwind only generates an
 * arbitrary-value utility it can see in the source, so a computed
 * `bg-[${colour}]` would compile to nothing.
 */
const SECTION_BACKGROUNDS = [
  "bg-[#023059]",
  "bg-[#024059]",
  "bg-[#025E73]",
  "bg-[#8C4E2A]",
  "bg-[#BF5934]",
] as const;

/** The first background after the hero, and the ground for the blog index. */
export const FIRST_SECTION_BACKGROUND = SECTION_BACKGROUNDS[0];

/**
 * Orange disappears against the two warm grounds, so those take the dark navy
 * instead. Same split the hand-coded tool sections use.
 */
const LINK_ON_COOL = "text-[#C83803] hover:underline";
const LINK_ON_WARM = "text-[#0B162A] hover:underline";

const WARM_BACKGROUNDS = new Set<string>(["bg-[#8C4E2A]", "bg-[#BF5934]"]);

export function backgroundForSection(index: number): string {
  return SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
}

export function linkClassForBackground(background: string): string {
  return WARM_BACKGROUNDS.has(background) ? LINK_ON_WARM : LINK_ON_COOL;
}

/**
 * Sections alternate sides the way the use-case pillars do: odd-numbered
 * sections put their text on the right, even-numbered on the left.
 */
export function textOnRight(index: number): boolean {
  return index % 2 === 0;
}
