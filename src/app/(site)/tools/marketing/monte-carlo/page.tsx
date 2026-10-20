import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/monte-carlo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/monte-carlo/key-capabilities";
import ImplementationSection from "@/components/tools/monte-carlo/implementation-section";
import WhenToUseSection from "@/components/tools/monte-carlo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/monte-carlo#article",
    "headline": "Monte Carlo for Automated Ad Spend Optimization",
    "description": "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/monte-carlo" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-monte-carlo",
        "name": "Monte Carlo",
        "url": "https://montecarlo.ai/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Monte Carlo for Automated Ad Spend Optimization",
        description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/monte-carlo',
        },
        openGraph: {
            title: "Monte Carlo for Automated Ad Spend Optimization",
            description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
            url: 'https://geekatyourspot.com/tools/marketing/monte-carlo',
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
            title: "Monte Carlo for Automated Ad Spend Optimization",
            description: "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
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
    const title = "Monte Carlo for Automated Ad Spend Optimization";
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
