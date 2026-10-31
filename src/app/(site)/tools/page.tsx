import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAllTools } from "@/lib/tools-mapper";
import { DEPARTMENT_ICONS, DepartmentName } from "@/types/department";
import type { ToolPageContent } from "@/types/tool";
import { toolCardLabel } from "@/data/navigation/site-menus";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Tools & Platforms";
const PAGE_DESCRIPTION =
  "Explore the AI tools and platforms Geek @ Your Spot LLC helps South Florida small businesses implement, from accounts payable automation to marketing systems.";

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
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/tools`,
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

/** Site section rotation, as literal classes so Tailwind can see them. */
const SECTION_BACKGROUNDS = ["bg-[#023059]", "bg-[#024059]", "bg-[#025E73]", "bg-[#8C4E2A]", "bg-[#BF5934]"] as const;

function formatDepartment(department: string): string {
  return department
    .split("-")
    .map((word) => (word === "ai" ? "AI" : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

export default function ToolsPage() {
  // A tool with more than one page is named with its use on its card, as in "Bill for Data Entry".
  const tools = getAllTools()
    .filter(hasPage)
    .flatMap((tool) => {
      const label = toolCardLabel(toolHref(tool));
      return label ? [{ ...tool, title: label }] : [];
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const toolsByDepartment = tools.reduce<Record<string, ToolPageContent[]>>(
    (acc, tool) => {
      (acc[tool.department] ??= []).push(tool);
      return acc;
    },
    {},
  );

  const departments = Object.keys(toolsByDepartment).sort();

  const jsonLd: Graph = {
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
            url: `${SITE_URL}${toolHref(tool)}`,
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
      <ToolsHeroSection
        title="AI Tools &amp; Platforms"
        summary="These are the platforms we help South Florida small businesses implement. Each one is set up, integrated, and automated so you see value faster and skip the failed pilots."
      />
      {departments.map((department, index) => {
        const background = SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
        return (
          <section key={department} className={`min-h-screen ${background} text-white py-5`}>
            <div className="container">
              <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
                <div className="col-span-12">
                  <Link
                    href={`/tools/${department}`}
                    className="group inline-flex items-center gap-x-4 hover:underline"
                  >
                    <FontAwesomeIcon
                      icon={DEPARTMENT_ICONS[department as DepartmentName]}
                      width={48}
                      height={48}
                      className="text-[#C83803]"
                    />
                    <h2
                      id={department}
                      className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text"
                    >
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
              </div>
            </div>
          </section>
        );
      })}

      <SchedulerShell />
    </div>
  );
}
