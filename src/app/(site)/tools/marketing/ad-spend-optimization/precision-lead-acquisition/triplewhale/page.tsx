import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Triplewhale";
const PAGE_TITLE = "Triplewhale for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Triplewhale reveals which ads drive real revenue for Miami small businesses, cutting wasted spend by up to 40 percent. Get clarity now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Triplewhale, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.triplewhale.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does Triple Whale help optimize advertising spend?", "acceptedAnswer": {"@type": "Answer", "text": "Triple Whale brings marketing and business data into one platform so teams can evaluate performance across channels instead of relying only on each ad platform’s reporting. Its Compass tools support budget allocation, spot possible channel saturation, and provide action plans for shifting spend. Moby, the AI assistant, helps turn those insights into recommendations and actions."}},
                {"@type": "Question", "name": "Which advertising platforms can I use with it?", "acceptedAnswer": {"@type": "Answer", "text": "Triple Whale’s homepage lists Meta, Google, and TikTok as platforms where Moby can help manage campaigns. The company advertises more than 60 integrations across ecommerce and retail, but not every integration supports the same reporting or campaign-management features. Check the capabilities for your specific channels."}},
                {"@type": "Question", "name": "How does Triple Whale determine which channels deserve more budget?", "acceptedAnswer": {"@type": "Answer", "text": "Compass combines multi-touch attribution, marketing mix modeling, and incrementality testing in its measurement framework. These give different views on performance: customer touchpoints, the broader marketing mix, and proof of a channel’s incremental impact. Triple Whale presents this combination as a base for budget allocation and growth validation, not just picking whichever platform reports the highest return."}},
                {"@type": "Question", "name": "What metrics should I monitor?", "acceptedAnswer": {"@type": "Answer", "text": "Triple Whale’s published materials highlight several useful metrics and views: revenue, spend, conversions, and return on ad spend (ROAS) for campaign and keyword performance; media efficiency ratio (MER), also called blended ROAS, for a business-wide view; new-versus-returning customer performance to separate acquisition from repeat purchases; and creative-level performance to compare individual ads, formats, and messaging."}},
                {"@type": "Question", "name": "Can Triple Whale automatically change budgets or manage campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Triple Whale describes features that go beyond reporting. Its homepage says Moby can manage advertising campaigns, deliver channel-budget reallocations, and support advertising actions and automations. The published description of Moby Actions also includes scaling successful ads, cutting underperformers, and managing budgets across Meta and Google using rules the advertiser sets. Confirm the available actions and controls for your account before turning on automation."}},
                {"@type": "Question", "name": "What is Sonar, and how does it improve ad optimization?", "acceptedAnswer": {"@type": "Answer", "text": "Sonar enriches advertising signals using events captured by Triple Whale and data from systems like Shopify, then sends enriched information back to advertising platforms through server-side APIs. Triple Whale says this can give platforms more complete conversion and customer information for targeting, reporting, and optimization. For Meta, its documented CAPI integration can send conversions missed by the browser pixel, extra customer information, and corrected conversion values. This improves the data available to the platform and is separate from deciding how much budget to give Meta versus another channel."}},
                {"@type": "Question", "name": "How does Triple Whale track conversions and customer journeys?", "acceptedAnswer": {"@type": "Answer", "text": "Triple Pixel provides first-party, server-side attribution data to help identify advertising touchpoints and the channels linked to sales. Triple Whale also describes cross-device identity resolution and unified measurement as part of its tracking and measurement base. These are the company’s stated capabilities, not a guarantee that every interaction can be tracked."}},
                {"@type": "Question", "name": "Can it help separate new-customer acquisition from repeat-customer sales?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Triple Whale’s published guidance describes using its Pixel, dashboards, and custom attribution views to see which campaigns bring in new customers and which bring existing customers back. This helps when evaluating campaigns meant to acquire shoppers instead of just converting people who already know the brand."}},
                {"@type": "Question", "name": "Can Triple Whale help identify creative fatigue and better-performing ads?", "acceptedAnswer": {"@type": "Answer", "text": "Triplewhale can spot creative fatigue and highlight which ads are performing better. Its Moby feature detects when creative assets are wearing out and can help generate new ones. The platform also offers creative reporting that lets teams compare ads, ad types, copy, images, videos, and custom segments. This makes it easier to review creative performance alongside budget allocation."}},
                {"@type": "Question", "name": "How quickly can I see performance data?", "acceptedAnswer": {"@type": "Answer", "text": "Triplewhale provides business data and dashboards that update in real time, pulling from ecommerce and advertising platforms. However, the vendor does not guarantee that every integration refreshes at the same speed, so not all sources may update at once."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Triplewhale", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "Triplewhale helps South Florida small businesses pinpoint which ads generate real revenue, so you can optimize spend and cut wasted budget.";
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
