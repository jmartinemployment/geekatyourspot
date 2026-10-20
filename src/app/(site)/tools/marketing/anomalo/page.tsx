import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/anomalo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/anomalo/key-capabilities";
import ImplementationSection from "@/components/tools/anomalo/implementation-section";
import WhenToUseSection from "@/components/tools/anomalo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/anomalo#article",
    "headline": "Anomalo for Automated Ad Spend Optimization",
    "description": "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/anomalo" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-anomalo",
        "name": "Anomalo",
        "url": "https://www.anomalo.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Anomalo for Automated Ad Spend Optimization",
        description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/anomalo',
        },
        openGraph: {
            title: "Anomalo for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
            url: 'https://geekatyourspot.com/tools/marketing/anomalo',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/GeekAtYourSpot.svg',
                    width: 116,
                    height: 48,
                    alt: 'Geek @ Your Spot LLC',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Anomalo for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
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
    const title = "Anomalo for Automated Ad Spend Optimization";
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
