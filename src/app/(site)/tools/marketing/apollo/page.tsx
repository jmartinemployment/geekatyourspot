import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/apollo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/apollo/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/apollo/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/apollo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Apollo",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/apollo"
    },
    "keywords": "Lead Scoring",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/apollo#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Apollo",
    description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
    keywords: ["Lead Scoring"],
    authors: [{ name: "Development Team", url: "https://geekatyourspot.com/" }],
    creator: "Geek at Your Spot Llc",
    publisher: "Geek at Your Spot Llc",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: {
      canonical: "/tools/marketing/apollo",
    },
    openGraph: {
      title: "Apollo",
      description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
      url: 'https://geekatyourspot.com/tools/marketing/apollo',
      siteName: "Geek at Your Spot",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/images/GeekAtYourSpot.svg",
          width: 116,
          height: 48,
          alt: "Geek at Your Spot",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Apollo",
      description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
      creator: "Geek at Your Spot",
      images: ["/images/GeekAtYourSpot.svg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Geek at Your Spot",
    },
  };
};

export default async function Page() {
  const title = "Apollo";
  const summary =
    "Enhance your sales strategy with Apollo's AI-driven lead scoring, designed to identify promising leads and improve conversion rates.";
  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolsHeroSection title={title} summary={summary} />
      <OverviewSection />
      <KeyCapabilitiesSection />
      <ImplementationSection />
      <WhenToUseSection />
      <SchedulerShell />
    </>
  );
}
