import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/6sense/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/6sense/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/6sense/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/6sense/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "6sense",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/6sense"
    },
    "keywords": "Lead Scoring",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/6sense#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "6sense",
        description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/6sense',
        },
        openGraph: {
            title: "6sense",
            description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
            url: 'https://geekatyourspot.com/tools/marketing/6sense',
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
            title: "6sense",
            description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
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
    const title = "6sense";
    const summary = "Transform your sales process with 6sense's AI-powered lead scoring, focusing on high-conversion leads.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
