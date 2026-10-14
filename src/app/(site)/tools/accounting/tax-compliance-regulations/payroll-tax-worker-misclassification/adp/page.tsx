import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "ADP";
const DESCRIPTION =
    "Payroll Tax & Worker Misclassification present real risks for small businesses in Miami-Dade, Broward, and West Palm Beach. ADP helps ensure compliance.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp";
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
            "keywords": "ADP, payroll tax compliance, worker misclassification, W-2 and 1099 classification, payroll automation, contractor compliance, South Florida small business",
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
                {"@type": "Question", "name": "Does payroll software support multi-state payroll?", "acceptedAnswer": {"@type": "Answer", "text": "ADP’s payroll software keeps up with the latest tax laws and HR rules at both the federal level and in every state. If your business pays people in more than one state, you may need to register your business in each state where your employees work."}},
                {"@type": "Question", "name": "Does payroll software handle all payroll tax filings and payments (federal, state, local)?", "acceptedAnswer": {"@type": "Answer", "text": "Most automatic payroll systems, including ADP, handle federal and state tax filings. Local taxes are more complex, since rules can change quickly and vary by city or county. Not every provider covers local tax filings, so it is important to ask about this if your business needs it."}},
                {"@type": "Question", "name": "Does the platform manage local county-specific discretionary tax filings?", "acceptedAnswer": {"@type": "Answer", "text": "ADP software follows the IRS Common Law Test and the Department of Labor Economic Realities Test. During onboarding, it guides users to review who controls work hours, who provides equipment, and if the worker serves other clients."}},
                {"@type": "Question", "name": "Can an independent contractor waive their employee status via a signed agreement?", "acceptedAnswer": {"@type": "Answer", "text": "No. ADP documentation makes clear that a contract or agreement cannot override state or federal rules. The actual work relationship always determines legal status, not the title or agreement."}},
                {"@type": "Question", "name": "Does paying a contractor through their LLC or business entity protect against misclassification?", "acceptedAnswer": {"@type": "Answer", "text": "No. ADP points to legal precedents showing that courts look at the true economic relationship. Even if a contractor uses an LLC or business entity, the risk of misclassification remains if they are economically dependent on your business."}},
                {"@type": "Question", "name": "How does ADP handle payroll taxes differently for W-2s vs. 1099s?", "acceptedAnswer": {"@type": "Answer", "text": "For W-2 employees, ADP calculates, withholds, and sends federal and local taxes automatically. For 1099 contractors, payments are made before taxes and contractors handle their own self-employment taxes."}},
                {"@type": "Question", "name": "What forms are automatically generated during tax season?", "acceptedAnswer": {"@type": "Answer", "text": "ADP generates and files Form W-2 for employees and Form 1099-NEC for contractors. Starting with the 2026 tax year, the 1099-NEC threshold rises from $600 to $2,000 due to federal reporting changes."}},
                {"@type": "Question", "name": "What specific tools does ADP offer to manage contractor compliance safely?", "acceptedAnswer": {"@type": "Answer", "text": "ADP uses WorkMarket by ADP as its Independent Contractor Management System. This tool automates W-9 collection, verifies U.S. Worker Tax IDs, tracks payments, and stores documents like NDAs and licenses to keep a clear audit trail."}},
                {"@type": "Question", "name": "What are the consequences of a misclassification error?", "acceptedAnswer": {"@type": "Answer", "text": "If a business fails an audit, it can face major penalties. These include paying back-taxes for FICA and FUTA, unpaid overtime, workers' compensation costs, and possible trust fund recovery penalties for willful non-compliance."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["ADP", "payroll tax compliance", "worker misclassification", "W-2 and 1099 classification", "payroll automation", "contractor compliance", "South Florida small business"],
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
        "ADP offers automated solutions for small businesses struggling with payroll tax and worker misclassification, ensuring compliance and minimizing costly errors.";
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
