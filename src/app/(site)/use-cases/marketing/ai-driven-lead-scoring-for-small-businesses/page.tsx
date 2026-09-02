import type { Metadata } from "next";
import HeroSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/hero-section'
import LedeSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/lede-section'
import MapLeadSourceSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/map-lead-source-section'
import CleanEnrichSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/clean-enrich-section'
import BestPracticesSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/best-practices-section'
import ScoringModelSection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/scoring-model-section'
import PAASection from '@/components/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "AI-Driven Lead Scoring for Small Businesses",
                "description": "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
                "image": [
                    "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                ],
                "author": {
                    "@type": "Person",
                    "name": "Geek At Your Spot Editorial Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Geek At Your Spot",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                    }
                },
                "datePublished": "2026-09-02T15:52:27.1724249Z",
                "dateModified": "2026-09-02T15:52:27.1724249Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
                },
                "keywords": "Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense",
                "wordCount": 2703,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://geekatyourspot.com/blog/marketing/how-ai-powered-lead-scoring-can-boost-your-sales-funnel"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "ActiveCampaign",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "ActiveCampaign streamlines lead data with automation and 1000+ integrations for intelligent lead scoring.",
                "url": "https://geekatyourspot.com/tools/marketing/active-campaign"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Pipedrive",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Pipedrive visualizes your sales pipeline and automates de-duplication for cleaner lead scoring.",
                "url": "https://geekatyourspot.com/tools/marketing/pipedrive"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Apollo",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Apollo enriches lead records with company and industry data for more accurate scoring.",
                "url": "https://geekatyourspot.com/tools/marketing/Apollo"
            },
            {
                "@type": "SoftwareApplication",
                "name": "LeadSquared",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "LeadSquared filters spam and combines CRM with analytics for precision lead scoring.",
                "url": "https://geekatyourspot.com/tools/marketing/lead-squared"
            },
            {
                "@type": "SoftwareApplication",
                "name": "6sense",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "6sense delivers predictive intelligence to forecast lead conversion and optimize scoring.",
                "url": "https://geekatyourspot.com/tools/marketing/6sense"
            }
        ]
    }
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot',
        },
        description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
        keywords: ["Lead Scoring, AI Consulting, Small Business, ActiveCampaign, Pipedrive, Apollo, LeadSquared, 6sense"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | AI-Driven Lead Scoring for Small Businesses',
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
            url: 'https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses',
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
            title: 'Geek at Your Spot | AI-Driven Lead Scoring for Small Businesses',
            description: "Explore AI-driven lead scoring to boost sales for small businesses. Learn effective strategies and tools like ActiveCampaign and Pipedrive.",
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
        verification: {
            google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
            yandex: 'yandex-verification-token',
            yahoo: 'yahoo-verification-token',
        },
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
        },
    };
};

export default async function Page() {
    return (
        <>
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
