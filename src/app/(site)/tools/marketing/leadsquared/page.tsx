import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/leadsquared/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/leadsquared/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/leadsquared/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/leadsquared/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "LeadSquared",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "LeadSquared uses AI for efficient lead scoring, improving sales team focus and conversion rates.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/leadsquared"
    },
    "keywords": "Lead Scoring",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/leadsquared#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "LeadSquared",
        description: "LeadSquared uses AI for efficient lead scoring, improving sales team focus and conversion rates.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/leadsquared',
        },
        openGraph: {
            title: "LeadSquared",
            description: "LeadSquared uses AI for efficient lead scoring, improving sales team focus and conversion rates.",
            url: 'https://geekatyourspot.com/tools/marketing/leadsquared',
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
            title: "LeadSquared",
            description: "LeadSquared uses AI for efficient lead scoring, improving sales team focus and conversion rates.",
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
    const title = "LeadSquared";
    const summary = "LeadSquared enhances sales with AI-driven lead scoring, focusing on high-potential leads to improve efficiency and conversion.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
