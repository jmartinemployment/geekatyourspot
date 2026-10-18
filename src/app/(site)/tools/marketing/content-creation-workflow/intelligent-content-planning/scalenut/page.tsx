import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Scalenut";
const DESCRIPTION =
    "Intelligent Content Planning with Scalenut helps small businesses in Miami-Dade, Broward and West Palm Beach get their content found and cited by AI and search.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut";
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
            "keywords": "Scalenut, intelligent content planning, AI content planning, content calendar, content creation workflow, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does Scalenut help a business discover and plan new content topics?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut uses automated Topic Discovery to map out entire niches at once. It builds Topic Clusters by grouping related keywords, so small businesses can quickly see and plan which areas to cover to build topical authority."}},
                {"@type": "Question", "name": "Does Scalenut’s topic planning look at competitor and search engine data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut’s Long-Form Assistant creates content outlines by pulling real-time competitor data from search engine results. This helps ensure your planning is based on what is already working in your market."}},
                {"@type": "Question", "name": "How is Scalenut's topic planning structured to target conversational AI engines?", "acceptedAnswer": {"@type": "Answer", "text": "Scalenut is built for Generative Engine Optimization. Its GEO Action Center formats topics and outlines so they are easy for large language models to read and cite. This helps your content get picked up not just by Google, but also by AI tools like ChatGPT, Perplexity, Gemini, Claude, and Grok."}},
                {"@type": "Question", "name": "Can a business track how effectively their planned topics are appearing in AI search results?", "acceptedAnswer": {"@type": "Answer", "text": "Cruise Mode is Scalenut’s automated content creation assistant. After planning, it uses competitor and search data to quickly create SEO blogs that are ready to perform in both traditional and AI-powered search results."}},
                {"@type": "Question", "name": "Does the software integrate with other parts of the content optimization process?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Scalenut is a full GEO stack. It covers topic discovery, GEO Scoring, Content Optimization, Internal Link Mapping, and offers an automated Backlinks Marketplace. This means small teams can manage their whole content strategy in one place."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Scalenut", "intelligent content planning", "AI content planning", "content calendar", "content creation workflow", "South Florida small business"],
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
        "Scalenut empowers South Florida small teams to move beyond manual content processes, using predictive automation to ensure your work is found and cited in AI and search results.";
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
