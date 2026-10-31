import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Clockwork";
const PAGE_TITLE = "Clockwork for Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Automate spreadsheet data with Clockwork for efficient cash flow forecasting in South Florida.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Clockwork, automated spreadsheet data, cash flow forecasting, accounting integrations, ledger write-back, what-if scenarios, Mira AI, data privacy, approval chains, routing, automation logic, financial forecasting tools",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.clockwork.ai/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What software does Clockwork integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork features one-click live integrations with QuickBooks Online, QuickBooks Desktop, and Xero. It can also ingest data from Excel, CSV, and Google Sheets." } },
                { "@type": "Question", "name": "How long does it take to set up?", "acceptedAnswer": { "@type": "Answer", "text": "Setting up Clockwork takes about five minutes. The platform automatically logs in, pulls up to three years of transactional history, maps your chart of accounts, and builds the baseline forecast without requiring any manual mapping or onboarding." } },
                { "@type": "Question", "name": "Does Clockwork write data back to my ledger?", "acceptedAnswer": { "@type": "Answer", "text": "No, Clockwork is a read-only integration. This means you can test various \"what-if\" scenarios, model debt, or project hiring streaks without risking any changes or accidental entries in your source accounting books." } },
                { "@type": "Question", "name": "What exactly does the tool generate?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork generates a 52-week rolling cash flow forecast, a 5-year dynamic financial model, a 12-month balance sheet projection, and client-ready dashboards for every connected account." } },
                { "@type": "Question", "name": "How is it different from a monthly forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork is unique in that it builds a true weekly cash flow forecast. It evaluates transaction-level data and customer/vendor payment behaviors to map cash movements week-by-week, rather than averaging them over a month." } },
                { "@type": "Question", "name": "How do \"what-if\" scenarios work?", "acceptedAnswer": { "@type": "Answer", "text": "Users can toggle custom drivers, such as hiring two employees or raising prices by 5%, to see the downstream bank balance impact live during a meeting." } },
                { "@type": "Question", "name": "What is Mira AI?", "acceptedAnswer": { "@type": "Answer", "text": "Mira is Clockwork’s built-in conversational financial analyst. Users can ask her questions in plain English, like \"Why did my gross profit drop last month?\" She will instantly scan the data, write variance commentary, and trace the numbers back to the ledger." } },
                { "@type": "Question", "name": "Does Clockwork share my data with public AI models?", "acceptedAnswer": { "@type": "Answer", "text": "No, Clockwork does not share your financial data with public AI models. Your data remains protected within Clockwork's secure, SOC 2 Type 2 compliant environment." } },
                { "@type": "Question", "name": "Do I need spreadsheet skills to use it?", "acceptedAnswer": { "@type": "Answer", "text": "No, you don't need spreadsheet skills to use Clockwork. Unlike spreadsheet-first platforms, Clockwork automatically builds the financial logic and three-statement models for you. If you can read a standard profit and loss statement, you can navigate Clockwork with ease." } },
                { "@type": "Question", "name": "What does it do that Excel cannot?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork offers several features that Excel cannot match. It provides an hourly automated sync with your ledger, preventing the need for manual copy-pasting. It ensures absolute structural security, eliminating broken formulas and #REF! errors. Additionally, Clockwork includes a plain-English AI conversational interface, allowing you to ask questions and get answers quickly." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Clockwork", "automated spreadsheet data", "cash flow forecasting", "accounting integrations", "ledger write-back", "what-if scenarios"],
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
        "Automate your spreadsheet data with Clockwork to streamline cash flow forecasting and financial modeling.";
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
