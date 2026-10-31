import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Jasper";
const PAGE_TITLE = "Jasper for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation from Jasper helps small businesses in Miami-Dade, Broward, and West Palm Beach streamline content creation and boost impact.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Jasper, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.jasper.ai/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Jasper AI?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper is an AI marketing platform that helps small businesses create on-brand content and manage marketing workflows. It brings together writing and image tools, marketing agents, brand knowledge, and content pipelines so teams can run campaigns across different channels."}},
                {"@type": "Question", "name": "How does Jasper AI work?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper works by combining several AI models with details you provide about your business. Its Jasper IQ feature holds your brand voice, audience profiles, product information, and style rules. Marketing agents and workflows then use this context to complete specific marketing tasks."}},
                {"@type": "Question", "name": "How is Jasper different from ChatGPT, Claude, or Gemini?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper stands out because it offers a full marketing workspace: shared brand context, specialized marketing agents, content pipelines, and team controls. General-purpose assistants like ChatGPT, Claude, or Gemini handle a wider range of tasks, but Jasper is focused on marketing workflow and brand management, not just writing text."}},
                {"@type": "Question", "name": "Is Jasper just a chatbot?", "acceptedAnswer": {"@type": "Answer", "text": "No. Jasper includes a chat interface, but the platform also offers content editors, marketing agents, brand management tools, image creation, and workflow automation. Chat is only one way to use Jasper, not the whole product."}},
                {"@type": "Question", "name": "How much does Jasper AI cost?", "acceptedAnswer": {"@type": "Answer", "text": "As of October 20, 2026, Jasper lists two plans. The Pro plan is $69 per month or $59 per month if billed annually. It includes one seat, core marketing agents, two Brand Voices, five knowledge assets, and three audiences. The Business plan has custom pricing and adds advanced workflows, custom agents, Jasper Grid, API access, expanded brand context, and governance. The $59 rate is only for annual billing."}},
                {"@type": "Question", "name": "Is Jasper AI free?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper offers a seven-day free trial of its Pro plan. After that, you need to choose a paid Pro or Business subscription. There is no ongoing free plan."}},
                {"@type": "Question", "name": "Does Jasper charge for usage as well as seats?", "acceptedAnswer": {"@type": "Answer", "text": "For some Business features, yes. Jasper uses credits for certain usage-based features like the GEO Hub and some agents, in addition to seat pricing. Standard content creation in Chat and Canvas does not use credits. Buyers should review the credit rate card and included allocation when considering a Business quote."}},
                {"@type": "Question", "name": "Can I cancel Jasper at any time?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper allows you to cancel your subscription at any time, and you will keep access until your billing cycle ends. Annual Pro and Business plans both require a 12-month commitment. Canceling does not mean you get an automatic refund for unused time."}},
                {"@type": "Question", "name": "Can Jasper write complete blog posts and articles?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper provides a Blog Post agent and long-form content tools that can generate full drafts. These drafts still need editing, fact-checking, and refinement before you publish them."}},
                {"@type": "Question", "name": "Can Jasper match my company’s brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper can generate drafts using your brand voice, but those drafts will still need editing, fact-checking, and refinement before they are ready for use."}},
                {"@type": "Question", "name": "Can Jasper repurpose existing content?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper’s Remix Content feature can turn your existing material into assets for other marketing channels. Its rewriting tools let you change tone, adjust length, or adapt content for a different channel."}},
                {"@type": "Question", "name": "Can Jasper help with SEO and AI search visibility?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper offers SEO content agents and GEO workflows to help improve your visibility in AI-generated search answers. Advanced GEO agents are listed as part of the Business plan. These tools support your content work but do not guarantee rankings or citations in AI search results."}},
                {"@type": "Question", "name": "Can Jasper create images?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper can generate and edit images as well as text. Its image features include background replacement, removal, upscaling, product-image compositing, and more. Check your selected plan or Business agreement to confirm which image features are available to you."}},
                {"@type": "Question", "name": "Does Jasper support multiple languages?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper can create or repurpose content in over 30 languages. The Business plan also lists agents for translation workflows."}},
                {"@type": "Question", "name": "Does Jasper include a plagiarism checker?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper lists a plagiarism-checking add-on powered by Copyscape. This is described as an add-on, so it is not included by default and may require extra steps or costs."}},
                {"@type": "Question", "name": "Can Jasper automate marketing workflows and connect to other tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Jasper offers prebuilt agents, lets you create custom agents without code, and includes Jasper Grid for systematic content production. The pricing page lists API-powered integrations with tools like Zapier, Make, Google Sheets, and BigQuery, plus direct integrations with platforms such as Webflow, Google Docs, and Slack. API access and advanced automation are available under the Business plan."}},
                {"@type": "Question", "name": "Can agencies or consultants use Jasper for multiple clients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Jasper allows agencies and consultants to create separate projects for each client or access a client’s Jasper account with permission. Plan limits apply: the Pro plan includes two Brand Voices and five knowledge assets, while the Business plan provides unlimited brand voices, knowledge assets, and audiences."}},
                {"@type": "Question", "name": "Does Jasper use my business data to train AI models?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper states it does not use customer data to train AI models and does not let third parties train their models using Jasper customer data. Data is encrypted in transit and at rest, and Jasper uses trusted service providers to run the platform. This does not mean no third party ever processes your data."}},
                {"@type": "Question", "name": "Do I own the content I create with Jasper?", "acceptedAnswer": {"@type": "Answer", "text": "Jasper says customers keep full ownership of their content. This is the platform’s policy, but it does not guarantee that every output qualifies for copyright protection or is free from third-party rights issues."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Jasper", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Jasper offers AI-driven content generation tailored for South Florida small businesses, helping teams overcome the blank page and deliver unified, on-brand messaging.";
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
