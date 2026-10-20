import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Writesonic";
const PAGE_TITLE = "Writesonic for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Writesonic automates local content for South Florida small businesses, saving time and driving digital growth.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic";
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
            "keywords": "Writesonic, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-writesonic",
                "name": TITLE,
                "url": "https://writesonic.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What is Writesonic used for?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic brings together AI content creation, search engine optimization, and AI-search visibility tools. It is designed to help small business teams research topics, create articles, update existing web pages, and track how their brand appears in AI-generated answers."}},
                {"@type": "Question", "name": "What types of content can Writesonic create?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic’s AI Article Writer focuses on long-form blog articles, listicles, comparison pieces, category guides, and thought-leadership content. The platform delivers outputs that include the article body, citations, FAQs, internal links, schema markup, and images."}},
                {"@type": "Question", "name": "How does Writesonic generate an article?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic follows a step-by-step process: audience research, search-result and competitor analysis, positioning, outlining, section-by-section writing, and automated editorial review. It can use your own documents, conduct web research, or combine both approaches to build the article."}},
                {"@type": "Question", "name": "Can Writesonic use my business documents?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s Article Writer accepts source material such as PDFs, DOCX files, URLs, brand briefs, product documentation, founder insights, and customer research. The platform gives priority to verified knowledge from your business, using web research to fill in any gaps."}},
                {"@type": "Question", "name": "Can Writesonic match my brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic supports brand and author voice profiles and checks for style-guide compliance during article generation. The number of writing styles you can use depends on your plan: one on Starter, five on Basic, ten on Growth, and custom options for Enterprise."}},
                {"@type": "Question", "name": "How long are Writesonic articles?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic’s Article Writer advertises long-form content between 3,000 and 8,000 words. This is the stated range, not a requirement for every article."}},
                {"@type": "Question", "name": "Does Writesonic research topics before writing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s Article Writer analyzes search results and competing pages, finds content gaps, and uses keyword and audience-demand research before drafting. It lists sources such as Ahrefs, Google Keyword Planner, and its own AI-conversation dataset."}},
                {"@type": "Question", "name": "Does Writesonic include sources and citations?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s Article Writer includes citations and checks them against first-party sources like official documentation, press releases, and primary research. This is based on the vendor’s description and is not an independent guarantee that every statement will be correct."}},
                {"@type": "Question", "name": "Can Writesonic generate FAQ sections?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s Article Writer includes FAQ sections based on People Also Ask data. It also provides Article, FAQPage, and Author schema markup as part of the output."}},
                {"@type": "Question", "name": "Can Writesonic optimize content for Google and AI search?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic promotes its Article Writer for both traditional SEO and visibility in AI-generated answers. Features include keyword research, internal linking, question-based headings, answer-first passages, comparison tables, and citations. These are advertised capabilities, not a guarantee that your article will rank or be cited by AI."}},
                {"@type": "Question", "name": "Can Writesonic improve existing website content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s platform can identify content gaps and offers workflows to refresh pages. Its content agent can rewrite pages and add FAQ blocks, comparison tables, and answer passages aimed at improving AI-search visibility."}},
                {"@type": "Question", "name": "Does Writesonic make content sound more natural?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic includes a “Humanizer” stage to reduce repetitive phrasing, filler, and other patterns linked to AI-written text. This describes its editing feature; it does not guarantee the output will be indistinguishable from human writing or pass any specific AI detector."}},
                {"@type": "Question", "name": "Does Writesonic create images for articles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic’s Article Writer advertises generated hero images and section images, along with alt text and captions, as part of the finished article package."}},
                {"@type": "Question", "name": "Can Writesonic publish directly to my website?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic advertises one-click article export to WordPress, Sanity, Contentful, Webflow, and Ghost. It also supports copying Markdown into your editorial workflow. Check that your publishing connection is included in your subscription before relying on it."}},
                {"@type": "Question", "name": "Can agencies manage content for multiple clients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Writesonic offers agency features such as per-client brand profiles, style-guide overrides, white-label reporting, and partner pricing. Workspace limits apply: current pricing lists one project on Starter and Basic, two on Growth, and custom project allowances on Enterprise."}},
                {"@type": "Question", "name": "Is Writesonic free to try?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic currently offers a seven-day free trial with no credit card required. Its Article Writer page invites you to generate a first long-form article during the trial. Check the signup flow for the exact usage allowance."}},
                {"@type": "Question", "name": "How much does Writesonic cost for content creation?", "acceptedAnswer": {"@type": "Answer", "text": "Writesonic lists its rates on the current pricing page. With annual billing, the Starter plan is $79 per month, Basic is $199 per month, and Growth is $399 per month. Enterprise plans are custom. These plans include bundled content, SEO, and AI-visibility features. The prices shown are monthly equivalents when billed annually, not confirmed month-to-month rates."}},
                {"@type": "Question", "name": "Can I purchase additional articles?", "acceptedAnswer": {"@type": "Answer", "text": "The pricing comparison shows a 20-article add-on for $100 per month under the Growth plan. Enterprise plans can arrange custom add-ons. There is no clear add-on option listed for Starter or Basic, so those should not be expected."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Writesonic", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
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
        "Writesonic streamlines content generation for South Florida small businesses, replacing manual writing with automated, high-quality local content solutions.";
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
