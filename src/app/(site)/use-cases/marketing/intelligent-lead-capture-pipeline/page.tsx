import type { Metadata } from "next";
// import { TechArticle, WithContext } from 'schema-dts';
import SharedHeroSection from "@/components/shared/shared-hero-section";
import OverviewSection from '@/components/use-cases/marketing/intelligent-lead-capture-pipeline/overview-section'
import IntroductionSection from '@/components/use-cases/marketing/intelligent-lead-capture-pipeline/introduction-section'
import BenefitsSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/benefits-section";
import OptimizingPipelinePerformanceSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/optimizing-pipeline-performance";
import ToolsSection from '@/components/use-cases/marketing/intelligent-lead-capture-pipeline/tools-section'
import FAQSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/faq-section";


export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "Intelligent Lead Capture Pipeline",
                "description": "Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.",
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
                "datePublished": "2026-07-26T14:56:10.1903634Z",
                "dateModified": "2026-07-26T14:56:10.1903634Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline"
                },
                "keywords": "Intelligent Lead Capture Pipeline, AI lead generation, automated sales pipeline, B2B sales tools, lead capture solutions",
                "wordCount": 3028,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://www.geekatyourspot.com/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "HubSpot",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "HubSpot is a powerful platform that streamlines lead management by automating repetitive tasks and providing insightful analytics. For businesses struggling with manual lead tracking, HubSpot offers a cohesive approach that integrates contacts, marketing, and sales into one seamless system. This reduces human error and frees up valuable time for teams to focus on nurturing relationships and closing deals."
            },
            {
                "@type": "SoftwareApplication",
                "name": "Salesforce Einstein",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Salesforce Einstein integrates AI directly into Salesforce, helping businesses automate and optimize customer interactions. It enhances CRM by providing smarter insights, predictive analytics, and personalized recommendations, making it easier to convert leads into sales."
            },
            {
                "@type": "SoftwareApplication",
                "name": "Marketo Engage",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Marketo Engage transforms how businesses manage marketing automation and customer engagement. It offers tools for precise campaign execution, lead management, and personalization to enhance customer experiences. By automating and optimizing these processes, Marketo Engage helps businesses efficiently capture and nurture leads."
            },
            {
                "@type": "SoftwareApplication",
                "name": "Zoho CRM",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Zoho CRM offers businesses a comprehensive tool to manage customer relationships, streamline sales processes, and enhance lead generation efforts. By using Zoho CRM, teams can automate repetitive tasks, reduce manual data entry errors, and provide a more personalized customer experience. This platform is designed to help businesses boost sales efficiency and improve customer satisfaction."
            },
            {
                "@type": "SoftwareApplication",
                "name": "Pardot",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Pardot is a marketing automation tool that helps businesses streamline lead generation and management processes. It simplifies capturing leads, nurturing them, and converting them into sales, reducing the manual work involved."
            }
        ]
    }
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.",
        keywords: ["Intelligent Lead Capture Pipeline, AI lead generation, automated sales pipeline, B2B sales tools, lead capture solutions"],
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
            description: 'Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.',
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
            title: 'Geek at Your Spot | Marketing: Intelligent Lead Capture',
            description: 'Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.',
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
            // shortcut: '/shortcut-icon.png',
            // apple: '/apple-icon.png',
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
    const title = "Intelligent Lead Capture Pipeline";
    const heroSummary = "Automate and optimize your lead capture process with the Intelligent Lead Capture Pipeline."
    const heroImage = "/images/marketing/use-cases/intelligent-lead-capture-pipeline/intelligent-lead-capture-pipeline-pillar-hero.avif";
    const imgAlt = "Intelligent lead capture pipeline";

    return (
        <>
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <OverviewSection />
                <IntroductionSection />
                <BenefitsSection />
                <OptimizingPipelinePerformanceSection />
                <ToolsSection />
                <FAQSection />
            </article>

        </>
    );
}
