import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Lusha";
const PAGE_TITLE = "Lusha for Lead Enrichment and Predictive Scoring";
const DESCRIPTION =
    "Lead Enrichment and Predictive Scoring with Lusha help Miami-area small businesses identify, qualify, and connect with the right prospects fast.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Lusha, lead enrichment, predictive lead scoring, intent data, lead capture, B2B lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.lusha.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Lusha Lead Enrichment and how does it help a small business?", "acceptedAnswer": {"@type": "Answer", "text": "Lusha Lead Enrichment fills in missing B2B data like direct phone numbers, verified emails, and company details into your CSV lists, CRM, or spreadsheets. For small B2B firms in South Florida, this means you can turn a simple list of local companies into a complete outbound marketing database without manual research."}},
                {"@type": "Question", "name": "Can we enrich inbound leads from our website forms automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Lusha lets you keep your website forms short, such as just name and email, to increase conversions. It then instantly enriches leads on the backend with full company profiles, employee counts, and geographic data in about three seconds."}},
                {"@type": "Question", "name": "How accurate is the enriched data provided by Lusha?", "acceptedAnswer": {"@type": "Answer", "text": "Lusha reports a 98% email accuracy rate and an 85% US phone accuracy rate. This level of accuracy helps small teams focus on real conversations instead of wasting time on bounced emails or wrong numbers."}},
                {"@type": "Question", "name": "What is Predictive Scoring in Lusha?", "acceptedAnswer": {"@type": "Answer", "text": "Predictive Scoring in Lusha matches market data to your Ideal Customer Profile and pipeline activity. Instead of a generic list, it automatically ranks accounts and contacts by how well they fit and their likelihood to buy. The scoring gets more accurate as your team uses the platform."}},
                {"@type": "Question", "name": "What variables or signals does Lusha use to score leads?", "acceptedAnswer": {"@type": "Answer", "text": "Lusha uses 26 buying signals that refresh weekly to score leads. These include leadership changes, funding rounds, headcount changes, and hiring surges. For a B2B consultancy, this means you can target local businesses that just hired a new CFO or are growing their finance teams."}},
                {"@type": "Question", "name": "Can it identify the specific decision-makers within a scored account?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Lusha's scoring intelligence maps out the buying committee at target companies. It identifies who makes final decisions, who champions the project, and who the end-users are, so you can tailor your pitch to each stakeholder."}},
                {"@type": "Question", "name": "Does Lusha's scoring and enrichment data plug into standard CRMs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Lusha integrates directly with Salesforce, HubSpot, monday CRM, and Zoho. This lets you automate lead routing, scoring updates, and ongoing record enrichment without manual data exports."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Lusha", "lead enrichment", "predictive lead scoring", "intent data", "lead capture", "B2B lead generation", "South Florida small business"],
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
        "Lusha empowers small teams in South Florida to identify and engage real decision-makers by enriching lead data and scoring prospects for sales-readiness. Quickly connect with verified contacts and skip the dead ends.";
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
