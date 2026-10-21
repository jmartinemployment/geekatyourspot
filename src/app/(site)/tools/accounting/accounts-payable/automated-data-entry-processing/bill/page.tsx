import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/overview-section";
import ManualApChallengesSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/manual-ap-challenges-section";
import HowBillTransformsSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/how-bill-transforms-section";
import CoreFunctionalitySection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/core-functionality-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/bill/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Bill";
const PAGE_TITLE = "Bill for Intelligent Data Entry & Processing";
const DESCRIPTION =
    "Bill automates invoice processing, approvals, and expense management, with AI-powered invoice coding and configurable approval workflows.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-data-entry-processing/bill";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Bill, accounts payable automation, invoice coding, approval workflows, expense management, PO matching, payment processing, fraud detection, QuickBooks integration, AI implementation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": TITLE,
        "url": "https://www.bill.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-data-entry-processing" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: [
            "Bill",
            "accounts payable automation",
            "invoice coding",
            "approval workflows",
            "expense management",
            "PO matching",
        ],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: CANONICAL,
        },
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
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const heroSummary =
        "Bill automates invoice entry, approvals and payments so AP processing time drops by half instead of consuming your week.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={PAGE_TITLE}
                summary={heroSummary} />
            <OverviewSection />
            <ManualApChallengesSection />
            <HowBillTransformsSection />
            <CoreFunctionalitySection />
            <ImplementationSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
