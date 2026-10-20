import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Fathom";
const PAGE_TITLE = "Fathom for Intelligent Resource Planning";
const DESCRIPTION =
    "Intelligent Resource Planning with Fathom automates data from your accounting and invoicing tools for real-time dashboards and accurate forecasts.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq";
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
            "keywords": "Fathom, intelligent resource planning, cash flow forecasting, resource planning, financial forecasting, small business accounting, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-fathom",
                "name": TITLE,
                "url": "https://www.fathomhq.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is KPI tracking software?", "acceptedAnswer": {"@type": "Answer", "text": "KPI tracking software helps your business get a clear view of how you are performing. It tracks the key numbers and metrics that matter most to your goals."}},
                {"@type": "Question", "name": "What are the key features and functionalities of KPI tracking software?", "acceptedAnswer": {"@type": "Answer", "text": "A formula builder to create custom KPIsKPI alerts so you know when a result is above or below your targetA central KPI library to keep everything organizedTools to rank multiple companies across KPIs for easy performance comparison"}},
                {"@type": "Question", "name": "What types of KPIs can be tracked using this software?", "acceptedAnswer": {"@type": "Answer", "text": "Financial KPIs to check your financial healthNon-financial KPIs, such as employee or operational targetsAccount watch KPIs, tracking any number from your general ledgerTracking KPIs for different divisions or locationsFormula KPIs, where you set up your own calculations"}},
                {"@type": "Question", "name": "How does KPI tracking software help businesses measure performance?", "acceptedAnswer": {"@type": "Answer", "text": "Groups KPIs by category to assess profitability, activity, efficiency, cash flow, and growthLets you set how important each KPI is, from low to criticalMeasures core business functions like sales, marketing, customer service, staff, and operations"}},
                {"@type": "Question", "name": "Does financial analysis software integrate with accounting systems?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Fathom connects with XeroQuickBooks Online and QuickBooks DesktopMYOBExcel and Google SheetsAccess Financials UK"}},
                {"@type": "Question", "name": "Is KPI tracking software suitable for all types of businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Fathom is used by small and medium businesses, business advisors, franchises, and groups. If you are a small business in Miami-Dade, Broward, or West Palm Beach looking to automate your resource planning, this tool is designed to fit your needs."}},
                {"@type": "Question", "name": "Do I need to replace my existing accounting software like QuickBooks or Xero to use Fathom for advanced planning?", "acceptedAnswer": {"@type": "Answer", "text": "No, you do not need to replace your current accounting software. Fathom integrates directly with platforms like QuickBooks Online, QuickBooks Desktop, Xero, and MYOB. It works as an intelligence layer, using your existing financial data to create advanced dashboards and reports without changing your daily bookkeeping."}},
                {"@type": "Question", "name": "My business uses multiple entities or separate LLCs across South Florida. Can Fathom handle multi-company consolidation without manual spreadsheets?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Fathom is built for easy multi-entity consolidation. It lets you combine financial results from multiple businesses automatically, including currency conversion and elimination entries. This gives you a single view of your total cash flow, while still letting you drill down into each local entity, no more manual spreadsheets."}},
                {"@type": "Question", "name": "What is a \"Three-Way Forecast,\" and why does my small business need it instead of a regular budget spreadsheet?", "acceptedAnswer": {"@type": "Answer", "text": "A regular budget tracks only income and expenses. Fathom’s three-way forecast models your Profit & Loss, Balance Sheet, and Cash Flow together. If you project higher sales, Fathom shows how that affects your cash, inventory, and receivables, so you can plan growth without risking a cash shortfall."}},
                {"@type": "Question", "name": "Can we simulate local economic shifts, such as hiring a new team or a seasonal revenue drop, before pulling the trigger?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Fathom’s scenario planning tools let you build visual what-if models. You can test decisions like adding staff or adjusting prices and see the impact on your cash flow for the next 12 to 24 months. This helps you prepare for seasonal changes or downturns with confidence."}},
                {"@type": "Question", "name": "I don’t have time to read complex financial statements every month. How does Fathom make data actionable for a busy owner?", "acceptedAnswer": {"@type": "Answer", "text": "Fathom includes an AI Commentary Writer that turns your numbers into clear, context-aware text. It highlights performance, spots anomalies, and explains the reasons behind your results. Every insight links back to your source data, so you get clear answers without digging through reports."}},
                {"@type": "Question", "name": "Can Fathom track non-financial operational metrics, like regional sales volume, billable hours, or customer acquisition costs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you can track custom KPIs alongside your financials. Fathom lets you import non-financial data from Excel or Google Sheets, so you can monitor the operational metrics that matter most to your business and tie them directly to your bottom line."}},
                {"@type": "Question", "name": "How long does it take to implement Fathom, and will it slow down my accounting team?", "acceptedAnswer": {"@type": "Answer", "text": "Fathom can be set up in minutes. It connects securely to your cloud ledger, so your data syncs almost instantly. The system runs in the background and does not interrupt your team’s daily work, putting management reporting on autopilot."}},
                {"@type": "Question", "name": "Is our sensitive financial data safe when connecting a system like Fathom to our ledger?", "acceptedAnswer": {"@type": "Answer", "text": "Fathom uses bank-grade encryption and secure OAuth connections to access your data, so your accounting credentials are never stored or exposed. Role-based permissions make sure only authorized users see specific dashboards or entities."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Fathom", "intelligent resource planning", "cash flow forecasting", "resource planning", "financial forecasting", "small business accounting", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
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
        "Fathom automates your business’s resource planning by connecting accounting, invoicing, and bank data into live dashboards and accurate forecasts.";
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
