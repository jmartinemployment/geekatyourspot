import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Justworks";
const PAGE_TITLE = "Justworks for Payroll Tax & Worker Misclassification";
const DESCRIPTION =
    "Justworks automates payroll tax and worker classification for South Florida small businesses, helping prevent costly compliance errors and penalties.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Justworks, payroll tax compliance, worker misclassification, W-2 and 1099 classification, payroll automation, contractor compliance, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.justworks.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/ai-payroll-tax" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "If we use Justworks to pay both W-2 employees and 1099 contractors, how does the platform prevent misclassification audits?", "acceptedAnswer": {"@type": "Answer", "text": "Justworks highlights the risks and costs of misclassifying workers, especially when a contractor’s job duties do not change after converting to employee status. The platform provides clear support for handling W-2 and 1099 payments, including filing the correct tax forms and managing payroll compliance. However, it is still up to your business to ensure workers are classified correctly under IRS guidelines. Justworks helps with filings and reminders but does not guarantee audit prevention if misclassification occurs."}},
                {"@type": "Question", "name": "Florida has no state income tax, so why do I need a PEO/Compliance tool like Justworks to manage payroll taxes?", "acceptedAnswer": {"@type": "Answer", "text": "Even though Florida does not have a state income tax, small businesses still face other payroll compliance needs, like federal payroll taxes, workers’ comp, unemployment insurance, and new hire reporting. Justworks helps you stay compliant with federal, state, and local employment regulations, saving you time and reducing the risk of costly errors or HR violations. Their PEO service also handles state setup and tax registration, making it easier to onboard new employees and expand your business."}},
                {"@type": "Question", "name": "What happens to our existing Florida Department of Revenue (DOR) unemployment and withholding accounts when we move to Justworks PEO?", "acceptedAnswer": {"@type": "Answer", "text": "When you join Justworks PEO, they handle your payroll tax withholding, reporting, and remitting, including state unemployment insurance. Justworks files W-2s, 1099s, and manages state unemployment filings as part of their compliance support. This means they take over the administrative burden of managing these accounts, helping you stay compliant and reducing manual effort on your end."}},
                {"@type": "Question", "name": "If the IRS or the Florida DOR sends us a tax notice or penalty regarding a payroll mistake, who is liable, us or Justworks?", "acceptedAnswer": {"@type": "Answer", "text": "Justworks handles payroll processing, filings, and compliance support, and their certified PEO status offers added financial protections and tax benefits. However, the material on their site is for informational purposes only and does not constitute legal or tax advice. For specific liability questions, you should consult your legal or tax advisor. Justworks aims to help you stay compliant and avoid penalties, but ultimate responsibility may still rest with your business depending on the situation."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Justworks", "payroll tax compliance", "worker misclassification", "W-2 and 1099 classification", "payroll automation", "contractor compliance", "South Florida small business"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
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
        "Justworks offers small businesses in South Florida an automated way to manage payroll tax and worker classification, reducing the risks of audits and costly errors.";
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
