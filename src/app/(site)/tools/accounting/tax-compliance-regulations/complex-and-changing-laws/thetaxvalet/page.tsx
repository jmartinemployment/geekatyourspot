import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "TaxValet";
const DESCRIPTION =
    "Streamline tax compliance for Miami-area small businesses with TaxValet's expert-managed services.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet";
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
            "keywords": "TaxValet, tax compliance automation, complex and changing laws, sales tax, economic nexus, Florida sales tax, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/ai-solutions-for-complex-and-changing-tax-laws"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does TaxValet protect my business if a software integration fails during a regional tax rate change?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet runs transaction audits to compare collected rates with the latest owed rates in all your business’s jurisdictions. If issues like misconfigured products are found, TaxValet immediately pushes fixes across your sales channels to correct tax calculations system-wide. Unlike DIY software, TaxValet provides guarantees and takes responsibility for any issues caused, offering maximum risk protection through continuous monitoring."}},
                {"@type": "Question", "name": "We don't have a CPA on staff. How do we keep up with out-of-state 'Economic Nexus' laws as they evolve?", "acceptedAnswer": {"@type": "Answer", "text": "During TaxValet’s onboarding process, your business receives a complete nexus analysis to pinpoint past exposure. TaxValet maps out strategic options, such as executing a Voluntary Disclosure Agreement (VDA) to waive penalties. The team provides tailored advice based on your financial goals and executes the chosen plan to clean up liabilities and keep your business protected. This process ensures you stay compliant with evolving economic nexus laws without needing a CPA on staff."}},
                {"@type": "Question", "name": "Our product mix changes constantly (SaaS, physical goods, digital courses). How do we know we are mapping items to the right tax codes?", "acceptedAnswer": {"@type": "Answer", "text": "TaxValet offers done-for-you taxability mapping, analyzing your specific offerings, features, and delivery methods to determine and configure the exact taxability in every state. This service ensures that your products are correctly mapped to the appropriate tax codes, reducing the risk of over-collecting or under-collecting taxes and avoiding penalties or back taxes."}},
                {"@type": "Question", "name": "What happens if a state sends us an aggressive audit notice regarding changing tax regulations?", "acceptedAnswer": {"@type": "Answer", "text": "With TaxValet, your team becomes your advocate, handling all communication with state authorities. They decipher the notice, take the necessary steps to resolve the issue, and keep you informed throughout the process. This support ensures that you do not have to navigate confusing online portals or risk making costly mistakes on your own."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["TaxValet", "tax compliance automation", "complex and changing laws", "sales tax", "economic nexus", "Florida sales tax", "South Florida small business"],
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
        "TaxValet offers a fully managed tax compliance solution, freeing Miami-area small businesses from the complexities of ever-changing regulations.";
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
