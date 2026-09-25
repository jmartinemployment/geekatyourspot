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

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Automated Accounts Payable",
            "description": "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
            "image": [
                "https://geekatyourspot.com/images/accounting/use-cases/accounts-payable/automated-accounts-payable-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek at Your Spot"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Geek At Your Spot",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
                }
            },
            "datePublished": "2026-07-23T13:31:17.5026845Z",
            "dateModified": "2026-07-23T13:31:17.5026845Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable"
            },
            "keywords": "automated accounts payable, AP automation, AI in finance, accounts payable software, financial operations, invoice processing, AP efficiency, AI-driven finance, AP tools, business automation",
            "wordCount": 3474,
            "@id": "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable#article",
            "mentions": [
                {
                    "@id": "#software-tipalti"
                },
                {
                    "@id": "#software-medius"
                },
                {
                    "@id": "#software-basware"
                },
                {
                    "@id": "#software-rillion"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Tipalti",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Tipalti is a comprehensive payables automation solution that streamlines the end-to-end AP process. It offers capabilities such as global payments automation, supplier management, and compliance with tax and regulatory requirements.",
            "@id": "#software-tipalti"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Medius",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Medius offers AI-driven accounts payable automation with a focus on invoice management and processing. It provides an intuitive platform that simplifies invoice capture, processing, and approval workflows.",
            "@id": "#software-medius"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Basware",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Basware provides a cloud-based platform for automating invoice processing and procurement, renowned for its scalability and advanced data analytics. It supports organizations in improving cash flow visibility and supplier relationships.",
            "@id": "#software-basware"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Rillion",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Rillion is a user-friendly AP automation platform that emphasizes fast implementation and ease of use. It automates invoice processing, approval workflows, and integrates seamlessly with existing financial systems.",
            "@id": "#software-rillion"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Automated Accounts Payable",
        description: "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
        keywords: ["automated accounts payable", "AP automation", "AI in finance", "accounts payable software", "financial operations", "invoice processing", "AP efficiency", "AI-driven finance", "AP tools", "business automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/accounting/accounts-payable/automated-accounts-payable',
        },
        openGraph: {
            title: "Automated Accounts Payable",
            description: 'Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.',
            url: 'https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/GeekAtYourSpot.svg',
                    width: 116,
                    height: 48,
                    alt: 'Geek at Your Spot',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Automated Accounts Payable",
            description: 'Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.',
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
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
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const title = "Automated Accounts Payable";
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
