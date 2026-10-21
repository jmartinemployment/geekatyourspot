"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gtmLinkId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";

const navLinks = [
  // { label: "Home", href: "/" },
  // { label: "AI Solutions", href: "/ai-solutions" },
  // { label: "Contact", href: "/contact" },
];

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
      { label: "About", href: "/about" },
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
      </div>
    </>
  );

  const contact = (idSuffix = "") => (
    <>
      <h2 className="text-white text-base shadow-text font-bold uppercase">
        Contact
      </h2>
      <ul>
        <li className="py-2">
          <span className="font-bold text-white text-sm shadow-text">
            2025 NW 18th Street <br /> Delray Beach, FL 33445
          </span><br />
          <a
            id={`${gtmLinkIdFromHref("tel:+15615263512")}${idSuffix}`}
            href="tel:+15615263512"
            className="font-bold text-white text-sm hover:text-[#c83803] transition-colors"
          >
            (561) 526-3512
          </a>
        </li>
      </ul>
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
          <div>{contact()}</div>
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
          <div className="col-span-6">
            <div className="grid grid-cols-3 gap-4">
              {HUB_GROUPS.map((group) => (
                <HubGroup key={group.label} group={group} idSuffix="-lg" />
              ))}
            </div>
          </div>
          <div className="col-span-3">{contact("-lg")}</div>
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
