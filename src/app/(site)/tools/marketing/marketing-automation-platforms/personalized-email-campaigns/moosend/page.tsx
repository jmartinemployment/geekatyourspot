import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/overview-section";
import ChallengesSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/challenges-section";
import TransformsSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/architecture-section";
import ImplementingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/implementing-section";
import DataMappingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/evaluating-section";
import ComparingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/comparing-section";
import RightFitSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/right-fit-section";
import FaqSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Moosend";
const PAGE_TITLE = "Moosend for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with Moosend increase open rates and customer retention for small businesses in South Florida. Start automating your emails now.";
const CANONICAL = "/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Moosend, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://moosend.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What AI features does Moosend offer for personalized email campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Moosend offers three main AI features: an AI Writer for generating and refining marketing copy, Audience Discovery to identify audiences based on behavior and interests, and AI-powered product recommendations to support more relevant suggestions and upselling in campaigns."}},
                {"@type": "Question", "name": "Can Moosend’s AI write subject lines and email content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Moosend’s AI Writer can generate subject lines and main email content. You can set the content type, tone, and word limit, then review and refine the AI’s output before sending. The platform also documents AI-generated preview text during campaign setup."}},
                {"@type": "Question", "name": "Does it automatically write a completely different email for every subscriber?", "acceptedAnswer": {"@type": "Answer", "text": "No. Moosend does not claim that AI Writer generates a unique, full email for every recipient at send time. Instead, it supports AI-assisted copy creation, personalization tags, custom fields, conditional content, and AI-powered recommendations. These features help tailor emails but do not create unrestricted, one-to-one generative emails for each subscriber."}},
                {"@type": "Question", "name": "Which parts of an email can I personalize?", "acceptedAnswer": {"@type": "Answer", "text": "Subject lines, such as adding a recipient’s name or company Preview text, like referencing location Body copy using subscriber information and supported tags Images, text, and offers through conditional visibility Product recommendations using Moosend’s AI"}},
                {"@type": "Question", "name": "What customer data is needed?", "acceptedAnswer": {"@type": "Answer", "text": "Moosend uses data from subscription forms, purchase history, engagement metrics, and website analytics for personalization. Custom fields can include details like birthdays, age, and location. The specific data you need depends on your campaign goals; for example, a location-based promotion requires different information than a purchase-based recommendation."}},
                {"@type": "Question", "name": "Can different subscribers see different offers in the same campaign?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Moosend’s conditional visibility lets you show different visuals and text to different recipients within the same campaign. This enables targeted offers without needing separate email designs. Conditional visibility is based on rules and should not be confused with AI generating the offers themselves."}},
                {"@type": "Question", "name": "How does Audience Discovery work?", "acceptedAnswer": {"@type": "Answer", "text": "Audience Discovery in Moosend uses AI and machine learning to find audiences based on behavior and preferences. It looks at product views, add-to-cart actions, and purchases to help target the right people, making it especially useful for ecommerce campaigns."}},
                {"@type": "Question", "name": "Can Moosend automate personalized follow-up emails?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Moosend can send behavior-triggered emails, like abandoned-cart messages, and lets you build automation workflows from scratch or use ready-made recipes. The automation decides when emails go out, while personalization features control what each person sees."}},
                {"@type": "Question", "name": "Do I need coding or design skills?", "acceptedAnswer": {"@type": "Answer", "text": "Basic campaign creation in Moosend does not require coding. The platform offers a drag-and-drop editor and ready-made templates. However, some advanced tracking or connecting with external data may need technical setup, depending on what you want to do."}},
                {"@type": "Question", "name": "Is Moosend useful for service businesses, or mainly ecommerce?", "acceptedAnswer": {"@type": "Answer", "text": "Moosend's personalization tools work for both service businesses and ecommerce. Service businesses can use custom fields, forms, personalized text, and conditional content in their campaigns. Product recommendations and behavior-based Audience Discovery are more for ecommerce. For local service businesses, the most useful features are subscriber-data personalization and automated follow-ups, not product recommendations."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Moosend", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
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
        "Moosend empowers small businesses in Miami-Dade, Broward and Palm Beach with AI-driven Personalized Email Campaigns that drive higher open rates and more sales.";
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
