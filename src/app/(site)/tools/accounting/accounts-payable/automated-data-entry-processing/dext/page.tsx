import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/overview-section";
import ManualBookkeepingChallengesSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/manual-bookkeeping-challenges-section";
import HowDextTransformsSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/how-dext-transforms-section";
import MechanicsSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/mechanics-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-data-entry-processing/dext/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Dext";
const PAGE_TITLE = "Dext for Intelligent Data Entry & Processing";
const DESCRIPTION =
    "Dext automates data capture, extraction, and categorization from receipts, bills, and invoices, structuring records with over 99% accuracy.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-data-entry-processing/dext";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${PAGE_URL}#article`,
    "headline": PAGE_TITLE,
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Dext, automated data entry, accounts payable automation, receipt capture, invoice processing, bookkeeping automation, AI Assist, data extraction, accounting integrations, AI implementation",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-dext",
        "name": TITLE,
        "url": "https://dext.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-data-entry-processing#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: [
            "Dext",
            "automated data entry",
            "accounts payable automation",
            "receipt capture",
            "invoice processing",
            "bookkeeping automation",
        ],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: CANONICAL,
        },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/GeekAtYourSpot.svg',
                    width: 116,
                    height: 48,
                    alt: 'Geek at Your Spot',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
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
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const heroSummary =
        "Dext turns receipts, bills and invoices into structured records automatically, with over 99% accuracy and real-time visibility.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={PAGE_TITLE}
                summary={heroSummary} />
            <OverviewSection />
            <ManualBookkeepingChallengesSection />
            <HowDextTransformsSection />
            <MechanicsSection />
            <ImplementationSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
