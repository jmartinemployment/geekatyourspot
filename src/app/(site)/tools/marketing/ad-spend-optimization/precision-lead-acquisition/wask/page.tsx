import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Wask";
const PAGE_TITLE = "Wask for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Wask gives Miami small businesses real-time control, cutting wasted ad budget by up to 30 percent. Take charge today.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Wask, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.wask.co/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What does WASK do to optimize advertising spend?", "acceptedAnswer": {"@type": "Answer", "text": "WASK gives small businesses a single platform to analyze, manage, and optimize both Google Ads and Meta Ads. Its workflows monitor campaign performance and trigger actions when set conditions are met. The reporting dashboard brings ad spend and conversions together, making campaign management more efficient, not just increasing spend."}},
                {"@type": "Question", "name": "Can I optimize Google Ads and Facebook ads at the same time?", "acceptedAnswer": {"@type": "Answer", "text": "WASK supports both Google Ads and Meta Ads in one place. It provides workflows for managing and optimizing them together. Its official FAQ confirms you can optimize Facebook and Google Ads at the same time."}},
                {"@type": "Question", "name": "How does its automated optimization work?", "acceptedAnswer": {"@type": "Answer", "text": "WASK uses a three-part workflow: you select the campaigns or ads, set a performance condition using metrics like cost or click-through rate, and then choose the action to take when that condition is met. You can use prebuilt templates or create your own rules, so you do not have to check every campaign manually."}},
                {"@type": "Question", "name": "Do I retain control over changes to my campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "WASK lets you decide if workflow actions run automatically or if you want to review and apply them manually. You can also modify templates and control each rule and action. The key is whether you set a workflow to execute on its own or require your review first."}},
                {"@type": "Question", "name": "Do I need digital marketing or technical knowledge?", "acceptedAnswer": {"@type": "Answer", "text": "WASK is designed for local businesses without technical expertise as well as agencies and enterprise teams. Prebuilt templates help you get started, and custom workflows are there if you need more detail. Its official FAQ confirms you do not need digital marketing knowledge to use Optimize."}},
                {"@type": "Question", "name": "How can I track whether my advertising spend is performing well?", "acceptedAnswer": {"@type": "Answer", "text": "WASK’s Performance Analyze module tracks Google and Meta ad spend and conversions in a single dashboard. It offers account-level reports, creative comparisons, and ad-asset analysis, so you can see performance alongside the changes made through optimization workflows."}},
                {"@type": "Question", "name": "Can WASK help improve underperforming ad creatives?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. WASK has AI tools to analyze creatives, suggest improvements, redesign underperforming ads, and generate new images or videos. These tools work with its campaign rules and reporting features."}},
                {"@type": "Question", "name": "What does WASK’s AI agent do?", "acceptedAnswer": {"@type": "Answer", "text": "WASK’s AI agent lets you ask questions about your Google and Meta campaigns and describe optimization tasks or workflows in plain language. This works alongside its rules-based automation, not just for reporting."}},
                {"@type": "Question", "name": "How much does WASK cost?", "acceptedAnswer": {"@type": "Answer", "text": "WASK sets its plan based on your monthly advertising spend. The vendor publishes its pricing, but a specific dollar amount is not shown on the page. Check the price listed for your spend level before you subscribe."}},
                {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. WASK offers a seven-day free trial, as shown on its homepage, FAQ, and pricing pages."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Wask", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
        authors: [{ name: 'Jeff Martin' }],
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
        "Wask provides South Florida small businesses with real-time ad performance insights and automated budget adjustments, streamlining Ad Spend Optimization.";
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
