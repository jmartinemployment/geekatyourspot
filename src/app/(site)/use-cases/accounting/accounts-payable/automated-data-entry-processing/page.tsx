import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import TamingTheBeastSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/taming-the-beast-section";
import RealCostsSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/real-costs-section";
import HowItWorksSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/how-it-works-section";
import CrucialEarlyDecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/crucial-early-decisions-section";
import RealitiesOfImplementationSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/realities-of-implementation-section";
import RightMoveSection from "@/components/use-cases/accounting/accounts-payable/automated-data-entry-processing/right-move-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Streamlining Accounts Payable: Automated Data Entry & Processing";
const DESCRIPTION =
    "Automate accounts payable data entry and processing to cut manual errors, speed up invoice approvals, and give finance teams real-time visibility.";
const CANONICAL = "/use-cases/accounting/accounts-payable/automated-data-entry-processing";
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
            "datePublished": "2026-10-02T00:00:00.000Z",
            "dateModified": "2026-10-02T00:00:00.000Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": PAGE_URL
            },
            "keywords": "automated data entry, accounts payable automation, invoice processing, AP data capture, AI in finance, invoice approval workflow, AP accuracy, finance automation, accounts payable software, small business accounting",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": {
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#article"
            },
            "mentions": [
                { "@id": "#software-dext" },
                { "@id": "#software-bill" },
                { "@id": "#software-avidxchange" }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Dext",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Dext automates data capture, extraction, and categorization from receipts, bills, and invoices, structuring records with over 99% accuracy.",
            "@id": "#software-dext"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Bill",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Bill automates invoice processing, approvals, and expense management, with AI-powered invoice coding and configurable approval workflows.",
            "@id": "#software-bill"
        },
        {
            "@type": "SoftwareApplication",
            "name": "AvidXchange",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "AvidXchange automates invoice management and B2B payments, extracting, matching, and routing invoice data while integrating with existing accounting systems.",
            "@id": "#software-avidxchange"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: [
            "automated data entry",
            "accounts payable automation",
            "invoice processing",
            "AP data capture",
            "AI in finance",
            "invoice approval workflow",
            "AP accuracy",
            "finance automation",
            "accounts payable software",
            "small business accounting",
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
        "Turn AP email chaos into a controlled, QuickBooks-connected invoice-to-payment workflow in 30 days.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={TITLE}
                summary={heroSummary}
                image=""
                imgAlt="" />
            <article>
                <TamingTheBeastSection />
                <RealCostsSection />
                <HowItWorksSection />
                <CrucialEarlyDecisionsSection />
                <RealitiesOfImplementationSection />
                <RightMoveSection />
                <SchedulerShell />
            </article>
        </>
    );
}
