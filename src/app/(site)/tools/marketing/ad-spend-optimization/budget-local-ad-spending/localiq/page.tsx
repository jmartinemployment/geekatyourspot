import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "LocaliQ";
const PAGE_TITLE = "LocaliQ for Budget Ad Copy & Message Validation";
const DESCRIPTION =
    "Budget Ad Copy & Message Validation with LocaliQ helps South Florida small businesses turn $500 into real leads, not wasted clicks. Start optimizing now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "LocaliQ, budget ad copy and message validation, AI ad copy testing, ad spend optimization, local advertising, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-24T16:08:13.8759570Z",
            "dateModified": "2026-10-24T16:08:13.8759570Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://localiq.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does the LocalIQ cross-channel AI engine work?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ uses a proprietary system called XMO (Cross-Media Optimization). Instead of making you manage budgets on different dashboards, XMO tracks conversions and automatically moves your single budget between Google, Meta, and Microsoft Ads in real time. It always aims to put your money where it gets the lowest cost per lead."}},
                {"@type": "Question", "name": "How does LocalIQ optimize my ad spend across different channels?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s AI engine manages one unified budget for search, social, and display ads. It automatically shifts your spend in real time to whichever network, Google Ads, Meta, or Bing, is bringing in the most cost-effective local leads. You do not have to split your funds or guess where to put your money."}},
                {"@type": "Question", "name": "What major platform certifications back the LocalIQ optimization engine?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ is an official Google Premier Partner, Microsoft Advertising Elite Partner, and Meta Business Partner. Its algorithms are trained on data from over 512,000 businesses in more than 1,100 industries, generating over 283 million leads."}},
                {"@type": "Question", "name": "How does the platform handle lead qualification and tracking after a user clicks?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ connects directly to a lead-management center with 24/7 AI lead categorization, summarization, and prioritization. It automatically tracks calls and form fills, scores leads, and helps small businesses quickly spot and call back high-intent buyers first."}},
                {"@type": "Question", "name": "What services does LocaliQ offer?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ offers search advertising, SEO, social advertising, display and video ads, retargeting, websites and landing pages, and live chat. It also provides AI-powered lead management through Dash by LocaliQ."}},
                {"@type": "Question", "name": "Is LocaliQ software or a marketing agency?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ combines both technology and managed services. You get campaign optimization and reporting software, plus specialists who handle strategy, setup, and campaign management. It is not just a self-service tool."}},
                {"@type": "Question", "name": "How much does LocaliQ cost?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ does not publish a universal price list. Its Social Ads service charges one flat fee that covers budget optimization and creative refreshes, but the exact amount is not listed and it is not clear if media spend is included. Ask for an itemized proposal to see all costs."}},
                {"@type": "Question", "name": "Does LocaliQ manage Google Ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. LocaliQ manages paid search campaigns and combines Google Smart Bidding with its own AI optimization. It also supports search ads on Bing and Yelp."}},
                {"@type": "Question", "name": "What is included in LocaliQ’s PPC management?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s PPC management includes keyword strategy, negative keywords, campaign setup, ad copy optimization, bid and budget management, cross-publisher optimization, and reporting. Their approach combines search analysts with proprietary machine learning."}},
                {"@type": "Question", "name": "How does LocaliQ use AI?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ states its AI adjusts bids, budgets, placements, audiences, and ad copy based on campaign and customer data. Its lead-management technology categorizes, summarizes, and prioritizes leads to help businesses follow up. These are LocaliQ’s own descriptions, not independent performance findings."}},
                {"@type": "Question", "name": "What is Dash by LocaliQ?", "acceptedAnswer": {"@type": "Answer", "text": "Dash is LocaliQ’s AI-powered lead-management tool. LocaliQ describes it as helping businesses summarize and prioritize prospects, monitor advertising results, and follow up with leads more efficiently."}},
                {"@type": "Question", "name": "Does LocaliQ integrate with a CRM?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ’s Search Ads documentation describes using connected CRM data to support value-based bidding and track leads that become appointments, customers, or revenue. The page does not list all supported CRMs, so compatibility with a specific system needs to be confirmed."}},
                {"@type": "Question", "name": "How does LocaliQ improve lead quality?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ says it uses signals like call outcomes, form submissions, CRM data, and website activity to optimize for prospects more likely to convert. With connected CRM data, it can use downstream outcomes instead of just clicks or raw lead counts."}},
                {"@type": "Question", "name": "Does LocaliQ manage Facebook and Instagram ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. LocaliQ manages Facebook and Instagram advertising, along with other social ad options. The service includes campaign setup, targeting, creative management, optimization, and reporting."}},
                {"@type": "Question", "name": "How quickly can LocaliQ launch a campaign?", "acceptedAnswer": {"@type": "Answer", "text": "LocaliQ says Search Ads campaigns often go live within three to five business days. This refers to launching the campaign, not to when profitable results will be seen."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["LocaliQ", "budget ad copy and message validation", "AI ad copy testing", "ad spend optimization", "local advertising", "South Florida small business"],
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
        "LocaliQ’s Budget Ad Copy & Message Validation tool helps South Florida small businesses optimize local ad spend by testing and refining every campaign element for real lead generation.";
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
