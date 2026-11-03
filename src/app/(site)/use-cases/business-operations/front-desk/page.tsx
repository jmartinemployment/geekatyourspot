import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Front Desk";
const PAGE_DESCRIPTION =
    "AI Front Desk solutions for South Florida small businesses: AI-powered voice receptionists and cross-platform chatbots that answer calls, capture leads, book appointments, and respond to messages around the clock.";
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
            "keywords": "AI front desk, intelligent receptionist, cross-platform chatbot, AI voice receptionist, lead capture, appointment booking, South Florida small business, Miami-Dade, Broward, Palm Beach",
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
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI front desk is a combination of voice and chat AI systems that handle your business's inbound customer contacts without a human receptionist on duty. It answers phone calls, responds to web chat and social messages, qualifies leads, books appointments, and routes inquiries to the right person on your team. For small businesses in South Florida, it means your front-line customer contact runs around the clock without staffing costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between an AI receptionist and an AI chatbot?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An AI receptionist is built for voice: it answers phone calls in natural language, handles call routing, captures caller details, and books appointments during a live call. An AI chatbot handles text-based channels: website chat, WhatsApp, Facebook Messenger, Instagram DMs, and SMS. Some platforms like Dapta cover both voice and text in one system. Others specialize in one channel, which often means deeper capability for that specific channel."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need both an AI receptionist and a chatbot?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on how your customers reach you. If most of your inbound volume is phone calls and a small portion is web chat or social messages, start with an AI receptionist. If you field a mix of calls, WhatsApp messages, website chats, and social DMs, a platform that covers all channels is usually more efficient than running separate tools for each."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can an AI front desk respond in Spanish?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. All of the AI receptionist and chatbot platforms covered here support Spanish. For small businesses serving South Florida's bilingual customer base across Miami-Dade, Broward, and Palm Beach, this is a baseline requirement rather than an optional feature."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does an AI front desk connect to my calendar and CRM?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most AI front desk platforms integrate with Google Calendar, Outlook, and Calendly for appointment booking, and with popular CRM platforms for contact capture. When the AI qualifies a lead or books an appointment, the details are pushed to your CRM and calendar automatically. Your team starts every follow-up with full context already in place."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens when the AI cannot handle a request?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every platform covered here includes escalation logic. When the AI detects that a caller or chat contact needs a live person, it transfers the call or sends your team an immediate notification with a conversation summary. The handoff is fast and the customer does not have to repeat their situation."
                    }
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
            "intelligent receptionist",
            "cross-platform chatbot",
            "AI voice receptionist",
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
        "Your front desk is the first impression every customer gets. AI voice receptionists and cross-platform chatbots keep that impression consistent, 24 hours a day, without adding staff.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>

                <section className="min-h-screen bg-[#025E73] text-white py-5">
                    <div className="container">
                        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    What an AI Front Desk Does for Your Business
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Every missed call is a lead that goes to a competitor. Every unanswered chat message is a customer who decides you are not responsive enough to earn their business. Small businesses in South Florida field inbound contacts from phone, website chat, WhatsApp, Instagram, and Facebook Messenger, often all at once, often outside business hours. A human front desk cannot cover all of that consistently, and most small businesses cannot afford to staff it around the clock.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    An AI front desk closes that gap. It answers inbound calls in natural conversational language, responds to chat and social messages instantly, qualifies prospects, books appointments to your live calendar, and pushes contact records to your CRM without any manual work from your team. The coverage runs 24 hours a day, in English and Spanish, across every channel your customers use.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Geek @ Your Spot LLC sets up AI front desk systems for small businesses across Miami-Dade, Broward, and Palm Beach counties. The work covers two use cases: an{" "}
                                    <Link
                                        id="use-cases-ai-operations-ai-front-desk-intro-receptionist"
                                        href="/use-cases/business-operations/ai-receptionist"
                                        className="text-[#C83803] hover:underline"
                                    >
                                        AI Receptionist
                                    </Link>{" "}
                                    for inbound phone calls and an{" "}
                                    <Link
                                        id="use-cases-ai-operations-ai-front-desk-intro-chatbot"
                                        href="/use-cases/business-operations/ai-chatbot"
                                        className="text-[#C83803] hover:underline"
                                    >
                                        AI Chatbot
                                    </Link>{" "}
                                    for chat and social messaging, deployed together or separately depending on where your business is losing the most contacts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#023059] text-white py-5">
                    <div className="container">
                        <div className="grid grid-cols-12 place-items-start gap-x-4 py-10">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    The Phone Problem: Missed Calls Cost Real Money
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Picture a Thursday afternoon. Your best technician is out on a job, your front desk is catching up on paperwork, and a high-value prospect calls. The call goes to voicemail. By the time anyone notices the missed message, that caller is already booked with a competitor down the street.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    That is not one lost sale. It is a pattern. Every call that slips through costs you the lead, wastes the marketing spend that brought them in, and hands a paying customer to a competitor who answered. Callers rarely leave voicemails, and most will not try a second time.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    An{" "}
                                    <Link
                                        id="use-cases-ai-operations-ai-front-desk-phone-receptionist"
                                        href="/use-cases/business-operations/ai-receptionist"
                                        className="text-[#C83803] hover:underline"
                                    >
                                        AI Receptionist
                                    </Link>{" "}
                                    answers every call on the first ring. It greets callers in natural language, answers questions from your business knowledge base, qualifies the prospect, and books appointments directly to your calendar. Calls are handled in English or Spanish. Parallel calls are answered simultaneously so no caller ever reaches a busy signal. When a caller needs a live person, the AI transfers the call with a full context summary so your team does not start from scratch.
                                </p>
                                <ul className="text-base text-white shadow-text list-disc list-outside pl-4 space-y-2 pt-3">
                                    <li>Every inbound call answered on the first ring, 24 hours a day.</li>
                                    <li>Natural language conversation in English and Spanish, on brand for your business.</li>
                                    <li>Lead qualification and appointment booking during the call, with calendar sync.</li>
                                    <li>Real-time call summaries pushed to your team so follow-up starts with full context.</li>
                                    <li>Seamless escalation to a live person when the situation calls for it.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen bg-[#024059] text-white py-5">
                    <div className="container">
                        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    Top AI Receptionist Tools
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    These platforms handle inbound calls with AI voice technology, covering everything from appointment booking to lead qualification and after-hours coverage.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/dapta"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Dapta
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta covers inbound phone calls and text-based channels from one AI platform. The same knowledge base and qualification logic handles calls, website chat, WhatsApp, and social messages simultaneously. For businesses where customers reach out across multiple channels in the same hour, Dapta is the option that eliminates fragmentation without running separate tools for each channel.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/lobbystack"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        LobbyStack
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    LobbyStack is purpose-built for voice reception and front-desk automation. It handles inbound calls, visitor check-in, and staff notifications with a system designed for businesses that see both walk-in traffic and phone inquiries. For service businesses and professional offices managing a physical location alongside phone volume, LobbyStack covers both layers of the front-desk problem.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/myaifrontdesk"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        My AI Front Desk
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    My AI Front Desk, now rebranded as Frontdesk, is a voice AI receptionist built specifically for small businesses. It answers calls, qualifies prospects, books appointments to live calendars, and sends lead summaries to your CRM via Zapier. The setup is self-serve and takes minutes. For small businesses that need fast deployment and straightforward phone coverage without a complex integration project, it is a reliable starting point.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/nextiva"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Nextiva
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Nextiva combines a business phone system with AI-powered call handling, voicemail transcription, and customer interaction tracking. It is built for businesses that want a full communications platform rather than a standalone receptionist add-on. Nextiva is the right choice when your business needs phone, team messaging, and customer communication history consolidated into one system.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/smith"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Smith.ai
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Smith.ai pairs AI call handling with live human agents who step in when a call needs genuine human judgment. The hybrid model means complex calls get real people while routine calls are handled automatically. For businesses where call quality and customer experience on the phone are critical, Smith.ai's blended approach reduces the risk of AI limitations affecting high-stakes conversations.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/intelligent-receptionist/voksha"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Voksha
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Voksha is an AI voice assistant built for inbound sales calls and appointment scheduling. It qualifies callers using natural conversation, captures their intent and contact details, and books time on your calendar. Voksha is designed for businesses where the inbound call is the beginning of a sales process, not just an inquiry to be logged.
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
                                    The Messaging Problem: Scattered Inboxes Lose Leads
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    A customer asks for pricing in a Facebook DM while you are serving someone at the counter. Another sends a WhatsApp message about your hours. A third opens your website chat before lunch. By the end of the day you have five conversations running in five places, and none of them connect. One prospect gets a fast reply, another waits until the next day, and a third never hears back at all.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Every channel running as its own silo means context gets lost, responses get delayed, and the hottest prospects move to a competitor who answered first. When volume picks up or you step away, manual management of separate inboxes breaks down immediately.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    An{" "}
                                    <Link
                                        id="use-cases-ai-operations-ai-front-desk-messaging-chatbot"
                                        href="/use-cases/business-operations/ai-chatbot"
                                        className="text-[#C83803] hover:underline"
                                    >
                                        AI Chatbot
                                    </Link>{" "}
                                    stops that leak. One AI assistant answers instantly across every text channel your customers use. Every message, chat, and DM lands on a single timeline. The bot keeps track of who is talking, what they want, and what the next step is. It captures the lead, qualifies their intent, books appointments, and sends every detail to your CRM and calendar. No more hunting for context. No more missed callbacks from forgotten inboxes.
                                </p>
                                <ul className="text-base text-white shadow-text list-disc list-outside pl-4 space-y-2 pt-3">
                                    <li>Instant AI responses on website chat, WhatsApp, Facebook Messenger, Instagram, and SMS.</li>
                                    <li>Unified contact timeline so your team sees every conversation regardless of channel.</li>
                                    <li>Lead qualification using conversational logic that separates serious buyers from casual browsers.</li>
                                    <li>Appointment booking and CRM sync from every channel, automatically.</li>
                                    <li>Bilingual responses so Spanish-speaking customers get the same speed and quality as English-speaking ones.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen bg-[#023059] text-white py-5">
                    <div className="container">
                        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                            <div className="col-span-12">
                                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    Top AI Chatbot Tools
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    These platforms deploy across chat and social channels to capture leads, answer questions, and qualify prospects without manual monitoring.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/cross-platform-chatbot/botpenguin"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        BotPenguin
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    BotPenguin is a no-code chatbot builder that deploys on websites, WhatsApp, Facebook Messenger, and Telegram. It handles lead capture, FAQ responses, and appointment scheduling with a visual builder that does not require developer involvement. For small businesses that need fast deployment across their most active messaging channels without a custom build, BotPenguin gets the system running quickly.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/cross-platform-chatbot/dapta"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Dapta
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Dapta covers both voice and text channels in one platform, so the same AI that answers your calls also responds to web chat, WhatsApp, and social messages. For businesses fielding a mix of phone and messaging inquiries, Dapta removes the need to manage separate tools for each channel while keeping every customer conversation on a single timeline.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/cross-platform-chatbot/manychat"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Manychat
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Manychat is purpose-built for Instagram and Facebook Messenger automation and is one of the most widely deployed chatbot platforms for social commerce. It automates DM responses, comment replies, story interactions, and lead capture flows entirely within the social platforms your customers already use. For businesses where Instagram and Facebook are primary customer contact points, Manychat is the specialized tool that goes deepest on those channels.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/cross-platform-chatbot/myaifrontdesk"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        My AI Front Desk
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    My AI Front Desk's cross-platform capability extends its voice reception into web chat and SMS, giving businesses a single tool that covers both inbound calls and text messaging. It is a practical choice for small businesses that want voice and chat handled by one AI platform without the complexity of a larger unified communications system.
                                </p>

                                <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                                    <Link
                                        href="/tools/ai-operations/cross-platform-chatbot/tidio"
                                        className="hover:text-[#C83803] hover:underline"
                                    >
                                        Tidio
                                    </Link>
                                </h3>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    Tidio combines a live chat widget with an AI chatbot that takes over when your team is unavailable or offline. It handles FAQ responses, lead collection, and appointment scheduling with a clean interface that works across website chat, email, and Messenger. For businesses that want a hybrid of live chat and AI coverage rather than full AI automation, Tidio's model gives operators the flexibility to set when the AI steps in.
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
                                    When You Need Voice, Chat, or Both
                                </h2>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    If most of your inbound volume is phone calls and a small portion is website chat, start with an AI receptionist. It solves your biggest loss point first and gets results you can measure quickly.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    If you field a mix of calls, WhatsApp messages, Instagram DMs, and website chats and your team is currently switching between separate apps to manage each one, a platform that covers all channels together is more efficient than stacking individual tools.
                                </p>
                                <p className="pt-3 text-base font-normal text-white shadow-text">
                                    For most South Florida small businesses, both problems exist and both need solving. Geek @ Your Spot LLC helps you identify where you are losing the most contacts right now and sequences the implementation so the highest-impact piece goes live first. Book a consultation below to walk through your current inbound setup and see which combination of tools fits your operation.
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
