import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/lede-section";
import ChallengesSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/challenges-section";
import StatusQuoSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/status-quo-section";
import MechanicsSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/key-factors-section";
import DecisionsSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/decisions-section";
import SequenceSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/sequence-section";
import DataIntegrationSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/data-integration-section";
import RolesSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/roles-section";
import RightFitSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/right-fit-section";
import PreparingSection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/preparing-section";
import PAASection from "@/components/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Intelligent Tax Law";
const DESCRIPTION =
    "Navigate complex and changing laws with AI. Simplify tax compliance for small businesses in Miami-Dade, Broward, and West Palm Beach.";
const CANONICAL = "/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek @ Your Spot LLC",
                "logo": { "@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg" }
            },
            "datePublished": "2026-10-12T15:36:35.4776740Z",
            "dateModified": "2026-10-12T15:36:35.4776740Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "AI tax compliance, complex and changing tax laws, sales tax automation, economic nexus, Florida sales tax, multi-county compliance, small business automation, South Florida",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/quaderno#software` },
                { "@id": `${TOOLS_BASE}/taxcloud#software` },
                { "@id": `${TOOLS_BASE}/taxjar#software` },
                { "@id": `${TOOLS_BASE}/thetaxvalet#software` },
                { "@id": `${TOOLS_BASE}/zamp#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does the software handle different sales tax rates between Miami-Dade, Broward, and Palm Beach?", "acceptedAnswer": {"@type": "Answer", "text": "The software uses a combination of Florida's statewide rate and local discretionary surtaxes imposed by each county. For example, Miami-Dade County charges a 1% surtax on top of the state rate, while Palm Beach County has its own additional local taxes. This means the total sales tax rate can vary between counties and even within cities. The software automatically applies these rates based on the customer's location, ensuring accurate tax calculations."}},
                {"@type": "Question", "name": "Does the automation adapt to localized Florida Sales Tax Holidays?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, the automation adapts to Florida's sales tax holidays by automatically applying the holiday rules, including specific price thresholds and eligible product categories. This eliminates the need for manual adjustments to your catalog or checkout process, ensuring compliance with state regulations during these periods."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["AI tax compliance", "complex and changing tax laws", "sales tax automation", "economic nexus", "Florida sales tax", "multi-county compliance", "small business automation", "South Florida"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Discover how AI can simplify tax compliance for small businesses navigating complex and changing laws. Save time, reduce errors, and ensure accuracy.";
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
