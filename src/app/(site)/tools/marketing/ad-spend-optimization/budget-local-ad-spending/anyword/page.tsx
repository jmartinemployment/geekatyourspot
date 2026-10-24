import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Anyword";
const PAGE_TITLE = "Anyword for Budget Ad Copy & Message Validation";
const DESCRIPTION =
    "Budget Ad Copy & Message Validation with Anyword predicts ad performance for South Florida small businesses, reducing wasted spend. Try it now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Anyword, budget ad copy and message validation, AI ad copy testing, ad spend optimization, local advertising, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-24T16:08:13.8759570Z",
            "dateModified": "2026-10-24T16:08:13.8759570Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.anyword.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is the difference between A/B testing and Anyword’s performance prediction?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional A/B testing measures how your copy performs only after it is published, which means you end up spending budget on ads that may not work. Anyword’s Performance Prediction Engine uses algorithms trained on billions of marketing data points to score and estimate conversion potential before you spend any money on live ads."}},
                {"@type": "Question", "name": "How does Anyword's prediction accuracy compare to generic models like ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "Generic models like ChatGPT and DeepSeek score about 56% to 62% in predicting which Facebook ad copy will get better click-through rates. Anyword’s API and Core Platform reach 82% accuracy because they use specialized reinforcement learning trained on structured marketing data, not just general web text."}},
                {"@type": "Question", "name": "What elements should a small business prioritize testing first with Anyword?", "acceptedAnswer": {"@type": "Answer", "text": "Small businesses should start by testing ad headlines and email subject lines. These are the elements with the highest impact on conversions and the widest range of possible results, so getting AI scores for them first helps avoid wasting budget."}},
                {"@type": "Question", "name": "What is Anyword?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword is an AI writing platform focused on marketing content and predicting how well that content will perform. It offers copy generation, brand voice controls, audience targeting, and predictive scoring to help marketers create and evaluate messaging."}},
                {"@type": "Question", "name": "How does Anyword work?", "acceptedAnswer": {"@type": "Answer", "text": "You enter your content brief, brand voice, target audience, and marketing goals. Anyword then generates content variations and predicts how well each will perform. It can also use your past marketing results to improve future content."}},
                {"@type": "Question", "name": "How much does Anyword cost?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword’s pricing page lists these entry-level plans: Starter at $49 per month or $39 per month with annual billing for one seat, and Data-Driven at $99 per month or $79 per month with annual billing for three seats. Starter includes 50 performance predictions and Data-Driven includes 100. Pricing and allowances can change; these are the figures listed on the official page reviewed."}},
                {"@type": "Question", "name": "Does Anyword have a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Anyword offers a seven-day free trial with a 2,500-word limit. This trial limit is separate from the unlimited copy generation available on paid plans."}},
                {"@type": "Question", "name": "What is Anyword’s Predictive Performance Score?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword’s Predictive Performance Score is an AI-generated estimate of how likely a piece of copy is to engage or convert its intended audience. Geek @ Your Spot notes that Anyword compares your copy with similar marketing content to help you pick promising variations before you publish. This score is a prediction, not an actual campaign result or a guarantee of conversions."}},
                {"@type": "Question", "name": "Can Anyword learn from my existing marketing campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Anyword can use your past advertising, social, email, and website results to improve the content it generates and help you find what messaging works. Geek @ Your Spot confirms that Anyword’s Google Performance Max documentation describes dashboards for connected channels and training on your company’s own performance data."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Anyword", "budget ad copy and message validation", "AI ad copy testing", "ad spend optimization", "local advertising", "South Florida small business"],
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
        "Anyword enables Miami-Dade, Broward, and West Palm Beach small businesses to test and optimize ad messaging before launch, cutting down on wasted ad spend.";
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
