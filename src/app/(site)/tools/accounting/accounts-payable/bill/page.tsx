import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/bill/overview-section";
import ManualApChallengesSection from "@/components/tools/accounting/accounts-payable/bill/manual-ap-challenges-section";
import HowBillTransformsSection from "@/components/tools/accounting/accounts-payable/bill/how-bill-transforms-section";
import CoreFunctionalitySection from "@/components/tools/accounting/accounts-payable/bill/core-functionality-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/bill/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/bill/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/bill/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Bill";
const DESCRIPTION =
    "Bill automates invoice processing, approvals, and expense management, with AI-powered invoice coding and configurable approval workflows.";
const CANONICAL = "/tools/accounting/accounts-payable/bill";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": PAGE_URL
    },
    "keywords": "Bill, accounts payable automation, invoice coding, approval workflows, expense management, PO matching, payment processing, fraud detection, QuickBooks integration, AI implementation",
    "offers": {
        "@type": "Offer",
        "price": "49",
        "priceCurrency": "USD",
        "description": "Published pricing starting at $49 per user per month."
    },
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-data-entry-processing"
    },
    "@id": `${PAGE_URL}#software`
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: [
            "Bill",
            "accounts payable automation",
            "invoice coding",
            "approval workflows",
            "expense management",
            "PO matching",
        ],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: CANONICAL,
        },
        openGraph: {
            title: TITLE,
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
            title: TITLE,
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
        "Bill automates invoice entry, approvals and payments so AP processing time drops by half instead of consuming your week.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={TITLE}
                summary={heroSummary} />
            <OverviewSection />
            <ManualApChallengesSection />
            <HowBillTransformsSection />
            <CoreFunctionalitySection />
            <ImplementationSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
