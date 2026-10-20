import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Gusto";
const PAGE_TITLE = "Gusto for Payroll Tax & Worker Misclassification";
const DESCRIPTION =
    "Gusto automates payroll tax compliance and worker classification for South Florida small businesses, minimizing costly errors and penalties.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Gusto, payroll tax compliance, worker misclassification, W-2 and 1099 classification, payroll automation, contractor compliance, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-gusto",
                "name": TITLE,
                "url": "https://gusto.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-compliance#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Does Gusto file 1099 and W-2 forms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto handles filing both W-2s and 1099s for your business. Your employees and contractors get electronic copies of their forms. If you switch to Gusto partway through the year, Gusto will still file complete W-2s for the whole year. During setup, Gusto collects your wage details to help make sure all W-2s are accurate and cover the full year."}},
                {"@type": "Question", "name": "Does Gusto automatically calculate, file, and remit federal and Florida payroll taxes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto automatically calculates, files, and pays your federal payroll taxes and your Florida reemployment tax. Florida has no state income tax and no local payroll tax, so an employee who works in Miami-Dade, Broward, or Palm Beach County is taxed the same way in each."}},
                {"@type": "Question", "name": "What happens if there is a calculation error or if I receive a penalty notice from the IRS or the Florida Department of Revenue?", "acceptedAnswer": {"@type": "Answer", "text": "If there is a payroll calculation error, the best outcome is catching it early and correcting it on the next paycheck. If not corrected, you could face unpaid payroll taxes, interest, and underpayment penalties. For IRS penalty notices, you may be able to avoid fees by showing reasonable cause and providing documentation that you did everything possible to meet your tax obligations. The IRS reviews each case individually, so keeping thorough records is important."}},
                {"@type": "Question", "name": "How does Gusto handle Workers' Compensation compliance in Florida?", "acceptedAnswer": {"@type": "Answer", "text": "Gusto helps with Workers' Compensation compliance by keeping your business up to date with changing requirements. In Florida, those requirements come from the Division of Workers' Compensation, part of the Florida Department of Financial Services. If you use a Professional Employer Organization (PEO) through Gusto, the PEO can take on responsibilities such as payroll processing, taxes, and Workers' Compensation compliance, letting you focus on daily operations."}},
                {"@type": "Question", "name": "Does this accounting automation seamlessly sync with my local bookkeeping software?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto lets you automatically sync your income, expenses, and deductions with your favorite accounting software. This helps you keep your books accurate and up to date without extra manual work."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Gusto", "payroll tax compliance", "worker misclassification", "W-2 and 1099 classification", "payroll automation", "contractor compliance", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
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
        "Gusto streamlines payroll tax management and worker classification for South Florida small businesses, minimizing compliance risks and costly errors.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <TransformsSection />
            <HowItWorksSection />
            <ArchitectureSection />
            <ImplementingSection />
            <DataMappingSection />
            <ConfiguringSection />
            <EvaluatingSection />
            <ComparingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
