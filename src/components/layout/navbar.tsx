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

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const megaMenuHrefs = ["/use-cases", "/blog", "/tools"];


export default function Navbar(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/use-cases");


  function closeSidebar(): void {
    setSidebarOpen(false);
  }


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


        </SheetContent>
      </Sheet>
    </header>
  );
}
