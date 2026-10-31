"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { gtmClickId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import {
  BLOG_MENU,
  TOOLS_MENU,
  USE_CASES_MENU,
  type MenuCategory,
  type MenuDepartment,
} from "@/data/navigation/site-menus";

type MenuSection = "use-cases" | "blog" | "tools";

function MenuHeading({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <Link
      href={href}
      id={gtmLinkIdFromHref(href, "nav-dept")}
      className="block text-base font-bold leading-tight text-black no-underline hover:text-[#8C2703] sm:text-lg"
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function MenuLink({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <li>
      <Link
        href={href}
        id={gtmLinkIdFromHref(href, "nav")}
        className="block text-xs leading-snug text-black no-underline hover:text-[#8C2703] sm:text-sm"
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  );
}

const COLUMN_CLASS =
  "min-w-0 px-0 md:px-6 md:first:pl-0 md:last:pr-0 [&:not(:first-child)]:mt-4 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-black/10 [&:not(:first-child)]:pt-4 md:[&:not(:first-child)]:mt-0 md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pt-0";

const LIST_CLASS = "m-0 mt-2 list-none space-y-1 p-0";

/** How a category was chosen: a mouse hover or click opens it, a tap or a key toggles it. */
type CategoryInput = "pointer" | "toggle";

function MenuCategoryButton({
  category,
  open,
  onSelect,
}: Readonly<{
  category: MenuCategory;
  open: boolean;
  onSelect: (id: string, input: CategoryInput) => void;
}>): React.JSX.Element {
  // A tap fires pointerdown before click, so the click knows whether a finger or a mouse sent it.
  const pointerType = useRef("");

  return (
    <button
      type="button"
      id={gtmClickId(["nav", "category", category.id])}
      aria-expanded={open}
      className={clsx(
        "flex w-full cursor-pointer items-center justify-between gap-x-2 border-0 bg-transparent p-0 py-0.5 text-left text-sm font-semibold leading-snug no-underline sm:text-base",
        open ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]",
      )}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onSelect(category.id, "pointer");
      }}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType;
      }}
      onClick={() => {
        const input: CategoryInput = pointerType.current === "mouse" ? "pointer" : "toggle";
        pointerType.current = "";
        onSelect(category.id, input);
      }}
    >
      <span>{category.label}</span>
      <svg
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className={clsx("shrink-0 transition-transform", open && "rotate-90")}
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );
}

/**
 * A category shows its pages on hover with a mouse and on tap on a touch screen. Below lg its pages
 * open under it; from lg up they open beside the category list, so hovering one never moves the
 * others.
 */
function MenuDepartmentColumn({
  department,
  openCategory,
  onSelect,
  onNavigate,
}: Readonly<{
  department: MenuDepartment;
  openCategory: string | null;
  onSelect: (id: string, input: CategoryInput) => void;
  onNavigate: () => void;
}>): React.JSX.Element {
  const open = department.categories.find((category) => category.id === openCategory);

  return (
    <div className={COLUMN_CLASS}>
      <MenuHeading href={department.href} label={department.label} onNavigate={onNavigate} />
      <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-6">
        <ul className={LIST_CLASS}>
          {department.categories.map((category) => (
            <li key={category.id}>
              <MenuCategoryButton
                category={category}
                open={category.id === openCategory}
                onSelect={onSelect}
              />
              {category.id === openCategory && (
                <ul className={clsx(LIST_CLASS, "mb-2 pl-3 lg:hidden")}>
                  {category.items.map((item) => (
                    <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
                  ))}
                </ul>
              )}
            </li>
          ))}
          {department.items.map((item) => (
            <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
          ))}
        </ul>
        {open && (
          <ul className={clsx(LIST_CLASS, "hidden lg:block")}>
            {open.items.map((item) => (
              <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Navbar(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<MenuSection>("use-cases");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  function closeSidebar(): void {
    setSidebarOpen(false);
    setOpenCategory(null);
  }

  function showSection(section: MenuSection): void {
    setActiveSection(section);
    setOpenCategory(null);
  }

  function selectCategory(id: string, input: CategoryInput): void {
    setOpenCategory((current) => (input === "toggle" && current === id ? null : id));
  }

  function sectionButtonClass(section: MenuSection): string {
    return `cursor-pointer border-0 bg-transparent p-0 text-base font-semibold no-underline sm:text-lg ${
      activeSection === section ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]"
    }`;
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
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              aria-controls="site-menu"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                {sidebarOpen ? (
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

      <Sheet
        open={sidebarOpen}
        onOpenChange={(open) => {
          setSidebarOpen(open);
          if (!open) setOpenCategory(null);
        }}
      >
        <SheetContent
          id="site-menu"
          side="top"
          showCloseButton={false}
          className="!inset-x-0 !top-16 !bottom-auto !h-auto !w-full !max-w-none gap-0 overflow-hidden border-x-0 border-b border-t-0 bg-white p-0 text-foreground shadow-md"
        >
          <SheetTitle className="sr-only">Site menu</SheetTitle>

          <nav className="container max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto py-4 sm:py-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/10 pb-3 sm:gap-x-8 sm:pb-4">
              <Link
                href="/"
                id={gtmLinkIdFromHref("/", "nav")}
                className="text-base font-semibold text-black no-underline hover:text-[#8C2703] sm:text-lg"
                onClick={closeSidebar}
              >
                Home
              </Link>
              <button
                type="button"
                id={gtmClickId(["nav", "use-cases"])}
                className={sectionButtonClass("use-cases")}
                onClick={() => showSection("use-cases")}
              >
                Use Cases
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "blog"])}
                className={sectionButtonClass("blog")}
                onClick={() => showSection("blog")}
              >
                Blog
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "tools"])}
                className={sectionButtonClass("tools")}
                onClick={() => showSection("tools")}
              >
                Tools
              </button>
            </div>

            {activeSection === "use-cases" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {USE_CASES_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}

            {activeSection === "blog" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {BLOG_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}

            {activeSection === "tools" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {TOOLS_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
