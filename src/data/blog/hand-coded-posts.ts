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
  {
    href: "/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend",
    title: "How South Florida Businesses Can Stop Wasting Ad Spend",
    excerpt:
      "Measured Lead Generation cuts wasted ad spend for Miami-Dade, Broward, and Palm Beach small businesses. Boost lead quality and lower costs fast. See how.",
    department: "marketing",
    date: "2026-10-25T11:32:40.1839700Z",
  },
  {
    href: "/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation",
    title: "What Miami Businesses Miss Without Local AI Automation",
    excerpt:
      "Personalized Email Campaigns help Miami small businesses increase open rates by up to 50 percent and drive more sales. See how local AI can help you grow.",
    department: "marketing",
    date: "2026-10-26T12:35:17.8414750Z",
  },
];
