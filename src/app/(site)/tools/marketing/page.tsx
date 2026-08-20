import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFunnelDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getToolsByDepartment } from "@/lib/tools-mapper";
import type { ToolPageContent } from "@/types/tool";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Marketing AI Tools & Platforms";
const PAGE_DESCRIPTION =
  "Explore marketing automation and content creation tools that Geek at Your Spot helps South Florida small businesses implement — from email marketing to AI content generation.";

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
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/tools/marketing`,
    siteName: "Geek at Your Spot",
    locale: "en_US",
    images: [{ url: LOGO_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    images: [LOGO_IMAGE],
  },
};

function toolHref(tool: ToolPageContent): string {
  return `/tools/${tool.department}/${tool.slug}`;
}

export default function MarketingToolsPage() {
  const tools = getToolsByDepartment("marketing").sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const jsonLd = {
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
            url: `${SITE_URL}/tools/${tool.department}/${tool.slug}`,
          })),
        },
      },
      ...tools.map((tool) => ({
        "@type": "SoftwareApplication",
        name: tool.title,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: tool.description,
        url: `${SITE_URL}/tools/${tool.department}/${tool.slug}`,
      })),
    ],
  };

  return (
    <div className="bg-[rgb(2,48,89)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          help South Florida small businesses implement — from email marketing
          to AI-powered content creation.
        </p>

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={toolHref(tool)}
                className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
              >
                <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                  {tool.title}
                </h3>
                <p className="pt-3 text-md font-normal text-white/80">
                  {tool.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-md font-bold text-[#C83803]">
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
