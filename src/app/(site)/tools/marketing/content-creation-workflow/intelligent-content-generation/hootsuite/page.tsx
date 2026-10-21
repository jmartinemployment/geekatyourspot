import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Hootsuite";
const PAGE_TITLE = "Hootsuite for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Hootsuite helps small businesses in South Florida automate and optimize their digital marketing for better results.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Hootsuite, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.hootsuite.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-content-generation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Will Hootsuite help me come up with content ideas?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite includes tools that help you generate content ideas and fill your social media calendar, saving you time and effort. This is especially useful if you need to keep your posts fresh but find it hard to come up with new ideas every week."}},
                {"@type": "Question", "name": "Can Hootsuite help me with my real estate social media strategy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite gives you all the tools you need to plan and run your real estate social media strategy quickly. You can schedule posts, track engagement, and stay organized, so you spend less time managing your channels and more time connecting with clients."}},
                {"@type": "Question", "name": "Which networks do these hashtags come from?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite surfaces trending hashtags using data from leading social platforms, including Instagram and X. This means you get a real-time view of what’s popular on the networks where conversations move fastest."}},
                {"@type": "Question", "name": "What are trending hashtags today?", "acceptedAnswer": {"@type": "Answer", "text": "Trending hashtags today are the ones getting the most attention on social media right now. They often relate to current events, viral stories, or seasonal topics. Hootsuite lets you track these trends in real time across social media, news, and blogs, so you can join the conversation while it’s hot."}},
                {"@type": "Question", "name": "What are trending hashtags on Instagram right now?", "acceptedAnswer": {"@type": "Answer", "text": "Trending hashtags on Instagram are shaped by Reels, creator content, and what people are talking about. These change quickly and can be hard to spot by hand. Hootsuite helps you find trending Instagram hashtags instantly and shows which ones actually drive engagement for your audience."}},
                {"@type": "Question", "name": "How do I find trending hashtags on Instagram?", "acceptedAnswer": {"@type": "Answer", "text": "You can look for hashtags manually or use Instagram’s Explore page, but this only gives you part of the picture. Hootsuite uses real-time social listening and analytics to uncover trending and relevant hashtags, making it faster and easier to find the best ones for your posts."}},
                {"@type": "Question", "name": "What are the current trending hashtags on X (Twitter)?", "acceptedAnswer": {"@type": "Answer", "text": "Trending hashtags on X are usually tied to live events, news, or viral topics. Hootsuite tracks these conversations in real time and alerts you to new trends, so you can join in at the right moment and reach more people."}},
                {"@type": "Question", "name": "How can I tell if a hashtag will perform well?", "acceptedAnswer": {"@type": "Answer", "text": "Not every trending hashtag will help your business. Performance depends on how relevant it is, who you want to reach, and when you use it. Hootsuite gives you analytics on engagement, reach, and sentiment, so you can pick hashtags based on real data instead of guessing."}},
                {"@type": "Question", "name": "What is the best social media management platform for agencies?", "acceptedAnswer": {"@type": "Answer", "text": "The best platform for agencies brings publishing, analytics, social listening, and reporting together in one place. Hootsuite is built for agencies, letting you manage multiple clients, track results, monitor brand sentiment, and automate reports from a single dashboard."}},
                {"@type": "Question", "name": "How can agencies manage multiple clients’ social media accounts efficiently?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies can work more efficiently by using a centralized platform with support for many accounts, custom dashboards, and permission controls. Hootsuite lets you organize accounts by client, schedule and publish content across networks, and track performance without switching tools or risking data leaks."}},
                {"@type": "Question", "name": "How do agencies prove social media ROI to clients?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies show ROI by linking campaign activity to clear results like engagement, reach, sentiment, and share of voice. Hootsuite makes it easy to create automated, white-labeled reports that highlight performance, campaign impact, and how you stack up to competitors."}},
                {"@type": "Question", "name": "What is social listening and why is it important for agencies?", "acceptedAnswer": {"@type": "Answer", "text": "Social listening means monitoring online conversations across social media, news, blogs, and forums to see what people are saying about your brand, industry, or competitors. For agencies, it gives real-time insights into sentiment, trends, and issues, helping you make smarter decisions and improve your clients’ strategies."}},
                {"@type": "Question", "name": "How can agencies use AI to improve social media performance?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies can use AI to analyze sentiment, spot trends, create content, and find performance insights at scale. Hootsuite uses advanced AI to surface actionable insights, automate reporting, and help with content creation, so agencies can move faster and deliver better results."}},
                {"@type": "Question", "name": "Can agencies automate social media reporting?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite offers automated reporting tools that let agencies create custom, white-labeled reports for each client. You can schedule reports, tailor them to specific KPIs, and brand them for a professional look, saving time and keeping things consistent."}},
                {"@type": "Question", "name": "How does Hootsuite help agencies with client collaboration and approvals?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite makes client collaboration easy with built-in approval workflows, task assignments, and shared dashboards. Agencies can assign roles for creating, editing, and approving content, so every post is reviewed before it goes live. You can also set up multi-step approval flows with specific approvers."}},
                {"@type": "Question", "name": "What are Hootsuite Perch and Hootsuite Nest?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite Perch is the workspace for creating content, planning posts, and scheduling across channels. Hootsuite Nest is the unified inbox for handling direct messages, public comments, and automated message routing."}},
                {"@type": "Question", "name": "How does Hootsuite incorporate AI into social media management?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite uses Hootsuite Wisdom, an AI teammate that automates draft writing, finds industry trends, and turns performance data into clear, practical advice."}},
                {"@type": "Question", "name": "What options exist for tracking brand health and market competition?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite Lumen gives teams advanced listening and insights. It helps monitor industry topics, benchmark competitors, and analyze sentiment to see how audiences view a brand compared to others."}},
                {"@type": "Question", "name": "Does Hootsuite support employee advocacy programs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite Parliament lets organizations share approved content with employee ambassadors, helping boost organic reach and ad-value across networks."}},
                {"@type": "Question", "name": "Does Hootsuite offer any free marketing tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite provides several free web tools outside its paid plans. These include an AI caption generator, Instagram engagement rate calculator, sentiment analysis tool, LinkedIn post generator, and YouTube name or channel description generators."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Hootsuite", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Hootsuite empowers local small businesses to efficiently generate, schedule, and manage content across multiple platforms with AI-driven automation.";
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
