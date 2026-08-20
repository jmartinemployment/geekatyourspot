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

/**
 * Sidebar rails. These stay hand-curated because they point at hand-built
 * marketing pages, not at Content Writer exports.
 */
export const pillars: NewspaperItem[] = [
  {
    slug: "ai-marketing-systems",
    href: "/use-cases/marketing/ai-marketing-systems",
    title: "AI Marketing Systems for Small Businesses",
    excerpt:
      "Local shops that once dismissed AI as enterprise-only are now automating scheduling, invoicing, and customer follow-up with tools built for their scale.",
  },
  {
    slug: "automated-accounts-payable",
    href: "/use-cases/accounting/accounts-payable/automated-accounts-payable",
    title: "The Real Cost of Manual Data Entry, Quantified",
    excerpt:
      "We tallied the hours a five-person accounting office spends on copy-paste work in a year. The number surprised even us.",
  },
  {
    slug: "tax-compliance-regulations",
    href: "/use-cases/accounting/tax-compliance-regulations",
    title: "A Tax Season Playbook for Two-Person Firms",
    excerpt:
      "Compliance automation isn't just for the Big Four. Here's what a lean bookkeeping shop can put in place before January.",
  },
];

export const tools: NewspaperItem[] = [
  {
    slug: "intelligent-lead-capture-pipeline",
    href: "/use-cases/marketing/intelligent-lead-capture-pipeline",
    title: "Inside the Marketing Lead-Capture Pipeline",
    excerpt:
      "A look at how automated intake forms route qualified leads straight to a rep's calendar in under sixty seconds.",
  },
  {
    slug: "ai-content-creation-workflow",
    href: "/use-cases/marketing/ai-content-creation-workflow",
    title: "AI Content Creation Workflow",
    excerpt: "Plan, draft, and publish without the copy-paste relay between four tools.",
  },
  {
    slug: "accounting-automation-suite",
    href: "/use-cases/accounting",
    title: "Accounting Automation Suite",
    excerpt: "Cuts manual entry and reconciliation time for small back offices.",
  },
  {
    slug: "marketing-lead-capture",
    href: "/use-cases/marketing",
    title: "Marketing Lead-Capture Pipeline",
    excerpt: "Routes and qualifies inbound leads before your team ever sees them.",
  },
];

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
    pillars,
    tools,
    blogs: all.slice(start, start + POSTS_PER_PAGE),
  };
}
