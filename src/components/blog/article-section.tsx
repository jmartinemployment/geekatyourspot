import { cn } from "@/lib/utils";
import type { ArticleSection } from "@/lib/content-writer/article-sections";

import { ArticleBody } from "./article-body";
import { backgroundForSection, linkClassForBackground, textOnRight } from "./section-palette";

type ArticleSectionBlockProps = Readonly<{
  section: ArticleSection;
  /** Zero-based position; drives both the background colour and the text side. */
  index: number;
}>;

/**
 * One full-height section of an article. Colour and side come from the
 * position, which is what lets a post with two sections and a post with seven
 * use the same code.
 */
export function ArticleSectionBlock({
  section,
  index,
}: ArticleSectionBlockProps): React.JSX.Element {
  const background = backgroundForSection(index);
  const linkClassName = linkClassForBackground(background);
  const onRight = textOnRight(index);

  const spacer = <div className="hidden lg:col-span-5 lg:block" />;

  return (
    <section className={cn("min-h-screen py-5 text-white", background)}>
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 lg:place-items-center">
          {onRight && spacer}

          <div className="col-span-12 lg:col-span-7">
            {section.heading && (
              <h2
                id={section.id}
                className={cn(
                  "text-[6vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-4xl md:text-5xl lg:text-[3.5rem]",
                  onRight ? "text-right lg:text-left" : "text-left",
                )}
              >
                {section.heading}
              </h2>
            )}

            <ArticleBody
              blocks={section.blocks}
              linkClassName={linkClassName}
              sectionId={section.id}
            />
          </div>

          {!onRight && spacer}
        </div>
      </div>
    </section>
  );
}
