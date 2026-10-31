import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Operations";
const PAGE_DESCRIPTION =
  "AI that runs the front office and keeps the data behind it clean. These Geek blog posts cover AI receptionists and chatbots that capture leads, and the data quality checks that keep your models dependable.";

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "headline": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "author": { "@type": "Person", "name": "Jeff Martin" },
      "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/ai-operations` },
      "keywords":
        "AI operations, AI receptionist, cross-platform chatbot, lead capture, data quality assessments, data validation, AI data readiness",
    },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "AI operations",
      "AI receptionist",
      "cross-platform chatbot",
      "lead capture",
      "data quality assessments",
      "data validation",
      "AI data readiness",
      "South Florida",
    ],
    authors: [{ name: "Jeff Martin" }],
    creator: "Geek @ Your Spot LLC",
    publisher: "Geek @ Your Spot LLC",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: { canonical: "/blog/ai-operations" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: `${SITE_URL}/blog/ai-operations`,
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
    appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
  };
};

export default async function Page() {
  const heroSummary =
    "Two sides of AI operations for a small team: the front office that answers and captures leads, and the data checks that keep the models behind it dependable.";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
      <article>
        <section className="min-h-screen bg-[#023059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  AI Front-Office
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  The front office is the first thing a lead touches. An AI receptionist answers every call
                  after hours, and a cross-platform chatbot picks up the web, SMS, and social messages your team
                  cannot watch all day. These posts cover how South Florida small businesses put both to work
                  without losing the human handoff that closes the deal.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/ai-operations/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours" className="text-[#C83803] font-bold hover:underline">
                      Intelligent After-Hours Receptionist
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/ai-operations/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline" className="text-[#C83803] font-bold hover:underline">
                      Cross-Platform Chatbot Lead Capture
                    </Link>
                  </li>
                </ul>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  See the use cases behind them:{" "}
                  <Link href="/use-cases/ai-operations/ai-receptionist" className="text-[#C83803] font-bold hover:underline">
                    Intelligent Receptionist
                  </Link>{" "}and{" "}
                  <Link href="/use-cases/ai-operations/ai-chatbot" className="text-[#C83803] font-bold hover:underline">
                    Cross-Platform Chatbot
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-[#024059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Data Quality Assessments
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Before data is exposed to an LLM, it needs checking for completeness, accuracy, and formatting errors.
                  Automated validation catches the gaps and inconsistencies early, so the models you rely on work from
                  information you can trust rather than from data that quietly drifted out of shape.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Start with the use case, then see the tools we help South Florida small businesses set up to run those
                  checks.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/use-cases/ai-operations/data-quality-assessments" className="text-[#C83803] font-bold hover:underline">
                      Data Quality Assessments: the use case
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ai-operations/data-quality-assessments/monte-carlo" className="text-[#C83803] font-bold hover:underline">
                      Monte Carlo
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ai-operations/data-quality-assessments/anomalo" className="text-[#C83803] font-bold hover:underline">
                      Anomalo
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ai-operations/data-quality-assessments/great-expectations" className="text-[#C83803] font-bold hover:underline">
                      Great Expectations
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/ai-operations/data-quality-assessments/qualytics" className="text-[#C83803] font-bold hover:underline">
                      Qualytics
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <SchedulerShell />
      </article>
    </>
  );
}
