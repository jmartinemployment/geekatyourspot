import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Bir";
const PAGE_TITLE = "Bir for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Bir cuts wasted budget by automating ad controls and reallocating spend in real time. Start optimizing your campaigns today.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Bir, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://bir.ch/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does Bïrch optimize advertising spend?", "acceptedAnswer": {"@type": "Answer", "text": "Bïrch uses rules you set to check how your campaigns are doing. When a campaign meets or fails the conditions you define, Bïrch takes the actions you choose. For example, it can filter out ads that are not working, raise budgets when results are strong, or cut spending if your cost per acquisition goes over your limit."}},
                {"@type": "Question", "name": "Which advertising platforms does it support?", "acceptedAnswer": {"@type": "Answer", "text": "Bïrch works with Meta, Google, TikTok, and Snapchat. The controls you get depend on the platform and campaign type. Not every action is available on every platform. For example, Google App campaigns are managed at the campaign level, and TikTok Smart+ has some extra API limits."}},
                {"@type": "Question", "name": "Can it automatically stop ads that waste budget?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can set rules to pause ads after they spend a certain amount without getting conversions, or when CPA or ROAS does not meet your targets. Bïrch recommends using a minimum spend or enough performance data before making a decision, instead of reacting to every early change."}},
                {"@type": "Question", "name": "Can it automatically scale successful campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, if the platform allows it. Bïrch can scale by raising budgets step by step or by duplicating campaigns or ad sets that are working well. More advanced setups let you combine different conditions and time frames, so scaling only happens when good results last, not just after a quick spike."}},
                {"@type": "Question", "name": "How frequently does Bïrch check performance?", "acceptedAnswer": {"@type": "Answer", "text": "Rules can run as often as every 15 minutes. But checking often does not mean budgets change that often. The right timing for changes depends on your campaign size, how steady your results are, and how long it takes to see conversions. There is no single best frequency for all cases."}},
                {"@type": "Question", "name": "Which metrics can drive optimization?", "acceptedAnswer": {"@type": "Answer", "text": "You can use spend, conversions, CPA, ROAS, CPC, and CPM. Bïrch also lets you create custom metrics with formulas, so your rules can match your business goals instead of just using standard numbers from the ad platforms."}},
                {"@type": "Question", "name": "Can it use external attribution or business data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Bïrch connects with AppsFlyer, Adjust, and Hyros. You can also use data from Google Sheets or other attribution tools in your custom metrics. These can trigger automated actions, not just reports."}},
                {"@type": "Question", "name": "Can Bïrch help prevent overspending?", "acceptedAnswer": {"@type": "Answer", "text": "Bïrch supports rules for total spend limits, pacing budgets, and spotting unusual spending or cost jumps. These rules help automate control, but since checks run on a schedule, they do not guarantee spending will never go over a set amount."}},
                {"@type": "Question", "name": "Bïrch describes a layered approach", "acceptedAnswer": {"@type": "Answer", "text": "Bir uses a layered approach to ad spend optimization. At the ad level, it reviews creative performance and pauses ads that are not working well. At the ad-set level, it adjusts budgets and scales up setups that are performing. At the campaign or account level, it monitors total spending, applies safeguards, and looks for unusual activity. This setup keeps creative testing, budget changes, and financial controls separate."}},
                {"@type": "Question", "name": "Does Bïrch use AI, or is it only rule-based?", "acceptedAnswer": {"@type": "Answer", "text": "Bir uses both AI and rule-based automation. Rules handle the automation steps. Bir’s AI reviews account performance and current rules, suggests improvements, and can turn plain-language instructions into a draft rule. The website notes that you review each rule before it goes live."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Bir", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "Bir uses automation and predictive analytics to help Miami-Dade, Broward and Palm Beach small businesses optimize ad spend and prevent budget waste.";
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
