import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Scalenut";
const PAGE_TITLE = "Scalenut for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Scalenut helps small South Florida businesses create expert content efficiently, boosting online visibility and local trust.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Scalenut, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.scalenut.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Scalenut, and what does it do?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut is an AI-powered platform for SEO and generative engine optimization. It combines keyword planning, content creation, content optimization, website audits, and AI-search visibility tracking. Small businesses can use it as self-service software or choose expert-managed services."}},
                {"@type": "Question", "name": "What is the difference between Scalenut’s SEO and GEO features?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut’s SEO features help businesses get found in traditional search with keyword planning, content optimization, internal linking, and audits. Its GEO features focus on how brands show up in AI-generated answers, including brand mentions, citations, prompt coverage, and recommendations to improve that presence."}},
                {"@type": "Question", "name": "Who is Scalenut designed for?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut offers Starter for founders and small teams, Plus for growing teams, and Professional for agencies and advanced in-house teams. Businesses that want outsourced execution can choose its VIP managed service, which is custom-priced."}},
                {"@type": "Question", "name": "How much does Scalenut cost?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut’s pricing page lists these standard monthly rates and discounted annual-plan equivalents: Starter at $59 per month, Plus at $89 per month, and Professional at $199 per month. Annual plans show lower monthly rates. The VIP managed service is custom quoted. Because the page may show overlapping promotions and older FAQs, confirm the billing total, included limits, and promotional terms at checkout."}},
                {"@type": "Question", "name": "Does Scalenut offer a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut advertises a seven-day free trial for its software plans. The trial lets users explore AI-visibility tracking, insights, and its GEO content engine before choosing a paid plan."}},
                {"@type": "Question", "name": "What features are included in every Scalenut plan?", "acceptedAnswer": {"@type": "Answer", "text": "Every plan includes AI-search visibility tracking, GEO content creation and optimization, prompt discovery, content scoring, and execution-oriented workflows. Plans differ in usage limits, supported AI engines, audit capabilities, and collaboration features."}},
                {"@type": "Question", "name": "Can Scalenut write blog posts and other marketing content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut supports long-form blog posts, website copy, landing pages, and product descriptions. Its content tools combine AI drafting with research and optimization guidance, not just basic text generation."}},
                {"@type": "Question", "name": "Can Scalenut optimize articles that are already published?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut includes an optimizer for existing articles. Higher tiers also offer content audits, topic-gap recommendations, and internal-linking tools to help improve published website content."}},
                {"@type": "Question", "name": "Does Scalenut include keyword research and keyword clustering?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut offers keyword planning and clustering, which groups related keywords for content planning. Monthly cluster limits and advanced planning features depend on the plan you choose, as shown on the vendor’s pricing page."}},
                {"@type": "Question", "name": "Which AI platforms can Scalenut track?", "acceptedAnswer": {"@type": "Answer", "text": "For self-service software, Scalenut’s pricing FAQ lists ChatGPT and Google AI on all plans, with Perplexity available on higher tiers. Its managed-service homepage also mentions tracking and optimizing for ChatGPT, Perplexity, Gemini, Claude, and Grok. The broader managed-service coverage does not apply to every software subscription."}},
                {"@type": "Question", "name": "How often does Scalenut update AI-visibility data?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut refreshes AI-visibility data weekly by default. Users can upgrade for daily refreshes, as stated in the pricing FAQ."}},
                {"@type": "Question", "name": "Does Scalenut integrate with WordPress and Shopify?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut lists integrations with WordPress and Shopify. The Plus plan includes auto-publishing to both. The pricing comparison also mentions Semrush and Copyscape integrations, but it is not clear if these are available on every tier."}},
                {"@type": "Question", "name": "Can agencies use Scalenut for multiple clients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut supports separate workspaces, each tied to one domain. Starter includes one workspace, Plus includes two, and Professional offers unlimited workspaces and team members. Professional is the agency-oriented tier."}},
                {"@type": "Question", "name": "What is the difference between Scalenut’s software and managed service?", "acceptedAnswer": {"@type": "Answer", "text": "With the software, your team uses Scalenut’s tools for planning, production, optimization, and monitoring. The managed service provides a dedicated strategist and AI agents who handle strategy, content, technical improvements, authority building, and reporting."}},
                {"@type": "Question", "name": "Is Scalenut’s managed content reviewed by humans?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. For managed service, a strategist sets direction, briefs agents, edits for brand voice and accuracy, and approves content before it goes live. This human review applies to managed service, not to every software plan."}},
                {"@type": "Question", "name": "How long does Scalenut take to produce results?", "acceptedAnswer": {"@type": "Answer", "text": "For managed service, Scalenut says you can expect initial traction in 60 to 90 days, with Google rankings building over months three to six. AI visibility may improve faster. These are vendor expectations, not guarantees for every business."}},
                {"@type": "Question", "name": "Can I upgrade or downgrade my Scalenut subscription?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut allows users to upgrade or downgrade their subscription at any time. Data stays intact when moving between plans."}},
                {"@type": "Question", "name": "Does Scalenut offer refunds?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut’s pricing page states that special promotional deals are nonrefundable. This does not confirm a refund policy for all subscriptions or managed services. Check the terms for your specific purchase."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Scalenut", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Scalenut provides small businesses in South Florida with an efficient way to produce expert, trustworthy content at scale, without the high costs of agencies or writers.";
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
