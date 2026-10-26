"use client";

import { usePathname } from "next/navigation";
import type { BreadcrumbList as BreadcrumbListSchema, WithContext } from "schema-dts";
import { stepsFor, type Step } from "@/lib/navigation/breadcrumb-steps";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SITE_URL } from "@/lib/seo/organization";

type BreadcrumbJsonLdClientProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
  /** The levels that have a page, found at build time by the server wrapper. */
  linkedLevels: readonly string[];
}>;

/**
 * The structured-data trail lists Home, every level that has a page, and the current page.
 * Google expects each step but the last to be a working URL, so a level without a page is left
 * out of the markup while the navbar's visible trail still names it.
 */
function jsonLdFor(steps: readonly Step[]): WithContext<BreadcrumbListSchema> {
  const marked = steps.filter((step, index) => step.linked || index === steps.length - 1);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: marked.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: step.href === "/" ? SITE_URL : `${SITE_URL}${step.href}`,
    })),
  };
}

export function BreadcrumbJsonLdClient({ current, linkedLevels }: BreadcrumbJsonLdClientProps) {
  const pathname = usePathname();
  const steps = stepsFor(pathname, current, linkedLevels);
  if (!steps) return null;

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLdFor(steps)) }} />;
}
