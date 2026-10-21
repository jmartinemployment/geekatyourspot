import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Dapta";
const PAGE_TITLE = "Dapta as a Cross-Platform Chatbot";
const DESCRIPTION =
    "Cross-Platform Chatbot Dapta keeps Miami-Dade, Broward, and West Palm Beach small businesses connected, capturing every lead from every channel with ease.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Dapta, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://dapta.ai/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/ai-chatbot" }
            }
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Dapta", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
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
        "Dapta centralizes inbound messages from every channel, ensuring your local team can respond quickly and consistently to every lead without missing a beat.";
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
            <SchedulerShell />
        </>
    );
}
