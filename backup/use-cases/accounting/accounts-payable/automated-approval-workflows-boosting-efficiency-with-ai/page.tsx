import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import HiddenCostsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/hidden-costs-section";
import CostOfManualApprovalSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/cost-of-manual-approval-section";
import MechanicsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/mechanics-section";
import KeyDecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/key-decisions-section";
import InPracticeSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/in-practice-section";
import EvaluatingSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows/evaluating-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Automated Approval Workflows: Boosting Efficiency with AI";
const DESCRIPTION =
    "Explore Automated Approval Workflows to enhance efficiency and accuracy in accounts payable, reducing costs and improving productivity.";
const CANONICAL =
    "/use-cases/accounting/accounts-payable/automated-approval-workflows-boosting-efficiency-with-ai";
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
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek at Your Spot"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Geek At Your Spot",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                }
            },
            "datePublished": "2026-10-03T20:13:13.1866390Z",
            "dateModified": "2026-10-03T20:13:13.1866390Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "automated approval workflows, accounts payable automation, invoice approval, AP workflow, approval routing, audit trail, AI in finance, invoice processing, finance automation, small business accounting",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": {
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#article"
            },
            "mentions": [
                { "@id": "#software-approvalmax" },
                { "@id": "#software-ramp" },
                { "@id": "#software-tipalti" }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "ApprovalMax",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "ApprovalMax automates invoice approval routing with customizable multi-step workflows and integrates with platforms such as QuickBooks.",
            "@id": "#software-approvalmax"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Ramp",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Ramp provides smart approval routing, real-time tracking, and compliance checks across accounts payable workflows.",
            "@id": "#software-ramp"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Tipalti",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Tipalti automates end-to-end payables with mobile approvals, supplier management, and tax and regulatory compliance.",
            "@id": "#software-tipalti"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: [
            "automated approval workflows",
            "accounts payable automation",
            "invoice approval",
            "AP workflow",
            "approval routing",
            "finance automation",
        ],
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
            images: [
                { url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' },
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
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek at Your Spot' },
    };
};

export default async function Page() {
    const heroSummary =
        "We implement an AP approval workflow so vendor invoices are automatically captured, checked, assigned to the right decision-maker, escalated if delayed, recorded in QuickBooks, and paid only after the required authorization.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <HiddenCostsSection />
                <CostOfManualApprovalSection />
                <MechanicsSection />
                <KeyDecisionsSection />
                <InPracticeSection />
                <EvaluatingSection />
                <SchedulerShell />
            </article>
        </>
    );
}
