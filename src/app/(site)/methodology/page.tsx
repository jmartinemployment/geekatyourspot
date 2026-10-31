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
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "The Methodology";
const DESCRIPTION =
    "Our methodology takes South Florida small businesses through four phases, from business objectives to a safe pilot, and keeps you in control at every step.";
const CANONICAL = "/methodology";
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
            "datePublished": "2026-10-15T00:00:00Z",
            "dateModified": "2026-10-15T00:00:00Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "AI implementation methodology, Business Objectives Alignment, Data Quality Assessment, Partner Tech Selection, AI pilot program, AI consulting South Florida, AI for small business Miami, Broward, Palm Beach"
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Is the first consultation really free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, the first consultation is free. We learn how your business runs and tell you plainly whether automation fits, and there is no obligation."}},
                {"@type": "Question", "name": "Do you need access to our books before we start?", "acceptedAnswer": {"@type": "Answer", "text": "No, we do not. Phase 1 is discovery only, so we map your workflows, approvals, and goals in plain language before we touch any data. Data access starts in Phase 2, after you have signed off on the map."}},
                {"@type": "Question", "name": "Will we have to replace our current accounting software?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily, because Phase 3 favors tools that plug into what you already run. If a new platform is the right call, you will see the full cost of ownership and the contract terms before you sign anything."}},
                {"@type": "Question", "name": "What happens if the new system gets something wrong during the pilot?", "acceptedAnswer": {"@type": "Answer", "text": "Your current process keeps running the whole time. Both systems handle the same transactions, and every result is compared. When they disagree, a person investigates before anything else moves, and nothing cuts over until the numbers match and you approve it."}},
                {"@type": "Question", "name": "Who has the final say at each phase?", "acceptedAnswer": {"@type": "Answer", "text": "You have the final say at every phase. Each phase ends with something you can see and approve: a signed workflow map, a data health scorecard, a scorecard comparing each tool, and your written approval before cutover."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["AI implementation methodology", "Business Objectives Alignment", "Data Quality Assessment", "Partner Tech Selection", "AI pilot program", "AI consulting South Florida", "AI for small business Miami", "Broward", "Palm Beach"],
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
        "Our four phases keep a person in control of your money. See how each phase opens the black box before any software touches your books.";
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
