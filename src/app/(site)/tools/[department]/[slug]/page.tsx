import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { geekApiService } from "@/services/geekApiService";
import { formatDepartmentLabel } from "@/lib/departments";
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

export default async function ToolPage({ params }: PageProps) {
  const { department, slug } = await params;
  const post = await geekApiService.getBlogPost(slug);

  if (!post) notFound();

  const sortedSections = [...post.sections].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <article className="container py-16">
      <div className="flex items-center gap-4 mb-8">
        <PlaceholderImage label={post.title} className="w-20 h-20 shrink-0 rounded-lg" />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#025E73] mb-1">
            {post.categorySlug || formatDepartmentLabel(department)} &middot; Tool
          </p>
          <h1 className="text-3xl lg:text-5xl font-black font-[var(--font-sora)]">
            {post.title}
          </h1>
        </div>
      </div>
      <PlaceholderImage label={`${post.title} screenshot`} className="w-full aspect-video mb-10" />
      <div className="use-case-html max-w-none">
        {sortedSections.map((section) => (
          <PostSection key={section.sortOrder} section={section} />
        ))}
      </div>
    </article>
  );
}
