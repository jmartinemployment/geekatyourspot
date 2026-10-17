import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Factors";
const DESCRIPTION =
    "Lead Enrichment and Predictive Scoring from Factors helps small businesses in South Florida capture and qualify their best leads for a stronger sales pipeline.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": TITLE,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Factors, lead enrichment, predictive lead scoring, intent data, lead capture, B2B lead generation, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida-smbs"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What exactly does Factors.ai do, and how does it differ from a standard tracker like Google Analytics?", "acceptedAnswer": {"@type": "Answer", "text": "Factors.ai goes beyond basic web tracking. It focuses on Account Intelligence and contact-level identification, showing you which specific local companies are visiting your site. You get details on first touch, last touch, and multi-channel attribution, not just anonymous visitor counts."}},
                {"@type": "Question", "name": "How does the platform track \"intent data\" to help our small sales or outreach teams?", "acceptedAnswer": {"@type": "Answer", "text": "Factors.ai collects data from website actions, ad clicks, and third-party sources to map active buying behavior. It builds a prioritized list of target accounts and gives your team actionable insights, like which local firms are engaging with your services and who the decision-makers are."}},
                {"@type": "Question", "name": "Can we monitor when specific local accounts look at custom landing pages built for them?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can upload your local account lists, and Factors.ai will alert you as soon as a targeted account interacts with your website or custom landing pages. This gives your team immediate context for timely follow-up."}},
                {"@type": "Question", "name": "How does this clear up blind spots before our team reaches out to a prospect?", "acceptedAnswer": {"@type": "Answer", "text": "Factors.ai creates a full account timeline inside your CRM. Your team can see every page a prospect visited, which local ads they viewed, and what content they engaged with. This turns outreach into an informed conversation instead of a cold call."}},
                {"@type": "Question", "name": "Can we synchronize our highest-intent lists to social media ad accounts automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Factors.ai lets you automatically sync high-intent account segments to LinkedIn and Meta as matched audiences. These lists update on their own as buyer scores change, so you do not have to manage manual exports."}},
                {"@type": "Question", "name": "How does Factors.ai use AI, and is the data secure?", "acceptedAnswer": {"@type": "Answer", "text": "Factors.ai uses Scout, an AI copilot that works only with your verified account data and trusted third-party sources. This prevents errors or false insights. The platform meets enterprise-grade security standards, including SOC 2 Type II, GDPR, and CCPA certifications."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Factors", "lead enrichment", "predictive lead scoring", "intent data", "lead capture", "B2B lead generation", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Factors uses AI-driven Lead Enrichment and Predictive Scoring to reveal which website visitors are most likely to buy, optimizing your lead capture pipeline.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
