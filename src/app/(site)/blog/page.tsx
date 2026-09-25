import type { Metadata } from "next";
import Link from "next/link";

import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import {
  FIRST_SECTION_BACKGROUND,
  linkClassForBackground,
} from "@/components/blog/section-palette";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { cn } from "@/lib/utils";
import { getBlogIndexPage, getTotalPages } from "./pagination";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
};

type BlogPageProps = Readonly<{
  searchParams: Promise<{ page?: string }>;
}>;

const LINK_CLASS = linkClassForBackground(FIRST_SECTION_BACKGROUND);

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number.parseInt(page ?? "1", 10);
  const data = getBlogIndexPage(Number.isNaN(requestedPage) ? 1 : requestedPage);
  const totalPages = getTotalPages();

  return (
    <>
      <BlogHeroSection
        title="Blog"
        summary="Practical guides to putting AI to work in a small business — from content and campaigns to lead capture, cash flow, and compliance."
      />

      <section className={cn("min-h-screen py-16 text-white", FIRST_SECTION_BACKGROUND)}>
        <div className="container">
          {/* Three unequal columns: posts lead, use cases beside them, tools narrowest. */}
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <h2
                id="latest-posts"
                className="text-[6vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              >
                Latest Posts
              </h2>

              {data.blogs.length > 0 ? (
                data.blogs.map((post) => (
                  <article key={post.slug} className="pt-8">
                    <Link
                      id={gtmLinkIdFromHref(post.href, "index-post")}
                      href={post.href}
                      className={cn(
                        "text-2xl leading-[1.1] font-black font-[var(--font-sora)] shadow-text",
                        LINK_CLASS,
                      )}
                    >
                      {post.title}
                    </Link>
                    <p className="pt-2 text-md font-normal text-white shadow-text">
                      {post.excerpt}
                    </p>
                  </article>
                ))
              ) : (
                <p className="pt-8 text-md font-normal text-white shadow-text">
                  No posts on this page.
                </p>
              )}

              {totalPages > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="flex items-center gap-x-6 pt-10 text-md font-normal text-white shadow-text"
                >
                  {data.page > 1 ? (
                    <Link
                      id={gtmLinkIdFromHref(pageHref(data.page - 1), "blog-prev")}
                      href={pageHref(data.page - 1)}
                      className={LINK_CLASS}
                    >
                      &larr; Newer
                    </Link>
                  ) : (
                    <span className="opacity-40">&larr; Newer</span>
                  )}

                  <span>
                    Page {data.page} of {totalPages}
                  </span>

                  {data.page < totalPages ? (
                    <Link
                      id={gtmLinkIdFromHref(pageHref(data.page + 1), "blog-next")}
                      href={pageHref(data.page + 1)}
                      className={LINK_CLASS}
                    >
                      Older &rarr;
                    </Link>
                  ) : (
                    <span className="opacity-40">Older &rarr;</span>
                  )}
                </nav>
              )}
            </div>

            <div className="col-span-12 lg:col-span-4">
              <h2
                id="use-cases"
                className="text-[5vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-3xl lg:text-4xl"
              >
                Use Cases
              </h2>

              {data.pillars.map((pillar) => (
                <article key={pillar.slug} className="pt-8">
                  <Link
                    id={gtmLinkIdFromHref(pillar.href, "index-pillar")}
                    href={pillar.href}
                    className={cn(
                      "text-xl leading-[1.1] font-black font-[var(--font-sora)] shadow-text",
                      LINK_CLASS,
                    )}
                  >
                    {pillar.title}
                  </Link>
                  <p className="pt-2 text-md font-normal text-white shadow-text">
                    {pillar.excerpt}
                  </p>
                </article>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-3">
              <h2
                id="tools"
                className="text-[5vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-3xl lg:text-4xl"
              >
                Tools
              </h2>

              {data.tools.map((tool) => (
                <article key={tool.slug} className="pt-8">
                  <Link
                    id={gtmLinkIdFromHref(tool.href, "index-tool")}
                    href={tool.href}
                    className={cn(
                      "text-lg leading-[1.1] font-black font-[var(--font-sora)] shadow-text",
                      LINK_CLASS,
                    )}
                  >
                    {tool.title}
                  </Link>
                  <p className="pt-2 text-md font-normal text-white shadow-text">
                    {tool.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SchedulerShell />
    </>
  );
}
