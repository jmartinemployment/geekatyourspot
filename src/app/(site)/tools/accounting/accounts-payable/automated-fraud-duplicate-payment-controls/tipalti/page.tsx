import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/architecture-section";
import ImplementingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/implementing-section";
import JudgingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/judging-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/right-fit-section";
import FaqSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Tipalti";
const DESCRIPTION =
    "Automate fraud and duplicate payment controls with Tipalti to enhance financial security and efficiency.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti";
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
            "keywords": "Tipalti, automated fraud and duplicate payment controls, accounts payable automation, duplicate bill detection, fraud detection, supplier portal, global payments, ERP integration, compliance, AI implementation",
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
                { "@type": "Question", "name": "How many attempts are made to execute a payment?", "acceptedAnswer": { "@type": "Answer", "text": "Tipalti does not try again if a payment is rejected. The payee will remain un-payable until they update their payment details through the supplier portal." } },
                { "@type": "Question", "name": "Will Tipalti still pay out if we do not have funds in our account?", "acceptedAnswer": { "@type": "Answer", "text": "No, all payments must be funded in advance." } },
                { "@type": "Question", "name": "How fast are payments processed?", "acceptedAnswer": { "@type": "Answer", "text": "The speed of payment processing depends on several factors, including the payment method, currency conversions, and the payee’s banking system." } },
                { "@type": "Question", "name": "When are payees informed of payments that were made?", "acceptedAnswer": { "@type": "Answer", "text": "Payees receive automatic notifications when payments are made. If there is an issue, such as incomplete tax forms or a bank rejection, they are informed of the problem." } },
                { "@type": "Question", "name": "Can we use Tipalti to pay other suppliers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can pay other suppliers if they are registered, your account is funded, and a payment type is selected in Tipalti. Many customers use Tipalti to streamline their accounts payable processes." } },
                { "@type": "Question", "name": "What is Tipalti Detect and how does it prevent fraud?", "acceptedAnswer": { "@type": "Answer", "text": "Tipalti Detect is a proactive defense system against fraud, designed to identify suspicious patterns before they pose a threat. It is particularly effective for global partner business models, offering robust audit trails and detailed tracking to maintain secure and compliant operations. Stop Fraud Before It Starts" } },
                { "@type": "Question", "name": "How does Tipalti ensure compliance with global sanctions and watchlists?", "acceptedAnswer": { "@type": "Answer", "text": "Tipalti offers advanced compliance checks, including Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. This ensures that all transactions and payees are verified against global sanctions and watchlists, maintaining compliance with international standards. How does Tipalti’s gaming payment solution work?" } },
                { "@type": "Question", "name": "How are supplier identities validated during onboarding?", "acceptedAnswer": { "@type": "Answer", "text": "Supplier identities are validated through a self-service supplier portal, which collects necessary data such as tax forms and banking details. Tipalti uses over 26,000 automated electronic payment rules to verify payment details, ensuring accuracy and compliance during the onboarding process. Leading Nonprofit Accounting Software" } },
                { "@type": "Question", "name": "Does Tipalti run checks on subsequent payouts after initial onboarding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Tipalti continuously monitors transactions to detect suspicious activity across payments, refunds, and seller payouts. This ongoing vigilance helps to maintain security and compliance beyond the initial onboarding phase. Marketplace Economy 101" } },
                { "@type": "Question", "name": "Does the platform provide a clear paper trail for audited fraud cases?", "acceptedAnswer": { "@type": "Answer", "text": "Tipalti provides a robust audit trail that supports detailed tracking of transactions, which is essential for auditing fraud cases. This transparency helps ensure that all financial activities can be reviewed and verified as needed. Stop Fraud Before It Starts" } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Tipalti", "automated fraud and duplicate payment controls", "accounts payable automation", "duplicate bill detection", "fraud detection", "supplier portal"],
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
        "Tipalti streamlines payment processes, reducing fraud and duplicate payments with advanced automation.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <ArchitectureSection />
            <ImplementingSection />
            <JudgingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
