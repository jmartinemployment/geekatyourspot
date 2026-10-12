import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DEPARTMENT_ICONS, type DepartmentName } from "@/types/department";
import UseCasesHeroSection from "@/components/use-cases/shared/use-cases-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Use Cases";
const PAGE_DESCRIPTION =
  "Practical AI use cases for South Florida small businesses — accounting automation from accounts payable to tax compliance, and marketing automation from lead capture to content creation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI use cases",
    "business automation",
    "accounting automation",
    "marketing automation",
    "small business AI",
    "South Florida",
  ],
  alternates: {
    canonical: "/use-cases",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases`,
    siteName: "Geek at Your Spot",
    locale: "en_US",
    images: [{ url: LOGO_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    images: [LOGO_IMAGE],
  },
};

interface UseCase {
  title: string;
  slug: string;
  description: string;
  href: string;
}

interface Department {
  name: DepartmentName;
  title: string;
  description: string;
  href: string;
  /** One-paragraph framing shown above the cards. */
  summary: string;
  /** Top-level pillars of the department, in navbar order. Sub-pillars live on the department index. */
  useCases: UseCase[];
}

/**
 * One section per department. The department index remains the full answer
 * to "what is in it" (sub-pillars included); this page lists the top-level
 * pillars so a reader can jump straight to one. Keep both in step with the
 * navbar (`src/components/layout/navbar.tsx`).
 */
const DEPARTMENTS: Department[] = [
  {
    name: "accounting",
    title: "Accounting",
    description:
      "Automate the finance back office — accounts payable, cash flow forecasting, and tax compliance.",
    href: "/use-cases/accounting",
    summary:
      "The finance back office is where manual work piles up fastest: invoices keyed by hand, approvals chased by email, forecasts rebuilt in spreadsheets, and tax rules that change by county. Each pillar below takes one of those jobs and the tools that automate it.",
    useCases: [
      {
        title: "Automated Accounts Payable",
        slug: "automated-accounts-payable",
        description:
          "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy.",
        href: "/use-cases/accounting/accounts-payable/automated-accounts-payable",
      },
      {
        title: "Automated Cash Flow Forecasting",
        slug: "automated-cash-flow-forecasting",
        description:
          "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management.",
        href: "/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting",
      },
      {
        title: "Intelligent Tax Compliance & Regulations",
        slug: "tax-compliance-regulations",
        description:
          "Simplify your tax processes with automated compliance solutions that integrate seamlessly into your financial operations.",
        href: "/use-cases/accounting/tax-compliance-regulations",
      },
    ],
  },
  {
    name: "marketing",
    title: "Marketing",
    description:
      "Put AI to work across marketing — lead capture, content creation, ad spend, and marketing systems.",
    href: "/use-cases/marketing",
    summary:
      "Marketing automation earns its keep in the repetitive middle of the funnel: capturing and scoring leads, producing and repurposing content, tuning ad spend, and answering the same questions in chat. These pillars cover each of those jobs for a small team.",
    useCases: [
      {
        title: "AI Content Creation Workflow",
        slug: "ai-content-creation-workflow",
        description:
          "Streamline your content creation with AI-driven workflows that improve design efficiency and reduce time-to-market.",
        href: "/use-cases/marketing/ai-content-creation-workflow",
      },
      {
        title: "AI Content Repurposing",
        slug: "ai-content-repurposing",
        description:
          "Transform your content with AI repurposing tools, saving time and enhancing audience engagement across platforms.",
        href: "/use-cases/marketing/ai-content-repurposing",
      },
      {
        title: "AI-Driven Lead Scoring for Small Businesses",
        slug: "ai-driven-lead-scoring-for-small-businesses",
        description:
          "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
        href: "/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses",
      },
      {
        title: "AI Marketing Systems",
        slug: "ai-marketing-systems",
        description:
          "Elevate your marketing game with AI systems that automate processes and enhance decision-making for better results.",
        href: "/use-cases/marketing/ai-marketing-systems",
      },
      {
        title: "Automated Ad Spend Optimization",
        slug: "automated-ad-spend-optimization",
        description:
          "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
        href: "/use-cases/marketing/automated-ad-spend-optimization",
      },
      {
        title: "Automated Content Generation",
        slug: "automated-content-generation-transforming-small-business-marketing",
        description:
          "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
        href: "/use-cases/marketing/automated-content-generation-transforming-small-business-marketing",
      },
      {
        title: "Intelligent Lead Capture Pipeline",
        slug: "intelligent-lead-capture-pipeline",
        description:
          "Build smarter lead capture strategies with AI-powered tools that improve qualification and conversion rates.",
        href: "/use-cases/marketing/intelligent-lead-capture-pipeline",
      },
      {
        title: "SEO Blog and Article Generation",
        slug: "seo-blog-and-article-generation",
        description:
          "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
        href: "/use-cases/marketing/seo-blog-and-article-generation",
      },
      {
        title: "Smart Chatbots for Marketing",
        slug: "smart-chatbots-for-marketing",
        description:
          "Explore Smart Chatbots for Marketing to boost engagement, streamline customer interactions, and enhance your business strategy with AI.",
        href: "/use-cases/marketing/smart-chatbots-for-marketing",
      },
    ],
  },
];

/** Site section rotation, as literal classes so Tailwind can see them. */
const SECTION_BACKGROUNDS = ["bg-[#023059]", "bg-[#024059]", "bg-[#025E73]", "bg-[#8C4E2A]", "bg-[#BF5934]"] as const;

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Link
      href={useCase.href}
      className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
    >
      <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
        {useCase.title}
      </h3>
      <p className="pt-3 text-md font-normal text-white/80">
        {useCase.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-md font-bold text-[#C83803]">
        Learn more
        <FontAwesomeIcon
          icon={faArrowRight}
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

export default function UseCasesPage() {
  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: DEPARTMENTS.map((department, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${department.href}`,
        name: department.title,
        description: department.description,
      })),
    },
  };

  return (
    <div className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <UseCasesHeroSection
        department="accounting"
        icon={faLightbulb}
        title="Use Cases"
        summary="A use case is a practical application: a specific way AI can be put to use in your business. These are the ones we build for South Florida small businesses, grouped by the department that owns the problem."
      />
      {DEPARTMENTS.map((department, index) => {
        const background = SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
        return (
          <section key={department.name} className={`min-h-screen ${background} text-white py-5`}>
            <div className="container">
              <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
                <div className="col-span-12">
                  <Link href={department.href} className="group inline-flex items-center gap-x-4 hover:underline">
                    <FontAwesomeIcon
                      icon={DEPARTMENT_ICONS[department.name]}
                      width={48}
                      height={48}
                      className="text-[#C83803]"
                    />
                    <h2
                      id={department.name}
                      className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text"
                    >
                      {department.title}
                    </h2>
                  </Link>
                  <p className="pt-3 text-md text-white shadow-text">{department.summary}</p>
                  <p className="pt-3 text-md text-white shadow-text">
                    <Link href={department.href} className="inline-flex items-center gap-x-2 font-bold text-[#C83803] hover:underline">
                      All {department.title.toLowerCase()} use cases
                      <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
                    </Link>
                  </p>
                  <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
                    {department.useCases.map((useCase) => (
                      <UseCaseCard key={useCase.slug} useCase={useCase} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <SchedulerShell />
    </div>
  );
}
