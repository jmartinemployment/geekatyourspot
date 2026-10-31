import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "ImagineArt";
const PAGE_TITLE = "ImagineArt for Intelligent Content Generation";
const DESCRIPTION =
    "Intelligent Content Generation with Imagine empowers small businesses in Miami-Dade, Broward, and West Palm Beach to create branded content quickly and easily.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "ImagineArt, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.imagine.art/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Can I use image and video tools with one account?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. With a single ImagineArt account, you get access to image, video, and audio tools. All generations use credits from your plan, making it simple to manage for your team."}},
                {"@type": "Question", "name": "Can I use generated content commercially?", "acceptedAnswer": {"@type": "Answer", "text": "Commercial rights depend on your plan and which AI model you use. Always check your subscription details and the terms before using generated work for clients or paid campaigns."}},
                {"@type": "Question", "name": "How do AI tools fit into a marketing workflow?", "acceptedAnswer": {"@type": "Answer", "text": "AI tools help you create more content, faster. Use them to generate ad versions, social media visuals, and short videos. Test what works and keep the best performers. Always review assets before publishing to make sure they meet your quality and brand standards."}},
                {"@type": "Question", "name": "Is ImagineArt an AI art generator?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt uses over 50 AI models to turn text prompts and reference images into images, video, and audio. Teams also get brand controls, editing tools, and workflows to help produce finished assets at scale."}},
                {"@type": "Question", "name": "Can my team work together in real time?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The infinite canvas is shared, so your whole team can see the same file. You get live cursors, comments, and version history, making reviews easy and keeping everyone on the same page."}},
                {"@type": "Question", "name": "Do you train on my content?", "acceptedAnswer": {"@type": "Answer", "text": "No. Your assets, prompts, and outputs stay private to your workspace. ImagineArt does not use customer content to train its models."}},
                {"@type": "Question", "name": "Who owns what I make?", "acceptedAnswer": {"@type": "Answer", "text": "You do. You keep full commercial rights to everything you generate with ImagineArt."}},
                {"@type": "Question", "name": "Does ImagineArt support native audio generation?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt's AI video generator supports native audio generation and synchronization. You can record your own voiceovers, songs, and music in LipSync Studio and sync them to your video, all without third-party tools."}},
                {"@type": "Question", "name": "How do I make a video from text?", "acceptedAnswer": {"@type": "Answer", "text": "Open the ImagineArt AI text-to-video generator and type your prompt. Be clear about the subject, action, scene, camera setting, lighting, and mood. The AI will create a finished video from your description, no design skills needed."}},
                {"@type": "Question", "name": "Do I need to sign up to try it?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you need a free account to generate videos. Signing up takes less than a minute and gives you free daily credits. No credit card is needed to start."}},
                {"@type": "Question", "name": "Can I edit videos on ImagineArt after generating them?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt lets you generate and edit videos on the same platform. Use the built-in video editor to trim, adjust, and refine your clips before publishing. There are also dedicated apps for deeper editing of scenes and visual elements."}},
                {"@type": "Question", "name": "Can I make AI videos for YouTube or social media?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Videos made with ImagineArt can be used commercially on YouTube, TikTok, Instagram, and other platforms under ImagineArt's standard commercial terms, which come with all paid plans. You can export up to 4K resolution in formats ready for upload."}},
                {"@type": "Question", "name": "Can I use AI-generated videos for commercial purposes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Videos generated on paid ImagineArt plans are cleared for commercial use, including marketing, social ads, product promos, client work, and monetized content on YouTube, TikTok, and Instagram. Check your plan's license terms for full details."}},
                {"@type": "Question", "name": "What is ImagineArt, and what content can it create?", "acceptedAnswer": {"@type": "Answer", "text": "ImagineArt is an AI creative platform that generates and edits images, videos, voiceovers, music, and other audio. It also has tools for product advertising, fashion imagery, avatars, and film production. Workflows let you connect multiple creation steps. It is not just for digital artwork."}},
                {"@type": "Question", "name": "How can a small business use ImagineArt for content creation?", "acceptedAnswer": {"@type": "Answer", "text": "ImagineArt supports product images, promotional graphics, short videos, product-ad creative, and narrated content. For example, a boutique can create clothing campaign concepts, a retailer can develop product-promotion assets, and a service business can make visuals for an explainer video. These are ways to use the platform, but not every asset will be accurate or ready to publish."}},
                {"@type": "Question", "name": "Is ImagineArt free to use?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt has a free plan with 100 daily credits for accounts without a paid subscription. Credits reset daily. Premium models marked “Pro” need a paid subscription, so free access does not include every generation option."}},
                {"@type": "Question", "name": "How much does ImagineArt cost for business content creation?", "acceptedAnswer": {"@type": "Answer", "text": "The help center lists these monthly subscription prices: Basic ($13, 3,000 credits, 1 seat), Standard ($30, 8,000 credits, 3 seats), Ultimate ($50, 16,000 credits, 6 seats), and Creator ($250, 100,000 credits, 20 seats). Quarterly and annual billing have different effective monthly prices. Check the billing term, included models, and current checkout price before choosing a plan."}},
                {"@type": "Question", "name": "Can I use ImagineArt content in business marketing or paid ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Paid subscribers may use generated outputs commercially, following ImagineArt’s terms. Video documentation includes marketing campaigns, social media ads, product promotions, client work, and monetized content. Free or trial outputs may be limited to personal, noncommercial use unless ImagineArt says otherwise. A commercial license does not allow infringement of copyright, trademark, or other protected rights. These restrictions still apply for paid users."}},
                {"@type": "Question", "name": "Can an agency or consultant create content for paying clients?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt allows commercial use for client work under paid plans. Its guidance describes a license for client and campaign work that continues after cancellation. Always check the terms for your plan and assets before promising licensing rights to a client."}},
                {"@type": "Question", "name": "Can I upload existing product photos instead of starting from a text prompt?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt supports reference images, image-to-video generation, and image-editing tools. You can use an existing product image as a reference, create different visual treatments, or animate an image into a short clip. The Fashion Studio accepts garment uploads for on-model imagery and campaign visuals."}},
                {"@type": "Question", "name": "Can ImagineArt keep my branding consistent?", "acceptedAnswer": {"@type": "Answer", "text": "ImagineArt offers brand controls for colors, fonts, logos, products, and visual identity. It supports references to keep product, character, or presenter consistency across outputs. These features help guide consistency, but they do not guarantee every generated detail will be correct."}},
                {"@type": "Question", "name": "Can I edit an image without generating it again from scratch?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt’s inpainting tool lets users remove, replace, or refine a selected part of an image while leaving the rest untouched. The platform also offers tools for relighting, changing camera angles, and reframing or extending video."}},
                {"@type": "Question", "name": "Can ImagineArt make social media videos from photos or text?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. ImagineArt’s video tools support both text-to-video and image-to-video generation. Paid plans allow commercial use for promotional content on platforms like Instagram, TikTok, and YouTube. The available resolution, models, and generation limits depend on the selected plan and tool."}},
                {"@type": "Question", "name": "Does ImagineArt add watermarks to generated content?", "acceptedAnswer": {"@type": "Answer", "text": "Downloaded videos do not carry a watermark on any plan, including free access. However, watermark-free does not mean commercially licensed. Free-plan video downloads are for noncommercial use only."}},
                {"@type": "Question", "name": "How do credits work, and how much content can I generate?", "acceptedAnswer": {"@type": "Answer", "text": "Credits measure usage across ImagineArt’s generation and editing tools. Each generation or edit deducts credits, and the amount used depends on the operation and its settings. Paid plans provide a monthly credit allocation that refreshes on the billing-cycle date."}},
                {"@type": "Question", "name": "Can ImagineArt automate a repeatable content-creation process?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The Workflows feature uses a node-based canvas to chain models, tools, and connectors into a production pipeline. Workflows can run on a schedule, with connectors bringing assets in and publishing results out. For a small-business content service, a typical workflow could include supplying an approved product reference and creative brief, generating alternative image concepts, applying editing steps, creating a short video variation, and routing assets for human review. This is an example workflow design, not a guarantee of included features. Plan access and connector availability should be checked before implementation."}},
                {"@type": "Question", "name": "Can my staff or clients collaborate on content?", "acceptedAnswer": {"@type": "Answer", "text": "ImagineArt’s shared infinite canvas supports real-time collaboration with live cursors, comments, and versions. Published plans include different numbers of team seats. This setup can support reviewing content in the same workspace, as long as the chosen plan includes enough access for the people involved."}},
                {"@type": "Question", "name": "Does ImagineArt use my uploaded content to train AI models?", "acceptedAnswer": {"@type": "Answer", "text": "ImagineArt’s current homepage FAQ states it does not use customer assets, prompts, or outputs to train models and describes them as private to the workspace. For confidential client material, review the applicable privacy policy and agreement rather than relying only on the marketing FAQ."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["ImagineArt", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
        authors: [{ name: 'Jeff Martin' }],
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
        "Imagine empowers local small teams to transform everyday photos into polished, branded content for all channels, eliminating the content creation bottleneck.";
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
