"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faNewspaper, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { gtmClickId, gtmLinkId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { DEPARTMENT_ICONS, type DepartmentName } from "@/types/department";
import {
  BLOG_MENU,
  TOOLS_MENU,
  USE_CASES_MENU,
  type MenuDepartment,
  type SiteMenuConfiguration,
} from "@/data/navigation/site-menus";

// Font Awesome adds its own stylesheet to the page by default, and that stylesheet resizes every icon
// on the site, including the 256px department icons on the home page. Off, each icon keeps the width
// and height it is given, so every FontAwesomeIcon here sets its size.
config.autoAddCss = false;

type MenuSection = Readonly<{
  key: "blog" | "tools" | "use-cases";
  label: string;
  icon: IconDefinition;
  menu: SiteMenuConfiguration;
}>;

/** The columns of a department's panel, alphabetical. Comparisons goes between Blog and Tools once it has pages. */
const SECTIONS: readonly MenuSection[] = [
  { key: "blog", label: "Blog", icon: faNewspaper, menu: BLOG_MENU },
  { key: "tools", label: "Tools", icon: faScrewdriverWrench, menu: TOOLS_MENU },
  { key: "use-cases", label: "Use Cases", icon: faLightbulb, menu: USE_CASES_MENU },
];

type DepartmentTab = Readonly<{ id: string; name: string; icon: IconDefinition }>;

function departmentIcon(id: string): IconDefinition {
  if (!(id in DEPARTMENT_ICONS)) {
    throw new Error(`Navbar: department "${id}" has no icon in DEPARTMENT_ICONS (src/types/department.ts)`);
  }
  return DEPARTMENT_ICONS[id as DepartmentName];
}

