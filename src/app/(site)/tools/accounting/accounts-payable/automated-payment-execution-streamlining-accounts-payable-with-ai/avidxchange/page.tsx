import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/overview-section";
import ChallengesSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/challenges-section";
import RemovesFromYourWeekSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/removes-from-your-week-section";
import StreamlinesSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/streamlines-section";
import ImplementationSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/implementation-section";
import EvaluatingSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/evaluating-section";
import RightFitSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/right-fit-section";
import FaqSection from "@/components/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "AvidXchange";
const DESCRIPTION =
    "Automate payment execution with AvidXchange for improved efficiency and accuracy in your business.";
const CANONICAL = "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange";
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
            "keywords": "AvidXchange, automated payment execution, accounts payable automation, supplier payments, virtual card, AvidPay Direct, payment status visibility, QuickBooks integration, NetSuite integration, AI implementation",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                { "@type": "Question", "name": "Do I need to change my existing approval workflows in RAAMP?", "acceptedAnswer": { "@type": "Answer", "text": "No, you don't need to change anything. AvidXchange works within RAAMP, so your payments will follow the current approval structure without requiring new workflows." } },
                { "@type": "Question", "name": "What payment methods does AvidXchange support?", "acceptedAnswer": { "@type": "Answer", "text": "AvidXchange supports several payment methods: virtual card, AvidPay Direct (enhanced direct deposit), and check. Payments are delivered using the supplier's preferred method, with real-time status updates and PDF payment proofs available directly in RAAMP." } },
                { "@type": "Question", "name": "Is there a cost to my vendors/suppliers?", "acceptedAnswer": { "@type": "Answer", "text": "The cost depends on the payment method chosen, and vendors always have the option to select how they're paid." } },
                { "@type": "Question", "name": "I'm looking for payment or invoice approval status.", "acceptedAnswer": { "@type": "Answer", "text": "Once your invoice is approved for payment, AvidXchange sends your funds via your preferred payment method. For 24/7 visibility into your invoice and payment statuses, request access to the complimentary AvidXchange Supplier Hub." } },
                { "@type": "Question", "name": "I need help with a payment.", "acceptedAnswer": { "@type": "Answer", "text": "For 24/7 visibility into your invoice and payment statuses, request access to the complimentary AvidXchange Supplier Hub. For other payment inquiries, visit our Supplier Care page and complete the form, or use the chat icon in the bottom right-hand corner." } },
                { "@type": "Question", "name": "I need to update my preferred payment method.", "acceptedAnswer": { "@type": "Answer", "text": "To update your payment method, visit our Supplier Care page, select 'Payment question,' and then 'Change my payment method' from the dropdown menus." } },
                { "@type": "Question", "name": "How do I submit an invoice?", "acceptedAnswer": { "@type": "Answer", "text": "Submit invoices as instructed by your customer, either via email or to their dedicated P.O. box. If emailing, save attachments as a PDF and send only one invoice per PDF, with a maximum file size of 10 MB." } }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["AvidXchange", "automated payment execution", "accounts payable automation", "supplier payments", "virtual card", "AvidPay Direct"],
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
        "AvidXchange revolutionizes how businesses handle payments, offering efficient and automated solutions.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <RemovesFromYourWeekSection />
            <StreamlinesSection />
            <ImplementationSection />
            <EvaluatingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
