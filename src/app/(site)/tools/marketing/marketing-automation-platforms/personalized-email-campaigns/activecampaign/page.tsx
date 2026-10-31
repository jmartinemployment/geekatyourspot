import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/overview-section";
import ChallengesSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/challenges-section";
import TransformsSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/architecture-section";
import ImplementingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/implementing-section";
import DataMappingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/evaluating-section";
import ComparingSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/comparing-section";
import RightFitSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/right-fit-section";
import FaqSection from "@/components/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "ActiveCampaign";
const PAGE_TITLE = "ActiveCampaign for Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns with ActiveCampaign increase response rates and save hours weekly for Miami-area small businesses. Start automating today.";
const CANONICAL = "/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "ActiveCampaign, personalized email campaigns, AI email marketing automation, email segmentation, open rates, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T15:29:26.2995230Z",
            "dateModified": "2026-10-26T15:29:26.2995230Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.activecampaign.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What can ActiveCampaign personalize beyond a subscriber’s first name?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot notes that ActiveCampaign can personalize more than just a first name. It can deliver different content to different audience segments, trigger messages based on customer actions, and adjust delivery times for each contact. The platform uses customer data and engagement to build segments and tailor communications."}},
                {"@type": "Question", "name": "Does it write personalized emails automatically?", "acceptedAnswer": {"@type": "Answer", "text": "ActiveCampaign’s AI content generator can draft email copy from a prompt or summarize content from a website or blog. You can ask it to change the tone or length and edit the draft. However, this does not mean each subscriber gets a fully unique email. Drafting is separate from recipient-level personalization."}},
                {"@type": "Question", "name": "What customer data do I need?", "acceptedAnswer": {"@type": "Answer", "text": "Geek @ Your Spot recommends collecting contact fields, interests, email engagement, website activity, and purchase history. The data you gather and connect will determine how you can segment, trigger, and personalize your campaigns, such as sending interest-based nurture emails or post-purchase follow-ups."}},
                {"@type": "Question", "name": "Can different subscribers receive different content within the same campaign?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ActiveCampaign allows you to set up conditional content so different contacts see different messages within one campaign. This is rules-based personalization, not AI writing a unique email for each person. Check which plan includes the features you need."}},
                {"@type": "Question", "name": "Can AI help identify the right audience?", "acceptedAnswer": {"@type": "Answer", "text": "ActiveCampaign offers AI-Suggested Segments to help identify customer groups to target. The platform also uses engagement data to build segments. This can save you time on manual audience selection, but you should still check that the suggested segment fits your campaign goals."}},
                {"@type": "Question", "name": "How does predictive sending work?", "acceptedAnswer": {"@type": "Answer", "text": "Predictive sending in ActiveCampaign looks at each contact’s engagement patterns and schedules emails for the time they are most likely to open or click. Instead of sending to everyone at once, it personalizes delivery times for each recipient."}},
                {"@type": "Question", "name": "Does predictive sending work with a new email list?", "acceptedAnswer": {"@type": "Answer", "text": "You can turn on predictive sending even if your list is new. If there is not enough engagement history, ActiveCampaign uses a warm-up period with random send times to learn when contacts engage. As more data comes in, timing is adjusted weekly while predictive sending is active."}},
                {"@type": "Question", "name": "Can emails automatically respond to customer actions?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ActiveCampaign automations can trigger from website visits, email engagement, integration events, or other tracked actions. These automations can send follow-up emails and update tags, fields, or list membership to keep your communication in sync with each contact’s behavior."}},
                {"@type": "Question", "name": "Can it create a complete email sequence rather than one email?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Geek @ Your Spot confirms that ActiveCampaign can generate full email sequences using plain-language prompts. For example, you can ask it to create a welcome series or a win-back campaign. Before you activate any workflow, review the audience, triggers, timing, and each message to make sure it fits your needs."}},
                {"@type": "Question", "name": "Can the AI match my business’s branding?", "acceptedAnswer": {"@type": "Answer", "text": "ActiveCampaign’s AI Brand Kit can pull your color scheme and logo from your website to build templates. Its AI content tools let you adjust the tone of your emails. Geek @ Your Spot recommends checking both the look and the voice of the generated content before sending, since visual branding and brand voice are handled separately."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["ActiveCampaign", "personalized email campaigns", "AI email marketing automation", "email segmentation", "open rates", "South Florida small business"],
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
        "ActiveCampaign brings AI-powered automation to personalized email campaigns, helping South Florida small businesses engage leads and customers more effectively while saving time.";
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
