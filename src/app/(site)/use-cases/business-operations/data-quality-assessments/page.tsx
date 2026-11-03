import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Data Quality Assessments";
const PAGE_DESCRIPTION =
  "Automated validation that scans your data sources for completeness, accuracy, and formatting errors before the data is exposed to an AI model — so your decisions stay grounded in information you can trust.";
const CANONICAL = "/use-cases/business-operations/data-quality-assessments";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "author": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
      "keywords":
        "data quality assessments, data validation, data observability, AI data readiness, data cleaning, AI operations, Monte Carlo data, Anomalo, Great Expectations, Qualytics",
      "mentions": [
        { "@type": "Thing", "name": "Monte Carlo", "url": "https://montecarlo.ai/" },
        { "@type": "Thing", "name": "Anomalo", "url": "https://www.anomalo.com/" },
        { "@type": "Thing", "name": "Great Expectations", "url": "https://greatexpectations.io/" },
        { "@type": "Thing", "name": "Qualytics", "url": "https://qualytics.ai/" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a data quality assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A data quality assessment is an automated validation process that scans your data sources for completeness, accuracy, and formatting errors before that data is fed into an AI model or used to drive business decisions. It catches gaps, duplicates, and inconsistencies early so your AI tools work from information you can trust.",
          },
        },
        {
          "@type": "Question",
          "name": "Why does data quality matter for small businesses using AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI models produce outputs that are only as reliable as the data they receive. A single corrupted field or a missing record can cause an AI tool to generate incorrect recommendations, send follow-ups to the wrong contacts, or report misleading numbers. Data quality assessments intercept those problems before they reach the model.",
          },
        },
        {
          "@type": "Question",
          "name": "What tools are used for AI data quality assessments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monte Carlo, Anomalo, Great Expectations, and Qualytics are the leading platforms. Monte Carlo and Anomalo focus on data observability and anomaly detection across live pipelines. Great Expectations is an open-source framework for defining and testing data validation rules. Qualytics automates data quality checks and governance across your data sources.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to set up data quality monitoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basic monitoring setup connecting your primary data sources typically takes one to two weeks. More complex environments with multiple integrations and custom validation rules take three to four weeks. Once running, the system monitors continuously without requiring ongoing manual effort.",
          },
        },
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
      "Monte Carlo data observability",
      "Anomalo data quality",
      "Great Expectations validation",
      "Qualytics data quality",
    ],
    authors: [{ name: "Jeff Martin" }],
    creator: "Geek @ Your Spot LLC",
    publisher: "Geek @ Your Spot LLC",
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: CANONICAL },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
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
  const heroSummary =
    "Bad data quietly breaks AI. Here is how automated validation catches the problems before your models ever see them.";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
      <article>

        <section className="min-h-screen bg-[#025E73] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  What Are AI Data Quality Assessments?
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  An AI data quality assessment builds automated validation that scans your data sources for completeness, accuracy, and formatting errors before that data is exposed to an AI model. The checks run on a schedule, catching gaps, duplicates, and inconsistencies the moment they appear rather than after they have already influenced a decision.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  For small businesses in South Florida, this matters because most AI tools — CRM automations, chatbots, reporting dashboards, and appointment schedulers — trust whatever data they receive. A missing field, a misformatted phone number, or a silently deleted record does not trigger an error; it just produces a wrong answer. Data quality assessments intercept those problems at the source.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Geek @ Your Spot LLC sets up and runs these validations for small businesses in Miami-Dade, Broward, and Palm Beach counties, so your data stays reliable without adding manual work to your week.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#023059] text-white py-5">
          <div className="container">
            <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  What Goes Wrong Without It
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Most data problems are invisible until they surface as business problems. Your CRM sends a follow-up to a contact whose record was partially overwritten. Your reporting dashboard shows revenue that is off because two systems used different date formats. Your AI scheduling tool double-books because availability data from one calendar never synced correctly. None of these trigger an error message — they just quietly produce wrong outcomes.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  The issue is that AI tools amplify whatever is in your data. A human reviewing a spreadsheet notices something looks off. An AI model does not — it processes the record and moves on. That is why validation has to run before the data reaches the model, not after the output has already been acted on.
                </p>
                <ul className="text-base text-white shadow-text list-disc list-outside pl-4 space-y-2 pt-3">
                  <li>Incomplete records cause AI tools to skip contacts, misroute tickets, or generate reports with silent gaps.</li>
                  <li>Formatting inconsistencies prevent data from merging across systems, breaking automations that depend on a match.</li>
                  <li>Stale or duplicated data leads AI models to generate redundant outreach or incorrect recommendations.</li>
                  <li>Schema changes — when a connected app updates its data structure — silently break downstream pipelines with no warning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#024059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  Top AI Data Quality Tools
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Four platforms handle the majority of data quality work for small and mid-size businesses. Each covers a different angle of the problem.
                </p>

                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/monte-carlo"
                    className="hover:text-[#C83803] hover:underline"
                  >
                    Monte Carlo
                  </Link>
                </h3>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Monte Carlo is a data observability platform that monitors your data pipelines end-to-end. It detects data drift, schema changes, and anomalies in real time and surfaces them before they reach downstream systems. For businesses running AI tools that depend on live data feeds — CRM integrations, marketing platforms, or financial reporting — Monte Carlo acts as a continuous watchdog across every pipeline.
                </p>

                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/anomalo"
                    className="hover:text-[#C83803] hover:underline"
                  >
                    Anomalo
                  </Link>
                </h3>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Anomalo automatically detects and diagnoses data quality issues by continuously monitoring datasets for anomalies that deviate from established patterns. It connects directly to your data warehouse and flags problems — missing values, unexpected distributions, sudden row-count drops — without requiring manual rules for every check. Anomalo is particularly useful for businesses running AI models that process customer records or transactional data, where silent data issues translate directly into bad recommendations.
                </p>

                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/great-expectations"
                    className="hover:text-[#C83803] hover:underline"
                  >
                    Great Expectations
                  </Link>
                </h3>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Great Expectations is an open-source data validation framework that lets you define and test explicit rules — called expectations — for what valid data looks like. You specify that a column must never be null, that values must fall within a given range, or that a field must match a particular format. Great Expectations runs those checks automatically on every data load and fails loudly if anything violates the rules. It is the right choice when you want precise, documented contracts on your data rather than anomaly detection alone.
                </p>

                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  <Link
                    href="/tools/ai-operations/data-quality-assessments/qualytics"
                    className="hover:text-[#C83803] hover:underline"
                  >
                    Qualytics
                  </Link>
                </h3>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Qualytics provides automated data quality checks and governance across your data sources, combining anomaly detection with a structured framework for data validation and remediation. It scans for completeness, accuracy, consistency, and formatting errors, and it produces clear reports on what failed and why. For small businesses that need both the monitoring and a documented quality record, Qualytics covers both in a single platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#025E73] text-white py-5">
          <div className="container">
            <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  How We Set It Up for Your Business
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Setting up data quality monitoring starts with an audit of your current data sources — what systems you have, how they connect, and where data moves between them. From that audit we identify the points where data is most likely to degrade: import jobs that run overnight, integrations that sync on a schedule, and manual entry fields where formatting varies.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  We then connect a monitoring platform to those sources and configure the checks that matter for your specific workflows. For a business using a CRM to drive AI outreach, that means validating contact records for completeness before they reach the automation. For a business running financial reporting through an AI dashboard, it means catching mismatched formats and stale values before they distort the numbers.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Once monitoring is live, it runs on its own. You receive alerts when something fails and a clear description of what went wrong, so the fix is straightforward rather than a hunt through your data.
                </p>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Book a consultation below to talk through what your current data setup looks like and where the gaps are.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SchedulerShell />
      </article>
    </>
  );
}
