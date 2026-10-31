import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/roles-section";
import RightFitSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/preparing-section";
import PaaSection from "@/components/use-cases/marketing/ad-spend-optimization/ad-spend-optimization-ai-driven-results-for-local-small-businesses/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization helps Miami-Dade, Broward and Palm Beach small businesses cut wasted ad spend and boost ROI with AI. Get your free AI assessment.";
const CANONICAL = "/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition";
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
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Precision Lead Acquisition, Ad Spend Optimization, AI advertising tools, predictive analytics for ads, local business marketing AI, Cometly, Triplewhale, Wask, Plai, Optmyzr, AI ad spend solutions",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/automated-ad-spend-optimization" },
            "mentions": [
                { "@type": "Thing", "name": "Adzooma", "url": "https://www.adzooma.com/" },
                { "@type": "Thing", "name": "Bir", "url": "https://bir.ch/" },
                { "@type": "Thing", "name": "Cometly", "url": "https://www.cometly.com/" },
                { "@type": "Thing", "name": "LocaliQ", "url": "https://localiq.com/" },
                { "@type": "Thing", "name": "Optmyzr", "url": "https://www.optmyzr.com/" },
                { "@type": "Thing", "name": "Plai", "url": "https://www.plai.io/" },
                { "@type": "Thing", "name": "Triplewhale", "url": "https://www.triplewhale.com/" },
                { "@type": "Thing", "name": "Wask", "url": "https://www.wask.co/" },
                { "@type": "Thing", "name": "Performance Max", "url": "https://ads.google.com/home/campaigns/performance-max/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is AI ad-spend optimization?", "acceptedAnswer": {"@type": "Answer", "text": "AI ad-spend optimization uses advertising performance data to help decide where your budget should go. Depending on the system, it can recommend or execute bid adjustments, budget changes, campaign pauses, and reallocations."}},
                {"@type": "Question", "name": "How is ad-spend optimization different from attribution?", "acceptedAnswer": {"@type": "Answer", "text": "Attribution helps identify which advertising interactions contributed to a lead or sale. Spend optimization uses performance evidence to decide what to fund next."}},
                {"@type": "Question", "name": "Will optimization reduce my advertising bill?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. Optimization may recommend reducing waste, maintaining the same budget, or spending more on campaigns meeting your targets. The relevant question is whether the spending produces worthwhile outcomes, not whether the monthly bill becomes smaller."}},
                {"@type": "Question", "name": "Is this worthwhile if I spend around $1,500 a month on ads?", "acceptedAnswer": {"@type": "Answer", "text": "Possibly, but that budget alone does not establish a need for additional software. Our proposed assessment would compare the cost of the software and management against the problem being solved. If your existing tools can address the issue, we should start there rather than add subscriptions."}},
                {"@type": "Question", "name": "Is ROAS the same as profit?", "acceptedAnswer": {"@type": "Answer", "text": "No. Return on ad spend, or ROAS, compares attributed revenue with advertising spend. For example, $4,000 in attributed revenue from $1,000 in advertising equals 4× ROAS. That does not deduct product costs, payroll, software, management, or other expenses. Your business still needs a profitability assessment."}},
                {"@type": "Question", "name": "Can this work if customers call instead of buying online?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, provided the measurement setup can connect the inquiry and later outcome appropriately. A phone inquiry, a qualified opportunity, and a completed sale should not automatically count as the same achievement. Offline-conversion workflows can help connect later sales outcomes back to advertising."}},
                {"@type": "Question", "name": "Can AI distinguish good leads from spam or unsuitable inquiries?", "acceptedAnswer": {"@type": "Answer", "text": "Not reliably unless the workflow provides meaningful information about lead quality. Our proposed setup would define qualified and unqualified outcomes, record them consistently, and verify whether those outcomes can be returned to the advertising platform. Better measurement data can support AI bidding optimization; it does not eliminate the need for accurate classification."}},
                {"@type": "Question", "name": "Can I approve changes before the software makes them?", "acceptedAnswer": {"@type": "Answer", "text": "That depends on the product and configuration. Before recommending a system, we should demonstrate whether it only recommends changes, executes after approval, or operates automatically. We should also establish spending limits, permitted actions, alerts, and a history of changes."}},
                {"@type": "Question", "name": "How long does it take to know whether optimization is working?", "acceptedAnswer": {"@type": "Answer", "text": "There is no set timeline for results. The right evaluation period depends on how often your business gets conversions and how long your customers take to decide. For example, Google suggests using conversion cycles and mentions four weeks for some Smart Bidding changes, but that is just a guideline. Each campaign will show results at its own pace."}},
                {"@type": "Question", "name": "Can we limit advertising to the areas we actually serve?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, ad platforms let you target by geography, including picking specific locations or a set radius. For South Florida businesses, Geek @ Your Spot recommends defining the service areas that bring in profit and excluding areas that do not. We also check if your ads should reach only people physically in your area or those interested in it."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Precision Lead Acquisition", "Ad Spend Optimization", "AI advertising tools", "predictive analytics for ads", "local business marketing AI", "Cometly", "Triplewhale", "Wask", "Plai", "Optmyzr", "AI ad spend solutions"],
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
        "Stop wasting ad dollars. See how AI-powered systems can help you track, predict, and improve your ad spend for real savings and better results.";
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
