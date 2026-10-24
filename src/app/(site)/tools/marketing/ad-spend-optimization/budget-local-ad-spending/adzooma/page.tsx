import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Adzooma";
const PAGE_TITLE = "Adzooma for Budget Ad Copy & Message Validation";
const DESCRIPTION =
    "Budget Ad Copy & Message Validation with Adzooma helps small South Florida businesses cut wasted spend and protect micro-budgets. Try smarter validation now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Adzooma, budget ad copy and message validation, AI ad copy testing, ad spend optimization, local advertising, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-24T16:08:13.8759570Z",
            "dateModified": "2026-10-24T16:08:13.8759570Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.adzooma.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Adzooma?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma is a PPC management platform that helps small businesses audit, monitor, and optimize their Google, Microsoft, and Meta advertising accounts. It brings together audits, optimization tips, budget tracking, alerts, and reporting in one place, making it easier to spot problems and find ways to improve your ad performance."}},
                {"@type": "Question", "name": "Can I run and evaluate Google Performance Max (PMax) strategies in the dashboard?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma’s platform runs a full diagnostic check in minutes on your linked Google, Meta, and Microsoft ad accounts. It gives you a quick, prioritized health score and points out high-impact issues, like broken tracking or budget leaks, so you can see where your Performance Max strategies need attention."}},
                {"@type": "Question", "name": "What advertising platforms does Adzooma support?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma supports Google Ads, Microsoft Advertising, and Meta/Facebook Ads. You can compare results and manage optimization tasks for all three in one dashboard, though some features may work differently depending on the platform."}},
                {"@type": "Question", "name": "Is Adzooma free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma has a free-forever plan. You do not need a credit card to sign up. Paid plans give you more frequent analysis and extra features."}},
                {"@type": "Question", "name": "How much does Adzooma cost?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma’s pricing page lists three plans: Free at $0 per month, Silver at $69 per month or $700 per year, and Gold at $179 per month or $1,800 per year. Each plan offers different levels of reporting and analysis frequency."}},
                {"@type": "Question", "name": "What is included in Adzooma’s free plan?", "acceptedAnswer": {"@type": "Answer", "text": "The Free plan includes monthly PPC performance reports and opportunity analysis, limited optimization suggestions, one SEO profile, one web-metrics profile, three PPC alerts, budget tracking, and one user seat. You can connect unlimited advertising accounts."}},
                {"@type": "Question", "name": "How does Adzooma work?", "acceptedAnswer": {"@type": "Answer", "text": "You connect your advertising accounts, and Adzooma reviews their data to highlight issues and suggest improvements. It helps you spot wasted ad spend, disapproved ads, tracking errors, weak campaigns, and ways to improve budgets, bids, and targeting."}},
                {"@type": "Question", "name": "Does Adzooma automatically optimize campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma gives you fresh analysis, alerts, and actionable recommendations automatically. It also offers tools to help you apply improvements. Not every suggestion is applied automatically, and campaigns still need oversight. Recommendations update monthly on Free, weekly on Silver, and daily on Gold."}},
                {"@type": "Question", "name": "How is Adzooma different from using Google Ads directly?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma stands out by letting users manage Google, Microsoft, and Meta ad accounts in one place. It offers analysis, reporting, alerts, and budget tracking across platforms. The vendor claims its recommendations go beyond what the ad platforms suggest, but this is their own statement, not an independent comparison."}},
                {"@type": "Question", "name": "Can Adzooma help prevent advertising overspend?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma includes budget tracking to help monitor spending and spot pacing issues. Its alerts can notify users about changes in spend and other key metrics. These tools support monitoring and control, but they do not guarantee that overspending will never happen."}},
                {"@type": "Question", "name": "What alerts can Adzooma send?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma can send alerts for changes in cost per acquisition, cost per click, and overall spending. Notifications are available by email and Slack. Paid plans allow custom alerts, while the Free plan is limited to three preset alerts and does not offer custom options."}},
                {"@type": "Question", "name": "Does Adzooma work with Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma promotes a Performance Max toolkit that covers assets, exclusions, audiences, budgets, and product segmentation. Its homepage mentions recommendations for negative keywords, targeting, and budget adjustments. It does not detail every campaign-level feature or workflow."}},
                {"@type": "Question", "name": "Does Adzooma help with ecommerce and Shopping ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma offers product-feed and Shopping-ad audits, highlights strong and weak products, and gives recommendations aimed at improving return on ad spend. These features are designed to help, but they do not guarantee higher sales or profits."}},
                {"@type": "Question", "name": "Does Adzooma include SEO tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma provides SEO health audits and website-metrics reporting. Free plans allow one SEO and one web-metrics profile, Silver allows five of each, and Gold offers unlimited profiles."}},
                {"@type": "Question", "name": "Can agencies manage multiple clients with Adzooma?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All plans support unlimited connected ad accounts. Silver and Gold plans also offer unlimited user seats and branded performance reports, which are useful for agencies working with multiple clients."}},
                {"@type": "Question", "name": "Does Adzooma offer a partner program?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Adzooma currently advertises a certified partner program with support and perks. The website does not state commission rates, and older referral program details do not reflect current compensation terms."}},
                {"@type": "Question", "name": "Is Adzooma guaranteed to improve advertising results?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma does not guarantee specific results. It offers tools to help spot issues, cut waste, and make campaigns more efficient, but it does not promise a certain conversion rate, revenue increase, or return on ad spend."}},
                {"@type": "Question", "name": "Am I wasting advertising money without realizing it?", "acceptedAnswer": {"@type": "Answer", "text": "Adzooma helps you find PPC problems that may be costing you money in your advertising accounts."}},
                {"@type": "Question", "name": "How would this make campaign management easier?", "acceptedAnswer": {"@type": "Answer", "text": "You can review Google, Microsoft, and Meta advertising performance in one place, so you do not have to switch between different dashboards."}},
                {"@type": "Question", "name": "What would improve in my day-to-day work?", "acceptedAnswer": {"@type": "Answer", "text": "You will spend less time searching for problems and more time deciding what to improve next."}},
                {"@type": "Question", "name": "What should I do first?", "acceptedAnswer": {"@type": "Answer", "text": "Start with the free option, connect your advertising account, and review your first audit before making any changes."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Adzooma", "budget ad copy and message validation", "AI ad copy testing", "ad spend optimization", "local advertising", "South Florida small business"],
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
        "Adzooma offers AI-powered budget ad copy and message validation, helping Miami-Dade, Broward, and West Palm Beach small businesses maximize every ad dollar.";
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
