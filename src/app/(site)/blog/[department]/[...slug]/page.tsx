import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogHeroSection } from "@/components/blog/blog-hero-section";
import { ArticleSectionBlock } from "@/components/blog/article-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { getEntry, listEntries } from "@/lib/content-writer-disabled2/content-disabled";
import { toArticleSections } from "@/lib/content-writer-disabled2/article-sections-disabled";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
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
      siteName: "Geek @ Your Spot LLC",
      locale: "en_US",
      publishedTime: post.date ?? undefined,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.headline,
      description: post.description,
      images: [SHARE_IMAGE],
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

      <SchedulerShell />
    </>
  );
}
