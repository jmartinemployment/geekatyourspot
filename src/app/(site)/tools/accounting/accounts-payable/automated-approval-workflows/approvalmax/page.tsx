import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/cost-of-manual-section";
import TransformsWeekSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/transforms-week-section";
import AutomatesSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/automates-section";
import ImplementingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/implementing-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/evaluating-section";
import WhoShouldConsiderSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax/who-should-consider-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "ApprovalMax";
const DESCRIPTION =
    "Automate approval workflows with ApprovalMax, enhancing efficiency and reducing errors in small business accounting.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "ApprovalMax, automated approval workflows, accounts payable automation, invoice approval, audit trail, three-way matching, Xero, QuickBooks Online, NetSuite, AI implementation",
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
        keywords: ["ApprovalMax", "automated approval workflows", "accounts payable automation", "invoice approval", "audit trail", "three-way matching"],
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
        "ApprovalMax streamlines approval workflows, reducing errors and improving efficiency for small businesses.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsWeekSection />
            <AutomatesSection />
            <ImplementingSection />
            <EvaluatingSection />
            <WhoShouldConsiderSection />
            <SchedulerShell />
        </>
    );
}
