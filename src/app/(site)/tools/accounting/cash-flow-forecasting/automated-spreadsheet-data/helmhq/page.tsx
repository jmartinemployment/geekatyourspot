import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Helmhq";
const DESCRIPTION =
    "Helmhq automates spreadsheet data for cash flow forecasting, tailored for Miami-Dade, Broward, and West Palm Beach businesses.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/helmhq";
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
            "keywords": "Helmhq, automated spreadsheet data, cash flow forecasting, cloud accounting ledgers, multi-currency entities, vendor payments, drag-and-drop forecasting, forecasting horizons, customer payment prediction, Helm Health Score, multi-client firms, approval chains",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "What cloud accounting ledgers does Helm support?", "acceptedAnswer": { "@type": "Answer", "text": "Helm connects via direct API integrations with QuickBooks Online, Xero, and Sage Accounting. This allows for seamless data synchronization and easy management of your financial information." } },
                { "@type": "Question", "name": "How often does Helm refresh my numbers?", "acceptedAnswer": { "@type": "Answer", "text": "Helm automatically runs an absolute data sync with your connected ledger every night. Users can also manually push a real-time refresh button during the day if they’ve just edited invoices or added transactions." } },
                { "@type": "Question", "name": "Can Helm manage multi-currency entities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Helm dynamically pulls multiple currencies, applying prevailing exchange rates so multi-national or multi-branch operators can get unified dashboard reporting." } },
                { "@type": "Question", "name": "What makes Helm different from other forecasting tools?", "acceptedAnswer": { "@type": "Answer", "text": "Most applications display data as horizontal lines of text. Helm uses an entirely visual, drag-and-drop timeline interface. It transforms dry entries into movable graphic items that non-financial users can easily understand." } },
                { "@type": "Question", "name": "Can I pay vendors directly from Helm?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Thanks to a strategic partnership integration with Veem, users can organize their bills, drag them onto target settlement dates inside the forecast, and execute the actual cash payouts directly from Helm's payables workspace." } },
                { "@type": "Question", "name": "Does dragging an item inside Helm alter my real accounting books?", "acceptedAnswer": { "@type": "Answer", "text": "No. Adjusting transaction dates or altering timelines inside Helm only modifies the visual forecast layers. Your live QuickBooks, Xero, or Sage files remain untouched." } },
                { "@type": "Question", "name": "What forecasting horizons are available?", "acceptedAnswer": { "@type": "Answer", "text": "Helm supports localized 1-month, 3-month, 6-month, and 1-year forecasting views out of the box. This flexibility allows businesses to plan effectively for both short-term and long-term financial goals." } },
                { "@type": "Question", "name": "How does Helm predict when customers will actually pay?", "acceptedAnswer": { "@type": "Answer", "text": "Helm bypasses static due dates by calculating an Average Days Receivable (ADR) and Average Days Payable (ADP) behavioral metric for every individual client and vendor. It automatically projects payments based on historical transaction habits." } },
                { "@type": "Question", "name": "What is the \"Helm Health Score\"?", "acceptedAnswer": { "@type": "Answer", "text": "The \"Helm Health Score\" is a color-coded percentage metric displayed right on the dashboard. A score over 70% indicates strong cash positioning, giving advisors and small businesses a clear health indicator at a glance." } },
                { "@type": "Question", "name": "Can firms use Helm for multiple clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Helm features a centralized partner dashboard built explicitly for accounting professionals and fractional CFOs to manage all of their client company profiles under a single master secure log-in." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Helmhq", "automated spreadsheet data", "cash flow forecasting", "cloud accounting ledgers", "multi-currency entities", "vendor payments"],
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
        "Helmhq automates spreadsheet data to help small businesses in South Florida optimize cash flow forecasting and avoid financial surprises.";
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
