import type { Metadata } from "next";
import Link from "next/link";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Dapta";
const PAGE_TITLE = "Dapta as an AI Receptionist";
const DESCRIPTION =
    "Dapta handles inbound calls, web chat, WhatsApp, and social DMs from one AI platform, so small businesses in South Florida never miss a lead regardless of how a customer reaches out.";
const CANONICAL = "/tools/business-operations/ai-receptionist/dapta";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const SITE_URL = "https://geekatyourspot.com";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Dapta, AI receptionist, voice AI, inbound calls, omnichannel AI, South Florida small business",
            "author": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://dapta.ai/",
                "subjectOf": { "@type": "Article", "url": `${SITE_URL}/use-cases/business-operations/ai-receptionist` }
            },
            "mentions": [
                { "@type": "Thing", "name": "LobbyStack", "url": "https://lobbystack.com/" },
                { "@type": "Thing", "name": "My AI Front Desk", "url": "https://www.myaifrontdesk.com/" },
                { "@type": "Thing", "name": "Nextiva", "url": "https://www.nextiva.com/" },
                { "@type": "Thing", "name": "Smith.ai", "url": "https://smith.ai/" },
                { "@type": "Thing", "name": "Voksha", "url": "https://voksha.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Does Dapta handle inbound phone calls as well as chat?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Dapta covers both voice and text channels from one platform. It answers inbound calls, responds to web chat, handles WhatsApp and Facebook Messenger, and routes every inquiry through the same AI logic and knowledge base."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Dapta qualify leads during a call?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dapta uses conversational AI to ask qualification questions naturally, collect contact details, identify service interest and urgency, and score the inquiry before routing it to your team or booking an appointment directly on your calendar."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Dapta respond in Spanish?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Dapta supports multilingual conversations including English and Spanish, which is essential for small businesses serving South Florida customers across Miami-Dade, Broward, and Palm Beach counties."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Dapta connect to my existing CRM and calendar?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dapta integrates with Google Calendar, Outlook, and popular CRM platforms. When the AI qualifies a lead or books an appointment, the contact record and conversation summary are pushed directly to your CRM without manual data entry."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens when a caller needs a live person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dapta detects escalation signals like urgency, frustration, or requests for a manager and transfers the call or sends your team an immediate notification with a full conversation summary so the handoff is seamless."
                    }
                }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Dapta", "AI receptionist", "voice AI", "inbound calls", "omnichannel AI", "South Florida small business"],
        authors: [{ name: "Jeff Martin" }],
        creator: "Geek @ Your Spot LLC",
        publisher: "Geek @ Your Spot LLC",
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: "Geek @ Your Spot LLC",
            locale: "en_US",
            type: "website",
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: PAGE_TITLE,
            description: DESCRIPTION,
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
        "Dapta answers calls, chats, and messages from one AI platform so your South Florida business captures every lead, in English or Spanish, around the clock.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <article>

                <section className="min-h-screen bg-[#023059] text-white py-5">
                    <div className="container">
                        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    What Dapta Does as a Receptionist
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Most small businesses route inbound calls through a phone system and inbound messages through a separate inbox. When volume picks up, one of those channels gets ignored. A call goes to voicemail while your team answers a chat. A WhatsApp message sits unread while someone is on the phone. The lead who reached out first ends up waiting longest, and they do not wait.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta puts every inbound channel on the same AI platform. Whether a customer calls your business line, opens your website chat widget, sends a WhatsApp message, or slides into Facebook Messenger, the same AI handles the conversation with the same knowledge base and the same qualification logic. No channel gets deprioritized. No lead falls into a separate inbox to be found hours later.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    For small businesses in Miami-Dade, Broward, and Palm Beach, Dapta fills the gap between a full-time receptionist and a phone tree. It answers every call in natural conversational language, in English or Spanish, qualifies the prospect, books appointments directly to your calendar, and pushes the contact record to your CRM before your team ever has to pick up the phone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#024059] text-white py-5">
                    <div className="container">
                        <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    How Dapta Handles Inbound Calls
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    When a call comes in, Dapta answers on the first ring with a greeting customized to your business. The AI uses natural language processing to understand what the caller needs, answers questions from your knowledge base, and moves the conversation toward a qualifying action: booking an appointment, collecting contact details, or routing the call to a specific team member.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    The AI handles parallel calls simultaneously, so a busy signal is never the reason a prospect calls a competitor. Every call is recorded and transcribed. Summaries are sent to your team in real time so you always know what was discussed, what was promised, and what follow-up is needed without listening to recordings.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    When a caller asks something outside the AI's knowledge or shows signals that they need a live person, Dapta transfers the call immediately with a full context summary handed off to your team. The handoff is seamless from the caller's side.
                                </p>
                                <ul className="text-base text-white shadow-text list-disc list-outside pl-4 space-y-2 pt-3">
                                    <li>Answers calls in English and Spanish with a custom greeting and business-specific knowledge base.</li>
                                    <li>Handles unlimited parallel calls so no caller reaches a busy signal.</li>
                                    <li>Qualifies prospects and books appointments to your live calendar during the call.</li>
                                    <li>Sends real-time call summaries so your team has full context without listening to recordings.</li>
                                    <li>Transfers calls to a live team member with full context when escalation is needed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen bg-[#025E73] text-white py-5">
                    <div className="container">
                        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    Voice and Chat in One Platform
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta's receptionist capability is part of a broader unified platform. The same AI that answers calls also responds to web chat, WhatsApp, and Facebook Messenger using the same centralized knowledge base. This means a prospect who first messages you on Instagram and then calls an hour later is recognized as the same contact. Your team sees the complete interaction history in one place rather than piecing it together from separate apps.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    For businesses in South Florida where customers expect to reach you through multiple channels, this coverage matters. A customer who calls after hours, sends a WhatsApp message at noon, and fills out your website contact form the next morning should get one seamless experience, not three disconnected conversations. Dapta maintains that continuity automatically.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    This also means your team spends less time copying information between apps. A lead captured in web chat goes into the same CRM record as the follow-up call. Appointment bookings from any channel sync to the same calendar. There is one source of truth for every contact regardless of how they first reached out.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    Channels Dapta Covers
                                </h3>
                                <ul className="text-base text-white shadow-text list-disc list-outside pl-4 space-y-2 pt-3">
                                    <li>Inbound phone calls with natural language voice AI and live transfer capability.</li>
                                    <li>Website chat widget with instant AI responses and lead capture.</li>
                                    <li>WhatsApp for customers who prefer mobile messaging.</li>
                                    <li>Facebook Messenger and Instagram DMs for social channel coverage.</li>
                                    <li>SMS for businesses that field text inquiries from prospects or customers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#023059] text-white py-5">
                    <div className="container">
                        <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    CRM and Calendar Integrations
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta connects to Google Calendar and Outlook so the AI can check your real-time availability and book appointments during a call or chat without your team having to touch the schedule. Every booking lands on the correct calendar with the customer's contact details and a conversation summary attached.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    For CRM integrations, Dapta pushes qualified lead records directly into your system. Contact name, phone number, email, service interest, and a summary of the conversation are all captured automatically. Your team starts follow-up with full context rather than a name and a phone number and nothing else.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Geek @ Your Spot LLC configures these integrations as part of every Dapta deployment for South Florida small businesses. The goal is a system where a lead captured at 11pm on a Saturday is in your CRM with a booked appointment before your team arrives Monday morning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#024059] text-white py-5">
                    <div className="container">
                        <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    How Dapta Compares to Dedicated Voice Receptionists
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Tools like LobbyStack, My AI Front Desk, Nextiva, Smith.ai, and Voksha are purpose-built for voice and phone answering. They go deeper on call routing, voicemail management, and phone-specific workflows. If your primary gap is missed calls and your business runs mostly on the phone, a dedicated voice receptionist may be the sharper fit.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta is the right choice when your inbound volume is split across multiple channels and you want one AI platform to cover all of them. If you are fielding calls, chats, WhatsApp messages, and social DMs and your team is currently managing each in a separate app, Dapta solves the fragmentation problem that a voice-only tool cannot.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    For South Florida businesses where customers reach out in Spanish on WhatsApp, in English via website chat, and by phone in the same hour, Dapta's unified coverage is often the deciding factor. See the full set of{" "}
                                    <Link
                                        id="tools-business-operations-ai-receptionist-dapta-comparing-receptionist-tools"
                                        href="/use-cases/business-operations/ai-receptionist"
                                        className="text-[#C83803] hover:underline"
                                    >
                                        AI Receptionist tools
                                    </Link>{" "}
                                    to compare options for your specific situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#025E73] text-white py-5">
                    <div className="container">
                        <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    How We Set It Up
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    A Dapta deployment starts with a review of your current inbound channels: which ones you use, how inquiries are currently handled, where leads are being lost, and what your team needs to see in order to follow up effectively. From there, we build the AI knowledge base, configure the qualification logic, and connect Dapta to your calendar and CRM.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Call forwarding is set up so your existing business number routes to Dapta when your line is unanswered, busy, or outside business hours. You keep your number. Customers reach the AI without knowing it is not a human staff member answering.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    We run a pilot phase where the AI handles a defined set of inbound inquiries and your team reviews the results. Qualification accuracy, appointment booking rates, and escalation handling are all verified before the system goes live at full volume. Book a consultation below to talk through whether Dapta fits your current setup.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <SchedulerShell />
            </article>
        </>
    );
}
