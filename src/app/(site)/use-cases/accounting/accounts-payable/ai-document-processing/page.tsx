import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import TamingTheBeastSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/taming-the-beast-section";
import RealCostsSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/real-costs-section";
import HowItWorksSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/how-it-works-section";
import CrucialEarlyDecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/crucial-early-decisions-section";
import RealitiesOfImplementationSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/realities-of-implementation-section";
import RightMoveSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/right-move-section";
import PAASection, { DATA_ENTRY_QUESTIONS } from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Document Processing";
const DESCRIPTION =
    "Automate accounts payable data entry and processing to cut manual errors, speed up invoice approvals, and give finance teams real-time visibility.";
const CANONICAL = "/use-cases/accounting/accounts-payable/ai-document-processing";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": {
                "@type": "Organization",
                "url": "https://geekatyourspot.com",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-02T00:00:00.000Z",
            "dateModified": "2026-10-02T00:00:00.000Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": PAGE_URL
            },
            "keywords": "automated data entry, accounts payable automation, invoice processing, AP data capture, AI in finance, invoice approval workflow, AP accuracy, finance automation, accounts payable software, small business accounting",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-ap-automation-software" },
            "mentions": [
                { "@type": "Thing", "name": "Dext", "url": "https://dext.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "AvidXchange", "url": "https://www.avidxchange.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": DATA_ENTRY_QUESTIONS.map(({ question, answer }) => ({
                "@type": "Question" as const,
                "name": question,
                "acceptedAnswer": { "@type": "Answer" as const, "text": answer },
            })),
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: [
            "automated data entry",
            "accounts payable automation",
            "invoice processing",
            "AP data capture",
            "AI in finance",
            "invoice approval workflow",
            "AP accuracy",
            "finance automation",
            "accounts payable software",
            "small business accounting",
        ],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: CANONICAL,
        },
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
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const heroSummary =
        "Turn AP email chaos into a controlled, QuickBooks-connected invoice-to-payment workflow in 30 days.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={TITLE}
                summary={heroSummary}
                image=""
                imgAlt="" />
            <article>
                <TamingTheBeastSection />
                <RealCostsSection />
                <HowItWorksSection />
                <CrucialEarlyDecisionsSection />
                <RealitiesOfImplementationSection />
                <RightMoveSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
