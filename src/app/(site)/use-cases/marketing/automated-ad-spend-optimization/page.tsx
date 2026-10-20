import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/lede-section'
import DynamicCreativeOptimizationSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/dynamic-creative-optimization-section'
import AutomatedRulesBiddingSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/automated-rules-bidding-section'
import RealTimeBudgetReallocationSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/real-time-budget-reallocation-section'
import DataQualityAssessmentsSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/data-quality-assessments-section'
import DataValidationCleaningSection from '@/components/use-cases/marketing/automated-ad-spend-optimization/data-validation-cleaning-section'
import PAASection from '@/components/use-cases/marketing/automated-ad-spend-optimization/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { pillarService } from "@/lib/seo/organization";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Automated Ad Spend Optimization",
            "description": "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-08-20T18:52:37.9006976Z",
            "dateModified": "2026-08-20T18:52:37.9006976Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
            },
            "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
            "wordCount": 3309,
            "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article",
            "about": { "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#service" },
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/#software-advantage"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-omneky"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-smartly-io"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-adcreative-ai"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-jasper"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-google-ads-smart-bidding"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-hubspot"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-salesforce-einstein"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-madgicx"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-basis-technologies"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-adobe-mix-modeler"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-optimove"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-tableau-ai"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-adobe-analytics"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-monte-carlo"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-anomalo"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-great-expectations"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-qualytics"
                }
            ]
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-advantage",
            "name": "Meta Advantage+",
            "url": "https://www.facebook.com/business/ads/meta-advantage-plus"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-omneky",
            "name": "Omneky",
            "url": "https://www.omneky.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-smartly-io",
            "name": "Smartly.io",
            "url": "https://www.smartly.io/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-adcreative-ai",
            "name": "AdCreative.ai",
            "url": "https://www.adcreative.ai/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-jasper",
            "name": "Jasper",
            "url": "https://www.jasper.ai/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-google-ads-smart-bidding",
            "name": "Google Ads Smart Bidding",
            "url": "https://support.google.com/google-ads/answer/7065882"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-hubspot",
            "name": "HubSpot",
            "url": "https://www.hubspot.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-salesforce-einstein",
            "name": "Salesforce Einstein",
            "url": "https://www.salesforce.com/artificial-intelligence/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-madgicx",
            "name": "Madgicx",
            "url": "https://madgicx.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-basis-technologies",
            "name": "Basis Technologies",
            "url": "https://basis.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-adobe-mix-modeler",
            "name": "Adobe Mix Modeler",
            "url": "https://business.adobe.com/products/mix-modeler.html"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-optimove",
            "name": "Optimove",
            "url": "https://www.optimove.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-tableau-ai",
            "name": "Tableau AI",
            "url": "https://www.tableau.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-adobe-analytics",
            "name": "Adobe Analytics",
            "url": "https://business.adobe.com/products/analytics/adobe-analytics.html"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-monte-carlo",
            "name": "Monte Carlo",
            "url": "https://montecarlo.ai/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-anomalo",
            "name": "Anomalo",
            "url": "https://www.anomalo.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-great-expectations",
            "name": "Great Expectations",
            "url": "https://greatexpectations.io/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-qualytics",
            "name": "Qualytics",
            "url": "https://qualytics.ai/"
        },
        pillarService({ url: "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization", name: "Automated Ad Spend Optimization", description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools." })
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Automated Ad Spend Optimization",
        description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/automated-ad-spend-optimization',
        },
        openGraph: {
            title: "Automated Ad Spend Optimization",
            description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
            url: 'https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Automated Ad Spend Optimization",
            description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
            creator: 'Geek @ Your Spot LLC',
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
    const title = "Automated Ad Spend Optimization";
    const heroSummary = "Transform your marketing strategy with cutting-edge AI tools for streamlined ad spend optimization."
    // Placeholder hero -- no automated-ad-spend-optimization art exists yet, and
    // SharedHeroSection requires an image. Swap once the pillar hero is generated.
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif";
    const imgAlt = "Automated ad spend optimization"
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <LedeSection />
                <DynamicCreativeOptimizationSection />
                <AutomatedRulesBiddingSection />
                <RealTimeBudgetReallocationSection />
                <DataQualityAssessmentsSection />
                <DataValidationCleaningSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}
