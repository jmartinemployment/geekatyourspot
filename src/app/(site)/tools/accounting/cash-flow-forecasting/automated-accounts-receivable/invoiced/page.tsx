import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/overview-section";
import CostOfManualSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/architecture-section";
import DeployingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/evaluating-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Invoiced";
const DESCRIPTION =
    "Automate accounts receivable with Invoiced to boost cash flow and streamline payment processes.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": TITLE,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Invoiced, automated accounts receivable, cash flow forecasting, invoice-to-cash, automated follow-ups, payment collection, CashMatch AI, Smart Chasing, Report Builder, NetSuite integration, days sales outstanding, AI implementation",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "How does Invoiced calculate its cash collection forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "Invoiced calculates its cash collection forecasting using data from invoices, autopay, payment plans, promises-to-pay, and customer payment history. This comprehensive data collection allows Invoiced to provide highly accurate forecasts on when payments will be received." } },
                { "@type": "Question", "name": "Can the forecasting engine manage multi-entity or subsidiary structures?", "acceptedAnswer": { "@type": "Answer", "text": "Invoiced offers multi-entity reporting capabilities, allowing you to manage and report on different entities or subsidiaries within your organization. This feature is part of its powerful real-time reporting across the invoice-to-cash lifecycle." } },
                { "@type": "Question", "name": "Can I build custom forecasting reports outside of the standard templates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Invoiced allows you to build custom forecasting reports using its Report Builder. You can choose from 40 data types, set your visualization format such as table, chart, or metric, and select the fields you want your report to display." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Invoiced", "automated accounts receivable", "cash flow forecasting", "invoice-to-cash", "automated follow-ups", "payment collection"],
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
        "Invoiced revolutionizes accounts receivable by automating billing and payment collection, ensuring efficient cash flow management.";
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
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
