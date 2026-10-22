import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

/**
 * The not-found page for a route inside the site group, such as a blog post whose export is
 * missing. The site layout already renders the navbar and the footer around it, so this renders
 * the content only; the root `src/app/not-found.tsx`, which answers URLs outside the group, carries
 * its own navbar and footer. Before this file existed, a not-found inside the group showed the
 * navbar twice (Jeff, 2026-10-22).
 *
 * Next adds the noindex tag to every 404 response. The page sets no robots of its own.
 */
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you asked for does not exist on geekatyourspot.com.",
};

const LINKS = [
  { href: "/use-cases", label: "Use Cases" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/glossary", label: "Glossary" },
] as const;

const summary =
  "The page you asked for does not exist. It may have moved, or the address may have a typo.";

function Links() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
      <Link href="/" className="btn btn-primary">
        Go to the Home Page
      </Link>
      {LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-base font-bold text-white underline underline-offset-4 hover:text-[#C83803]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <header className="min-h-screen bg-[#0B162A] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                Page Not Found
              </h1>
              <p className="pt-3 text-xl text-white shadow-text">{summary}</p>
              <Links />
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[#0B162A] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                Page Not Found
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">{summary}</p>
              <Links />
            </div>
            <div className="col-span-5 flex min-h-screen flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faCompass}
                className="text-[#C83803]"
                style={{ width: "16rem", height: "16rem" }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
