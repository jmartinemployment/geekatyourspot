import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import {
  FIRST_SECTION_BACKGROUND,
  linkClassForBackground,
} from "@/components/blog/section-palette";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { cn } from "@/lib/utils";
import { getBlogIndexPage, getTotalPages, type BlogIndexItem } from "./pagination";

const PAGE_SUMMARY =
  "Dispatches from the actual work — what AI does for a South Florida small business across content, campaigns, lead capture, cash flow and compliance, and where it falls short.";

export const metadata: Metadata = {
  title: "Geek Post",
  description: PAGE_SUMMARY,
  alternates: { canonical: "/blog" },
};

type BlogPageProps = Readonly<{
  searchParams: Promise<{ page?: string }>;
}>;

const LINK_CLASS = linkClassForBackground(FIRST_SECTION_BACKGROUND);

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${String(page)}`;
}

const EXCERPT_MAX = 170;

/** Trim to a word boundary so a card never ends mid-word. Matches the glossary index. */
function clamp(text: string): string {
  const collapsed = text.replace(/\s+/g, " ").trim();
  if (collapsed.length <= EXCERPT_MAX) return collapsed;
  const cut = collapsed.slice(0, EXCERPT_MAX);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.]$/, "")}…`;
}

type IndexCardProps = Readonly<{
  item: BlogIndexItem;
  /** GTM link-id suffix, so the three lists stay distinguishable in reports. */
  kind: string;
  cta: string;
  /** The lead list carries the page, so its titles take the larger step. */
  large?: boolean;
}>;

function IndexCard({ item, kind, cta, large = false }: IndexCardProps) {
  return (
    <Link
      id={gtmLinkIdFromHref(item.href, kind)}
      href={item.href}
      className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
    >
      <h3
        className={cn(
          "font-black font-(--font-sora) leading-[1.1] text-white shadow-text-dark-blue",
          large ? "text-2xl" : "text-xl",
        )}
      >
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="pt-3 text-base font-normal text-white/80">
          {clamp(item.excerpt)}
        </p>
      )}
      <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-base font-bold text-[#C83803]">
        {cta}
        <FontAwesomeIcon
          icon={faArrowRight}
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

type SectionHeadingProps = Readonly<{
  id: string;
  title: string;
  note?: string;
}>;

function SectionHeading({ id, title, note }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-x-4">
      <h2
        id={id}
        className="text-3xl font-black font-(--font-sora) text-white shadow-text lg:text-4xl"
      >
        {title}
      </h2>
      {note && <p className="text-base font-normal text-white/70">{note}</p>}
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number.parseInt(page ?? "1", 10);
  const data = getBlogIndexPage(Number.isNaN(requestedPage) ? 1 : requestedPage);
  const totalPages = getTotalPages();
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={cn("text-white", FIRST_SECTION_BACKGROUND)}>
      <BlogHeroSection title="Geek Post" summary={PAGE_SUMMARY} icon={faNewspaper} />

      {/* Posts lead the page; use cases and tools follow as their own rows. */}
      <section className="container py-16 lg:py-24">
        <SectionHeading
          id="latest-posts"
          title="Latest Posts"
          note={totalPages > 1 ? `Page ${String(data.page)} of ${String(totalPages)}` : undefined}
        />

        {data.blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {data.blogs.map((post) => (
              <IndexCard
                key={post.slug}
                item={post}
                kind="index-post"
                cta="Read the post"
                large
              />
            ))}
          </div>
        ) : (
          <p className="pt-8 text-base font-normal text-white/80">
            No posts on this page.
          </p>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-10"
          >
            {data.page > 1 ? (
              <Link
                id={gtmLinkIdFromHref(pageHref(data.page - 1), "blog-prev")}
                href={pageHref(data.page - 1)}
                className={cn("pr-3 text-base font-bold", LINK_CLASS)}
              >
                &larr; Newer
              </Link>
            ) : (
              <span className="pr-3 text-base font-bold text-white/25">
                &larr; Newer
              </span>
            )}

            {pages.map((number) => {
              const isActive = number === data.page;

              return (
                <Link
                  key={number}
                  id={gtmLinkIdFromHref(pageHref(number), "blog-page")}
                  href={pageHref(number)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold transition-colors",
                    isActive
                      ? "bg-[#C83803] text-white"
                      : "bg-[#0B162A] text-white hover:bg-[#132340]",
                  )}
                >
                  {number}
                </Link>
              );
            })}

            {data.page < totalPages ? (
              <Link
                id={gtmLinkIdFromHref(pageHref(data.page + 1), "blog-next")}
                href={pageHref(data.page + 1)}
                className={cn("pl-3 text-base font-bold", LINK_CLASS)}
              >
                Older &rarr;
              </Link>
            ) : (
              <span className="pl-3 text-base font-bold text-white/25">
                Older &rarr;
              </span>
            )}
          </nav>
        )}
      </section>

      <section className="container border-t border-white/15 py-16 lg:py-24">
        <SectionHeading
          id="use-cases"
          title="Use Cases"
          note="Where the work actually lands"
        />

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {data.pillars.map((pillar) => (
            <IndexCard
              key={pillar.slug}
              item={pillar}
              kind="index-pillar"
              cta="See the use case"
            />
          ))}
        </div>
      </section>

      <section className="container border-t border-white/15 py-16 lg:py-24">
        <SectionHeading id="tools" title="Tools" note="What we run it on" />

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">
          {data.tools.map((tool) => (
            <IndexCard
              key={tool.slug}
              item={tool}
              kind="index-tool"
              cta="See the tool"
            />
          ))}
        </div>
      </section>

      <SchedulerShell />
    </div>
  );
}
