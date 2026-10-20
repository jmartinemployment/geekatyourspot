import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Floatapp";
const PAGE_TITLE = "Floatapp for Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Floatapp automates cash flow forecasting for South Florida businesses, ensuring accurate, real-time financial insights.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp";
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
            "keywords": "Floatapp, automated spreadsheet data, cash flow forecasting, Xero integration, bank integrations, data sync, budgets and actuals, Excel budget import, Cash-Only design, forecasting timelines, what-if scenarios, multi-entity consolidation",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-floatapp",
                "name": TITLE,
                "url": "https://floatapp.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "Is the connection secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Float uses the official Xero API with a secure, read-only connection. This means Float cannot change, add, or remove anything in your Xero account. You can disconnect at any time if needed." } },
                { "@type": "Question", "name": "What does Float import from Xero?", "acceptedAnswer": { "@type": "Answer", "text": "Float imports bank accounts, credit cards, invoices, bills, repeating invoices and bills, draft invoices (if you choose), transactions, and journals. It does not import the overall budget, purchase orders, quotes, or tracking categories." } },
                { "@type": "Question", "name": "How does Float integrate with Xero?", "acceptedAnswer": { "@type": "Answer", "text": "Connecting Float to Xero is quick, taking about three minutes. Once connected, Float automatically imports your data every 24 hours." } },
                { "@type": "Question", "name": "How often does the data sync and what exactly gets pulled from my accounting system?", "acceptedAnswer": { "@type": "Answer", "text": "Float syncs with your accounting platform every 24 hours. You can also manually sync anytime to update your forecast with recent changes. Each sync pulls the latest reconciled bank balances, invoices, bills, and bank transactions, ensuring your forecast is based on cleared data, not estimates." } },
                { "@type": "Question", "name": "How does Float handle security, permissions, and governance?", "acceptedAnswer": { "@type": "Answer", "text": "Float uses role-based permissions to control access to your forecast. You can assign roles such as Admin, Editor, and Viewer to manage who can view, edit, or manage the forecast." } },
                { "@type": "Question", "name": "Which banks does Float integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "Float doesn't connect directly to banks. Instead, it retrieves bank transaction data through your accounting platform, meaning it works with any bank your accounting software syncs with." } },
                { "@type": "Question", "name": "What software does Float connect with?", "acceptedAnswer": { "@type": "Answer", "text": "Float connects with Xero, QuickBooks Online, and FreeAgent through a read-only, one-way API hook. This means Float can pull data from these accounting platforms but does not write back to them." } },
                { "@type": "Question", "name": "How often does it update?", "acceptedAnswer": { "@type": "Answer", "text": "Float syncs data with your accounting platform every 24 hours. However, finance teams can also trigger manual, real-time refreshes during the business day to ensure the forecast reflects the most recent changes." } },
                { "@type": "Question", "name": "Why is my starting balance wrong?", "acceptedAnswer": { "@type": "Answer", "text": "Float pulls its starting balance from the reconciled cash balance in your accounting software. If your books are not fully reconciled in Xero or QuickBooks Online, Float may assume that outstanding bills and invoices are unpaid, affecting the accuracy of the forecast." } },
                { "@type": "Question", "name": "How do budgets work alongside actual transactions?", "acceptedAnswer": { "@type": "Answer", "text": "Float evaluates each ledger line and uses the larger of the budgeted estimate or the actual transaction data. For instance, if you budget $15,000 for an expense but receive a $10,000 invoice, Float retains the $15,000 forecast. If the invoice is $18,000, Float updates the forecast to reflect the actual $18,000." } },
                { "@type": "Question", "name": "Can I import an existing budget from Excel?", "acceptedAnswer": { "@type": "Answer", "text": "Direct Excel budget uploads are not supported. However, you can copy and paste figures into Float using the \"Spreadsheet Input\" tab to quickly set up your model." } },
                { "@type": "Question", "name": "What is the \"Cash-Only\" design philosophy?", "acceptedAnswer": { "@type": "Answer", "text": "Float models immediate liquid cash movements using the direct method. It starts from actual bank balances and excludes non-cash metrics, focusing on when real capital enters or leaves your bank accounts." } },
                { "@type": "Question", "name": "What forecasting timelines are available?", "acceptedAnswer": { "@type": "Answer", "text": "Float offers dynamic forecasting horizons, including a 13-week operational view for short-term planning and a 36-month strategic rolling forecast for long-term planning." } },
                { "@type": "Question", "name": "How many \"what-if\" scenarios can I model?", "acceptedAnswer": { "@type": "Answer", "text": "Float allows you to model up to 8 simultaneous scenario layers. This feature lets you track cash variance by adding scenarios like late payments or changes in headcount, without altering your ledger records." } },
                { "@type": "Question", "name": "Does Float support multi-entity consolidation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Float supports multi-entity consolidation. You can combine the cash flows of multiple businesses into a single consolidated view while retaining individual entity breakdowns. This feature is useful for business groups and accountants managing multiple clients." } },
                { "@type": "Question", "name": "What are the built-in collaboration controls?", "acceptedAnswer": { "@type": "Answer", "text": "Float includes role-based user permissions with three access levels: Admin, Editor, and Viewer. It also offers live commenting and inline @mention notifications on specific budget lines. This keeps internal cash decisions organized directly inside the forecast, reducing reliance on email chains." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Floatapp", "automated spreadsheet data", "cash flow forecasting", "Xero integration", "bank integrations", "data sync"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            creator: 'Geek @ Your Spot LLC',
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
        "Transform your cash flow management with Floatapp's automated spreadsheet data, tailored for small businesses in South Florida.";
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
