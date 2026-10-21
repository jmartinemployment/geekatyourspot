import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Zamp";
const PAGE_TITLE = "Zamp for Automating Complex & Changing Laws";
const DESCRIPTION =
    "Zamp helps Miami-area small businesses manage complex tax laws with automated compliance solutions.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Zamp, tax compliance automation, complex and changing laws, sales tax, economic nexus, Florida sales tax, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://zamp.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Will switching disrupt our close, filings, or audits?", "acceptedAnswer": {"@type": "Answer", "text": "No, switching to Zamp won't disrupt your operations. Your current setup is reviewed and migrated in parallel, ensuring that filings, registrations, and reporting continue smoothly. Most teams are up and running within a week with no interruptions."}},
                {"@type": "Question", "name": "Who is accountable if something goes wrong?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp takes full responsibility for compliance outcomes. From nexus and registrations to filings and audits, you have a single team accountable for accuracy and resolution."}},
                {"@type": "Question", "name": "Do we still need in-house sales tax expertise?", "acceptedAnswer": {"@type": "Answer", "text": "No, Zamp's tax professionals work as an extension of your finance team. They handle the complexities, answer questions, and manage compliance, allowing your team to focus on business operations."}},
                {"@type": "Question", "name": "How does pricing scale as we grow?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp's pricing scales predictably with your business. It covers filings, registrations, complex jurisdictions, and support without unexpected fees per return, notice, or integration."}},
                {"@type": "Question", "name": "Is Zamp built for multi-entity, multi-state, and high-volume operations?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Zamp supports complex entity structures, multi-state, and high-volume operations seamlessly."}},
                {"@type": "Question", "name": "How is Zamp different from an automation-only platform like Kintsugi?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp combines intelligent automation with an in-house tax team that manages registrations, filings, notices, and audit readiness. Unlike platforms that only provide tools, Zamp is accountable for the outcomes."}},
                {"@type": "Question", "name": "Who is responsible when something goes wrong, like a state notice or audit?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp's dedicated tax specialists monitor, review, and resolve notices before they become critical issues. You won't be left to handle state communications alone."}},
                {"@type": "Question", "name": "Will Zamp handle multi-state and complex local filings for us?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Zamp manages state, local, and home-rule filings, registrations, and remittances as part of the service, without extra fees per return or jurisdiction."}},
                {"@type": "Question", "name": "How does Zamp ensure accuracy at close and during audits?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp uses enterprise-grade calculation technology paired with professional review and reconciliation to produce close-ready, audit-defensible reporting and filings."}},
                {"@type": "Question", "name": "What kind of support will we have day-to-day?", "acceptedAnswer": {"@type": "Answer", "text": "You'll have direct access to Zamp's support team for any day-to-day needs."}},
                {"@type": "Question", "name": "What does “fully managed” actually mean in practice?", "acceptedAnswer": {"@type": "Answer", "text": "Fully managed means Zamp handles nexus, registrations, filings, remittance, notice handling, and audit support end-to-end. Your role is to review and sign-off, not to coordinate or execute."}},
                {"@type": "Question", "name": "Who handles state and local tax notices?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp proactively tracks, classifies, reviews, and resolves notices using a mix of automation and expert oversight, so your team isn't burdened with deadlines and agency communication."}},
                {"@type": "Question", "name": "How does this support international and cross-border expansion?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp manages U.S. sales tax and global VAT/GST in one system with expert guidance, so expanding internationally doesn't require separate tools or vendors."}},
                {"@type": "Question", "name": "How does this reduce risk at close and during audits?", "acceptedAnswer": {"@type": "Answer", "text": "Returns and liabilities are designed to reconcile with your ERP and general ledger, supported by audit-ready documentation and specialist review for confident compliance."}},
                {"@type": "Question", "name": "What internal effort is still required from our team?", "acceptedAnswer": {"@type": "Answer", "text": "Your team only needs to provide oversight."}},
                {"@type": "Question", "name": "Can Shopify tax settings change without breaking filings?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, changes to Shopify collection rules are synced and incorporated into compliance workflows to maintain accuracy."}},
                {"@type": "Question", "name": "Does Shopify file and remit sales tax automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Shopify calculates and collects tax, but filing and remittance need a separate workflow. Zamp prepares and submits returns and payments based on actual collections."}},
                {"@type": "Question", "name": "How are marketplace-facilitated orders treated?", "acceptedAnswer": {"@type": "Answer", "text": "Marketplace transactions are identified and classified to align with facilitator rules, ensuring tax is neither double-filed nor omitted."}},
                {"@type": "Question", "name": "How are product taxability rules applied by state?", "acceptedAnswer": {"@type": "Answer", "text": "Products and shipping are mapped to state-specific tax codes, reflecting exemptions and special rules in reporting and filings."}},
                {"@type": "Question", "name": "How are state notices and audits handled?", "acceptedAnswer": {"@type": "Answer", "text": "State correspondence and audit requests are managed with jurisdiction-level transaction history and filing documentation to ensure resolution."}},
                {"@type": "Question", "name": "How does Zamp track and apply changing tax rates across South Florida’s shifting county boundaries?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp manages state, local, and home-rule filings, registrations, and remittances as part of its service. It tracks tax rate changes across every U.S. jurisdiction, ensuring businesses in South Florida remain compliant even as local rates shift. This is crucial because local rates can change when voters approve new district taxes, typically at the start of a calendar quarter."}},
                {"@type": "Question", "name": "What happens if a South Florida small business triggers \"Economic Nexus\" in another state?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp monitors both physical and economic nexus triggers to keep businesses compliant. If a South Florida small business triggers economic nexus in another state, Zamp will ensure that the business collects and remits the appropriate sales tax, helping them navigate the complexities of multi-state compliance."}},
                {"@type": "Question", "name": "How does Zamp protect a small business from shifting regulations compared to tools like Avalara or TaxJar?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp offers a managed service with end-to-end compliance, unlike Avalara or TaxJar, which are primarily calculation and filing tools. Zamp's platform includes a built-in managed service that handles compliance ownership, saving businesses time, money, and reducing risk. This comprehensive approach ensures small businesses are protected from shifting regulations without having to manage the complexities themselves."}},
                {"@type": "Question", "name": "How are product-specific tax exemptions (like SaaS vs. physical goods) handled under complex state laws?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp’s engine automatically manages the rules for product-specific tax exemptions, such as those for SaaS and physical goods. This is essential because SaaS is taxable in some states like Tennessee and Vermont, but exempt in others like Michigan. Zamp keeps track of these legislative changes so businesses don't have to, ensuring accurate tax compliance across different jurisdictions."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Zamp", "tax compliance automation", "complex and changing laws", "sales tax", "economic nexus", "Florida sales tax", "South Florida small business"],
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
        "Zamp offers automated tax compliance solutions, helping small businesses manage complex and changing laws efficiently.";
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
