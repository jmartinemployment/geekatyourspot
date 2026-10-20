import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/6sense/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/6sense/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/6sense/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/6sense/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/6sense#article",
    "headline": "6sense for AI Lead Scoring",
    "description": "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/6sense" },
    "keywords": "Lead Scoring",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-6sense",
        "name": "6sense",
        "url": "https://6sense.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "6sense for AI Lead Scoring",
        description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/6sense',
        },
        openGraph: {
            title: "6sense for AI Lead Scoring",
            description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
            url: 'https://geekatyourspot.com/tools/marketing/6sense',
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
            title: "6sense for AI Lead Scoring",
            description: "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
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
    const title = "6sense for AI Lead Scoring";
    const summary = "Transform your sales process with 6sense's AI-powered lead scoring, focusing on high-conversion leads.";
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
