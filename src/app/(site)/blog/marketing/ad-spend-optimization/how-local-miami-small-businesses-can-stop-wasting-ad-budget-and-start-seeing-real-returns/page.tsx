import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/lede-section";
import ChallengesSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/challenges-section";
import StatusQuoSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/status-quo-section";
import MechanicsSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/mechanics-section";
import FoundationSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/foundation-section";
import NumbersSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/numbers-section";
import RightFitSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/right-fit-section";
import FaqSection from "@/components/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "How Local Miami Small Businesses Can Stop Wasting Ad Budget and Start Seeing Real Returns";
const DESCRIPTION =
    "Ad Spend Optimization helps Miami small businesses cut wasted ad budget and boost ROI. Learn proven steps for better results and local support today.";
const CANONICAL = "/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BlogPosting",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Person", "name": "Jeff Martin" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Ad Spend Optimization, Miami small business advertising, wasted ad spend, local ad optimization, AI ad spend, Cometly, Triplewhale, Bir, Optmyzr, South Florida digital ads",
            "isPartOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" },
            "mentions": [
                { "@type": "Thing", "name": "Adzooma", "url": "https://www.adzooma.com/" },
                { "@type": "Thing", "name": "Bir", "url": "https://bir.ch/" },
                { "@type": "Thing", "name": "Cometly", "url": "https://www.cometly.com/" },
                { "@type": "Thing", "name": "LocaliQ", "url": "https://localiq.com/" },
                { "@type": "Thing", "name": "Optmyzr", "url": "https://www.optmyzr.com/" },
                { "@type": "Thing", "name": "Plai", "url": "https://www.plai.io/" },
                { "@type": "Thing", "name": "Triplewhale", "url": "https://www.triplewhale.com/" },
                { "@type": "Thing", "name": "Wask", "url": "https://www.wask.co/" },
                { "@type": "Thing", "name": "Performance Max", "url": "https://ads.google.com/home/campaigns/performance-max/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Will optimization reduce my advertising bill?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. Optimization may recommend reducing waste, keeping your budget steady, or even spending more on campaigns that meet your goals. The real question is whether your spending brings results that matter, not just if your bill goes down."}},
                {"@type": "Question", "name": "Can you guarantee more leads or a specific return?", "acceptedAnswer": {"@type": "Answer", "text": "No responsible provider should guarantee a certain result without clear conditions and evidence. Geek @ Your Spot works with you to set a baseline, run a controlled rollout, and agree on how you’ll measure success. That could mean tracking cost per lead, cost per customer, or sales value, not a promised percentage improvement."}},
                {"@type": "Question", "name": "Doesn’t Google already optimize my ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Google Smart Bidding uses AI to adjust your bids for conversions or value. Any extra tool should fill a real gap, such as giving you cross-account oversight, better budget controls, or reporting that helps you see business results. Geek @ Your Spot will help you find out if you need more before suggesting another subscription."}},
                {"@type": "Question", "name": "What is a good cost per lead for my business?", "acceptedAnswer": {"@type": "Answer", "text": "A good target depends on how many leads turn into customers and what each customer is worth to your business. For example, if you can spend $200 to get a new customer and one in five leads becomes a customer, that means a $40 cost per lead uses up your full budget. This is just an example, your own numbers and software costs must be factored in."}},
                {"@type": "Question", "name": "How will I know which ads generate paying customers?", "acceptedAnswer": {"@type": "Answer", "text": "You need to connect your ad interactions to what happens in your sales, booking, or ecommerce system. For businesses where a website lead becomes a sale later, Google’s enhanced conversions for leads can use offline sales data. The setup needs to fit your current systems and how you handle your data."}},
                {"@type": "Question", "name": "Why am I getting leads but not customers?", "acceptedAnswer": {"@type": "Answer", "text": "This needs a closer look. Geek @ Your Spot would check if the leads are a good fit, if your team responds well, and if your offer and sales funnel convert those leads. We also review what your ad system marks as a conversion. Getting an inquiry is not the same as closing a sale, and Google lets you connect later sales back to the original ad click."}},
                {"@type": "Question", "name": "Do I need a CRM before we start?", "acceptedAnswer": {"@type": "Answer", "text": "You do not need a CRM to begin the assessment. What matters is having a reliable way to track what happens after each inquiry. Geek @ Your Spot will look at your current booking, sales, or customer system first. If you have a CRM, it can help connect sales results to earlier ad interactions."}},
                {"@type": "Question", "name": "What if our tracking is incomplete or inaccurate?", "acceptedAnswer": {"@type": "Answer", "text": "The first step is a tracking review, not automatic changes to your ad budget. Optimization tools rely on good data about what matters to your business. If the data is off, your ad money may go toward the wrong goals, so we always start by making sure your tracking shows the real outcomes."}},
                {"@type": "Question", "name": "Do I still need someone managing the advertising?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our service keeps a person in charge of your advertising goals, tracking quality, what changes are allowed, and reviews of the results. The software can handle routine budget adjustments, but you still need someone to decide if your targets and rules make sense. Automated optimization only works when you have the right settings, data connections, and ongoing oversight."}},
                {"@type": "Question", "name": "Can we keep our current agency and use your optimization service?", "acceptedAnswer": {"@type": "Answer", "text": "Possibly, depending on how responsibilities are divided. We would work out exactly who handles bids, budgets, tracking, approvals, and reporting. We do not add another system that makes campaign changes without your agency’s knowledge or without a clear, agreed process."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Ad Spend Optimization", "Miami small business advertising", "wasted ad spend", "local ad optimization", "AI ad spend", "Cometly", "Triplewhale", "Bir", "Optmyzr", "South Florida digital ads"],
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
            type: 'article',
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
        "If your small business in Miami-Dade, Broward or Palm Beach is tired of digital ad waste, this guide shows how to finally make every dollar count. We break down proven steps, local insights, and practical tools for ad spend optimization, no jargon, just results.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <ChallengesSection />
                <StatusQuoSection />
                <MechanicsSection />
                <FoundationSection />
                <NumbersSection />
                <RightFitSection />
                <FaqSection />
                <SchedulerShell />
            </article>
        </>
    );
}
