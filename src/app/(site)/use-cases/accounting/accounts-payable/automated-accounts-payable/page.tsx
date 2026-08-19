import type { Metadata } from "next";
// import { TechArticle, WithContext } from 'schema-dts';
import SharedHeroSection from "@/components/shared/shared-hero-section";
import IntroductionSection from '@/components/use-cases/accounting/accounts-payable/introduction-section'
import OverviewSection from '@/components/use-cases/accounting/accounts-payable/overview-section'
import BenefitsSection from "@/components/use-cases/accounting/accounts-payable/benefits-section";
import KeyFeaturesSection from "@/components/use-cases/accounting/accounts-payable/key-features";
import ToolsSection from '@/components/use-cases/accounting/accounts-payable/tools-section'
import FAQSection from "@/components/use-cases/accounting/accounts-payable/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "Automated Accounts Payable",
                "description": "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
                "image": [
                    "https://www.geekatyourspot.com/images/GeekAtYourSpot.svg"
                ],
                "author": {
                    "@type": "Person",
                    "name": "Geek At Your Spot Editorial Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Geek At Your Spot",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.geekatyourspot.com/images/GeekAtYourSpot.svg"
                    }
                },
                "datePublished": "2026-07-23T13:31:17.5026845Z",
                "dateModified": "2026-07-23T13:31:17.5026845Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.geekatyourspot.com/use-cases/accounting/accounts-payable/automated-accounts-payable"
                },
                "keywords": "automated accounts payable, AP automation, AI in finance, accounts payable software, financial operations, invoice processing, AP efficiency, AI-driven finance, AP tools, business automation",
                "wordCount": 3474,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://www.geekatyourspot.com/blog/accounting/accounts-payable/why-automating-accounts-payable-is-a-game-changer-for-your-business"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Tipalti",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Tipalti is a comprehensive payables automation solution that streamlines the end-to-end AP process. It offers capabilities such as global payments automation, supplier management, and compliance with tax and regulatory requirements.",
                "url": "https://www.geekatyourspot.com/tools/accounting/accounts-payable/tipalti"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Medius",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Medius offers AI-driven accounts payable automation with a focus on invoice management and processing. It provides an intuitive platform that simplifies invoice capture, processing, and approval workflows.",
                "url": "https://www.geekatyourspot.com/tools/accounting/accounts-payable/medius"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Basware",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Basware provides a cloud-based platform for automating invoice processing and procurement, renowned for its scalability and advanced data analytics. It supports organizations in improving cash flow visibility and supplier relationships.",
                "url": "https://www.geekatyourspot.com/tools/accounting/accounts-payable/basware"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Rillion",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Rillion is a user-friendly AP automation platform that emphasizes fast implementation and ease of use. It automates invoice processing, approval workflows, and integrates seamlessly with existing financial systems.",
                "url": "https://www.geekatyourspot.com/tools/accounting/accounts-payable/rillion"
            }
        ]
    };
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.",
        keywords: ["automated accounts payable", "AP automation", "AI in finance", "accounts payable software", "financial operations", "invoice processing", "AP efficiency", "AI-driven finance", "AP tools", "business automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com/'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | Home',
            description: 'Explore how automated accounts payable systems streamline financial processes and enhance operational efficiency.',
            url: 'https://geekatyourspot.com/',
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
            title: 'Geek at Your Spot | accounts-payable',
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
        verification: {
            google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
            yandex: 'yandex-verification-token',
            yahoo: 'yahoo-verification-token',
        },
        icons: {
            icon: '/favicon.ico',
            shortcut: '/shortcut-icon.png',
            apple: '/apple-icon.png',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
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
