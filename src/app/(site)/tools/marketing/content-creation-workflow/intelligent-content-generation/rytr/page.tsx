import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Rytr";
const DESCRIPTION =
    "Intelligent Content Generation with Rytr enables Miami-Dade, Broward, and West Palm Beach small businesses to create marketing content quickly and affordably.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr";
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
            "keywords": "Rytr, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is Rytr?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr is an AI assistant that helps small businesses create written content and manage professional relationships. Its Create features help draft emails, posts, ads, and web copy. Engage brings together relationship context from your connected communications and helps prepare follow-ups."}},
                {"@type": "Question", "name": "What can you use Rytr for?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr offers 40 writing use cases, such as emails, blog sections, ads, product descriptions, SEO content, and social media posts. It also helps prepare meeting briefs, track commitments, and draft messages for follow-ups with contacts."}},
                {"@type": "Question", "name": "Is Rytr a CRM?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr positions itself as an AI assistant that works like a personal CRM that fills itself in. It builds relationship context from your emails, Slack conversations, calls, and meetings, so you do not have to enter data by hand. However, this does not mean it replaces a full sales CRM."}},
                {"@type": "Question", "name": "What is the difference between Rytr Engage and Create?", "acceptedAnswer": {"@type": "Answer", "text": "Engage focuses on relationships: who needs attention, what was discussed, and what you promised. Create focuses on writing: drafting and refining emails, posts, ads, and pages. Both use shared context about your contacts and writing voice."}},
                {"@type": "Question", "name": "Is Rytr free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rytr has a free plan that gives you 10,000 characters per month, one connected source, 25 active relationships, 25 Engage actions per month, three person-research runs, and a daily briefing. It also includes access to over 40 writing use cases and more than 30 languages."}},
                {"@type": "Question", "name": "How much does Rytr cost?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr’s current monthly pricing is: Free at $0 for 10,000 characters, one connected source, and 25 active relationships. Lite at $9 for all free-plan features plus unlimited characters. Personal at $19 for unlimited characters, two connected sources, 250 active relationships, and 250 Engage actions per month. Pro at $49 for all connected sources, 1,000 active relationships, 2,000 Engage actions per month, and custom use cases. Yearly billing saves 20 percent compared with monthly billing and is charged annually."}},
                {"@type": "Question", "name": "Does Rytr offer unlimited writing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Lite, Personal, and Pro plans include unlimited characters per month. However, unlimited writing does not mean unlimited relationship-management activity. Connected sources, active relationships, Engage actions, and research runs still have plan-specific limits."}},
                {"@type": "Question", "name": "Can I cancel or change my Rytr subscription?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rytr allows you to upgrade, downgrade, or cancel your subscription at any time. If you cancel, you keep access until the end of your billing period."}},
                {"@type": "Question", "name": "Can Rytr write blog posts?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr supports blog sections, outlines, and other writing formats. Its editor lets you continue, expand, shorten, reword, and improve text, so you can develop and refine an article instead of just generating a single draft."}},
                {"@type": "Question", "name": "Can Rytr write in my brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr says it can write in your personal voice or one of 22 preset tones. It also has rewriting tools to adjust wording, length, and style before you finalize your content."}},
                {"@type": "Question", "name": "What languages does Rytr support?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr’s homepage states that Create supports 38 languages. Its pricing page describes the included language access more broadly as “30+ languages.”"}},
                {"@type": "Question", "name": "Can Rytr generate multiple versions of the same content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rytr says you can generate up to three variants at once and adjust the creativity level, so you can compare alternative wording for the same task."}},
                {"@type": "Question", "name": "Does Rytr have a browser extension?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Its browser extension brings writing tools into text boxes and editors, including options to improve, shorten, expand, or continue selected text. It also provides relationship context in supported Gmail, Slack, and LinkedIn workflows."}},
                {"@type": "Question", "name": "What tools does Rytr connect to?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr lists Gmail, Outlook, Slack, Google Calendar, Google Meet, and Granola among the tools it works with. Available connections depend on your plan’s connected-source limits."}},
                {"@type": "Question", "name": "Can Rytr help me remember client follow-ups?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Engage is designed to identify contacts needing attention, track promises and commitments, prepare meeting context, and draft follow-up messages for review."}},
                {"@type": "Question", "name": "Does Rytr send messages automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr says nothing sends without your approval. Its workflow prepares a draft or suggested action for you to review instead of sending communications independently."}},
                {"@type": "Question", "name": "How do I receive Rytr’s daily briefings?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr briefings are available in the Rytr app. Rytr also says it can deliver them through iMessage or SMS. Email delivery is listed as coming soon. The Pro plan includes both morning and evening briefings."}},
                {"@type": "Question", "name": "How does Rytr use connected email and conversation data?", "acceptedAnswer": {"@type": "Answer", "text": "Rytr uses connected data to build a unified picture of each relationship. It prepares answers, meeting context, and drafts based on this information. You choose which sources to connect and can disconnect them at any time."}},
                {"@type": "Question", "name": "Can I correct what Rytr remembers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rytr says its memories are visible and can be corrected or removed. It also gives you access to the messages, meetings, and notes behind relationship context and drafts."}},
                {"@type": "Question", "name": "Can I delete my data from Rytr?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Rytr says you can disconnect sources and request deletion of imported data and information derived from it. Its homepage states that access ends immediately after disconnection, deletion is confirmed when completed, and encrypted backups expire within 14 days. These are the vendor’s stated controls, not an independent security assessment."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Rytr", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Rytr offers a practical solution for South Florida small businesses seeking affordable, AI-driven content creation, streamlining social, search, and email workflows.";
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
