import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "LobbyStack";
const PAGE_TITLE = "LobbyStack as an Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist by LobbyStack helps small businesses in Miami-Dade, Broward and West Palm Beach capture every lead and never miss a call.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack";
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
            "keywords": "LobbyStack, intelligent receptionist, AI receptionist, lead capture, missed calls, call answering, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-lobbystack",
                "name": TITLE,
                "url": "https://lobbystack.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is an AI voice agent?", "acceptedAnswer": {"@type": "Answer", "text": "An AI voice agent is software that uses natural speech to answer calls and handle tasks like booking or messaging. It acts as a receptionist for busy small businesses."}},
                {"@type": "Question", "name": "Do I need to change my phone number?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need to change your phone number. Starter and Pro plans include a dedicated LobbyStack number that you can forward your current number or overflow calls to."}},
                {"@type": "Question", "name": "What are the key features of LobbyStack?", "acceptedAnswer": {"@type": "Answer", "text": "LobbyStack provides automatic call distribution, call center management, dashboard reporting, and IVR workflows for inbound calls."}},
                {"@type": "Question", "name": "What is an AI dental answering service?", "acceptedAnswer": {"@type": "Answer", "text": "An AI dental answering service manages practice calls, schedules visits, addresses policy inquiries, and handles emergency routing to prevent missed calls going to voicemail."}},
                {"@type": "Question", "name": "Can it book new patient appointments?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it gathers contact and insurance information, books appointments directly onto your calendar, and sends a text confirmation."}},
                {"@type": "Question", "name": "Does it work after hours and on weekends?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it operates 24/7 to handle bookings, messages, or emergency transfers based on your rules."}},
                {"@type": "Question", "name": "Can it tell a maintenance emergency from a routine request?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, using your custom criteria like flooding or gas smells, it screens issues and routes urgent calls to on-call technicians."}},
                {"@type": "Question", "name": "Can it answer questions about my properties?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it answers queries using details from your knowledge base and flags unhandled questions for the office."}},
                {"@type": "Question", "name": "Can it book showings?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. LobbyStack syncs with your calendar, schedules slots, and sends confirmation texts."}},
                {"@type": "Question", "name": "Is an open-source AI receptionist free?", "acceptedAnswer": {"@type": "Answer", "text": "Live processing uses third-party services like Twilio and OpenAI. LobbyStack's Free plan gives you 30 browser voice minutes for testing."}},
                {"@type": "Question", "name": "How much does it cost and what fees or limitations are included?", "acceptedAnswer": {"@type": "Answer", "text": "Plans start with a free tier. The Pro plan costs $15 to $30 per month, which includes a set number of voice minutes. Overage and usage fees apply after that."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["LobbyStack", "intelligent receptionist", "AI receptionist", "lead capture", "missed calls", "call answering", "South Florida small business"],
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
        "LobbyStack empowers local small businesses to stop missing calls and control their customer interactions with a customizable Intelligent Receptionist.";
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
