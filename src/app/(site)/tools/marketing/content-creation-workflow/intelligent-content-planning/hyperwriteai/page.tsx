import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "HyperWrite";
const PAGE_TITLE = "HyperWrite for Intelligent Content Planning";
const DESCRIPTION =
    "Intelligent Content Planning with HyperWrite gives small South Florida businesses a smarter way to automate and optimize their marketing efforts.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "HyperWrite, intelligent content planning, AI content planning, content calendar, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.hyperwriteai.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-content-planning" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Can HyperWrite help manage and clear a cluttered email inbox?", "acceptedAnswer": {"@type": "Answer", "text": "HyperWrite features an Email Responder tool built for daily email management. Users can enter a few words or bullet points, and the tool turns them into full, polished email replies."}},
                {"@type": "Question", "name": "How does the software assist users in real-time as they type out documents?", "acceptedAnswer": {"@type": "Answer", "text": "HyperWrite offers TypeAhead, a predictive writing feature delivered through a Chrome extension. It suggests and completes sentences in real time inside apps like Gmail and Google Docs."}},
                {"@type": "Question", "name": "What options exist for rewriting or simplifying existing business text?", "acceptedAnswer": {"@type": "Answer", "text": "Users can use the Rewrite Content tool to rephrase paragraphs while keeping the original meaning. For technical or complex content, the Explain Like I'm Five (ELI5) AI breaks down information into clear, simple language."}},
                {"@type": "Question", "name": "What are the differences between HyperWrite's Premium and Ultra pricing plans?", "acceptedAnswer": {"@type": "Answer", "text": "The Premium Plan is $19.99 per month or $16 per month if billed annually. It includes 250 AI messages each month, real-time cited info, standard AI tools, and up to 3 Custom Personas. The Ultra Plan is $44.99 per month or $29 per month if billed annually. It offers unlimited AI messages, priority access to experimental agent features, and up to 10 Custom Personas."}},
                {"@type": "Question", "name": "Can a small business build its own custom automated workflows using the platform?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. HyperWrite lets teams create Custom AI Tools, so business owners can build and save tools that match their own internal processes and standard operating procedures."}},
                {"@type": "Question", "name": "Does HyperWrite natively support Microsoft Office products?", "acceptedAnswer": {"@type": "Answer", "text": "HyperWrite works mainly through a Chrome Extension, so it runs natively in browser-based platforms like Google Workspace, web-based CRMs, and webmail. For traditional desktop Microsoft Office, native integration is not available, but it is a common request from users who want the same experience across platforms."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["HyperWrite", "intelligent content planning", "AI content planning", "content calendar", "content creation workflow", "South Florida small business"],
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
        "HyperWrite helps small South Florida teams overcome content burnout by automating planning, drafting, and approvals for more effective marketing.";
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
