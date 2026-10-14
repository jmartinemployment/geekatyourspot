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
const DESCRIPTION =
    "Gusto automates payroll tax compliance and worker classification for South Florida small businesses, minimizing costly errors and penalties.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": TITLE,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Gusto, payroll tax compliance, worker misclassification, W-2 and 1099 classification, payroll automation, contractor compliance, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Does Gusto file 1099 and W-2 forms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto handles filing both W-2s and 1099s for your business. Your employees and contractors get electronic copies of their forms. If you switch to Gusto partway through the year, Gusto will still file complete W-2s for the whole year. During setup, Gusto collects your wage details to help make sure all W-2s are accurate and cover the full year."}},
                {"@type": "Question", "name": "Does Gusto automatically calculate, file, and remit both federal and local Florida taxes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto automatically calculates, files, and pays all federal, state, and local payroll taxes for your business. This includes full coverage for Florida employers, so you can run payroll compliantly no matter where your employees work in Miami-Dade, Broward, or West Palm Beach counties."}},
                {"@type": "Question", "name": "What happens if there is a calculation error or if I receive a penalty notice from the IRS or the Florida Department of Revenue?", "acceptedAnswer": {"@type": "Answer", "text": "If there is a payroll calculation error, the best outcome is catching it early and correcting it on the next paycheck. If not corrected, you could face unpaid payroll taxes, interest, and underpayment penalties. For IRS penalty notices, you may be able to avoid fees by showing reasonable cause and providing documentation that you did everything possible to meet your tax obligations. The IRS reviews each case individually, so keeping thorough records is important."}},
                {"@type": "Question", "name": "How does Gusto handle Workers' Compensation compliance in Florida?", "acceptedAnswer": {"@type": "Answer", "text": "Gusto helps with Workers' Compensation compliance by staying on top of Department of Labor regulations and keeping your business up to date with changing requirements. If you use a Professional Employer Organization (PEO) through Gusto, the PEO can take on responsibilities such as payroll processing, taxes, and Workers' Compensation compliance, letting you focus on daily operations."}},
                {"@type": "Question", "name": "Does this accounting automation seamlessly sync with my local bookkeeping software?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Gusto lets you automatically sync your income, expenses, and deductions with your favorite accounting software. This helps you keep your books accurate and up to date without extra manual work."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Gusto", "payroll tax compliance", "worker misclassification", "W-2 and 1099 classification", "payroll automation", "contractor compliance", "South Florida small business"],
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
        "Gusto streamlines payroll tax management and worker classification for South Florida small businesses, minimizing compliance risks and costly errors.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
