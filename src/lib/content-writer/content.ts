import fs from "fs";
import path from "path";

/**
 * Reads the Content Writer HTML exports off disk and turns them into typed
 * entries the app can render. Two source trees feed this:
 *
 *   content-writer-output/<collection>/<slug>.html   -- current export
 *   backup/**\/<slug>.html                           -- archived exports
 *
 * Every published article carries a <link rel="canonical"> that already encodes
 * its collection and department (e.g. /blog/marketing/<slug>), so that is what
 * classifies a file. Anything without one (image prompts, social posts, cold
 * outreach emails) is skipped.
 */

export const COLLECTIONS = ["use-cases", "blog", "tools"] as const;

export type Collection = (typeof COLLECTIONS)[number];

export type ContentEntry = {
  collection: Collection;
  department: string;
  slug: string;
  href: string;
  title: string;
  headline: string;
  description: string;
  excerpt: string;
  date: string | null;
  tags: string[];
  jsonLd: string | null;
  sourcePath: string;
};

export type ContentPage = ContentEntry & {
  /** Article body, sanitized and with the leading <h1> removed. */
  bodyHtml: string;
};

const ROOT = process.cwd();
const EXPORT_DIR = path.join(ROOT, "content-writer-output");
const BACKUP_DIR = path.join(ROOT, "backup");

const COLLECTION_BY_SEGMENT = new Map<string, Collection>(
  COLLECTIONS.map((collection) => [collection, collection]),
);

function decodeEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function walkHtmlFiles(dir: string, found: string[] = []): string[] {
  if (!fs.existsSync(dir)) return found;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      // `old/` holds superseded drafts that are still on disk.
      if (item.name === "old" || item.name === "node_modules") continue;
      walkHtmlFiles(full, found);
    } else if (item.isFile() && item.name.endsWith(".html")) {
      found.push(full);
    }
  }

  return found;
}

type ParsedFile = {
  entry: ContentEntry;
  bodyHtml: string;
};

function parseFile(filePath: string): ParsedFile | null {
  const html = fs.readFileSync(filePath, "utf-8");

  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonicalMatch) return null;

  let canonicalPath: string;
  try {
    canonicalPath = new URL(decodeEntities(canonicalMatch[1])).pathname;
  } catch {
    return null;
  }

  const [collectionSegment, department, ...rest] = canonicalPath
    .split("/")
    .filter(Boolean);

  const collection = COLLECTION_BY_SEGMENT.get(collectionSegment ?? "");
  if (!collection || !department || rest.length !== 1) return null;

  const slug = rest[0];

  const meta: Record<string, string> = {};
  for (const match of html.matchAll(/<meta name="([^"]+)"\s+content="([^"]*)"\s*\/?>/gs)) {
    meta[match[1]] = decodeEntities(match[2]);
  }

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? decodeEntities(titleMatch[1]).trim() : slug;

  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  const jsonLd = jsonLdMatch ? jsonLdMatch[1].trim() : null;

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
  const rawBody = bodyMatch ? bodyMatch[1] : "";

  const h1Match = rawBody.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const headline = h1Match
    ? decodeEntities(h1Match[1].replace(/<[^>]+>/g, "")).trim()
    : title.split("|")[0].trim();

  const excerpt =
    meta.blogSummary ||
    meta.excerpt ||
    meta.mainSummary ||
    meta.description ||
    "";

  const entry: ContentEntry = {
    collection,
    department,
    slug,
    href: `/${collection}/${department}/${slug}`,
    title,
    headline,
    description: meta.description ?? excerpt,
    excerpt,
    date: meta.date ?? datePublishedFromJsonLd(jsonLd),
    tags: meta.tags
      ? meta.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [],
    jsonLd,
    sourcePath: path.relative(ROOT, filePath),
  };

  return { entry, bodyHtml: sanitizeBody(rawBody, headline) };
}

function datePublishedFromJsonLd(jsonLd: string | null): string | null {
  if (!jsonLd) return null;
  const match = jsonLd.match(/"datePublished"\s*:\s*"([^"]+)"/);
  return match ? match[1] : null;
}

const ALLOWED_TAGS = new Set([
  "p",
  "h2",
  "h3",
  "h4",
  "ul",
  "ol",
  "li",
  "a",
  "strong",
  "em",
  "b",
  "i",
  "blockquote",
  "figure",
  "figcaption",
  "img",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "br",
  "hr",
]);

/**
 * Hand-maintained fixes for in-article links whose path does not match the
 * route that actually got built. Add an entry when an export links somewhere
 * that does not exist; remove it once the real page ships.
 */
