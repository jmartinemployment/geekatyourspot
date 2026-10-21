import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/roles-section";
import RightFitSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/preparing-section";
import PAASection from "@/components/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Lead Enrichment & Predictive Scoring";
const DESCRIPTION =
    "Lead Enrichment and Predictive Scoring for South Florida small businesses: capture better leads, reduce manual work, and close more sales with AI.";
const CANONICAL = "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring";
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
            "datePublished": "2026-10-17T11:09:57.5329753Z",
            "dateModified": "2026-10-17T11:09:57.5329753Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Lead Enrichment and Predictive Scoring, AI lead capture, South Florida small businesses, lead scoring tools, Apollo, Lusha, Snitcher, Leadfeeder, Factors, AI implementation services",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ai-sales-force-automation-software" },
            "mentions": [
                { "@type": "Thing", "name": "Apollo", "url": "https://www.apollo.io/" },
                { "@type": "Thing", "name": "Factors", "url": "https://www.factors.ai/" },
                { "@type": "Thing", "name": "Leadfeeder", "url": "https://www.leadfeeder.com/" },
                { "@type": "Thing", "name": "Lusha", "url": "https://www.lusha.com/" },
                { "@type": "Thing", "name": "Snitcher", "url": "https://www.snitcher.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is the actual difference between Lead Enrichment and Predictive Scoring? Aren't they the same thing", "acceptedAnswer": {"@type": "Answer", "text": "Lead Enrichment and Predictive Scoring are two separate but connected steps in the sales pipeline. Lead Enrichment is about gathering and filling in missing background details for each lead, like company size or contact numbers, starting from something basic like an email address. Predictive Scoring uses all that enriched data, along with buyer behavior, to calculate a score that shows how likely it is that the lead will become a customer."}},
                {"@type": "Question", "name": "How much historical data does a business need to use Predictive Scoring?", "acceptedAnswer": {"@type": "Answer", "text": "To create a reliable predictive scoring model, a business usually needs at least a few thousand past lead records, with at least 200 to 500 clearly marked as \"Closed-Won.\" If a small business has not reached that level, it is best to start with a mix of data enrichment and fixed rules until enough data builds up."}},
                {"@type": "Question", "name": "How does form enrichment prevent website visitors from abandoning our signup forms?", "acceptedAnswer": {"@type": "Answer", "text": "Form enrichment lets businesses shrink their signup forms down to just one field, like a work email address. As soon as the user submits, the enrichment software grabs and adds key details such as company size and location behind the scenes. This keeps forms short, which means more people finish signing up, without the business missing out on important information."}},
                {"@type": "Question", "name": "What happens to a high lead score when a prospect completely stops engaging?", "acceptedAnswer": {"@type": "Answer", "text": "Advanced scoring systems use an automatic process called behavioral score decay. If a lead that once had a high score suddenly stops interacting for three weeks, the system lowers their score over time. This keeps sales teams focused on leads that are still active and interested."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Lead Enrichment and Predictive Scoring", "AI lead capture", "South Florida Small Businesses", "lead scoring tools", "Apollo", "Lusha", "Snitcher", "Leadfeeder", "Factors", "AI implementation services"],
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
        "Stop wasting time on cold leads. We help Miami-Dade, Broward and West Palm Beach businesses use AI to capture, enrich and score leads so your team closes more deals with less effort.";
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
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
