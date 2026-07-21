import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const COLLECTIONS = ["use-cases", "blog", "tools"] as const;
export type Collection = (typeof COLLECTIONS)[number];

/**
 * One node in the nested H2-H6 heading tree — each heading individually addressable
 * (e.g. entry.sections[1].children[0].heading) instead of one blob per H2. Level 0
 * with a null heading is any content before the first H2.
 */
export interface ContentSection {
  level: number;
  heading: string | null;
  body: string;
  /** `body` split on blank lines — render these instead of `body` to avoid one giant paragraph. */
  paragraphs: string[];
  children: ContentSection[];
}

export interface ContentEntry {
  title: string;
  description: string;
  slug: string;
  department: string;
  date: string;
  excerpt: string;
  mainSummary: string;
  heroSummary: string;
  homeSummary: string;
  blogSummary: string;
  advertisingSummary: string;
  tags: string[];
  heroImage?: string;
  sections: ContentSection[];
  body: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content-writer-output");

function collectionDir(collection: Collection): string {
  return path.join(CONTENT_DIR, collection);
}

// Both extensions supported during the .mdx -> .html migration in content-writer-v2 —
// drop ".mdx" here once that repo's export service only emits .html and this
// directory has been fully regenerated.
const CONTENT_EXTENSIONS = [".html", ".mdx"] as const;

export function listSlugs(collection: Collection): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  const slugs = new Set<string>();
  for (const f of fs.readdirSync(dir)) {
    const ext = CONTENT_EXTENSIONS.find((e) => f.endsWith(e));
    if (ext) slugs.add(f.slice(0, -ext.length));
  }
  return Array.from(slugs);
}

export function listEntries(collection: Collection): ContentEntry[] {
  return listSlugs(collection)
    .map((slug) => readEntry(collection, slug))
    .filter((e): e is ContentEntry => e !== null);
}

function resolveContentFile(collection: Collection, slug: string): string | null {
  for (const ext of CONTENT_EXTENSIONS) {
    const filePath = path.join(collectionDir(collection), `${slug}${ext}`);
    if (fs.existsSync(filePath)) return filePath;
  }
  return null;
}

export function readEntry(collection: Collection, slug: string): ContentEntry | null {
  const filePath = resolveContentFile(collection, slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title ?? "",
    description: data.description ?? "",
    slug: data.slug ?? slug,
    department: data.department ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    mainSummary: data.mainSummary ?? "",
    heroSummary: data.heroSummary ?? "",
    homeSummary: data.homeSummary ?? "",
    blogSummary: data.blogSummary ?? "",
    advertisingSummary: data.advertisingSummary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    heroImage: data.heroImage ?? "",
    sections: Array.isArray(data.sections) ? data.sections.map(toContentSection) : [],
    body: content.trim(),
  };
}

function toContentSection(raw: Partial<ContentSection> & { children?: unknown[] }): ContentSection {
  const body = raw.body ?? "";
  return {
    level: raw.level ?? 0,
    heading: raw.heading ?? null,
    body,
    paragraphs: splitParagraphs(body),
    children: Array.isArray(raw.children) ? raw.children.map(toContentSection) : [],
  };
}

function splitParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
