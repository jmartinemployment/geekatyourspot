import { decodeEntities } from "./content";

/**
 * Splits a Content Writer article body into the sections the site renders as
 * alternating full-height colour blocks.
 *
 * The body arriving here has already been through `sanitizeBody`, so it is a
 * flat, machine-generated fragment: no attributes except `href`/`target`/`rel`
 * on anchors, no same-tag nesting, and a closed tag vocabulary. That is what
 * makes scanning it with the small reader below safe -- it is not a general
 * HTML parser and must not be pointed at arbitrary markup.
 *
 * Modelled: `p`, `h3`, `h4`, `ul`, `ol`, `li`, `a`, `strong`, `em`, `b`, `i`,
 * `br`. `<h2>` is consumed as the section boundary rather than as content.
 *
 * Known gap, stated rather than asserted away: `sanitizeBody`'s allow-list also
 * admits `blockquote`, `figure`, `figcaption`, `img`, `hr` and the `table`
 * family. None occur anywhere in the current corpus (verified by tag census
 * across all 12 posts), and an unmodelled tag is dropped rather than guessed at
 * -- no unwrapping to bare text, no raw-HTML escape hatch. Add a node kind here
 * when an export first needs one.
 */

export type InlineNode =
  | { kind: "text"; text: string }
  | { kind: "emphasis"; strong: boolean; children: InlineNode[] }
  | {
      kind: "link";
      href: string;
      external: boolean;
      /** Set when the anchor points at `/glossary/<slug>`, so it can render as a GlossaryLink. */
      glossarySlug: string | null;
      children: InlineNode[];
    };

export type BlockNode =
  | { kind: "paragraph"; children: InlineNode[] }
  | { kind: "subheading"; level: 3 | 4; text: string }
  | { kind: "list"; ordered: boolean; items: InlineNode[][] };

export type ArticleSection = {
  /** Slugified heading, unique within the article; anchors and GTM ids hang off it. */
  id: string;
  /** Null for the lede -- the copy some posts run before their first `<h2>`. */
  heading: string | null;
  blocks: BlockNode[];
};

const BLOCK_PATTERN = /<(p|h3|h4|ul|ol)>([\s\S]*?)<\/\1>/g;
const LIST_ITEM_PATTERN = /<li>([\s\S]*?)<\/li>/g;
const INLINE_PATTERN = /<(a|strong|em|b|i)((?:\s[^>]*)?)>([\s\S]*?)<\/\1>/g;
const SECTION_PATTERN = /<h2>([\s\S]*?)<\/h2>/g;

function textNode(raw: string): InlineNode | null {
  const text = decodeEntities(raw.replace(/<br\s*\/?>/gi, " "));
  return text.length > 0 ? { kind: "text", text } : null;
}

function parseInline(html: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let cursor = 0;

  INLINE_PATTERN.lastIndex = 0;
  for (const match of html.matchAll(INLINE_PATTERN)) {
    const start = match.index;

    const before = textNode(html.slice(cursor, start));
    if (before) nodes.push(before);

    const [, tag, attrs, inner] = match;
    const children = parseInline(inner);

    if (children.length > 0) {
      if (tag === "a") {
        const href = attrs.match(/\shref="([^"]*)"/)?.[1] ?? "";
        if (href.length > 0) {
          const glossary = href.match(/^\/glossary\/([^/?#]+)$/);
          nodes.push({
            kind: "link",
            href,
            external: /^https?:/i.test(href),
            glossarySlug: glossary ? glossary[1] : null,
            children,
          });
        }
      } else {
        nodes.push({
          kind: "emphasis",
          strong: tag === "strong" || tag === "b",
          children,
        });
      }
    }

    cursor = start + match[0].length;
  }

  const tail = textNode(html.slice(cursor));
  if (tail) nodes.push(tail);

  return nodes;
}

function parseBlocks(html: string): BlockNode[] {
  const blocks: BlockNode[] = [];

  BLOCK_PATTERN.lastIndex = 0;
  for (const match of html.matchAll(BLOCK_PATTERN)) {
    const [, tag, inner] = match;

    if (tag === "p") {
      const children = parseInline(inner);
      if (children.length > 0) blocks.push({ kind: "paragraph", children });
      continue;
    }

    if (tag === "h3" || tag === "h4") {
      const text = decodeEntities(inner.replace(/<[^>]*>/g, "")).trim();
      if (text.length > 0) {
        blocks.push({ kind: "subheading", level: tag === "h3" ? 3 : 4, text });
      }
      continue;
    }

    const items: InlineNode[][] = [];
    LIST_ITEM_PATTERN.lastIndex = 0;
    for (const item of inner.matchAll(LIST_ITEM_PATTERN)) {
      const children = parseInline(item[1]);
      if (children.length > 0) items.push(children);
    }
    if (items.length > 0) blocks.push({ kind: "list", ordered: tag === "ol", items });
  }

  return blocks;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Two headings in one article can slugify identically; the anchor and the GTM
 * id both need to stay unique, so repeats get a numeric suffix.
 */
function uniqueId(base: string, taken: Set<string>, ordinal: number): string {
  const seed = base.length > 0 ? base : `section-${ordinal}`;
  if (!taken.has(seed)) {
    taken.add(seed);
    return seed;
  }

  let suffix = 2;
  while (taken.has(`${seed}-${suffix}`)) suffix += 1;
  const id = `${seed}-${suffix}`;
  taken.add(id);
  return id;
}

/**
 * Turns a sanitized article body into its ordered sections. Returns an empty
 * array when nothing renders -- the caller shows no sections rather than
 * falling back to unparsed markup.
 */
export function toArticleSections(bodyHtml: string): ArticleSection[] {
  const sections: ArticleSection[] = [];
  const taken = new Set<string>();

  const boundaries = [...bodyHtml.matchAll(SECTION_PATTERN)];

  const ledeHtml = boundaries.length > 0 ? bodyHtml.slice(0, boundaries[0].index) : bodyHtml;
  const ledeBlocks = parseBlocks(ledeHtml);
  if (ledeBlocks.length > 0) {
    sections.push({ id: uniqueId("introduction", taken, 0), heading: null, blocks: ledeBlocks });
  }

  for (const [position, boundary] of boundaries.entries()) {
    const start = boundary.index + boundary[0].length;
    const end =
      position + 1 < boundaries.length ? boundaries[position + 1].index : bodyHtml.length;

    const heading = decodeEntities(boundary[1].replace(/<[^>]*>/g, "")).trim();
    const blocks = parseBlocks(bodyHtml.slice(start, end));

    if (heading.length === 0 && blocks.length === 0) continue;

    sections.push({
      id: uniqueId(slugifyHeading(heading), taken, position + 1),
      heading: heading.length > 0 ? heading : null,
      blocks,
    });
  }

  return sections;
}
