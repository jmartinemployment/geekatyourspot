import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/qualytics/overview-section";
import KeyCapabilitiesSection from "@/components/tools/qualytics/key-capabilities";
import ImplementationSection from "@/components/tools/qualytics/implementation-section";
import WhenToUseSection from "@/components/tools/qualytics/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Qualytics for Automated Ad Spend Optimization",
    "description": "Optimize ad spend with Qualytics through automated data quality management for reliable marketing outcomes.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/qualytics" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Qualytics",
        "url": "https://qualytics.ai/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Qualytics for Automated Ad Spend Optimization",
        description: "Optimize ad spend with Qualytics through automated data quality management for reliable marketing outcomes.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/qualytics',
        },
        openGraph: {
            title: "Qualytics for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Qualytics through automated data quality management for reliable marketing outcomes.",
            url: 'https://geekatyourspot.com/tools/marketing/qualytics',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Qualytics for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Qualytics through automated data quality management for reliable marketing outcomes.",
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
    const title = "Qualytics for Automated Ad Spend Optimization";
    const heroSummary = "Optimize ad spend with Qualytics by automating data quality checks for precise and reliable marketing decisions.";
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
