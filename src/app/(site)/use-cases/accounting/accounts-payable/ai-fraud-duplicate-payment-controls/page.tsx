import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/lede-section";
import HiddenCostsSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/hidden-costs-section";
import HowItWorksSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/how-it-works-section";
import DecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/decisions-section";
import InPracticeSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/in-practice-section";
import RightFitSection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/right-fit-section";
import PAASection from "@/components/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Fraud & Duplicate Payment Controls";
const DESCRIPTION =
    "Implement Automated Fraud & Duplicate Payment Controls to enhance efficiency and accuracy in accounts payable for small businesses.";
const CANONICAL = "/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-09T12:45:16.0792588Z",
            "dateModified": "2026-10-09T12:45:16.0792588Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Automated Fraud & Duplicate Payment Controls, accounts payable automation, fraud prevention, duplicate payment controls, AI implementation, small business efficiency, cost savings, time savings, error reduction, local small businesses",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-ap-automation-software" },
            "mentions": [
                { "@type": "Thing", "name": "Medius", "url": "https://www.medius.com/" },
                { "@type": "Thing", "name": "Tipalti", "url": "https://tipalti.com/" },
                { "@type": "Thing", "name": "Stampli", "url": "https://www.stampli.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Ramp", "url": "https://ramp.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                { "@type": "Question", "name": "What is fraud detection, and how does it actually work?", "acceptedAnswer": { "@type": "Answer", "text": "Fraud detection involves identifying suspicious activities that could indicate fraudulent behavior. It works by using AI algorithms to analyze data patterns and transactions. When these algorithms detect anomalies or irregular patterns, they flag them for further review. This process helps businesses in the Miami-Dade, Broward, and West Palm Beach areas to prevent financial losses by catching fraudulent activities early." } },
                { "@type": "Question", "name": "What specific anomalies trigger automated risk alerts?", "acceptedAnswer": { "@type": "Answer", "text": "Automated risk alerts are triggered by anomalies such as duplicate invoices, mismatched vendor details, or unusual transaction amounts. These alerts can also be set off by transactions occurring outside of normal business hours or from unfamiliar locations. By identifying these red flags, businesses can take prompt action to investigate potential fraud." } },
                { "@type": "Question", "name": "What happens when a fraud system triggers a high-risk flag?", "acceptedAnswer": { "@type": "Answer", "text": "When a fraud system triggers a high-risk flag, the transaction is usually put on hold for further investigation. The accounts payable team is notified to review the flagged activity. If the transaction is deemed legitimate after review, it is processed as usual. If fraud is suspected, further actions are taken, which may include contacting the vendor or taking legal steps to protect the business." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["automated fraud and duplicate payment controls", "accounts payable automation", "fraud prevention", "duplicate payment controls", "AI implementation", "small business efficiency"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE, description: DESCRIPTION, url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC', locale: 'en_US', type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image', title: TITLE, description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Discover how implementing Automated Fraud & Duplicate Payment Controls can streamline your accounts payable process, saving time and reducing errors.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <HiddenCostsSection />
                <HowItWorksSection />
                <DecisionsSection />
                <InPracticeSection />
                <RightFitSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
