import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/ai-operations/data-quality-assessments/great-expectations/overview-section";
import KeyCapabilitiesSection from "@/components/tools/ai-operations/data-quality-assessments/great-expectations/key-capabilities";
import ImplementationSection from "@/components/tools/ai-operations/data-quality-assessments/great-expectations/implementation-section";
import WhenToUseSection from "@/components/tools/ai-operations/data-quality-assessments/great-expectations/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Great Expectations for Data Quality Assessments",
    "description": "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/great-expectations" },
    "keywords": "Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Great Expectations",
        "url": "https://greatexpectations.io/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/ai-operations/data-quality-assessments" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Great Expectations for Data Quality Assessments",
        description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
        keywords: ["Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/ai-operations/data-quality-assessments/great-expectations',
        },
        openGraph: {
            title: "Great Expectations for Data Quality Assessments",
            description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
            url: 'https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/great-expectations',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Great Expectations for Data Quality Assessments",
            description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
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
    const title = "Great Expectations for Data Quality Assessments";
    const heroSummary = "Great Expectations validates data for automated ad spend optimization, enhancing marketing efficiency.";
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
