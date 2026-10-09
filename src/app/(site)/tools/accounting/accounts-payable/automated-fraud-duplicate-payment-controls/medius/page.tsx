import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/how-it-works-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/right-fit-section";
import FaqSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Medius";
const DESCRIPTION =
    "Medius automates fraud & duplicate payment controls, enhancing financial security with AI-driven solutions.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius";
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
            "keywords": "Medius, automated fraud and duplicate payment controls, accounts payable automation, fraud detection, duplicate invoice detection, anomaly detection, risk scoring, statement reconciliation, three-way matching, supplier change monitoring, ERP integration, AI implementation",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "What's the difference between statement reconciliation and invoice matching?", "acceptedAnswer": { "@type": "Answer", "text": "Invoice matching checks a single invoice against a purchase order and sometimes a receipt. Statement reconciliation examines the entire supplier statement, including every invoice, credit, and payment the supplier claims is outstanding, against your AP records. This process identifies missing invoices or duplicate payments, which invoice matching alone might miss, as it compares the whole picture rather than one invoice at a time." } },
                { "@type": "Question", "name": "How does AI-driven statement reconciliation software work?", "acceptedAnswer": { "@type": "Answer", "text": "AI-driven statement reconciliation software automatically reads a supplier statement, regardless of format, and matches each line against your existing invoice and payment records. Lines that match require no further action, while exceptions like missing invoices, duplicates, or mismatched amounts are flagged for review, eliminating the need for manual line-by-line checks." } },
                { "@type": "Question", "name": "Can accounts payable reconciliation software prevent duplicate payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it can. Duplicate payments typically occur when invoices are processed manually, leading to errors. Reconciliation software identifies these duplicates by cross-referencing all payment records, ensuring each invoice is only paid once." } },
                { "@type": "Question", "name": "What currencies does Medius support for payouts?", "acceptedAnswer": { "@type": "Answer", "text": "Medius supports over 180 currencies by default. Additional currencies can be added manually or synced from your ERP if needed." } },
                { "@type": "Question", "name": "What are the benefits or tradeoffs of each payment method?", "acceptedAnswer": { "@type": "Answer", "text": "ACH / Direct Deposit: Low-cost electronic transfer to U.S. bank accounts. May take a few days. Check: Sent via postal mail. Slower delivery. Available in USD and CAD. Reliability varies by country. Overnight shipping is available for urgent checks. Wire Transfer: Fast and reliable for domestic and international payments. Higher cost per transaction. Virtual card (Vcard): Secure, one-time-use card for supplier payments. Offers better control and rebates. Supplier acceptance may vary. SEPA: Cost-effective Eurozone bank transfer. Fast within Europe. Supports EUR only. BACS (UK): Low-cost UK domestic transfer. Slower (2–3 days) compared to CHAPS. CHAPS (UK): High-speed, same-day UK domestic transfer. Higher fees than BACS. BankGiro (Nordics): Common low-cost local payment method in Sweden. Region-specific." } },
                { "@type": "Question", "name": "What types of anomalies can Medius Fraud Detection Software identify?", "acceptedAnswer": { "@type": "Answer", "text": "Medius Fraud Detection Software can identify various anomalies through its advanced risk detection capabilities. These include duplicate invoices, discrepancies in payment amounts, changes in supplier information, and mismatched invoice details. The software also flags unusual patterns that may indicate potential fraud, helping businesses to prevent financial losses before they occur." } },
                { "@type": "Question", "name": "How does it catch fraud before a payment goes out?", "acceptedAnswer": { "@type": "Answer", "text": "Medius uses intelligent anomaly detection to identify potential fraud and duplicate payments before money leaves the business. It flags unusual invoice amounts, supplier-detail changes, and patterns that deserve a closer look. This proactive approach ensures that suspicious transactions are caught early, reducing the risk of financial losses." } },
                { "@type": "Question", "name": "What kind of security measures does the software provide?", "acceptedAnswer": { "@type": "Answer", "text": "Medius provides enterprise-grade security measures, including encryption and role-based access controls. It also ensures compliance with global standards such as GDPR and SOC, safeguarding sensitive financial information and maintaining data integrity." } },
                { "@type": "Question", "name": "Does this software require a completely separate integration?", "acceptedAnswer": { "@type": "Answer", "text": "Medius integrates with existing systems, allowing businesses to enhance their accounts payable processes without requiring a completely separate integration. This seamless integration helps streamline operations and improve efficiency." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Medius", "automated fraud and duplicate payment controls", "accounts payable automation", "fraud detection", "duplicate invoice detection", "statement reconciliation"],
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
        "Medius streamlines fraud detection and duplicate payment control, safeguarding financial operations with AI-driven precision.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <HowItWorksSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
