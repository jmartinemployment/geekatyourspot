import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Manychat";
const DESCRIPTION =
    "Cross-Platform Chatbot Manychat helps small businesses unify chats and automate lead capture across Instagram, WhatsApp and Messenger in South Florida.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat";
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
            "keywords": "Manychat, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-smb-implementation-guide"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Will using Manychat get my business account banned or flagged by Meta?", "acceptedAnswer": {"@type": "Answer", "text": "No. Manychat is an official Meta Business Partner and uses Meta’s official Graph APIs. This means it is fully compliant with the terms of service for Instagram, Facebook Messenger, and WhatsApp. Unlike unauthorized tools, it will not hurt your organic reach or risk your account being suspended."}},
                {"@type": "Question", "name": "Do I need a personal account or a business account to use this?", "acceptedAnswer": {"@type": "Answer", "text": "Manychat requires an Instagram Business or Creator account, a Facebook Business Page, or a WhatsApp Business account. It cannot be used with personal profiles or private Facebook Groups because Meta only allows messaging automation for commercial entities."}},
                {"@type": "Question", "name": "Can Manychat intelligently answer complex customer questions without rigid keywords?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Manychat uses integrated Intent Recognition and native AI Steps. It can understand a customer’s intent, not just exact keywords. For example, if someone asks about shipping costs or free delivery to Miami, Manychat recognizes the intent and responds with the right answer automatically."}},
                {"@type": "Question", "name": "What happens if a customer wants to speak to a real human?", "acceptedAnswer": {"@type": "Answer", "text": "The automation pauses right away and hands the conversation to the Live Chat inbox. You can set it up so that certain questions or a customer clicking an 'Agent' button will send the chat to a live team member through the Manychat Help Dashboard. Your team can also get notifications on their smartphones using the Manychat mobile app."}},
                {"@type": "Question", "name": "Does Manychat link directly to my accounting software (QuickBooks Online, Xero, etc.)?", "acceptedAnswer": {"@type": "Answer", "text": "Manychat connects through middleware tools like Zapier or Make, and also supports native webhooks. While it does not have a direct button for QuickBooks, it lets you capture customer details in a chat flow and push that data to integrations like Google Sheets. You can then trigger a workflow to create a client profile or estimate in your accounting system automatically."}},
                {"@type": "Question", "name": "Can customers make purchases directly inside the chat window?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Manychat supports buy buttons with secure payment processors. On channels like Facebook Messenger, you can connect Stripe or PayPal Business accounts to message blocks. This lets your business process payments securely in the chat flow, while capturing customer data and generating transactions at the same time."}},
                {"@type": "Question", "name": "How is Manychat priced, and what happens if I get a sudden spike in traffic?", "acceptedAnswer": {"@type": "Answer", "text": "Pricing is based on the number of Active Contacts in your database. Plans start with a baseline subscription. If your business gets a viral spike or seasonal growth, Manychat does not shut down. It scales automatically and applies small overage fees for extra active contacts during that billing cycle."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Manychat", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
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
        "Manychat unifies your customer chats across multiple platforms, helping local small businesses automate responses, capture leads and keep every conversation on track.";
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
