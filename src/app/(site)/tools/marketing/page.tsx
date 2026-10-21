import type { Metadata } from "next";
import { faFunnelDollar } from "@fortawesome/free-solid-svg-icons";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import ToolsDepartmentSections, { getToolCategories } from "@/components/tools/shared/tools-department-sections";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Marketing AI Tools & Platforms";
const PAGE_DESCRIPTION =
  "Explore the marketing tools Geek @ Your Spot LLC helps South Florida small businesses implement, from email marketing to AI content generation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "marketing tools",
    "marketing automation",
    "email marketing",
    "content creation",
    "AI marketing",
    "small business marketing",
  ],
  alternates: {
    canonical: "/tools/marketing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/tools/marketing`,
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
  "Automate your marketing and content operations with the platforms we help South Florida small businesses implement, from email marketing to AI-powered content creation.";

export default function MarketingToolsPage() {
  const categories = getToolCategories("marketing");
  const cards = categories.flatMap((category) => category.cards);

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: `${SITE_URL}/tools/marketing`,
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
      <ToolsHeroSection title={PAGE_TITLE} summary={PAGE_SUMMARY} icon={faFunnelDollar} />
      <ToolsDepartmentSections categories={categories} />
      <SchedulerShell />
    </div>
  );
}
