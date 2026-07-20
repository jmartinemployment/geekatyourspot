import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const COLLECTIONS = ["use-cases", "blog", "tools"] as const;
export type Collection = (typeof COLLECTIONS)[number];

export interface ContentSection {
  heading: string;
  body: string;
  image?: string;
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

export function listSlugs(collection: Collection): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function listEntries(collection: Collection): ContentEntry[] {
  return listSlugs(collection)
    .map((slug) => readEntry(collection, slug))
    .filter((e): e is ContentEntry => e !== null);
}

export function readEntry(collection: Collection, slug: string): ContentEntry | null {
  const filePath = path.join(collectionDir(collection), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

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
    sections: Array.isArray(data.sections)
      ? data.sections.map((s: Partial<ContentSection>) => ({
          heading: s.heading ?? "",
          body: s.body ?? "",
          image: s.image ?? "",
        }))
      : [],
    body: content.trim(),
  };
}