function buildTabs(): readonly DepartmentTab[] {
  const names = new Map<string, string>();
  for (const section of SECTIONS) {
    for (const department of section.menu.departments) names.set(department.id, department.name);
  }
  return [...names]
    .map(([id, name]) => ({ id, name, icon: departmentIcon(id) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const TABS = buildTabs();

const LINK_COLOURS = "text-black no-underline hover:text-[#8C2703]";

/** The two breakpoint blocks render the same links, so the block from md up suffixes every id. */
type Block = "mobile" | "desktop";

const COLUMN_CLASS: Record<Block, string> = {
  mobile: "min-w-0 border-t border-black/10 py-4 first:border-t-0 first:pt-0",
  desktop: "min-w-0 border-l border-black/10 px-5 first:border-l-0 first:pl-0",
};

function idSuffix(block: Block): string | undefined {
  return block === "desktop" ? "lg" : undefined;
}

function itemId(href: string, block: Block): string {
  return gtmLinkIdFromHref(href, block === "desktop" ? "nav-lg" : "nav");
}

function MenuColumn({
  section,
  department,
  block,
  onNavigate,
}: Readonly<{
  section: MenuSection;
  department: MenuDepartment;
  block: Block;
  onNavigate: () => void;
}>): React.JSX.Element {
  return (
    <div className={COLUMN_CLASS[block]}>
      <Link
        href={department.href}
        id={gtmLinkId(["nav", "department", section.key, department.id], idSuffix(block))}
        className={`flex items-center gap-2 text-base font-bold leading-tight sm:text-lg ${LINK_COLOURS}`}
        onClick={onNavigate}
      >
        <FontAwesomeIcon icon={section.icon} width={16} height={16} className="shrink-0 text-[#C83803]" />
        {section.label}
      </Link>
      <ul className="m-0 mt-3 list-none space-y-2 p-0">
        {department.categories.map((category) => {
          // A category whose href is its department's page has no page of its own, so it is a heading, not a link.
          const hasPage = category.href !== department.href;
          return (
            <li key={category.id}>
              {hasPage ? (
                <Link
                  href={category.href}
                  id={gtmLinkId(["nav", "category", category.id], idSuffix(block))}
                  className={`block py-0.5 text-sm font-semibold leading-snug sm:text-base ${LINK_COLOURS}`}
                  onClick={onNavigate}
                >
                  {category.label}
                </Link>
              ) : (
                <span className="block py-0.5 text-sm font-semibold leading-snug text-black sm:text-base">
                  {category.label}
                </span>
              )}
              {category.items.length > 0 && (
                <ul className="m-0 mt-1 list-none space-y-1 p-0 pl-3">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        id={itemId(item.href, block)}
                        className={`block text-xs leading-snug sm:text-sm ${LINK_COLOURS}`}
                        onClick={onNavigate}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DepartmentPanel({
  tab,
  block,
  onNavigate,
}: Readonly<{ tab: DepartmentTab; block: Block; onNavigate: () => void }>): React.JSX.Element {
  const columns = SECTIONS.flatMap((section) => {
    const department = section.menu.departments.find((candidate) => candidate.id === tab.id);
    return department ? [{ section, department }] : [];
  });

  if (columns.length === 0) {
    return <p className="m-0 text-sm sm:text-base">{tab.name} pages are coming soon.</p>;
  }

  return (
    <div className={block === "desktop" ? "grid grid-flow-col auto-cols-fr" : undefined}>
      {columns.map(({ section, department }) => (
        <MenuColumn
          key={section.key}
          section={section}
          department={department}
          block={block}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

export default function Navbar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(TABS[0].id);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    // The page scrolls on <html>, not <body>, so both are locked while the menu is open.
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
    };
  }, [menuOpen]);

  function closeMenu(): void {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-[60] h-16 border-b border-black/10 bg-white shadow-sm">
        <div className="container h-full">
          <div className="flex h-full w-full items-center">
            <Link href="/" id={gtmLinkIdFromHref("/", "logo")} className="flex items-center">
              <Image
                src="/images/GeekAtYourSpot.svg"
                alt="Geek @ Your Spot LLC logo"
                width={116}
                height={48}
                priority
              />
            </Link>
            <button
              id={gtmClickId(["nav", "menu-toggle"])}
              type="button"
              className="ml-auto cursor-pointer rounded border-0 bg-transparent p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                {menuOpen ? (
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <nav
        id="site-menu"
        aria-label="Site menu"
        hidden={!menuOpen}
        className="fixed inset-x-0 top-16 z-[60] max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto overscroll-contain border-b border-black/10 bg-white shadow-md"
      >
        <div className="container pb-4 sm:pb-5">
          <div
            role="group"
            aria-label="Departments"
            className="sticky top-0 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-black/10 bg-white py-3 sm:gap-x-8"
          >
            {TABS.map((tab) => {
              const selected = tab.id === selectedId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  id={gtmClickId(["nav", "department", tab.id])}
                  aria-pressed={selected}
                  className={`flex cursor-pointer items-center gap-2 border-0 border-b-2 bg-transparent p-0 pb-0.5 text-base font-semibold sm:text-lg ${
                    selected
                      ? "border-[#C83803] text-[#8C2703]"
                      : "border-transparent text-black hover:text-[#8C2703]"
                  }`}
                  onClick={() => setSelectedId(tab.id)}
                >
                  <FontAwesomeIcon icon={tab.icon} width={16} height={16} className="shrink-0" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-4 w-fit max-w-full md:hidden">
            {TABS.map((tab) => (
              <div key={tab.id} hidden={tab.id !== selectedId}>
                <DepartmentPanel tab={tab} block="mobile" onNavigate={closeMenu} />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-5 hidden w-fit max-w-full md:block">
            {TABS.map((tab) => (
              <div key={tab.id} hidden={tab.id !== selectedId}>
                <DepartmentPanel tab={tab} block="desktop" onNavigate={closeMenu} />
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div
        hidden={!menuOpen}
        aria-hidden="true"
        className="fixed inset-x-0 bottom-0 top-16 z-[59] bg-black/30"
        onClick={closeMenu}
      />
    </>
  );
}
