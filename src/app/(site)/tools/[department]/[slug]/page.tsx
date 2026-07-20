import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { geekApiService } from "@/services/geekApiService";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { HeroImage } from "@/components/shared/hero-image-component";
import type { WebPostSection } from "@/services/geekApiService";

export function PostSection({ section }: { section: WebPostSection }) {
  return (
    <div>
      {section.headingText && <h2>{section.headingText}</h2>}
      <div dangerouslySetInnerHTML={{ __html: section.bodyContent }} />
    </div>
  );
}
interface PageProps {
  params: Promise<{ department: string; slug: string }>;
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await geekApiService.getWebPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function ToolPage({ params }: PageProps) {
  const { department, slug } = await params;
  const post = await geekApiService.getWebPost(slug);
  if (!post) notFound();

  const sections = post.contentStructure.sections;

  return (
        <>
    <header className="min-h-[40vh] bg-[rgb(2,48,89)] flex items-center">
      <div className="container">
        <h1 className="font-(--font-sora) text-4xl lg:text-6xl leading-[0.95] text-white shadow-text">
          {post.title}
        </h1>
      </div>
    </header>
    <article className="container py-16">
      <p className="text-sm font-bold uppercase tracking-widest text-[#025E73] mb-8">
        {department} &middot; Tool
      </p>
      <HeroImage
        segment="tools"
        department={department}
        slug={slug}
        alt={post.title}
        className="w-full aspect-video mb-10"
      />
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        const headingBlock = (
          <div className={isEven ? "col-span-7" : "col-span-5"}>
            {section.headingText && <h2>{section.headingText}</h2>}
            <div dangerouslySetInnerHTML={{ __html: section.bodyContent }} />
          </div>
        );

        const imageBlock = (
          <div className={isEven ? "col-span-5" : "col-span-7"}>
            {section.mediaUrl ? (
              <img
                src={section.mediaUrl}
                alt={section.mediaAlt ?? section.headingText ?? post.title}
                loading="lazy"
                className="w-full aspect-video mb-10"
              />
            ) : (
              <PlaceholderImage
                label={section.mediaAlt ?? section.headingText ?? post.title}
                className="w-full aspect-video mb-10"
              />
            )}
          </div>
        );

        return (
          <div key={index} className="grid min-h-screen grid-cols-12 place-items-center">
            {isEven ? (
              <>
                {headingBlock}
                {imageBlock}
              </>
            ) : (
              <>
                {imageBlock}
                {headingBlock}
              </>
            )}
          </div>
        );
      })}
      <div className="use-case-html max-w-none">
        {sections.map((section, index) => (
          <PostSection key={index} section={section} />
        ))}
      </div>
    </article>
    </>
  );
}
