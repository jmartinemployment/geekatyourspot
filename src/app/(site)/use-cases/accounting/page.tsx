import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

export default function AccountingUseCasesPage() {
  const useCases: UseCase[] = [
    {
      title: "Automated Accounts Payable",
      slug: "accounts-payable",
      description:
        "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy.",
      href: "/use-cases/accounting/accounts-payable/automated-accounts-payable",
    },
    {
      title: "Automated Cash Flow Forecasting",
      slug: "cash-flow-forecasting",
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
  ];

  const jsonLd = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
