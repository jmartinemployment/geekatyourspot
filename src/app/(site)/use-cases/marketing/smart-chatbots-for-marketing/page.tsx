import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/smart-chatbots/lede-section";
import AIContentSection from "@/components/use-cases/marketing/smart-chatbots/ai-content-section";
import LeadCaptureSection from "@/components/use-cases/marketing/smart-chatbots/lead-capture-section";
import AdSpendSection from "@/components/use-cases/marketing/smart-chatbots/ad-spend-section";
import FAQSection from "@/components/use-cases/marketing/smart-chatbots/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Smart Chatbots for Marketing | Geek At Your Spot",
    description: "Discover how Smart Chatbots for Marketing enhance lead capture, optimize ad spend, and streamline content creation for B2B success.",
    keywords: "Smart Chatbots for Marketing, AI Content Creation, Lead Capture, Ad Spend Optimization",
    openGraph: {
      title: "Smart Chatbots for Marketing | Geek At Your Spot",
      description: "Discover how Smart Chatbots for Marketing enhance lead capture, optimize ad spend, and streamline content creation for B2B success.",
      type: "article",
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
      <AIContentSection />
      <LeadCaptureSection />
      <AdSpendSection />
      <FAQSection />
      <SchedulerShell />
    </>
  );
}
