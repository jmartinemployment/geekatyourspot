import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import IntroductionSection from '@/components/use-cases/accounting/cash-flow-forecasting/introduction-section'
import OverviewSection from '@/components/use-cases/accounting/cash-flow-forecasting/overview-section'
import KeyStrategiesAccurateForecastingSection from "@/components/use-cases/accounting/cash-flow-forecasting/key-strategies-accurate-forecasting-section";
import IntegratingAiCashFlowManagementSection from "@/components/use-cases/accounting/cash-flow-forecasting/integrating-ai-cash-flow-management";
import MeasuringImpactForecastingFinancialHealthSection from "@/components/use-cases/accounting/cash-flow-forecasting/measuring-impact-forecasting-financial-health"
import ToolsSection from '@/components/use-cases/accounting/cash-flow-forecasting/tools-section'
import FAQSection from "@/components/use-cases/accounting/cash-flow-forecasting/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Cash Flow Forecasting",
            "description": "Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.",
            "image": [
                "https://geekatyourspot.com/images/accounting/use-cases/cash-flow-forecasting/cash-flow-forecasting-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "url": "https://geekatyourspot.com",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-07-23T20:48:51.4443132Z",
            "dateModified": "2026-07-23T20:48:51.4443132Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting"
            },
            "keywords": "Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation",
            "wordCount": 3540,
            "mentions": [
                { "@type": "Thing", "name": "Anaplan", "url": "https://www.anaplan.com/" },
                { "@type": "Thing", "name": "Adaptive Insights", "url": "https://www.workday.com/en-us/products/adaptive-planning/overview.html" },
                { "@type": "Thing", "name": "Kyriba", "url": "https://www.kyriba.com/" },
                { "@type": "Thing", "name": "Board", "url": "https://www.board.com/" }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Cash Flow Forecasting",
    description: "Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.",
    keywords: ["Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation"],
    authors: [{ name: 'Geek @ Your Spot LLC', url: 'https://geekatyourspot.com/' }],
    creator: 'Geek @ Your Spot LLC',
    publisher: 'Geek @ Your Spot LLC',
    metadataBase: new URL('https://geekatyourspot.com'),
    alternates: {
      canonical: '/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting',
    },
    openGraph: {
      title: "Cash Flow Forecasting",
      description: 'Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.',
      url: 'https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting',
      siteName: 'Geek @ Your Spot LLC',
      locale: 'en_US',
      type: 'article',
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Cash Flow Forecasting",
      description: 'Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.',
      images: [SHARE_IMAGE],
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
      title: 'Geek @ Your Spot LLC',
    },
  };
};

export default async function Page() {
  const title = "Cash Flow Forecasting";
  const heroSummary = "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management."
  const heroImage = "/images/accounting/use-cases/cash-flow-forecasting/cash-flow-forecasting-pillar-hero.avif";
  const imgAlt = "Automated cash flow forecasting"
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
        imgAlt={imgAlt}/>
        <OverviewSection />
        <IntroductionSection />
        <KeyStrategiesAccurateForecastingSection />
        <IntegratingAiCashFlowManagementSection />
        <MeasuringImpactForecastingFinancialHealthSection />
        <ToolsSection />
        <FAQSection />
        <SchedulerShell />
    </>
  );
}
