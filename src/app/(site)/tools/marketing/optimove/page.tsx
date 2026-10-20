import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/optimove/overview-section";
import KeyCapabilitiesSection from "@/components/tools/optimove/key-capabilities";
import ImplementationSection from "@/components/tools/optimove/implementation-section";
import WhenToUseSection from "@/components/tools/optimove/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/optimove#article",
    "headline": "Optimove for Automated Ad Spend Optimization",
    "description": "Optimize ad spend with AI-driven insights from Optimove for better marketing ROI and efficiency.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/optimove" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-optimove",
        "name": "Optimove",
        "url": "https://www.optimove.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Optimove for Automated Ad Spend Optimization",
        description: "Optimize ad spend with AI-driven insights from Optimove for better marketing ROI and efficiency.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/optimove',
        },
        openGraph: {
            title: "Optimove for Automated Ad Spend Optimization",
            description: "Optimize ad spend with AI-driven insights from Optimove for better marketing ROI and efficiency.",
            url: 'https://geekatyourspot.com/tools/marketing/optimove',
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
            title: "Optimove for Automated Ad Spend Optimization",
            description: "Optimize ad spend with AI-driven insights from Optimove for better marketing ROI and efficiency.",
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
    const title = "Optimove for Automated Ad Spend Optimization";
    const heroSummary = "Optimove leverages AI to optimize ad spend, targeting the right audience and maximizing ROI.";
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
