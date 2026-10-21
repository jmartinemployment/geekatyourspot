import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Tidio";
const PAGE_TITLE = "Tidio as a Cross-Platform Chatbot";
const DESCRIPTION =
    "Cross-Platform Chatbot Tidio helps small South Florida businesses unify website, SMS, and social messaging into a single, efficient lead management dashboard.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Tidio, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.tidio.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-setup-guide" }
            }
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Tidio", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
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
        "Tidio centralizes customer conversations from website, SMS, Messenger, and Instagram, helping small businesses in Miami-Dade, Broward, and West Palm Beach manage leads and support seamlessly.";
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
