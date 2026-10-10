import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Invoiced";
const DESCRIPTION =
    "Automate accounts receivable with Invoiced for better cash flow in South Florida's small businesses.";
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
            "keywords": "Invoiced, automated accounts receivable, cash flow forecasting, cash collection forecasting, CashMatch AI, multi-entity forecasting, custom forecasting reports, approval chains, routing, automation logic, ERP integration, go-live process",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "How does Invoiced calculate its cash collection forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "Invoiced calculates cash collection forecasting by gathering data from invoices, autopay, payment plans, promises-to-pay, and customer payment history. This comprehensive data collection allows Invoiced to deliver highly accurate forecasts on when payments will be received, providing clear insights into collections performance and helping businesses manage their cash flow effectively." } },
                { "@type": "Question", "name": "How does \"CashMatch AI\" impact the reliability of the cash forecast?", "acceptedAnswer": { "@type": "Answer", "text": "CashMatch AI enhances the reliability of cash forecasts by automatically matching incoming payments to open invoices and assigning a confidence score. High-confidence matches are applied automatically, while those with lower confidence are flagged for human review. This process ensures that payments are accurately applied, improving the overall reliability of cash flow predictions." } },
                { "@type": "Question", "name": "Can the forecasting engine manage multi-entity or subsidiary structures?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Invoiced's forecasting engine can manage multi-entity or subsidiary structures. It offers multi-entity filtering and aggregation options for generating reports, allowing businesses to understand financial performance at both the company-wide and individual business unit levels." } },
                { "@type": "Question", "name": "Can I build custom forecasting reports outside of the standard templates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Invoiced allows users to build custom forecasting reports in addition to using pre-built templates. This flexibility enables businesses to tailor reports to their specific needs, providing powerful, real-time insights across the entire invoice-to-cash lifecycle." } },
                { "@type": "Question", "name": "What infrastructure systems does Invoiced pull data from?", "acceptedAnswer": { "@type": "Answer", "text": "Invoiced pulls data from ERP systems to automatically generate accurate invoices. It integrates with systems like Microsoft Dynamics, allowing for bi-directional data flow where customer records, invoices, credit memos, and payments sync automatically. This integration streamlines processes and ensures up-to-date information is available for cash flow management." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Invoiced", "automated accounts receivable", "cash flow forecasting", "cash collection forecasting", "CashMatch AI", "multi-entity forecasting"],
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
        "Discover Invoiced for automated accounts receivable, enhancing cash flow management for small businesses.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
