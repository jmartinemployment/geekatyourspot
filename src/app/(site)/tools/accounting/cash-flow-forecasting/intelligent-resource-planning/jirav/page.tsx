import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Jirav";
const PAGE_TITLE = "Jirav for Intelligent Resource Planning";
const DESCRIPTION =
    "Intelligent Resource Planning with Jirav automates data integration for small businesses in Miami-Dade, Broward, and Palm Beach, ensuring real-time accuracy.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Jirav, intelligent resource planning, cash flow forecasting, resource planning, financial forecasting, small business accounting, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.jirav.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-resource-planning" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "We use QuickBooks Online/Xero. Do we have to migrate our accounting to a new system or ERP to use Jirav?", "acceptedAnswer": {"@type": "Answer", "text": "No migration is needed. Jirav connects directly to your existing accounting software in minutes using a secure, code-free API. It reads your trial balances and mirrors your Chart of Accounts without changing anything in your original financial records."}},
                {"@type": "Question", "name": "Will Jirav accidentally overwrite or mess up our live accounting data?", "acceptedAnswer": {"@type": "Answer", "text": "No. Jirav uses a strict one-way, read-only integration. It only pulls data from your accounting system to build models and dashboards. It cannot push data back or change your live books, so your records stay secure."}},
                {"@type": "Question", "name": "Our historical data is messy, and we have multiple departments. How does Jirav handle that?", "acceptedAnswer": {"@type": "Answer", "text": "Jirav runs a nightly automated sync to clean up your data. It maps your QuickBooks Classes or Xero Tracking Categories into \"Jirav Departments\" for clear, department-level views. This skips manual Excel filtering and gives you accurate tracking by department."}},
                {"@type": "Question", "name": "How is a Jirav forecast any different from the standard budget tool inside QuickBooks or Xero?", "acceptedAnswer": {"@type": "Answer", "text": "QuickBooks and Xero show past results and only budget your Profit & Loss statement. Jirav is a driver-based modeling tool that links your P&L, Balance Sheet, and Cash Flow. When you change your sales forecast, Jirav instantly shows the impact on cash flow, receivables, and hiring timelines."}},
                {"@type": "Question", "name": "We struggle with cash flow visibility. Can this help us see when we might run out of money?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Jirav gives real-time cash flow forecasts using your live data and custom assumptions. You can see the exact day your cash might run out, plan for breakthroughs, and manage vendor payments with confidence."}},
                {"@type": "Question", "name": "Can we use this to model 'What-If' business changes before pulling the trigger?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can duplicate your main plan and test different scenarios in minutes. Jirav lets you compare the financial impact of hiring, price changes, or slow sales side-by-side across all your financial statements."}},
                {"@type": "Question", "name": "How much manual data entry or upkeep does this add to our plate every month?", "acceptedAnswer": {"@type": "Answer", "text": "Almost none. Jirav automatically pulls your financial results overnight. When your books close, your forecasts and dashboards update themselves, so you skip manual entry and formula fixes."}},
                {"@type": "Question", "name": "How does Jirav factor in our shifting employee headcount and local payroll costs?", "acceptedAnswer": {"@type": "Answer", "text": "Jirav integrates with HR and payroll providers like Gusto, ADP, and Justworks. It imports your headcount, rosters, and wage details securely, so you can forecast salary changes, bonuses, and new roles based on your real local needs."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Jirav", "intelligent resource planning", "cash flow forecasting", "resource planning", "financial forecasting", "small business accounting", "South Florida small business"],
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
        "Jirav streamlines disconnected business data by automating resource planning, giving small businesses in Miami-Dade, Broward, and Palm Beach a clear, unified financial view.";
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
