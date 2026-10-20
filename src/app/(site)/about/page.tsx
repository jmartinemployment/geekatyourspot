import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import FounderSection from "@/components/about/founder-section";
import MissionSection from "@/components/about/mission-section";
import TimelineSection from "@/components/about/timeline-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "About Jeff Martin";
const HERO_TITLE = "Enterprise Expertise. Small Business Focus.";
const DESCRIPTION =
    "Meet Jeff Martin, the founder of Geek @ Your Spot LLC, who brings 40 years of engineering expertise to small businesses in South Florida.";
const CANONICAL = "/about";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;
const PERSON_ID = `${PAGE_URL}#jeff-martin`;
const ORGANIZATION_ID = "https://geekatyourspot.com/#organization";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "AboutPage",
            "@id": `${PAGE_URL}#page`,
            "name": TITLE,
            "description": "The story behind Geek @ Your Spot LLC, from a Timex Sinclair in 1982 to AI consulting for South Florida small businesses today.",
            "url": PAGE_URL,
            "about": { "@id": ORGANIZATION_ID },
            "mainEntity": { "@id": PERSON_ID },
            "author": { "@id": PERSON_ID }
        },
        {
            "@type": "Person",
            "@id": PERSON_ID,
            "name": "Jeff Martin",
            "jobTitle": "Founder and CEO",
            "description": "Jeff Martin is a full-stack developer and AI consultant with 40 years of engineering expertise, and the founder of Geek @ Your Spot LLC in Delray Beach, Florida.",
            "worksFor": { "@id": ORGANIZATION_ID },
            "knowsAbout": [
                "Artificial Intelligence",
                "Process Automation",
                "AI Chatbots",
                "Cloud Architecture",
                "Full Stack Development",
                "AI Strategy Consulting"
            ],
            "url": PAGE_URL
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        authors: [{ name: 'Jeff Martin', url: PAGE_URL }],
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
            type: 'profile',
            firstName: 'Jeff',
            lastName: 'Martin',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Enterprise-level technology expertise, distilled from 40 years of engineering, is here to serve you.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <SharedHeroSection title={HERO_TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <FounderSection />
                <MissionSection />
                <TimelineSection />
                <SchedulerShell />
            </article>
        </>
    );
}
