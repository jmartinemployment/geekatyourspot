import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/roles-section";
import RightFitSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/preparing-section";
import PaaSection from "@/components/use-cases/marketing/ad-spend-optimization/measured-lead-generation-ai-implementation-for-reliable-ad-spend-results/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Measured Lead Generation";
const DESCRIPTION =
    "Measured Lead Generation uses AI to track and improve ad spend, bringing more qualified leads and lower costs for small businesses. Book a free AI assessment.";
const CANONICAL = "/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-25T11:32:40.1839700Z",
            "dateModified": "2026-10-25T11:32:40.1839700Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Measured Lead Generation, AI ad spend optimization, predictive analytics for advertising, lead tracking automation, South Florida AI consulting, small business marketing AI, Optmyzr, Madgicx, Marpipe, AI marketing systems",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization" },
            "mentions": [
                { "@type": "Thing", "name": "Madgicx", "url": "https://madgicx.com/" },
                { "@type": "Thing", "name": "Marpipe", "url": "https://www.marpipe.com/" },
                { "@type": "Thing", "name": "Optmyzr", "url": "https://www.optmyzr.com/" },
                { "@type": "Thing", "name": "Wrench", "url": "https://wrench.ai/" },
                { "@type": "Thing", "name": "Performance Max", "url": "https://ads.google.com/home/campaigns/performance-max/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What does Measured Lead Generation include?", "acceptedAnswer": {"@type": "Answer", "text": "Measured Lead Generation covers tools and workflows that help small businesses attract potential customers, improve advertising, identify valuable audiences, and measure which marketing activities generate inquiries. This includes both acquisition tools and supporting tools, such as tracking software. Tracking software measures leads but does not generate traffic itself."}},
                {"@type": "Question", "name": "Does the $500–$1,500 monthly budget include advertising?", "acceptedAnswer": {"@type": "Answer", "text": "Ad software itself generally falls into these three budget categories, and listings here are based on your budget. Do not assume advertising is included. Clarify whether the budget is for software only or covers software, ad spend, setup, and management. Platforms that optimize advertising work alongside ad accounts and should not be confused with the media budget."}},
                {"@type": "Question", "name": "Can these tools help a local service business?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but relevance depends on your business type. Local visibility and tracking calls or forms directly address how service businesses receive inquiries. Product-feed and catalog-ad tools are for different workflows and should not be included by default in a service-business package."}},
                {"@type": "Question", "name": "Can I generate leads without paid advertising?", "acceptedAnswer": {"@type": "Answer", "text": "Paid advertising is not the only option. Google Business Profile offers a free way to appear on Search and Maps, showing your services and information to potential customers. However, a free listing does not guarantee a steady flow of leads."}},
                {"@type": "Question", "name": "How can I tell whether leads are qualified?", "acceptedAnswer": {"@type": "Answer", "text": "Set clear qualification criteria for your business and record whether each inquiry meets them. Common criteria include location, requested service, purchase timing, and fit. Lead-management tools can help organize, qualify, and assign value to leads, but your business must define what “qualified” means for you."}},
                {"@type": "Question", "name": "Can these tools improve campaigns I already run?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Advertising-optimization platforms are often used to analyze account performance, monitor budgets, spot opportunities, and apply changes. They support campaign management but do not replace the need for a strong offer and clear business goals."}},
                {"@type": "Question", "name": "Will these platforms replace my CRM or sales follow-up?", "acceptedAnswer": {"@type": "Answer", "text": "No, do not assume that. Lead attribution, audience analysis, and ad management are different from managing the full sales process. Check integrations and responsibilities for each tool. For example, WhatConverts offers lead management and integration, while Wrench.ai enhances CRM data and personalization."}},
                {"@type": "Question", "name": "How many leads should I expect for this budget?", "acceptedAnswer": {"@type": "Answer", "text": "Budget alone cannot guarantee a number of leads. It may cover various mixes of software, advertising, and management. Some tools measure or improve existing activity rather than create new demand. Start by measuring your baseline and set targets for the workflow you are funding."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Measured Lead Generation", "AI ad spend optimization", "predictive analytics for advertising", "lead tracking automation", "South Florida AI consulting", "small business marketing AI", "Optmyzr", "Madgicx", "Marpipe", "AI marketing systems"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Stop guessing where your leads come from. We help small businesses in South Florida use AI to track, predict, and improve every dollar spent on ads. Get more qualified leads without raising your marketing budget.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PaaSection />
                <SchedulerShell />
            </article>
        </>
    );
}
