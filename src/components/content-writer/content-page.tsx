import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ContentEntry } from "@/lib/content-writer/content";

export function ContentPage({ entry }: { entry: ContentEntry }) {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-brand">
        {entry.department.replace(/-/g, " ")}
      </p>
      <h1 className="mt-2 text-4xl font-black leading-tight text-foreground font-[var(--font-sora)]">
        {entry.title}
      </h1>
      {entry.heroSummary && <p className="mt-4 text-lg text-muted">{entry.heroSummary}</p>}

      {entry.heroImage && (
        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={entry.heroImage} alt={entry.title} fill className="object-cover" />
        </div>
      )}

      <div className="prose prose-lg mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.body}</ReactMarkdown>
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
    </article>
  );
}
