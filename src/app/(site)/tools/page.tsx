import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAllTools } from "@/lib/tools-mapper";
import { DEPARTMENT_ICONS, DepartmentName } from "@/types/department";
import type { ToolPageContent } from "@/types/tool";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "AI Tools & Platforms";
const PAGE_DESCRIPTION =
  "Explore the AI tools and platforms Geek at Your Spot helps South Florida small businesses implement — from accounts payable automation to marketing systems.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI tools",
    "AI platforms",
    "marketing automation",
    "accounts payable automation",
    "small business AI",
    "South Florida",
  ],
  alternates: {
    canonical: "/tools",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/tools`,
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

function formatDepartment(department: string): string {
  return department
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ToolsPage() {
  const tools = getAllTools();

  const toolsByDepartment = tools.reduce<Record<string, ToolPageContent[]>>(
    (acc, tool) => {
      (acc[tool.department] ??= []).push(tool);
      return acc;
    },
    {},
  );

  const departments = Object.keys(toolsByDepartment).sort();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: `${SITE_URL}/tools`,
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
    <div className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolsHeroSection
        title="AI Tools &amp; Platforms"
        summary="These are the platforms we help South Florida small businesses implement — set up, integrated, and automated so you see value faster and skip the failed pilots."
      />
      <section className="container py-16 lg:py-24 bg-[rgb(2,48,89)]">

        {departments.map((department) => (
          <div key={department} className="pt-14">
            <Link
              href={`/tools/${department}`}
              className="group flex items-center gap-x-3 border-b border-white/15 pb-4"
            >
              <FontAwesomeIcon
                icon={DEPARTMENT_ICONS[department as DepartmentName]}
                width={32}
                height={32}
                className="text-[#C83803]"
              />
              <h2 className="text-3xl font-black font-(--font-sora) text-white shadow-text lg:text-4xl group-hover:underline">
                {formatDepartment(department)}
              </h2>
              <FontAwesomeIcon
                icon={faArrowRight}
                width={20}
                height={20}
                className="text-[#C83803] transition-transform group-hover:translate-x-1"
              />
            </Link>

            <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {toolsByDepartment[department].map((tool) => (
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
        ))}
      </section>
    </div>
  );
}
