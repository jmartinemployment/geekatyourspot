import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UseCasesHeroSection from "@/components/use-cases/shared/use-cases-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Accounting & Finance Use Cases";
const PAGE_DESCRIPTION =
  "Discover practical use cases for accounting automation — from tax compliance to accounts payable and cash flow forecasting.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "accounting use cases",
    "tax compliance",
    "accounts payable automation",
    "cash flow forecasting",
    "financial automation",
  ],
  alternates: {
    canonical: "/use-cases/accounting",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/accounting`,
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

interface UseCaseGroup {
  /** Category pillar: the page that introduces the area and links its sub-pillars. */
  title: string;
  slug: string;
  description: string;
  href: string;
  /** One-paragraph framing shown above the cards. */
  summary: string;
  /** Sub-pillars laid out under this category, in navbar order. */
  pillars: UseCase[];
}

/**
 * Every accounting pillar with a built route. The navbar
 * (`src/components/layout/navbar.tsx`) and the home page carry the same twelve
 * links; this list was three cards from 2026-10-02 until 2026-10-12, so six
 * pillars shipped without appearing here. Keep the three in step.
 */
/** Site section rotation, as literal classes so Tailwind can see them. */
const SECTION_BACKGROUNDS = ["bg-[#023059]", "bg-[#024059]", "bg-[#025E73]", "bg-[#8C4E2A]", "bg-[#BF5934]"] as const;

const USE_CASE_GROUPS: UseCaseGroup[] = [
  {
    title: "Accounts Payable",
    slug: "accounts-payable",
    description:
      "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy.",
    href: "/use-cases/accounting/accounts-payable/automated-accounts-payable",
    summary:
      "Accounts payable is where most of the manual work hides: keying invoices, chasing approvals, cutting payments, and catching duplicates after the fact. The category pillar frames the whole function; each pillar below it takes one stage and the tools that automate it.",
    pillars: [
      {
        title: "Intelligent Data Entry & Processing",
        slug: "automated-data-entry-processing",
        description:
          "Automate accounts payable data entry and processing to cut manual errors, speed up invoice approvals, and give finance teams real-time visibility.",
        href: "/use-cases/accounting/accounts-payable/automated-data-entry-processing",
      },
      {
        title: "Intelligent Approval Workflows",
        slug: "automated-approval-workflows-transforming-accounts-payable",
        description:
          "Explore Intelligent Approval Workflows to enhance accounts payable efficiency, cut costs, and improve accuracy for small businesses.",
        href: "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable",
      },
      {
        title: "Intelligent Payment Execution",
        slug: "automated-payment-execution-streamlining-accounts-payable-with-ai",
        description:
          "Intelligent Payment Execution boosts efficiency in accounts payable, reducing errors and costs for small businesses with AI solutions.",
        href: "/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai",
      },
      {
        title: "Intelligent Fraud & Duplicate Payment Controls",
        slug: "automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs",
        description:
          "Implement Intelligent Fraud & Duplicate Payment Controls to enhance efficiency and accuracy in accounts payable for small businesses.",
        href: "/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs",
      },
    ],
  },
  {
    title: "Cash Flow Forecasting",
    slug: "cash-flow-forecasting",
    description:
      "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management.",
    href: "/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting",
    summary:
      "A forecast is only as current as the data feeding it. These pillars cover the two inputs that go stale fastest, receivables that pay late and the spreadsheets that still hold the model together, and the planning tools that turn live books into a rolling forecast.",
    pillars: [
      {
        title: "Intelligent Accounts Receivable",
        slug: "automated-accounts-receivable-boost-cash-flow-with-ai",
        description:
          "Intelligent Accounts Receivable helps small businesses streamline cash flow, reduce errors, and save time with AI-driven solutions.",
        href: "/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai",
      },
      {
        title: "Intelligent Spreadsheet Data",
        slug: "automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs",
        description:
          "Discover how Intelligent Spreadsheet Data enhances cash flow forecasting, saving time and reducing errors for small businesses.",
        href: "/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs",
      },
      {
        title: "Intelligent Resource Planning",
        slug: "intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business",
        description:
          "Intelligent Resource Planning helps small businesses automate cash flow forecasting, accounts receivable, and ERP tasks for better control and fewer errors.",
        href: "/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business",
      },
    ],
  },
  {
    title: "Tax Compliance & Regulations",
    slug: "tax-compliance-regulations",
    description:
      "Simplify your tax processes with automated compliance solutions that integrate seamlessly into your financial operations.",
    href: "/use-cases/accounting/tax-compliance-regulations",
    summary:
      "Sales tax, payroll tax, and filing deadlines across multiple jurisdictions change faster than a small finance team can track by hand. The category pillar frames the problem; the pillars below it cover the AI tooling that tracks rate and rule changes, the payroll platforms that keep tax deposits and W-2 versus 1099 classification defensible, and the sales tax platforms that track nexus and file across state lines, so a business stays compliant without a dedicated tax department.",
    pillars: [
      {
        title: "Intelligent Tax Law",
        slug: "automating-complex-and-changing-laws",
        description:
          "Navigate complex and changing laws with AI. Simplify tax compliance for small businesses in Miami-Dade, Broward, and West Palm Beach.",
        href: "/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws",
      },
      {
        title: "Intelligent Payroll Tax",
        slug: "payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance",
        description:
          "AI solutions for Payroll Tax & Worker Misclassification help SMBs in Miami-Dade, Broward, and West Palm Beach automate compliance and reduce costly errors.",
        href: "/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance",
      },
      {
        title: "Intelligent Multi-State Sales Tax",
        slug: "multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs",
        description:
          "Multi-State Sales Tax Nexus compliance made simple for South Florida SMBs. Automate filings, reduce errors, and stay audit-ready with local AI expertise.",
        href: "/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs",
      },
    ],
  },
];

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

export default function AccountingUseCasesPage() {
  const useCases: UseCase[] = USE_CASE_GROUPS.flatMap((group) => [
    { title: group.title, slug: group.slug, description: group.description, href: group.href },
    ...group.pillars,
  ]);

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/accounting`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: useCases.map((useCase, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${useCase.href}`,
        name: useCase.title,
        description: useCase.description,
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
        title="Accounting Use Cases"
        summary="Practical accounting automation for South Florida small businesses: accounts payable, cash flow forecasting, and tax compliance, each laid out as a pillar with the tools we implement under it."
      />
      {USE_CASE_GROUPS.map((group, index) => {
        const background = SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
        const textOnRight = index % 2 === 0;
        const heading = (sizes: string) => (
          <h2
            id={group.slug}
            className={`text-white ${sizes} leading-[0.95] font-black font-(--font-sora) shadow-text`}
          >
            {group.title}
          </h2>
        );
        const intro = (
          <p className="pt-3 text-md text-white shadow-text">{group.summary}</p>
        );
        const cards = (
          <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
            <UseCaseCard useCase={group} />
            {group.pillars.map((pillar) => (
              <UseCaseCard key={pillar.slug} useCase={pillar} />
            ))}
          </div>
        );
        const empty = <div className="col-span-5 flex items-center justify-center"></div>;
        return (
          <div key={group.slug}>
            <section className={`min-h-screen ${background} text-white py-5 lg:hidden`}>
              <div className="container">
                <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
                  {textOnRight && empty}
                  <div className="col-span-7">{heading("text-[6vw] sm:text-4xl md:text-5xl")}</div>
                  {!textOnRight && empty}
                  <div className="col-span-12">
                    {intro}
                    {cards}
                  </div>
                </div>
              </div>
            </section>
            <section className={`min-h-screen ${background} text-white py-5 hidden lg:block`}>
              <div className="container">
                <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
                  {textOnRight && empty}
                  <div className="col-span-7">
                    {heading("lg:text-[3.5rem]")}
                    {intro}
                    {cards}
                  </div>
                  {!textOnRight && empty}
                </div>
              </div>
            </section>
          </div>
        );
      })}
      <SchedulerShell />
    </div>
  );
}
