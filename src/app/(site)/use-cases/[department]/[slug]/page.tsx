import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroSection from "@/components/shared/hero-section"
import { geekApiService } from "@/services/geekApiService";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PostSection } from "@/components/blog/post-section";
import { HeroImage } from "@/components/shared/hero-image-component";

interface PageProps {
  params: Promise<{ department: string; slug: string }>;
}
interface HeroImageProps {
    segment: "use-cases" | "blog" | "tools";
    department: string;
    slug: string;
    alt: string;
    className?: string;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await geekApiService.getBlogPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function UseCasePage({ params }: PageProps) {
  const { department, slug } = await params;
  const post = await geekApiService.getBlogPost(slug);

  if (!post) notFound();

  const sortedSections = [...post.sections].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <>
    <HeroSection post={post} />


    <article className="container py-16">
      <p className="text-sm font-bold uppercase tracking-widest text-[#025E73] mb-3">
      </p>

      <HeroImage segment="use-cases" department={department} slug={slug} alt="" />

      <div className="use-case-html max-w-none">
        {sortedSections.map((section) => (
          <PostSection key={section.sortOrder} section={section} />
        ))}
      </div>
    </article>
    </>
  );
}
