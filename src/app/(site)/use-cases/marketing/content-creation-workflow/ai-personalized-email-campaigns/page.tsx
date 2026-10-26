import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/roles-section";
import RightFitSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/preparing-section";
import PaaSection from "@/components/use-cases/marketing/content-creation-workflow/personalized-email-campaigns-practical-ai-implementation-for-small-businesses/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Personalized Email Campaigns";
const DESCRIPTION =
    "Personalized Email Campaigns help small businesses increase engagement and sales by automating relevant messages. Cut manual work. Get your free AI assessment.";
const CANONICAL = "/use-cases/marketing/content-creation-workflow/ai-personalized-email-campaigns";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Personalized Email Campaigns, AI marketing automation, small business email automation, Miami-Dade AI consulting, Broward marketing automation, Palm Beach personalized emails, Brevo for small businesses, MailerLite automation, ActiveCampaign personalization, Mailchimp local integration",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ai-content-marketing-platforms" },
            "mentions": [
                { "@type": "Thing", "name": "GetResponse", "url": "https://www.getresponse.com/" },
                { "@type": "Thing", "name": "Mailchimp", "url": "https://mailchimp.com/" },
                { "@type": "Thing", "name": "MailerLite", "url": "https://www.mailerlite.com/" },
                { "@type": "Thing", "name": "Moosend", "url": "https://moosend.com/" },
                { "@type": "Thing", "name": "ActiveCampaign", "url": "https://www.activecampaign.com/" },
                { "@type": "Thing", "name": "Brevo", "url": "https://www.brevo.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How will this help me generate more inquiries, appointments, or sales?", "acceptedAnswer": {"@type": "Answer", "text": "Personalized email campaigns help you send relevant messages and follow up with leads consistently, so you do not have to manage every contact by hand. The main goal is to move interested people closer to actions like replying, booking an appointment, or making a purchase. Actual results depend on your audience, your offer, your data, and how well you run the campaigns. AI cannot guarantee sales."}},
                {"@type": "Question", "name": "How much does setup cost, and what are the ongoing fees?", "acceptedAnswer": {"@type": "Answer", "text": "A clear quote should break out implementation, software subscriptions, and ongoing campaign management. Software costs will vary based on the number of contacts, email volume, and which features you need. The amount of integration and custom content you want will affect the setup work. Pricing is only accurate after reviewing your current systems and needs; a one-size-fits-all estimate does not work."}},
                {"@type": "Question", "name": "What exactly gets personalized?", "acceptedAnswer": {"@type": "Answer", "text": "Personalization may cover subject lines, message content, recommendations, and timing, depending on your chosen platform and what data you have. It can go further than just using someone’s first name, such as showing products or services based on their interests or past actions with your business."}},
                {"@type": "Question", "name": "Can I review and approve emails before they go out?", "acceptedAnswer": {"@type": "Answer", "text": "Approval can be built into your process. You can review templates and the different email sequences before anything is activated. You can also set rules for which changes need a new approval. The exact steps will depend on the tools you use."}},
                {"@type": "Question", "name": "Will this work with my existing CRM, website forms, and email platform?", "acceptedAnswer": {"@type": "Answer", "text": "It might, but you need to check if your systems can connect. Many email tools offer integrations, but the key is whether your specific setup can send and receive the right data and trigger the needed actions. Not every integration works with every software plan."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Personalized Email Campaigns", "AI marketing automation", "small business email automation", "Miami-Dade AI consulting", "Broward marketing automation", "Palm Beach personalized emails", "Brevo for small businesses", "MailerLite automation", "ActiveCampaign personalization", "Mailchimp local integration"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Stop losing sales to generic emails. We help Miami-Dade, Broward and Palm Beach small businesses build AI-driven personalized email campaigns that save time, cut errors and boost response rates.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PaaSection />
                <SchedulerShell />
            </article>
        </>
    );
}
