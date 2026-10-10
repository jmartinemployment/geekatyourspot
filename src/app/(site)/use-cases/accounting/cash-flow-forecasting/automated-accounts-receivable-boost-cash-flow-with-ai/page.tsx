import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/lede-section";
import FlawsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/flaws-section";
import HiddenCostsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/hidden-costs-section";
import MechanicsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/mechanics-section";
import ImplementationSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/implementation-section";
import DecisionsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/decisions-section";
import RolloutSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/rollout-section";
import IntegratingSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/integrating-section";
import RolesSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/roles-section";
import RightCallSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/right-call-section";
import NextStepsSection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/next-steps-section";
import PAASection from "@/components/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Automated Accounts Receivable: Boost Cash Flow with AI";
const DESCRIPTION =
    "Automated Accounts Receivable helps small businesses streamline cash flow, reduce errors, and save time with AI-driven solutions.";
const CANONICAL = "/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/accounting/cash-flow-forecasting/automated-accounts-receivable`;

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
            "datePublished": "2026-10-10T12:16:32.1224226Z",
            "dateModified": "2026-10-10T12:16:32.1224226Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Automated Accounts Receivable, AI implementation, cash flow forecasting, small business AI, Miami-Dade AI solutions",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/bill#software` },
                { "@id": `${TOOLS_BASE}/chaserhq#software` },
                { "@id": `${TOOLS_BASE}/invoiced#software` },
                { "@id": `${TOOLS_BASE}/upflow#software` },
                { "@id": `${TOOLS_BASE}/versapay#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "Why is automated AR forecasting more accurate than traditional spreadsheet methods?", "acceptedAnswer": { "@type": "Answer", "text": "Automated Accounts Receivable (AR) forecasting is more accurate than traditional spreadsheet methods because it uses real-time data and advanced algorithms. These systems continuously update and analyze large volumes of financial data, reducing the risk of human error. Unlike spreadsheets that rely on manual input, automated systems can quickly identify trends and anomalies, offering a more precise forecast." } },
                { "@type": "Question", "name": "How do systems handle short payments, disputes, or un-billed revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Automated systems handle short payments, disputes, and un-billed revenue by integrating with your accounting software to track and categorize these exceptions. They alert users to discrepancies and provide tools for resolution, ensuring that all financial data is accounted for in the forecast. This integration helps maintain an accurate cash flow projection by automatically adjusting for these variables." } },
                { "@type": "Question", "name": "Why is automated cash application critical to forecast reliability?", "acceptedAnswer": { "@type": "Answer", "text": "Automated cash application is critical to forecast reliability because it ensures that payments are matched promptly and accurately to outstanding invoices. This reduces the lag time in data entry and minimizes errors, providing a clear view of cash flow. By automating this process, businesses can rely on timely and precise financial data, which is essential for creating dependable forecasts." } },
                { "@type": "Question", "name": "Can automated forecasting tools run \"What-If\" scenario simulations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, automated forecasting tools can run \"What-If\" scenario simulations. These tools allow businesses to explore different financial outcomes based on variable changes, such as altering payment terms or predicting the impact of market fluctuations. This capability helps businesses plan more effectively by visualizing potential risks and opportunities, leading to more informed decision-making." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Automated Accounts Receivable", "AI implementation", "cash flow forecasting", "small business AI", "Miami-Dade AI solutions"],
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
        "Discover how AI-driven automated accounts receivable can streamline your cash flow processes, reduce errors, and save time for your small business.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <FlawsSection />
                <HiddenCostsSection />
                <MechanicsSection />
                <ImplementationSection />
                <DecisionsSection />
                <RolloutSection />
                <IntegratingSection />
                <RolesSection />
                <RightCallSection />
                <NextStepsSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
