import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/ai-operations/data-quality-assessments/monte-carlo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/ai-operations/data-quality-assessments/monte-carlo/key-capabilities";
import ImplementationSection from "@/components/tools/ai-operations/data-quality-assessments/monte-carlo/implementation-section";
import WhenToUseSection from "@/components/tools/ai-operations/data-quality-assessments/monte-carlo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Monte Carlo for Data Quality Assessments",
    "description": "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/monte-carlo" },
    "keywords": "Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Monte Carlo",
        "url": "https://montecarlo.ai/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/ai-operations/data-quality-assessments" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Monte Carlo for Data Quality Assessments",
        description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
        keywords: ["Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/ai-operations/data-quality-assessments/monte-carlo',
        },
        openGraph: {
            title: "Monte Carlo for Data Quality Assessments",
            description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
            url: 'https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/monte-carlo',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Monte Carlo for Data Quality Assessments",
            description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
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
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const title = "Monte Carlo for Data Quality Assessments";
    const heroSummary = "Monte Carlo enhances ad spend strategies with automated optimization and data accuracy.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
