import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Voksha";
const PAGE_TITLE = "Voksha as an Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist Voksha helps small businesses in Miami-Dade, Broward, and West Palm Beach capture every lead and stop losing customers to missed calls.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Voksha, intelligent receptionist, AI receptionist, lead capture, missed calls, call answering, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://voksha.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/ai-receptionist" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Do I have to change my phone number?", "acceptedAnswer": {"@type": "Answer", "text": "No, you keep your current business phone number. All you need to do is set up call forwarding to a dedicated Voksha number."}},
                {"@type": "Question", "name": "How long does setup take?", "acceptedAnswer": {"@type": "Answer", "text": "Voksha can be up and running in under 5 minutes. You just create an account, upload your business knowledge base or URLs, set up the AI agent’s instructions, and forward your phone line."}},
                {"@type": "Question", "name": "Can the AI greeting and responses be customized?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you have full control over the greeting message, the tone and personality, and the instructions for handling different types of calls."}},
                {"@type": "Question", "name": "How fast does it respond?", "acceptedAnswer": {"@type": "Answer", "text": "Voksha answers on the first ring and keeps response times under 200 milliseconds."}},
                {"@type": "Question", "name": "Will callers know they are talking to an AI?", "acceptedAnswer": {"@type": "Answer", "text": "Voksha uses a natural-sounding voice. You can choose if it introduces itself as an AI at the start. If a caller asks directly, Voksha will answer honestly."}},
                {"@type": "Question", "name": "What happens if the call is too complex or the AI gets stuck?", "acceptedAnswer": {"@type": "Answer", "text": "If Voksha cannot resolve a question after two or three tries, it apologizes, collects the caller’s details for a callback, or transfers the call to your team with all the context."}},
                {"@type": "Question", "name": "Can Voksha book appointments directly?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but only on the Premium and Enterprise plans. Voksha connects with Google Calendar, Outlook, Calendly, and Acuity to book openings during the call."}},
                {"@type": "Question", "name": "How much does Voksha cost?", "acceptedAnswer": {"@type": "Answer", "text": "The Starter plan is $14 per month and includes 15 calls. The Premium plan is $99 per month and includes 150 calls plus calendar booking. Extra calls are $1 each."}},
                {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Voksha does not offer a free trial. Instead, small businesses in Miami-Dade, Broward and West Palm Beach counties can book a free demo call. After purchase, there is a 7-day money-back guarantee."}},
                {"@type": "Question", "name": "Are there surcharges for after-hours or busy times?", "acceptedAnswer": {"@type": "Answer", "text": "Voksha does not charge extra for after-hours, holidays, or busy periods. There are no per-minute fees or premiums. All calls are handled for a flat per-call rate, no matter when they come in."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Voksha", "intelligent receptionist", "AI receptionist", "lead capture", "missed calls", "call answering", "South Florida small business"],
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
        "Voksha offers an Intelligent Receptionist solution designed for small businesses in South Florida, ensuring every call is answered and every lead is captured efficiently.";
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
