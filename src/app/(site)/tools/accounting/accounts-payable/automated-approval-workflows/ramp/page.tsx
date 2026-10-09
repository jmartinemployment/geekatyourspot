import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/overview-section";
import PitfallsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/pitfalls-section";
import TransformsSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/transforms-section";
import HowItOperatesSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/how-it-operates-section";
import ImplementingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/implementing-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/right-fit-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Ramp";
const DESCRIPTION =
    "Automate invoice approvals with Ramp to save time, reduce errors, and boost efficiency.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-approval-workflows/ramp";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": TITLE,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": DESCRIPTION,
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "keywords": "Ramp, automated approval workflows, accounts payable automation, invoice approval, OCR invoice capture, PO matching, Ramp Bill Pay, Accounting Agent, ERP integration, AI implementation",
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
        keywords: ["Ramp", "automated approval workflows", "accounts payable automation", "invoice approval", "OCR invoice capture", "PO matching"],
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
        "Ramp automates invoice approvals, enhancing efficiency and cutting down on manual tasks.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <PitfallsSection />
            <TransformsSection />
            <HowItOperatesSection />
            <ImplementingSection />
            <EvaluatingSection />
            <RightFitSection />
            <SchedulerShell />
        </>
    );
}
