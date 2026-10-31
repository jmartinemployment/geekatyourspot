import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/lede-section";
import ChallengesSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/challenges-section";
import StatusQuoSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/status-quo-section";
import MechanicsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/mechanics-section";
import KeyFactorsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/key-factors-section";
import DecisionsSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/decisions-section";
import SequenceSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/sequence-section";
import DataIntegrationSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/data-integration-section";
import RolesSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/roles-section";
import RightFitSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/right-fit-section";
import PreparingSection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/preparing-section";
import PAASection from "@/components/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI SEO Content Generator";
const DESCRIPTION =
    "Intelligent Content Generation helps Miami-Dade, Broward, and West Palm Beach businesses automate content creation, repurposing, scheduling, and approvals.";
const CANONICAL = "/use-cases/marketing/content-creation-workflow/ai-seo-content-generator";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-19T16:52:26.6326271Z",
            "dateModified": "2026-10-19T16:52:26.6326271Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Intelligent Content Generation, AI content workflow, automated content creation, content repurposing, bulk scheduling, approval workflows, personalized email campaigns, South Florida AI services, small business automation, content marketing automation",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ai-content-marketing-platforms" },
            "mentions": [
                { "@type": "Thing", "name": "Anyword", "url": "https://www.anyword.com/" },
                { "@type": "Thing", "name": "Castmagic", "url": "https://www.castmagic.io/" },
                { "@type": "Thing", "name": "Copy.ai", "url": "https://www.copy.ai/" },
                { "@type": "Thing", "name": "Frase", "url": "https://www.frase.io/" },
                { "@type": "Thing", "name": "Hootsuite", "url": "https://www.hootsuite.com/" },
                { "@type": "Thing", "name": "ImagineArt", "url": "https://www.imagine.art/" },
                { "@type": "Thing", "name": "Jasper", "url": "https://www.jasper.ai/" },
                { "@type": "Thing", "name": "Koala", "url": "https://koala.sh/" },
                { "@type": "Thing", "name": "Rytr", "url": "https://rytr.me/" },
                { "@type": "Thing", "name": "Scalenut", "url": "https://www.scalenut.com/" },
                { "@type": "Thing", "name": "Writesonic", "url": "https://writesonic.com/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is an AI content-generation tool, and how can it help my small business?", "acceptedAnswer": {"@type": "Answer", "text": "An AI content-generation tool is software that uses artificial intelligence to draft material from your instructions and reference information. For a small business, it can help turn service details, expertise, and customer questions into website copy, social posts, emails, and articles. This reduces blank-page work but does not remove the need for human review."}},
                {"@type": "Question", "name": "Can AI create content if I do not already have blog posts, videos, or marketing materials?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can start with basic information about your services, customers, differentiators, and common questions. AI can help develop ideas, outlines, and first drafts from that input. Existing content is helpful but not required."}},
                {"@type": "Question", "name": "Do I need technical skills or marketing experience to use AI content tools?", "acceptedAnswer": {"@type": "Answer", "text": "You generally do not need programming skills for basic drafting. You do need to explain what you want, spot inaccurate or unsuitable output, and follow a review process. It is best to start with one repeatable task rather than trying to automate all your marketing at once."}},
                {"@type": "Question", "name": "How much do AI content-generation tools cost for a small business?", "acceptedAnswer": {"@type": "Answer", "text": "There is no single standard price. Free and paid options exist, and costs vary by features and usage. Compare the subscription plus setup, staff review time, extra seats, and any needed companion software, not just the monthly price shown. Always confirm current vendor pricing before buying."}},
                {"@type": "Question", "name": "Why should I pay for a dedicated AI content tool instead of using ChatGPT?", "acceptedAnswer": {"@type": "Answer", "text": "Pay only if the dedicated tool makes your recurring work much easier, such as with helpful templates, brand instructions, approvals, or integrations. Compare both options on the same type of content and look at editing effort and usable output, not just features."}},
                {"@type": "Question", "name": "What usage limits, credits, or extra charges should I check before subscribing?", "acceptedAnswer": {"@type": "Answer", "text": "Ask how the vendor measures usage, if limits reset, what happens if you go over, and if adding users or media costs extra. Confirm which features are included in the plan you are quoted. Use this as a checklist because terms vary by product."}},
                {"@type": "Question", "name": "Will AI-generated content sound robotic or generic?", "acceptedAnswer": {"@type": "Answer", "text": "It can, especially if instructions are vague. Share writing samples, preferred language, customer concerns, and a clear tone. Edit out generic statements. AI can follow a brand voice, but you still need to review for consistency."}},
                {"@type": "Question", "name": "Can AI create English and Spanish content that sounds natural to my customers?", "acceptedAnswer": {"@type": "Answer", "text": "Some tools can help with multilingual drafting, but the quality varies. Test the tool with real examples and have a fluent reviewer check meaning, tone, terminology, and offers before you publish. Treat this as a test of quality, not just a checklist feature."}},
                {"@type": "Question", "name": "Can AI write promotional emails, newsletters, and special offers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. AI can draft subject lines, lay out the email, write promotional copy, and suggest calls to action. The business provides the offer details and terms. AI should not set prices, deadlines, or rules for eligibility, those decisions stay with you."}},
                {"@type": "Question", "name": "Can AI help me create marketing content from scratch, rather than only repurpose existing content?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. AI can help brainstorm topics, build outlines, and draft new content using your business details. Repurposing old content is a separate feature and not needed to start using AI for fresh marketing materials."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Intelligent Content Generation", "AI content workflow", "automated content creation", "content repurposing", "bulk scheduling", "approval workflows", "personalized email campaigns", "South Florida AI services", "small business automation", "content marketing automation"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Save hours each week and cut content costs with AI-driven content creation that fits your business goals. We help you design, build, and deploy intelligent workflows using proven tools, so your team gets more done without extra hires.";
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
