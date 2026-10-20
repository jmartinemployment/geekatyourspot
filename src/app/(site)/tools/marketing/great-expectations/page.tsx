import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/great-expectations/overview-section";
import KeyCapabilitiesSection from "@/components/tools/great-expectations/key-capabilities";
import ImplementationSection from "@/components/tools/great-expectations/implementation-section";
import WhenToUseSection from "@/components/tools/great-expectations/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/great-expectations#article",
    "headline": "Great Expectations for Automated Ad Spend Optimization",
    "description": "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/great-expectations" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-great-expectations",
        "name": "Great Expectations",
        "url": "https://greatexpectations.io/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Great Expectations for Automated Ad Spend Optimization",
        description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/great-expectations',
        },
        openGraph: {
            title: "Great Expectations for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
            url: 'https://geekatyourspot.com/tools/marketing/great-expectations',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/GeekAtYourSpot.svg',
                    width: 116,
                    height: 48,
                    alt: 'Geek at Your Spot',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Great Expectations for Automated Ad Spend Optimization",
            description: "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
            creator: 'Geek at Your Spot',
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
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const title = "Great Expectations for Automated Ad Spend Optimization";
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
