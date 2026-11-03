import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import LedeSection from "@/components/use-cases/business-operations/front-desk/lede-section";
import ReceptionistSection from "@/components/use-cases/business-operations/front-desk/receptionist-section";
import ChatbotSection from "@/components/use-cases/business-operations/front-desk/chatbot-section";
import ChoosingSection from "@/components/use-cases/business-operations/front-desk/choosing-section";
import LaunchSection from "@/components/use-cases/business-operations/front-desk/launch-section";
import SetupSection from "@/components/use-cases/business-operations/front-desk/setup-section";
import FAQSection from "@/components/use-cases/business-operations/front-desk/faq-section";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Front Desk";
const PAGE_DESCRIPTION =
    "AI front desk systems for South Florida small businesses: AI receptionists and AI chatbots that answer calls and messages, qualify leads, and book appointments in English and Spanish around the clock.";
const CANONICAL = "/use-cases/business-operations/front-desk";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": PAGE_TITLE,
            "description": PAGE_DESCRIPTION,
            "author": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "AI front desk, AI receptionist, AI chatbot, AI voice agent, lead capture, appointment booking, South Florida small business, Miami-Dade, Broward, Palm Beach",
            "mentions": [
                { "@type": "Thing", "name": "Dapta", "url": "https://dapta.ai/" },
                { "@type": "Thing", "name": "LobbyStack", "url": "https://lobbystack.com/" },
                { "@type": "Thing", "name": "My AI Front Desk", "url": "https://www.myaifrontdesk.com/" },
                { "@type": "Thing", "name": "Nextiva", "url": "https://www.nextiva.com/" },
                { "@type": "Thing", "name": "Smith.ai", "url": "https://smith.ai/" },
                { "@type": "Thing", "name": "Voksha", "url": "https://voksha.com/" },
                { "@type": "Thing", "name": "BotPenguin", "url": "https://botpenguin.com/" },
                { "@type": "Thing", "name": "Manychat", "url": "https://manychat.com/" },
                { "@type": "Thing", "name": "Tidio", "url": "https://www.tidio.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is an AI front desk?",
                    "acceptedAnswer": { "@type": "Answer", "text": "An AI front desk is a combination of voice and chat AI that handles your business’s inbound customer contacts without a human receptionist on duty. It answers phone calls, responds to website chat and social messages, qualifies leads, books appointments, and routes inquiries to the right person on your team, around the clock." }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between an AI receptionist and an AI chatbot?",
                    "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist is built for voice. It answers phone calls in natural language, captures caller details, and books appointments during a live call. An AI chatbot handles text channels: website chat, WhatsApp, Facebook Messenger, Instagram, and SMS. Some platforms, such as Dapta, cover both in one system, while others specialize in one channel and go deeper on it." }
                },
                {
                    "@type": "Question",
                    "name": "Do I need both an AI receptionist and a chatbot?",
                    "acceptedAnswer": { "@type": "Answer", "text": "It depends on how your customers reach you. If most of your inbound contacts are phone calls, start with an AI receptionist. If you field a mix of calls, WhatsApp messages, website chats, and social DMs, a platform that covers every channel is usually easier to run than a separate tool for each one." }
                },
                {
                    "@type": "Question",
                    "name": "Can an AI front desk respond in Spanish?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every AI receptionist and chatbot platform covered here supports Spanish. For businesses serving the bilingual customers of Miami-Dade, Broward, and Palm Beach, that is a requirement rather than an option." }
                },
                {
                    "@type": "Question",
                    "name": "How does an AI front desk connect to my calendar and CRM?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Most AI front desk platforms connect to Google Calendar, Outlook, and Calendly for booking, and to popular CRM platforms for contact records. When the AI qualifies a lead or books an appointment, the details go to your CRM and your calendar automatically, so your team starts every follow-up with the full context." }
                },
                {
                    "@type": "Question",
                    "name": "What happens when the AI cannot handle a request?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Every platform covered here includes handover rules. When the AI detects that a caller or a chat contact needs a person, it transfers the call or sends your team a notification with a summary of the conversation, so the customer does not have to repeat themselves." }
                }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        keywords: [
            "AI front desk",
            "AI receptionist",
            "AI chatbot",
            "AI voice agent",
            "lead capture",
            "appointment booking",
            "South Florida small business",
            "Miami-Dade AI automation",
            "Broward business automation",
            "West Palm Beach lead capture",
        ],
        authors: [{ name: "Jeff Martin" }],
        creator: "Geek @ Your Spot LLC",
        publisher: "Geek @ Your Spot LLC",
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: PAGE_URL,
            siteName: "Geek @ Your Spot LLC",
            locale: "en_US",
            type: "website",
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
    };
};

export default async function Page() {
    const heroSummary =
        "Your phone line, website chat, and social inboxes are where customers decide whether to do business with you. An AI front desk answers all of them in English and Spanish, every hour of the day.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ReceptionistSection />
                <ChatbotSection />
                <ChoosingSection />
                <LaunchSection />
                <SetupSection />
                <FAQSection />
                <SchedulerShell />
            </article>
        </>
    );
}
