"use client";

import Image from "next/image";
import Link from "next/link";
import { gtmLinkId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";

/**
 * Links to every index page. The navbar builds its links in the browser only after the menu
 * opens, so search engines reach these pages through this column and nowhere else.
 */
const HUB_GROUPS = [
  {
    label: "Use Cases",
    links: [
      { label: "All Use Cases", href: "/use-cases" },
      { label: "Marketing Use Cases", href: "/use-cases/marketing" },
      { label: "Accounting Use Cases", href: "/use-cases/accounting" },
    ],
  },
  {
    label: "Tools",
    links: [
      { label: "All Tools", href: "/tools" },
      { label: "Marketing Tools", href: "/tools/marketing" },
      { label: "Accounting Tools", href: "/tools/accounting" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
] as const;

function HubGroup({
  group,
  idSuffix = "",
}: Readonly<{ group: (typeof HUB_GROUPS)[number]; idSuffix?: string }>) {
  return (
    <div className="pb-4">
      <h2 className="text-white text-base shadow-text font-bold uppercase">
        {group.label}
      </h2>
      <ul>
        {group.links.map((link) => (
          <li key={link.href} className="py-1">
            <Link
              id={`${gtmLinkIdFromHref(link.href, "footer")}${idSuffix}`}
              href={link.href}
              className="font-bold text-white text-sm hover:text-[#c83803] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const brand = (idSuffix = "") => (
    <>
      <Link href="/" id={`${gtmLinkIdFromHref("/", "footer-logo")}${idSuffix}`} className="py-5">
        <Image
          src="/images/GeekAtYourSpotWhite.svg"
          alt="Geek @ Your Spot LLC"
          width={116}
          height={48}
        />
      </Link>
      <p className="text-white text-base shadow-text py-5">
        Design and build AI implementation and automation architectures
        for brands that refuse to settle for average.
      </p>
      <div className="flex">
        <span className="pe-5">
          <a
            id={`${gtmLinkId(["social", "facebook"])}${idSuffix}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Geek @ Your Spot LLC on Facebook"
            className="inline-block w-8 h-8 items-center justify-center transition-all duration-300 cursor-pointer group"
            href="https://www.facebook.com/GeekAtYourSpot/"
          >
            <svg
              className="w-8 h-8 group-hover:scale-110 transition-transform"
              fill="#c83803"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </span>
        <span className="px-5">
          <a
            id={`${gtmLinkId(["social", "linkedin"])}${idSuffix}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Geek @ Your Spot LLC on LinkedIn"
            className="inline-block w-8 h-8 items-center justify-center transition-all duration-300 cursor-pointer group"
            href="https://www.linkedin.com/company/geekatyourspot"
          >
            <svg
              className="w-7 h-8 group-hover:scale-110 transition-transform"
              fill="#c83803"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </span>
        <span className="ps-5">
          <a
            id={`${gtmLinkId(["social", "instagram"])}${idSuffix}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Geek @ Your Spot LLC on Instagram"
            className="inline-block w-8 h-8 items-center justify-center transition-all duration-300 cursor-pointer group"
            href="https://www.instagram.com/geekatyourspot"
          >
            <svg
              className="w-8 h-8 group-hover:scale-110 transition-transform"
              fill="#c83803"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.351-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </>
  );

  const legal = (idSuffix = "") => (
    <>
      <p className="inline-block text-center text-xs">
        © 2026 Geek @ Your Spot LLC
      </p>
      <p className="inline-block text-center text-xs">
        All rights reserved
      </p>
      <p className="inline-block text-center text-xs">
        <a
          id={`${gtmLinkIdFromHref("/privacy-policy")}${idSuffix}`}
          className="hover:text-white transition-colors"
          href="/privacy-policy"
        >
          Privacy Policy
        </a>
      </p>
      <p className="inline-block text-center text-xs">
        <a
          id={`${gtmLinkIdFromHref("/terms-and-conditions")}${idSuffix}`}
          className="hover:text-white transition-colors"
          href="/terms-and-conditions"
        >
          Terms of Service
        </a>
      </p>
    </>
  );

  return (
    <footer className="bg-[#0B162A] pt-5">
      <div className="flex flex-col justify-center container mt-5 pt-5 lg:hidden">
        <div className="grid grid-cols-1 gap-8 py-5 my-5">
          <div>{brand()}</div>
          <div>
            {HUB_GROUPS.map((group) => (
              <HubGroup key={group.label} group={group} />
            ))}
          </div>
        </div>
        <div className="border-t border-white/5 flex flex-col items-center justify-center py-5 mt-5">
          <div className="flex flex-col w-full items-center gap-3 text-slate-500 uppercase tracking-widest text-center px-5">
            {legal()}
          </div>
        </div>
      </div>
      <div className="hidden flex-col justify-center container mt-5 pt-5 lg:flex">
        <div className="grid grid-cols-12 gap-4 container py-5 my-5">
          <div className="col-span-3">{brand("-lg")}</div>
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4">
              {HUB_GROUPS.map((group) => (
                <HubGroup key={group.label} group={group} idSuffix="-lg" />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 flex flex-col items-center justify-center py-5 mt-5">
          <div className="flex flex-row w-full justify-between items-center gap-6 text-slate-500 uppercase tracking-widest text-center px-5">
            {legal("-lg")}
          </div>
        </div>
      </div>
    </footer>
  );
}
