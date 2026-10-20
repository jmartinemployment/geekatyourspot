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
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Tidio, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-tidio",
                "name": TITLE,
                "url": "https://www.tidio.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-smb-implementation-guide#article" }
            }
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Tidio", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
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
