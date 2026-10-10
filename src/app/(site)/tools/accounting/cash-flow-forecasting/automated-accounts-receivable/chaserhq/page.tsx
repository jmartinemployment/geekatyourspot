import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Chaserhq";
const DESCRIPTION =
    "Chaserhq automates accounts receivable for South Florida businesses, improving cash flow and reducing manual work.";
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
            "keywords": "Chaserhq, automated accounts receivable, cash flow forecasting, automated payment reminders, days sales outstanding (DSO), accounts receivable KPIs, Recommended Chasing Times, invoice grouping, Customer Billing Portal, credit risk, ERP integration, payment date prediction",
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
                { "@type": "Question", "name": "How long does it take to improve your accounts receivable process?", "acceptedAnswer": { "@type": "Answer", "text": "You can see measurable progress in 90 days with a focused plan. The process unfolds in three phases: assess and stabilize in the first 30 days, automate and optimize in the next 30, and scale and succeed in the final 30. Most teams reduce their Days Sales Outstanding (DSO) by 15–20% within this timeframe." } },
                { "@type": "Question", "name": "What is the first step to reducing late payments?", "acceptedAnswer": { "@type": "Answer", "text": "Begin by auditing your current process and cleaning up debtor data. Map out each stage from invoice to payment, identify who is responsible for each step, and segment customers by their payment history and risk level. Accurate and segmented data is crucial for effective automation later on." } },
                { "@type": "Question", "name": "How does automation reduce days sales outstanding (DSO)?", "acceptedAnswer": { "@type": "Answer", "text": "Automation ensures consistent and timely reminders across different channels, prioritizes high-risk accounts using AI, and eliminates the delays and gaps of manual processes. Businesses automating more than half of their receivables workflows have reduced DSO by about a third, speeding up cash flow by roughly 19 days." } },
                { "@type": "Question", "name": "Which accounts receivable KPIs should you track?", "acceptedAnswer": { "@type": "Answer", "text": "Key performance indicators to track include average DSO, the percentage of overdue invoices, and the average time between an invoice's due date and your first follow-up." } },
                { "@type": "Question", "name": "What are payment reminders and what is their role in accounts receivable?", "acceptedAnswer": { "@type": "Answer", "text": "Payment reminders alert customers about outstanding invoices and encourage them to pay. They play a vital role in ensuring timely payments, improving cash flow, reducing DSO, minimizing manual follow-up, maintaining customer relationships, and providing clear communication." } },
                { "@type": "Question", "name": "How can automated payment collection reminders help you get paid?", "acceptedAnswer": { "@type": "Answer", "text": "Automated payment reminders boost on-time payments by sending timely notifications, escalating follow-ups for overdue invoices, and offering a secure online payment portal. This reduces late payments and enhances cash flow efficiency, as seen in improved DSO metrics." } },
                { "@type": "Question", "name": "Can Chaser's payment reminders be sent automatically?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Chaser provides a comprehensive set of automation tools that allow businesses to schedule and send payment reminders automatically. You can set up recurring schedules, customize the content and timing of each reminder, and trigger reminders based on specific events like invoice due dates or payment delays." } },
                { "@type": "Question", "name": "How does Chaser predict exactly when an invoice will be paid?", "acceptedAnswer": { "@type": "Answer", "text": "Chaser predicts when an invoice will be paid by comparing contractual due dates with predicted payment dates. It calculates the customer's average payment delay from paid-invoice history and applies it to outstanding invoice due dates. This method separates due cash from predicted cash, allowing businesses to see the gap between what is contractually due and what is likely to be received based on customer behavior." } },
                { "@type": "Question", "name": "What are \"Recommended Chasing Times\" and how do they impact the forecast?", "acceptedAnswer": { "@type": "Answer", "text": "\"Recommended Chasing Times\" are optimal times and days suggested by Chaser's AI to send payment reminders based on analysis of payment behaviors. This feature increases the likelihood of payment by reaching out to customers when they are most likely to respond. Businesses using this feature typically see payments fulfilled three days faster on average, demonstrating the effectiveness of timely, targeted communication." } },
                { "@type": "Question", "name": "How does automated invoice grouping prevent data distortion in my forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Automated invoice grouping in Chaser helps prevent data distortion by ensuring that all relevant communication and actions are attached to the invoice. This includes chasing schedules, expected payment dates, and any disputes. By keeping all information connected, finance teams can respond to likely shortfalls with accurate, up-to-date data, preventing misjudgments in cash flow forecasts." } },
                { "@type": "Question", "name": "How does the Customer Billing Portal interface with cash forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "The Customer Billing Portal in Chaser integrates with cash forecasting by providing real-time visibility into receivables data based on actual customer payment behavior. This integration ensures that forecasts reflect how customers pay, offering a reliable prediction of incoming cash and supporting precise financial planning." } },
                { "@type": "Question", "name": "What happens to the cash flow forecast if an invoice remains entirely uncollected?", "acceptedAnswer": { "@type": "Answer", "text": "If an invoice remains uncollected, it can lead to a higher risk of bad debt and affect the accuracy of cash flow forecasts. Chaser's integration with accounting systems ensures that forecasts are regularly updated, but uncollected invoices need proactive follow-up to mitigate risks and maintain forecast accuracy." } },
                { "@type": "Question", "name": "Does setting up Chaser's forecasting require complex ERP engineering?", "acceptedAnswer": { "@type": "Answer", "text": "Setting up Chaser's forecasting does not require complex ERP engineering. It integrates seamlessly with existing systems through CSV uploads, allowing businesses to populate receivables data without extensive technical adjustments. This simplicity ensures that small businesses can adopt the tool without needing significant IT resources." } },
                { "@type": "Question", "name": "How does Chaser mitigate credit risk before an invoice is even generated?", "acceptedAnswer": { "@type": "Answer", "text": "Chaser mitigates credit risk by assessing customer creditworthiness and streamlining dispute resolution before invoices are generated. This proactive approach helps businesses avoid extending credit to unreliable clients and ensures that payments are received faster, reducing the time spent chasing invoices and allowing teams to focus on core business activities." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Chaserhq", "automated accounts receivable", "cash flow forecasting", "automated payment reminders", "days sales outstanding (DSO)", "accounts receivable KPIs"],
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
        "Chaserhq automates accounts receivable, improving cash flow and client relationships for small businesses in South Florida.";
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
