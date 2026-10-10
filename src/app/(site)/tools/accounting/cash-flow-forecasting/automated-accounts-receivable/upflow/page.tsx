import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Upflow";
const DESCRIPTION =
    "Automate accounts receivable with Upflow for better cash flow in Miami-Dade, Broward, and West Palm Beach.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow";
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
            "keywords": "Upflow, automated accounts receivable, cash flow forecasting, payment collection software, Stripe Billing integration, Billing Cohort Cash Forecast, Promises-to-Pay, dispute management, payment portal, native integrations, automated customer emails, live forecasting data",
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
                { "@type": "Question", "name": "What is payment collection software?", "acceptedAnswer": { "@type": "Answer", "text": "Payment collection software helps businesses collect customer payments efficiently. It uses automated reminders, online payment portals, and structured follow-up workflows. This makes it easier for customers to pay and gives finance teams a clear view of outstanding balances." } },
                { "@type": "Question", "name": "How does payment collection software work?", "acceptedAnswer": { "@type": "Answer", "text": "Payment collection software connects to your billing or ERP system to track unpaid invoices. It automatically sends payment reminders and often includes a secure payment portal where customers can pay via ACH, card, or direct debit." } },
                { "@type": "Question", "name": "Does payment collection software support online payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most modern solutions offer secure, branded payment portals that support ACH, credit cards, direct debit, and features like Autopay or promise-to-pay tracking." } },
                { "@type": "Question", "name": "Can payment collection software reduce late payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it can. Automated reminders, clear payment options, and real-time balance visibility encourage faster payments and help reduce overdue invoices." } },
                { "@type": "Question", "name": "Is the Stripe Billing integration easy to set up?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. After setting up your Upflow organization, you just click \"Connect\" and authorize Stripe access. The integration is quick, requiring only a few permissions, and starts syncing automatically without any coding or custom setup." } },
                { "@type": "Question", "name": "How does the integration between Stripe Billing and Upflow work?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow connects directly to your Stripe Billing account to import customers, invoices, and payments. After the initial sync, all relevant data updates in real time, keeping your accounts receivable process current and accurate without manual exports or API management." } },
                { "@type": "Question", "name": "What happens when customers pay invoices via the Upflow portal?", "acceptedAnswer": { "@type": "Answer", "text": "Payments made through the Upflow portal are automatically recorded back to Stripe. Although Stripe's API doesn't link payments directly to a specific invoice, Upflow ensures the invoice is marked as paid, keeping your Stripe records in sync without disrupting your accounting flow." } },
                { "@type": "Question", "name": "Why does Upflow avoid using Days Sales Outstanding (DSO) or invoice due dates for forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow avoids using Days Sales Outstanding (DSO) or invoice due dates for forecasting because these methods can overstate the cash position. Instead, Upflow builds inflow projections from billing cohort collection rates, which reflect actual payment behavior. This approach provides a more accurate forecast by considering the real timing of payments, including those that take longer or shorter than average. This accuracy helps finance teams make better decisions by providing a realistic view of cash inflows." } },
                { "@type": "Question", "name": "What is a \"Billing Cohort Cash Forecast\" and how does Upflow build it?", "acceptedAnswer": { "@type": "Answer", "text": "A \"Billing Cohort Cash Forecast\" groups all invoices issued in a given month and tracks the percentage collected over subsequent months. Upflow builds this forecast by calculating billing cohort collection rates automatically from your ERP data. This method replaces a single DSO average with a distribution of actual payment timing, providing a more accurate inflow forecast based on real customer payment behavior." } },
                { "@type": "Question", "name": "How do automated \"Promises-to-Pay\" and disputes feed into the forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Automated \"Promises-to-Pay\" and disputes are factored into Upflow's cash forecasts to provide a realistic view of cash inflows. Promise-to-pay dates are integrated into the expected cash timing, while disputes are identified early and weighed into the inflow timing. This ensures that the forecast reflects actual payment behavior and any potential delays, allowing for more accurate financial planning." } },
                { "@type": "Question", "name": "Does Upflow send completely autonomous emails to my customers?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow can send autonomous emails to customers, but the level of autonomy is adjustable. Each skill, such as replies and promise-to-pay, has modes: off, ask before sending, or fully autonomous. This allows businesses to start with suggestions and expand autonomy as trust builds. In autonomous mode, emails are sent only when the system is confident, ensuring that communication is appropriate and effective." } },
                { "@type": "Question", "name": "What controls prevent customers from being over-communicated with?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow provides controls to prevent over-communication with customers by allowing businesses to maintain control over reminder frequency and segment customers for tailored communication. This approach ensures that reminders are sent appropriately, balancing efficiency with customer satisfaction. By combining automated and manual reminders, businesses can manage communication effectively and avoid negative impacts from unnecessary reminders." } },
                { "@type": "Question", "name": "What software tools does Upflow sync with natively?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow syncs natively with several software tools, including NetSuite, Zuora, and Rillet. These integrations offer real-time, two-way synchronization for payments, invoices, contacts, and more, ensuring that your financial data is always accurate and up-to-date. This connectivity eliminates manual data entry and reduces the risk of errors, streamlining collections and accelerating payment cycles." } },
                { "@type": "Question", "name": "How does the Upflow payment portal accelerate cash flow settlements?", "acceptedAnswer": { "@type": "Answer", "text": "The Upflow payment portal accelerates cash flow settlements by unifying payments, collections, and reconciliation in one system. Customers pay through a branded portal, and every transaction reconciles against your ERP in real time. This integration simplifies the payment process, reduces manual work, and ensures that cash flow is managed efficiently, leading to faster settlements." } },
                { "@type": "Question", "name": "Can forecasting data be queried live into external AI systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Upflow's forecasting data can be queried live into external AI systems through the Upflow MCP server. This allows businesses to leverage AI tools like Claude and ChatGPT to analyze forecasts and gain insights, enhancing decision-making with real-time data." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Upflow", "automated accounts receivable", "cash flow forecasting", "payment collection software", "Stripe Billing integration", "Billing Cohort Cash Forecast"],
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
        "Upflow simplifies cash flow forecasting for small businesses by automating accounts receivable, ensuring timely invoice payments.";
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
