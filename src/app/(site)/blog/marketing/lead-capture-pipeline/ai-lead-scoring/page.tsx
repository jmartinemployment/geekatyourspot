import type { Metadata } from "next";
import HeroSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/hero-section'
import LedeSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/lede-section'
import MapLeadSourceSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/map-lead-source-section'
import CleanEnrichSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/clean-enrich-section'
import BestPracticesSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/best-practices-section'
import ScoringModelSection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/scoring-model-section'
import PAASection from '@/components/blog/marketing/lead-capture-pipeline/ai-lead-scoring/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": "AI Lead Scoring",
            "description": "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
            "author": {
                "@type": "Person",
                "name": "Jeff Martin"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-09-02T15:52:27.1724249Z",
            "dateModified": "2026-09-02T15:52:27.1724249Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-lead-scoring"
            },
            "keywords": "Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense",
            "wordCount": 2703,
            "mentions": [
                { "@type": "Thing", "name": "ActiveCampaign", "url": "https://www.activecampaign.com/" },
                { "@type": "Thing", "name": "Pipedrive", "url": "https://www.pipedrive.com/" },
                { "@type": "Thing", "name": "Apollo", "url": "https://www.apollo.io/" },
                { "@type": "Thing", "name": "LeadSquared", "url": "https://www.leadsquared.com/" },
                { "@type": "Thing", "name": "6sense", "url": "https://6sense.com/" }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI Lead Scoring",
        description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
        keywords: ["Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/blog/marketing/lead-capture-pipeline/ai-lead-scoring',
        },
        openGraph: {
            title: "AI Lead Scoring",
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
            url: 'https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-lead-scoring',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'article',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "AI Lead Scoring",
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
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
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <HeroSection />
            <article>
                <LedeSection />
                <MapLeadSourceSection />
                <CleanEnrichSection />
                <BestPracticesSection />
                <ScoringModelSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}
