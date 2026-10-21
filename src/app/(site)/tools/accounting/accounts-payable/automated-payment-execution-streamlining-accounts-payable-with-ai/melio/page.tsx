import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/architecture-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Melio";
const PAGE_TITLE = "Melio for Intelligent Payment Execution";
const DESCRIPTION =
    "Automate payment execution with Melio to save time, reduce errors, and improve financial efficiency.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Melio, automated payment execution, accounts payable automation, scheduled payments, recurring payments, pay by card, QuickBooks integration, Xero integration, cash flow management, AI implementation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": TITLE,
        "url": "https://melio.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-payment-execution" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Melio", "automated payment execution", "accounts payable automation", "scheduled payments", "recurring payments", "pay by card"],
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
        "Melio simplifies payment management by automating the execution process, enhancing efficiency and accuracy.";
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
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
