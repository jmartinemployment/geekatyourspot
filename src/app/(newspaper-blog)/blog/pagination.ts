import { listEntries } from "@/lib/content-writer/content";

export type NewspaperItem = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
};

export type NewspaperPageData = {
  page: number;
  pillars: NewspaperItem[];
  tools: NewspaperItem[];
  blogs: NewspaperItem[];
};

/** Blog posts printed per edition: one lead story plus the wire column. */
export const POSTS_PER_PAGE = 4;

function getPillars(page: number): NewspaperItem[] {
  const all = listEntries("use-cases").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
  const offset = ((page - 1) * 3) % Math.max(all.length, 1);
  return all.slice(offset, offset + 3);
}

function getTools(page: number): NewspaperItem[] {
  const all = listEntries("tools").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
  const offset = ((page - 1) * 4) % Math.max(all.length, 1);
  return all.slice(offset, offset + 4);
}

function toNewspaperItems(): NewspaperItem[] {
  return listEntries("blog").map((entry) => ({
    slug: `${entry.department}/${entry.slug}`,
    href: entry.href,
    title: entry.headline || entry.title,
    excerpt: entry.excerpt,
  }));
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(toNewspaperItems().length / POSTS_PER_PAGE));
}

export function getNewspaperPage(page: number): NewspaperPageData {
  const all = toNewspaperItems();
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
