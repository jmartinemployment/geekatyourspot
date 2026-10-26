import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Mailchimp";
const PAGE_TITLE = "Mailchimp for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with Mailchimp help South Florida small businesses increase open rates and sales while reducing manual work. Start today.";
const CANONICAL = "/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Mailchimp, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://mailchimp.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What can Mailchimp’s AI do for email campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Mailchimp’s AI tools can help draft and rewrite email copy, recommend when to send, suggest content improvements, and support automated marketing flows. Predictive features help target audiences, and Analytics AI gives plain-language insights on campaign results. What you get depends on your plan and eligibility."}},
                {"@type": "Question", "name": "Can Mailchimp automatically write personalized emails?", "acceptedAnswer": {"@type": "Answer", "text": "Mailchimp’s “Write with AI” tool can generate or revise email copy in the editor. To make emails truly relevant for each customer, you combine this with audience segments, dynamic content, predicted attributes, and automated flows. AI copywriting alone does not create a unique, fully tailored email for every subscriber."}},
                {"@type": "Question", "name": "How does personalization go beyond using someone’s first name?", "acceptedAnswer": {"@type": "Answer", "text": "Mailchimp lets you target based on behavior, engagement, and predicted attributes. You can use purchase history, browsing behavior, and spending patterns to send more relevant messages. For example, you can set up different campaigns for loyal customers and for those who abandoned their cart."}},
                {"@type": "Question", "name": "What customer data does Mailchimp need?", "acceptedAnswer": {"@type": "Answer", "text": "The data Mailchimp needs depends on your campaign. For behavior-based targeting, it uses engagement or shopping data. Store-based recommendations and revenue insights require a connected ecommerce store. Mailchimp’s recommendations use available campaign, sales, and customer behavior data, so the more you connect, the more context the system has."}},
                {"@type": "Question", "name": "Can AI help segment the audience?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Mailchimp offers predicted attributes and predictive segmentation to help you find the right audiences for your campaigns. You can also target by buying behavior and spending amounts. Predictive segments are available on Standard and Premium plans if you meet the feature requirements."}},
                {"@type": "Question", "name": "Can Mailchimp recommend the best time to send?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Send-time optimization uses past engagement and click data to suggest better sending windows. Send-day optimization looks at industry trends to recommend a day of the week. These are data-driven suggestions, but they do not guarantee every recipient will engage."}},
                {"@type": "Question", "name": "Can personalized follow-up emails run automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Mailchimp’s Marketing Automation Flows can trigger multi-step emails based on what subscribers do. Its AI-supported pre-built flows can include generated content and delays between messages. You review and edit the flow before turning it on."}},
                {"@type": "Question", "name": "What campaigns are suitable starting points for a small business?", "acceptedAnswer": {"@type": "Answer", "text": "A welcome sequence for new subscribers. A re-engagement sequence for inactive customers. For ecommerce businesses, abandoned-cart follow-ups. Mailchimp suggests starting with one or two of these automated flows to keep things focused before adding more segments and triggers."}},
                {"@type": "Question", "name": "Does Mailchimp work for service businesses, or only online stores?", "acceptedAnswer": {"@type": "Answer", "text": "Mailchimp supports both service businesses and online stores. It offers email and SMS tools designed for professional services to reach new and existing clients. Some features, like those based on purchases or store revenue, need ecommerce data and may not apply to service-business mailing lists."}},
                {"@type": "Question", "name": "Can I test the features before subscribing?", "acceptedAnswer": {"@type": "Answer", "text": "Mailchimp provides a 14-day Standard trial for eligible users. You must enter payment details, and billing starts after the trial unless you cancel or change your plan. Access to AI features during the trial can differ, so check that the feature you want is included before you start."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Mailchimp", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
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
        "Mailchimp enables South Florida small businesses to create automated, personalized email campaigns that drive more opens and sales without manual effort.";
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
