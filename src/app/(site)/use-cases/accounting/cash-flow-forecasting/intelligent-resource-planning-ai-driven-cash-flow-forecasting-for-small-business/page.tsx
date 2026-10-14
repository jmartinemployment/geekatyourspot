import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/lede-section";
import ChallengesSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/challenges-section";
import StatusQuoSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/status-quo-section";
import MechanicsSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/key-factors-section";
import DecisionsSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/decisions-section";
import SequenceSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/sequence-section";
import DataIntegrationSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/data-integration-section";
import RolesSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/roles-section";
import RightFitSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/right-fit-section";
import PreparingSection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/preparing-section";
import PAASection from "@/components/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Intelligent Resource Planning";
const DESCRIPTION =
    "Intelligent Resource Planning helps small businesses automate cash flow forecasting, accounts receivable, and ERP tasks for better control and fewer errors.";
const CANONICAL = "/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/accounting/cash-flow-forecasting/intelligent-resource-planning`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek At Your Spot",
                "logo": { "@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg" }
            },
            "datePublished": "2026-10-14T13:36:09.9025920Z",
            "dateModified": "2026-10-14T13:36:09.9025920Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Intelligent Resource Planning, Cash Flow Forecasting, Automated Accounts Receivable, Automated Spreadsheet Data, Automated Enterprise Resource Planning, AI implementation West Palm Beach, AI for small business Miami, Fathom, Jirav, Cashflowfrog",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/cashflowfrog#software` },
                { "@id": `${TOOLS_BASE}/fathomhq#software` },
                { "@id": `${TOOLS_BASE}/jirav#software` },
                { "@id": `${TOOLS_BASE}/quickbooks#software` },
                { "@id": `${TOOLS_BASE}/takethehelm#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What exactly is an ERP system?", "acceptedAnswer": {"@type": "Answer", "text": "An ERP is a single software platform that brings together all your main business tasks. This includes finance, HR, manufacturing, supply chain, services, and procurement. Instead of each department using its own software, everyone works from a shared database."}},
                {"@type": "Question", "name": "Isn’t ERP software only for giant, multi-million dollar corporations?", "acceptedAnswer": {"@type": "Answer", "text": "No, that’s outdated thinking. Modern ERP and accounting automation is built for small businesses. You choose and pay for only the features you need, such as automated invoicing or inventory tracking, and you can add more as your business grows in South Florida."}},
                {"@type": "Question", "name": "Who is going to manage and maintain this system? Do I need to hire a full-time IT or database person?", "acceptedAnswer": {"@type": "Answer", "text": "No need to hire anyone new. The software is fully cloud-hosted, so the vendor takes care of all updates, security, and backups. Geek @ Your Spot serves as your local IT partner, handling setup, data integration, and ongoing support, so your team can stay focused on daily business."}},
                {"@type": "Question", "name": "Will this new automation software play nice with the tools and bank accounts I already use?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it will. The tools we implement connect securely to major business bank accounts, common POS systems, CRM software, and merchant payment gateways. This keeps your data flowing smoothly and avoids disrupting your current workflow."}},
                {"@type": "Question", "name": "How does this tool help us handle multi-location operations or mobile employees moving between counties?", "acceptedAnswer": {"@type": "Answer", "text": "You get secure, real-time access to your system from anywhere. Whether your team is in Miami-Dade, Broward, or Palm Beach, employees can log expenses, upload receipts, track inventory, and view invoices on their phones or tablets. Your main office stays updated instantly."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Intelligent Resource Planning", "Cash Flow Forecasting", "Automated Accounts Receivable", "Automated Spreadsheet Data", "Automated Enterprise Resource Planning", "AI implementation West Palm Beach", "AI for small business Miami", "Fathom", "Jirav", "Cashflowfrog"],
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
        "Struggling with cash flow and resource planning? See how AI-powered solutions streamline your financials, cut errors, and free up your team for growth.";
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
