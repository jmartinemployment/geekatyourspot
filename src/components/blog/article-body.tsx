import type { ReactNode } from "react";
import Link from "next/link";

import { GlossaryLink } from "@/components/glossary/glossary-link";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import type { BlockNode, InlineNode } from "@/lib/content-writer/article-sections";

/**
 * Renders the parsed article body. There is one copy of this markup and the
 * responsive behaviour is CSS, so a phone and a desktop cannot end up with
 * different prose -- the drift that left 82 of 84 hand-coded tool sections
 * with glossary links on mobile and none on desktop.
 */

type LinkIdCounter = { next: number };

type RenderContext = {
  /** Link colour for the section's background. */
  linkClassName: string;
  /** Section id, so every link id on the page is distinct. */
  sectionId: string;
  counter: LinkIdCounter;
};

function renderInline(nodes: readonly InlineNode[], context: RenderContext): ReactNode[] {
  return nodes.map((node, index) => {
    if (node.kind === "text") {
      return node.text;
    }

    if (node.kind === "emphasis") {
      const children = renderInline(node.children, context);
      return node.strong ? (
        <strong key={index}>{children}</strong>
      ) : (
        <em key={index}>{children}</em>
      );
    }

    const children = renderInline(node.children, context);
    context.counter.next += 1;
    const id = gtmLinkIdFromHref(node.href, `${context.sectionId}-${context.counter.next}`);

    if (node.glossarySlug) {
      return (
        <GlossaryLink key={index} slug={node.glossarySlug} className={context.linkClassName}>
          {children}
        </GlossaryLink>
      );
    }

    if (node.external) {
      return (
        <a
          key={index}
          id={id}
          href={node.href}
          target="_blank"
          rel="noopener noreferrer"
          className={context.linkClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <Link key={index} id={id} href={node.href} className={context.linkClassName}>
        {children}
      </Link>
    );
  });
}

function renderBlock(block: BlockNode, key: number, context: RenderContext): ReactNode {
  if (block.kind === "paragraph") {
    return (
      <p key={key} className="pt-3 text-md font-normal text-white shadow-text">
        {renderInline(block.children, context)}
      </p>
    );
  }

  if (block.kind === "subheading") {
    return block.level === 3 ? (
      <h3
        key={key}
        className="pt-6 text-[5vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-3xl lg:text-3xl"
      >
        {block.text}
      </h3>
    ) : (
      <h4
        key={key}
        className="pt-4 text-[4.5vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-2xl lg:text-2xl"
      >
        {block.text}
      </h4>
    );
  }

  const itemClassName = block.ordered
    ? "list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3"
    : "list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3";

  const items = block.items.map((item, index) => (
    <li key={index}>{renderInline(item, context)}</li>
  ));

  return block.ordered ? (
    <ol key={key} className={itemClassName}>
      {items}
    </ol>
  ) : (
    <ul key={key} className={itemClassName}>
      {items}
    </ul>
  );
}

type ArticleBodyProps = Readonly<{
  blocks: readonly BlockNode[];
  linkClassName: string;
  sectionId: string;
}>;

export function ArticleBody({
  blocks,
  linkClassName,
  sectionId,
}: ArticleBodyProps): React.JSX.Element {
  const context: RenderContext = { linkClassName, sectionId, counter: { next: 0 } };
  return <>{blocks.map((block, index) => renderBlock(block, index, context))}</>;
}
