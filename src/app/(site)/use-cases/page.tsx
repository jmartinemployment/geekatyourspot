import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DEPARTMENT_ICONS, type DepartmentName } from "@/types/department";
import UseCasesHeroSection from "@/components/use-cases/shared/use-cases-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI for Business";
const PAGE_DESCRIPTION =
  "These AI use cases show South Florida small businesses how to automate accounting, from payables to tax compliance, and marketing, from leads to content.";

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
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases`,
    siteName: "Geek @ Your Spot LLC",
    locale: "en_US",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
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
  /** The department's pillars, in navbar order. Accounting lists each category followed by its sub-pillars. */
  useCases: UseCase[];
}

/**
 * One section per department, listing every pillar so a reader can jump
 * straight to one. Accounting's cards match the department index
 * (`/use-cases/accounting`); keep both in step with the navbar
 * (`src/components/layout/navbar.tsx`).
 */
const DEPARTMENTS: Department[] = [
  {
    name: "accounting",
    title: "Accounting",
    description:
      "Automate the finance back office: accounts payable, cash flow forecasting, and tax compliance.",
    href: "/use-cases/accounting",
    summary:
      "The finance back office is where manual work piles up fastest: invoices keyed by hand, approvals chased by email, forecasts rebuilt in spreadsheets, and tax rules that change by county. Each pillar below takes one of those jobs and the tools that automate it.",
    useCases: [
      {
        title: "Accounts Payable",
        slug: "ai-ap-automation-software",
        description:
          "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy.",
        href: "/use-cases/accounting/accounts-payable/ai-ap-automation-software",
      },
      {
        title: "Intelligent Data Entry & Processing",
        slug: "ai-document-processing",
        description:
          "Automate accounts payable data entry and processing to cut manual errors, speed up invoice approvals, and give finance teams real-time visibility.",
        href: "/use-cases/accounting/accounts-payable/ai-document-processing",
      },
      {
        title: "Intelligent Approval Workflows",
        slug: "ai-approval-workflow",
        description:
          "Explore Intelligent Approval Workflows to enhance accounts payable efficiency, cut costs, and improve accuracy for small businesses.",
        href: "/use-cases/accounting/accounts-payable/ai-approval-workflow",
      },
      {
        title: "Intelligent Payment Execution",
        slug: "ai-automatic-bill-pay",
        description:
          "Intelligent Payment Execution boosts efficiency in accounts payable, reducing errors and costs for small businesses with AI solutions.",
        href: "/use-cases/accounting/accounts-payable/ai-automatic-bill-pay",
      },
      {
        title: "Intelligent Fraud & Duplicate Payment Controls",
        slug: "ai-fraud-duplicate-payment-controls",
        description:
          "Implement Intelligent Fraud & Duplicate Payment Controls to enhance efficiency and accuracy in accounts payable for small businesses.",
        href: "/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls",
      },
      {
        title: "Cash Flow Forecasting",
        slug: "ai-cash-flow-forecasting",
        description:
          "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management.",
        href: "/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting",
      },
      {
        title: "Intelligent Accounts Receivable",
        slug: "ai-accounts-receivable-software",
        description:
          "Intelligent Accounts Receivable helps small businesses streamline cash flow, reduce errors, and save time with AI-driven solutions.",
        href: "/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable-software",
      },
      {
        title: "Intelligent Spreadsheet Data",
        slug: "ai-spreadsheet-data",
        description:
          "Discover how Intelligent Spreadsheet Data enhances cash flow forecasting, saving time and reducing errors for small businesses.",
        href: "/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data",
      },
      {
        title: "Intelligent Resource Planning",
        slug: "ai-financial-planning-software",
        description:
          "Intelligent Resource Planning helps small businesses automate cash flow forecasting, accounts receivable, and ERP tasks for better control and fewer errors.",
        href: "/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software",
      },
      {
        title: "Tax Compliance & Regulations",
        slug: "tax-compliance-regulations",
        description:
          "Simplify your tax processes with automated compliance solutions that integrate seamlessly into your financial operations.",
        href: "/use-cases/accounting/tax-compliance-regulations",
      },
      {
        title: "Intelligent Tax Law",
        slug: "ai-tax-law",
        description:
          "Navigate complex and changing laws with AI. Simplify tax compliance for small businesses in Miami-Dade, Broward, and West Palm Beach.",
        href: "/use-cases/accounting/tax-compliance-regulations/ai-tax-law",
      },
      {
        title: "Intelligent Payroll Tax",
        slug: "ai-payroll-software",
        description:
          "AI solutions for Payroll Tax & Worker Misclassification help small businesses in Miami-Dade, Broward, and West Palm Beach automate compliance and reduce errors.",
        href: "/use-cases/accounting/tax-compliance-regulations/ai-payroll-software",
      },
      {
        title: "Intelligent Multi-State Sales Tax",
        slug: "ai-multi-state-sales-tax",
        description:
          "AI makes Multi-State Sales Tax Nexus compliance simple for South Florida small businesses. Automate filings, reduce errors, and stay audit-ready.",
        href: "/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax",
      },
    ],
  },
  {
    name: "marketing",
    title: "Marketing",
    description:
      "Put AI to work across marketing: lead capture, content creation, ad spend, and marketing systems.",
    href: "/use-cases/marketing",
    summary:
      "Marketing automation earns its keep in the repetitive middle of the funnel: capturing and scoring leads, producing and repurposing content, tuning ad spend, and answering the same questions in chat. These pillars cover each of those jobs for a small team.",
    useCases: [
      {
        title: "Content Creation Workflow",
        slug: "ai-content-marketing-platforms",
        description:
          "Streamline your content creation with AI-driven workflows that improve design efficiency and reduce time-to-market.",
        href: "/use-cases/marketing/ai-content-marketing-platforms",
      },
      {
        title: "Intelligent Content Planning",
        slug: "intelligent-content-planning",
        description:
          "Intelligent Content Planning streamlines content creation for small businesses, saving time and reducing errors. See how local AI implementation works.",
        href: "/use-cases/marketing/content-creation-workflow/ai-content-planning",
      },
      {
        title: "Intelligent Content Generation",
        slug: "ai-seo-content-generator",
        description:
          "Intelligent Content Generation helps Miami-Dade, Broward, and West Palm Beach businesses automate content creation, repurposing, scheduling, and approvals.",
        href: "/use-cases/marketing/content-creation-workflow/ai-seo-content-generator",
      },
      {
        title: "Automated Ad Spend Optimization",
        slug: "automated-ad-spend-optimization",
        description:
          "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
        href: "/use-cases/marketing/automated-ad-spend-optimization",
      },
      {
        title: "Intelligent Lead Capture Pipeline",
        slug: "ai-sales-force-automation-software",
        description:
          "Build smarter lead capture strategies with AI-powered tools that improve qualification and conversion rates.",
        href: "/use-cases/marketing/ai-sales-force-automation-software",
      },
      {
        title: "Intelligent Receptionist",
        slug: "intelligent-receptionist",
        description:
          "Intelligent Receptionist solutions for South Florida small businesses: automate lead capture, qualify prospects, and reduce missed opportunities with AI.",
        href: "/use-cases/marketing/lead-capture-pipeline/ai-receptionist",
      },
      {
        title: "Cross-Platform Chatbot",
        slug: "ai-chatbot",
        description:
          "Cross-Platform Chatbot solutions help small businesses in Miami-Dade, Broward, and West Palm Beach capture more leads and automate follow-ups efficiently.",
        href: "/use-cases/marketing/lead-capture-pipeline/ai-chatbot",
      },
      {
        title: "Lead Enrichment and Predictive Scoring",
        slug: "lead-enrichment-and-predictive-scoring",
        description:
          "Lead Enrichment and Predictive Scoring for South Florida small businesses: capture better leads, reduce manual work, and close more sales with AI.",
        href: "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring",
      },
      {
        title: "SEO Blog and Article Generation",
        slug: "ai-seo-tools",
        description:
          "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
        href: "/use-cases/marketing/ai-seo-tools",
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
      <p className="pt-3 text-base font-normal text-white/80">
        {useCase.description}
      </p>
      <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-base font-bold text-[#C83803]">
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
        title="AI for Business"
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
                  <p className="pt-3 text-base text-white shadow-text">{department.summary}</p>
                  <p className="pt-3 text-base text-white shadow-text">
                    <Link href={department.href} className={`inline-flex items-center gap-x-2 font-bold ${background === "bg-[#023059]" || background === "bg-[#024059]" ? "text-[#C83803]" : "text-[#0B162A]"} hover:underline`}>
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
