import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import LedeSection from "@/components/use-cases/business-operations/ai-data-quality-assessments/lede-section";
import WithoutItSection from "@/components/use-cases/business-operations/ai-data-quality-assessments/without-it-section";
import ToolsSection from "@/components/use-cases/business-operations/ai-data-quality-assessments/tools-section";
import SetupSection from "@/components/use-cases/business-operations/ai-data-quality-assessments/setup-section";
import FAQSection from "@/components/use-cases/business-operations/ai-data-quality-assessments/faq-section";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Data Quality Assessments";
const PAGE_DESCRIPTION =
    "Automated validation that scans your data sources for completeness, accuracy, and formatting errors before the data is exposed to an AI model — so your decisions stay grounded in information you can trust.";
const CANONICAL = "/use-cases/business-operations/ai-data-quality-assessments";
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
            "keywords": "AI data quality assessments, data validation, data observability, AI data readiness, data cleaning, AI operations, Monte Carlo data, Anomalo, Great Expectations, Qualytics",
            "mentions": [
                { "@type": "Thing", "name": "Monte Carlo", "url": "https://montecarlo.ai/" },
                { "@type": "Thing", "name": "Anomalo", "url": "https://www.anomalo.com/" },
                { "@type": "Thing", "name": "Great Expectations", "url": "https://greatexpectations.io/" },
                { "@type": "Thing", "name": "Qualytics", "url": "https://qualytics.ai/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a data quality assessment?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A data quality assessment is an automated validation process that scans your data sources for completeness, accuracy, and formatting errors before that data is fed into an AI model or used to drive business decisions. It catches gaps, duplicates, and inconsistencies early so your AI tools work from information you can trust." }
                },
                {
                    "@type": "Question",
                    "name": "Why does data quality matter for small businesses using AI?",
                    "acceptedAnswer": { "@type": "Answer", "text": "AI models produce outputs that are only as reliable as the data they receive. A single corrupted field or a missing record can cause an AI tool to generate incorrect recommendations, send follow-ups to the wrong contacts, or report misleading numbers. Data quality assessments intercept those problems before they reach the model." }
                },
                {
                    "@type": "Question",
                    "name": "What tools are used for AI data quality assessments?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Monte Carlo, Anomalo, Great Expectations, and Qualytics are the leading platforms. Monte Carlo and Anomalo focus on data observability and anomaly detection across live pipelines. Great Expectations is an open-source framework for defining and testing data validation rules. Qualytics automates data quality checks and governance across your data sources." }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to set up data quality monitoring?",
                    "acceptedAnswer": { "@type": "Answer", "text": "A basic monitoring setup connecting your primary data sources typically takes one to two weeks. More complex environments with multiple integrations and custom validation rules take three to four weeks. Once running, the system monitors continuously without requiring ongoing manual effort." }
                }
            ]
        }
    ]
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
            "business operations",
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
        appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
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
            <SharedHeroSection title="AI Data Quality Assessments" summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <WithoutItSection />
                <ToolsSection />
                <SetupSection />
                <FAQSection />
                <SchedulerShell />
            </article>
        </>
    );
}
