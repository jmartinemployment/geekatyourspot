import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/lede-section";
import AIContentToLeadEngineSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/ai-content-to-lead-engine-section";
import GeneratePrimaryAssetSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/generate-primary-asset-section";
import RepurposeAutomaticallySection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/repurpose-automatically-section";
import RouteApprovalPublishingSection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/route-approval-publishing-section";
import PAASection from "@/components/use-cases/marketing/automated-content-generation-transforming-small-business-marketing/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: "Automated Content Generation: Transforming Small Business Marketing",
        description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
        image: ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
        author: { "@type": "Person", name: "Geek At Your Spot Editorial Team" },
        publisher: {
          "@type": "Organization",
          name: "Geek At Your Spot",
          logo: { "@type": "ImageObject", url: "https://geekatyourspot.com/images/GeekAtYourSpot.svg" },
        },
        datePublished: "2026-09-04T13:28:01.6561881Z",
        dateModified: "2026-09-04T13:28:01.6561881Z",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing",
        },
        keywords: "Automated Content Generation, AI content tools, small business AI, content automation, AI marketing",
        wordCount: 2900,
        proficiencyLevel: "Beginner",
        citation: [{ "@type": "BlogPosting", url: "https://geekatyourspot.com/blog/marketing/unlocking-the-potential-of-automated-content-generation-for-small-businesses" }],
      },
      {
        "@type": "SoftwareApplication",
        name: "Writesonic",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Writesonic automates research and SEO content generation for small business marketing.",
        url: "https://geekatyourspot.com/tools/marketing/writesonic",
      },
      {
        "@type": "SoftwareApplication",
        name: "Jasper AI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Jasper automates content drafts while keeping brand voice consistent.",
        url: "https://geekatyourspot.com/tools/marketing/jasper-ai",
      },
      {
        "@type": "SoftwareApplication",
        name: "Copy.ai",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Copy.ai automates lead capture workflows and sales copy generation.",
        url: "https://geekatyourspot.com/tools/marketing/copyai",
      },
      {
        "@type": "SoftwareApplication",
        name: "Pictory",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Pictory transforms written content into engaging short videos.",
        url: "https://geekatyourspot.com/tools/marketing/pictory",
      },
      {
        "@type": "SoftwareApplication",
        name: "Synthesia",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Synthesia creates polished avatar-led explainer videos from text.",
        url: "https://geekatyourspot.com/tools/marketing/synthesia",
      },
    ],
  };
  return {
    title: {
      default: "Geek at Your Spot",
      template: "%s | Geek at Your Spot",
    },
    description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
    keywords: ["Automated Content Generation", "AI content tools", "small business AI", "content automation", "AI marketing"],
    authors: [{ name: "Development Team", url: "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing" }],
    creator: "Geek at Your Spot Llc",
    publisher: "Geek at Your Spot Llc",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: {
      canonical: "/use-cases/marketing/automated-content-generation-transforming-small-business-marketing",
      languages: { "en-US": "/en-US", "es-ES": "/es-ES" },
    },
    openGraph: {
      title: "Geek at Your Spot | Automated Content Generation: Transforming Small Business Marketing",
      description: "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.",
      url: "https://geekatyourspot.com/use-cases/marketing/automated-content-generation-transforming-small-business-marketing",
      siteName: "Geek at Your Spot",
      locale: "en_US",
      type: "website",
      images: [{ url: "/images/GeekAtYourSpot.svg", width: 116, height: 48, alt: "Geek at Your Spot" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Geek at Your Spot | Automated Content Generation: Transforming Small Business Marketing",
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
    verification: { google: "_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI", yandex: "yandex-verification-token", yahoo: "yahoo-verification-token" },
    icons: { icon: "/favicon.ico" },
    appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek at Your Spot" },
    other: { "script:ld+json": JSON.stringify(jsonLd) },
  };
};

export default async function Page() {
  const title = "Automated Content Generation: Transforming Small Business Marketing";
  const heroSummary = "Explore how Automated Content Generation boosts efficiency and engagement for small businesses. Learn practical AI applications and benefits.";
  const heroImage = "";
  const imgAlt = "";
  return (
    <>
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
