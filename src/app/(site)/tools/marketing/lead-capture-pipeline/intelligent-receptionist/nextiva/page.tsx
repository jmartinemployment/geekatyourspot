import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Nextiva";
const PAGE_TITLE = "Nextiva as an Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist from Nextiva unifies calls, texts, and chats for small businesses in Miami-Dade, Broward, and Palm Beach counties.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Nextiva, intelligent receptionist, AI receptionist, lead capture, missed calls, call answering, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.nextiva.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/ai-receptionist" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Will customers know they are speaking to an AI?", "acceptedAnswer": {"@type": "Answer", "text": "XBert uses realistic, conversational voice engines. Many callers do not notice they are speaking to AI. Nextiva also lets admins set the tool to introduce itself as a virtual assistant if preferred."}},
                {"@type": "Question", "name": "How does it handle complex questions?", "acceptedAnswer": {"@type": "Answer", "text": "XBert answers standard questions using your business's linked knowledge base and website. If a question is too complex or outside its scope, it collects the caller's details and passes the call to a human team member, along with a full text transcript and conversation context. This way, callers do not have to repeat themselves."}},
                {"@type": "Question", "name": "Can it take concurrent calls?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. XBert can handle unlimited inbound calls, texts, and web chats at the same time, so your business never gets a busy signal. Human receptionists can only take one call at a time."}},
                {"@type": "Question", "name": "Why does the receptionist skill override custom prompts?", "acceptedAnswer": {"@type": "Answer", "text": "The receptionist skill is a default system setting in Nextiva. It cannot be changed, so it overrides any custom prompts within that workflow node."}},
                {"@type": "Question", "name": "Can phone menu options be customized before handing off to the AI?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Admins can use NEXT Studio to fully edit menu nodes, create multi-department branches, and set up conditional options before routing a caller to an AI employee or a human agent."}},
                {"@type": "Question", "name": "Why are calls failing to route to the AI receptionist?", "acceptedAnswer": {"@type": "Answer", "text": "This is often a routing configuration issue. XBert AI employees are limited to one phone number and must be assigned only to the default admin group. If the number is moved out of this group, the routing sequence will break."}},
                {"@type": "Question", "name": "What calendar systems does it support for bookings?", "acceptedAnswer": {"@type": "Answer", "text": "XBert can connect to business calendars like Outlook and Google Workspace. It can book, reschedule, or confirm appointments on its own by checking these linked calendars."}},
                {"@type": "Question", "name": "How much does Nextiva XBert cost?", "acceptedAnswer": {"@type": "Answer", "text": "Nextiva XBert is available as a standalone service or as a UCaaS add-on. Pricing starts at $99 per month for 100 AI interactions. Each additional interaction is billed at $0.99."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Nextiva", "intelligent receptionist", "AI receptionist", "lead capture", "missed calls", "call answering", "South Florida small business"],
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
        "Nextiva provides small teams with an Intelligent Receptionist that consolidates all communication channels, making it easier to capture and follow up on every lead.";
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
