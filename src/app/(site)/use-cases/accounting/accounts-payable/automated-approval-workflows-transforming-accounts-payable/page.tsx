import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/lede-section";
import RealCostSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/real-cost-section";
import HowItTransformsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/how-it-transforms-section";
import CriticalDecisionsSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/critical-decisions-section";
import InPracticeSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/in-practice-section";
import WhenItMakesSenseSection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/when-it-makes-sense-section";
import PAASection from "@/components/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Automated Approval Workflows: Transforming Accounts Payable";
const DESCRIPTION =
    "Explore Automated Approval Workflows to enhance accounts payable efficiency, cut costs, and improve accuracy for small businesses.";
const CANONICAL = "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek At Your Spot",
                "logo": { "@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg" }
            },
            "datePublished": "2026-10-07T00:00:00.000Z",
            "dateModified": "2026-10-07T00:00:00.000Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "automated approval workflows, accounts payable automation, invoice approval, AP workflow, approval routing, audit trail, AI in finance, invoice processing, finance automation, small business accounting",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#article" },
            "mentions": [
                { "@id": `${TOOLS_BASE}/approvalmax#software` },
                { "@id": `${TOOLS_BASE}/bill#software` },
                { "@id": `${TOOLS_BASE}/melio#software` },
                { "@id": `${TOOLS_BASE}/ramp#software` },
                { "@id": `${TOOLS_BASE}/stampli#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "What is automated invoice data entry?", "acceptedAnswer": { "@type": "Answer", "text": "Automated invoice data entry uses AI to capture and input invoice details into your accounting system without manual typing. This saves time and reduces errors, letting your team focus on more valuable tasks." } },
                { "@type": "Question", "name": "What is the difference between invoice capture and AP automation?", "acceptedAnswer": { "@type": "Answer", "text": "Invoice capture focuses on extracting data from invoices and entering it into your system. AP automation goes further by streamlining the entire accounts payable process, including approvals and payments." } },
                { "@type": "Question", "name": "Can it process emailed PDFs, scanned invoices, and photos?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, automated approval workflows can handle emailed PDFs, scanned invoices, and even photos. This flexibility means you can process various invoice formats without extra work." } },
                { "@type": "Question", "name": "Can it extract individual invoice line items?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the software can extract individual line items from invoices. This feature helps maintain detailed records and simplifies tracking expenses against specific budget lines." } },
                { "@type": "Question", "name": "How accurate is automated invoice extraction?", "acceptedAnswer": { "@type": "Answer", "text": "Automated invoice extraction is highly accurate, often exceeding 90%. However, some complex invoices may require manual review to ensure complete accuracy." } },
                { "@type": "Question", "name": "Will it eliminate all manual data entry?", "acceptedAnswer": { "@type": "Answer", "text": "While it significantly reduces manual data entry, some oversight is still needed. The software handles most entries, but human checks ensure data integrity for complex invoices." } },
                { "@type": "Question", "name": "What happens when the software reads an invoice incorrectly?", "acceptedAnswer": { "@type": "Answer", "text": "If the software misreads an invoice, it flags the item for review. Your team can then correct the error, ensuring the data entered is accurate and reliable." } },
                { "@type": "Question", "name": "Can it automatically assign expense categories or GL codes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the system can automatically assign expense categories or GL codes based on predefined rules. This reduces the time spent on manual coding and ensures consistency." } },
                { "@type": "Question", "name": "Can it compare invoices with purchase orders?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, automated workflows can match invoices to purchase orders to verify accuracy. This helps prevent overpayments and ensures compliance with purchasing agreements." } },
                { "@type": "Question", "name": "Does it integrate with QuickBooks, Xero, or Sage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our solution integrates seamlessly with popular accounting software like QuickBooks, Xero, and Sage. This integration ensures a smooth flow of data across your systems." } },
                { "@type": "Question", "name": "Will the original invoice remain attached to the accounting record?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the original invoice stays attached to the accounting record. This makes it easy to reference the original document when needed, ensuring transparency and traceability." } },
                { "@type": "Question", "name": "Is line-item extraction included in the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, line-item extraction is typically included in the package price. This feature allows for detailed data capture without additional costs, making it budget-friendly for small businesses." } },
                { "@type": "Question", "name": "What must be configured before going live?", "acceptedAnswer": { "@type": "Answer", "text": "Before going live, settings like invoice templates, approval workflows, and integration with existing software need configuration. Proper setup ensures the system runs smoothly from day one." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["automated approval workflows", "accounts payable automation", "invoice approval", "AP workflow", "approval routing", "finance automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE, description: DESCRIPTION, url: PAGE_URL,
            siteName: 'Geek at Your Spot', locale: 'en_US', type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image', title: TITLE, description: DESCRIPTION,
            creator: 'Geek at Your Spot', images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek at Your Spot' },
    };
};

export default async function Page() {
    const heroSummary =
        "We implement an AP approval workflow so vendor invoices are automatically captured, checked, assigned to the right decision-maker, escalated if delayed, recorded in QuickBooks, and paid only after the required authorization.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <RealCostSection />
                <HowItTransformsSection />
                <CriticalDecisionsSection />
                <InPracticeSection />
                <WhenItMakesSenseSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
