import { clsx } from "clsx";

import type { ArticleSection } from "@/lib/content-writer-disabled2/article-sections-disabled";

import { ArticleBody } from "./article-body";
import { backgroundForSection, linkClassForBackground, textOnRight } from "./section-palette";

type ArticleSectionBlockProps = Readonly<{
  section: ArticleSection;
  /** Zero-based position; drives both the background colour and the text side. */
  index: number;
}>;

/*
 * The hand-coded pillar and tool sections, class for class: one block below lg and one from lg
 * up, the heading in seven of twelve columns beside an empty five-column spacer, and the FAQ as
 * a single full-width block with a rule above each question. These go through clsx, never cn():
 * tailwind-merge reads font-[var(--font-sora)] as a font weight and drops font-black.
 */
const H2_MOBILE =
  "text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text";
const H2_DESKTOP =
  "text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text";
const H2_SINGLE =
  "text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text";

/** Headings the exports give their question-and-answer section. */
const QUESTION_HEADINGS = new Set(["Frequently Asked Questions", "People Also Ask"]);

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
  const questions = section.heading !== null && QUESTION_HEADINGS.has(section.heading);

  const body = (
    <ArticleBody
      blocks={section.blocks}
      linkClassName={linkClassName}
      sectionId={section.id}
      questions={questions}
    />
  );

  if (questions) {
    return (
      <section className={clsx("min-h-screen text-white py-5", background)}>
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-12">
              <h2 id={section.id} className={H2_SINGLE}>
                {section.heading}
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
    );
  }

  const spacer = <div className="col-span-5 flex items-center justify-center"></div>;

  return (
    <>
      <section className={clsx("min-h-screen text-white py-5 lg:hidden", background)}>
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            {onRight && spacer}
            <div className="col-span-7">
              {section.heading && (
                <h2 id={section.id} className={H2_MOBILE}>
                  {section.heading}
                </h2>
              )}
            </div>
            {!onRight && spacer}
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className={clsx("min-h-screen text-white py-5 hidden lg:block", background)}>
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            {onRight && spacer}
            <div className="col-span-7">
              {section.heading && (
                <h2 id={section.id} className={H2_DESKTOP}>
                  {section.heading}
                </h2>
              )}
              {body}
            </div>
            {!onRight && spacer}
          </div>
        </div>
      </section>
    </>
  );
}
