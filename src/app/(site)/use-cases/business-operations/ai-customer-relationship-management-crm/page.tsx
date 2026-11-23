import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import LedeSection from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/lede-section";
import WithoutItSection from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/without-it-section";
import ToolsSection from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/tools-section";
import SetupSection from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/setup-section";
import FAQSection from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/faq-section";
import { CRM_FAQ } from "@/components/use-cases/business-operations/ai-customer-relationship-management-crm/faq";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Customer Relationship Management (CRM)";
const PAGE_DESCRIPTION =
    "A CRM that holds every customer, conversation and appointment in one record, so AI can answer new leads, book appointments and follow up without anything slipping through.";
const CANONICAL = "/use-cases/business-operations/ai-customer-relationship-management-crm";
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
            "keywords": "AI CRM, customer relationship management, lead follow-up, appointment booking, GoHighLevel, Pipedrive, Business Operations",
            "mentions": [
                { "@type": "Thing", "name": "GoHighLevel", "url": "https://www.gohighlevel.com/" },
                { "@type": "Thing", "name": "Pipedrive", "url": "https://www.pipedrive.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": CRM_FAQ.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        keywords: ["AI CRM", "customer relationship management", "lead follow-up", "appointment booking", "GoHighLevel", "Pipedrive", "Business Operations"],
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
        "Leads go cold when nobody replies fast. Here is how a CRM with AI keeps every conversation moving.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection path="/use-cases/business-operations/ai-customer-relationship-management-crm" title="AI Customer Relationship Management (CRM)" summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <WithoutItSection />
                <ToolsSection />
                <SetupSection />
                <FAQSection />
                <SchedulerShell />
            </article>
        </>
    );
}
