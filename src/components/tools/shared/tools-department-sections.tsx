import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getToolsByDepartment } from "@/lib/tools-mapper";
import type { ToolPageContent } from "@/types/tool";
import { TOOLS_MENU, toolCardLabel } from "@/data/navigation/site-menus";

/** Site section rotation, as literal classes so Tailwind can see them. */
const SECTION_BACKGROUNDS = ["bg-[#023059]", "bg-[#024059]", "bg-[#025E73]", "bg-[#8C4E2A]", "bg-[#BF5934]"] as const;

export function toolHref(tool: ToolPageContent): string {
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
function hasPage(href: string): boolean {
  return fs.existsSync(
    path.join(process.cwd(), "src", "app", "(site)", ...href.split("/").filter(Boolean), "page.tsx")
  );
}

export type ToolCard = { href: string; title: string; description: string };
export type ToolCategory = { id: string; label: string; cards: ToolCard[] };

/**
 * A department's tools, grouped by the same categories the navbar's Tools menu uses, in menu
 * order. A tool with more than one page is named with its use on its card, as in "Bill for Data
 * Entry".
 */
export function getToolCategories(department: string): ToolCategory[] {
  const menu = TOOLS_MENU.find((entry) => entry.href === `/tools/${department}`);
  if (!menu) return [];
  const byHref = new Map(getToolsByDepartment(department).map((tool) => [toolHref(tool), tool]));
  return menu.categories
    .map((category) => ({
      id: category.id,
      label: category.label,
      cards: category.items.flatMap((item) => {
        const tool = byHref.get(item.href);
        const title = toolCardLabel(item.href);
        if (!tool || !title || !hasPage(item.href)) return [];
        return [{ href: item.href, title, description: tool.description }];
      }),
    }))
    .filter((category) => category.cards.length > 0);
}

/** One section per category, each with its H2 and its tool cards, colours in H2 order. */
export default function ToolsDepartmentSections({ categories }: Readonly<{ categories: ToolCategory[] }>) {
  return (
    <>
      {categories.map((category, index) => {
        const background = SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
        return (
          <section key={category.id} className={`min-h-screen ${background} text-white py-5`}>
            <div className="container">
              <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
                <div className="col-span-12">
                  <h2
                    id={category.id}
                    className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text"
                  >
                    {category.label}
                  </h2>

                  <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
                    {category.cards.map((card) => (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
                      >
                        <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                          {card.title}
                        </h3>
                        <p className="pt-3 text-base font-normal text-white/80">
                          {card.description}
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
    </>
  );
}
