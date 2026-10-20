import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Dryrun";
const PAGE_TITLE = "Dryrun for Intelligent Spreadsheet Data";
const DESCRIPTION =
    "Automate cash flow forecasting with Dryrun for accurate, real-time insights in South Florida.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun";
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
            "keywords": "Dryrun, automated spreadsheet data, cash flow forecasting, accounting integrations, complex corporate structures, multi-currency, what-if scenarios, CRM sync, forecasting horizons, overdue invoices, multi-user collaboration, presentation-ready reports",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-dryrun",
                "name": TITLE,
                "url": "https://www.dryrun.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "What accounting systems does Dryrun integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun integrates seamlessly with leading mid-market ERPs and accounting systems, including NetSuite, Sage Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks Online. Automated API syncs continuously pull live bank balances, open invoices, and vendor bills directly into Dryrun, eliminating manual copy-paste errors and static export routines." } },
                { "@type": "Question", "name": "How does it handle complex corporate structures?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun is specifically engineered to manage complex, multi-entity corporate structures, multi-unit operations, and project-based cash flows. It allows finance teams to maintain detailed, segment-level tracking for individual projects, locations, or subsidiaries, while automatically aggregating data into a consolidated, real-time corporate roll-up." } },
                { "@type": "Question", "name": "Can it manage multi-currency operations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Dryrun simplifies international financial management through automated multi-currency forecasting and multi-entity consolidation. Live exchange rate feeds automatically convert international transaction data into a unified base currency, providing an up-to-the-minute, consolidated view of group-wide liquidity across international subsidiaries." } },
                { "@type": "Question", "name": "What makes Dryrun different from \"black-box\" AI forecasting tools?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun combines automated ERP data syncing with complete manual override control, allowing finance teams to manually tweak transactional details, adjust individual due dates, or add custom cash injections without altering the underlying ledger records. This human-in-the-loop capability eliminates the rigid constraints of \"black box\" AI tools." } },
                { "@type": "Question", "name": "Can I sync it with a CRM?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Dryrun can sync with CRMs like Pipedrive. This allows users to layer unclosed deals over their live ledger data to see cash outcomes before deals close, providing a forward-looking view that goes beyond traditional accounting entries." } },
                { "@type": "Question", "name": "What forecasting horizons does it provide?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun features a dual-timeline framework, mapping hyper-granular, 13-week short-term operational views side-by-side with long-term, multi-year strategic budgeting models. This setup helps track both immediate survival and future expansion." } },
                { "@type": "Question", "name": "How do the \"what-if\" scenarios display?", "acceptedAnswer": { "@type": "Answer", "text": "Dryrun allows finance teams to layer unlimited simultaneous scenarios on a single graphic timeline. Users can easily toggle separate models to see visual variance analysis graphs instantly, helping them evaluate potential risks and strategic opportunities in real time." } },
                { "@type": "Question", "name": "How does it display overdue invoices?", "acceptedAnswer": { "@type": "Answer", "text": "Past-due invoices are highlighted in bright red, visibly calculating exactly how many days late an entry is. This feature helps teams see the precise point where late payments trigger shortfalls, allowing for proactive cash flow management." } },
                { "@type": "Question", "name": "Does Dryrun support multi-user collaboration?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Dryrun is designed to support multi-user collaboration. It provides a cloud-based, centralized platform that acts as a single source of truth for financial planning. With enterprise role-based access control, finance leaders, department heads, and operational managers can review budgets, contribute assumptions, and model scenarios according to their permissions. This setup fosters collaboration across departments, allowing teams to work together seamlessly during executive reviews and board meetings." } },
                { "@type": "Question", "name": "Are the reports presentation-ready?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Dryrun offers executive-ready visual reporting that is designed to be presentation-ready. It transforms complex financial data into clear, visual reports that bridge the communication gap between finance teams and executive leadership. With features like variable zoom capabilities, users can easily switch from high-level overviews to detailed transaction line items, ensuring clarity without clutter. This allows finance leaders to enter meetings prepared to answer dynamic questions and make strategic decisions efficiently." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Dryrun", "automated spreadsheet data", "cash flow forecasting", "accounting integrations", "complex corporate structures", "multi-currency"],
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
        "Optimize your cash flow forecasting with Dryrun, designed to automate spreadsheet data and enhance decision-making for South Florida businesses.";
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
