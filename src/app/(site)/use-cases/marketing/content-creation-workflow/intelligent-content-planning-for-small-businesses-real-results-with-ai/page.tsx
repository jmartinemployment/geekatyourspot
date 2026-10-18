import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/roles-section";
import RightFitSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/preparing-section";
import PAASection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Intelligent Content Planning";
const DESCRIPTION =
    "Intelligent Content Planning streamlines content creation for small businesses, saving time and reducing errors. See how local AI implementation works.";
const CANONICAL = "/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const TOOLS_BASE = `https://geekatyourspot.com/tools/marketing/content-creation-workflow/intelligent-content-planning`;

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
            "datePublished": "2026-10-18T13:01:40.3179029Z",
            "dateModified": "2026-10-18T13:01:40.3179029Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Intelligent Content Planning, AI content workflow, automated content generation, content repurposing, bulk scheduling, approval workflows, personalized email campaigns, small business AI, West Palm Beach AI consulting, Miami-Dade content automation",
            "@id": `${PAGE_URL}#article`,
            "isPartOf": { "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow#article" },
            "hasPart": { "@id": `${PAGE_URL}#faq` },
            "mentions": [
                { "@id": `${TOOLS_BASE}/hootsuite#software` },
                { "@id": `${TOOLS_BASE}/hyperwriteai#software` },
                { "@id": `${TOOLS_BASE}/scalenut#software` },
                { "@id": `${TOOLS_BASE}/semrush#software` },
                { "@id": `${TOOLS_BASE}/marketmuse#software` }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How do AI topic planning tools actually source their ideas, and will they just spit out the same generic topics our local competitors are using?", "acceptedAnswer": {"@type": "Answer", "text": "Top AI topic planning tools do not make up topics out of thin air. They pull from live clickstream data, search engine autocomplete, and what is actually showing up on search results pages right now. To avoid the same generic topics as your competition, the software should be set up with your unique brand voice and local details. For example, by adding South Florida-specific terms or regulations, the AI finds niche topics and long-tail questions that your competitors are missing."}},
                {"@type": "Question", "name": "Will relying on AI-generated content plans and topics negatively impact our rankings on search engines or AI search summaries?", "acceptedAnswer": {"@type": "Answer", "text": "No. Search engines penalize low-quality spam, not AI-assisted research. Using AI to find out what real people are asking helps you build stronger, more complete pages. This approach improves your content quality, which boosts your chances of being featured in both search results and AI-generated answers."}},
                {"@type": "Question", "name": "Can these tools handle multi-channel ideation, or are they strictly limited to writing text-based blog posts?", "acceptedAnswer": {"@type": "Answer", "text": "The data that powers these AI tools is not limited to blogs. A single cluster of high-intent questions can be used for blog posts, video scripts, email campaigns, or even educational social media slides. The same content plan can guide your team across any channel where your customers are active."}},
                {"@type": "Question", "name": "Our marketing coordinator is great at social media and design, but has no training in data analytics. Will they be able to manage an AI topic clustering platform?", "acceptedAnswer": {"@type": "Answer", "text": "Modern AI planning tools handle the complex data work for you. Your team does not need to learn analytics to use them. The software gives you clear visuals and ready-to-use content briefs. Your coordinator’s job becomes curating and editing topics to match your goals and local audience. Training takes less than two hours."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Intelligent Content Planning", "AI content workflow", "automated content generation", "content repurposing", "bulk scheduling", "approval workflows", "personalized email campaigns", "small business AI", "West Palm Beach AI consulting", "Miami-Dade content automation"],
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
        "Stop wasting hours on manual content tasks. Intelligent Content Planning helps your team create, schedule, and approve content faster, with fewer errors and less stress.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <KeyFactorsSection />
                <DecisionsSection />
                <SequenceSection />
                <DataIntegrationSection />
                <RolesSection />
                <RightFitSection />
                <PreparingSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
