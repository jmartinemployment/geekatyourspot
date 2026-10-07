import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/overview-section";
import PainOfManualApprovalSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/pain-of-manual-approval-section";
import TransformsWorkflowSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/transforms-workflow-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/architecture-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "ApprovalMax";
const DESCRIPTION =
    "ApprovalMax automates invoice approvals, reducing errors and saving time for businesses.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai/approvalmax";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "ApprovalMax, approval workflows, accounts payable automation, invoice approval, audit trail, purchase orders, Xero, QuickBooks Online, NetSuite, AI implementation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai"
    },
    "@id": `${PAGE_URL}#software`
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["ApprovalMax", "approval workflows", "accounts payable automation", "invoice approval", "audit trail", "purchase orders"],
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
        "ApprovalMax routes bills, POs and expense requests through the approval path you define, then writes the approved transaction and its audit trail back to your accounting platform.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <PainOfManualApprovalSection />
            <TransformsWorkflowSection />
            <ArchitectureSection />
            <ImplementationSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
