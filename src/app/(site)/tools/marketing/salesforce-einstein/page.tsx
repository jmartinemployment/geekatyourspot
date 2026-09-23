import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/salesforce-einstein/overview-section";
import KeyCapabilitiesSection from "@/components/tools/salesforce-einstein/key-capabilities";
import ImplementationSection from "@/components/tools/salesforce-einstein/implementation-section";
import WhenToUseSection from "@/components/tools/salesforce-einstein/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Salesforce Einstein",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Optimize ad spend with Salesforce Einstein's AI-driven insights for better ROI and efficiency.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/salesforce-einstein"
    },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/salesforce-einstein#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Salesforce Einstein",
        description: "Optimize ad spend with Salesforce Einstein's AI-driven insights for better ROI and efficiency.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/salesforce-einstein',
        },
        openGraph: {
            title: "Salesforce Einstein",
            description: "Optimize ad spend with Salesforce Einstein's AI-driven insights for better ROI and efficiency.",
            url: 'https://geekatyourspot.com/tools/marketing/salesforce-einstein',
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
            title: "Salesforce Einstein",
            description: "Optimize ad spend with Salesforce Einstein's AI-driven insights for better ROI and efficiency.",
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
    const title = "Salesforce Einstein AI Tool";
    const heroSummary = "Enhance your ad spend strategy with Salesforce Einstein, using AI for intelligent budget optimization.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
