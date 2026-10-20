import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Cashflowfrog";
const PAGE_TITLE = "Cashflowfrog for Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Automate cash flow forecasting with Cashflowfrog for Miami businesses, enhancing accuracy and strategic planning.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Cashflowfrog, automated spreadsheet data, cash flow forecasting, cloud accounting integration, data synchronization, read-only integration, company tags, forecast timelines, shareable reports, AI interface, multi-currency, free trial",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-cashflowfrog",
                "name": TITLE,
                "url": "https://cashflowfrog.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "Which accounting platforms does Cash Flow Frog support?", "acceptedAnswer": { "@type": "Answer", "text": "Cash Flow Frog connects to eight platforms: QuickBooks Online, QuickBooks Desktop, Xero, Sage Intacct, Zoho Books, FreshBooks, Odoo, and direct bank feeds via Plaid. This broad compatibility ensures that whatever your business runs on, it is covered." } },
                { "@type": "Question", "name": "What if I don't use cloud accounting software?", "acceptedAnswer": { "@type": "Answer", "text": "You can manually import your bank transactions or historical ledgers via Excel or CSV files to generate an automated model without software. This flexibility allows you to build a forecast from your real bank history, regardless of your current accounting setup." } },
                { "@type": "Question", "name": "How often does the data synchronize?", "acceptedAnswer": { "@type": "Answer", "text": "Cash Flow Frog runs an automated sync daily, ensuring your forecasts are always up-to-date. Additionally, users can pull real-time, on-demand updates immediately after modifying items in their ledger, keeping your data current." } },
                { "@type": "Question", "name": "Is the integration read-only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the integration is read-only. This means that adjusting transaction deadlines, editing expected values, or launching alternative experiments inside the app will never change or disrupt your primary accounting ledger." } },
                { "@type": "Question", "name": "Can it sort cash metrics by internal company tags?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cash Flow Frog natively supports sorting by QuickBooks Classes, locations, departments, customers, vendors, and projects. This prevents mixed reporting when a company has multiple arms or offices, allowing for detailed and organized cash flow analysis." } },
                { "@type": "Question", "name": "How long are the forecast timelines?", "acceptedAnswer": { "@type": "Answer", "text": "Cash Flow Frog maps a live, rolling 36-month operational horizon. Users can toggle the resolution dynamically between daily, weekly, monthly, and quarterly views depending on how immediate their cash needs are, providing flexibility and detailed insights." } },
                { "@type": "Question", "name": "Can I download or share reports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can generate presentation-ready, branded financial reports and export them as PDF, Excel (.xlsx), or CSV files with a single click. This feature makes it easy to share insights with your team or clients." } },
                { "@type": "Question", "name": "Can I connect external AI tools to Cash Flow Frog?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cash Flow Frog supports MCP (Model Context Protocol), allowing users to link the app directly to AI tools like Claude, ChatGPT, Microsoft Copilot, or Gemini. This integration enables you to interact with your forecasts through plain conversation." } },
                { "@type": "Question", "name": "How does the AI interface work?", "acceptedAnswer": { "@type": "Answer", "text": "Cashflowfrog allows you to manage your cash flow by talking to AI. You can connect AI agents like Claude, ChatGPT, Copilot, or Gemini to work with your forecast through plain conversation. Ask questions or run scenarios, and your cash flow forecast updates instantly as you chat. This means you can make adjustments and see the changes reflected in real-time, all within the same platform." } },
                { "@type": "Question", "name": "Is my data secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cashflowfrog ensures your data is secure. The platform is ISO 27001 certified and fully GDPR compliant. It encrypts data both at rest and in transit and requires two-factor authentication (2FA) for added security. This comprehensive approach to data protection means you can trust that your financial information is handled safely." } },
                { "@type": "Question", "name": "Does it handle multi-currency operations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cashflowfrog natively supports multi-currency operations. It allows you to consolidate different entities across various countries by pulling individual currency tags and applying consolidated exchange rates into your primary base currency. This feature simplifies managing cash flow for businesses operating in multiple currencies." } },
                { "@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Cashflowfrog offers a 14-day free trial with no credit card required. This trial includes one-on-one onboarding and is backed by a 30-day money-back guarantee on paid plans, giving you ample time to evaluate the platform and ensure it meets your business needs." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Cashflowfrog", "automated spreadsheet data", "cash flow forecasting", "cloud accounting integration", "data synchronization", "read-only integration"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Transform financial forecasting with Cashflowfrog's automated spreadsheet data, designed for local small businesses.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
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
