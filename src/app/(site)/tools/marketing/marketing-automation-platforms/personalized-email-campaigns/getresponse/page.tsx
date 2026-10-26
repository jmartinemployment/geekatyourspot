import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/overview-section";
import ChallengesSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/challenges-section";
import TransformsSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/architecture-section";
import ImplementingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/implementing-section";
import DataMappingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/evaluating-section";
import ComparingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/comparing-section";
import RightFitSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/right-fit-section";
import FaqSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "GetResponse";
const PAGE_TITLE = "GetResponse for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with GetResponse boost open rates for small businesses in South Florida. Automate now and win back your time.";
const CANONICAL = "/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "GetResponse, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.getresponse.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Do I need to know HTML?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need to know HTML to create emails in GetResponse. The platform has a drag-and-drop editor, so you can design professional emails without coding. If you want more advanced customization, you can edit the HTML source code, but it is not required."}},
                {"@type": "Question", "name": "Do you offer customizable templates?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, GetResponse provides a wide range of customizable email templates. You can adjust layouts, colors, fonts, and content to fit your brand. Templates are available for different industries and campaign types, making it easy to create professional emails quickly."}},
                {"@type": "Question", "name": "Are messages created in GetResponse mobile optimized?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, all emails made in GetResponse are mobile-optimized by default. The responsive design ensures your messages look good on any device. You can preview and adjust layouts to give your contacts the best experience on both desktop and mobile."}},
                {"@type": "Question", "name": "Do I have to write messages myself, or do you offer an AI writing assistant?", "acceptedAnswer": {"@type": "Answer", "text": "You do not have to write every email yourself. GetResponse includes an AI-powered email writer that can generate subject lines and email content based on your goals. You can refine the copy, adjust the tone, and personalize messages to match your brand’s voice."}},
                {"@type": "Question", "name": "What is an AI campaign generator?", "acceptedAnswer": {"@type": "Answer", "text": "An AI campaign generator is a tool that uses artificial intelligence and natural language processing to automatically create a landing page, an autoresponder email, and a newsletter for your campaign."}},
                {"@type": "Question", "name": "How does an AI campaign generator work?", "acceptedAnswer": {"@type": "Answer", "text": "The AI campaign generator reviews the context and purpose of your campaign, identifies key points, and then generates clear, natural-sounding content for your emails and landing pages."}},
                {"@type": "Question", "name": "What are the benefits of using an AI campaign generator?", "acceptedAnswer": {"@type": "Answer", "text": "Using an AI campaign generator can save you time, boost efficiency, and help keep the quality and consistency of your campaign materials high."}},
                {"@type": "Question", "name": "Can an AI email generator replace human email writers?", "acceptedAnswer": {"@type": "Answer", "text": "An AI email generator can create quality email content, but it does not fully replace human writers. People are still needed to review and edit the content for accuracy and the right tone."}},
                {"@type": "Question", "name": "How long are your contracts?", "acceptedAnswer": {"@type": "Answer", "text": "GetResponse offers monthly and 12-month billing options. There is also a 14-day free trial where you can access premium features. After 14 days, you lose access to premium features unless you upgrade to a paid plan."}},
                {"@type": "Question", "name": "What features can I try during the 14-day trial?", "acceptedAnswer": {"@type": "Answer", "text": "During your first 14 days on the Free account, you get access to the premium features of GetResponse. Some limits apply to webinars, messages, landing pages, marketing automation, and chats."}},
                {"@type": "Question", "name": "What can GetResponse’s AI do for email campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "GetResponse’s AI Email Generator can help small businesses in Miami-Dade, Broward, and Palm Beach counties create email copy, subject lines, layouts, and designs. It uses your campaign objective, tone, and branding as input. The platform also offers send-time optimization and, for Enterprise plans, AI product recommendations. These are separate features, not a single all-in-one personalization tool."}},
                {"@type": "Question", "name": "Does it automatically create a different email for every subscriber?", "acceptedAnswer": {"@type": "Answer", "text": "No, not just by using the AI Email Generator. GetResponse supports personalization through contact fields, dynamic content, and behavior-based targeting. These let you adapt emails for each recipient, but the standard AI tool does not write a unique email for every contact on its own."}},
                {"@type": "Question", "name": "How far beyond “Hi, first name” can personalization go?", "acceptedAnswer": {"@type": "Answer", "text": "You can personalize subject lines and email text with contact-field data, set fallback text if data is missing, and show dynamic content based on tags or field values. More advanced campaigns can use actions, purchase data, and segmentation to decide who gets which offer. The options you have depend on your plan and chosen features."}},
                {"@type": "Question", "name": "What customer information do I need?", "acceptedAnswer": {"@type": "Answer", "text": "The details you need depend on the type of personalization. For contact-field personalization, you need stored details like names or custom fields. Audience targeting uses tags, scores, actions, consent fields, and ecommerce data. Behavior-triggered campaigns require activity data to reach GetResponse through tracking or integrations."}},
                {"@type": "Question", "name": "Can it automate personalized welcome emails and follow-ups?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GetResponse supports automated welcome series, drip campaigns, birthday emails, follow-ups based on clicks or opens, and event or purchase-based automation. The Starter plan includes one custom workflow, while Marketer offers unlimited workflows and advanced segmentation. Check your plan for specific triggers and filters."}},
                {"@type": "Question", "name": "Can AI choose when each subscriber receives an email?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GetResponse offers send-time optimization with its Perfect Timing feature, and its homepage describes AI that recommends the best send time. This function decides when to deliver emails, not what to write. Check if this feature is available with your plan and campaign type before relying on it."}},
                {"@type": "Question", "name": "Can it recommend different products to different customers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GetResponse provides AI product recommendations for emails and website shopping. This feature is listed under the Enterprise plan, which uses custom pricing. It is not included in standard email-marketing subscriptions."}},
                {"@type": "Question", "name": "Can I test it before paying?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GetResponse advertises a 14-day trial that does not require a credit card. The trial includes premium features with some limits. If you do not upgrade, you keep a restricted free version. Make sure to test the specific AI and automation features you need, as not all may be fully available during the trial."}},
                {"@type": "Question", "name": "Will it connect with an existing CRM, online store, or lead-capture workflow?", "acceptedAnswer": {"@type": "Answer", "text": "GetResponse offers more than 150 integrations. These include Shopify, WooCommerce, WordPress, Salesforce, Microsoft Dynamics 365, and Zapier, along with API access. However, not every integration will sync all fields or events you might need for personalized campaigns. Each mapping should be checked to make sure it fits your workflow."}},
                {"@type": "Question", "name": "Can I use ChatGPT or Claude with GetResponse?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. GetResponse MCP lets you connect AI assistants like ChatGPT or Claude to certain account data and tools. You can use them to find contacts, review newsletter results, and create drafts for things like landing pages, invitation emails, and welcome messages from a single prompt."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["GetResponse", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
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
        "GetResponse helps small businesses in South Florida automate personalized email campaigns, replacing repetitive manual tasks with targeted messaging that drives more sales and engagement.";
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
