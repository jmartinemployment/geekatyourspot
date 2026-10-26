"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { levelStepsFor } from "@/lib/navigation/breadcrumb-steps";

type NavbarTrailProps = Readonly<{
  /** The levels that have a page, found at build time by the site layout. */
  linkedLevels: readonly string[];
}>;

/**
 * The navbar's second row on every page but the home page: Home, then the levels of the URL above
 * the page, each in the same weight whether or not it links (owner, 2026-10-26: "increase navbar
 * height and add to Navbar", after asking why some steps were bold). The page itself is the H1
 * below the navbar, so the row does not repeat it. A level without a page is plain text. The row
 * keeps to one line and scrolls sideways on a narrow screen, so the navbar's height is the same on
 * every page that has a trail.
 */
export function NavbarTrail({ linkedLevels }: NavbarTrailProps) {
  const pathname = usePathname();
  const steps = levelStepsFor(pathname, linkedLevels);
  if (!steps) return null;

  return (
    <div className="border-t border-black/10 py-2">
      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap overflow-x-auto whitespace-nowrap text-xs font-normal text-black [scrollbar-width:none] sm:text-sm [&::-webkit-scrollbar]:hidden">
          {steps.map((step, index) => {
            const last = index === steps.length - 1;
            return (
              <Fragment key={step.href}>
                <BreadcrumbItem>
                  {step.linked ? (
                    <BreadcrumbLink
                      className="font-normal text-black no-underline hover:text-[#8C2703]"
                      render={<Link href={step.href} />}
                    >
                      {step.name}
                    </BreadcrumbLink>
                  ) : (
                    <span className="font-normal text-black">{step.name}</span>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator className="text-black" />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
