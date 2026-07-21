import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ContentEntry } from "@/lib/content-writer/content";
import HeroSection from "@/components/shared/shared-hero-section"

export function ContentPage({ entry }: { entry: ContentEntry }) {
  return (
    <>
    <article>
      <HeroSection title={entry.title} image={entry.heroImage} summary={entry.heroSummary} />
        <div className="container mt-8">
          <h2 className="text-black lg:text-7xl xl:text-[4.0rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
            {entry.sections[0].heading}
          </h2>
          {entry.sections[0].paragraphs.map((paragraph, i) => (
            <p key={i} className="text-black text-xl font-normal shadow-text py-5">
              {paragraph}
            </p>
          ))}
          <h2 className="text-black lg:text-7xl xl:text-[4.0rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
            {entry.sections[1].heading}
          </h2>
          <h3 className="text-3xl font-bold shadow-text">
            {entry.sections[1].children[0].heading}
          </h3>
          {entry.sections[1].children[0].paragraphs.map((paragraph, i) => (
            <p key={i} className="text-black text-xl font-normal shadow-text py-5">
              {paragraph}
            </p>
          ))}
          {/* <p>{ entry.sections[1].children[1].body}</p> */}
{/* <p>{entry.sections[1].children[0].children[0].children[0]}</p> */}

      {/* <p className="text-sm font-medium uppercase tracking-wide text-brand">
        {entry.department.replace(/-/g, " ")}
      </p>
*/}

      <div className="prose prose-lg mt-8 max-w-none">
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.body}</ReactMarkdown> */}

      </div>

      {entry.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-background px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      )}
      </div>
    </article>
    </>
  );
}
