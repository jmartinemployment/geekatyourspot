import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "My AI Front Desk";
const PAGE_TITLE = "My AI Front Desk as a Cross-Platform Chatbot";
const DESCRIPTION =
    "Cross-Platform Chatbot My AI Front Desk unifies chats, texts, and calls for small businesses in Miami-Dade, Broward and West Palm Beach. Capture every lead.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk";
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
            "keywords": "My AI Front Desk, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-my-ai-front-desk",
                "name": TITLE,
                "url": "https://www.myaifrontdesk.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Can the AI respond to inbound SMS messages?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. My AI Front Desk’s AI can handle two-way SMS conversations just like it does with website chat. This means your customers can text your business and get real answers, not just canned replies."}},
                {"@type": "Question", "name": "Do SMS conversations appear in the same inbox as web chats?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All your messages from SMS, website chat, Facebook, and Instagram show up together in the Unified Inbox. This saves you time and keeps you organized, no more jumping between apps."}},
                {"@type": "Question", "name": "Does it work over the phone and in chat?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The same AI handles phone calls, SMS, email, and website chat. It keeps track of the conversation across all channels, so your customers get a smooth experience no matter how they reach out."}},
                {"@type": "Question", "name": "Can it book appointments?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The AI checks your schedule and books appointments live during the conversation. It also logs the booking in your CRM, so you never miss a lead."}},
                {"@type": "Question", "name": "Do I need engineers?", "acceptedAnswer": {"@type": "Answer", "text": "No. My AI Front Desk is designed for small businesses. You can get it running in about 30 minutes with no coding or technical help needed."}},
                {"@type": "Question", "name": "Does Frontdesk respond to Instagram story replies?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The AI can reply to both direct messages and replies to your Instagram stories, so you never miss a chance to connect with leads."}},
                {"@type": "Question", "name": "Where do Instagram conversations appear?", "acceptedAnswer": {"@type": "Answer", "text": "Instagram messages show up in the Unified Inbox, right alongside your website chat, Facebook Messenger, and SMS conversations. This keeps everything in one place for your team."}},
                {"@type": "Question", "name": "What is AI auto-reply software?", "acceptedAnswer": {"@type": "Answer", "text": "AI auto-reply software answers incoming messages with real, accurate replies instead of a generic line. My AI Front Desk auto-replies on Instagram, Messenger, WhatsApp, SMS, email, and even missed calls. It also qualifies leads and syncs them to your CRM to help you follow up faster."}},
                {"@type": "Question", "name": "How is this different from a basic away message?", "acceptedAnswer": {"@type": "Answer", "text": "A basic away message just sends the same reply to everyone and ends the chat. My AI Front Desk’s AI answers the customer’s actual question, asks follow-up questions, and can even book appointments, so you keep the conversation going and capture more leads."}},
                {"@type": "Question", "name": "Which channels can it auto-reply on?", "acceptedAnswer": {"@type": "Answer", "text": "My AI Front Desk can auto-reply on Instagram DMs, Facebook Messenger, WhatsApp, SMS, email, website chat, and even missed calls. One AI covers all your main channels."}},
                {"@type": "Question", "name": "Will the replies be accurate?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The AI uses your own knowledge base, so details like hours, pricing, and policies stay correct and up to date."}},
                {"@type": "Question", "name": "Can a person take over?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Any teammate can step in and take over a conversation at any time. When you are ready, the AI can pick up where you left off. This gives you full control and peace of mind."}},
                {"@type": "Question", "name": "What exactly is the Frontdesk AI \"brain\" and how does it work?", "acceptedAnswer": {"@type": "Answer", "text": "The Frontdesk AI \"brain\" is a shared-memory context layer that connects all communication channels like Voice, SMS, WhatsApp, Web Chat, and Email. When a customer interacts with the business, the platform pulls out structured data such as intent, sentiment, and any custom fields set up in plain English. This unified memory means the AI always knows who the customer is and what they discussed, even if they switch from a phone call to a text message."}},
                {"@type": "Question", "name": "Can a business keep its existing South Florida phone number?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, businesses can keep their current numbers. They just set up call-forwarding from their landline or VoIP provider to Frontdesk AI. The AI then manages unlimited calls at any time, so customers never get sent to voicemail, even during busy or after-hours periods."}},
                {"@type": "Question", "name": "How does Frontdesk AI integrate with a business's existing software stack?", "acceptedAnswer": {"@type": "Answer", "text": "Frontdesk AI comes with its own AI-powered CRM, but it can also sync data to your current systems. It uses Zapier and direct API connections for automation. For high-volume or enterprise needs, the team builds custom integrations that map data directly to specialized systems like Property Management Systems, CRMs, or data lakes."}},
                {"@type": "Question", "name": "Is the platform secure enough to handle sensitive customer or financial data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, the platform is enterprise-grade and HIPAA-compliant. It signs Business Associate Agreements, encrypts data in transit and at rest, and uses strict access controls. For extra-sensitive work, businesses can even run the AI models locally so no conversational data leaves their own secure environment."}},
                {"@type": "Question", "name": "What happens if the AI encounters a complex question or billing issue it can't answer?", "acceptedAnswer": {"@type": "Answer", "text": "Frontdesk AI uses enterprise-grade escalation. If it gets a question outside its scope, it triggers a real-time handoff to a human. A supervisor gets the full conversation transcript, or the AI can start a live warm-transfer to an office staff member."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["My AI Front Desk", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
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
        "My AI Front Desk streamlines every customer message from chat, text, and social media into a single, easy-to-manage view. Designed for South Florida businesses, it ensures no lead slips through the cracks.";
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
