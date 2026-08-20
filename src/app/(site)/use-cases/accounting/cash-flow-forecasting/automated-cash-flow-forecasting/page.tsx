import type { Metadata } from "next";
// import { TechArticle, WithContext } from 'schema-dts';
import SharedHeroSection from "@/components/shared/shared-hero-section";
import IntroductionSection from '@/components/use-cases/accounting/cash-flow-forecasting/introduction-section'
import OverviewSection from '@/components/use-cases/accounting/cash-flow-forecasting/overview-section'
import KeyStrategiesAccurateForecastingSection from "@/components/use-cases/accounting/cash-flow-forecasting/key-strategies-accurate-forecasting-section";
import IntegratingAiCashFlowManagementSection from "@/components/use-cases/accounting/cash-flow-forecasting/integrating-ai-cash-flow-management";
import MeasuringImpactForecastingFinancialHealthSection from "@/components/use-cases/accounting/cash-flow-forecasting/measuring-impact-forecasting-financial-health"
import ToolsSection from '@/components/use-cases/accounting/cash-flow-forecasting/tools-section'
import FAQSection from "@/components/use-cases/accounting/cash-flow-forecasting/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Cash Flow Forecasting",
        "description": "Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.",
        "image": [
          "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
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
            "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
          }
        },
        "datePublished": "2026-07-23T20:48:51.4443132Z",
        "dateModified": "2026-07-23T20:48:51.4443132Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting"
        },
        "keywords": "Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation",
        "wordCount": 3540,
        "proficiencyLevel": "Beginner",
        "citation": [
          {
            "@type": "BlogPosting",
            "url": "https://geekatyourspot.com/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Anaplan",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Anaplan is a comprehensive platform that offers cloud-native planning and performance management solutions. Its AI-driven capabilities facilitate dynamic and collaborative planning across various business functions, making it a powerful tool for cash flow forecasting.",
        "url": "https://geekatyourspot.com/tools/accounting/anaplan"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Adaptive Insights",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Adaptive Insights is a business planning cloud platform that offers powerful tools for budgeting, forecasting, and reporting. Its intuitive interface and robust analytical capabilities make it an ideal solution for enhancing cash flow forecasting accuracy.",
        "url": "https://geekatyourspot.com/tools/accounting/adaptive-insights"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Kyriba",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Kyriba is a cloud-based treasury and finance solution that specializes in cash and liquidity management, offering sophisticated AI capabilities for cash flow forecasting. Its real-time data processing and predictive analytics are key features for financial teams.",
        "url": "https://geekatyourspot.com/tools/accounting/kyriba"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Board",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Board is an AI-powered platform that combines business intelligence, performance management, and predictive analytics. It is particularly effective for cash flow forecasting due to its ability to unify data and deliver actionable insights.",
        "url": "https://geekatyourspot.com/tools/accounting/board"
      }
    ]
  };
  return {
    title: {
      default: 'Geek at Your Spot',
      template: 'Geek at Your Spot', // Appends to child page titles automatically
    },
    description: "Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.",
    keywords: ["Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation"],
    authors: [{ name: 'Geek at Your Spot', url: 'https://geekatyourspot.com/' }],
    creator: 'Geek at Your Spot Llc',
    publisher: 'Geek at Your Spot Llc',
    metadataBase: new URL('https://geekatyourspot.com'),
    alternates: {
      canonical: '/cash-flow-forecasting/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting',
      languages: {
        'en-US': '/en-US',
        'es-ES': '/es-ES',
      },
    },
    openGraph: {
      title: 'Geek at Your Spot | Automated Cash Flow Forecasting',
      description: 'Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.',
      url: 'https://geekatyourspot.com/',
      siteName: 'Geek at Your Spot',
      locale: 'en_US',
      type: 'article',
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
      title: 'Geek at Your Spot | automated cash flow forecasting',
      description: 'Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.',
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
      google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
      yandex: 'yandex-verification-token',
      yahoo: 'yahoo-verification-token',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/shortcut-icon.png',
      apple: '/apple-icon.png',
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
  const title = "Automated Cash Flow Forecasting";
  const heroSummary = "Master cash flow forecasting with innovative strategies and AI-driven insights for better financial management."
  const heroImage = "/images/accounting/use-cases/cash-flow-forecasting/cash-flow-forecasting-pillar-hero.avif";
  const imgAlt = "Automated cash flow forecasting"
  return (
    <>
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
