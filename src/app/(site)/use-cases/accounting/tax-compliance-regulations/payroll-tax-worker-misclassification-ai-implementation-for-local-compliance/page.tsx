import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/lede-section";
import ChallengesSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/challenges-section";
import StatusQuoSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/status-quo-section";
import MechanicsSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/key-factors-section";
import DecisionsSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/decisions-section";
import SequenceSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/sequence-section";
import DataIntegrationSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/data-integration-section";
import RolesSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/roles-section";
import RightFitSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/right-fit-section";
import PreparingSection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/preparing-section";
import PAASection from "@/components/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Intelligent Payroll Tax";
const DESCRIPTION =
    "AI solutions for Payroll Tax & Worker Misclassification help small businesses in Miami-Dade, Broward, and West Palm Beach automate compliance and reduce costly errors.";
const CANONICAL = "/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek @ Your Spot LLC",
                "logo": { "@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg" }
            },
            "datePublished": "2026-10-13T13:30:45.9859490Z",
            "dateModified": "2026-10-13T13:30:45.9859490Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Payroll Tax & Worker Misclassification, AI payroll compliance, small business automation, Miami-Dade tax compliance, Broward small business payroll, West Palm Beach payroll automation, Gusto integration, Rippling compliance tools, Deel worker classification, Justworks payroll AI",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/adp#software` },
                { "@id": `${TOOLS_BASE}/deel#software` },
                { "@id": `${TOOLS_BASE}/gusto#software` },
                { "@id": `${TOOLS_BASE}/justworks#software` },
                { "@id": `${TOOLS_BASE}/rippling#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "If I have a signed contract stating a worker is an independent contractor, am I safe from a misclassification audit?", "acceptedAnswer": {"@type": "Answer", "text": "No, a signed contract alone does not protect you from a misclassification audit. Agencies like the IRS look at the actual work relationship, not just the paperwork. If a worker should be classified as an employee, you could owe back wages, taxes, and face penalties even if you have a contract saying they are a contractor. It’s important to use a clear, defensible process for classification and review your practices regularly to avoid costly mistakes."}},
                {"@type": "Question", "name": "How do the 2026 tax reporting changes affect my 1099-NEC obligations?", "acceptedAnswer": {"@type": "Answer", "text": "Starting in 2026, the federal filing threshold for Form 1099-NEC will rise from $600 to $2,000. This means you only need to send a 1099-NEC to contractors you’ve paid $2,000 or more in a calendar year. For those paid between $600 and $1,999, you will not issue a 1099-NEC, but you should communicate this change clearly to avoid confusion. Also, some states may still require reporting at lower thresholds, so check local rules to stay fully compliant."}},
                {"@type": "Question", "name": "Do county surtaxes like Miami-Dade’s apply to payroll for my remote or traveling employees?", "acceptedAnswer": {"@type": "Answer", "text": "No. Florida’s county discretionary surtaxes are sales taxes, and Florida has no state or local income tax, so the county an employee works in does not change payroll withholding. What does change it is an employee who lives or works in another state. Automated payroll tools track where each employee works and withhold the right state’s taxes as your team moves."}},
                {"@type": "Question", "name": "Will implementing an affiliate and partner compliance tool slow down our ability to pay out local contractors?", "acceptedAnswer": {"@type": "Answer", "text": "Modern affiliate and partner compliance tools are built to speed up, not slow down, contractor payments. These platforms automate onboarding, document collection, and payment workflows, so you can pay contractors quickly and accurately—often in just a few minutes. By reducing manual work and keeping compliance in check, these tools help you avoid payment delays and keep your local contractors happy."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Payroll Tax & Worker Misclassification", "AI payroll compliance", "small business automation", "Miami-Dade tax compliance", "Broward small business payroll", "West Palm Beach payroll automation", "Gusto integration", "Rippling compliance tools", "Deel worker classification", "Justworks payroll AI"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Stop risking fines and wasted hours. We help South Florida small businesses automate payroll tax compliance and worker classification, so you stay focused on growth.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
