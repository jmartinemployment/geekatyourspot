import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/pipedrive/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/pipedrive/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/pipedrive/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/pipedrive/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Pipedrive for AI Lead Scoring",
    "description": "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/pipedrive" },
    "keywords": "Lead Scoring",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Pipedrive",
        "url": "https://www.pipedrive.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Pipedrive for AI Lead Scoring",
        description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/pipedrive',
        },
        openGraph: {
            title: "Pipedrive for AI Lead Scoring",
            description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
            url: 'https://geekatyourspot.com/tools/marketing/pipedrive',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Pipedrive for AI Lead Scoring",
            description: "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
            images: [SHARE_IMAGE],
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
    const title = "Pipedrive for AI Lead Scoring";
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
