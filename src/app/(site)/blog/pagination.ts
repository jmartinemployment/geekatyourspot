import { listEntries } from "@/lib/content-writer/content";

export type BlogIndexItem = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
};

export type BlogIndexData = {
  page: number;
  pillars: BlogIndexItem[];
  tools: BlogIndexItem[];
  blogs: BlogIndexItem[];
};

/** Blog posts listed per index page. */
export const POSTS_PER_PAGE = 4;

function getPillars(page: number): BlogIndexItem[] {
  const all = listEntries("use-cases").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
  const offset = ((page - 1) * 3) % Math.max(all.length, 1);
  return all.slice(offset, offset + 3);
}

function getTools(page: number): BlogIndexItem[] {
  const all = listEntries("tools").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
  const offset = ((page - 1) * 4) % Math.max(all.length, 1);
  return all.slice(offset, offset + 4);
}

function toBlogItems(): BlogIndexItem[] {
  return listEntries("blog").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(toBlogItems().length / POSTS_PER_PAGE));
}

export function getBlogIndexPage(page: number): BlogIndexData {
  const all = toBlogItems();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * POSTS_PER_PAGE;

  return {
    page: current,
    pillars: getPillars(current),
    tools: getTools(current),
    blogs: all.slice(start, start + POSTS_PER_PAGE),
  };
}
