import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/overview-section";
import ChallengesSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/challenges-section";
import TransformsSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/transforms-section";
import HowItWorksSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/how-it-works-section";
import ArchitectureSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/architecture-section";
import ImplementingSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/implementing-section";
import DataMappingSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/data-mapping-section";
import ConfiguringSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/configuring-section";
import EvaluatingSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/evaluating-section";
import ComparingSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/comparing-section";
import RightFitSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/right-fit-section";
import FaqSection from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/faq-section";
import { GEEK_RECEPTIONIST_FAQ } from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/faq";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Geek-Receptionist";
const PAGE_TITLE = "Geek-Receptionist";
const DESCRIPTION =
    "Geek-Receptionist texts every caller a small business misses, alerts the owner and takes a voicemail, so leads stop slipping away when nobody can pick up the phone.";
const CANONICAL = "/tools/business-operations/ai-receptionist/geek-receptionist";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Geek-Receptionist, missed call text back, AI receptionist, call answering, lead capture, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/business-operations/ai-receptionist" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": GEEK_RECEPTIONIST_FAQ.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Geek-Receptionist", "missed call text back", "AI receptionist", "call answering", "lead capture", "South Florida small business"],
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
        "Geek-Receptionist texts every caller you miss, alerts you and takes a voicemail, so small businesses stop losing leads to an unanswered phone.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection
                title={PAGE_TITLE}
                summary={heroSummary}
                heroImage={{
                    src: "/images/accounting/tools/geekatyourspot/missing-calls.avif",
                    alt: "Friendly robot pointing to a badge asking if you are missing calls while you work",
                    width: 1024,
                    height: 1024
                }}
            />
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
