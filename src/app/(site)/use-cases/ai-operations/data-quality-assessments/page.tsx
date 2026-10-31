import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Data Quality Assessments";
const PAGE_DESCRIPTION =
  "Automated validation that scans your data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.";

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "author": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE_URL}/use-cases/ai-operations/data-quality-assessments`,
      },
      "keywords":
        "data quality assessments, data validation, data observability, AI data readiness, data cleaning, AI operations",
      "mentions": [
        { "@type": "Thing", "name": "Monte Carlo", "url": "https://montecarlo.ai/" },
        { "@type": "Thing", "name": "Anomalo", "url": "https://www.anomalo.com/" },
        { "@type": "Thing", "name": "Great Expectations", "url": "https://greatexpectations.io/" },
        { "@type": "Thing", "name": "Qualytics", "url": "https://qualytics.ai/" },
      ],
    },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "data quality assessments",
      "data validation",
      "data observability",
      "AI data readiness",
      "data cleaning",
      "AI operations",
    ],
    authors: [{ name: "Jeff Martin", url: "https://geekatyourspot.com/about" }],
    creator: "Geek @ Your Spot LLC",
    publisher: "Geek @ Your Spot LLC",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: {
      canonical: "/use-cases/ai-operations/data-quality-assessments",
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://geekatyourspot.com/use-cases/ai-operations/data-quality-assessments",
      siteName: "Geek @ Your Spot LLC",
      locale: "en_US",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [SHARE_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Geek @ Your Spot LLC",
    },
  };
};

export default async function Page() {
  const title = PAGE_TITLE;
  const heroSummary =
    "Scan your data sources for completeness, accuracy, and formatting errors before that data is exposed to an LLM.";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <SharedHeroSection title={title} summary={heroSummary} image="" imgAlt="" />
      <article>
        <section className="min-h-screen bg-[#025E73] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Data Quality Assessments
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Data quality assessments build automated validation that scans your data sources for completeness,
                  accuracy, and formatting errors before that data is exposed to an LLM. The checks catch gaps and
                  inconsistencies early, so the models you rely on work from information you can trust rather than from
                  data that quietly drifted out of shape.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Geek @ Your Spot LLC sets up and runs these validations for South Florida small businesses, so your
                  data stays reliable without adding manual work to your week.
                </p>
                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Top AI Data Quality Tools
                </h3>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/monte-carlo"
                    className="text-[#C83803] font-bold hover:underline"
                  >
                    Monte Carlo
                  </Link>
                  ,{" "}
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/anomalo"
                    className="text-[#C83803] font-bold hover:underline"
                  >
                    Anomalo
                  </Link>
                  ,{" "}
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/great-expectations"
                    className="text-[#C83803] font-bold hover:underline"
                  >
                    Great Expectations
                  </Link>
                  , or{" "}
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/qualytics"
                    className="text-[#C83803] font-bold hover:underline"
                  >
                    Qualytics
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
      <SchedulerShell />
    </>
  );
}
