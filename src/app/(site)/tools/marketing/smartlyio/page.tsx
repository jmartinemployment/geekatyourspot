import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/smartlyio/overview-section";
import KeyCapabilitiesSection from "@/components/tools/smartlyio/key-capabilities";
import ImplementationSection from "@/components/tools/smartlyio/implementation-section";
import WhenToUseSection from "@/components/tools/smartlyio/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Smartly.io",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Automate ad spend optimization with Smartly.io to enhance ROI and streamline digital campaigns.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/smartlyio"
    },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/smartlyio#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Smartly.io",
        description: "Automate ad spend optimization with Smartly.io to enhance ROI and streamline digital campaigns.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/smartlyio',
        },
        openGraph: {
            title: "Smartly.io",
            description: "Automate ad spend optimization with Smartly.io to enhance ROI and streamline digital campaigns.",
            url: 'https://geekatyourspot.com/tools/marketing/smartlyio',
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
            title: "Smartly.io",
            description: "Automate ad spend optimization with Smartly.io to enhance ROI and streamline digital campaigns.",
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
    const title = "Smartly.io AI Tool";
    const heroSummary = "Smartly.io automates ad spend, optimizing campaigns for effective budget use and higher ROI.";
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
