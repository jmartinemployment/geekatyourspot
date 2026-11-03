"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gtmClickId, gtmLinkId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import {
  BLOG_MENU,
  TOOLS_MENU,
  USE_CASES_MENU,
  type MenuDepartment,
  type SiteMenuConfiguration,
} from "@/data/navigation/site-menus";

type MenuSection = Readonly<{
  key: "use-cases" | "blog" | "tools";
  label: string;
  href: string;
  menu: SiteMenuConfiguration;
}>;

const SECTIONS: readonly MenuSection[] = [
  { key: "use-cases", label: "Use Cases", href: "/use-cases", menu: USE_CASES_MENU },
  { key: "blog", label: "Blog", href: "/blog", menu: BLOG_MENU },
  { key: "tools", label: "Tools", href: "/tools", menu: TOOLS_MENU },
];

const LINK_COLOURS = "text-black no-underline hover:text-[#8C2703]";

/** The two breakpoint blocks render the same links, so the block from lg up suffixes every id. */
type Block = "mobile" | "desktop";

function idSuffix(block: Block): string | undefined {
  return block === "desktop" ? "lg" : undefined;
}

function itemId(href: string, block: Block): string {
  return gtmLinkIdFromHref(href, block === "desktop" ? "nav-lg" : "nav");
}

function MenuDepartmentTree({
  department,
  sectionKey,
  block,
  onNavigate,
}: Readonly<{
  department: MenuDepartment;
  sectionKey: MenuSection["key"];
  block: Block;
  onNavigate: () => void;
}>): React.JSX.Element {
  return (
    <div className="min-w-0">
      <Link
        href={department.href}
        id={gtmLinkId(["nav", "department", sectionKey, department.id], idSuffix(block))}
        className={`block text-base font-bold leading-tight sm:text-lg ${LINK_COLOURS}`}
        onClick={onNavigate}
      >
        {department.name}
      </Link>
      <ul className="m-0 mt-2 list-none space-y-2 p-0">
        {department.categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.href}
              id={gtmLinkId(["nav", "category", category.id], idSuffix(block))}
              className={`block py-0.5 text-sm font-semibold leading-snug sm:text-base ${LINK_COLOURS}`}
              onClick={onNavigate}
            >
              {category.label}
            </Link>
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
        ))}
      </ul>
    </div>
  );
}

function MenuSectionHeading({
  section,
  block,
  onNavigate,
}: Readonly<{ section: MenuSection; block: Block; onNavigate: () => void }>): React.JSX.Element {
  return (
    <Link
      href={section.href}
      id={gtmLinkId(["nav", "section", section.key], idSuffix(block))}
      className={`block border-b border-black/10 pb-2 text-lg font-bold leading-tight sm:text-xl ${LINK_COLOURS}`}
      onClick={onNavigate}
    >
      {section.label}
    </Link>
  );
}

export default function Navbar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function closeMenu(): void {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-[60] bg-white shadow-sm">
      <div className="container">
        <nav className="w-full" aria-label="Site">
          <div className="flex h-16 w-full items-center">
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
        </nav>
      </div>

      <div
        hidden={!menuOpen}
        aria-hidden="true"
        className="fixed inset-x-0 bottom-0 top-16 bg-black/30"
        onClick={closeMenu}
      />

      <nav
        id="site-menu"
        aria-label="Site menu"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto overscroll-contain border-b border-black/10 bg-white shadow-md"
      >
        <div className="container py-4 sm:py-5">
          <Link
            href="/"
            id={gtmLinkIdFromHref("/", "nav")}
            className={`block pb-3 text-base font-semibold sm:text-lg ${LINK_COLOURS}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <div className="lg:hidden">
            {SECTIONS.map((section) => (
              <section key={section.key} className="mt-4">
                <MenuSectionHeading section={section} block="mobile" onNavigate={closeMenu} />
                <div className="mt-3 space-y-4">
                  {section.menu.departments.map((department) => (
                    <MenuDepartmentTree
                      key={department.id}
                      department={department}
                      sectionKey={section.key}
                      block="mobile"
                      onNavigate={closeMenu}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="hidden lg:block">
            {SECTIONS.map((section) => (
              <section key={section.key} className="mt-5">
                <MenuSectionHeading section={section} block="desktop" onNavigate={closeMenu} />
                <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-0">
                  {section.menu.departments.map((department) => (
                    <div
                      key={department.id}
                      className="min-w-0 border-l border-black/10 px-5 first:border-l-0 first:pl-0"
                    >
                      <MenuDepartmentTree
                        department={department}
                        sectionKey={section.key}
                        block="desktop"
                        onNavigate={closeMenu}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
