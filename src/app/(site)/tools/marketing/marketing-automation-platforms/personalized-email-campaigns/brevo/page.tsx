import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/overview-section";
import ChallengesSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/challenges-section";
import TransformsSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/architecture-section";
import ImplementingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/implementing-section";
import DataMappingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/evaluating-section";
import ComparingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/comparing-section";
import RightFitSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/right-fit-section";
import FaqSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Brevo";
const PAGE_TITLE = "Brevo for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with Brevo help South Florida small businesses boost open rates and sales by automating relevant outreach. Try it today.";
const CANONICAL = "/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Brevo, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T15:29:26.2995230Z",
            "dateModified": "2026-10-26T15:29:26.2995230Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.brevo.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is Brevo?", "acceptedAnswer": {"@type": "Answer", "text": "Brevo is a customer engagement platform that brings together email marketing, SMS, WhatsApp, marketing automation, CRM, and transactional messaging. It also includes live chat, chatbots, appointment scheduling, and tools to help manage customer relationships."}},
                {"@type": "Question", "name": "Is Brevo free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Brevo offers a free plan that does not require a credit card. Once your account is approved for sending, you can send up to 300 emails per day. This is a daily limit, not a monthly pool."}},
                {"@type": "Question", "name": "What paid plans does Brevo offer?", "acceptedAnswer": {"@type": "Answer", "text": "Brevo lists four paid tiers in addition to its free plan. Starter is for basic email and multichannel marketing. Standard adds automated marketing campaigns and removes Brevo branding. Professional is for advanced, data-driven marketing and includes more user seats and channels. Enterprise is for large, customized operations and offers features like multi-account management and dedicated onboarding."}},
                {"@type": "Question", "name": "Can Brevo automate lead capture and follow-up?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Brevo provides signup forms to collect leads and trigger follow-up emails. The Standard plan adds unlimited multi-step workflows, with triggers based on website behavior and custom events to segment contacts and send messages."}},
                {"@type": "Question", "name": "Does Brevo include a CRM?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Brevo includes CRM and sales features with its marketing tools. Sales features cover contact and account enrichment, deal creation, and sales email help. Sales Essentials and Sales Advanced are listed as add-ons, so check which sales features are included in your plan."}},
                {"@type": "Question", "name": "Can Brevo send transactional emails?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Brevo plans include transactional email features through SMTP and REST APIs. These support messages like order confirmations and password resets. Brevo also offers webhooks, SDKs, and developer documentation for integration."}},
                {"@type": "Question", "name": "Does Brevo support SMS and WhatsApp marketing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Brevo supports both SMS and WhatsApp marketing, but availability and costs depend on your plan. SMS credits are sold separately, and WhatsApp is listed as an extra channel in the Professional plan. Email subscriptions do not include all messaging channels by default."}},
                {"@type": "Question", "name": "What tools does Brevo integrate with?", "acceptedAnswer": {"@type": "Answer", "text": "Brevo integrates with more than 150 digital tools, including Shopify, WordPress, Stripe, and Zapier. It also provides APIs and SDKs for custom integrations."}},
                {"@type": "Question", "name": "What AI features does Brevo offer?", "acceptedAnswer": {"@type": "Answer", "text": "Brevo’s Aura AI covers marketing, sales, analytics, and customer conversations. For marketing, it can generate email copy, suggest audience segments, optimize send times, and recommend products. In sales, it helps enrich contact and account details, create deals, and draft sales emails. For analytics, it answers business data questions in plain language. It also summarizes customer chats and helps draft replies. Not all features are in every plan; for example, AI segmentation and the AI Data Analyst are listed under the Professional plan."}},
                {"@type": "Question", "name": "Can Brevo score leads or contacts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Professional plan includes contact scoring based on engagement, purchases, and behavior. These scores can trigger automations or help build targeted segments. This is different from the segmentation features in lower plans."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Brevo", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
        authors: [{ name: 'Jeff Martin' }],
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
        "Brevo streamlines personalized email campaigns for Miami-Dade, Broward and Palm Beach small businesses, making targeted outreach easy and effective.";
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
