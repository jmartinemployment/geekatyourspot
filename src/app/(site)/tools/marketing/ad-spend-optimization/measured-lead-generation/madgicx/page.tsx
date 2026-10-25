import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Madgicx";
const PAGE_TITLE = "Madgicx for Measured Lead Generation";
const DESCRIPTION =
    "Measured Lead Generation with Madgicx keeps your cost per lead stable as you scale, using AI to prevent ad fatigue and wasted spend. See how it works.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Madgicx, measured lead generation, AI lead generation automation, ad spend optimization, cost per lead, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-25T11:32:40.1839700Z",
            "dateModified": "2026-10-25T11:32:40.1839700Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://madgicx.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Madgicx?", "acceptedAnswer": {"@type": "Answer", "text": "Madgicx is an AI-powered platform that helps manage and optimize Meta advertising, including Facebook and Instagram ads. It offers tools for campaign automation, audience targeting, creative generation, tracking, analytics, and reporting."}},
                {"@type": "Question", "name": "Does Madgicx replace Meta Ads Manager?", "acceptedAnswer": {"@type": "Answer", "text": "No. Madgicx works as an added software layer on top of Meta Ads Manager. It brings extra targeting, automation, and analytics features to help advertisers manage campaigns and make decisions about budgets, audiences, and creatives."}},
                {"@type": "Question", "name": "Is Madgicx only an analytics tool?", "acceptedAnswer": {"@type": "Answer", "text": "No. While reporting is one part of Madgicx, the platform also includes tools for ad optimization, tracking, automation, targeting, creative, and ad management."}},
                {"@type": "Question", "name": "Is Madgicx suitable for small businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Madgicx states that its AI Marketer can serve businesses from small e-commerce companies to large agencies. However, it notes that the platform is most suitable for advertisers spending at least $2,500 per month on Facebook ads. Smaller budgets or limited advertising experience may make it harder to achieve results. This is guidance, not a strict minimum."}},
                {"@type": "Question", "name": "Which platforms does One-Click Report support?", "acceptedAnswer": {"@type": "Answer", "text": "Meta Ads Google Ads Google Analytics 4 Shopify Klaviyo TikTok These are reporting integrations. This list does not mean Madgicx offers the same campaign-management features for every platform."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Madgicx", "measured lead generation", "AI lead generation automation", "ad spend optimization", "cost per lead", "South Florida small business"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Madgicx helps South Florida small businesses automate their lead generation, using AI to stabilize costs and eliminate manual campaign burnout.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <TransformsSection />
            <HowItWorksSection />
            <ArchitectureSection />
            <ImplementingSection />
            <DataMappingSection />
            <ConfiguringSection />
            <EvaluatingSection />
            <ComparingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
