import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/overview-section";
import ChallengesSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/challenges-section";
import TransformsSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/architecture-section";
import ImplementingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/implementing-section";
import DataMappingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/evaluating-section";
import ComparingSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/comparing-section";
import RightFitSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/right-fit-section";
import FaqSection from "@/components/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Leadfeeder";
const PAGE_TITLE = "Leadfeeder for Lead Enrichment and Predictive Scoring";
const DESCRIPTION =
    "Leadfeeder offers Lead Enrichment and Predictive Scoring to help Miami-area small businesses identify and prioritize high-intent website leads instantly.";
const CANONICAL = "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder";
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
            "keywords": "Leadfeeder, lead enrichment, predictive lead scoring, intent data, lead capture, B2B lead generation, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-leadfeeder",
                "name": TITLE,
                "url": "https://www.leadfeeder.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is pipeline generation in B2B marketing?", "acceptedAnswer": {"@type": "Answer", "text": "Pipeline generation means finding, attracting, and turning the right business accounts into real sales opportunities. Unlike just collecting leads, this approach focuses on quality and buying intent. By seeing which companies interact with your website and marketing, you can focus on prospects who are more likely to buy, leading to more sales and better use of your time and budget."}},
                {"@type": "Question", "name": "How can I identify anonymous website visitors?", "acceptedAnswer": {"@type": "Answer", "text": "You can spot anonymous website visitors by using technology that matches their IP addresses to company information. This lets you see which businesses are checking out your site, even if they never fill out a form. With this insight, you can focus on high-interest accounts and run targeted follow-up campaigns."}},
                {"@type": "Question", "name": "How does website visitor identification improve paid campaign performance?", "acceptedAnswer": {"@type": "Answer", "text": "Identifying website visitors helps you see which companies are responding to your ads and site. Instead of just counting clicks, you can focus on businesses that show real buying intent. This means better targeting, higher conversion rates, and lower costs for each qualified lead."}},
                {"@type": "Question", "name": "What type of data is used to target high-fit B2B accounts?", "acceptedAnswer": {"@type": "Answer", "text": "To target the right business accounts, you use data like company size, industry, revenue, technology used, engagement signals, and website activity. Mixing these data points helps you zero in on companies that match your ideal customer and are actively looking for solutions."}},
                {"@type": "Question", "name": "How can I reduce customer acquisition costs (CAC) in B2B marketing?", "acceptedAnswer": {"@type": "Answer", "text": "You can lower your customer acquisition costs by focusing your marketing budget on accounts that fit your target and show buying intent. By knowing which companies visit your website and tracking their interest, you can spend your money where it is most likely to pay off, cutting down on wasted ad spend."}},
                {"@type": "Question", "name": "How does intent data help marketing teams?", "acceptedAnswer": {"@type": "Answer", "text": "Intent data tells you when a company is actively looking for information or solutions. This lets your marketing team reach out at the right time with messages, retargeting, or sales contact. Acting on intent data boosts conversion rates and helps close deals faster."}},
                {"@type": "Question", "name": "How does marketing and sales alignment improve pipeline quality?", "acceptedAnswer": {"@type": "Answer", "text": "When marketing and sales teams use the same account and intent data, they can focus on the same high-value opportunities. Syncing these accounts to your CRM means faster follow-up and better teamwork. This leads to better leads and more closed deals."}},
                {"@type": "Question", "name": "How does Leadfeeder improve marketing and sales alignment?", "acceptedAnswer": {"@type": "Answer", "text": "Leadfeeder gives both your marketing and sales teams access to the same account-level intent data. This shared view helps everyone focus on the right opportunities and work together more effectively."}},
                {"@type": "Question", "name": "What is B2B sales intelligence software?", "acceptedAnswer": {"@type": "Answer", "text": "B2B sales intelligence software helps your sales team find, prioritize, and connect with the best business accounts using real-time data and buying signals."}},
                {"@type": "Question", "name": "How does Leadfeeder uncover anonymous traffic without forms?", "acceptedAnswer": {"@type": "Answer", "text": "Leadfeeder uses a small script that you add to your website, often through Google Tag Manager or WordPress. When someone visits, it captures their company’s IP address and matches it to a verified business profile using its own reverse DNS lookup database."}},
                {"@type": "Question", "name": "Can Leadfeeder provide the exact name and email of the individual browsing my website?", "acceptedAnswer": {"@type": "Answer", "text": "No, Leadfeeder does not give you the exact name or email of each visitor. To stay compliant with privacy laws, it only shows which company visited and the content they viewed. It does include a contact database and a Contact Hierarchy filter to help your sales team find likely decision-makers at that company."}},
                {"@type": "Question", "name": "How does the platform define and qualify a \"high-intent\" lead?", "acceptedAnswer": {"@type": "Answer", "text": "Leadfeeder tracks actions like file downloads, video views, time spent on important pages, and repeat visits. You can use Custom Feeds to filter and segment leads based on behavior, location, or industry, so you quickly find the most promising targets."}},
                {"@type": "Question", "name": "What are Leadfeeder AI Insights and AI Enrichment?", "acceptedAnswer": {"@type": "Answer", "text": "Leadfeeder’s built-in AI tools save you time on manual data work. AI Insights lets you use natural language prompts to review a company’s session history, such as asking for a summary of their activity on your product page. AI Enrichment scores incoming companies based on your ideal client profile, gives text summaries, and marks them as qualified or not."}},
                {"@type": "Question", "name": "Which CRMs feature native, deep data synchronization?", "acceptedAnswer": {"@type": "Answer", "text": "Leadfeeder offers deep, automated syncs with HubSpot, Salesforce, Pipedrive, and Microsoft Dynamics. Its Free Single-Record Sync lets your team push company details or contact info into your CRM pipeline without using up monthly enrichment credits."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Leadfeeder", "lead enrichment", "predictive lead scoring", "intent data", "lead capture", "B2B lead generation", "South Florida small business"],
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
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
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
        "Leadfeeder helps South Florida small businesses uncover which local companies visit their website and scores their buying intent, ensuring every qualified lead is captured and prioritized.";
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
