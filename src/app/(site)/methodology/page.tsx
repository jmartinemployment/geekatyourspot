import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/methodology/lede-section";
import PhaseOneSection from "@/components/methodology/phase-one-section";
import PhaseTwoSection from "@/components/methodology/phase-two-section";
import PhaseThreeSection from "@/components/methodology/phase-three-section";
import PhaseFourSection from "@/components/methodology/phase-four-section";
import InYourHandsSection from "@/components/methodology/in-your-hands-section";
import PAASection from "@/components/methodology/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "The Methodology";
const DESCRIPTION =
    "Our four-phase AI methodology for South Florida small businesses: business objectives, data quality, tool selection, and a safe pilot, with you in control at every step.";
const CANONICAL = "/methodology";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

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
            "datePublished": "2026-10-15T00:00:00Z",
            "dateModified": "2026-10-15T00:00:00Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "AI implementation methodology, Business Objectives Alignment, Data Quality Assessment, Partner Tech Selection, AI pilot program, AI consulting South Florida, AI for small business Miami, Broward, Palm Beach",
            "@id": `${PAGE_URL}#article`,
            "about": { "@id": "https://geekatyourspot.com/#service" },
            "hasPart": { "@id": `${PAGE_URL}#faq` }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Is the first consultation really free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every project starts with a free consultation. We learn how your business runs and tell you plainly whether automation fits. There is no obligation."}},
                {"@type": "Question", "name": "Do you need access to our books before we start?", "acceptedAnswer": {"@type": "Answer", "text": "No. Phase 1 is discovery only. We map your workflows, approvals, and goals in plain language before we touch any data. Data access starts in Phase 2, after you have signed off on the map."}},
                {"@type": "Question", "name": "Will we have to replace our current accounting software?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. Phase 3 favors tools that plug into what you already run. If a new platform is the right call, you see the full cost of ownership and the contract terms before you sign anything."}},
                {"@type": "Question", "name": "What happens if the new system gets something wrong during the pilot?", "acceptedAnswer": {"@type": "Answer", "text": "Your current process keeps running the whole time. Both systems handle the same transactions, and every result is compared. When they disagree, a person investigates before anything else moves. Nothing cuts over until the numbers match and you approve it."}},
                {"@type": "Question", "name": "Who has the final say at each phase?", "acceptedAnswer": {"@type": "Answer", "text": "You do. Each phase ends with something you can see and approve: a signed workflow map, a data health scorecard, a side-by-side tool scorecard, and your written sign-off before cutover."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["AI implementation methodology", "Business Objectives Alignment", "Data Quality Assessment", "Partner Tech Selection", "AI pilot program", "AI consulting South Florida", "AI for small business Miami", "Broward", "Palm Beach"],
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
        "Four phases built to keep a human in control of your money. See how each one opens the black box before any software touches your books.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <LedeSection />
                <PhaseOneSection />
                <PhaseTwoSection />
                <PhaseThreeSection />
                <PhaseFourSection />
                <InYourHandsSection />
                <PAASection />
                <SchedulerShell />
            </article>
        </>
    );
}
