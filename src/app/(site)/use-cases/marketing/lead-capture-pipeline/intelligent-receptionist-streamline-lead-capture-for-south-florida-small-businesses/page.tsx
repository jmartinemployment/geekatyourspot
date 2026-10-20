import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/roles-section";
import RightFitSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/preparing-section";
import PAASection from "@/components/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Intelligent Receptionist";
const DESCRIPTION =
    "Intelligent Receptionist solutions for South Florida small businesses: automate lead capture, qualify prospects, and reduce missed opportunities with AI.";
const CANONICAL = "/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/marketing/lead-capture-pipeline/intelligent-receptionist`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek @ Your Spot LLC",
                "logo": { "@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg" }
            },
            "datePublished": "2026-10-15T19:43:46.5005360Z",
            "dateModified": "2026-10-15T19:43:46.5005360Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Intelligent Receptionist, Lead Capture Pipeline, AI receptionist, South Florida small business, Miami-Dade AI automation, Broward business automation, West Palm Beach lead capture, Smart chatbots for marketing, Lead scoring AI, Voice assistant automation",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/lobbystack#software` },
                { "@id": `${TOOLS_BASE}/myaifrontdesk#software` },
                { "@id": `${TOOLS_BASE}/nextiva#software` },
                { "@id": `${TOOLS_BASE}/smith#software` },
                { "@id": `${TOOLS_BASE}/voksha#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is the actual difference between an AI Receptionist and a traditional Auto-Attendant (IVR)?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional auto-attendants are fixed phone menus that make callers press numbers to get routed. They cannot answer questions or handle anything outside their script. An Intelligent AI Receptionist uses natural language, so callers just speak normally. The AI understands the request, checks a custom knowledge base, answers questions right away, and can update calendars or CRMs during the call."}},
                {"@type": "Question", "name": "Can an AI receptionist actually write data and book appointments on my existing calendar?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Leading AI receptionists connect directly with Google Calendar, Outlook, Calendly, and many industry CRMs. The AI checks your real-time availability, offers callers open times, collects their details, and books the appointment on your calendar automatically, no human steps needed."}},
                {"@type": "Question", "name": "What happens when a call genuinely needs a human, and how fast does the handoff happen?", "acceptedAnswer": {"@type": "Answer", "text": "The AI system includes a built-in escalation process. You or your consultant can set rules for when a human needs to step in, such as if the caller is upset, asks for a manager, or uses a key emergency word. When this happens, the platform either transfers the call live or sends you an instant SMS with a summary, so you can pick up right where the AI left off."}},
                {"@type": "Question", "name": "Do I need to buy new hardware, install new phone lines, or switch my business phone number?", "acceptedAnswer": {"@type": "Answer", "text": "No extra equipment or phone lines are needed. The setup uses cloud-based call forwarding. You keep your current business number. When your line is busy, not answered after a few rings, or off-hours, calls are automatically routed to the AI receptionist using a secure background number."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Intelligent Receptionist", "Lead Capture Pipeline", "AI receptionist", "South Florida small business", "Miami-Dade AI automation", "Broward business automation", "West Palm Beach lead capture", "Smart chatbots for marketing", "Lead scoring AI", "Voice assistant automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Stop missing leads and free up your team. An Intelligent Receptionist automates first contact, qualifies prospects, and routes inquiries, so you close more deals with less effort.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
