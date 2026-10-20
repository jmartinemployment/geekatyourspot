import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Snitcher";
const PAGE_TITLE = "Snitcher for Lead Enrichment and Predictive Scoring";
const DESCRIPTION =
    "Lead Enrichment and Predictive Scoring with Snitcher helps South Florida small businesses turn website visits into qualified leads and actionable sales opportun";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher";
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
            "keywords": "Snitcher, lead enrichment, predictive lead scoring, intent data, lead capture, B2B lead generation, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-snitcher",
                "name": TITLE,
                "url": "https://www.snitcher.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Is Snitcher GDPR compliant?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Snitcher is GDPR compliant. The tool identifies companies at the business level using legitimate interest. Only business contact details like job titles and work emails are shown. Snitcher is also working toward ISO 27001 certification for added data security."}},
                {"@type": "Question", "name": "Which companies will I actually see?", "acceptedAnswer": {"@type": "Answer", "text": "You will see companies that visit your site from a corporate network. This covers most B2B traffic during business hours. If someone visits from home or a mobile connection, their company usually will not show up. Snitcher is upfront about this so you know what to expect. You can start a trial and see what your own website traffic looks like within a day."}},
                {"@type": "Question", "name": "Our South Florida business gets a lot of local traffic, but most leave without filling out a form. How does Snitcher's Lead Enrichment actually reveal who they are?", "acceptedAnswer": {"@type": "Answer", "text": "Snitcher works like a digital investigator for your website. It uses IP-to-Company resolution to track anonymous visitors and matches those details to a verified business identity. Instead of just seeing a visitor from Fort Lauderdale, you get the actual company name, industry, size, and location of the business checking out your services."}},
                {"@type": "Question", "name": "Can Snitcher find the specific decision-makers (like the CFO or Owner) at the companies visiting our site, or does it just give us the company name?", "acceptedAnswer": {"@type": "Answer", "text": "Snitcher does both. It identifies the visiting company and also offers a Contact Reveal feature. This gives you verified professional contacts and emails behind the account, so your sales team can reach out directly to local executives instead of generic info@ addresses."}},
                {"@type": "Question", "name": "We heavily rely on Google Analytics 4 (GA4) to track our regional marketing performance in Tri-County. How does Snitcher enrich that data?", "acceptedAnswer": {"@type": "Answer", "text": "Snitcher has native GA4 enrichment. It passes B2B company-level attributes right into your Google Analytics dashboard. This turns basic traffic numbers into a clear pipeline view, showing exactly which local campaigns are bringing in real businesses."}},
                {"@type": "Question", "name": "We are a lean team covering Miami to West Palm Beach, we can’t chase every lead. How does Account Scoring help us prioritize?", "acceptedAnswer": {"@type": "Answer", "text": "Snitcher tracks real-time buyer intent signals. It scores accounts based on how deeply and often they engage with your site. When a visitor shows strong intent, like spending time on your pricing and integration pages, Snitcher flags them as a hot lead so your team can focus on deals most likely to close."}},
                {"@type": "Question", "name": "Can we customize the scoring criteria to match our specific B2B ideal customer profile (ICP)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you can set what counts as a high-value action. For example, you can make rules so that if a company with 10–50 employees in Broward County visits your Automations page twice in a week, they are marked as a top-tier lead and sent straight to your sales pipeline."}},
                {"@type": "Question", "name": "We don't have a dedicated IT department. How difficult is Snitcher to set up and integrate with our existing CRM?", "acceptedAnswer": {"@type": "Answer", "text": "Snitcher is designed for quick, code-free setup. It offers seamless integrations with tools small businesses already use, like HubSpot, Salesforce, Pipedrive, Slack, and Zapier. Data and workflows sync automatically, so you do not need manual entry or IT support."}},
                {"@type": "Question", "name": "Is Snitcher compliant with privacy regulations?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Snitcher is fully GDPR compliant and processes data according to top security standards. It only identifies company-level intent and does not track unauthorized personal consumer data."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Snitcher", "lead enrichment", "predictive lead scoring", "intent data", "lead capture", "B2B lead generation", "South Florida small business"],
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
        "Snitcher uses Lead Enrichment and Predictive Scoring to help South Florida small businesses identify and prioritize high-value website visitors, turning anonymous traffic into actionable leads.";
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
