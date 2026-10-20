import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import OverviewSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/overview-section";
import IntroductionSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/introduction-section";
import BenefitsSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/benefits-section";
import ToolsSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/tools-section";
import OptimizingSection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/optimizing-section";
import PAASection from "@/components/use-cases/marketing/intelligent-lead-capture-pipeline/paa-section";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";


const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Intelligent Lead Capture Pipeline",
            "description": "Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/intelligent-lead-capture-pipeline/intelligent-lead-capture-pipeline-pillar-hero.avif"
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
            "datePublished": "2026-07-26T14:56:10.1903634Z",
            "dateModified": "2026-07-26T14:56:10.1903634Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline"
            },
            "keywords": "Intelligent Lead Capture Pipeline, AI lead generation, automated sales pipeline, B2B sales tools, lead capture solutions",
            "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline#article",
            "hasPart": { "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline#faq" },
            "mentions": [
                { "@id": "https://geekatyourspot.com/#software-lobbystack" },
                { "@id": "https://geekatyourspot.com/#software-my-ai-front-desk" },
                { "@id": "https://geekatyourspot.com/#software-nextiva" },
                { "@id": "https://geekatyourspot.com/#software-smith-ai" },
                { "@id": "https://geekatyourspot.com/#software-voksha" },
                { "@id": "https://geekatyourspot.com/#software-botpenguin" },
                { "@id": "https://geekatyourspot.com/#software-dapta" },
                { "@id": "https://geekatyourspot.com/#software-manychat" },
                { "@id": "https://geekatyourspot.com/#software-my-ai-front-desk" },
                { "@id": "https://geekatyourspot.com/#software-tidio" },
                { "@id": "https://geekatyourspot.com/#software-apollo" },
                { "@id": "https://geekatyourspot.com/#software-factors" },
                { "@id": "https://geekatyourspot.com/#software-leadfeeder" },
                { "@id": "https://geekatyourspot.com/#software-lusha" },
                { "@id": "https://geekatyourspot.com/#software-snitcher" }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline#faq",
            "mainEntity": [
                {"@type": "Question", "name": "How to build a lead pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "Building a lead pipeline involves identifying potential customers and nurturing them until they are ready to buy. First, define your target audience. Then, use marketing strategies like content marketing, social media, and email campaigns to attract interest. Capture contact information using lead forms and engage leads with personalized follow-ups."}},
                {"@type": "Question", "name": "How to create a lead capture form?", "acceptedAnswer": {"@type": "Answer", "text": "To create a lead capture form, start by deciding what information you need from potential leads, such as name and email. Use a simple design to avoid overwhelming users. Ensure the form is easy to find on your website and consider offering an incentive for filling it out, like a free eBook or discount."}},
                {"@type": "Question", "name": "How to develop a pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "Developing a pipeline involves setting up processes for moving leads through different stages until they are ready to purchase. Start by mapping out each stage of your sales process. Then, use CRM tools to track lead progress and automate communication. Regularly review and refine the pipeline to improve conversion rates."}},
                {"@type": "Question", "name": "What is the lead capture process?", "acceptedAnswer": {"@type": "Answer", "text": "The lead capture process involves attracting potential customers and collecting their information for follow-up. It typically starts with generating interest through marketing efforts, then capturing details via forms or landing pages. The information is then used to nurture leads until they are ready to make a purchase."}},
                {"@type": "Question", "name": "How to build a good pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "To build a good pipeline, ensure it is structured and scalable. Identify key stages from lead awareness to sale closure, and use CRM software to manage and track leads. Regularly analyze the pipeline's performance to identify bottlenecks and optimize for efficiency."}},
                {"@type": "Question", "name": "What are the 5 stages of a sales pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "The 5 stages of a sales pipeline often include: 1) Lead Generation - attracting potential customers, 2) Lead Qualification - assessing if leads fit your criteria, 3) Proposal - presenting your offering, 4) Negotiation - discussing terms, and 5) Closing - finalizing the sale."}},
                {"@type": "Question", "name": "What are the 5 stages of pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "The 5 stages of a pipeline generally refer to stages in a process, which can include: 1) Prospecting, 2) Initial Contact, 3) Qualification, 4) Proposal, and 5) Closing. Each stage represents a step in moving a lead from initial interest to a completed transaction."}},
                {"@type": "Question", "name": "What is a lead pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "A lead pipeline is a structured process used by businesses to track and manage potential customers as they move through the sales process. It helps in organizing leads, ensuring follow-up, and increasing the likelihood of converting them into paying customers."}},
                {"@type": "Question", "name": "What are the three types of pipelines?", "acceptedAnswer": {"@type": "Answer", "text": "The three main types of pipelines include: 1) Sales Pipelines, which track potential sales opportunities, 2) Marketing Pipelines, which manage leads generated through marketing efforts, and 3) Project Pipelines, which oversee the flow of tasks and projects within an organization."}},
                {"@type": "Question", "name": "How to design a pipeline system?", "acceptedAnswer": {"@type": "Answer", "text": "Designing a pipeline system requires identifying the key stages and processes your organization needs to track. Map out each stage and define the criteria for moving leads through the stages. Use software tools to automate and monitor the pipeline, ensuring data is consistently updated and accessible."}},
                {"@type": "Question", "name": "What is the formula for pipeline?", "acceptedAnswer": {"@type": "Answer", "text": "The formula for a sales pipeline typically involves calculating the value of potential sales at each stage of the pipeline. This is often done by multiplying the probability of closing a deal at each stage by the deal's expected value, helping to forecast potential revenue."}},
                {"@type": "Question", "name": "How to develop a project pipeline", "acceptedAnswer": {"@type": "Answer", "text": "To develop a project pipeline, start by outlining the key phases of project development, such as planning, execution, and completion. Use project management tools to track progress and allocate resources. Regularly review the pipeline to ensure projects are on track and adjust plans as needed."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Intelligent Lead Capture Pipeline",
        description: "Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.",
        keywords: ["Intelligent Lead Capture Pipeline, AI lead generation, automated sales pipeline, B2B sales tools, lead capture solutions"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/intelligent-lead-capture-pipeline',
        },
        openGraph: {
            title: "Intelligent Lead Capture Pipeline",
            description: 'Explore the Intelligent Lead Capture Pipeline to enhance lead generation, streamline processes, and boost B2B sales efficiently.',
            url: 'https://geekatyourspot.com/use-cases/marketing/intelligent-lead-capture-pipeline',
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
            title: "Intelligent Lead Capture Pipeline",
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
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
                <ToolsSection />
                <OptimizingSection />
                <PAASection />
            </article>

            <SchedulerShell />

        </>
    );
}
