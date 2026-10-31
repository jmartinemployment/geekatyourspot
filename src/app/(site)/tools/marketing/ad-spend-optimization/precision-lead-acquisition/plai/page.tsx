import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Plai";
const PAGE_TITLE = "Plai for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Plai gives small businesses in South Florida real-time clarity and better ROI by automating budget shifts. Get results now.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Plai, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.plai.io/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Do I need a separate ad account for each platform to use Plai.io?", "acceptedAnswer": {"@type": "Answer", "text": "No. You only need to link your existing brand accounts once. Plai acts as a unified bridge, so you can create and launch campaigns across Meta, Google Ads, TikTok, LinkedIn, Snapchat, Spotify, YouTube, Instagram, Gmail, Maps, Bing, and WhatsApp from one place."}},
                {"@type": "Question", "name": "How does Plai automate target audience creation for small budgets?", "acceptedAnswer": {"@type": "Answer", "text": "Plai uses Targeting Automation. Its machine learning reviews your industry and compares it to data from over 200,000 campaigns. This lets it build high-intent targeting profiles for you, without manual setup or scraping audience lists."}},
                {"@type": "Question", "name": "What are Plai’s specialized features for B2B consultancies and marketing agencies?", "acceptedAnswer": {"@type": "Answer", "text": "Plai offers multi-brand workspaces, white-label UI modes, and automated client billing with Stripe and GoHighLevel. This setup lets consultants manage client ad spend and retainers under their own brand, with no upfront software costs."}},
                {"@type": "Question", "name": "What is Plai.io?", "acceptedAnswer": {"@type": "Answer", "text": "Plai is an AI-powered marketing platform for content creation, ad launching, account management, and campaign optimization. It also supports agency workspaces, white-labeling, and client billing. You connect your website, products, and ad accounts so it can generate content based on your business."}},
                {"@type": "Question", "name": "What does Plai create?", "acceptedAnswer": {"@type": "Answer", "text": "Plai’s Creative Hub generates ad creatives, videos, AI avatars, social posts, memes, and templates. These are made for advertising and social publishing, not as a standalone image-generation service."}},
                {"@type": "Question", "name": "Which advertising platforms does Plai support?", "acceptedAnswer": {"@type": "Answer", "text": "Plai supports Facebook, Instagram, Google, YouTube, TikTok, and LinkedIn, plus more. Advertising and social publishing are separate features, so check that your specific campaign or publishing need is covered."}},
                {"@type": "Question", "name": "How does Plai use AI to optimize advertising?", "acceptedAnswer": {"@type": "Answer", "text": "Plai’s AI analyzes performance, adjusts bids, tests creatives, and applies optimization rules. The “Optimize for Me” feature is designed to automate improvements to creatives, budgets, and campaign results. These are vendor-described features, not a guarantee of profit."}},
                {"@type": "Question", "name": "Do I need my own advertising accounts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You must connect your advertising account before creating ads. Plai guides you to select the platform, authorize the connection, and pick your account. If you do not have one, Plai provides instructions for setting it up."}},
                {"@type": "Question", "name": "Can I import existing campaigns into Plai?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Plai lets you import your existing campaigns and save successful ads as templates. This helps small businesses in Miami-Dade, Broward, and Palm Beach counties avoid rebuilding campaigns from scratch when reusing proven workflows."}},
                {"@type": "Question", "name": "Can I manage multiple clients from one dashboard?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Plai supports managing multiple clients, campaigns, and platforms from a single dashboard. Each brand gets its own workspace, keeping users, campaigns, assets, permissions, and reporting separate and organized."}},
                {"@type": "Question", "name": "Can Plai automatically bill clients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Plai’s Stripe integration lets you set up fixed monthly or annual subscriptions and percentage-of-ad-spend billing. Both billing methods can run at the same time for one client."}},
                {"@type": "Question", "name": "Does Plai have a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Plai advertises a free start, but the exact trial length and features can vary. Their terms say trial subscriptions renew unless canceled. You should check the offer at checkout and cancel at least 24 hours before the trial ends if you do not want to be charged."}},
                {"@type": "Question", "name": "Does canceling Plai stop my advertising campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "No. Canceling your Plai subscription does not pause or stop ads you created through the platform. You need to pause those ads yourself in Plai or directly in the ad platforms to avoid ongoing ad spend."}},
                {"@type": "Question", "name": "Does Plai guarantee lower advertising costs or more leads?", "acceptedAnswer": {"@type": "Answer", "text": "No. Plai does not offer a general guarantee for lower ad costs or more leads. They share customer stories about strong results, but these are individual cases and not a promise that every business will see the same outcomes."}},
                {"@type": "Question", "name": "Advertising takes too many tools and too much time.", "acceptedAnswer": {"@type": "Answer", "text": "Plai brings together content creation, campaign launching, social publishing, and optimization in one place. Small businesses no longer need to juggle separate tools just to get a campaign live."}},
                {"@type": "Question", "name": "How would this simplify my work?", "acceptedAnswer": {"@type": "Answer", "text": "With Plai, you connect your brand and ad accounts, generate content, launch campaigns, and track performance all from one platform. You can create and manage campaigns across major ad platforms in a single workspace, making your workflow simpler and faster."}},
                {"@type": "Question", "name": "Too many dashboards. Too little time to keep your advertising moving.", "acceptedAnswer": {"@type": "Answer", "text": "Plai brings AI content creation, campaign launching, and optimization tools together in one place. Small businesses can build a more consistent marketing workflow without having to recreate every asset or check every account separately. Start by connecting one offer and one advertising account. Review the trial terms, set a controlled campaign budget, and test the workflow before expanding further."}},
                {"@type": "Question", "name": "Navigating today’s hyper-fragmented digital ad landscape is an absolute bottleneck for micro-budget local businesses. Trying to manually format, resize, and script ad copy for 12 completely different search, video, and social channels forces business owners to burn precious days before a single ad variation ever goes live.", "acceptedAnswer": {"@type": "Answer", "text": "Plai.io lets small businesses scale their digital presence without a large marketing team or a mix of separate design tools. Over 25,000 businesses use Plai.io to manage their cross-channel media buying from a single, automated dashboard. Its Creative Hub generates ad graphics, copy variations, and AI user-generated content avatars in seconds. Plai.io also automates budget reallocations and campaign adjustments in real time, so your budget stays focused on what works. Multi-brand agency workspaces and behind-the-scenes analytics help streamline your process. Connect Plai.io to your business pipeline to launch, test, and automate your marketing expansion quickly."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Plai", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "Plai helps South Florida small businesses streamline ad spend optimization by centralizing campaign performance data and automating budget shifts.";
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
