import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "MailerLite";
const PAGE_TITLE = "MailerLite for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with MailerLite boost open rates and sales for Miami small businesses. Start engaging your customers more effectively today.";
const CANONICAL = "/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "MailerLite, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.mailerlite.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does email automation work?", "acceptedAnswer": {"@type": "Answer", "text": "Email automation sends out pre-written emails for you, triggered by certain actions or on a set schedule. This means your customers get the right message at the right time, without you having to send each email by hand."}},
                {"@type": "Question", "name": "Do I need a big list to start automating?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need a large list. Automation helps even small businesses connect with every new subscriber or customer right away. It keeps your communication consistent and lets you grow your relationships as your list expands."}},
                {"@type": "Question", "name": "How do I measure success?", "acceptedAnswer": {"@type": "Answer", "text": "Success is measured by how well your automated emails meet your goals. For example, if you want more webinar signups, track how many people register through your email sequence. If your goal is more sales, look at your conversion rates."}},
                {"@type": "Question", "name": "What metrics should I track?", "acceptedAnswer": {"@type": "Answer", "text": "Open rate Click-through rate (CTR) Conversion rate Unsubscribe rate These numbers show how engaged your audience is and how well your emails are working."}},
                {"@type": "Question", "name": "Can automation feel personal?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. When you segment your audience and use personalization, your automated emails can feel just as personal as ones you send by hand. You can tailor content to each person’s interests or actions, making every message relevant."}},
                {"@type": "Question", "name": "What’s the difference between a workflow and a campaign?", "acceptedAnswer": {"@type": "Answer", "text": "A workflow (or automation sequence) is a set of automated emails and actions triggered by something your customer does, like signing up or making a purchase. It guides them through a planned journey, such as a welcome series. A campaign is a one-time email sent to a list or segment for a specific reason, like a holiday sale or a newsletter. Workflows run automatically and keep going, while campaigns are usually sent manually for special occasions."}},
                {"@type": "Question", "name": "Does MailerLite have built-in AI email-writing tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. MailerLite includes an AI writing assistant in its drag-and-drop editor. It can generate headlines, paragraphs, calls to action, and help rewrite your content. It also helps draft subject lines and preheaders."}},
                {"@type": "Question", "name": "What can the AI personalize?", "acceptedAnswer": {"@type": "Answer", "text": "MailerLite’s AI can tailor prewritten text for an individual or a group, including using personalization variables. Dynamic emails are available on paid plans. There is a difference between generating copy for an audience and using subscriber data to control what each recipient gets."}},
                {"@type": "Question", "name": "Will it automatically write a completely unique email for every subscriber?", "acceptedAnswer": {"@type": "Answer", "text": "No. The AI writing assistant generates text in the editor for you to review and insert into a campaign. It does not automatically create a unique email for every recipient at send time. If you need that, the workflow needs separate technical validation."}},
                {"@type": "Question", "name": "Can I create different messages for different customer groups?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. MailerLite supports segmentation and personalization. Its paid dynamic-email feature lets you tailor campaigns further. AI can help draft messages for each group, and your targeting settings control who receives them."}},
                {"@type": "Question", "name": "Can AI match my brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "You can choose from Natural, Catchy, Professional, or Persuasive tones and give details about your audience, style, and goals. Supplying examples helps the AI match your writing style. This is guided generation, not a system that permanently learns your brand voice."}},
                {"@type": "Question", "name": "Can I use ChatGPT or Claude with MailerLite?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. MailerLite’s Model Context Protocol (MCP) lets supported AI tools work with your MailerLite account. You can draft and schedule campaigns, create groups, analyze results, and set up automations."}},
                {"@type": "Question", "name": "What is the difference between the built-in AI assistant and MCP?", "acceptedAnswer": {"@type": "Answer", "text": "The built-in AI assistant generates and improves campaign copy inside the MailerLite editor. MCP lets an external AI tool, like ChatGPT or Claude, interact with your MailerLite account. The assistant is for writing and editing content. MCP is for broader tasks, such as comparing campaigns or creating drafts from outside MailerLite. The assistant depends on your plan and credits. MCP depends on account authorization and what your connected tool can do."}},
                {"@type": "Question", "name": "Can AI help build welcome or re-engagement campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "MailerLite supports automated targeted emails. Its homepage shows MCP examples for creating automations and re-engagement workflows. This means AI can help set up these campaigns, but it does not run or change your marketing strategy on its own."}},
                {"@type": "Question", "name": "Can AI analyze results and recommend improvements?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Geek @ Your Spot confirms that MailerLite’s MCP connection lets you use tools like ChatGPT and Claude to review campaign data and suggest ways to improve. For example, MailerLite can prompt you to compare recent campaigns or spot where subscribers leave an onboarding series."}},
                {"@type": "Question", "name": "What should I include in an AI prompt?", "acceptedAnswer": {"@type": "Answer", "text": "MailerLite suggests you include details about your audience, your product or service, the tone you want, and the action you want readers to take. There is a 200-character limit for prompts."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["MailerLite", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
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
        "MailerLite streamlines personalized email campaigns for South Florida small businesses, making it easy to deliver relevant messages that boost engagement.";
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
