import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Adzooma";
const PAGE_TITLE = "Adzooma for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Adzooma helps South Florida small businesses cut wasted budget and improve campaign results. See where your money works best.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Adzooma, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://adzooma.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Adzooma?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma is a PPC management platform that helps small businesses audit, monitor, and optimize Google, Microsoft, and Meta advertising accounts. It brings audits, optimization tips, budget tracking, performance alerts, and reporting together in one place. This helps advertisers spot problems and find ways to improve results across all their connected ad accounts."}},
                {"@type": "Question", "name": "Can I run and evaluate Google Performance Max (PMax) strategies in the dashboard?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma runs a full diagnostic check in minutes. It scans your linked Google, Meta, and Microsoft ad accounts and gives you a health score that shows high-impact issues, like broken tracking, paused conversion pixels, and budget leaks. This helps you quickly see where your Performance Max and other campaigns need attention."}},
                {"@type": "Question", "name": "What advertising platforms does Adzooma support?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma supports Google Ads, Microsoft Advertising, and Meta/Facebook Ads. Its dashboard lets you compare results and manage optimization tasks for all three. Some features may work differently depending on the platform."}},
                {"@type": "Question", "name": "Is Adzooma free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma offers a free-forever plan. You do not need a credit card to get started. Paid plans give you more frequent analysis and extra features."}},
                {"@type": "Question", "name": "How much does Adzooma cost?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma’s current pricing page lists three plans. The Free plan is $0 per month. The Silver plan is $69 per month or $700 per year. The Gold plan is $179 per month or $1,800 per year. Each plan offers different levels of reporting and opportunity analysis frequency."}},
                {"@type": "Question", "name": "What is included in Adzooma’s free plan?", "acceptedAnswer": {"@type": "Answer", "text": "The Free plan gives you monthly PPC performance reports, opportunity analysis, limited optimization opportunities, one SEO profile, one web-metrics profile, three PPC alerts, budget tracking, and one user seat. You can connect unlimited advertising accounts."}},
                {"@type": "Question", "name": "How does Adzooma work?", "acceptedAnswer": {"@type": "Answer", "text": "You connect your advertising accounts, and Adzooma checks the data to find issues and ways to improve. Its tools help you spot wasted spend, disapproved ads, tracking problems, underperforming campaigns, and ways to adjust budgets, bids, and targeting for better results."}},
                {"@type": "Question", "name": "Does Adzooma automatically optimize campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma gives you refreshed analysis, alerts, and actionable recommendations. It also has tools to help you apply improvements. Not every recommendation is automatic, and campaigns still need oversight. Recommendations update monthly on Free, weekly on Silver, and daily on Gold."}},
                {"@type": "Question", "name": "How is Adzooma different from using Google Ads directly?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma stands out by letting users manage Google, Microsoft, and Meta ad accounts in one place. It provides analysis, reporting, alerts, and budget tracking across these platforms. The vendor claims its recommendations go beyond what the ad platforms suggest, but that is their own statement, not an independent comparison."}},
                {"@type": "Question", "name": "Can Adzooma help prevent advertising overspend?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma offers budget tracking to help monitor ad spend and spot pacing issues. It can send alerts for spending changes and other metrics. These features help with oversight, but they do not guarantee that overspending will never happen."}},
                {"@type": "Question", "name": "What alerts can Adzooma send?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma can alert users to changes in cost per acquisition, cost per click, and overall spending. Notifications are available by email and Slack. Paid plans allow custom alerts, while the Free plan includes three preset alerts and does not support custom ones."}},
                {"@type": "Question", "name": "Does Adzooma work with Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma promotes a Performance Max toolkit that covers assets, exclusions, audiences, budgets, and product segmentation. Its homepage lists recommendations for negative keywords, targeting, and budget changes. It does not detail every campaign-level limit or workflow."}},
                {"@type": "Question", "name": "Does Adzooma help with ecommerce and Shopping ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma provides audits for product feeds and Shopping ads, points out stronger and weaker products, and offers suggestions to improve return on ad spend. These features aim to help, but they do not promise higher sales or profits."}},
                {"@type": "Question", "name": "Does Adzooma include SEO tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma includes SEO health audits and website-metrics reporting along with its PPC tools. The Free plan allows one SEO and one web-metrics profile, Silver allows five of each, and Gold offers unlimited profiles."}},
                {"@type": "Question", "name": "Can agencies manage multiple clients with Adzooma?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All plans let agencies connect unlimited advertising accounts. Silver and Gold plans also include unlimited user seats and branded performance reports, which are useful for teams working with clients."}},
                {"@type": "Question", "name": "Does Adzooma offer a partner program?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma currently advertises a certified partner program with support and perks. The website does not list commission rates, and past referral program details should not be relied on for current compensation terms."}},
                {"@type": "Question", "name": "Is Adzooma guaranteed to improve advertising results?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma does not guarantee specific results. It offers tools to find issues, cut waste, and help make campaigns more efficient, but it does not promise a set conversion rate, revenue increase, or return on ad spend."}},
                {"@type": "Question", "name": "Am I wasting advertising money without realizing it?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma helps you find pay-per-click problems that may be hidden in your advertising accounts."}},
                {"@type": "Question", "name": "How would this make campaign management easier?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma lets you review Google, Microsoft, and Meta ad performance in one place. You do not have to switch between different dashboards."}},
                {"@type": "Question", "name": "What would improve in my day-to-day work?", "acceptedAnswer": {"@type": "Answer", "text": "You will spend less time searching for problems and more time deciding what to fix next."}},
                {"@type": "Question", "name": "What should I do first?", "acceptedAnswer": {"@type": "Answer", "text": "Start with a free account. Connect your advertising account and review the first audit before you make any changes."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Adzooma", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "Adzooma helps Miami-Dade, Broward and Palm Beach small businesses centralize ad management, spot wasted spend, and quickly improve campaign performance.";
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
