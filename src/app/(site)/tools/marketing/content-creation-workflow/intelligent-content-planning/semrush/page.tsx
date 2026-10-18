import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Semrush";
const DESCRIPTION =
    "Intelligent Content Planning is simple with Semrush, giving Miami-Dade, Broward, and West Palm Beach small businesses a smarter, data-driven content workflow.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": TITLE,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Semrush, intelligent content planning, AI content planning, content calendar, content creation workflow, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How can Semrush help manufacturing businesses reach more customers?", "acceptedAnswer": {"@type": "Answer", "text": "Semrush shows you which search terms industrial buyers use when looking for suppliers and products. It helps you create content that ranks for those terms and lets you track what your competitors are doing. This way, you can close gaps and boost your online visibility where B2B leads are searching for suppliers."}},
                {"@type": "Question", "name": "Is Semrush useful for companies selling through distributors?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Semrush helps you build content and rankings that get your brand in front of buyers before they ever contact a distributor. This builds brand awareness and ensures buyers ask for your brand by name."}},
                {"@type": "Question", "name": "Can Semrush track rankings for niche industrial search terms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Semrush Position Tracking lets you monitor any keyword, even those with low search volume. You can track your visibility for any search that signals a buyer is ready to purchase."}},
                {"@type": "Question", "name": "How does Semrush help with technical product content?", "acceptedAnswer": {"@type": "Answer", "text": "Semrush helps you find the keywords and questions people ask about technical products. You can use this data to create product pages, guides, and spec sheets that answer real questions and use the same words your audience types into search engines."}},
                {"@type": "Question", "name": "How does Semrush help small businesses find specific topic ideas to target?", "acceptedAnswer": {"@type": "Answer", "text": "Semrush uses its Content suite and Keyword Research tools to sort through a huge database of over 29 billion keywords and 808 million domain profiles. It finds high-ranking, top-performing topic ideas that fit your industry, so you can spot valuable keywords that others might miss."}},
                {"@type": "Question", "name": "Can Semrush find content opportunities based on what local competitors are writing about?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. With Competitor Analysis and Market Analysis tools, Semrush's AI reviews your rivals’ websites to see what drives their traffic. It highlights market-share gaps and competitive weaknesses, helping you build a topic plan that targets areas your competitors are missing."}},
                {"@type": "Question", "name": "How does Semrush assist with planning topics for AI-driven engines (like ChatGPT or Claude)?", "acceptedAnswer": {"@type": "Answer", "text": "Semrush offers a dedicated AI Visibility and Prompt Research workflow. It tracks brand mentions, measures your AI market share, and reviews over 317 million LLM prompts. This shows you how conversational AI platforms talk about your brand and what topics you should cover to be included in AI-generated answers."}},
                {"@type": "Question", "name": "Can a team interact with Semrush's data using their own AI chat tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Semrush MCP (Model Context Protocol) and direct ChatGPT integrations let you connect live Semrush data to your AI assistants. Your team can ask questions in plain English and get instant, data-backed content planning answers."}},
                {"@type": "Question", "name": "Has Semrush's core software changed following its corporate acquisition?", "acceptedAnswer": {"@type": "Answer", "text": "Semrush was recently acquired by Adobe. Now, you get features like Adobe Brand Visibility, which combines Semrush data with Adobe’s agentic tools. This creates a single, streamlined workflow for brand visibility, SEO, and AI-driven content planning."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Semrush", "intelligent content planning", "AI content planning", "content calendar", "content creation workflow", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek at Your Spot' },
    };
};

export default async function Page() {
    const heroSummary =
        "Semrush empowers South Florida small businesses to plan, create, and repurpose content efficiently using AI, ensuring your marketing reaches and resonates with local audiences.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
