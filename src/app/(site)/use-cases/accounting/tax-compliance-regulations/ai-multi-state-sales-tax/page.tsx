import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/lede-section";
import ChallengesSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/challenges-section";
import StatusQuoSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/status-quo-section";
import MechanicsSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/key-factors-section";
import DecisionsSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/decisions-section";
import SequenceSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/sequence-section";
import DataIntegrationSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/data-integration-section";
import RolesSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/roles-section";
import RightFitSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/right-fit-section";
import PreparingSection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/preparing-section";
import PAASection from "@/components/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Multi-State Sales Tax";
const DESCRIPTION =
    "AI makes Multi-State Sales Tax Nexus compliance simple for South Florida small businesses. Automate filings, reduce errors, and stay audit-ready.";
const CANONICAL = "/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax";
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
            "datePublished": "2026-10-13T19:00:57.5894150Z",
            "dateModified": "2026-10-13T19:00:57.5894150Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Multi-State Sales Tax Nexus, sales tax compliance, AI tax automation, Florida small business tax solutions, TaxCloud, Zamp, Quaderno, TaxValet, TaxJar, local tax consulting",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations" },
            "mentions": [
                { "@type": "Thing", "name": "Quaderno", "url": "https://quaderno.io/" },
                { "@type": "Thing", "name": "TaxCloud", "url": "https://taxcloud.com/" },
                { "@type": "Thing", "name": "TaxJar", "url": "https://www.taxjar.com/" },
                { "@type": "Thing", "name": "TaxValet", "url": "https://thetaxvalet.com/" },
                { "@type": "Thing", "name": "Zamp", "url": "https://zamp.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How does the software distinguish between Economic and Physical Nexus triggers?", "acceptedAnswer": {"@type": "Answer", "text": "Teams want to know if the tool tracks both economic and physical presence. Economic nexus often starts at $100,000 in gross sales, but physical nexus can be triggered by just one remote employee or inventory in a third-party warehouse. Physical nexus does not depend on sales thresholds."}},
                {"@type": "Question", "name": "What happens if the tool discovers we crossed a threshold months before implementation?", "acceptedAnswer": {"@type": "Answer", "text": "This is about prior period liability. Users need to know if the tool can flag when a threshold was crossed in the past and if it helps prepare data for Voluntary Disclosure Agreements to manage penalties for late registration."}},
                {"@type": "Question", "name": "How does the platform unify multi-channel transaction data?", "acceptedAnswer": {"@type": "Answer", "text": "Businesses using e-commerce sites, ERPs, and billing platforms want to know how the tool brings all that data together for threshold tracking. They also ask how the software filters out sales covered by Marketplace Facilitator laws, so they are not taxed twice, but still counts those sales toward state thresholds if required."}},
                {"@type": "Question", "name": "Is filing and remittance fully automated, or does it require manual quality assurance?", "acceptedAnswer": {"@type": "Answer", "text": "Many ask if the platform just calculates tax rates or if it is a full-service tool that also fills out, files, and sends payments to state revenue departments. This distinction is important for small teams wanting to reduce manual work."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Multi-State Sales Tax Nexus", "sales tax compliance", "AI tax automation", "Florida small business tax solutions", "TaxCloud", "Zamp", "Quaderno", "TaxValet", "TaxJar", "local tax consulting"],
        authors: [{ name: 'Jeff Martin' }],
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
        "Stay ahead of shifting tax rules across state lines. Our AI solutions help small businesses in Miami-Dade, Broward and West Palm Beach automate sales tax compliance, cut errors, and avoid costly penalties.";
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
