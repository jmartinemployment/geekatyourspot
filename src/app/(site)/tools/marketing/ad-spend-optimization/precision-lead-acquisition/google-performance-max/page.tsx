import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Performance Max";
const PAGE_TITLE = "Performance Max for Precision Lead Acquisition";
const DESCRIPTION =
    "Precision Lead Acquisition helps South Florida small businesses cut wasted ad spend by up to $16 daily. Protect your budget, test smarter now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Performance Max, precision lead acquisition, AI ad copy testing, ad spend optimization, local advertising, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-24T16:08:13.8759570Z",
            "dateModified": "2026-10-24T16:08:13.8759570Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://ads.google.com/home/campaigns/performance-max/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What channels and inventory does Performance Max serve on?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot confirms that Performance Max gives small businesses access to all Google Ads inventory from a single campaign. This includes YouTube, Display, Search, Discover, Gmail, and Google Maps."}},
                {"@type": "Question", "name": "Does Google Ads Performance Max use AI?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot notes that Performance Max is fully powered by Google AI. The system manages bidding, budget, audience expansion, creative pairing, and attribution automatically based on your goals."}},
                {"@type": "Question", "name": "What is the core difference between Performance Max and Demand Gen?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot explains that Performance Max is designed to optimize for conversions and ROI across all Google channels. Demand Gen, in contrast, focuses on generating demand on visual-first channels like YouTube, Discover, and Gmail, and offers specialized lookalike segments and ad placement settings."}},
                {"@type": "Question", "name": "How do I get visibility into my channel performance?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot advises that you can see channel performance by going to your campaign, selecting the Insights and reports tab, and clicking Channel performance. This shows a visual summary and data table with clicks, conversions, and costs by channel."}},
                {"@type": "Question", "name": "Why doesn't Performance Max offer precise, standalone channel-level keyword bidding?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot clarifies that Performance Max is built to optimize ROI across all channels together, not by each channel separately. The system moves your budget in real time to wherever conversions are most cost-effective."}},
                {"@type": "Question", "name": "How can I stop my campaign from showing on specific branded keywords?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot confirms you can use campaign-level brand exclusions or account-level negative keywords. Brand exclusions let you block traffic from variations, misspellings, or foreign script versions of your chosen brand terms."}},
                {"@type": "Question", "name": "Are Audience Signals used as strict targeting boundaries?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot points out that Audience Signals are suggestions for the AI, not hard limits. The system uses them to start finding conversions, but will expand beyond them if it finds more relevant traffic elsewhere."}},
                {"@type": "Question", "name": "How do I protect against low-quality spam leads via PMax?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot recommends using Enhanced Conversions, Value-Based Bidding (Target ROAS), Customer Match lists to focus on high-value customers, and reCAPTCHA on your lead forms to help keep leads valid."}},
                {"@type": "Question", "name": "What is Google Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "Performance Max, or PMax, is a goal-based Google Ads campaign type. It lets advertisers reach people across Search, YouTube, Display, Discover, Gmail, and Maps from one campaign. Google AI uses your conversion goals, budget, assets, and other inputs to optimize ad delivery."}},
                {"@type": "Question", "name": "How does Performance Max work?", "acceptedAnswer": {"@type": "Answer", "text": "You give Google your advertising goals, creative assets, and other inputs like audience signals or product feeds. Google AI then combines these to optimize bidding, choose audiences, mix creative elements, and deliver ads across channels to get conversions or conversion value."}},
                {"@type": "Question", "name": "What is the difference between Performance Max and Search campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Search campaigns show ads only on Google Search. Performance Max can show ads across Search plus YouTube, Display, Discover, Gmail, and Maps. Google positions Performance Max as a complement to keyword-based Search campaigns, not a replacement."}},
                {"@type": "Question", "name": "What is the difference between AI Max and Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "AI Max is designed to enhance Search campaigns for advertisers focused on Search. Performance Max runs across multiple Google channels, including Search, YouTube, Display, Discover, Gmail, and Maps. They serve different campaign scopes and are not two names for the same product."}},
                {"@type": "Question", "name": "Is Performance Max only for ecommerce?", "acceptedAnswer": {"@type": "Answer", "text": "No. Google provides Performance Max guidance for both lead generation and retail. Lead-generation goals can include contacts, form submissions, appointments, quote requests, qualified leads, and converted leads."}},
                {"@type": "Question", "name": "Does Performance Max help acquire new customers, or is it just remarketing?", "acceptedAnswer": {"@type": "Answer", "text": "Performance Max can help acquire new customers. Google offers a new customer acquisition goal, letting advertisers provide customer lists and assign extra value to new customers so campaigns can optimize for acquiring them."}},
                {"@type": "Question", "name": "How much budget does Performance Max need?", "acceptedAnswer": {"@type": "Answer", "text": "Google’s campaign-creation guidance says to set an adequate daily budget and avoid overly strict target cost-per-acquisition or target return-on-ad-spend settings, as these can limit reach. There is no universal dollar amount that fits every advertiser."}},
                {"@type": "Question", "name": "How long does Performance Max take to learn?", "acceptedAnswer": {"@type": "Answer", "text": "Google says automated bidding usually needs one to two weeks to optimize, but it can take up to six weeks. Google recommends running new campaigns for at least six weeks to gather enough data for evaluation. The learning period and evaluation window are related but not the same."}},
                {"@type": "Question", "name": "Should I make changes during the Performance Max learning period?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot advises following Google’s recommendation to avoid frequent changes to budgets, bidding strategies, or campaign status during the initial learning period. Major changes can cause performance swings and slow down campaign stabilization."}},
                {"@type": "Question", "name": "How can I test whether Performance Max improves results?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot notes that Google supports structured experiments for Performance Max. Their guidance is to run tests for at least four to six weeks, or longer if conversions take more time. This approach gives a clearer picture than judging results right after launch."}},
                {"@type": "Question", "name": "Does Performance Max use keywords?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot confirms that Performance Max does not use a traditional positive-keyword list. Instead, it uses keywordless targeting. You can provide search themes to guide relevant searches and use negative keywords to block unwanted queries."}},
                {"@type": "Question", "name": "What are audience signals in Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot explains that audience signals help Google AI find the right customers and speed up learning. Google suggests using first-party lists like Customer Match and remarketing lists, along with other audience inputs. These signals guide, but do not replace, automated targeting."}},
                {"@type": "Question", "name": "What creative assets should I provide?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot recommends following Google’s advice to supply a diverse set of high-quality assets: at least 15 headlines, five descriptions, seven images in different formats, and one video. These are optimization tips, not strict minimums for every campaign."}},
                {"@type": "Question", "name": "Do I need to create a video for Performance Max?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot notes that while Google recommends including a video, you are not required to make one yourself. If you do not provide a video, Performance Max may automatically create one from your other assets. Google also has a video creation tool you can use."}},
                {"@type": "Question", "name": "How can I control where Performance Max ads appear?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot points out that Google offers content suitability settings and account-level placement exclusions to help limit where your ads show on Display and YouTube. Negative keywords are a separate tool for controlling Search and Shopping ad placements. Each control addresses a different type of unwanted exposure."}},
                {"@type": "Question", "name": "Can I see Performance Max search terms?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot confirms that Google provides search terms reporting for all Performance Max campaigns and through the API. This lets you see which search queries triggered your ads and helps you make informed adjustments."}},
                {"@type": "Question", "name": "Can I see which channels Performance Max uses?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Google now provides a channel performance report for Performance Max. You can find it by going to Campaigns, then Insights and reports, and then Channel performance. Older FAQs that say Performance Max has no channel-level reporting are outdated."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Performance Max", "precision lead acquisition", "AI ad copy testing", "ad spend optimization", "local advertising", "South Florida small business"],
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
        "Streamline your ad campaigns with intelligent Precision Lead Acquisition designed for local small businesses operating on tight budgets.";
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
