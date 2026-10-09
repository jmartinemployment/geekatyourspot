import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/overview-section";
import HiddenCostsSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/hidden-costs-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/architecture-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/evaluating-section";
import WhoBenefitsSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/who-benefits-section";
import FaqSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Bill";
const DESCRIPTION =
    "Streamline your payment process with Automated Payment Execution by Bill, reducing errors and saving time.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill";
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
            "keywords": "Bill, automated payment execution, accounts payable automation, payment approvals, ACH payments, virtual card, international wire, two-way sync, Xero integration, QuickBooks integration, AI implementation",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "How can vendors or payees check invoice status or fix vendor account issues in BILL?", "acceptedAnswer": { "@type": "Answer", "text": "Vendors and payees can check payment status, confirm how funds are received, or resolve vendor account problems by visiting the BILL Help Center." } },
                { "@type": "Question", "name": "How do accountants or bookkeeping firms get priority partner support from BILL?", "acceptedAnswer": { "@type": "Answer", "text": "Accounting firms and BILL partners receive dedicated assistance through Accountant Care." } },
                { "@type": "Question", "name": "Why is my payment delayed or still pending in BILL?", "acceptedAnswer": { "@type": "Answer", "text": "Processing times vary by payment type, such as ACH, check, or virtual card. Learn how to track payment status and resolve delays by visiting the BILL Help Center." } },
                { "@type": "Question", "name": "How do I report a security issue or suspicious activity to BILL?", "acceptedAnswer": { "@type": "Answer", "text": "If you suspect fraud, phishing, or unauthorized access, report it immediately to the BILL security team through the BILL Help Center." } },
                { "@type": "Question", "name": "What is the BILL network?", "acceptedAnswer": { "@type": "Answer", "text": "The BILL network offers a secure platform for digital vendor payments, eliminating the need for checks or sensitive bank details. Connect with your vendors to send fast and secure ACH or virtual card payments. Vendors gain more control and visibility, and you save time. Start with a risk-free trial to see if your vendor is among the 3.2+ million vendors in our network." } },
                { "@type": "Question", "name": "How can I pay vendors through the BILL network?", "acceptedAnswer": { "@type": "Answer", "text": "You can pay vendors in three easy steps: Search for your vendor by name and zip code in our network, or ask for their unique BILL payment network ID. Connect with them or send an invite from your dashboard. Then, send a payment via ACH, virtual card, check, or international wire." } },
                { "@type": "Question", "name": "What is BILL virtual card?", "acceptedAnswer": { "@type": "Answer", "text": "The BILL virtual card service is a free, easy, and fast way to make payments using your BILL account. Vendors receive a single-use, 16-digit virtual card number for processing." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Bill", "automated payment execution", "accounts payable automation", "payment approvals", "ACH payments", "virtual card"],
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
        "Bill offers Automated Payment Execution to streamline payment workflows and enhance accuracy for small businesses.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <HiddenCostsSection />
            <TransformsSection />
            <ArchitectureSection />
            <ImplementationSection />
            <EvaluatingSection />
            <WhoBenefitsSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
