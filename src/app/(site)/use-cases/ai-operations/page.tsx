import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import UseCasesHeroSection from "@/components/use-cases/shared/use-cases-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Operations";
const PAGE_DESCRIPTION =
  "AI Operations covers the data side of making AI dependable: validating and cleaning the data that feeds your models before it reaches an LLM.";

const USE_CASES = [
  {
    title: "Data Quality Assessments",
    slug: "data-quality-assessments",
    description:
      "Build automated validation that scans your data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.",
    href: "/use-cases/ai-operations/data-quality-assessments",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI operations",
    "data quality assessments",
    "data validation",
    "data observability",
    "AI data readiness",
    "small business AI",
  ],
  alternates: {
    canonical: "/use-cases/ai-operations",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/ai-operations`,
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

export default function AiOperationsUseCasesPage() {
  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/ai-operations`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: USE_CASES.map((useCase, index) => ({
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
        department="ai-operations"
        title={PAGE_TITLE}
        summary="The data side of dependable AI: validate, monitor, and clean the data that feeds your models before it reaches an LLM."
      />
      <section className="min-h-screen bg-[#025E73] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-12">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                AI Operations
              </h2>
              <p className="pt-3 text-base text-white shadow-text">{PAGE_DESCRIPTION}</p>
              <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
                {USE_CASES.map((useCase) => (
                  <Link
                    key={useCase.slug}
                    href={useCase.href}
                    className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
                  >
                    <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                      {useCase.title}
                    </h3>
                    <p className="pt-3 text-base font-normal text-white/80">{useCase.description}</p>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SchedulerShell />
    </div>
  );
}
