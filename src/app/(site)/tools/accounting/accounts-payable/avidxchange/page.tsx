import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/avidxchange/overview-section";
import CostOfManualApSection from "@/components/tools/accounting/accounts-payable/avidxchange/cost-of-manual-ap-section";
import HowAvidxchangeTransformsSection from "@/components/tools/accounting/accounts-payable/avidxchange/how-avidxchange-transforms-section";
import StreamlinesApSection from "@/components/tools/accounting/accounts-payable/avidxchange/streamlines-ap-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/avidxchange/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/avidxchange/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/avidxchange/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "AvidXchange";
const DESCRIPTION =
    "AvidXchange automates invoice management and B2B payments, extracting, matching, and routing invoice data while integrating with existing accounting systems.";
const CANONICAL = "/tools/accounting/accounts-payable/avidxchange";
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
    "keywords": "AvidXchange, accounts payable automation, invoice automation, B2B payments, paperless AP, approval workflows, fraud controls, Microsoft Dynamics integration, payment security, AI implementation",
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
            "AvidXchange",
            "accounts payable automation",
            "invoice automation",
            "B2B payments",
            "paperless AP",
            "approval workflows",
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
        "AvidXchange captures invoice data at header and line-item level with 99.2% accuracy, then routes, approves and pays it without paper.";
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
            <CostOfManualApSection />
            <HowAvidxchangeTransformsSection />
            <StreamlinesApSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
