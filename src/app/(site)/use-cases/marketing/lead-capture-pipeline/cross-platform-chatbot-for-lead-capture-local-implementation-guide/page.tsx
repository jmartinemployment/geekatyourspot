import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/roles-section";
import RightFitSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/preparing-section";
import PAASection from "@/components/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { pillarService } from "@/lib/seo/organization";

const TITLE = "Cross-Platform Chatbot Setup Guide";
const DESCRIPTION =
    "Cross-Platform Chatbot solutions help small businesses in Miami-Dade, Broward, and West Palm Beach capture more leads and automate follow-ups efficiently.";
const CANONICAL = "/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-16T16:34:08.2438979Z",
            "dateModified": "2026-10-16T16:34:08.2438979Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Cross-Platform Chatbot, Lead Capture Pipeline, AI Chatbot Implementation, Miami small business automation, Smart Chatbots for Marketing, Lead Scoring AI, Voice Assistant integration, BotPenguin, Manychat, My AI Front Desk",
            "@id": `${PAGE_URL}#article`,
            "about": { "@id": `${PAGE_URL}#service` },
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": "https://geekatyourspot.com/#software-botpenguin" },
                { "@id": "https://geekatyourspot.com/#software-dapta" },
                { "@id": "https://geekatyourspot.com/#software-manychat" },
                { "@id": "https://geekatyourspot.com/#software-my-ai-front-desk" },
                { "@id": "https://geekatyourspot.com/#software-tidio" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Does it actually talk to people across different apps, or do I have to build separate bots for everything?", "acceptedAnswer": {"@type": "Answer", "text": "You only need to build your chatbot logic once. The cross-platform AI engine acts as a unified brain, using the same centralized knowledge base for every channel. Whether a lead contacts you on your website, Instagram, or WhatsApp, the AI responds with the same information and process. You do not have to manage different bots for each app, your inbound messages are unified into one automated pipeline."}},
                {"@type": "Question", "name": "What is a cross-platform lead-capture chatbot?", "acceptedAnswer": {"@type": "Answer", "text": "A cross-platform lead-capture chatbot is one AI assistant that works on many channels your prospects use: website chat, SMS, WhatsApp, Instagram, Facebook Messenger, and sometimes voice. It can engage new leads, collect their details, qualify them, and send their info to your CRM and calendar. The big advantage is that all customer history and context follow them across channels, so you are not stuck checking separate inboxes."}},
                {"@type": "Question", "name": "How does it help capture leads?", "acceptedAnswer": {"@type": "Answer", "text": "The chatbot answers common questions, asks what visitors need, collects their contact details, and guides them to a next step like booking a consultation or asking for a callback."}},
                {"@type": "Question", "name": "Do I need a developer to set this up?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need a developer for basic setup. Most cross-platform chatbots (like Manychat, Tidio, or MobileMonkey) use no-code, drag-and-drop builders, so you can set them up in under an hour. If you want advanced integrations, like connecting to your CRM or payment system, a developer can help."}},
                {"@type": "Question", "name": "How does a chatbot actually separate qualified buyers from tire-kickers?", "acceptedAnswer": {"@type": "Answer", "text": "Chatbots use conditional logic or BANT metrics, Budget, Authority, Need, Timeline, to qualify leads. They do this by asking the right questions in a natural conversation and evaluating the answers in real time."}},
                {"@type": "Question", "name": "What questions should the bot ask?", "acceptedAnswer": {"@type": "Answer", "text": "What service or product are you interested in? Are you located within our service area? How soon do you need this handled? What is your approximate budget or project scope? Are you the decision-maker, or should we include someone else? What is the best phone number or email for follow-up?"}}
            ]
        },
        pillarService({ url: PAGE_URL, name: "Cross-Platform Chatbot", description: DESCRIPTION })
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Cross-Platform Chatbot", "Lead Capture Pipeline", "AI Chatbot Implementation", "Miami small business automation", "Smart Chatbots for Marketing", "Lead Scoring AI", "Voice Assistant integration", "BotPenguin", "Manychat", "My AI Front Desk"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
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
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Struggling with missed leads and slow follow-ups? See how a cross-platform chatbot can capture and qualify leads around the clock, without adding staff.";
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
