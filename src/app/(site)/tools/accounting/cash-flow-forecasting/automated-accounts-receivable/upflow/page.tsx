import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/overview-section";
import CostOfManualSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/cost-of-manual-section";
import EnhancesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/enhances-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/how-it-works-section";
import DeployingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/evaluating-section";
import WhoBenefitsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/who-benefits-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Upflow";
const DESCRIPTION =
    "Automate accounts receivable with Upflow to improve cash flow and reduce manual tasks for your business.";
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
            "keywords": "Upflow, automated accounts receivable, cash flow forecasting, payment collection software, automated reminders, billing cohort collection rates, Days Sales Outstanding, Collection Effectiveness Index, customer segmentation, real-time analytics, payment portal, Autopay, promise-to-pay, Stripe Billing integration, Chargebee, NetSuite, Sage Intacct, QuickBooks, Xero, ERP systems, AI implementation",
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
                { "@type": "Question", "name": "What is payment collection software?", "acceptedAnswer": { "@type": "Answer", "text": "Payment collection software helps businesses efficiently collect customer payments through automated reminders, online payment portals, and structured follow-up workflows. It simplifies the payment process for customers and provides finance teams with visibility into outstanding balances." } },
                { "@type": "Question", "name": "How does payment collection software work?", "acceptedAnswer": { "@type": "Answer", "text": "Payment collection software connects to your billing or ERP system, tracks unpaid invoices, and automatically sends payment reminders. It often includes a secure payment portal where customers can pay via ACH, card, or direct debit." } },
                { "@type": "Question", "name": "Does payment collection software support online payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most modern solutions provide secure, branded payment portals that support ACH, credit cards, direct debit, and features like Autopay or promise-to-pay tracking." } },
                { "@type": "Question", "name": "Can payment collection software reduce late payments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Automated reminders, clear payment options, and real-time balance visibility help encourage faster payments and reduce overdue invoices." } },
                { "@type": "Question", "name": "Is the Stripe Billing integration easy to set up?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. After creating your Upflow organization, simply click \"Connect\" and authorize Stripe access. The integration requires only a few permissions and takes just minutes to initiate. Once connected, the sync begins automatically, with no coding or custom setup required." } },
                { "@type": "Question", "name": "How does the integration between Stripe Billing and Upflow work?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow connects directly to your Stripe Billing account to import customers, invoices, and payments. After an initial sync, all relevant data is updated in real time, keeping your AR process current and accurate without manual exports or API management." } },
                { "@type": "Question", "name": "What happens when customers pay invoices via the Upflow portal?", "acceptedAnswer": { "@type": "Answer", "text": "Payments made through the Upflow portal are automatically written back to Stripe. While Stripe's API doesn't allow linking payments directly to a specific invoice, Upflow ensures the invoice is marked paid out of band, helping you keep Stripe records in sync without disrupting your accounting flow." } },
                { "@type": "Question", "name": "Will all my Stripe invoices show up in Upflow automatically?", "acceptedAnswer": { "@type": "Answer", "text": "Most active invoices from Stripe will appear in Upflow automatically, ensuring your records are up-to-date without manual intervention." } },
                { "@type": "Question", "name": "Why does Upflow avoid using Days Sales Outstanding (DSO) or invoice due dates for forecasting?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow avoids using Days Sales Outstanding (DSO) or invoice due dates for forecasting because these methods can overstate the cash position. Instead, Upflow builds inflow forecasts from actual payment behavior, using billing cohort collection rates. This approach reflects the real timing of payments, providing a more accurate forecast that helps finance teams make better decisions." } },
                { "@type": "Question", "name": "What is a \"Billing Cohort Cash Forecast\" and how does Upflow build it?", "acceptedAnswer": { "@type": "Answer", "text": "A \"Billing Cohort Cash Forecast\" is a method Upflow uses to calculate collection rates by billing cohort and project cash inflows for the next six months. Upflow builds this forecast by using live receivables data from your ERP or accounting tool, ensuring that the forecast updates automatically without manual modeling. This method leverages historical payment behavior to provide a reliable cash flow projection." } },
                { "@type": "Question", "name": "How do automated \"Promises-to-Pay\" and disputes feed into the forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Automated \"Promises-to-Pay\" and disputes are factored into Upflow's cash forecasts to provide a realistic view of expected cash inflows. Promises-to-pay dates are integrated into the forecast, and disputes are identified automatically, influencing the timing of inflows. This ensures that forecasts are grounded in actual customer behavior and account for potential delays or issues." } },
                { "@type": "Question", "name": "What software tools does Upflow sync with natively?", "acceptedAnswer": { "@type": "Answer", "text": "Upflow natively syncs with several ERP and accounting tools, including NetSuite, Sage Intacct, QuickBooks, Xero, and Pennylane. This integration ensures that your accounts receivable data is always current, allowing for accurate forecasting and efficient collections management." } },
                { "@type": "Question", "name": "How does the Upflow payment portal accelerate cash flow settlements?", "acceptedAnswer": { "@type": "Answer", "text": "The Upflow payment portal accelerates cash flow settlements by offering customers flexible payment options. Customers can review outstanding invoices and pay via ACH, credit card, or direct debit at their convenience. The portal also supports Autopay for recurring accounts and allows customers to set promise-to-pay dates, streamlining the payment process and enhancing cash flow predictability." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Upflow", "automated accounts receivable", "cash flow forecasting", "payment collection software", "automated reminders", "billing cohort collection rates"],
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
        "Upflow automates accounts receivable processes, helping businesses improve cash flow and reduce manual tasks.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <EnhancesSection />
            <HowItWorksSection />
            <DeployingSection />
            <EvaluatingSection />
            <WhoBenefitsSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
