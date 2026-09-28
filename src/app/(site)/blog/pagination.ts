import { listEntries } from "@/lib/content-writer/content";

export type BlogIndexItem = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  department: string;
  date: string | null;
};

export type BlogIndexData = {
  page: number;
  blogs: BlogIndexItem[];
};

/**
 * One featured post plus four rows of three. Tools and use cases are not blog
 * posts and no longer appear on this index, so a page is posts and nothing else.
 */
export const POSTS_PER_PAGE = 13;

function toBlogItems(): BlogIndexItem[] {
  return listEntries("blog").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
    department: entry.department,
    date: entry.date,
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
    blogs: all.slice(start, start + POSTS_PER_PAGE),
  };
}
