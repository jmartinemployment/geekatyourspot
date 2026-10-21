import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/architecture-section";
import ImplementingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/implementing-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Bill";
const PAGE_TITLE = "Bill for Intelligent Approval Workflows";
const DESCRIPTION =
    "Streamline invoice approvals with Bill's automated workflows, enhancing efficiency and accuracy for your business.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/bill";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Bill, automated approval workflows, accounts payable automation, invoice approval, AI invoice coding, 2- and 3-way matching, QuickBooks Online, Xero, mobile approvals, AI implementation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": TITLE,
        "url": "https://www.bill.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-approval-workflow" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Bill", "automated approval workflows", "accounts payable automation", "invoice approval", "AI invoice coding", "2- and 3-way matching"],
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
        "Bill streamlines invoice approvals with automated workflows, reducing errors and saving time for your business.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <ArchitectureSection />
            <ImplementingSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
