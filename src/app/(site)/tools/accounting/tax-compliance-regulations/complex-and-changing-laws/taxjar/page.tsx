import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "TaxJar";
const DESCRIPTION =
    "TaxJar automates tax compliance for Miami-Dade, Broward, and West Palm Beach small businesses, simplifying complex laws.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxjar";
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
            "keywords": "TaxJar, tax compliance automation, complex and changing laws, sales tax, economic nexus, Florida sales tax, South Florida small business",
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
                {"@type": "Question", "name": "How does TaxJar keep our tri-county retail or e-commerce store up to date when local county rates or rules change?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar simplifies managing sales tax compliance by offering a platform that handles everything from calculations to reporting and filing. This ensures your business stays current with changing tax laws, even as you scale across states. TaxJar's automation platform is designed to keep you informed and compliant with the latest tax regulations."}},
                {"@type": "Question", "name": "We sell across Shopify, Amazon, and WooCommerce. How do we keep track of changing out-of-state 'Economic Nexus' thresholds?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar provides an Economic Nexus Dashboard that helps you track where your business meets economic nexus thresholds in different states. This tool notifies you as you approach or reach these thresholds, making it easier to manage your obligations across various platforms like Shopify, Amazon, and WooCommerce."}},
                {"@type": "Question", "name": "Product taxability laws change constantly (like SaaS vs. physical goods). How does TaxJar manage this accurately?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar's platform includes smart product classification tools and a robust API that lets you assign product tax codes to your offerings. This ensures you collect the correct amount of sales tax based on current laws. The platform continuously monitors tax law changes, applying new rules as needed to keep your business compliant."}},
                {"@type": "Question", "name": "When state filing deadlines change or conflict, how does TaxJar protect us from missing a submission?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar's dashboard provides reminders for upcoming sales tax filing due dates, helping you avoid penalties and interest charges. The AutoFile feature can manage state tax returns and remittances for you, ensuring that you never miss a deadline, even when filing requirements vary across states."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["TaxJar", "tax compliance automation", "complex and changing laws", "sales tax", "economic nexus", "Florida sales tax", "South Florida small business"],
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
        "TaxJar provides automated solutions for small businesses to manage complex tax regulations, ensuring compliance and freeing up time for growth.";
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
