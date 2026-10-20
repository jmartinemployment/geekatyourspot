import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Apollo";
const PAGE_TITLE = "Apollo for Lead Enrichment and Predictive Scoring";
const DESCRIPTION =
    "Lead Enrichment and Predictive Scoring with Apollo help Miami-Dade, Broward, and West Palm Beach small businesses capture and qualify sales-ready leads.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Apollo, lead enrichment, predictive lead scoring, intent data, lead capture, B2B lead generation, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-apollo",
                "name": TITLE,
                "url": "https://www.apollo.io/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does Apollo’s Inbound Lead Enrichment work, and does it require complex coding for a small business?", "acceptedAnswer": {"@type": "Answer", "text": "Apollo is platform-agnostic and does not require any coding skills. A small business owner just maps their web form fields using HTML identifiers in Apollo, then copies a short JavaScript snippet into their website header. Apollo automatically starts an enrichment workflow when a lead submits the form, adding over 65 data points like job title, company size, local data, revenue, and technology stack by matching against its database."}},
                {"@type": "Question", "name": "What is the operational difference between CRM Enrichment and Saved Record Enrichment?", "acceptedAnswer": {"@type": "Answer", "text": "CRM Enrichment pushes and updates demographic, firmographic, and technographic data directly into a connected CRM, such as HubSpot or Salesforce, so sales reps always see up-to-date information. Saved Record Enrichment updates contact details for prospects saved inside Apollo’s database before launching an email or call sequence."}},
                {"@type": "Question", "name": "How does Form Enrichment affect our credit balance, and will it duplicate existing CRM contacts?", "acceptedAnswer": {"@type": "Answer", "text": "Form enrichment is free for all Apollo users and does not use data credits. Apollo uses a match and validate protocol to check if a prospect already exists in your CRM. If so, it adds only the new enriched data to the existing record, preventing duplicates."}},
                {"@type": "Question", "name": "Will automated enrichment overwrite data that my sales team manually verified?", "acceptedAnswer": {"@type": "Answer", "text": "No, as long as it is configured properly. Apollo lets you set overwrite priorities so fields only autofill when empty. This keeps manually verified data safe from being replaced by automated updates."}},
                {"@type": "Question", "name": "What is the difference between traditional predictive lead scoring and Apollo's AI scoring?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional predictive or manual scoring means you assign point values yourself, like adding points for a C-Suite title or subtracting for a student. Apollo’s AI lead scoring learns from your CRM history, looking at closed-won and closed-lost deals, and automatically builds and adjusts models based on what actually converts."}},
                {"@type": "Question", "name": "How does Apollo categorize lead scores so my sales team can act fast?", "acceptedAnswer": {"@type": "Answer", "text": "Apollo groups lead scores into four clear tiers: Excellent (ideal fit and high intent), Good, Fair, and Not a Fit. This lets an IT consultancy set up automated rules, like sending Excellent leads straight to a rep’s calendar and putting Fair leads into lower-cost nurture emails."}},
                {"@type": "Question", "name": "My sales team complains that automated scoring is a \"black box\" they can't trust. How does Apollo solve this?", "acceptedAnswer": {"@type": "Answer", "text": "Apollo gives clear reason codes for every score. Next to each prospect’s tier, the interface shows the top three factors that influenced the score, such as industry, headcount, or buying signals, so sales reps know exactly why a lead is ranked highly."}},
                {"@type": "Question", "name": "Can we train Apollo’s AI scoring on niche indicators unique to our business?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can add custom data fields to Apollo’s AI Context Center. If your small business uses unique local tags, Apollo’s scoring will include that custom data in its predictive models."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Apollo", "lead enrichment", "predictive lead scoring", "intent data", "lead capture", "B2B lead generation", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
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
        "Apollo transforms manual lead management for South Florida small businesses by automating lead capture and qualification with enriched data and predictive scoring, ensuring your team focuses on the most promising prospects.";
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
