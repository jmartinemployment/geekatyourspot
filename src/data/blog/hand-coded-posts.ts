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
    href: "/blog/marketing/lead-capture-pipeline/ai-lead-scoring",
    title: "AI Lead Scoring",
    excerpt:
      "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
    department: "marketing",
    date: "2026-09-02T15:52:27.1724249Z",
  },
  {
    href: "/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now",
    title: "How Miami Businesses Can Stop Wasting Ad Dollars Now",
    excerpt:
      "Budget Ad Copy & Message Validation saves Miami small businesses up to 30% on ads by cutting waste and boosting conversions. See how to get started, step by step.",
    department: "marketing",
    date: "2026-10-24T16:08:13.8759570Z",
  },
];
