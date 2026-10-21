import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/overview-section";
import CostOfManualApSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/cost-of-manual-ap-section";
import HowAvidxchangeTransformsSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/how-avidxchange-transforms-section";
import StreamlinesApSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/streamlines-ap-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AvidXchange";
const PAGE_TITLE = "AvidXchange for Intelligent Data Entry & Processing";
const DESCRIPTION =
    "AvidXchange automates invoice management and B2B payments, extracting, matching, and routing invoice data while integrating with existing accounting systems.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "AvidXchange, accounts payable automation, invoice automation, B2B payments, paperless AP, approval workflows, fraud controls, Microsoft Dynamics integration, payment security, AI implementation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": TITLE,
        "url": "https://www.avidxchange.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-data-entry-processing" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: [
            "AvidXchange",
            "accounts payable automation",
            "invoice automation",
            "B2B payments",
            "paperless AP",
            "approval workflows",
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
        "AvidXchange captures invoice data at header and line-item level with 99.2% accuracy, then routes, approves and pays it without paper.";
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
            <CostOfManualApSection />
            <HowAvidxchangeTransformsSection />
            <StreamlinesApSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
