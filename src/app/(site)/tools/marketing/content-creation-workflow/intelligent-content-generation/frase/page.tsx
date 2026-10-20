import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/frase/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Frase";
const DESCRIPTION =
    "Intelligent Content Generation with Frase helps small businesses in Miami-Dade, Broward, and West Palm Beach automate and streamline their digital marketing.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/frase";
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
            "keywords": "Frase, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Can I write in languages other than English?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can set the target language and country for each article. Frase adapts the vocabulary, local phrases, and search engine framing for that region. It is not just a translation, it creates content that fits your audience."}},
                {"@type": "Question", "name": "Does Frase publish to my CMS?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase can publish directly to WordPress, Webflow, Sanity, Wix, or FraseCMS. It also detects internal links from your content, adds FAQ and How-To schema, and can include a hero image with your post. This helps you get content live faster and with fewer manual steps."}},
                {"@type": "Question", "name": "What happens to the article after it's published?", "acceptedAnswer": {"@type": "Answer", "text": "Frase keeps monitoring your live page. Content Guard tracks your rankings and traffic using Google Search Console. If your page starts to slip, Frase suggests a fix and waits for your approval before making any updates in your CMS. AI Visibility also checks where AI engines are citing your pages and notifies you of changes. You always stay in control of what gets changed or republished."}},
                {"@type": "Question", "name": "What is Frase, and how does it help with content creation?", "acceptedAnswer": {"@type": "Answer", "text": "Frase is an AI-powered content and SEO platform. It connects topic research, content briefs, drafting, optimization, publishing, and ongoing monitoring. Instead of starting from scratch, it uses competing search results and your brand information to help develop content."}},
                {"@type": "Question", "name": "Can Frase write complete articles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase can turn research and a content brief into a draft in your brand voice. You can write the content yourself, collaborate with the tool, or let it generate the draft for your review."}},
                {"@type": "Question", "name": "How does Frase research a topic before writing?", "acceptedAnswer": {"@type": "Answer", "text": "Frase examines pages already ranking for your topic, analyzes their structure, gathers related questions and keywords, and identifies gaps competitors leave unanswered. It combines those findings into a structured brief."}},
                {"@type": "Question", "name": "Does Frase find “People Also Ask” questions?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase’s question-research tools gather questions from Google’s People Also Ask, Reddit, Quora, and answer engines. It groups questions by intent to help you identify what readers want to understand, compare, or purchase."}},
                {"@type": "Question", "name": "Can Frase help create FAQ content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can use Frase’s question research to identify relevant questions and incorporate them into a brief or draft. The research provides question opportunities; answers should still be checked against your actual products, services, and supporting sources before publication."}},
                {"@type": "Question", "name": "What does a Frase content brief include?", "acceptedAnswer": {"@type": "Answer", "text": "Frase describes its briefs as structured outlines containing headings, sections, keywords, sources, and relevant questions. The brief brings together search-result analysis and content gaps so a writer, or Frase’s AI writer, has a clear starting point."}},
                {"@type": "Question", "name": "Can Frase match my business’s brand voice?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase can build a brand profile from your existing website content, or you can configure it in the Brand Hub. Settings include tone, content rules, preferred terminology, and terms you do not want used. Drafts are written against that profile."}},
                {"@type": "Question", "name": "How does Frase optimize content for SEO?", "acceptedAnswer": {"@type": "Answer", "text": "Frase analyzes competing search results and scores your draft for search optimization. Its research identifies relevant topics, questions, keywords, and structural opportunities, while the editor highlights areas to improve before publication."}},
                {"@type": "Question", "name": "Does Frase also optimize content for AI search?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase scores content for both traditional SEO and generative engine optimization, or GEO, which means it helps optimize your content for AI search. It also tracks AI visibility across platforms like ChatGPT, Perplexity, Claude, Gemini, and Google AI. These features do not guarantee that an AI engine will cite your page."}},
                {"@type": "Question", "name": "Can Frase improve existing content instead of writing new articles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase reviews your current pages, finds content gaps, and drafts suggested updates. Its Content Guard feature monitors published pages for drops in Google rankings and traffic, then prepares recommended fixes for you to review."}},
                {"@type": "Question", "name": "Does Frase publish content directly to my website?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase integrates with WordPress, Webflow, Sanity, and Wix for direct publishing. It also offers FraseCMS as another option. You do not need to move your website to Frase to use these integrations."}},
                {"@type": "Question", "name": "Can I review content before Frase publishes it?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase has a review and approval process. You can set permissions for automatic publishing or limit it to low-risk fixes, depending on your preferences."}},
                {"@type": "Question", "name": "Can Frase use website visitors’ questions to generate content ideas?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Frase Answers is a widget that uses your published content to answer visitor questions and links back to your site. It collects and groups visitor questions, helping you spot content gaps and turn unanswered questions into new briefs."}},
                {"@type": "Question", "name": "Does Frase support content creation in multiple languages?", "acceptedAnswer": {"@type": "Answer", "text": "Frase supports native writing in over 70 languages, not just translating from English. The full list of supported languages is not shown on the homepage, so check that your language is available before starting."}},
                {"@type": "Question", "name": "How much does Frase cost, and is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Frase lists entry pricing at $49 per month, or $39 per month with annual billing, for one site and one user. The Professional plan is $129 monthly, or $103 per month with annual billing. A seven-day trial is available and does not require a credit card. Review plan limits and current pricing before you buy."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Frase", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Frase empowers local small businesses to overcome the blank page bottleneck by automating content creation, repurposing, and scheduling. Maintain a consistent online presence while saving time and budget.";
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
