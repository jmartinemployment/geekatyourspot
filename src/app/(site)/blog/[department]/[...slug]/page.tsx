import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clsx } from "clsx";

import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import { ArticleSectionBlock } from "@/components/blog/article-section";
import {
  backgroundForSection,
  linkClassForBackground,
  textOnRight,
} from "@/components/blog/section-palette";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { getEntry, listEntries } from "@/lib/content-writer/content";
import { toArticleSections } from "@/lib/content-writer/article-sections";
import { relatedBlogHrefs } from "@/lib/content-writer/related-posts";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { formatDate } from "../../format-date";

type BlogArticleProps = Readonly<{
  params: Promise<{ department: string; slug: string[] }>;
}>;

/**
 * A post is either /blog/<department>/<slug> or, when the export files it under
 * a category, /blog/<department>/<category>/<slug>. The catch-all covers both,
 * so `slug` is the path after the department.
 */
export function generateStaticParams(): Array<{ department: string; slug: string[] }> {
  return listEntries("blog").map(({ department, category, slug }) => ({
    department,
    slug: category ? [category, slug] : [slug],
  }));
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { department, slug } = await params;
  const post = getEntry("blog", department, slug);
  if (!post) return {};

  return {
    title: post.headline,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: post.headline,
      description: post.description,
      url: post.href,
      publishedTime: post.date ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.headline,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { department, slug } = await params;
  const post = getEntry("blog", department, slug);

  if (!post) {
    notFound();
  }

  const sections = toArticleSections(post.bodyHtml);
  const published = formatDate(post.date);
  const meta = [post.department, published].filter(Boolean).join(" · ");

  const entriesByHref = new Map(listEntries("blog").map((entry) => [entry.href, entry]));
  const related = relatedBlogHrefs(post.href, 3).flatMap((href) => entriesByHref.get(href) ?? []);

  // The related block continues the colour cycle rather than restarting it, so
  // it never lands on the same ground as the section directly above it. It is
  // laid out like the article sections: one block below lg and one from lg up.
  const relatedIndex = sections.length;
  const relatedBackground = backgroundForSection(relatedIndex);
  const relatedLinkClass = linkClassForBackground(relatedBackground);
  const relatedOnRight = textOnRight(relatedIndex);
  const relatedSpacer = <div className="col-span-5 flex items-center justify-center"></div>;
  const relatedList = related.map((entry) => (
    <div key={entry.href} className="pt-6">
      <Link
        id={gtmLinkIdFromHref(entry.href, "related")}
        href={entry.href}
        className={clsx(
          "text-2xl leading-[1.1] font-black font-[var(--font-sora)] shadow-text",
          relatedLinkClass,
        )}
      >
        {entry.headline || entry.title}
      </Link>
      <p className="pt-2 text-md font-normal text-white shadow-text">{entry.excerpt}</p>
    </div>
  ));

  return (
    <>
      {post.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.jsonLd }}
        />
      )}

      <BlogHeroSection
        title={post.headline}
        summary={post.heroSummary}
        meta={meta}
        department={post.department}
      />

      {sections.map((section, index) => (
        <ArticleSectionBlock key={section.id} section={section} index={index} />
      ))}

      {related.length > 0 && (
        <>
          <section className={clsx("min-h-screen text-white py-5 lg:hidden", relatedBackground)}>
            <div className="container">
              <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                {relatedOnRight && relatedSpacer}
                <div className="col-span-7">
                  <h2
                    id="more-from-the-blog"
                    className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
                  >
                    More from the Blog
                  </h2>
                </div>
                {!relatedOnRight && relatedSpacer}
                <div className="col-span-12">{relatedList}</div>
              </div>
            </div>
          </section>
          <section className={clsx("min-h-screen text-white py-5 hidden lg:block", relatedBackground)}>
            <div className="container">
              <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
                {relatedOnRight && relatedSpacer}
                <div className="col-span-7">
                  <h2
                    id="more-from-the-blog"
                    className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
                  >
                    More from the Blog
                  </h2>
                  {relatedList}
                </div>
                {!relatedOnRight && relatedSpacer}
              </div>
            </div>
          </section>
        </>
      )}

      <SchedulerShell />
    </>
  );
}
