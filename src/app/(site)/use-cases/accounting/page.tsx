import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  /** Sub-pillars laid out under this category, in navbar order. */
  pillars: UseCase[];
}

/**
 * Every accounting pillar with a built route. The navbar
 * (`src/components/layout/navbar.tsx`) and the home page carry the same nine
 * links; this list was three cards from 2026-10-02 until 2026-10-12, so six
 * pillars shipped without appearing here. Keep the three in step.
 */
const USE_CASE_GROUPS: UseCaseGroup[] = [
  {
    title: "Automated Accounts Payable",
    slug: "accounts-payable",
    description:
      "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy.",
    href: "/use-cases/accounting/accounts-payable/automated-accounts-payable",
    pillars: [
      {
        title: "Automated Data Entry & Processing",
        slug: "automated-data-entry-processing",
        description:
          "Automate accounts payable data entry and processing to cut manual errors, speed up invoice approvals, and give finance teams real-time visibility.",
        href: "/use-cases/accounting/accounts-payable/automated-data-entry-processing",
      },
      {
        title: "Automated Approval Workflows",
        slug: "automated-approval-workflows-transforming-accounts-payable",
        description:
          "Explore Automated Approval Workflows to enhance accounts payable efficiency, cut costs, and improve accuracy for small businesses.",
        href: "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable",
      },
      {
        title: "Automated Payment Execution",
        slug: "automated-payment-execution-streamlining-accounts-payable-with-ai",
        description:
          "Automated Payment Execution boosts efficiency in accounts payable, reducing errors and costs for small businesses with AI solutions.",
        href: "/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai",
      },
      {
        title: "Automated Fraud & Duplicate Payment Controls",
        slug: "automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs",
        description:
          "Implement Automated Fraud & Duplicate Payment Controls to enhance efficiency and accuracy in accounts payable for small businesses.",
        href: "/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs",
      },
    ],
  },
  {
    title: "Automated Cash Flow Forecasting",
    slug: "cash-flow-forecasting",
    description:
      "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management.",
    href: "/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting",
    pillars: [
      {
        title: "Automated Accounts Receivable",
        slug: "automated-accounts-receivable-boost-cash-flow-with-ai",
        description:
          "Automated Accounts Receivable helps small businesses streamline cash flow, reduce errors, and save time with AI-driven solutions.",
        href: "/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai",
      },
      {
        title: "Automated Spreadsheet Data",
        slug: "automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs",
        description:
          "Discover how Automated Spreadsheet Data enhances cash flow forecasting, saving time and reducing errors for small businesses.",
        href: "/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs",
      },
    ],
  },
  {
    title: "Intelligent Tax Compliance & Regulations",
    slug: "tax-compliance-regulations",
    description:
      "Simplify your tax processes with automated compliance solutions that integrate seamlessly into your financial operations.",
    href: "/use-cases/accounting/tax-compliance-regulations",
    pillars: [],
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
    <div className="bg-[rgb(2,48,89)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <section className="container py-16 lg:py-24">
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            icon={faCalculator}
            width={64}
            height={64}
            className="text-[#C83803]"
          />
          <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text text-[9vw] sm:text-6xl lg:text-[4.0rem]">
            Accounting Use Cases
          </h1>
        </div>
        <p className="pt-5 max-w-3xl text-xl text-white shadow-text lg:text-2xl">
          Explore practical use cases for accounting automation that help South
          Florida small businesses streamline financial operations and improve
          efficiency.
        </p>

        {USE_CASE_GROUPS.map((group) => (
          <div key={group.slug} className="pt-14">
            <h2 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text text-[7vw] sm:text-4xl lg:text-5xl">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
              <UseCaseCard useCase={group} />
              {group.pillars.map((pillar) => (
                <UseCaseCard key={pillar.slug} useCase={pillar} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
