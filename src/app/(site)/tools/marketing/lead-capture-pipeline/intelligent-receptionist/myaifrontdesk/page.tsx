import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "My AI Front Desk";
const PAGE_TITLE = "My AI Front Desk as an Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist My AI Front Desk helps small businesses in Miami-Dade, Broward, and Palm Beach capture every lead and book more appointments automatically";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk";
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
            "keywords": "My AI Front Desk, intelligent receptionist, AI receptionist, lead capture, missed calls, call answering, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-my-ai-front-desk",
                "name": TITLE,
                "url": "https://www.myaifrontdesk.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What happened to My AI Front Desk? Is it now Frontdesk?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The company rebranded to Frontdesk and changed its main product from a standalone voice receptionist to a unified AI workforce subscription. This now covers phone, web chat, SMS, email, CRM, and basic automations."}},
                {"@type": "Question", "name": "Is My AI Front Desk legit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The company has been operating since 2023, was founded by former Meta engineers, and has published case studies with local businesses and real estate groups such as Samson Properties and Garman Homes."}},
                {"@type": "Question", "name": "How does the setup work?", "acceptedAnswer": {"@type": "Answer", "text": "You forward your current business number to Frontdesk and set up rules for what your AI receptionist should say. For small operators, the setup is self-serve and takes about five minutes."}},
                {"@type": "Question", "name": "Can it book appointments on live calendars?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It connects with live scheduling calendars like Google Calendar, Outlook, and other platforms to check availability and book appointments during a call."}},
                {"@type": "Question", "name": "Can it do outbound sales campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "No. The tool is built for inbound answering, lead capture, and routing. Outbound calls are limited and meant only for basic operational follow-ups, not for sales campaigns."}},
                {"@type": "Question", "name": "Can it handle parallel calls?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The AI can answer unlimited phone calls at the same time, so no caller ever gets a busy signal."}},
                {"@type": "Question", "name": "What happens if the AI gets stuck?", "acceptedAnswer": {"@type": "Answer", "text": "If the AI cannot understand a request after two or three tries, it collects the customer's contact details and sends a real-time notification or transfers the call to a human employee."}},
                {"@type": "Question", "name": "How much does Frontdesk cost?", "acceptedAnswer": {"@type": "Answer", "text": "Frontdesk offers a free plan with 20 voice minutes per month. The Business-in-a-Box plan is $99 per month, or $79 per month if billed annually, and includes 200 voice minutes. Extra minutes are billed at $0.25 each."}},
                {"@type": "Question", "name": "What integrations are supported?", "acceptedAnswer": {"@type": "Answer", "text": "My AI Front Desk supports calendar syncs and connects with Zapier. This lets users send text transcripts and captured lead profiles to over 9,000 external CRM and software applications."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["My AI Front Desk", "intelligent receptionist", "AI receptionist", "lead capture", "missed calls", "call answering", "South Florida small business"],
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
        "My AI Front Desk is an Intelligent Receptionist designed for South Florida small businesses, ensuring every call is answered, leads are captured, and appointments are booked without missing a beat.";
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
