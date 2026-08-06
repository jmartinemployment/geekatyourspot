import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import OverviewSection from '@/components/use-cases/marketing/ai-content-creation-workflow/overview-section'

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "Automated Content Creation Workflow",
                "description": "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
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
                "datePublished": "2026-07-30T16:54:19.0258530Z",
                "dateModified": "2026-07-30T16:54:19.0258530Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow"
                },
                "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
                "wordCount": 3883,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://www.geekatyourspot.com/blog/marketing/unlocking-efficiency-how-to-automate-your-content-creation-process"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "OpenAI GPT-4",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "OpenAI GPT-4 is a leading AI model that assists businesses in generating high-quality text content efficiently. It helps streamline content creation by automating initial drafts, improving language precision, and generating creative ideas. This tool is particularly beneficial for teams looking to produce engaging content without extensive manual effort.",
                "url": "https://www.geekatyourspot.com/tools/marketing/openai-gpt-4"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Jasper AI",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Jasper AI is an AI-driven content creation platform designed to streamline and enhance the writing process. It helps businesses produce high-quality content quickly, reducing the time and effort traditionally associated with content generation.",
                "url": "https://www.geekatyourspot.com/tools/marketing/jasper-ai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Grammarly",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Grammarly is a writing assistant that helps enhance content quality by providing real-time grammar, punctuation, and style checks. By integrating Grammarly into your content creation workflow, you can streamline editing processes and ensure your content is clear and error-free.",
                "url": "https://www.geekatyourspot.com/tools/marketing/grammarly"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Canva",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Canva is a platform that simplifies graphic design for businesses of all sizes by providing easy-to-use tools that require no prior design experience. With Canva, teams can quickly create professional-quality visual content, streamlining the content creation process.",
                "url": "https://www.geekatyourspot.com/tools/marketing/canva"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Adobe Sensei",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Adobe Sensei is an AI-powered platform designed to streamline creative workflows by automating repetitive tasks and enhancing content intelligence. It helps businesses by providing tools that improve design efficiency and deliver personalized experiences in real-time.",
                "url": "https://www.geekatyourspot.com/tools/marketing/adobe-sensei"
            }
        ]
    }
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow'),
        alternates: {
            canonical: '/use-cases/marketing/automated-content-creation-workflow',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | Automated Content Creation Workflow',
            description: "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
            url: 'https://geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow',
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
            title: 'Geek at Your Spot | Automated Content Creation Workflow',
            description: "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
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
            google: 'google-site-verification-token',
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
    const title = "Automated Content Creation Workflow";
    const heroSummary = "Streamline your B2B marketing with an automated content creation workflow for improved efficiency and accuracy."
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/automated-content-creation-workflow-pillar-hero.avif";

    return (
        <>
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage} />
            <article>
                <OverviewSection />

            </article>

        </>
    );
}