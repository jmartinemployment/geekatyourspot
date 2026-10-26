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
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { levelStepsFor, stepsFor, type Step } from "@/lib/navigation/breadcrumb-steps";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SITE_URL } from "@/lib/seo/organization";

type BreadcrumbTrailClientProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
  /** The levels that have a page, found at build time by the server wrapper. */
  linkedLevels: readonly string[];
  /** True on one breakpoint copy only, so the page carries one BreadcrumbList. */
  withJsonLd: boolean;
}>;

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

/**
 * The visible trail is the hero grid's first row, spanning every column (owner, 2026-10-26: "move
 * breadcrumb back to pillar, maintain this font size and use grid-span-12 inside the container"):
 * Home, then the levels of the URL above the page, at 0.75rem, every step in the same weight
 * whether or not it links. The page itself is the H1 under it, so the row does not repeat it.
 */
export function BreadcrumbTrailClient({ current, linkedLevels, withJsonLd }: BreadcrumbTrailClientProps) {
  const pathname = usePathname();
  const levels = levelStepsFor(pathname, linkedLevels);
  if (!levels) return null;
  const steps = withJsonLd ? stepsFor(pathname, current, linkedLevels) : null;

  return (
    <div className="col-span-full w-full self-start pt-4">
      {steps && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLdFor(steps)) }} />
      )}
      <Breadcrumb>
        <BreadcrumbList className="text-xs font-normal text-white">
          {levels.map((step, index) => {
            const last = index === levels.length - 1;
            return (
              <Fragment key={step.href}>
                <BreadcrumbItem>
                  {step.linked ? (
                    <BreadcrumbLink
                      className="font-normal text-white no-underline hover:text-[#C83803]"
                      render={<Link href={step.href} />}
                    >
                      {step.name}
                    </BreadcrumbLink>
                  ) : (
                    <span className="font-normal text-white">{step.name}</span>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator className="text-white" />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