const LINK_OVERRIDES: Record<string, string> = {
  // Route is nested one level deeper than the export assumes.
  "/use-cases/accounting/cash-flow-forecasting":
    "/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting",
  // Export uses the "intelligent-" prefix; the route does not.
  "/use-cases/accounting/intelligent-tax-compliance-regulations":
    "/use-cases/accounting/tax-compliance-regulations",
  // No page for this use case yet -- fall back to the department index.
  "/use-cases/marketing/automated-ad-spend-optimization": "/use-cases/marketing",
};

/**
 * Turns links back into site-relative paths so they route through Next instead
 * of bouncing the reader out to the production domain, then applies any
 * override above. Off-site links are left alone.
 */
function internalizeHref(href: string): string {
  let path = href;

  const sameSite = href.match(/^https?:\/\/(?:www\.)?geekatyourspot\.com(\/[^"]*)?$/i);
  if (sameSite) {
    path = sameSite[1] ?? "/";
  } else if (/^https?:/i.test(href)) {
    return href;
  }

  const [pathname, suffix = ""] = path.split(/(?=[?#])/, 2);
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  return (LINK_OVERRIDES[normalized] ?? normalized) + suffix;
}

/**
 * The exports are machine generated from a known template, so this keeps the
 * small set of structural tags and drops everything else -- comments, the GTM
 * script/noscript pair (the root layout already loads GTM), and the leading
 * <h1>, which the page renders itself from the entry metadata.
 */
function sanitizeBody(rawBody: string, headline: string): string {
  let body = rawBody
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|iframe)[\s\S]*?<\/\1>/gi, "")
    .replace(/<h1[\s\S]*?<\/h1>/i, "")
    .trim();

  // Some exports repeat the headline as the first <h2>; the page already prints it.
  const leadingH2 = body.match(/^<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (leadingH2) {
    const text = decodeEntities(leadingH2[1].replace(/<[^>]+>/g, "")).trim();
    if (text.toLowerCase() === headline.toLowerCase()) {
      body = body.slice(leadingH2[0].length);
    }
  }

  body = body.replace(/<\/?([a-zA-Z0-9]+)((?:\s[^>]*)?)>/g, (tag, name: string, attrs: string) => {
    const tagName = name.toLowerCase();
    if (!ALLOWED_TAGS.has(tagName)) return "";
    if (tag.startsWith("</")) return `</${tagName}>`;

    if (tagName === "a") {
      const href = attrs.match(/\shref="([^"]*)"/i)?.[1] ?? "";
      const safeHref = /^(https?:|\/|#|mailto:)/i.test(href) ? internalizeHref(href) : "#";
      const external = /^https?:/i.test(safeHref);
      return `<a href="${safeHref}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>`;
    }

    if (tagName === "img") {
      const src = attrs.match(/\ssrc="([^"]*)"/i)?.[1] ?? "";
      const alt = attrs.match(/\salt="([^"]*)"/i)?.[1] ?? "";
      if (!src) return "";
      return `<img src="${src}" alt="${alt}" loading="lazy" />`;
    }

    return `<${tagName}>`;
  });

  return body.trim();
}

function loadAll(): Map<string, ParsedFile> {
  const byHref = new Map<string, ParsedFile>();

  // Backup first, so a current export of the same article overwrites it.
  const files = [...walkHtmlFiles(BACKUP_DIR), ...walkHtmlFiles(EXPORT_DIR)];

  for (const file of files) {
    const parsed = parseFile(file);
    if (!parsed) continue;
    byHref.set(parsed.entry.href, parsed);
  }

  return byHref;
}

let cache: Map<string, ParsedFile> | null = null;

function getCache(): Map<string, ParsedFile> {
  if (process.env.NODE_ENV === "development") return loadAll();
  cache ??= loadAll();
  return cache;
}

function byDateDesc(a: ContentEntry, b: ContentEntry): number {
  const left = a.date ? Date.parse(a.date) : 0;
  const right = b.date ? Date.parse(b.date) : 0;
  if (right !== left) return right - left;
  return a.slug.localeCompare(b.slug);
}

export function listEntries(collection: Collection): ContentEntry[] {
  return [...getCache().values()]
    .map((parsed) => parsed.entry)
    .filter((entry) => entry.collection === collection)
    .sort(byDateDesc);
}

export function getEntry(
  collection: Collection,
  department: string,
  slug: string,
): ContentPage | null {
  const parsed = getCache().get(`/${collection}/${department}/${slug}`);
  if (!parsed) return null;
  return { ...parsed.entry, bodyHtml: parsed.bodyHtml };
}
