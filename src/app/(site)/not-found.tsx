import type { Metadata } from "next";
import NotFoundHero from "@/components/shared/not-found-hero";

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

export default function NotFound() {
  return <NotFoundHero />;
}
