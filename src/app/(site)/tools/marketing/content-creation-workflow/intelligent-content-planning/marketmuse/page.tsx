import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "MarketMuse";
const PAGE_TITLE = "MarketMuse for Intelligent Content Planning";
const DESCRIPTION =
    "Intelligent Content Planning with MarketMuse gives small South Florida businesses a data-driven edge for building effective, results-focused content strategies.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "MarketMuse, intelligent content planning, AI content planning, content calendar, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.marketmuse.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-content-planning" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Why should I choose MarketMuse over another platform?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse was created by people who have worked in SEO and content strategy. They designed it to make content evaluation and planning much simpler, so you do not have to rely on generic data or spend days pulling together reports. This means you get insights that fit your business, not just broad averages."}},
                {"@type": "Question", "name": "Is this actually an AI solution?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, MarketMuse uses AI for every page and topic it reviews. The system scans hundreds or thousands of pieces of content, filters out low quality results, and uses a mix of its own and open-source algorithms to analyze and rank what matters most for your site."}},
                {"@type": "Question", "name": "What personalized metrics do you provide?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse offers a Personalized Difficulty score that is unique to your website and its content. This score ranges from 1 to 100. A higher number means it will be harder for your site to rank for that topic. The score looks at your topic coverage, your current and past performance, and other factors specific to your site."}},
                {"@type": "Question", "name": "Do you manage my content like a CMS?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse does not replace your content management system. Instead, it builds a detailed inventory of your content and gives you data to help you make better decisions. You will still need your CMS to manage and update your content."}},
                {"@type": "Question", "name": "Will you write content for me?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse has a tool that uses AI to help you create content faster, but it does not write content for you. Its main value is in showing you what topics to cover, how much to write, and where your content may be weak or strong."}},
                {"@type": "Question", "name": "How does MarketMuse determine which topics a business should plan to write about?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse uses a patented AI to review your entire content library. It does not rely on generic third-party data. Instead, it finds high-value Content Clusters and quick wins based on the authority your site already has."}},
                {"@type": "Question", "name": "What does a MarketMuse AI content plan actually provide to a strategist?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse gives you a personalized roadmap in minutes. It shows what new content to create and which pages to update. This removes the need to spend hours tracking keywords and building topic maps in spreadsheets."}},
                {"@type": "Question", "name": "How does the software help a business find topic ideas that competitors missed?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse includes a Competitive Content Analysis tool. The AI reviews your competitors and highlights topics and sub-themes they have missed. This helps your business stand out with unique content."}},
                {"@type": "Question", "name": "What is \"Personalized Difficulty\" in MarketMuse topic planning?", "acceptedAnswer": {"@type": "Answer", "text": "Most SEO tools give a generic difficulty score for keywords. MarketMuse uses a Personalized Difficulty metric that looks at your site's current content depth and authority. This shows how easy or hard it will be for your business to rank for a topic."}},
                {"@type": "Question", "name": "Does MarketMuse automatically write the planned content for you?", "acceptedAnswer": {"@type": "Answer", "text": "No, MarketMuse does not write full articles for you. Its Optimize tool can help speed up drafting with AI, but its main value is in content planning. It guides teams on what to write, how deep to go, and how to structure a Content Brief."}},
                {"@type": "Question", "name": "How does MarketMuse's AI build its topic models compared to other SEO platforms?", "acceptedAnswer": {"@type": "Answer", "text": "MarketMuse does not use basic public data or simple keyword density. Its patented technology reviews thousands of web pages for each topic, finds high-quality patterns, and calculates what concepts need to be covered for expert-level depth."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["MarketMuse", "intelligent content planning", "AI content planning", "content calendar", "content creation workflow", "South Florida small business"],
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
        "MarketMuse provides small businesses in South Florida with AI-powered content planning, helping teams identify real opportunities and eliminate wasted effort.";
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
