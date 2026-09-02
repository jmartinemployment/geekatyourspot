import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/apollo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/apollo/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/apollo/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/apollo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
  const jsonLd = {
    "@type": "SoftwareApplication",
    name: "Apollo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://geekatyourspot.com/tools/marketing/apollo",
    "@context": "https://schema.org",
    headline: "Apollo",
    description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
    image: ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
    author: {
      "@type": "Person",
      name: "Geek At Your Spot Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Geek At Your Spot",
      logo: {
        "@type": "ImageObject",
        url: "https://geekatyourspot.com/images/GeekAtYourSpot.svg",
      },
    },
    datePublished: "2026-09-02T17:27:15.4287618Z",
    dateModified: "2026-09-02T17:27:15.4287618Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://geekatyourspot.com/tools/marketing/apollo",
    },
    keywords: "Lead Scoring",
    subjectOf: {
      "@type": "TechArticle",
      "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses",
    },
  };
  return {
    title: {
      default: "Geek at Your Spot",
      template: "%s | Geek at Your Spot",
    },
    description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
    keywords: ["Lead Scoring"],
    authors: [{ name: "Development Team", url: "https://geekatyourspot.com/" }],
    creator: "Geek at Your Spot Llc",
    publisher: "Geek at Your Spot Llc",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: {
      canonical: "/tools/marketing/apollo",
      languages: {
        "en-US": "/en-US",
        "es-ES": "/es-ES",
      },
    },
    openGraph: {
      title: "Geek at Your Spot | Apollo",
      description: "Optimize sales with Apollo's AI-powered lead scoring, enhancing lead identification accuracy and efficiency.",
      url: "https://geekatyourspot.com/",
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
      title: "Geek at Your Spot | Apollo",
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
    verification: {
      google: "_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI",
      yandex: "yandex-verification-token",
      yahoo: "yahoo-verification-token",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/shortcut-icon.png",
      apple: "/apple-icon.png",
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Geek at Your Spot",
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd),
    },
  };
};

export default async function Page() {
  const title = "Apollo";
  const summary =
    "Enhance your sales strategy with Apollo's AI-driven lead scoring, designed to identify promising leads and improve conversion rates.";
  return (
    <>
      <ToolsHeroSection title={title} summary={summary} />
      <OverviewSection />
      <KeyCapabilitiesSection />
      <ImplementationSection />
      <WhenToUseSection />
      <SchedulerShell />
    </>
  );
}
