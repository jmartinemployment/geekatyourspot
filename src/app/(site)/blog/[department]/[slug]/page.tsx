import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { cn } from "@/lib/utils";

type BlogArticleProps = Readonly<{
  params: Promise<{ department: string; slug: string }>;
}>;

export function generateStaticParams(): Array<{ department: string; slug: string }> {
  return listEntries("blog").map(({ department, slug }) => ({ department, slug }));
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

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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

  const related = listEntries("blog")
    .filter((entry) => entry.href !== post.href)
    .slice(0, 3);

  // The related block continues the colour cycle rather than restarting it, so
  // it never lands on the same ground as the section directly above it.
  const relatedIndex = sections.length;
  const relatedBackground = backgroundForSection(relatedIndex);
  const relatedLinkClass = linkClassForBackground(relatedBackground);
  const relatedOnRight = textOnRight(relatedIndex);
  const relatedSpacer = <div className="hidden lg:col-span-5 lg:block" />;

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
        summary={post.excerpt}
        meta={meta}
        department={post.department}
      />

      {sections.map((section, index) => (
        <ArticleSectionBlock key={section.id} section={section} index={index} />
      ))}

      {related.length > 0 && (
        <section className={cn("min-h-screen py-5 text-white", relatedBackground)}>
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
              {relatedOnRight && relatedSpacer}

              <div className="col-span-12 lg:col-span-7">
                <h2
                  id="more-from-the-blog"
                  className={cn(
                    "text-[6vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-4xl md:text-5xl lg:text-[3.5rem]",
                    relatedOnRight ? "text-right lg:text-left" : "text-left",
                  )}
                >
                  More from the Blog
                </h2>

                {related.map((entry) => (
                  <div key={entry.href} className="pt-6">
                    <Link
                      id={gtmLinkIdFromHref(entry.href, "related")}
                      href={entry.href}
                      className={cn(
                        "text-2xl leading-[1.1] font-black font-[var(--font-sora)] shadow-text",
                        relatedLinkClass,
                      )}
                    >
                      {entry.headline || entry.title}
                    </Link>
                    <p className="pt-2 text-md font-normal text-white shadow-text">
                      {entry.excerpt}
                    </p>
                  </div>
                ))}
              </div>

              {!relatedOnRight && relatedSpacer}
            </div>
          </div>
        </section>
      )}

      <SchedulerShell />
    </>
  );
}
