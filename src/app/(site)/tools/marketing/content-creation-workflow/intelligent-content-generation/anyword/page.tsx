import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Anyword";
const PAGE_TITLE = "Anyword for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Anyword helps Miami-Dade, Broward, and West Palm Beach small businesses create high-impact content faster and for less.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Anyword, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-anyword",
                "name": TITLE,
                "url": "https://www.anyword.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What makes Anyword different from generic AI writing tools?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword stands out because it is built for performance. Unlike standard tools that just generate text, Anyword uses A/B-tested data and predictive analytics. Its Data-driven Editor scores and evaluates copy before it goes live, predicting conversion success with up to 82% accuracy for specific audiences, marketing channels, and campaign goals."}},
                {"@type": "Question", "name": "What is Anyword Content Intelligence?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword Content Intelligence reviews your live, published content and compares it to Anyword’s marketing performance data. It highlights ways to optimize your copy right away and guides future content rules across your main marketing channels."}},
                {"@type": "Question", "name": "Which marketing use cases does Anyword support natively?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword offers modules for SEO blog content, personalized website messaging, social media asset creation, and automated email generation. Each is designed to help you scale content and target your ideal customers."}},
                {"@type": "Question", "name": "Can I apply a custom Brand Voice to my AI content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Anyword has a Brand Voice hub where you set your messaging rules, audience profiles, and guidelines. This keeps your content consistent across all marketing teams."}},
                {"@type": "Question", "name": "Does Anyword integrate with other AI applications?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Anyword includes MCP connectors so you can use its performance predictions, talking points, and brand voices directly in tools like ChatGPT, Notion, and Google Gemini."}},
                {"@type": "Question", "name": "Is there an Anyword Chrome Extension?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Chrome Extension lets you use performance scoring and copy optimization in your web workflows to increase sign-ups, leads, and ad conversions."}},
                {"@type": "Question", "name": "Does Anyword provide an API?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Anyword has a Gen-AI Content Performance API. It lets developers add performance predictions, A/B insights, and retrieval-augmented generation to their own business apps or agents."}},
                {"@type": "Question", "name": "Is customer data used to train public AI models?", "acceptedAnswer": {"@type": "Answer", "text": "No. Anyword keeps your data isolated. Your company’s inputs are never used to train third-party AI models, so your data and intellectual property stay protected."}},
                {"@type": "Question", "name": "What compliance certifications does Anyword hold?", "acceptedAnswer": {"@type": "Answer", "text": "Anyword's infrastructure meets SOC 2, ISO 27001, GDPR, and HIPAA requirements. It also offers enterprise security features such as single sign-on and role-based permissions."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Anyword", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            creator: 'Geek @ Your Spot LLC',
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
        "Anyword offers AI-powered Intelligent Content Generation, enabling local small businesses to efficiently create, personalize, and schedule impactful digital content.";
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
