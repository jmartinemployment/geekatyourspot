import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import OverviewSection from '@/components/use-cases/marketing/ai-marketing-systems/overview-section'
import IntroductionSection from '@/components/use-cases/marketing/ai-marketing-systems/introduction-section'
import BenefitsSection from "@/components/use-cases/marketing/ai-marketing-systems/benefits-section";
import KeyImplementationStrategiesSection from "@/components/use-cases/marketing/ai-marketing-systems/key-implementation-strategies";
import MeasuringSuccessRoiSection from "@/components/use-cases/marketing/ai-marketing-systems/measuring-sucess-roi";
import ToolsSection from "@/components/use-cases/marketing/ai-marketing-systems/tools-section";
import FAQSection from "@/components/use-cases/marketing/ai-marketing-systems/faq-section";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "AI Marketing Systems",
            "description": "Explore AI Marketing Systems to enhance small business strategies of Palm Beach and Broward counties. Boost efficiency and sales with practical AI solutions tailored for B2B needs.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif"
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
            "datePublished": "2026-07-29T11:33:50.5819023Z",
            "dateModified": "2026-07-29T11:33:50.5819023Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems"
            },
            "keywords": "AI Marketing Systems, small business AI, AI implementation, marketing automation, B2B marketing, AI tools, workflow optimization, lead scoring, dynamic creative optimization, automated bidding",
            "wordCount": 4404,
            "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems#article",
            "relatedLink": "https://geekatyourspot.com/blog/marketing/unlocking-the-power-of-ai-marketing-systems-for-small-businesses",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/hubspot#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/mailchimp#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/activecampaign#software"
                },
                {
                    "@id": "#software-hootsuite"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/marketo#software"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "HubSpot",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "HubSpot offers a comprehensive suite of tools designed for inbound marketing, sales, and customer service. It helps small businesses automate various marketing activities, saving time and improving efficiency.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/hubspot"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/hubspot#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Mailchimp",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Mailchimp is an email marketing platform that helps businesses automate their marketing campaigns. It allows users to create, send, and analyze email campaigns with ease, making it a popular choice for businesses aiming to improve customer engagement.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/mailchimp"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/mailchimp#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "ActiveCampaign",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "ActiveCampaign enhances email marketing efforts by automating customer interactions and improving engagement. It helps businesses manage customer relationships through personalized email campaigns, ensuring messages reach the right people at the right time. ActiveCampaign also uses AI to analyze customer behaviors, allowing businesses to tailor their marketing strategies for better results.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/activecampaign"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/activecampaign#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Hootsuite",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Hootsuite is a powerful social media management tool that helps businesses streamline their social media marketing efforts. It allows users to schedule posts, monitor conversations, and analyze performance across multiple social networks from a single dashboard. This platform is ideal for small businesses looking to efficiently manage their social media presence and engage with their audience effectively.",
            "@id": "#software-hootsuite"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Marketo",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Marketo is a marketing automation platform that helps businesses streamline their marketing efforts, focusing on lead management, email marketing, and customer engagement. It is designed to simplify complex marketing processes, allowing businesses to save time and reduce costs while increasing sales.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/marketo"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/marketo#software"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI Marketing Systems",
        description: "Explore AI Marketing Systems to enhance small business strategies of Palm Beach and Broward counties. Boost efficiency and sales with practical AI solutions tailored for B2B needs.",
        keywords: ["AI Marketing Systems, small business AI, AI implementation, marketing automation, B2B marketing, AI tools, workflow optimization, lead scoring, dynamic creative optimization, automated bidding"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com//use-cases/marketing/ai-marketing-systems' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/ai-marketing-systems',
        },
        openGraph: {
            title: "AI Marketing Systems",
            description: "Explore AI Marketing Systems to enhance small business strategies of Palm Beach and Broward counties. Boost efficiency and sales with practical AI solutions tailored for B2B needs.",
            url: 'https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems',
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
            title: "AI Marketing Systems",
            description: "Explore AI Marketing Systems to enhance small business strategies of Palm Beach and Broward counties. Boost efficiency and sales with practical AI solutions tailored for B2B needs.",
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
    const title = "AI Marketing Systems";
    const heroSummary = "Elevate your marketing game with AI systems that automate processes and enhance decision-making for better results."
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif";
    const imgAlt = "Streamline the chaos"
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <OverviewSection />
                <IntroductionSection />
                <BenefitsSection />
                <KeyImplementationStrategiesSection />
                <MeasuringSuccessRoiSection />
                <ToolsSection />
                <FAQSection />
            </article>

        </>
    );
}