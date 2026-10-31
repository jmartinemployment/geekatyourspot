import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Cashflowfrog";
const PAGE_TITLE = "Cashflowfrog for Intelligent Resource Planning";
const DESCRIPTION =
    "Intelligent Resource Planning with Cashflowfrog gives Miami-Dade, Broward, and West Palm Beach small businesses real-time cash flow forecasting.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Cashflowfrog, intelligent resource planning, cash flow forecasting, resource planning, financial forecasting, small business accounting, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://cashflowfrog.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Why do I need CashFlowFrog if my automated accounting or ERP tool already tracks my financials?", "acceptedAnswer": {"@type": "Answer", "text": "Automated ERPs and bookkeeping tools like QuickBooks Enterprise, Odoo, or Sage Intacct are great for tracking what happened in the past. They do not show you what is coming next. CashFlowFrog pulls live data from your accounting system and builds a rolling 36-month cash flow forecast. This lets you see and plan for the future, not just report on the past, so you can manage cash and payroll without surprises."}},
                {"@type": "Question", "name": "Which automated ERP and accounting platforms will this seamlessly plug into?", "acceptedAnswer": {"@type": "Answer", "text": "CashFlowFrog connects in real time to eight major platforms:QuickBooks Online and QuickBooks DesktopXeroSage IntacctOdoo ERPZoho Books and FreshBooksPlaid for direct bank feedsNo manual uploads or custom API work needed. It syncs your data automatically."}},
                {"@type": "Question", "name": "How can this tool help me simulate big business decisions before I spend the cash?", "acceptedAnswer": {"@type": "Answer", "text": "CashFlowFrog includes What-If Scenario Planning. You can test out major moves, like hiring, buying equipment, or opening a new office, before you spend. It shows your exact cash runway and the ripple effects of each decision, so you can avoid cash gaps and plan growth safely."}},
                {"@type": "Question", "name": "We are trying to leverage AI agents in our IT workflows. Can we interact with our cash flow data using AI?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. CashFlowFrog has an AI Connector using the Model Context Protocol. You can link your preferred AI agent, like Claude, ChatGPT, Copilot, or Gemini, and manage your forecast by chatting in plain language. Ask questions or give instructions, and the forecast updates instantly."}},
                {"@type": "Question", "name": "How much time does it take to deploy, and will it force us back into managing complex spreadsheets?", "acceptedAnswer": {"@type": "Answer", "text": "CashFlowFrog sets up in minutes. It connects directly to your accounting system, reads your live data, and builds the baseline forecast automatically. You do not need to go back to manual spreadsheets, the dashboard stays live and accurate without extra work."}},
                {"@type": "Question", "name": "How does CashFlowFrog help me manage bad paying clients or regional tax planning?", "acceptedAnswer": {"@type": "Answer", "text": "CashFlowFrog gives you Strategic Insights from your invoice workflows:Customer Insights: It flags and ranks customers by payment punctuality, so you know who to collect from first.Tax Planning: It builds projected tax returns into your forecast, so you are ready for regional tax deadlines and avoid surprises."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Cashflowfrog", "intelligent resource planning", "cash flow forecasting", "resource planning", "financial forecasting", "small business accounting", "South Florida small business"],
        authors: [{ name: 'Jeff Martin' }],
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
        "Cashflowfrog automates cash flow forecasting by integrating directly with your accounting tools, giving your team real-time financial insights without manual entry.";
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
