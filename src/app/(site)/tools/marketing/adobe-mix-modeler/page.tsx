import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/adobe-mix-modeler/overview-section";
import KeyCapabilitiesSection from "@/components/tools/adobe-mix-modeler/key-capabilities";
import ImplementationSection from "@/components/tools/adobe-mix-modeler/implementation-section";
import WhenToUseSection from "@/components/tools/adobe-mix-modeler/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/adobe-mix-modeler#article",
    "headline": "Adobe Mix Modeler for Automated Ad Spend Optimization",
    "description": "Automate ad spend optimization with Adobe Mix Modeler for better ROI and precision targeting.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/adobe-mix-modeler" },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-adobe-mix-modeler",
        "name": "Adobe Mix Modeler",
        "url": "https://business.adobe.com/products/mix-modeler.html",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Adobe Mix Modeler for Automated Ad Spend Optimization",
        description: "Automate ad spend optimization with Adobe Mix Modeler for better ROI and precision targeting.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/adobe-mix-modeler',
        },
        openGraph: {
            title: "Adobe Mix Modeler for Automated Ad Spend Optimization",
            description: "Automate ad spend optimization with Adobe Mix Modeler for better ROI and precision targeting.",
            url: 'https://geekatyourspot.com/tools/marketing/adobe-mix-modeler',
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
            title: "Adobe Mix Modeler for Automated Ad Spend Optimization",
            description: "Automate ad spend optimization with Adobe Mix Modeler for better ROI and precision targeting.",
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
    const title = "Adobe Mix Modeler for Automated Ad Spend Optimization";
    const heroSummary = "Achieve superior ad spend optimization with Adobe Mix Modeler, utilizing machine learning for precision and efficiency.";
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
