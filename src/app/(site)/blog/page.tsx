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
import { departmentLabel, formatDate } from "./format-date";
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

/** Department and date, the same pairing the article hero shows. */
function metaLine(post: BlogIndexItem): string {
  return [departmentLabel(post.department), formatDate(post.date)]
    .filter(Boolean)
    .join(" · ");
}

function Eyebrow({ text }: Readonly<{ text: string }>) {
  return (
    <p className="font-sans text-xs font-bold tracking-widest text-[#C83803] uppercase">
      {text}
    </p>
  );
}

function ReadMore({ label }: Readonly<{ label: string }>) {
  return (
    <span className="inline-flex items-center gap-x-2 text-base font-bold text-[#C83803]">
      {label}
      <FontAwesomeIcon
        icon={faArrowRight}
        width={16}
        height={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </span>
  );
}

/**
 * The newest post runs full width so the index opens on something to read
 * rather than on a wall of equal cards.
 */
function FeaturedPost({ post }: Readonly<{ post: BlogIndexItem }>) {
  return (
    <Link
      id={gtmLinkIdFromHref(post.href, "index-featured")}
      href={post.href}
      className="group grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl bg-[#0B162A] p-8 shadow-md transition-colors hover:bg-[#132340] lg:grid-cols-12 lg:p-10"
    >
      <div className="lg:col-span-8">
        <Eyebrow text={metaLine(post)} />
        <h3 className="pt-3 text-3xl font-black font-(--font-sora) leading-[1.05] text-white shadow-text-dark-blue lg:text-[2.75rem]">
          {post.title}
        </h3>
      </div>

      <div className="flex flex-col lg:col-span-4">
        <p className="text-lg font-normal text-white/80">{post.excerpt}</p>
        <span className="mt-auto pt-6">
          <ReadMore label="Read the post" />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: Readonly<{ post: BlogIndexItem }>) {
  return (
    <Link
      id={gtmLinkIdFromHref(post.href, "index-post")}
      href={post.href}
      className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
    >
      <Eyebrow text={metaLine(post)} />
      <h3 className="pt-3 text-xl font-black font-(--font-sora) leading-[1.15] text-white shadow-text-dark-blue">
        {post.title}
      </h3>
      <p className="pt-3 text-base font-normal text-white/80">{post.excerpt}</p>
      <span className="mt-auto pt-5">
        <ReadMore label="Read the post" />
      </span>
    </Link>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number.parseInt(page ?? "1", 10);
  const data = getBlogIndexPage(Number.isNaN(requestedPage) ? 1 : requestedPage);
  const totalPages = getTotalPages();
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const [featured, ...rest] = data.blogs;

  return (
    <div className={cn("text-white", FIRST_SECTION_BACKGROUND)}>
      <BlogHeroSection title="Geek Post" summary={PAGE_SUMMARY} icon={faNewspaper} />

      <section className="container py-16 lg:py-24">
        <div className="flex items-baseline gap-x-4">
          <h2
            id="latest-posts"
            className="text-3xl font-black font-(--font-sora) text-white shadow-text lg:text-4xl"
          >
            Latest Posts
          </h2>
          {totalPages > 1 && (
            <p className="text-base font-normal text-white/70">
              Page {data.page} of {totalPages}
            </p>
          )}
        </div>

        {featured ? (
          <>
            <div className="pt-8">
              <FeaturedPost post={featured} />
            </div>

            {rest.length > 0 && (
              <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="pt-8 text-base font-normal text-white/80">
            No posts on this page.
          </p>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-12"
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

      <SchedulerShell />
    </div>
  );
}
