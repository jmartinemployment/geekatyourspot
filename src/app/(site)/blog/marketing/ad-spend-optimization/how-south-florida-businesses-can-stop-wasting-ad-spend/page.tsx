import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/lede-section";
import ChallengesSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/challenges-section";
import StatusQuoSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/status-quo-section";
import MechanicsSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/mechanics-section";
import FoundationSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/foundation-section";
import NumbersSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/numbers-section";
import RightFitSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/right-fit-section";
import FaqSection from "@/components/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "How South Florida Businesses Can Stop Wasting Ad Spend";
const DESCRIPTION =
    "Measured Lead Generation cuts wasted ad spend for Miami-Dade, Broward, and Palm Beach small businesses. Boost lead quality and lower costs fast. See how.";
const CANONICAL = "/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Person", "name": "Jeff Martin" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-25T11:32:40.1839700Z",
            "dateModified": "2026-10-25T11:32:40.1839700Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Measured Lead Generation, Ad Spend Optimization, Predictive Analytics for Advertising, South Florida small business marketing, AI lead generation tools, ROI-driven advertising, lead quality improvement, Miami-Dade marketing, Broward business growth, West Palm Beach lead generation",
            "wordCount": 4544,
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
                {"@type": "Question", "name": "What can AI and automation do for lead generation?", "acceptedAnswer": {"@type": "Answer", "text": "AI and automation can help with segmenting your audiences, personalizing your messaging, generating ad creative, monitoring your campaigns, flagging performance issues, and automating optimization rules. Each tool offers different capabilities, so no single platform does everything from start to finish."}},
                {"@type": "Question", "name": "Do I need several tools to get started?", "acceptedAnswer": {"@type": "Answer", "text": "Not always. Start with the problem you want to solve, such as visibility, lead attribution, audience targeting, campaign management, or creative production. Each vendor in this space focuses on different tasks, so there is no need to subscribe to every service at once."}},
                {"@type": "Question", "name": "Are these tools also suitable for online stores?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, several tools are designed for ecommerce. Catalog-ad tools can turn product feeds into branded ads with dynamic prices, promotions, and product videos. This approach suits product sales more than quote requests or service bookings."}},
                {"@type": "Question", "name": "How do I know which marketing channels produce leads?", "acceptedAnswer": {"@type": "Answer", "text": "Lead tracking tools can connect calls, forms, and chats to their marketing sources. This lets you see which channels drive real inquiries, not just traffic or clicks. Tools like WhatConverts support source attribution, campaign reporting, and lead qualification."}},
                {"@type": "Question", "name": "Can AI help identify the right audience?", "acceptedAnswer": {"@type": "Answer", "text": "Audience-intelligence tools use your customer and business data to build segments, enrich profiles, and support more personalized campaigns. Before choosing a tool, check what data it needs and how its insights will improve your targeting or messaging. Wrench.ai is one vendor that offers these features."}},
                {"@type": "Question", "name": "Can I automate ad creative production?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, within certain workflows. Some tools offer AI-generated ad creative or feed-based designs that use templates and dynamic product information. Make sure the tool supports your ad format. Catalog automation is not the same as advertising for service businesses."}},
                {"@type": "Question", "name": "What results should I measure?", "acceptedAnswer": {"@type": "Answer", "text": "Match your measurement to the goal. For lead tracking, look at valid inquiries, qualified leads, and their sources. In advertising management, track spend, conversions, and cost per acquisition. For audience personalization, focus on conversion rate and campaign return. In ecommerce catalog advertising, measure purchases and return on ad spend, not just leads."}},
                {"@type": "Question", "name": "How do I decide whether a tool is worth paying for?", "acceptedAnswer": {"@type": "Answer", "text": "Set a clear goal before you buy, like better attribution, less campaign management, higher-quality leads, or stronger catalog-ad performance. Then compare the result to the tool’s total cost. This keeps your evaluation focused on what the tool actually does, not just on lead volume."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Measured Lead Generation", "Ad Spend Optimization", "Predictive Analytics for Advertising", "South Florida small business marketing", "AI lead generation tools", "ROI-driven advertising", "lead quality improvement", "Miami-Dade marketing", "Broward business growth", "West Palm Beach lead generation"],
        authors: [{ name: 'Jeff Martin' }],
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
            type: 'article',
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
        "Struggling with wasted ad dollars and low-quality leads? Learn how measured lead generation uses real data to cut costs, boost conversions, and make every marketing dollar count for your local business.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <FoundationSection />
                <NumbersSection />
                <RightFitSection />
                <FaqSection />
                <SchedulerShell />
            </article>
        </>
    );
}
