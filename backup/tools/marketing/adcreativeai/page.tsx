import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/adcreativeai/overview-section";
import KeyCapabilitiesSection from "@/components/tools/adcreativeai/key-capabilities";
import ImplementationSection from "@/components/tools/adcreativeai/implementation-section";
import WhenToUseSection from "@/components/tools/adcreativeai/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "AdCreative.ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Automate ad spend optimization with AdCreative.ai for enhanced marketing efficiency and ROI.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/adcreativeai"
    },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/adcreativeai#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "AdCreative.ai",
        description: "Automate ad spend optimization with AdCreative.ai for enhanced marketing efficiency and ROI.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/adcreativeai',
        },
        openGraph: {
            title: "AdCreative.ai",
            description: "Automate ad spend optimization with AdCreative.ai for enhanced marketing efficiency and ROI.",
            url: 'https://geekatyourspot.com/tools/marketing/adcreativeai',
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
            title: "AdCreative.ai",
            description: "Automate ad spend optimization with AdCreative.ai for enhanced marketing efficiency and ROI.",
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
    const title = "AdCreative.ai";
    const heroSummary = "AdCreative.ai automates ad spend optimization, ensuring effective and efficient marketing campaigns.";
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
