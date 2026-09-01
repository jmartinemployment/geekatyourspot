import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/smart-chatbots/lede-section";
import CaptureOnEveryChannelSection from "@/components/use-cases/marketing/smart-chatbots/capture-on-every-channel-section";
import TriggerInstantAcknowledgmentSection from "@/components/use-cases/marketing/smart-chatbots/trigger-instant-acknowledgment-section";
import EnrichTheLeadInstantlySection from "@/components/use-cases/marketing/smart-chatbots/enrich-the-lead-instantly-section";
import FAQSection from "@/components/use-cases/marketing/smart-chatbots/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Smart Chatbots for Marketing: Transforming Customer Engagement",
    "description": "Explore Smart Chatbots for Marketing to boost engagement, streamline customer interactions, and enhance your business strategy with AI.",
    "image": [
      "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
    ],
    "author": {
      "@type": "Organization",
      "name": "Geek At Your Spot"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Geek At Your Spot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
      }
    },
    "datePublished": "2026-08-29",
    "dateModified": "2026-08-29",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://geekatyourspot.com/use-cases/marketing/smart-chatbots-for-marketing"
    },
    "keywords": "Smart Chatbots for Marketing",
    "proficiencyLevel": "Beginner"
  };

  return {
    title: "Smart Chatbots for Marketing | Geek At Your Spot",
    description: "Explore Smart Chatbots for Marketing to boost engagement, streamline customer interactions, and enhance your business strategy with AI.",
    keywords: "Smart Chatbots for Marketing",
    authors: [{ name: "Geek At Your Spot Editorial Team" }],
    robots: "index, follow",
    openGraph: {
      title: "Smart Chatbots for Marketing: Transforming Customer Engagement | Geek At Your Spot",
      description: "Explore Smart Chatbots for Marketing to boost engagement, streamline customer interactions, and enhance your business strategy with AI.",
      type: "article",
      url: "https://geekatyourspot.com/use-cases/marketing/smart-chatbots-for-marketing-transforming-customer-engagement",
      images: [
        {
          url: "https://geekatyourspot.com/images/GeekAtYourSpot.svg",
          width: 1200,
          height: 630,
          alt: "Smart Chatbots for Marketing",
        },
      ],
      siteName: "Geek At Your Spot",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Smart Chatbots for Marketing: Transforming Customer Engagement | Geek At Your Spot",
      description: "Explore Smart Chatbots for Marketing to boost engagement, streamline customer interactions, and enhance your business strategy with AI.",
      images: ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
      creator: "Geek At Your Spot",
    },
    other: {
      "ld+json": JSON.stringify(jsonLd),
      "canonical": "https://geekatyourspot.com/use-cases/marketing/smart-chatbots-for-marketing-transforming-customer-engagement",
    },
  };
};

export default async function Page() {
  const title = "Smart Chatbots for Marketing";
  const summary = "Uncover the power of smart chatbots in revolutionizing marketing through enhanced customer interactions and lead optimization.";
  const heroImage = "/images/marketing/use-cases/smart-chatbots/smart-chatbots-pillar-hero.avif";
  const imgAlt = "Transform marketing with AI chatbots";

  return (
    <>
      <SharedHeroSection
        title={title}
        summary={summary}
        image={heroImage}
        imgAlt={imgAlt}
      />
      <LedeSection />
      <CaptureOnEveryChannelSection />
      <TriggerInstantAcknowledgmentSection />
      <EnrichTheLeadInstantlySection />
      <FAQSection />
      <SchedulerShell />
    </>
  );
}
