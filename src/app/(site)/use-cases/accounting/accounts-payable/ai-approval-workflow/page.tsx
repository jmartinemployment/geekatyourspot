import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/lede-section";
import RealCostSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/real-cost-section";
import HowItTransformsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/how-it-transforms-section";
import CriticalDecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/critical-decisions-section";
import InPracticeSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/in-practice-section";
import WhenItMakesSenseSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/when-it-makes-sense-section";
import PAASection, { APPROVAL_QUESTIONS } from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Approval Workflow";
const DESCRIPTION =
    "Explore Automated Approval Workflows to enhance accounts payable efficiency, cut costs, and improve accuracy for small businesses.";
const CANONICAL = "/use-cases/accounting/accounts-payable/ai-approval-workflow";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-07T00:00:00.000Z",
            "dateModified": "2026-10-07T00:00:00.000Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "automated approval workflows, accounts payable automation, invoice approval, AP workflow, approval routing, audit trail, AI in finance, invoice processing, finance automation, small business accounting",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-ap-automation-software" },
            "mentions": [
                { "@type": "Thing", "name": "ApprovalMax", "url": "https://approvalmax.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Melio", "url": "https://melio.com/" },
                { "@type": "Thing", "name": "Ramp", "url": "https://ramp.com/" },
                { "@type": "Thing", "name": "Stampli", "url": "https://www.stampli.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": APPROVAL_QUESTIONS.map(({ question, answer }) => ({
                "@type": "Question" as const,
                "name": question,
                "acceptedAnswer": { "@type": "Answer" as const, "text": answer },
            })),
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["automated approval workflows", "accounts payable automation", "invoice approval", "AP workflow", "approval routing", "finance automation"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE, description: DESCRIPTION, url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC', locale: 'en_US', type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image', title: TITLE, description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "We implement an AP approval workflow so vendor invoices are automatically captured, checked, assigned to the right decision-maker, escalated if delayed, recorded in QuickBooks, and paid only after the required authorization.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <RealCostSection />
                <HowItTransformsSection />
                <CriticalDecisionsSection />
                <InPracticeSection />
                <WhenItMakesSenseSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
