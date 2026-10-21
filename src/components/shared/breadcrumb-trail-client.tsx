"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BreadcrumbList as BreadcrumbListSchema, WithContext } from "schema-dts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BREADCRUMB_LEVELS } from "@/data/navigation/breadcrumb-levels";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SITE_URL } from "@/lib/seo/organization";

type Step = Readonly<{ name: string; href: string; linked: boolean }>;

type BreadcrumbTrailClientProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
  /** The levels that have a page, found at build time by the server wrapper. */
  linkedLevels: readonly string[];
  /** True on one breakpoint copy only, so the page carries one BreadcrumbList. */
  withJsonLd: boolean;
}>;

/**
 * The steps from Home to the current page, one per level of its URL. Returns null when a level
 * has no name in BREADCRUMB_LEVELS, so a page never shows a trail with a guessed name.
 */
function stepsFor(pathname: string, current: string, linkedLevels: readonly string[]): Step[] | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const steps: Step[] = [{ name: "Home", href: "/", linked: true }];
  for (let depth = 1; depth < segments.length; depth += 1) {
    const href = `/${segments.slice(0, depth).join("/")}`;
    const name = BREADCRUMB_LEVELS.get(href);
    if (!name) return null;
    steps.push({ name, href, linked: linkedLevels.includes(href) });
  }
  steps.push({ name: current, href: `/${segments.join("/")}`, linked: false });
  return steps;
}

/**
 * The structured-data trail lists Home, every level that has a page, and the current page.
 * Google expects each step but the last to be a working URL, so a level without a page is left
 * out of the markup while the visible trail still names it.
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

export function BreadcrumbTrailClient({ current, linkedLevels, withJsonLd }: BreadcrumbTrailClientProps) {
  const pathname = usePathname();
  const steps = stepsFor(pathname, current, linkedLevels);
  if (!steps) return null;

  return (
    <>
      {withJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLdFor(steps)) }} />
      )}
      <Breadcrumb className="pb-4">
        <BreadcrumbList className="text-sm text-white shadow-text">
          {steps.map((step, index) => {
            const last = index === steps.length - 1;
            return (
              <Fragment key={step.href}>
                <BreadcrumbItem>
                  {last ? (
                    <BreadcrumbPage className="text-white">{step.name}</BreadcrumbPage>
                  ) : step.linked ? (
                    <BreadcrumbLink
                      className="text-white hover:text-[#C83803] hover:underline"
                      render={<Link href={step.href} />}
                    >
                      {step.name}
                    </BreadcrumbLink>
                  ) : (
                    <span>{step.name}</span>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator className="text-white" />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
