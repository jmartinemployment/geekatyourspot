import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Wrench";
const PAGE_TITLE = "Wrench for Measured Lead Generation";
const DESCRIPTION =
    "Measured Lead Generation with Wrench lowers cost-per-lead for Miami-Dade, Broward and West Palm Beach small businesses. Start optimizing your pipeline today.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Wrench, measured lead generation, AI lead generation automation, ad spend optimization, cost per lead, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-25T11:32:40.1839700Z",
            "dateModified": "2026-10-25T11:32:40.1839700Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://wrench.ai/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What kinds of creative can Wrench produce?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench uses its Serendipity model to create campaign and paid media creative. It can also adapt and extend its work into different media formats and source channels. This means you get creative that fits your campaign needs, whether you use images, video, or other formats."}},
                {"@type": "Question", "name": "Can Wrench create content in Spanish or other languages?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Wrench can both take in and create content in multiple languages. If you need local touches, they work with partners who handle last-mile localization, so your message lands right with your audience."}},
                {"@type": "Question", "name": "Who is Wrench designed for?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench is built for paid media teams ready to use AI and advanced analytics. While it works well for enterprise needs, small businesses in Miami-Dade, Broward, and West Palm Beach looking to step up their lead generation can benefit if they meet the spend level."}},
                {"@type": "Question", "name": "How does Wrench compare to Darwin?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench does not depend on new campaigns. It can use your existing creative and past campaign data to get started. Wrench adapts quickly to different conversion goals, like optimizing for clicks or mid-funnel actions. Darwin is less flexible. Wrench can generate example creative, show how it would improve your campaigns, and suggest new campaign ideas. Wrench connects with more channels and can add new ones, such as linking Salesforce with Meta. Wrench insights work with lists, custom audiences, and can make 1:1 messaging recommendations. Wrench gives separate recommendations for creative, brand, and analytics teams, so each group gets what they need. You can share your settings across PPC, CRM, lead scoring, and sales teams. Wrench can test and validate your custom requests, including brand benefits, programs, and features."}},
                {"@type": "Question", "name": "How much does Wrench.ai cost?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai publishes volume-based pricing for segmentation, insights, data appending, and predictive analytics. The vendor states costs average between $.03 and $.06 per output, but the unit is unclear due to mixed wording. Confirm the exact per-output price, what counts as an output, and any minimum or implementation fees with Wrench.ai before budgeting. The homepage and FAQ do not confirm a full subscription price, minimum spend, implementation timeline, or pilot terms."}},
                {"@type": "Question", "name": "What if I want Wrench.ai to ingest data from a source not listed in its API list?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai can ingest data using CSV files, S3, standard APIs, and custom API configurations. Supported methods go beyond just the sources in its published API catalog."}},
                {"@type": "Question", "name": "Do I have to upload my entire CRM database?", "acceptedAnswer": {"@type": "Answer", "text": "No. Wrench.ai lets users choose which data to enrich and process, and how often to update insights. You control the scope and frequency."}},
                {"@type": "Question", "name": "Can I run a proof of concept or pilot program to validate implementation and business impact?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Wrench.ai confirms that pilot programs or proofs of concept are available. Contact their sales representative for details, as the FAQ does not specify pricing, duration, or scope."}},
                {"@type": "Question", "name": "What does Wrench.ai do?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai offers AI-powered marketing and sales personalization. Its features include customer segmentation, AI personas, B2B account insights, customer-data enrichment, go-to-market recommendations, and AI agents that use business data."}},
                {"@type": "Question", "name": "Who is Wrench.ai designed for?", "acceptedAnswer": {"@type": "Answer", "text": "Marketing teams wanting personalized, data-driven campaigns. Sales teams focused on high-potential leads. Business leaders using AI for daily decisions. Enterprise organizations aiming to streamline data use and improve results."}},
                {"@type": "Question", "name": "Does Wrench.ai integrate with HubSpot or Salesforce?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Wrench.ai lists HubSpot and Salesforce as supported integrations, along with other CRM and marketing tools to unify your data."}},
                {"@type": "Question", "name": "What other types of systems can it work with?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai advertises more than 110 data integrations, covering CRMs, ecommerce, behavioral analytics, web traffic, databases, and custom enterprise systems. This is based on vendor claims; a full list is not published on the homepage."}},
                {"@type": "Question", "name": "Can Wrench.ai enrich existing customer data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Wrench.ai combines your business’s customer information with public third-party data. This helps build more complete customer profiles and sharper audience segments. The platform also cleans, maps, blends, and enriches your data."}},
                {"@type": "Question", "name": "Can it generate personas, lead scores, and personalized campaign content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Wrench.ai lets users create lead scores, personas, and personalized content. These tools help you run targeted, data-driven marketing campaigns."}},
                {"@type": "Question", "name": "What do its AI agents do?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai offers prebuilt specialist agents that analyze your connected data, give insights, and answer complex questions. The platform highlights uses like CRM personalization, creative ideas for specific audiences, campaign-performance prediction, and workflow optimization."}},
                {"@type": "Question", "name": "What does the implementation workflow look like?", "acceptedAnswer": {"@type": "Answer", "text": "Connect your data sources, such as CRM and marketing tools. Provide business context, including company details and goals. Use specialist AI agents to analyze your data and answer questions. Generate and test campaigns using personalized content, lead scores, and personas. Monitor results and KPIs, then refine using live data and feedback."}},
                {"@type": "Question", "name": "How does Wrench.ai use information about my business?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai asks for your company settings and goals. This business context helps the platform tailor its outputs to your organization’s needs."}},
                {"@type": "Question", "name": "What metrics does Wrench.ai suggest tracking?", "acceptedAnswer": {"@type": "Answer", "text": "Conversion rate: the percentage of users who complete your desired actions. Customer engagement: measures like click-through rates and time spent on your site. Return on investment: revenue generated compared to your campaign costs."}},
                {"@type": "Question", "name": "Where can I find more detailed FAQs and support information?", "acceptedAnswer": {"@type": "Answer", "text": "Wrench.ai provides a FAQ and Customer Support Desk at launch.wrench.ai. There you’ll find resources on account setup, configuration, Salesforce onboarding, personas, business context, security, enrichment controls, and creative scoring. The support index shows which topics are covered, but does not give all the answers directly."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Wrench", "measured lead generation", "AI lead generation automation", "ad spend optimization", "cost per lead", "South Florida small business"],
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
        "Wrench streamlines lead generation for South Florida small businesses by automating ad spend management and creative refresh cycles, delivering consistent qualified leads.";
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
