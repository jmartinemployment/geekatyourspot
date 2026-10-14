import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "QuickBooks Online Advanced";
const DESCRIPTION =
    "Intelligent Resource Planning with QuickBooks streamlines bookkeeping and automates workflows for small businesses in Miami-Dade, Broward, and West Palm Beach.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks";
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
            "keywords": "QuickBooks, intelligent resource planning, cash flow forecasting, resource planning, financial forecasting, small business accounting, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is financial reporting software?", "acceptedAnswer": {"@type": "Answer", "text": "Financial reporting software like QuickBooks connects to your data, gathers the numbers, and shows you clear insights in easy-to-read charts and graphs. It is part of a business intelligence toolkit, helping you pull out what matters most from your business data."}},
                {"@type": "Question", "name": "Does QuickBooks have an expense report template?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, QuickBooks includes a simple expense report template. It tracks the date, expense type, and totals for each item. You can also customize it by adding new columns or changing headings to fit your business needs."}},
                {"@type": "Question", "name": "Does QuickBooks offer expense reports?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, QuickBooks lets you view real-time expense reports and track your business spending right from your dashboard. This helps you keep an eye on costs and spot trends quickly."}},
                {"@type": "Question", "name": "What software is used for financial records?", "acceptedAnswer": {"@type": "Answer", "text": "QuickBooks is designed to make viewing and managing your financial records easy. You can see your profit and loss, check expenses, and look for ways to increase revenue and profits, all in a few clicks."}},
                {"@type": "Question", "name": "Why is financial reporting software important for small businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Financial reporting software is key for small businesses because it streamlines your financial management and improves accuracy. This saves you time and money, and gives you valuable insights into your company’s financial health."}},
                {"@type": "Question", "name": "Which software should I use for making financial reports?", "acceptedAnswer": {"@type": "Answer", "text": "QuickBooks is a strong choice for making financial reports. It helps you manage data like unpaid invoices and customer balances, and includes ready-made reports such as Customer Balance Summary and Accounts Receivable Aging Summary. This makes it easier to stay on top of your finances."}},
                {"@type": "Question", "name": "What financial reports does a small business need?", "acceptedAnswer": {"@type": "Answer", "text": "Balance sheetsIncome statementsCash flow statements"}},
                {"@type": "Question", "name": "What are the benefits of financial reporting software?", "acceptedAnswer": {"@type": "Answer", "text": "Gives you a clear view of your financesSaves time and boosts efficiencyMakes it easy to track overdue invoicesLets you create custom reports for your needs"}},
                {"@type": "Question", "name": "Does QuickBooks do financial statements?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, QuickBooks lets you create financial statements like balance sheets, income statements, and cash flow statements. You can also generate other financial reports as needed."}},
                {"@type": "Question", "name": "Is QuickBooks Online Advanced considered a true ERP system, or do I need to completely switch to a new software?", "acceptedAnswer": {"@type": "Answer", "text": "QuickBooks Online Advanced is a top-tier accounting and financial management platform, but it is not a full ERP system by itself. Traditional ERPs handle everything, accounting, supply chain, HR, and operations, in one closed system. QBO Advanced works as a strong modular ERP core. Instead of a risky, expensive migration to something like NetSuite, small businesses can use QBO Advanced’s API to connect automated tools for inventory, payroll, and forecasting. This lets you build a custom ERP that fits your needs."}},
                {"@type": "Question", "name": "We are drowning in spreadsheets for cash flow forecasting. Can QuickBooks Advanced handle this automatically?", "acceptedAnswer": {"@type": "Answer", "text": "QBO Advanced has basic cash flow tools, like the Cash Flow Dashboard, but it does not provide deep, predictive modeling on its own. For small businesses in South Florida with changing client demands or seasonal swings, its built-in tools still require manual spreadsheet updates. To get true ERP-level automation, you need to connect QBO Advanced with specialized FP&A tools like Fathom or Jirav. These integrations sync live data from QuickBooks to automate forecasting, budgeting, and KPI dashboards, removing the need for manual updates."}},
                {"@type": "Question", "name": "How does QuickBooks Advanced protect my business from payroll tax penalties and worker misclassification?", "acceptedAnswer": {"@type": "Answer", "text": "QBO Advanced tracks your financial data, but it does not automatically enforce employment laws or classify workers. Small businesses in South Florida often use both contractors and employees, which increases the risk of IRS audits for misclassification. To automate compliance and reduce risk, QuickBooks should be integrated with a workforce management and payroll compliance tool like Gusto or Rippling. These platforms handle payroll taxes, track changing laws, and automate onboarding to help protect your business from legal issues."}},
                {"@type": "Question", "name": "We sell to clients across multiple states. Does QuickBooks Online Advanced handle complex sales tax rules automatically?", "acceptedAnswer": {"@type": "Answer", "text": "QBO Advanced includes an automated sales tax engine that calculates tax at checkout based on location, but it does not manage economic nexus thresholds across states. As your business grows, you may cross state sales limits without realizing it, which can lead to tax penalties. To address this, you need to pair QuickBooks with a dedicated tax compliance automation tool like TaxCloud or Anrok. These integrations monitor your sales against state laws, alert you when nexus is triggered, and handle filing and remittance for you."}},
                {"@type": "Question", "name": "Our team is non-technical. Won't implementing ERP-style automations around QuickBooks disrupt our daily operations?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional ERP implementations often fail because they require big changes and steep learning curves.A modular ERP approach with QBO Advanced keeps your daily operations running smoothly.Your staff can keep using the familiar QuickBooks dashboard for daily tasks.Automation tools, like AP/AR workflows or forecasting, run quietly in the background or use simple, single-sign-on interfaces.Rolling out these tools step by step means you get enterprise-grade features with almost no downtime."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["QuickBooks", "intelligent resource planning", "cash flow forecasting", "resource planning", "financial forecasting", "small business accounting", "South Florida small business"],
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
        "QuickBooks delivers automated Intelligent Resource Planning, making bookkeeping and approvals seamless for small businesses across Miami-Dade, Broward, and West Palm Beach.";
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
