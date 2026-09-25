import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/pipedrive/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/pipedrive/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/pipedrive/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/pipedrive/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Pipedrive",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/pipedrive"
    },
    "keywords": "Lead Scoring",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/pipedrive#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Pipedrive",
        description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/pipedrive',
        },
        openGraph: {
            title: "Pipedrive",
            description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
            url: 'https://geekatyourspot.com/tools/marketing/pipedrive',
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
            title: "Pipedrive",
            description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
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
    const title = "Pipedrive";
    const summary = "Transform your sales process with Pipedrive's AI-powered lead scoring, ensuring focus on the most promising leads.";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
