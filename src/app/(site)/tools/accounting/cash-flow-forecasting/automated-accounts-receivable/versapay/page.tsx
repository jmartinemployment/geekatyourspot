import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/overview-section";
import CostOfManualSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/cost-of-manual-section";
import WeeklyWorkflowSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/weekly-workflow-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/architecture-section";
import DeployingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/evaluating-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Versapay";
const DESCRIPTION =
    "Automate accounts receivable with Versapay for faster payments and fewer errors, boosting efficiency and accuracy.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay";
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
            "keywords": "Versapay, automated accounts receivable, cash flow forecasting, AR automation, B2B payments, customer collaboration, AI-assisted cash application, collaborative accounts receivable, exception workflows, ERP systems, days sales outstanding (DSO), average days to pay (ADP), digital payment portal, ACH, virtual cards, real-time dashboards, Promise-to-Pay forecasts, API connectors, AI implementation",
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
                { "@type": "Question", "name": "How does automating cash application fix cash flow forecasting errors?", "acceptedAnswer": { "@type": "Answer", "text": "Automating cash application with Versapay helps finance teams match incoming payments to outstanding invoices automatically. This reduces manual work and reconciliation delays, providing greater control over cash flow. By eliminating errors in the reconciliation process, businesses can improve the accuracy of their cash flow forecasts." } },
                { "@type": "Question", "name": "What are \"Promise-to-Pay\" forecasts?", "acceptedAnswer": { "@type": "Answer", "text": "Promise-to-Pay forecasts are part of Versapay's AR reporting dashboard, which includes key performance metrics. These forecasts help monitor trends and manage risk by predicting when customers are likely to pay, allowing businesses to streamline collections and improve cash flow predictability." } },
                { "@type": "Question", "name": "Can dispute resolution capabilities protect the forecast pipeline?", "acceptedAnswer": { "@type": "Answer", "text": "Versapay's automated invoice processing and dispute resolution capabilities provide instant access to relevant documentation when a customer questions an invoice. This turns potential payment delays into quick resolutions, protecting the forecast pipeline by maintaining the speed and accuracy of cash flow predictions." } },
                { "@type": "Question", "name": "Which ERPs support Versapay's forecasting features?", "acceptedAnswer": { "@type": "Answer", "text": "Versapay integrates seamlessly with various ERP systems, using API connectors or native integrations. This allows businesses to maintain a source of truth and leverage Versapay's forecasting features effectively." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Versapay", "automated accounts receivable", "cash flow forecasting", "AR automation", "B2B payments", "customer collaboration"],
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
        "Versapay revolutionizes accounts receivable by automating invoicing and payments, enhancing efficiency and accuracy.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <WeeklyWorkflowSection />
            <ArchitectureSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
