import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Castmagic";
const DESCRIPTION =
    "Intelligent Content Generation with Castmagic helps South Florida small businesses turn recordings into valuable, ready-to-use marketing content efficiently.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic";
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
            "keywords": "Castmagic, intelligent content generation, AI content generation, AI writing tools, content creation workflow, South Florida small business",
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
                {"@type": "Question", "name": "What languages are supported?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic transcribes in over 60 languages. It automatically detects the language, so you can use it with most major languages, not just English."}},
                {"@type": "Question", "name": "Do you only transcribe audio?", "acceptedAnswer": {"@type": "Answer", "text": "No. Castmagic works with both audio and video recordings. You can upload a file, use a YouTube or Vimeo link, connect RSS feeds, Reels, Zapier, Zoom, Drive, and more. Once you have your transcript, you can use prompts or Magic Chat to create other written content tailored to your needs."}},
                {"@type": "Question", "name": "How accurate is AI note taking?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic uses AI to generate precise transcriptions. Your audio is converted to text with high accuracy, so you get reliable notes."}},
                {"@type": "Question", "name": "How accurate is AI transcription compared to human transcribers?", "acceptedAnswer": {"@type": "Answer", "text": "With clear audio, Castmagic delivers 90-99% accuracy. This matches the level of human transcribers but is much faster and more affordable."}},
                {"@type": "Question", "name": "Do AI transcription services remove filler words automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic automatically removes filler words like \"um,\" \"uh,\" and repeated phrases. You get clean text that is ready to use without extra editing."}},
                {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can try Castmagic for free with a few episodes to see how it works before you commit."}},
                {"@type": "Question", "name": "How much does podcast transcription cost?", "acceptedAnswer": {"@type": "Answer", "text": "Manual transcription can cost $60 to $180 per hour-long episode. Castmagic is priced at $19 for 300 minutes of transcription, and you also get automatic show notes, social posts, newsletters, and more from the same transcript. This makes it much more cost-effective than traditional services."}},
                {"@type": "Question", "name": "What's the fastest and easiest way to get a podcast transcript?", "acceptedAnswer": {"@type": "Answer", "text": "With Castmagic, you can transcribe any podcast in under 60 seconds. Just upload your file or paste a URL. You get a 98% accurate transcript with automatic speaker detection and timestamps, all in one click."}},
                {"@type": "Question", "name": "Why should I add a transcript to my podcast?", "acceptedAnswer": {"@type": "Answer", "text": "Transcripts make your podcast searchable on Google, help deaf or hard-of-hearing listeners access your show, and let you easily turn episodes into blog posts or social media content. This expands your reach beyond just podcast platforms."}},
                {"@type": "Question", "name": "How do I turn a StreamYard recording into content?", "acceptedAnswer": {"@type": "Answer", "text": "Export your StreamYard recording and drag it into Castmagic. It transcribes in minutes. Then pick a content preset or set your own prompt, and Castmagic drafts content in your voice. Edit, add your links, and publish. The whole process takes minutes, not hours."}},
                {"@type": "Question", "name": "Will the content sound like me?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic drafts content using your actual words. You can set custom prompts for your tone, structure, and rules. Save your prompt for future use and every episode stays on-brand. You remain the editor, and Castmagic helps you skip the blank page."}},
                {"@type": "Question", "name": "Can I repurpose my whole back-catalog at once?", "acceptedAnswer": {"@type": "Answer", "text": "For a single recording, use the Castmagic app. If you want to work with your entire library, like making a lead magnet, book, or course, connect Castmagic to Claude with the MCP connector. Claude can search and build from every recording you have."}},
                {"@type": "Question", "name": "How accurate is the transcription it builds from?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic uses advanced speech models with support for over 60 languages, automatic language detection, and speaker labeling. Clear audio usually transcribes at over 95% accuracy. You can also use a custom vocabulary list to keep names, products, and jargon spelled correctly."}},
                {"@type": "Question", "name": "Where do I get the file from StreamYard?", "acceptedAnswer": {"@type": "Answer", "text": "Download your recording from the StreamYard dashboard after your broadcast. Then drag it into Castmagic. Local recordings work best, but any clean export will transcribe the same way."}},
                {"@type": "Question", "name": "Can it handle a long webinar or multi-guest live show?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic can handle multi-hour streams and panels. It applies speaker labels so each host and guest is separated, and timestamps make it easy to find specific segments."}},
                {"@type": "Question", "name": "What is Castmagic?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic is an AI content-repurposing platform that turns audio and video recordings into transcripts, blog drafts, newsletters, social posts, show notes, and other content assets. Its main use is to help businesses reuse ideas from existing recordings in many different formats."}},
                {"@type": "Question", "name": "Who is Castmagic for?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic is for podcasters, video creators, marketing agencies, internal content teams, and businesses that regularly produce recorded material. Its official FAQ highlights podcast hosts, video streamers, and long-form content creators who want to get more value from their recordings."}},
                {"@type": "Question", "name": "How does Castmagic work?", "acceptedAnswer": {"@type": "Answer", "text": "You upload a recording, paste a supported media link, or connect a source. Castmagic transcribes the material and uses the transcript to generate content. You can set up recurring prompts so each new recording automatically produces a consistent set of drafts, like show notes, newsletters, and social posts."}},
                {"@type": "Question", "name": "What kinds of content can Castmagic create?", "acceptedAnswer": {"@type": "Answer", "text": "Blog articles, newsletters, and show notes. LinkedIn posts, X threads, and Instagram captions. YouTube descriptions, chapters, and scripts. Quotes, highlights, and how-to guides. Captioned video clips, image carousels, and audiograms. Meeting recaps, action items, and follow-up emails."}},
                {"@type": "Question", "name": "Can Castmagic turn a podcast or video into a blog post?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic can draft a long-form article from a recording. It also supports long-form pieces developed across several recordings, so you can use more than one interview or episode."}},
                {"@type": "Question", "name": "Can Castmagic create social media posts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It generates platform-oriented drafts, including LinkedIn posts, X threads, Instagram captions, and short-form video scripts. You can use brand voice settings and custom prompts to shape the tone and structure of those drafts."}},
                {"@type": "Question", "name": "Can Castmagic create short video clips?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic’s Studio can create captioned clips in vertical, square, and landscape formats: 9:16, 1:1, and 16:9. It supports multi-clip timelines and captions that highlight the active spoken word."}},
                {"@type": "Question", "name": "Can Castmagic create carousels and audiograms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic can draft carousel slides and captions from a recording, with styling options and numbered-slide exports. For audio-only material, it can create audiograms, waveform videos designed for social sharing."}},
                {"@type": "Question", "name": "Can I make Castmagic content sound like my brand?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Castmagic lets you set brand voice options, edit templates, and use custom prompts. You can control the tone, vocabulary, length, and structure of your content instead of using only the default settings."}},
                {"@type": "Question", "name": "Is Castmagic free, and how does pricing work?", "acceptedAnswer": {"@type": "Answer", "text": "Castmagic offers a free trial. Paid plans are usage-based, so your cost depends on how much transcription and content you process. The vendor publishes its pricing, but the official FAQ does not list exact subscription prices or trial limits."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Castmagic", "intelligent content generation", "AI content generation", "AI writing tools", "content creation workflow", "South Florida small business"],
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
        "Castmagic helps South Florida small businesses unlock the potential of their existing recordings by automating the creation of publish-ready content, streamlining workflows and reducing reliance on outside agencies.";
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
