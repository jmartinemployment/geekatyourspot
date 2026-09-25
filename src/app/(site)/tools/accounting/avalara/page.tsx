import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/accounting/tax-compliance-regulations/avalara/overview-section";
import KeyCapabilitiesSection from "@/components/tools/accounting/tax-compliance-regulations/avalara/key-capabilities";
import ImplementationSection from "@/components/tools/accounting/tax-compliance-regulations/avalara/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Avalara® Compliance Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Automate tax compliance with Avalara, ensuring up-to-date adherence to regulations across jurisdictions.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/accounting/avalara"
    },
    "keywords": "Intelligent Tax Compliance, Regulatory Automation, AI Tax Solutions, Compliance Software, Tax Automation Tools, Data Quality, Change Management, Cash Flow Forecasting, AI Implementation, Accounts Payable Automation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations"
    },
    "@id": "https://geekatyourspot.com/tools/accounting/avalara#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Avalara® Compliance Platform",
        description: "Automate tax compliance with Avalara, ensuring up-to-date adherence to regulations across jurisdictions.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/accounting/avalara',
        },
        openGraph: {
            title: "Avalara® Compliance Platform",
            description: 'Automate tax compliance with Avalara, ensuring up-to-date adherence to regulations across jurisdictions.',
            url: 'https://geekatyourspot.com/tools/accounting/avalara',
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
            title: "Avalara® Compliance Platform",
            description: 'Automate tax compliance with Avalara, ensuring up-to-date adherence to regulations across jurisdictions.',
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
    const title = "Avalara® Compliance Platform";
    const heroSummary = "Avalara simplifies tax compliance with automation, ensuring businesses meet regulatory demands effortlessly.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <SchedulerShell />
        </>
    );
}
