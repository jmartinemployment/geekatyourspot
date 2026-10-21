import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/copy/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Copy.ai";
const PAGE_TITLE = "Copy.ai for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Copy.ai helps Miami-Dade, Broward and West Palm Beach small businesses automate marketing and stay competitive.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/copy";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Copy.ai, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.copy.ai/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Copy.ai?", "acceptedAnswer": {"@type": "Answer", "text": "Copy.ai started as an AI writing tool for generating copy. It has now become an AI-native Go-to-Market platform that connects sales, marketing, and operations teams. The platform helps automate complex business processes like personalized sales prospecting, content engines, data enrichment, and system integrations."}},
                {"@type": "Question", "name": "What is a \"Workflow\" in Copy.ai?", "acceptedAnswer": {"@type": "Answer", "text": "A Workflow in Copy.ai is an AI-powered sequence of actions that codifies a business process. Instead of running one-off text prompts, users can set up a workflow to scrape URLs, scan websites, pull data from internal sources, and generate multi-step outputs instantly."}},
                {"@type": "Question", "name": "What are Workflow Credits and how do they work?", "acceptedAnswer": {"@type": "Answer", "text": "A Workflow Credit is the unit of computational power needed to run workflow tasks, such as crawling websites, calling APIs, or generating text. The number of credits used depends on how many steps and how much data processing the workflow requires."}},
                {"@type": "Question", "name": "What is the \"Infobase\" feature?", "acceptedAnswer": {"@type": "Answer", "text": "Infobase is a central team knowledge repository where you can store brand guidelines, positioning documents, and value propositions. Users can tag specific internal data with \"@\" during chat or workflow creation, which forces the AI to reference exact context without needing to copy and paste documentation repeatedly."}},
                {"@type": "Question", "name": "How does Copy.ai differ from standard AI tools like ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "Copy.ai is model-agnostic, switching between models like OpenAI, Anthropic, and Gemini based on performance needs. It acts as an orchestration layer and integrates directly with CRM tools like Salesforce, HubSpot, and Gong to coordinate the entire customer lifecycle, unlike single-task copilots or narrow chatbots."}},
                {"@type": "Question", "name": "Can custom AI actions be built?", "acceptedAnswer": {"@type": "Answer", "text": "Custom actions are being developed, but users can already use hundreds of pre-built AI Actions that translate instructions into complex pipeline tasks automatically."}},
                {"@type": "Question", "name": "Is Copy.ai free to use?", "acceptedAnswer": {"@type": "Answer", "text": "Copy.ai used to focus on a free tier, but with new specialized features and enterprise workflow tools, it no longer prioritizes a full free plan for new customers. Paid team and starter plans scale with usage, user seats, and access to the automated GTM Workflow Builder."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Copy.ai", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Copy.ai delivers an AI-powered workflow for Intelligent Content Generation, enabling local small businesses to produce and repurpose marketing content efficiently across all channels.";
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
