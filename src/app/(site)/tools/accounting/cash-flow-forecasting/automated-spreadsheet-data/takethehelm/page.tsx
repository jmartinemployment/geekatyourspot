import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Take the Helm";
const PAGE_TITLE = "Take the Helm for Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Take the Helm automates spreadsheet data for accurate cash flow forecasting in South Florida's small businesses.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm";
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
            "keywords": "Take the Helm, Helm, automated spreadsheet data, cash flow forecasting, QuickBooks, Xero, Sage, scenario planning, KPI dashboard, drag-and-drop forecasting, Veem payments, accounts payable, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-take-the-helm",
                "name": TITLE,
                "url": "https://takethehelm.app/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting#article" }
            }
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Take the Helm", "Helm", "automated spreadsheet data", "cash flow forecasting", "scenario planning", "QuickBooks", "Xero", "Sage"],
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
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
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
        "Automate your cash flow forecasting with Take the Helm, transforming spreadsheet data management for South Florida's small businesses.";
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
            <SchedulerShell />
        </>
    );
}
