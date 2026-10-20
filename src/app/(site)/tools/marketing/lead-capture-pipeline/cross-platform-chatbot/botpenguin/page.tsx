import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "BotPenguin";
const PAGE_TITLE = "BotPenguin as a Cross-Platform Chatbot";
const DESCRIPTION =
    "Cross-Platform Chatbot BotPenguin unifies chats from WhatsApp, Instagram, Facebook, SMS, and web for small businesses in Miami-Dade, Broward, and West Palm Beac";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin";
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
            "keywords": "BotPenguin, cross-platform chatbot, AI chatbot, lead capture, unified inbox, omnichannel messaging, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-botpenguin",
                "name": TITLE,
                "url": "https://botpenguin.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How quickly can we launch a financial services chatbot?", "acceptedAnswer": {"@type": "Answer", "text": "Launch time depends on how complex your workflows are, which channels you want to use, what integrations you need, and whether your content is ready. BotPenguin’s no-code setup and ready-made templates help financial teams in Miami-Dade, Broward, and West Palm Beach get up and running fast, without long development cycles."}},
                {"@type": "Question", "name": "Can BotPenguin integrate with our existing financial tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. BotPenguin supports over 100 integrations. This lets your financial team connect chat workflows with your CRM, business tools, and operational systems. You can keep your current processes, data flows, and handoffs in place."}},
                {"@type": "Question", "name": "Can we customize the chatbot for different financial workflows?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can set up separate flows for onboarding, lead qualification, document collection, service requests, appointment booking, and escalation. Each workflow can have its own routing rules, knowledge sources, and next steps, tailored to your financial services."}},
                {"@type": "Question", "name": "How are sensitive or complex client requests handled?", "acceptedAnswer": {"@type": "Answer", "text": "BotPenguin can route sensitive, complex, or advice-related conversations to your human team, keeping all the context. For larger deployments, you should review chatbot compliance for financial services to meet your regulatory needs."}},
                {"@type": "Question", "name": "Can one chatbot support multiple financial service teams?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. BotPenguin can serve lenders, NBFCs, accounting firms, advisory operations, and fintech teams. Each team can have its own workflows, knowledge sources, routing logic, and client journeys, while management stays centralized."}},
                {"@type": "Question", "name": "Can we use AI agents and voice alongside the chatbot?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can combine chatbots with AI agents and voice features for multi-step workflows, inbound calls, lead qualification, and routing. Regulated decisions, approvals, and financial advice can stay with your human team."}},
                {"@type": "Question", "name": "What support is available after launch?", "acceptedAnswer": {"@type": "Answer", "text": "You get dedicated support for setup, platform adoption, troubleshooting, and ongoing use. BotPenguin’s team can help you refine workflows, adjust automation, and maintain your chatbot as your financial services business grows or changes."}},
                {"@type": "Question", "name": "How does BotPenguin connect with my existing accounting software or CRM?", "acceptedAnswer": {"@type": "Answer", "text": "BotPenguin connects directly with major CRM platforms like Zoho CRM and HighLevel. For accounting tools such as QuickBooks Online or Xero, it uses native Zapier integrations. This setup lets the chatbot send lead details, payment questions, or scheduling data right into your financial pipeline, so you do not have to enter data by hand."}},
                {"@type": "Question", "name": "Can this bot handle billing inquiries or payment processing?", "acceptedAnswer": {"@type": "Answer", "text": "BotPenguin does not calculate complex tax metrics on its own, but it works as a smart front-end. It can guide customers through payment links, collect billing details, log support tickets for your accounting team, and update customer profiles through webhook connections to your payment gateways."}},
                {"@type": "Question", "name": "Which platforms can I actually use this chatbot on?", "acceptedAnswer": {"@type": "Answer", "text": "You can use BotPenguin on your Website, WhatsApp, Instagram, Facebook, and Telegram. All conversations from these channels go into one Unified Inbox, so your team does not need to check multiple apps to capture leads."}},
                {"@type": "Question", "name": "WhatsApp is huge for our local customer base in South Florida. Is BotPenguin verified?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. BotPenguin is an official Meta Business Partner for WhatsApp AI chatbot and Facebook solutions. Your business gets access to the official WhatsApp Business API, which means high message delivery, compliance, and use of official interactive messaging templates without risking account bans."}},
                {"@type": "Question", "name": "Do I need a programmer on staff to set up or maintain these AI workflows?", "acceptedAnswer": {"@type": "Answer", "text": "No. BotPenguin uses a no-code flow builder. You can build, train, and launch chat or voice workflows with a visual drag-and-drop tool. Geek @ Your Spot LLC can set up the initial system, and your staff can handle daily updates or view analytics without any coding."}},
                {"@type": "Question", "name": "What are the upfront costs to test this out for my business?", "acceptedAnswer": {"@type": "Answer", "text": "There is a Free Forever Plan that does not require a credit card. This lets you build a proof-of-concept, test the chatbot on your website or social channels, and see real lead generation results before you decide to upgrade."}},
                {"@type": "Question", "name": "What happens if a customer query is too complex for the AI agent?", "acceptedAnswer": {"@type": "Answer", "text": "BotPenguin has built-in Live Chat and fallback options. If the AI faces a complex accounting question, a disputed invoice, or a high-value sales lead, it quickly routes the chat to a human team member through the unified inbox or mobile app. This way, no customer gets left waiting."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["BotPenguin", "cross-platform chatbot", "AI chatbot", "lead capture", "unified inbox", "omnichannel messaging", "South Florida small business"],
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
        "BotPenguin helps South Florida small businesses capture and manage leads efficiently by unifying every chat channel into a single, organized workflow.";
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
