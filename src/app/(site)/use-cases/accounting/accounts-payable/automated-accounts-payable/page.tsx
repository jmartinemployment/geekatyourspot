import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import IntroductionSection from '@/components/use-cases/accounting/accounts-payable/introduction-section'
import OverviewSection from '@/components/use-cases/accounting/accounts-payable/overview-section'
import BenefitsSection from "@/components/use-cases/accounting/accounts-payable/benefits-section";
import KeyFeaturesSection from "@/components/use-cases/accounting/accounts-payable/key-features";
import ToolsSection from '@/components/use-cases/accounting/accounts-payable/tools-section'
import FAQSection from "@/components/use-cases/accounting/accounts-payable/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { pillarService } from "@/lib/seo/organization";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Accounts Payable",
            "description": "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
            "image": [
                "https://geekatyourspot.com/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-07-23T13:31:17.5026845Z",
            "dateModified": "2026-07-23T13:31:17.5026845Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable"
            },
            "keywords": "automated accounts payable, AP automation, AI in finance, accounts payable software, financial operations, invoice processing, AP efficiency, AI-driven finance, AP tools, business automation",
            "wordCount": 3474,
            "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#article",
            "about": { "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#service" },
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/#software-tipalti"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-medius"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-basware"
                },
                {
                    "@id": "https://geekatyourspot.com/#software-rillion"
                }
            ]
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-tipalti",
            "name": "Tipalti",
            "url": "https://tipalti.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-medius",
            "name": "Medius",
            "url": "https://www.medius.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-basware",
            "name": "Basware",
            "url": "https://www.basware.com/"
        },
        {
            "@type": "Thing",
            "@id": "https://geekatyourspot.com/#software-rillion",
            "name": "Rillion",
            "url": "https://www.rillion.com/"
        },
        pillarService({ url: "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable", name: "Accounts Payable", description: "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency." })
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Accounts Payable",
        description: "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
        keywords: ["automated accounts payable", "AP automation", "AI in finance", "accounts payable software", "financial operations", "invoice processing", "AP efficiency", "AI-driven finance", "AP tools", "business automation"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/accounting/accounts-payable/automated-accounts-payable',
        },
        openGraph: {
            title: "Accounts Payable",
            description: 'Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.',
            url: 'https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Accounts Payable",
            description: 'Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.',
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const title = "Accounts Payable";
    const heroSummary = "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy."
    const heroImage = "/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-hero.avif";
    const imgAlt = "Automated accounts payable";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <OverviewSection />
            <IntroductionSection />
            <BenefitsSection />
            <KeyFeaturesSection />
            <ToolsSection />
            <FAQSection />
            <SchedulerShell />
        </>
    );
}
