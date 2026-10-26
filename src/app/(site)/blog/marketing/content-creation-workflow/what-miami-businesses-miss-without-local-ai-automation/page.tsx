import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/lede-section";
import ChallengesSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/challenges-section";
import StatusQuoSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/status-quo-section";
import MechanicsSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/mechanics-section";
import FoundationSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/foundation-section";
import NumbersSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/numbers-section";
import RightFitSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/right-fit-section";
import FaqSection from "@/components/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "What Miami Businesses Miss Without Local AI Automation";
const DESCRIPTION =
    "Personalized Email Campaigns help Miami small businesses increase open rates by up to 50 percent and drive more sales. See how local AI can help you grow.";
const CANONICAL = "/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Person", "name": "Jeff Martin", "url": "https://geekatyourspot.com/about" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-26T12:35:17.8414750Z",
            "dateModified": "2026-10-26T12:35:17.8414750Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Personalized Email Campaigns, Miami small business marketing, AI email automation, local email marketing, Brevo, Mailchimp, ActiveCampaign, data quality for email, marketing automation, business process automation",
            "wordCount": 4394,
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-personalized-email-campaigns" },
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
                {"@type": "Question", "name": "How is this different from the email marketing I already use?", "acceptedAnswer": {"@type": "Answer", "text": "Most basic campaigns send the same message to everyone on your list. AI-assisted campaigns help you tailor content, spot audience groups, and suggest the best times to send. Automation can handle when messages go out and what happens next. Your current email tool might already offer some of these features."}},
                {"@type": "Question", "name": "How will we measure whether it’s worth the investment?", "acceptedAnswer": {"@type": "Answer", "text": "Decide on the business goal before you start, this could be qualified replies, booked appointments, purchases, or another action you can measure. Track your campaign costs and the results that can be clearly linked to your emails, compared to your starting point. Engagement numbers are useful for troubleshooting, but true value comes from actual business results."}},
                {"@type": "Question", "name": "Will the emails sound like my business or sound AI-generated?", "acceptedAnswer": {"@type": "Answer", "text": "AI can help write emails in your style using your examples and business details. For natural, accurate messages, you still need to give clear instructions and review the drafts. The goal is for AI to support your brand voice, not replace your judgment."}},
                {"@type": "Question", "name": "How do you prevent AI from making up information?", "acceptedAnswer": {"@type": "Answer", "text": "Use only verified business details, approved offers, and clear content rules. Always review what the AI creates before sending it. AI should not make up prices, guarantees, testimonials, or customer stories. These steps lower the risk, but human oversight remains necessary."}},
                {"@type": "Question", "name": "What customer information do you need? Do I have enough data?", "acceptedAnswer": {"@type": "Answer", "text": "You need real email addresses, subscription choices, and any other info you already collect, like service interests, questions, or purchase history. If you have only a little data, you can still do basic audience targeting. More detailed personalization needs better customer info. Do not gather extra data just because the AI could use it."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Personalized Email Campaigns", "Miami small business marketing", "AI email automation", "local email marketing", "Brevo", "Mailchimp", "ActiveCampaign", "data quality for email", "marketing automation", "business process automation"],
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
            type: 'article',
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
        "Stop losing sales to generic outreach. Personalized email campaigns help Miami small businesses reach the right customers at the right moment, boosting engagement and revenue while keeping costs down.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <FoundationSection />
                <NumbersSection />
                <RightFitSection />
                <FaqSection />
                <SchedulerShell />
            </article>
        </>
    );
}
