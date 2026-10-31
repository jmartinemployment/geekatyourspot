import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/ai-operations/data-quality-assessments/anomalo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/ai-operations/data-quality-assessments/anomalo/key-capabilities";
import ImplementationSection from "@/components/tools/ai-operations/data-quality-assessments/anomalo/implementation-section";
import WhenToUseSection from "@/components/tools/ai-operations/data-quality-assessments/anomalo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Anomalo for Data Quality Assessments",
    "description": "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/anomalo" },
    "keywords": "Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Anomalo",
        "url": "https://www.anomalo.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/ai-operations/data-quality-assessments" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Anomalo for Data Quality Assessments",
        description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
        keywords: ["Data Quality Assessments, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/ai-operations/data-quality-assessments/anomalo',
        },
        openGraph: {
            title: "Anomalo for Data Quality Assessments",
            description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
            url: 'https://geekatyourspot.com/tools/ai-operations/data-quality-assessments/anomalo',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Anomalo for Data Quality Assessments",
            description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
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
    const title = "Anomalo for Data Quality Assessments";
    const heroSummary = "Ensure your ad spend is optimized with Anomalo's automated data quality solutions.";
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
