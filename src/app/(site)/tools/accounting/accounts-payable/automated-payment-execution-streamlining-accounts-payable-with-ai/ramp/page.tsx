import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/overview-section";
import CostOfManualSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/cost-of-manual-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/transforms-section";
import ArchitectureSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/architecture-section";
import DeployingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/deploying-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Ramp";
const DESCRIPTION =
    "Automate payment execution with Ramp, reducing errors and enhancing efficiency for small businesses.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Ramp, Ramp Bill Pay, automated payment execution, accounts payable automation, batch payments, invoice coding, PO matching, ERP integration, vendor portal, spend management, AI implementation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
    },
    "@id": `${PAGE_URL}#software`
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Ramp", "Ramp Bill Pay", "automated payment execution", "accounts payable automation", "batch payments", "spend management"],
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
        "Ramp streamlines your payment processes with automated execution, reducing errors and saving time for small businesses.";
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
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
