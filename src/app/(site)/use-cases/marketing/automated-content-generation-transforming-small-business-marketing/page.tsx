import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/lede-section";
import AIContentToLeadEngineSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/ai-content-to-lead-engine-section";
import GeneratePrimaryAssetSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/generate-primary-asset-section";
import RepurposeAutomaticallySection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/repurpose-automatically-section";
import RouteApprovalPublishingSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/route-approval-publishing-section";
import PAASection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Automated Content Generation: Transforming Small Business Marketing",
            "description": "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
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
            "datePublished": "2026-09-04T13:28:01.6561881Z",
            "dateModified": "2026-09-04T13:28:01.6561881Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing"
            },
            "keywords": "Automated Content Generation, AI content tools, small business AI, content automation, AI marketing",
            "wordCount": 2900,
            "@id": "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing#article",
            "relatedLink": "https://geekatyourspot.com/blog/marketing/unlocking-the-potential-of-automated-content-generation-for-small-businesses",
            "mentions": [
                {
                    "@id": "#software-writesonic"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
                },
                {
                    "@id": "#software-pictory"
                },
                {
                    "@id": "#software-synthesia"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Writesonic",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Writesonic automates research and SEO content generation for small business marketing.",
            "@id": "#software-writesonic"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Jasper AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Jasper automates content drafts while keeping brand voice consistent.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Copy.ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Copy.ai automates lead capture workflows and sales copy generation.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/copyai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Pictory",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Pictory transforms written content into engaging short videos.",
            "@id": "#software-pictory"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Synthesia",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Synthesia creates polished avatar-led explainer videos from text.",
            "@id": "#software-synthesia"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Automated Content Generation: Transforming Small Business Marketing",
    description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
    keywords: ["Automated Content Generation", "AI content tools", "small business AI", "content automation", "AI marketing"],
    authors: [{ name: "Development Team", url: "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing" }],
    creator: "Geek at Your Spot Llc",
    publisher: "Geek at Your Spot Llc",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: {
      canonical: "/use-cases/marketing/automated-content-generation-transforming-small-business-marketing",
    },
    openGraph: {
      title: "Automated Content Generation: Transforming Small Business Marketing",
      description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
      url: 'https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing',
      siteName: "Geek at Your Spot",
      locale: "en_US",
      type: "website",
      images: [{ url: "/images/GeekAtYourSpot.svg", width: 116, height: 48, alt: "Geek at Your Spot" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Automated Content Generation: Transforming Small Business Marketing",
      description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
      creator: "Geek at Your Spot",
      images: ["/images/GeekAtYourSpot.svg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: { index: true, follow: true, noimageindex: false, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    icons: { icon: "/favicon.ico" },
    appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek at Your Spot" },
  };
};

export default async function Page() {
  const title = "Automated Content Generation: Transforming Small Business Marketing";
  const heroSummary = "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.";
  const heroImage = "";
  const imgAlt = "";
  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SharedHeroSection title={title} summary={heroSummary} image={heroImage} imgAlt={imgAlt} />
      <article>
        <LedeSection />
        <AIContentToLeadEngineSection />
        <GeneratePrimaryAssetSection />
        <RepurposeAutomaticallySection />
        <RouteApprovalPublishingSection />
        <PAASection />
        <SchedulerShell />
      </article>
    </>
  );
}
