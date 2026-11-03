import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import LedeSection from "@/components/use-cases/business-operations/overview/lede-section";
import FrontDeskSection from "@/components/use-cases/business-operations/overview/front-desk-section";
import DataSection from "@/components/use-cases/business-operations/overview/data-section";
import StartSection from "@/components/use-cases/business-operations/overview/start-section";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Business Operations";
const PAGE_DESCRIPTION =
    "AI business operations tools for South Florida small businesses automate workflows, manage data pipelines, and keep your business systems running without constant manual oversight.";
const CANONICAL = "/use-cases/business-operations";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": PAGE_TITLE,
            "description": PAGE_DESCRIPTION,
            "author": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "AI business operations, AI front desk, AI receptionist, AI chatbot, AI data quality assessments, AI workflows, AI CRM, South Florida small business, Miami-Dade, Broward, Palm Beach"

        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        keywords: [
            "AI business operations",
            "AI front desk",
            "AI receptionist",
            "AI chatbot",
            "data quality assessments",
            "AI workflows",
            "AI CRM",
            "South Florida small business",
            "Miami-Dade AI automation",
            "Broward business automation",
        ],
        authors: [{ name: "Jeff Martin" }],
        creator: "Geek @ Your Spot LLC",
        publisher: "Geek @ Your Spot LLC",
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: PAGE_URL,
            siteName: "Geek @ Your Spot LLC",
            locale: "en_US",
            type: "website",
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: "summary_large_image",
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
    };
};

export default async function Page() {
    const heroSummary =
        "Business operations is the work behind every sale. AI answers your customers and keeps the data under your systems accurate, so that work no longer waits for someone to have time.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <FrontDeskSection />
                <DataSection />
                <StartSection />
                <SchedulerShell />
            </article>
        </>
    );
}
