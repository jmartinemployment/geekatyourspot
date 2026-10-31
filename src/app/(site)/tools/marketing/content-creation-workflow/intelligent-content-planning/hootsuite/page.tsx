import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Hootsuite";
const PAGE_TITLE = "Hootsuite for Intelligent Content Planning";
const DESCRIPTION =
    "Intelligent Content Planning with Hootsuite gives Miami-Dade, Broward, and West Palm Beach small businesses a streamlined, automated content strategy.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Hootsuite, intelligent content planning, AI content planning, content calendar, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.hootsuite.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-content-planning" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Can Hootsuite help me generate leads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Hootsuite can help you generate leads. It lets you schedule content, manage conversations, run social ads, and track results across all your social channels. With features like social listening, keyword monitoring, and customizable streams, you can spot potential leads early. Built-in analytics show which posts and campaigns drive the most conversions, so you know what works."}},
                {"@type": "Question", "name": "Can Hootsuite help me with content ideas for my professional services brand?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite offers tools to help you brainstorm and create content, even when you are stuck for ideas. The Wisdom feature can suggest industry-specific posts, draft content, generate images, and refine your messaging to match your brand. It also tracks trends and conversations, so your posts stay relevant. Social listening tools help you find trending topics and understand what your audience cares about, making it easier to create content that connects."}},
                {"@type": "Question", "name": "Can Hootsuite help me with professional services advertising?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite lets you manage both paid ads and organic posts for your business. You can run and monitor ads on Facebook, LinkedIn, and Instagram from one place, making it easier to keep your campaigns organized and effective."}},
                {"@type": "Question", "name": "Can Hootsuite help my professional services firm stay compliant on social media?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite has approval workflows, customizable permissions, and a secure content library to help your firm meet compliance standards. You can manage reviews, keep audit trails, and prevent unauthorized posts. Role-based permissions and team assignments make it easy to control who can publish, so your brand stays consistent and secure."}},
                {"@type": "Question", "name": "Is Hootsuite’s data as accurate as Sprinklr’s?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite gives you a deeper and more accurate view of human behavior than many enterprise competitors. It uses real-time, unsampled data from over 150 million sources in 187 languages, instead of relying on sampled data or third-party feeds."}},
                {"@type": "Question", "name": "Who is the Hootsuite Professional plan good for?", "acceptedAnswer": {"@type": "Answer", "text": "The Hootsuite Professional plan is a good fit for growing brands and marketing teams that want more automation, deeper insights, and better control over their social media work."}},
                {"@type": "Question", "name": "Who is the Hootsuite Professional plan not good for?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite Professional is not the best choice if your organization needs advanced collaboration, approval workflows, detailed team productivity reporting, or customer care routing. For those needs, you may want to look at other plans or solutions."}},
                {"@type": "Question", "name": "Do I need coding experience to use Hootsuite MCP servers?", "acceptedAnswer": {"@type": "Answer", "text": "No coding experience is needed for Claude and ChatGPT. You can connect these tools by following the steps in your AI tool’s connector settings. For Gemini and Microsoft Copilot, you will need IT admin access for setup. Once connected, you can use Hootsuite with plain language, no code or complex queries required."}},
                {"@type": "Question", "name": "Is the Hootsuite MCP secure?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. MCP servers use authentication and permission controls to make sure AI tools only access the data and actions you approve. You can connect or disconnect MCP servers at any time, and permissions stay tied to your Hootsuite account. Hootsuite’s MCP setup supports secure, user-controlled access."}},
                {"@type": "Question", "name": "Can AI publish directly to social media through Hootsuite?", "acceptedAnswer": {"@type": "Answer", "text": "AI can help draft, prepare, and schedule content in Hootsuite, but your team keeps control over what gets published. Human review is always part of the approval process, so you can check for accuracy, compliance, and brand consistency. Hootsuite’s workflows are built around this human-in-the-loop model."}},
                {"@type": "Question", "name": "What is the difference between Wisdom and Hootsuite MCP servers?", "acceptedAnswer": {"@type": "Answer", "text": "Wisdom is Hootsuite’s social-first AI workspace that helps teams understand what matters and take action across the Hootsuite suite. MCP servers make Hootsuite’s AI tools available for integration with other platforms and workflows."}},
                {"@type": "Question", "name": "What is the best social media management platform for agencies?", "acceptedAnswer": {"@type": "Answer", "text": "The best platform for agencies brings publishing, analytics, social listening, and reporting together in one place. Hootsuite is built for agencies, letting teams manage multiple clients, track performance, monitor brand sentiment, and automate reporting from a single dashboard."}},
                {"@type": "Question", "name": "How can agencies manage multiple clients’ social media accounts efficiently?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies can manage multiple clients more efficiently with a centralized platform that supports multiple accounts, customizable dashboards, and permission controls. Hootsuite lets you organize accounts by client, schedule and publish content across networks, and track performance, all without switching tools or risking data security."}},
                {"@type": "Question", "name": "How do agencies prove social media ROI to clients?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies show ROI by linking campaign activity to real outcomes like engagement, reach, sentiment, and share of voice. With Hootsuite, you can create automated, white-labeled reports that clearly show performance, campaign impact, and competitive benchmarks, making it easy to prove value to your clients."}},
                {"@type": "Question", "name": "What is social listening and why is it important for agencies?", "acceptedAnswer": {"@type": "Answer", "text": "Social listening means monitoring online conversations on social media, news, blogs, and forums to understand what people are saying about a brand, industry, or competitors. For agencies, it gives real-time insights into sentiment, trends, and emerging issues, so you can make smarter decisions and improve client strategies."}},
                {"@type": "Question", "name": "How can agencies use AI to improve social media performance?", "acceptedAnswer": {"@type": "Answer", "text": "Agencies can use AI to analyze sentiment, spot trends, generate content, and find performance insights at scale. Hootsuite’s advanced AI surfaces actionable insights, automates reporting, and helps with content creation, so agencies can move faster and get better results."}},
                {"@type": "Question", "name": "Can agencies automate social media reporting?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite has automated reporting tools that let agencies create customizable, white-labeled reports for each client. You can schedule reports, tailor them to specific KPIs, and add your branding, saving time and keeping your reporting consistent and clear."}},
                {"@type": "Question", "name": "How does Hootsuite help agencies with client collaboration and approvals?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite makes client collaboration easier with built-in approval workflows, task assignments, and shared dashboards. Agencies can assign roles for creating, editing, and approving content, so every post is reviewed before it goes live. You can also set up multi-step approval flows with designated approvers to keep things organized."}},
                {"@type": "Question", "name": "How does Hootsuite help a business discover what topics are currently trending in their industry?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite uses its Lumen framework for insights and listening. This lets users search by topic, company, or hashtag to quickly find trending concepts, viral themes, and active discussions in their specific market."}},
                {"@type": "Question", "name": "Can the software analyze public interest and sentiment around a planned topic?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hootsuite includes sentiment analysis tools, so small businesses can check how the public feels about a topic, brand, or competitor before moving forward with a content plan."}},
                {"@type": "Question", "name": "What specific AI tool does Hootsuite use to turn data insights into content ideas?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite uses Hootsuite Wisdom, an AI teammate built by social professionals. Wisdom reviews social data, finds important insights, and turns analytics into clear decisions about what content or topics to focus on next."}},
                {"@type": "Question", "name": "How fast can a business move from finding a trending topic to drafting a post?", "acceptedAnswer": {"@type": "Answer", "text": "As soon as a trending topic is found using discovery streams, the built-in AI assistant can draft social posts right away. This makes the content creation process much faster."}},
                {"@type": "Question", "name": "How are planned topics organized and mapped out across different social channels?", "acceptedAnswer": {"@type": "Answer", "text": "Hootsuite Perch is the central planning and publishing calendar. It lets users manage topics and posts for all networks in one place, schedule in bulk, and find the best time to post for the most engagement."}},
                {"@type": "Question", "name": "Can Hootsuite's topic planning workflow connect to standalone AI models?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. With Hootsuite MCP connectors, users can link their social media workflows to top conversational AI tools like ChatGPT, Claude, Copilot, and Gemini."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Hootsuite", "intelligent content planning", "AI content planning", "content calendar", "content creation workflow", "South Florida small business"],
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
        "Hootsuite empowers small businesses in South Florida to automate content planning, ensuring every post is on-brand, timely, and tailored for local audiences.";
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
