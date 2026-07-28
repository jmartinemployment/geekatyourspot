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

export const NEWSPAPER_TOTAL_PAGES = 1;

export const pillars: NewspaperItem[] = [
  {
    slug: "ai-for-small-business",
    href: "/blog/pillar/ai-for-small-business",
    title: "Why South Florida Small Businesses Are Finally Adopting AI",
    excerpt:
      "Local shops that once dismissed AI as enterprise-only are now automating scheduling, invoicing, and customer follow-up with tools built for their scale.",
  },
  {
    slug: "reduce-manual-work",
    href: "/blog/pillar/reduce-manual-work",
    title: "The Real Cost of Manual Data Entry, Quantified",
    excerpt:
      "We tallied the hours a five-person accounting office spends on copy-paste work in a year. The number surprised even us.",
  },
  {
    slug: "tax-compliance-playbook",
    href: "/blog/pillar/tax-compliance-playbook",
    title: "A Tax Season Playbook for Two-Person Firms",
    excerpt:
      "Compliance automation isn't just for the Big Four. Here's what a lean bookkeeping shop can put in place before January.",
  },
];

export const tools: NewspaperItem[] = [
  {
    slug: "lead-capture-pipeline",
    href: "/blog/tools/lead-capture-pipeline",
    title: "Inside the Marketing Lead-Capture Pipeline",
    excerpt:
      "A look at how automated intake forms route qualified leads straight to a rep's calendar in under sixty seconds.",
  },
  {
    slug: "customer-service-assistant",
    href: "/use-cases/customer-service",
    title: "AI Customer Service Assistant",
    excerpt: "Round-the-clock answers for order status, hours, and common questions.",
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

export const blogs: NewspaperItem[] = [
  {
    slug: "customer-service-ai-launch",
    href: "/blog/customer-service-ai-launch",
    title: "Geek at Your Spot Launches AI Customer-Service Assistant for Local Retailers",
    excerpt:
      "The new assistant answers after-hours questions, tracks order status, and hands off to a human the moment a customer asks for one.",
  },
  {
    slug: "calendar-automation-notes",
    href: "/blog/calendar-automation-notes",
    title: "Field Notes: Automating Appointment Scheduling for a Delray Beach Salon",
    excerpt: "No-shows dropped 40% after we wired confirmation texts into the booking calendar. Here's the setup.",
  },
  {
    slug: "accounting-department-rollout",
    href: "/blog/accounting-department-rollout",
    title: "What a Two-Week AI Rollout Looks Like for an Accounting Department",
    excerpt: "Day one: shadow the process. Day fourteen: the team stops opening the old spreadsheet entirely.",
  },
];

export const sampleNewspaperPage: NewspaperPageData = {
  page: 1,
  pillars,
  tools,
  blogs,
};
