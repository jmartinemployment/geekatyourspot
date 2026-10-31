import type { Metadata } from "next";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import ToolsDepartmentSections, { getToolCategories } from "@/components/tools/shared/tools-department-sections";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Operations Tools & Platforms";
const PAGE_DESCRIPTION =
  "Explore the data quality tools Geek @ Your Spot LLC helps South Florida small businesses implement, so the data feeding your AI is complete and accurate before it reaches an LLM.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI operations tools",
    "data quality assessments",
    "data validation",
    "data observability",
    "AI data readiness",
    "small business AI",
  ],
  alternates: {
    canonical: "/tools/ai-operations",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/tools/ai-operations`,
    siteName: "Geek @ Your Spot LLC",
    locale: "en_US",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

const PAGE_SUMMARY =
  "The data side of AI operations: the platforms we help South Florida small businesses use to validate, monitor, and clean the data that feeds their AI, so decisions rest on information that is complete and accurate.";

export default function AiOperationsToolsPage() {
  const categories = getToolCategories("ai-operations");
  const cards = categories.flatMap((category) => category.cards);

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: `${SITE_URL}/tools/ai-operations`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: cards.map((card, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}${card.href}`,
          })),
        },
      },
    ],
  };

  return (
    <div className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <ToolsHeroSection title={PAGE_TITLE} summary={PAGE_SUMMARY} icon={faDatabase} />
      <ToolsDepartmentSections categories={categories} />
      <SchedulerShell />
    </div>
  );
}
