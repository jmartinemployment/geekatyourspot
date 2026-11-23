import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/overview-section";
import ChallengesSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/challenges-section";
import TransformsSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/transforms-section";
import HowItWorksSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/how-it-works-section";
import ArchitectureSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/architecture-section";
import ImplementingSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/implementing-section";
import DataMappingSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/data-mapping-section";
import ConfiguringSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/configuring-section";
import EvaluatingSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/evaluating-section";
import ComparingSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/comparing-section";
import RightFitSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/right-fit-section";
import FaqSection from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/faq-section";
import { GOHIGHLEVEL_FAQ } from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/faq";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "GoHighLevel";
const PAGE_TITLE = "GoHighLevel for AI Customer Relationship Management (CRM)";
const DESCRIPTION =
    "GoHighLevel gives small businesses one place for leads, texts, email, appointments and follow-up, so every new lead gets a fast reply and nothing slips through.";
const CANONICAL = "/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "GoHighLevel, AI CRM, customer relationship management, lead follow-up, missed call text back, appointment booking, workflow automation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.gohighlevel.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/business-operations/ai-customer-relationship-management-crm" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": GOHIGHLEVEL_FAQ.map((item) => ({
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
        keywords: ["GoHighLevel", "AI CRM", "customer relationship management", "lead follow-up", "missed call text back", "appointment booking", "workflow automation", "South Florida small business"],
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
        "GoHighLevel puts every lead, conversation and appointment in one account, so small businesses reply fast and follow up without relying on memory.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection path="/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel" title={PAGE_TITLE} summary={heroSummary} />
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
