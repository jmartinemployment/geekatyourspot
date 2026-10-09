import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/architecture-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/evaluating-section";
import RightChoiceSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/stampli/right-choice-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Stampli";
const DESCRIPTION =
    "Transform your AP process with Stampli's automated approval workflows for faster, error-free operations.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/stampli";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Stampli, automated approval workflows, accounts payable automation, invoice approval, predefined approval routing, ERP integration, purchase orders, AI-powered invoice processing, audit trails, AI implementation",
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
        keywords: ["Stampli", "automated approval workflows", "accounts payable automation", "invoice approval", "predefined approval routing", "ERP integration"],
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
        "Optimize your financial processes with Stampli's automated approval workflows, ensuring faster and error-free approvals.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <CostOfManualSection />
            <TransformsSection />
            <ArchitectureSection />
            <DeployingSection />
            <EvaluatingSection />
            <RightChoiceSection />
            <SchedulerShell />
        </>
    );
}
