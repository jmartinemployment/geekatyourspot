import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Take the Helm";
const DESCRIPTION =
    "Intelligent Resource Planning with Take the Helm helps small South Florida businesses automate finances, gain cash flow clarity, and eliminate spreadsheet chaos.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm";
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
            "keywords": "Take the Helm, intelligent resource planning, cash flow forecasting, resource planning, financial forecasting, small business accounting, South Florida small business",
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
                {"@type": "Question", "name": "Why do I need an automation tool like Helm if I already use QuickBooks Online or Xero?", "acceptedAnswer": {"@type": "Answer", "text": "Helm connects directly with QuickBooks Online, Xero, or Sage to pull your data in real time. It creates automated cash flow forecasts and accounts payable and receivable plans, so you do not have to enter numbers into spreadsheets by hand. QuickBooks and Xero show you what has happened. Helm shows you what is coming, turning your invoices and bills into clear cash flow projections so you can avoid running out of money."}},
                {"@type": "Question", "name": "How long does it take to set up? I don't have weeks to train my staff on a complex system.", "acceptedAnswer": {"@type": "Answer", "text": "Helm is built for small businesses that cannot afford long training sessions or complex setup. The interface is simple and fast. You can connect your accounts and start seeing automated forecasts within minutes, not weeks."}},
                {"@type": "Question", "name": "Can this help me manage my local bills and vendor payments without hurting my bank account?", "acceptedAnswer": {"@type": "Answer", "text": "Manual tracking of accounts payable often leads to missed deadlines, lost discounts, or surprise withdrawals that cause overdraft fees. Helm gives you a tool to build and adjust accounts payable schedules, so you can see how each payment date affects your bank balance. You can plan exactly when to pay local suppliers, helping you keep more cash on hand and avoid unexpected hits to your account."}},
                {"@type": "Question", "name": "How can I protect my cash flow if my own clients are slow to pay their invoices?", "acceptedAnswer": {"@type": "Answer", "text": "Late payments can cause serious cash flow problems. Helm tracks your invoices and lets you adjust payment timing, add notes, and see exactly how late payments will affect your cash position. This helps you plan ahead and avoid running short when clients pay late."}},
                {"@type": "Question", "name": "We want to expand our team and buy new equipment next year. How do we know if we can actually afford it?", "acceptedAnswer": {"@type": "Answer", "text": "Many small businesses make big purchases based on a temporary cash surplus, without considering seasonal changes or inflation. Helm gives you unlimited scenario planning, so you can test what would happen if you hire new staff or buy equipment. You will see the long-term impact on your cash flow before you commit, helping you make safer decisions."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Take the Helm", "intelligent resource planning", "cash flow forecasting", "resource planning", "financial forecasting", "small business accounting", "South Florida small business"],
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
        "Take the Helm offers small businesses in South Florida an automated way to bring together sales, expenses, and cash flow, replacing scattered spreadsheets with real-time visibility. Make informed decisions and avoid cash flow surprises.";
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
