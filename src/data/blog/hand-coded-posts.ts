/**
 * Blog posts that are hand-coded pages under src/app/(site)/blog, not exported HTML. The blog
 * index lists them alongside the exported posts, so each one is added here by hand when its page
 * is built.
 */
export type HandCodedPost = Readonly<{
  href: string;
  title: string;
  excerpt: string;
  department: string;
  date: string;
}>;

export const HAND_CODED_POSTS: readonly HandCodedPost[] = [
  {
    href: "/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses",
    title: "AI-Driven Lead Scoring for Small Businesses",
    excerpt:
      "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
    department: "marketing",
    date: "2026-09-02T15:52:27.1724249Z",
  },
];
