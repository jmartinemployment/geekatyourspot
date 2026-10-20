import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/koala/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Koala";
const PAGE_TITLE = "Koala for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Koala helps South Florida small businesses automate authentic content, boosting local online visibility and engagement.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/koala";
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
            "keywords": "Koala, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-koala",
                "name": TITLE,
                "url": "https://koala.sh/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is Koala AI, and what does KoalaWriter do?", "acceptedAnswer": {"@type": "Answer", "text": "Koala AI is a platform for content and SEO that brings together writing, research, images, internal linking, and publishing. KoalaWriter is its article-generation tool. It creates structured content using keyword research, search-result analysis, and details about your business."}},
                {"@type": "Question", "name": "What types of content can KoalaWriter create?", "acceptedAnswer": {"@type": "Answer", "text": "KoalaWriter can create blog articles, listicles, service pages, Amazon affiliate roundups, single-product reviews, and local business roundups. It also lets you rewrite existing content and supports multiple languages."}},
                {"@type": "Question", "name": "How does KoalaWriter create SEO-optimized articles?", "acceptedAnswer": {"@type": "Answer", "text": "KoalaWriter looks at the search engine results page for your chosen keyword. It finds important terms and entities used by top-ranking pages and adds them to your article. This helps with optimization, but it does not guarantee a certain ranking."}},
                {"@type": "Question", "name": "Can Koala AI help decide what content to publish next?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Brand DNA SEO agent uses your Google Search Console and Google Analytics data, along with keyword and competitor research, to suggest topics and spot content gaps. Koala’s workflow connects these steps: find opportunities, draft content, and publish."}},
                {"@type": "Question", "name": "Can KoalaWriter match my business’s brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Brand DNA builds a knowledge base from your website or Google Maps business listing. KoalaWriter can use your services, terms, credentials, brand voice, and other business details when drafting. The onboarding process includes reviewing and correcting this information."}},
                {"@type": "Question", "name": "Can I edit the outline before KoalaWriter writes an article?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The outline editor lets you add, remove, and rearrange H2 and H3 headings before the article is written. This gives you control over the structure instead of accepting the first outline as is."}},
                {"@type": "Question", "name": "Does KoalaWriter use current information and cite sources?", "acceptedAnswer": {"@type": "Answer", "text": "Koala’s real-time research features pull information from the web. The Deep Research feature gathers sources based on your topic and outline, and you can get citations when you ask for them. Deep Research is listed on the Professional and higher plans."}},
                {"@type": "Question", "name": "Is KoalaWriter content ready to publish without editing?", "acceptedAnswer": {"@type": "Answer", "text": "Koala calls its output “publish-ready,” but that does not mean it is always accurate or right for every business. The workflow includes reviewing your business knowledge base, editing drafts, and using polishing tools. Customer testimonials mention professional review before publishing."}},
                {"@type": "Question", "name": "Can KoalaWriter update or improve existing articles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Koala can automatically generate AI images and add relevant YouTube video embeds to articles. KoalaImages lets you use reference images, save visual styles, and generate images in bulk."}},
                {"@type": "Question", "name": "Can KoalaWriter generate images and add videos?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Koala can automatically generate AI images and add relevant YouTube video embeds to articles. KoalaImages supports using reference images, saving visual styles, and bulk image generation."}},
                {"@type": "Question", "name": "Does KoalaWriter automatically add internal links?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. KoalaWriter can index your site and add contextual internal links to new articles. KoalaLinks is a related tool for managing and adding internal links across your existing website content, including an Autopilot mode."}},
                {"@type": "Question", "name": "Can Koala publish directly to WordPress or another website platform?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Koala lists integrations with WordPress, Shopify, Webflow, and Ghost, as well as custom webhooks. You can publish articles as drafts for review or enable automatic publishing by brand, with formatting and images included."}},
                {"@type": "Question", "name": "Can I create multiple articles at once?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. KoalaWriter includes bulk content creation. Articles are placed in a queue shared with API and MCP requests. By default, they are written one at a time, but you can adjust concurrency settings to allow more articles to run at once. Queue length can affect how quickly articles are completed."}},
                {"@type": "Question", "name": "Can KoalaWriter create Amazon affiliate content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. KoalaWriter supports Amazon product roundups and single-product review articles using live Amazon product details and customer-review data. This means the tool uses current product and review information to draft content, but it does not mean the author personally tested the products."}},
                {"@type": "Question", "name": "Is Koala useful for local-business content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Koala offers features for local businesses, such as importing business information from Google Maps, creating service pages using service areas and credentials, and generating local places roundups. These features connect your content production with the business information stored in Brand DNA."}},
                {"@type": "Question", "name": "How is KoalaWriter different from using ChatGPT alone?", "acceptedAnswer": {"@type": "Answer", "text": "KoalaWriter packages article creation into a specialized workflow. It includes SERP analysis, brand context, outline editing, internal links, images, bulk generation, and CMS publishing. These are the workflow differences highlighted by Koala. The vendor’s claim that its writing is “superior” is not an independent quality assessment."}},
                {"@type": "Question", "name": "Is there a free trial, and how much do paid plans cost?", "acceptedAnswer": {"@type": "Answer", "text": "Koala gives new accounts 5,000 free words and 25 credits without needing a credit card. The current plans are Starter at $25 per month, Professional at $49 per month, and Boost at $99 per month. Higher-volume plans are available. Annual billing offers savings, so check your billing choice before you buy."}},
                {"@type": "Question", "name": "What is the difference between word allowances and platform credits?", "acceptedAnswer": {"@type": "Answer", "text": "Article generation uses a separate word allowance. Platform credits are shared across tools like KoalaChat, KoalaImages, KoalaLinks, KoalaMagnets, the Brand DNA agent, and MCP research. Some writing models use up the word allowance faster, so the length of your article and the number of words billed may not match exactly."}},
                {"@type": "Question", "name": "Do I own the content generated by KoalaWriter?", "acceptedAnswer": {"@type": "Answer", "text": "Koala’s pricing FAQ says you keep rights to your input, and Koala assigns you its rights to the AI-generated output. This is Koala’s contract position. It does not guarantee every output can be copyrighted or is free from third-party rights issues."}},
                {"@type": "Question", "name": "Can I automate Koala content creation through APIs, Zapier, or Make?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Koala offers API access and webhooks. Its pricing page lists webhook connections for Zapier and Make. Paid plans also include MCP access, so compatible AI assistants can use Koala’s research and writing tools. The API is for custom software, webhooks connect workflows, and MCP connects AI assistants."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Koala", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Koala empowers South Florida small teams to streamline content production, ensuring your unique brand and local strengths are reflected in every post.";
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
