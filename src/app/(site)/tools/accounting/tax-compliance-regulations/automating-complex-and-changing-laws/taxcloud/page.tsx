import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "TaxCloud";
const PAGE_TITLE = "TaxCloud for Automating Complex & Changing Laws";
const DESCRIPTION =
    "Automate tax compliance for South Florida businesses with TaxCloud, managing complex laws effortlessly.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud";
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
            "keywords": "TaxCloud, tax compliance automation, complex and changing laws, sales tax, economic nexus, Florida sales tax, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-taxcloud",
                "name": TITLE,
                "url": "https://taxcloud.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How do I know if I have nexus in Florida?", "acceptedAnswer": {"@type": "Answer", "text": "You have nexus in Florida if your business has a physical presence like an office, warehouse, employees, or inventory stored in an Amazon FBA center. Additionally, if your taxable remote sales into Florida exceeded $100,000 in the previous calendar year, you have nexus. Note that Florida’s threshold is based on taxable sales, so exempt items like SaaS do not count. Marketplace sales where the facilitator collects tax are also excluded. Use TaxCloud’s nexus tracking to monitor your exposure across all states in real time."}},
                {"@type": "Question", "name": "Does Florida charge sales tax on shipping?", "acceptedAnswer": {"@type": "Answer", "text": "Florida does not charge sales tax on separately stated shipping charges for the delivery of tangible personal property. However, if shipping is bundled into the product price or combined with handling charges that include taxable components, the entire charge is taxable."}},
                {"@type": "Question", "name": "What happens if I miss a Florida sales tax filing deadline?", "acceptedAnswer": {"@type": "Answer", "text": "If you miss a Florida sales tax filing deadline, the state assesses a late filing penalty of 10% of the tax due, with a minimum penalty of $50, plus interest. This penalty applies even if you have no tax due."}},
                {"@type": "Question", "name": "How does TaxCloud track real-time tax changes across Florida's local municipalities?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud automates the process of calculating sales tax in Florida by applying the correct combined tax rate based on the buyer’s location. It regularly updates tax rates and regulations to ensure that businesses use current tax data. This helps businesses remain compliant with Florida’s state and local tax laws, saving time and reducing the risk of errors."}},
                {"@type": "Question", "name": "What is Streamlined Sales Tax (SST), and how does it save money when out-of-state rules change?", "acceptedAnswer": {"@type": "Answer", "text": "The Streamlined Sales Tax (SST) program is designed to simplify and reduce the costs of sales tax compliance for businesses. TaxCloud, as a Certified Service Provider of the SST Program, can save businesses time and money on state registration and filing costs in 24 SST-member states. This is particularly beneficial when out-of-state rules change, as it helps businesses manage compliance efficiently."}},
                {"@type": "Question", "name": "How does TaxCloud alert local businesses when they cross \"Economic Nexus\" lines?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud monitors sales against each state’s economic nexus thresholds and sends alerts when a business is approaching a threshold. This proactive alert system allows businesses to register and adjust their tax collection practices before crossing a threshold, ensuring compliance and avoiding potential legal issues."}},
                {"@type": "Question", "name": "How does TaxCloud handle changing tax rules for specialized categories like SaaS or manufacturing?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud stays updated on the varying taxability rules for SaaS and manufacturing, which can change frequently by state. By keeping track of these changes, TaxCloud ensures that businesses remain compliant as they grow, applying the correct tax rules to specialized categories without manual interpretation."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["TaxCloud", "tax compliance automation", "complex and changing laws", "sales tax", "economic nexus", "Florida sales tax", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            creator: 'Geek @ Your Spot LLC',
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
        "TaxCloud automates tax compliance for small businesses in South Florida, streamlining the management of complex and changing laws.";
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
