import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Bill";
const DESCRIPTION =
    "Automate accounts receivable to boost cash flow for small businesses in Miami-Dade, Broward, and West Palm Beach.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill";
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
            "keywords": "Bill, automated accounts receivable, cash flow forecasting, recurring invoices, ACH payments, Pay By Card, direct debit, invoice status tracking, Cash Flow Auto Forecasting, AR automation, billing synchronization, approval chains",
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
                { "@type": "Question", "name": "Is ACH secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ACH is secure. The ACH network is federally regulated and overseen by the National Automated Clearing House Association (NACHA). NACHA enforces strict controls and procedures for all parties using ACH payments." } },
                { "@type": "Question", "name": "How does using ACH help me manage my cash flow?", "acceptedAnswer": { "@type": "Answer", "text": "ACH transfers provide immediate reflection of debits in your account, unlike credit cards or checks that can take days to process. This means no more guessing games with your cash flow. You can schedule ACH transfers for specific dates or set them as recurring payments for better cash flow visibility." } },
                { "@type": "Question", "name": "Can I set up recurring invoices?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can set up BILL to automatically invoice customers on a preset schedule for recurring transactions. Set it up once and let it run on its own." } },
                { "@type": "Question", "name": "Does BILL support direct debit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, BILL supports direct debit. You can set up recurring direct debits from your customer's bank account with their consent. This ensures timely payments and is faster than receiving checks by mail." } },
                { "@type": "Question", "name": "What invoice statuses can I track using BILL?", "acceptedAnswer": { "@type": "Answer", "text": "With BILL, you can track when an invoice is sent, accepted, approved, and when the payment will be deposited." } },
                { "@type": "Question", "name": "Why should I add a bank account to my BILL receivables account?", "acceptedAnswer": { "@type": "Answer", "text": "Adding your bank account to a Basic Receivables account in BILL allows for payments via ACH, similar to direct deposit. This means no waiting for checks and no risk of lost payments. You can also track customer payments easily." } },
                { "@type": "Question", "name": "Can I really pay vendors with my credit card, even if they don't accept cards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can. BILL processes your credit card payment and pays your vendors via ACH, check, or virtual card, depending on their setup." } },
                { "@type": "Question", "name": "How long do Pay By Card payments take?", "acceptedAnswer": { "@type": "Answer", "text": "For vendors set up for ACH, funds are usually deposited the next business day after processing. New ACH setups may take up to 5 business days. Check payments take 5-7 business days, depending on USPS. Virtual card payments are delivered the same or next business day." } },
                { "@type": "Question", "name": "Will my vendor be charged for receiving Pay By Card payments?", "acceptedAnswer": { "@type": "Answer", "text": "No, vendors are not charged for receiving Pay By Card payments." } },
                { "@type": "Question", "name": "What is BILL Cash Flow Auto Forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "BILL Cash Flow Forecasting provides clear visibility into your business's cash flow by syncing with QuickBooks Online. It allows you to generate forecasts using historical data, track key metrics, and run “what if” simulations. You can customize views and dashboards to fit your business needs, and it offers out-of-the-box dashboards to optimize accounts payable processes." } },
                { "@type": "Question", "name": "How does BILL's AR automation speed up the forecast pipeline?", "acceptedAnswer": { "@type": "Answer", "text": "BILL's Accounts Receivable features streamline the process by reducing manual work and providing more flexible ways to get paid. With Payment Links and enhanced AR API capabilities, you can automate invoice updates and authorize payments, ensuring funds reach your account faster." } },
                { "@type": "Question", "name": "How does billing synchronization keep forecast projections from drifting?", "acceptedAnswer": { "@type": "Answer", "text": "BILL ensures that bills, invoices, and payments update automatically through a two-way sync with your accounting or payroll software. This synchronization helps maintain accurate and up-to-date financial data, preventing forecast projections from drifting." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Bill", "automated accounts receivable", "cash flow forecasting", "recurring invoices", "ACH payments", "Pay By Card"],
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
        "Discover how automated accounts receivable can transform cash flow management for small businesses in Miami-Dade, Broward, and West Palm Beach.";
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
