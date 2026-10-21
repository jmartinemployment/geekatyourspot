import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/architecture-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/evaluating-section";
import RightChoiceSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/right-choice-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Stampli";
const PAGE_TITLE = "Stampli for Intelligent Approval Workflows";
const DESCRIPTION =
    "Transform your AP process with Stampli's automated approval workflows for faster, error-free operations.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/stampli";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Stampli, automated approval workflows, accounts payable automation, invoice approval, predefined approval routing, ERP integration, purchase orders, AI-powered invoice processing, audit trails, AI implementation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": TITLE,
        "url": "https://www.stampli.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-approval-workflow" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Stampli", "automated approval workflows", "accounts payable automation", "invoice approval", "predefined approval routing", "ERP integration"],
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
        "Optimize your financial processes with Stampli's automated approval workflows, ensuring faster and error-free approvals.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <ArchitectureSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightChoiceSection />
            <SchedulerShell />
        </>
    );
}
