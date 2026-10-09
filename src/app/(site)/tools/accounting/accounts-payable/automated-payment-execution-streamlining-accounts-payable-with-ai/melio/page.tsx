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
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Melio";
const DESCRIPTION =
    "Automate payment execution with Melio to save time, reduce errors, and improve financial efficiency.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Melio, automated payment execution, accounts payable automation, scheduled payments, recurring payments, pay by card, QuickBooks integration, Xero integration, cash flow management, AI implementation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
    },
    "@id": `${PAGE_URL}#software`
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Melio", "automated payment execution", "accounts payable automation", "scheduled payments", "recurring payments", "pay by card"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek at Your Spot' },
    };
};

export default async function Page() {
    const heroSummary =
        "Melio simplifies payment management by automating the execution process, enhancing efficiency and accuracy.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
