import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Smith.ai";
const PAGE_TITLE = "Smith.ai as an Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist Smith.ai helps South Florida small businesses capture every lead by blending automation with real human support for seamless client intake";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith";
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
            "keywords": "Smith.ai, intelligent receptionist, AI receptionist, lead capture, missed calls, call answering, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-smith-ai",
                "name": TITLE,
                "url": "https://smith.ai/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Is Smith.ai an AI bot or a live receptionist service?", "acceptedAnswer": {"@type": "Answer", "text": "Smith.ai combines both AI and live receptionist support in one system. The AI manages routine tasks like intake and scheduling, while over 500 trained live agents are available around the clock for more complex needs."}},
                {"@type": "Question", "name": "Will my callers know they're talking to AI?", "acceptedAnswer": {"@type": "Answer", "text": "Smith.ai lets you set how the AI introduces itself, so it can follow your disclosure preferences and any legal rules. The AI never pretends to be human. If you use the Virtual Receptionist, live agents answer from the start."}},
                {"@type": "Question", "name": "What happens when the AI can't handle a call?", "acceptedAnswer": {"@type": "Answer", "text": "If the AI cannot manage a call, it transfers the caller to a live agent right away. This way, callers do not get stuck or left without help."}},
                {"@type": "Question", "name": "What are the core capabilities and integrations of Smith.ai?", "acceptedAnswer": {"@type": "Answer", "text": "Smith.ai offers booking, custom intake forms, appointment rescheduling, and outbound calling. Live agents can run conflict checks but do not give legal advice. All data is kept secure with encrypted dashboards. The system connects directly with platforms like Clio, MyCase, and Lawmatics. Pricing is based on each call."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Smith.ai", "intelligent receptionist", "AI receptionist", "lead capture", "missed calls", "call answering", "South Florida small business"],
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
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
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
        "Smith.ai offers an Intelligent Receptionist solution tailored for South Florida small businesses, combining automated lead capture with live human backup for every call.";
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
