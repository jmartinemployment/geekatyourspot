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

const jsonLd = {
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
            "datePublished": "2026-07-23T20:48:51.4443132Z",
            "dateModified": "2026-07-23T20:48:51.4443132Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
            },
            "keywords": "Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation",
            "wordCount": 3540,
            "@id": "https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting#article",
            "relatedLink": "https://geekatyourspot.com/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai",
            "mentions": [
                {
                    "@id": "#software-anaplan"
                },
                {
                    "@id": "#software-adaptiveinsights"
                },
                {
                    "@id": "#software-kyriba"
                },
                {
                    "@id": "#software-board"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Anaplan",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Anaplan is a comprehensive platform that offers cloud-native planning and performance management solutions. Its AI-driven capabilities facilitate dynamic and collaborative planning across various business functions, making it a powerful tool for cash flow forecasting.",
            "@id": "#software-anaplan"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Adaptive Insights",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Adaptive Insights is a business planning cloud platform that offers powerful tools for budgeting, forecasting, and reporting. Its intuitive interface and robust analytical capabilities make it an ideal solution for enhancing cash flow forecasting accuracy.",
            "@id": "#software-adaptiveinsights"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Kyriba",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Kyriba is a cloud-based treasury and finance solution that specializes in cash and liquidity management, offering sophisticated AI capabilities for cash flow forecasting. Its real-time data processing and predictive analytics are key features for financial teams.",
            "@id": "#software-kyriba"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Board",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Board is an AI-powered platform that combines business intelligence, performance management, and predictive analytics. It is particularly effective for cash flow forecasting due to its ability to unify data and deliver actionable insights.",
            "@id": "#software-board"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Cash Flow Forecasting",
    description: "Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.",
    keywords: ["Cash Flow Forecasting, Financial Management, AI Tools for Finance, ERP Integration, Forecasting Strategies, Invoice Processing, Accounts Payable Automation, Financial Operations Transformation, Change Management, AI Implementation"],
    authors: [{ name: 'Geek at Your Spot', url: 'https://geekatyourspot.com/' }],
    creator: 'Geek at Your Spot Llc',
    publisher: 'Geek at Your Spot Llc',
    metadataBase: new URL('https://geekatyourspot.com'),
    alternates: {
      canonical: '/cash-flow-forecasting/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting',
    },
    openGraph: {
      title: "Cash Flow Forecasting",
      description: 'Explore comprehensive strategies and AI tools to enhance cash flow forecasting for optimal financial management.',
      url: 'https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting',
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
      title: "Cash Flow Forecasting",
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
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: 'Geek at Your Spot',
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
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
