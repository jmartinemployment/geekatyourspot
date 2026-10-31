import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "LocaliQ";
const PAGE_TITLE = "LocaliQ for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with LocaliQ links every ad dollar to sales, reducing wasted spend for South Florida small businesses. See results, adjust smarter.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "LocaliQ, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://localiq.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does the LocaliQ cross-channel AI engine work?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ uses its own automated optimization technology called XMO (Cross-Media Optimization). Instead of making you manage separate budgets for each ad platform, XMO tracks conversions and automatically moves your budget between Google, Meta, and Microsoft Ads in real time. It always aims to put your money where you get the lowest cost per lead."}},
                {"@type": "Question", "name": "How does LocaliQ optimize my ad spend across different channels?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s AI engine manages one combined budget for your search, social, and display ads. It does not split your funds up front. Instead, it shifts your spend in real time to whichever network, Google Ads, Meta, or Bing, is bringing in the most cost-effective local leads."}},
                {"@type": "Question", "name": "What major platform certifications back the LocaliQ optimization engine?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ is recognized as a Google Premier Partner, Microsoft Advertising Elite Partner, and Meta Business Partner. Its algorithms are trained on performance data from over 512,000 businesses in more than 1,100 industries, with a record of generating over 283 million leads."}},
                {"@type": "Question", "name": "How does the platform handle lead qualification and tracking after a user clicks?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ connects directly to a lead-management center with 24/7 AI lead categorization, summarization, and prioritization. It tracks calls and form fills instantly, scores leads automatically, and helps small businesses quickly spot and call back high-intent buyers first."}},
                {"@type": "Question", "name": "What services does LocaliQ offer?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ offers search advertising, SEO, social advertising, display and video ads, retargeting, websites and landing pages, and live chat. It also provides AI-powered lead management through Dash by LocaliQ."}},
                {"@type": "Question", "name": "Is LocaliQ software or a marketing agency?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ is both. It combines campaign optimization and reporting software with managed services. Their specialists help develop strategies, set up campaigns, and manage advertising. It is not just a self-service tool."}},
                {"@type": "Question", "name": "How much does LocaliQ cost?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ does not publish a standard price list. Its Social Ads service charges a flat fee that covers automated budget optimization and creative refreshes, but the exact amount is not listed and it is unclear if media spend is included. Businesses should request an itemized proposal to understand all costs."}},
                {"@type": "Question", "name": "Does LocaliQ manage Google Ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. LocaliQ manages paid search campaigns and combines Google Smart Bidding with its own AI-powered optimization. It also manages ads on Bing and Yelp."}},
                {"@type": "Question", "name": "What is included in LocaliQ’s PPC management?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s PPC management covers keyword strategy, negative keywords, campaign setup, ad copy optimization, bid and budget management, cross-publisher optimization, and reporting. Their process uses both search analysts and proprietary machine learning."}},
                {"@type": "Question", "name": "How does LocaliQ use AI?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ says its AI adjusts bids, budgets, placements, audiences, and ad copy based on campaign and customer data. Its lead-management technology also categorizes, summarizes, and prioritizes leads to help businesses follow up. These are LocaliQ’s descriptions of its capabilities, not independent performance findings."}},
                {"@type": "Question", "name": "What is Dash by LocaliQ?", "acceptedAnswer": {"@type": "Answer", "text": "Dash is LocaliQ’s AI-powered lead-management tool. LocaliQ describes it as helping businesses summarize and prioritize prospects, monitor advertising results, and follow up with leads more efficiently."}},
                {"@type": "Question", "name": "Does LocaliQ integrate with a CRM?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s Search Ads documentation describes using connected CRM data to support value-based bidding and identify leads that become appointments, customers, or revenue. The documentation does not list all supported CRMs, so compatibility with a specific system needs to be confirmed."}},
                {"@type": "Question", "name": "How does LocaliQ improve lead quality?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ says it uses signals like call outcomes, form submissions, CRM data, and website activity to optimize for prospects more likely to convert. When CRM data is connected, it can use downstream outcomes instead of just clicks or raw lead counts."}},
                {"@type": "Question", "name": "Does LocaliQ manage Facebook and Instagram ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. LocaliQ offers managed Facebook and Instagram advertising, along with other social advertising options. The service includes campaign setup, targeting, creative management, optimization, and reporting."}},
                {"@type": "Question", "name": "How quickly can LocaliQ launch a campaign?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ says Search Ads campaigns often go live within three to five business days. This refers to launching the campaign, not a guarantee of profitable results within that time."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["LocaliQ", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "LocaliQ empowers South Florida small businesses to optimize digital ad spend by linking every campaign to actual sales and automating budget adjustments.";
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
