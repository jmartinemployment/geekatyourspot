import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/overview-section";
import ChallengesSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/challenges-section";
import SimplifiesSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/simplifies-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/architecture-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/right-fit-section";
import FaqSection from "@/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Bill";
const DESCRIPTION =
    "Automate fraud detection and prevent duplicate payments with Bill's advanced controls for small businesses.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill";
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
            "keywords": "Bill, automated fraud and duplicate payment controls, accounts payable automation, duplicate invoice detection, invoice matching, purchase order matching, approval workflows, QuickBooks integration, Xero integration, predictive AI fraud prevention, audit trail, AI implementation",
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
                { "@type": "Question", "name": "What does BILL AI do?", "acceptedAnswer": { "@type": "Answer", "text": "BILL AI alerts you if a duplicate invoice is detected, helping you avoid paying the same bill twice." } },
                { "@type": "Question", "name": "How does BILL AI help with missing bills?", "acceptedAnswer": { "@type": "Answer", "text": "BILL AI reviews your payment history to identify potential missing bills, helping you avoid late fees." } },
                { "@type": "Question", "name": "Can BILL AI create W-9 forms?", "acceptedAnswer": { "@type": "Answer", "text": "You can upload a W-9 for a vendor, and BILL AI will extract the data and update the vendor’s record." } },
                { "@type": "Question", "name": "How does BILL AI assist with expense management?", "acceptedAnswer": { "@type": "Answer", "text": "BILL AI codes transactions by auto-populating categories, analyzing merchant and transaction details, and using selection history. This saves reconciliation time and improves accuracy." } },
                { "@type": "Question", "name": "What is AI-powered receipt capture and matching?", "acceptedAnswer": { "@type": "Answer", "text": "BILL AI uses receipt integrations to automatically match receipts with the correct transactions." } },
                { "@type": "Question", "name": "Is ACH secure?", "acceptedAnswer": { "@type": "Answer", "text": "The ACH network is federally regulated and overseen by the National Automated Clearing House Association (NACHA), which enforces strict controls and procedures for secure payments." } },
                { "@type": "Question", "name": "How does using ACH help me manage my cash flow?", "acceptedAnswer": { "@type": "Answer", "text": "ACH transfers reflect immediately in your account, unlike credit card or check payments that can take days or weeks. You can schedule ACH transfers for specific dates or set them as recurring payments for better cash flow visibility." } },
                { "@type": "Question", "name": "How does BILL prevent internal fraud and unauthorized access?", "acceptedAnswer": { "@type": "Answer", "text": "BILL employs multiple layers of security to prevent internal fraud and unauthorized access. The platform uses multi-factor authentication, secure login credentials, and strict procedures for password resets. Additionally, BILL provides robust permission controls and a complete, unalterable audit trail to protect financial data. These measures ensure that every action is meticulously logged, creating a transparent and secure record for audits and compliance." } },
                { "@type": "Question", "name": "What should I do if I notice suspicious activity on my BILL account?", "acceptedAnswer": { "@type": "Answer", "text": "If you notice suspicious activity on your BILL account, it is important to contact customer support as soon as possible. BILL advises reporting any unauthorized transfers or errors within 60 days of the transaction posting to your account. They will investigate and resolve any suspected errors to ensure your account remains secure." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Bill", "automated fraud and duplicate payment controls", "accounts payable automation", "duplicate invoice detection", "invoice matching", "approval workflows"],
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
        "Bill enhances efficiency by automating fraud detection and duplicate payment controls for small businesses.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <SimplifiesSection />
            <ArchitectureSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
