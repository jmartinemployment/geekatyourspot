import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/omneky/overview-section";
import KeyCapabilitiesSection from "@/components/tools/omneky/key-capabilities";
import ImplementationSection from "@/components/tools/omneky/implementation-section";
import WhenToUseSection from "@/components/tools/omneky/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Omneky",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Omneky uses AI to optimize ad spend, boosting ROI and targeting efficiency for businesses.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/omneky"
    },
    "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/omneky#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Omneky",
        description: "Omneky uses AI to optimize ad spend, boosting ROI and targeting efficiency for businesses.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/omneky',
        },
        openGraph: {
            title: "Omneky",
            description: "Omneky uses AI to optimize ad spend, boosting ROI and targeting efficiency for businesses.",
            url: 'https://geekatyourspot.com/tools/marketing/omneky',
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
            title: "Omneky",
            description: "Omneky uses AI to optimize ad spend, boosting ROI and targeting efficiency for businesses.",
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
    const title = "Omneky AI Tool";
    const heroSummary = "Omneky's AI platform optimizes ad spend, improving targeting and ROI for businesses seeking efficiency.";
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
