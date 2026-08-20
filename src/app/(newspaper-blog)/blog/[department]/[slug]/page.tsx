import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { NEWSPAPER_NAME } from "../../constants";
import { getEntry, listEntries } from "@/lib/content-writer/content";

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

  const published = formatDate(post.date);
  const related = listEntries("blog")
    .filter((entry) => entry.href !== post.href)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      {post.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.jsonLd }}
        />
      )}

      <header className="border-b-4 border-black pt-6 pb-3 text-center">
        <Link
          href="/blog"
          className="font-sans text-[10px] font-bold tracking-widest text-neutral-600 uppercase hover:underline"
        >
          {NEWSPAPER_NAME}
        </Link>
        <h1 className="mt-3 font-[family-name:var(--font-news-header)] text-3xl leading-tight font-black tracking-tight uppercase md:text-5xl">
          {post.headline}
        </h1>
        <p className="mt-3 border-t border-neutral-400 pt-2 font-sans text-xs tracking-wide text-neutral-600 uppercase">
          {post.department}
          {published && <span> &middot; {published}</span>}
        </p>
      </header>

      {post.excerpt && (
        <p className="border-b border-neutral-300 py-4 text-center font-[family-name:var(--font-news-header)] text-lg leading-snug text-neutral-800 italic">
          {post.excerpt}
        </p>
      )}

      <article
        className="newspaper-article pt-6"
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />

      {related.length > 0 && (
        <section className="mt-12 border-t-2 border-black pt-4">
          <h2 className="font-sans text-xs font-bold tracking-wider uppercase">
            Also in this edition
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((entry) => (
              <li key={entry.href}>
                <Link href={entry.href} className="group block">
                  <span className="block font-[family-name:var(--font-news-header)] text-lg leading-tight font-bold group-hover:underline">
                    {entry.headline || entry.title}
                  </span>
                  <p className="font-sans text-xs leading-relaxed text-neutral-700">
                    {entry.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
