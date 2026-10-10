import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/overview-section";
import ChallengesSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/challenges-section";
import TransformsSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/architecture-section";
import ImplementingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/implementing-section";
import DataMappingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/evaluating-section";
import ComparingSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/comparing-section";
import RightFitSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/right-fit-section";
import FaqSection from "@/components/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Versapay";
const DESCRIPTION =
    "Automate accounts receivable with Versapay for better cash flow and efficiency in South Florida.";
const CANONICAL = "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay";
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
            "keywords": "Versapay, automated accounts receivable, cash flow forecasting, automated cash application, Promise-to-Pay forecasts, customer risk segments, dispute resolution, Autopay, ERP integration, approval chains, routing, automation logic",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "How does automating cash application fix cash flow forecasting errors?", "acceptedAnswer": { "@type": "Answer", "text": "Automating cash application improves cash flow forecasting by providing real-time visibility into financial data. This eliminates the guesswork associated with manual accounts receivable processes, allowing finance leaders to quickly identify where cash is tied up and which accounts are overdue. With automated dashboards, teams can spot risks early and make more informed financial decisions, reducing missed opportunities and reactive decision-making." } },
                { "@type": "Question", "name": "How does the platform predict when payments will arrive?", "acceptedAnswer": { "@type": "Answer", "text": "Versapay uses machine learning to analyze payment patterns and segment customers by risk level. This AI-powered approach helps predict when payments will arrive by forecasting cash flow based on these insights. It allows businesses to collect payments faster and manage their cash flow more effectively." } },
                { "@type": "Question", "name": "What are \"Promise-to-Pay\" forecasts?", "acceptedAnswer": { "@type": "Answer", "text": "\"Promise-to-Pay\" forecasts involve tracking and managing promised payments for outstanding invoices. Versapay allows businesses to capture these promises and send reminders before payments become overdue. This feature helps predict short-term cash inflows and focus collections on at-risk gaps, improving overall cash flow management." } },
                { "@type": "Question", "name": "How do customer risk segments influence the cash forecast?", "acceptedAnswer": { "@type": "Answer", "text": "Customer risk segments influence cash forecasts by allowing businesses to categorize customers based on their payment behaviors and risk levels. Versapay uses AI-powered collections automation to analyze these segments, predict payments, and forecast cash flow. This segmentation helps businesses focus their collection efforts on higher-risk accounts, improving cash flow predictability." } },
                { "@type": "Question", "name": "Can dispute resolution capabilities protect the forecast pipeline?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Versapay's dispute resolution capabilities can protect the forecast pipeline by resolving disputes quickly and efficiently. The platform provides visibility into disputes and affected customers, allowing businesses to spot trends and protect expected cash flow. This alignment between accounts receivable and sales ensures that disputes do not disrupt cash flow forecasts." } },
                { "@type": "Question", "name": "How does Autopay integration improve treasury planning?", "acceptedAnswer": { "@type": "Answer", "text": "Autopay integration improves treasury planning by ensuring more invoices are paid on time through automatic payments. This reduces the uncertainty of payment timings, allowing for more accurate cash flow forecasts and better treasury management. By automating payments, businesses can streamline their cash application processes and enhance overall financial planning." } },
                { "@type": "Question", "name": "Which ERPs support Versapay's forecasting features?", "acceptedAnswer": { "@type": "Answer", "text": "Versapay supports integration with several major ERP systems, including Oracle NetSuite, Microsoft Dynamics 365 Business Central and Finance and Operations, and Sage Intacct. These built-for ERP connectors ensure seamless integration, allowing businesses to leverage Versapay's forecasting features without disrupting existing systems." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Versapay", "automated accounts receivable", "cash flow forecasting", "automated cash application", "Promise-to-Pay forecasts", "customer risk segments"],
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
        "Versapay automates accounts receivable, enhancing cash flow and reducing errors for small businesses in Miami-Dade, Broward, and West Palm Beach.";
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
