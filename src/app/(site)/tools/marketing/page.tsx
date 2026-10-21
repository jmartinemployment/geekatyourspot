import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFunnelDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getToolsByDepartment } from "@/lib/tools-mapper";
import type { ToolPageContent } from "@/types/tool";
import { toolCardLabel } from "@/data/navigation/site-menus";
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

function toolHref(tool: ToolPageContent): string {
  return tool.useCase
    ? `/tools/${tool.department}/${tool.useCase}/${tool.slug}`
    : `/tools/${tool.department}/${tool.slug}`;
}

/**
 * The registry also catalogues tools whose page has not been built yet
 * (see plans/tools-directory-structure.md, "Known inconsistencies"). Listing
 * those would send readers to 404s, so only tools whose route exists are
 * rendered. The check runs at build time against the app directory.
 */
function hasPage(tool: ToolPageContent): boolean {
  return fs.existsSync(
    path.join(process.cwd(), "src", "app", "(site)", ...toolHref(tool).split("/").filter(Boolean), "page.tsx")
  );
}

export default function MarketingToolsPage() {
  // A tool with more than one page is named with its use on its card, as in "Bill for Data Entry".
  const tools = getToolsByDepartment("marketing")
    .filter(hasPage)
    .flatMap((tool) => {
      const label = toolCardLabel(toolHref(tool));
      return label ? [{ ...tool, title: label }] : [];
    })
    .sort((a, b) => a.title.localeCompare(b.title));

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
          itemListElement: tools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}${toolHref(tool)}`,
          })),
        },
      },
    ],
  };

  return (
    <div className="bg-[rgb(2,48,89)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <section className="container py-16 lg:py-24">
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            icon={faFunnelDollar}
            width={64}
            height={64}
            className="text-[#C83803]"
          />
          <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text text-[9vw] sm:text-6xl lg:text-[4.0rem]">
            Marketing &amp; Content
          </h1>
        </div>
        <p className="pt-5 max-w-3xl text-xl text-white shadow-text lg:text-2xl">
          Automate your marketing and content operations with the platforms we
          help South Florida small businesses implement, from email marketing
          to AI-powered content creation.
        </p>

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={toolHref(tool)}
                href={toolHref(tool)}
                className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
              >
                <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                  {tool.title}
                </h3>
                <p className="pt-3 text-base font-normal text-white/80">
                  {tool.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-base font-bold text-[#C83803]">
                  Learn more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
