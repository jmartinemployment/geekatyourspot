"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { gtmClickId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { formatDepartmentLabel, HOME_DEPARTMENTS } from "@/lib/departments";

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Use Cases",
    href: "/use-cases",
    children: HOME_DEPARTMENTS.map((slug) => ({
      label: formatDepartmentLabel(slug),
      href: `/use-cases/${slug}`,
    })),
  },
  {
    label: "Blog",
    href: "/blog",
    children: HOME_DEPARTMENTS.map((slug) => ({
      label: formatDepartmentLabel(slug),
      href: `/blog/${slug}`,
    })),
  },
  {
    label: "Tools",
    href: "/tools",
    children: HOME_DEPARTMENTS.map((slug) => ({
      label: formatDepartmentLabel(slug),
      href: `/tools/${slug}`,
    })),
  },
];

const megaMenuHrefs = ["/use-cases", "/blog", "/tools"];

function DepartmentColumn({
  department,
  onNavigate,
}: Readonly<{
  department: NavLink;
  onNavigate: () => void;
}>): React.JSX.Element {
  const useCaseCount = department.children?.length ?? 0;
  const useTwoColumns = useCaseCount > 3;

  return (
    <div className="min-w-0 border-black/10 px-0 first:pl-0 last:pr-0 md:px-4 md:first:pl-0 md:last:pr-0 lg:px-6 lg:first:pl-0 lg:last:pr-0 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-4 md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pt-0">
      <Link
        href={department.href}
        id={gtmLinkIdFromHref(department.href, "nav-dept")}
        className="block text-base font-bold text-black no-underline leading-tight hover:text-[#8C2703] sm:text-lg"
        onClick={onNavigate}
      >
        {department.label}
      </Link>
      {department.children && department.children.length > 0 && (
        <ul
          className={
            useTwoColumns
              ? "m-0 mt-2 list-none space-y-1 p-0 columns-2 gap-x-4"
              : "m-0 mt-2 list-none space-y-1 p-0"
          }
        >
          {department.children.map((useCase) => (
            <li
              key={`${useCase.href}-${useCase.label}`}
              className={useTwoColumns ? "break-inside-avoid" : undefined}
            >
              <Link
                href={useCase.href}
                id={gtmLinkIdFromHref(useCase.href, "nav")}
                className="block text-xs leading-snug text-black no-underline hover:text-[#8C2703] sm:text-sm"
                onClick={onNavigate}
              >
                {useCase.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar(): React.JSX.Element {
  const navLinks = NAV_LINKS;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/use-cases");

  const megaMenuSections = navLinks.filter((link) => megaMenuHrefs.includes(link.href));
  const topLevelLinks = navLinks.filter((link) => !megaMenuHrefs.includes(link.href));

  function closeSidebar(): void {
    setSidebarOpen(false);
  }

  const activeMega = megaMenuSections.find((section) => section.href === activeSection);

  return (
    <header className="sticky top-0 z-[60] bg-white shadow-sm">
      <div className="container">
        <nav className="w-full" aria-label="Site">
          <div className="flex h-16 w-full items-center">
            <Link href="/" id={gtmLinkIdFromHref("/", "logo")} className="flex items-center">
              <Image
                src="/images/GeekAtYourSpot.svg"
                alt="Geek @ Your Spot logo"
                width={116}
                height={48}
                priority
              />
            </Link>
            <button
              id={gtmClickId(["nav", "menu-toggle"])}
              type="button"
              className="hidden ml-auto cursor-pointer rounded border-0 bg-transparent p-2"
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

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent
          id="site-menu"
          side="top"
          showCloseButton={false}
          className="!inset-x-0 !top-16 !bottom-auto !h-auto !w-full !max-w-none gap-0 overflow-hidden border-x-0 border-b border-t-0 bg-white p-0 text-foreground shadow-md data-ending-style:translate-y-0 data-starting-style:translate-y-0"
        >
          <SheetTitle className="sr-only">Site menu</SheetTitle>

          <nav className="container overflow-hidden py-4 sm:py-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/10 pb-3 sm:gap-x-8 sm:pb-4">
              {topLevelLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  id={gtmLinkIdFromHref(link.href, "nav")}
                  className="text-base font-semibold text-black no-underline hover:text-[#8C2703] sm:text-lg"
                  onClick={closeSidebar}
                >
                  {link.label}
                </Link>
              ))}
              {megaMenuSections.map((section) => (
                <button
                  key={section.href}
                  type="button"
                  id={gtmClickId(["nav", section.href.replace("/", "")])}
                  className={`cursor-pointer border-0 bg-transparent p-0 text-base font-semibold no-underline sm:text-lg ${
                    activeSection === section.href ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]"
                  }`}
                  onClick={() => setActiveSection(section.href)}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {activeMega?.children && activeMega.children.length > 0 && (
              <div className="mt-4 grid grid-cols-1 gap-0 md:mt-5 md:grid-cols-2 lg:grid-cols-5">
                {activeMega.children.map((department) => (
                  <DepartmentColumn
                    key={`${department.href}-${department.label}`}
                    department={department}
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
