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

const jsonLd = {
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
                "name": "Geek at Your Spot"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Geek At Your Spot",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                }
            },
            "datePublished": "2026-08-20T18:52:37.9006976Z",
            "dateModified": "2026-08-20T18:52:37.9006976Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization"
            },
            "keywords": "Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments",
            "wordCount": 3309,
            "@id": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization#article",
            "relatedLink": "https://geekatyourspot.com/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/advantage#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/omneky#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/smartlyio#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/adcreativeai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/google-ads-smart-bidding#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/hubspot#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/salesforce-einstein#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/madgicx#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/basis-technologies#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/adobe-mix-modeler#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/optimove#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/tableau-ai-adobe-analytics#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/monte-carlo#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/anomalo#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/great-expectations#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/qualytics#software"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Advantage",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with Advantage's AI, enhancing efficiency and boosting ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/advantage"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/advantage#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Omneky",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Omneky uses AI to optimize ad spend, boosting ROI and targeting efficiency for businesses.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/omneky"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/omneky#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Smartly.io",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with Smartly.io to enhance ROI and streamline digital campaigns.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/smartlyio"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/smartlyio#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "AdCreative.ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with AdCreative.ai for enhanced marketing efficiency and ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/adcreativeai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/adcreativeai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Jasper",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Jasper automates ad spend optimization using AI, reducing waste and boosting ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Google Ads Smart Bidding",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with AI-driven Google Ads Smart Bidding for better ROI and audience targeting.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/google-ads-smart-bidding"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/google-ads-smart-bidding#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "HubSpot",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with HubSpot's CRM and marketing tools for better ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/hubspot"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/hubspot#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Salesforce Einstein",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with Salesforce Einstein's AI-driven insights for better ROI and efficiency.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/salesforce-einstein"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/salesforce-einstein#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Madgicx",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with Madgicx's AI-driven platform, boosting ROI and efficiency effortlessly.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/madgicx"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/madgicx#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Basis Technologies",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with AI-driven strategies from Basis Technologies, enhancing ROI and reducing inefficiencies.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/basis-technologies"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/basis-technologies#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Adobe Mix Modeler",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with Adobe Mix Modeler for better ROI and precision targeting.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/adobe-mix-modeler"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/adobe-mix-modeler#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Optimove",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with AI-driven insights from Optimove for better marketing ROI and efficiency.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/optimove"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/optimove#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Tableau AI / Adobe Analytics",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with Tableau AI and Adobe Analytics for better ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/tableau-ai-adobe-analytics"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/tableau-ai-adobe-analytics#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Monte Carlo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate ad spend optimization with Monte Carlo for accurate, data-driven marketing strategies.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/monte-carlo"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/monte-carlo#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Anomalo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with Anomalo's automated data quality assurance, ensuring reliable insights for better ROI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/anomalo"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/anomalo#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Great Expectations",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with Great Expectations' data validation, ensuring accurate and effective marketing decisions.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/great-expectations"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/great-expectations#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Qualytics",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize ad spend with Qualytics through automated data quality management for reliable marketing outcomes.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/qualytics"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/qualytics#software"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Automated Ad Spend Optimization",
        description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
        keywords: ["Automated Ad Spend Optimization, AI marketing tools, dynamic creative optimization, automated bidding, real-time budget reallocation, data quality assessments"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/automated-ad-spend-optimization',
        },
        openGraph: {
            title: "Automated Ad Spend Optimization",
            description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
            url: 'https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization',
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
            title: "Automated Ad Spend Optimization",
            description: "Explore Automated Ad Spend Optimization to enhance marketing efficiency with AI, featuring dynamic creative, bidding, and real-time budget tools.",
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
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
