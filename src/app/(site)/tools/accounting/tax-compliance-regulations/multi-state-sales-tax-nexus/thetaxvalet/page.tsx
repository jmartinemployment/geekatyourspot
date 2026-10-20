import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "TaxValet";
const PAGE_TITLE = "TaxValet for Multi-State Sales Tax Nexus";
const DESCRIPTION =
    "Multi-State Sales Tax Nexus is made simple for Miami-Dade, Broward, and West Palm Beach small businesses with TaxValet's expert compliance platform.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet";
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
            "keywords": "TaxValet, multi-state sales tax nexus, economic nexus, sales tax compliance, sales tax automation, sales tax filing, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-taxvalet",
                "name": TITLE,
                "url": "https://thetaxvalet.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does TaxValet pinpoint where a business owes sales tax?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet runs a detailed Nexus Review during onboarding. They look at your business’s history to find out exactly which states you owe sales tax in. This clears up confusion and helps you avoid noncompliance."}},
                {"@type": "Question", "name": "What happens if a business has historical sales tax exposure before signing up?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet creates an AuditReady action plan to address any past sales tax exposure. They also handle registering your business for the right state permits."}},
                {"@type": "Question", "name": "Why choose a managed service like TaxValet over automated tax software?", "acceptedAnswer": {"@type": "Answer", "text": "Automated software can lose connection or miss complex changes as your business grows. TaxValet gives you a team of real experts who use judgment and experience to make strategic tax decisions, not just automated calculations."}},
                {"@type": "Question", "name": "What is the onboarding and setup process for multi-state tracking?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet uses a four-step process: a free consultation, building an AuditReady plan with a nexus review, setting up tax collection across your storefronts, and then moving to ongoing filing and state notice management."}},
                {"@type": "Question", "name": "How does the pricing scale if a business expands into more states or processes more transactions?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet charges a flat rate that covers unlimited transactions. You will not see surprise fees as your sales or state exposure increases."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["TaxValet", "multi-state sales tax nexus", "economic nexus", "sales tax compliance", "sales tax automation", "sales tax filing", "South Florida small business"],
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
        "TaxValet helps South Florida small businesses manage Multi-State Sales Tax Nexus, reducing compliance risk and operational friction as you expand sales channels.";
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
