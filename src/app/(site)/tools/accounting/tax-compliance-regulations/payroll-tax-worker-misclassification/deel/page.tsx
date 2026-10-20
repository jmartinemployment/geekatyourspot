import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Deel";
const PAGE_TITLE = "Deel for Payroll Tax & Worker Misclassification";
const DESCRIPTION =
    "Deel automates payroll tax compliance and worker classification for South Florida small businesses, reducing audit risk and administrative complexity.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel";
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
            "keywords": "Deel, payroll tax compliance, worker misclassification, W-2 and 1099 classification, payroll automation, contractor compliance, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-deel",
                "name": TITLE,
                "url": "https://www.deel.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does Deel protect my South Florida business from IRS misclassification penalties?", "acceptedAnswer": {"@type": "Answer", "text": "Deel helps shield your business from misclassification risks by offering Contractor of Record services. This means Deel takes on the responsibility for classifying workers correctly, using AI-powered tools and localized contracts. With Deel, your business gets continuous compliance monitoring and a defensible process to reduce the risk of IRS penalties, back taxes, and legal action tied to worker misclassification."}},
                {"@type": "Question", "name": "What criteria does the tool use to differentiate between an employee and a contractor?", "acceptedAnswer": {"@type": "Answer", "text": "Deel uses criteria based on control and economic dependence to determine worker status. If your business controls working hours, provides tools, manages training, or is the worker’s only employer, the individual is more likely to be classified as an employee. Deel’s platform supports you with AI-powered classification and compliance checks to help you avoid costly misclassification errors."}},
                {"@type": "Question", "name": "If we onboard a remote team member outside of Florida, does Deel manage that state's unique tax laws?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Deel’s PEO and payroll solutions handle compliance with tax laws in all 50 states. The platform manages state-specific tax registrations, workers’ comp, and benefits setup, so you don’t have to worry about unique requirements when hiring outside Florida."}},
                {"@type": "Question", "name": "Florida has no state income tax, so why do I need a compliance tool for local employees?", "acceptedAnswer": {"@type": "Answer", "text": "Even though Florida does not have state income tax, employers must still comply with federal tax laws, payroll taxes, Social Security, Medicare, and unemployment taxes. Florida also requires businesses to handle re-employment tax and workers’ compensation. A compliance tool like Deel helps you manage these obligations, reducing the risk of penalties and ensuring your business meets all legal requirements."}},
                {"@type": "Question", "name": "What is Deel PEO, and how does it help a small business manage tax compliance?", "acceptedAnswer": {"@type": "Answer", "text": "Deel PEO is a full-service HR solution that combines payroll, benefits, and compliance under one platform. For small businesses, this means Deel takes on the responsibility for payroll, tax filings, and benefits administration, including ACA compliance. Deel’s certified HR professionals and licensed advisors ensure you stay compliant with federal, state, and local regulations, so you can focus on growing your business."}},
                {"@type": "Question", "name": "Does Deel automate the generation and filing of year-end tax forms like W-2s and 1099s?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Deel automatically generates and files W-2 and 1099 forms with the IRS and Social Security Administration. Employees and contractors receive their forms at year-end, and the platform keeps up with changing tax rules to help your business stay compliant without manual tracking."}},
                {"@type": "Question", "name": "How does Deel map tax deductions and contractor payments into our accounting platform?", "acceptedAnswer": {"@type": "Answer", "text": "Deel integrates with accounting software like QuickBooks and NetSuite. When connected, invoices, bills, and payments—including contractor and EOR payments—are automatically synced and mapped to your general ledger. Vendor matching and customizable sync settings help eliminate manual entry, reduce errors, and keep your financial records up to date."}},
                {"@type": "Question", "name": "What kind of continuous monitoring does Deel offer when tax regulations change mid-year?", "acceptedAnswer": {"@type": "Answer", "text": "Deel offers continuous compliance by actively monitoring, flagging, and providing regulatory updates as laws and tax regulations change. Their Compliance Monitor tool automatically scans, collects, and explains the latest relevant regulatory changes worldwide, so small businesses in Miami-Dade, Broward, and West Palm Beach counties can stay up to date without extra effort. Monthly Workforce Insights alert you to expiring visas, misclassification risks, and other compliance issues. Real-time notifications and curated insights are delivered directly in the Deel platform, helping you respond quickly and confidently to new requirements."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Deel", "payroll tax compliance", "worker misclassification", "W-2 and 1099 classification", "payroll automation", "contractor compliance", "South Florida small business"],
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
        "Deel streamlines payroll tax compliance and worker classification, helping South Florida small businesses reduce audit risks and administrative burdens.";
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
