import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/lede-section";
import ChallengesSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/challenges-section";
import StatusQuoSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/status-quo-section";
import MechanicsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/key-factors-section";
import DecisionsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/decisions-section";
import SequenceSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/sequence-section";
import DataIntegrationSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/data-integration-section";
import RolesSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/roles-section";
import RightFitSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/right-fit-section";
import PreparingSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/preparing-section";
import PAASection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { pillarService } from "@/lib/seo/organization";

const TITLE = "Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Discover how Automated Spreadsheet Data enhances cash flow forecasting, saving time and reducing errors for small businesses.";
const CANONICAL = "/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-11T13:17:30.3879718Z",
            "dateModified": "2026-10-11T13:17:30.3879718Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Automated Spreadsheet Data, Cash Flow Forecasting, AI Implementation, Small Business Automation, Spreadsheet Automation, Data Quality, Tech Selection, Pilot Implementation, Local AI Services",
            "@id": `${PAGE_URL}#article`,
            "about": { "@id": `${PAGE_URL}#service` },
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": "https://geekatyourspot.com/#software-cashflowfrog" },
                { "@id": "https://geekatyourspot.com/#software-clockwork" },
                { "@id": "https://geekatyourspot.com/#software-dryrun" },
                { "@id": "https://geekatyourspot.com/#software-floatapp" },
                { "@id": "https://geekatyourspot.com/#software-take-the-helm" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "How does the software pull live data into the spreadsheet without breaking existing formulas?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork provides a solution by automatically generating models from your transaction data, avoiding the need for manual formula adjustments. It ensures that your financial data is always up-to-date without the risk of breaking formulas, as it does not rely on traditional spreadsheet formulas. Instead, it uses its own computational models to provide an accurate and seamless forecast." } },
                { "@type": "Question", "name": "Can it handle multi-currency or multi-entity structures if our spreadsheet rolls them up?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Clockwork and Dryrun both support multi-currency and multi-entity operations. Clockwork offers unlimited consolidation and custom chart of accounts, making it suitable for businesses with multiple entities. Dryrun provides automated multi-currency forecasting with real-time exchange rate feeds, offering a consolidated view of liquidity across international subsidiaries." } },
                { "@type": "Question", "name": "How does the system account for off-ledger or un-billed variables?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun allows finance teams to incorporate non-ledger variables by layering offline projections over automated data. This capability supports the inclusion of sales pipelines, project budgets, and other operational elements that are not yet recorded in the ledger, ensuring a comprehensive forecast." } },
                { "@type": "Question", "name": "How do we build and compare multiple \"what-if\" scenarios without duplicating files?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork and Float provide robust scenario planning tools that allow users to create and compare multiple \"what-if\" scenarios. Clockwork enables instant recalculations across all forecasts when a driver is changed, while Float uses scenario layers that stack on top of the base forecast, allowing for easy comparison without altering the original data." } },
                { "@type": "Question", "name": "How often does the forecast update, and how long does it take to maintain?", "acceptedAnswer": { "@type": "Answer", "text": "Clockwork updates its forecasts automatically from QuickBooks or Xero, requiring minimal manual intervention. Float updates daily from QuickBooks Online and allows for manual syncs whenever needed. The maintenance time is significantly reduced compared to manual spreadsheets, as these systems automate much of the data synchronization and forecasting processes." } }
            ]
        },
        pillarService({ url: PAGE_URL, name: TITLE, description: DESCRIPTION })
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Automated Spreadsheet Data", "Cash Flow Forecasting", "AI Implementation", "Small Business Automation", "Spreadsheet Automation", "Data Quality"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Unlock the potential of automated spreadsheet data to streamline cash flow forecasting, saving time and reducing errors for your small business.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
