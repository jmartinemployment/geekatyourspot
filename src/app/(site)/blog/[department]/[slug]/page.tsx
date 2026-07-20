import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { geekApiService } from "@/services/geekApiService";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PostSection } from "@/components/blog/post-section";

interface PageProps {
  params: Promise<{ department: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await geekApiService.getBlogPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { department, slug } = await params;
  const post = await geekApiService.getBlogPost(slug);

  if (!post) notFound();

  const sortedSections = [...post.sections].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <article className="container max-w-3xl py-16 mx-auto">

      <h1 className="text-3xl lg:text-5xl font-black font-[var(--font-sora)] mb-6">
        {post.title}
      </h1>
      {post.publishedAt && (
        <p className="text-xs text-gray-500 mb-8">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      <PlaceholderImage label={post.title} className="w-full aspect-video mb-10" />
      <div className="use-case-html max-w-none">
        {sortedSections.map((section) => (
          <PostSection key={section.sortOrder} section={section} />
        ))}
      </div>
    </article>
  );
}
