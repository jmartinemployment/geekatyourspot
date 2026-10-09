import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/overview-section";
import CostOfManualSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/transforms-section";
import MechanicsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/mechanics-section";
import DeployingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/evaluating-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Chaserhq";
const DESCRIPTION =
    "Automate accounts receivable with Chaserhq for efficient cash flow and reduced manual tasks.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq";
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
            "keywords": "Chaserhq, automated accounts receivable, cash flow forecasting, payment reminders, late payment predictor, receivables forecasting, relationship dashboard, Stripe integration, Xero integration, DSO, predictive analytics, AI implementation",
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
                { "@type": "Question", "name": "How long does it take to improve your accounts receivable process?", "acceptedAnswer": { "@type": "Answer", "text": "With a focused plan, you can see progress in 90 days. The process works in three phases: assess and stabilize (days 1–30), automate and optimize (days 31–60), and scale and succeed (days 61–90). Most teams reduce DSO by 15–20% within this time." } },
                { "@type": "Question", "name": "What is the first step to reducing late payments?", "acceptedAnswer": { "@type": "Answer", "text": "Start by auditing your current process and cleaning debtor data. Map every stage from invoice to payment, confirm who owns each step, and segment customers by payment history and risk. Accurate data is key to effective automation later on." } },
                { "@type": "Question", "name": "How does automation reduce days sales outstanding (DSO)?", "acceptedAnswer": { "@type": "Answer", "text": "Automation sends timely reminders, prioritizes high-risk accounts using AI, and removes manual chasing delays. Businesses automating over half of their workflows have cut DSO by about a third, speeding up cash flow by around 19 days." } },
                { "@type": "Question", "name": "Which accounts receivable KPIs should you track?", "acceptedAnswer": { "@type": "Answer", "text": "Track average DSO, the percentage of overdue invoices, and the average time between an invoice's due date and your first follow-up." } },
                { "@type": "Question", "name": "What are payment reminders and what is their role in accounts receivable?", "acceptedAnswer": { "@type": "Answer", "text": "Payment reminders notify customers about outstanding invoices and encourage payment. They ensure timely payments, improve cash flow, reduce DSO, minimize manual follow-up, maintain customer relations, and provide clear communication." } },
                { "@type": "Question", "name": "How can automated payment collection reminders help you get paid?", "acceptedAnswer": { "@type": "Answer", "text": "Automated reminders increase on-time payments by sending timely notifications, escalating follow-ups for overdue invoices, offering a secure online payment portal, reducing late payments, and improving cash flow efficiency as measured by DSO." } },
                { "@type": "Question", "name": "Can Chaser's payment reminders be sent automatically?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Chaser provides automation tools to schedule and send payment reminders automatically. You can set up recurring schedules, customize content and timing, and trigger reminders based on events like invoice due dates or payment delays." } },
                { "@type": "Question", "name": "How does Chaser predict exactly when an invoice will be paid?", "acceptedAnswer": { "@type": "Answer", "text": "Chaser uses a late payment predictor that analyzes factors such as the invoice due date, value, recent and historical payment behavior, and other invoice details. This tool categorizes invoices into low, medium, or high-risk brackets and provides a percentage score indicating the likelihood of timely payment. This helps businesses make informed credit control decisions." } },
                { "@type": "Question", "name": "What are \"Recommended Chasing Times\" and how do they impact the forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Recommended Chasing Times involve scheduling payment reminder emails and SMS messages to align with customers' preferred payment times based on past behavior. This strategic scheduling maximizes visibility and helps businesses align their communication with optimal payment times, thereby improving the accuracy of payment forecasts." } },
                { "@type": "Question", "name": "How does automated invoice grouping prevent data distortion in my forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Chaser separates receivables into categories such as promised, disputed, at risk, on track, and broken promise. This categorization reflects the actual conditions of collections, making it easier to identify when a predicted total hides different invoice conditions. This approach helps prevent data distortion by providing a clearer picture of the receivables landscape." } },
                { "@type": "Question", "name": "Does setting up Chaser's forecasting require complex ERP engineering?", "acceptedAnswer": { "@type": "Answer", "text": "Chaser’s cash flow forecast is designed to integrate seamlessly with your existing systems without the need for complex ERP engineering. It connects real-time receivables data, ledger balances, and manual inputs into a continuously updated view of future cash positions, supporting informed financial decisions." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Chaserhq", "automated accounts receivable", "cash flow forecasting", "payment reminders", "late payment predictor", "receivables forecasting"],
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
        "Chaserhq transforms accounts receivable management with automation, providing real-time insights and reducing manual tasks.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <MechanicsSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
