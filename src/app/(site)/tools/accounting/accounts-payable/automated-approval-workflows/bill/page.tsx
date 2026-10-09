import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/architecture-section";
import ImplementingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/implementing-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/bill/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Bill";
const DESCRIPTION =
    "Streamline invoice approvals with Bill's automated workflows, enhancing efficiency and accuracy for your business.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/bill";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Bill, automated approval workflows, accounts payable automation, invoice approval, AI invoice coding, 2- and 3-way matching, QuickBooks Online, Xero, mobile approvals, AI implementation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable"
    },
    "@id": `${PAGE_URL}#software`
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Bill", "automated approval workflows", "accounts payable automation", "invoice approval", "AI invoice coding", "2- and 3-way matching"],
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
        "Bill streamlines invoice approvals with automated workflows, reducing errors and saving time for your business.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <ArchitectureSection />
            <ImplementingSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
