import type { Metadata } from "next";
import HeroSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/hero-section'
import LedeSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/lede-section'
import MapLeadSourceSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/map-lead-source-section'
import CleanEnrichSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/clean-enrich-section'
import BestPracticesSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/best-practices-section'
import ScoringModelSection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/scoring-model-section'
import PAASection from '@/components/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": "AI-Driven Lead Scoring for Small Businesses",
            "description": "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Geek @ Your Spot LLC",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                }
            },
            "datePublished": "2026-09-02T15:52:27.1724249Z",
            "dateModified": "2026-09-02T15:52:27.1724249Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses"
            },
            "keywords": "Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense",
            "wordCount": 2703,
            "@id": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses#article",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/#software-activecampaign"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-pipedrive"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-apollo"
                },
                {
                    "@id": "#software-leadsquared"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-6sense"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "ActiveCampaign",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "ActiveCampaign streamlines lead data with automation and 1000+ integrations for intelligent lead scoring.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/active-campaign"
            },
            "@id": "https://geekatyourspot.com/#software-activecampaign"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Pipedrive",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Pipedrive visualizes your sales pipeline and automates de-duplication for cleaner lead scoring.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/pipedrive"
            },
            "@id": "https://geekatyourspot.com/#software-pipedrive"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Apollo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Apollo enriches lead records with company and industry data for more accurate scoring.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo"
            },
            "@id": "https://geekatyourspot.com/#software-apollo"
        },
        {
            "@type": "SoftwareApplication",
            "name": "LeadSquared",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "LeadSquared filters spam and combines CRM with analytics for precision lead scoring.",
            "@id": "#software-leadsquared"
        },
        {
            "@type": "SoftwareApplication",
            "name": "6sense",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "6sense delivers predictive intelligence to forecast lead conversion and optimize scoring.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/6sense"
            },
            "@id": "https://geekatyourspot.com/#software-6sense"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI-Driven Lead Scoring for Small Businesses",
        description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
        keywords: ["Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses',
        },
        openGraph: {
            title: "AI-Driven Lead Scoring for Small Businesses",
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
            url: 'https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'article',
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
            title: "AI-Driven Lead Scoring for Small Businesses",
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
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
