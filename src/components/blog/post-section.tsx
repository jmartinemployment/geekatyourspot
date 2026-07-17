import type { PostSection as PostSectionData } from "@/services/geekApiService";

const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
type HeadingTag = (typeof HEADING_TAGS)[number];

function isHeadingTag(tag: string | null): tag is HeadingTag {
  return !!tag && (HEADING_TAGS as readonly string[]).includes(tag);
}

export function PostSection({ section }: { section: PostSectionData }) {
  const Heading = isHeadingTag(section.headingTag) ? section.headingTag : null;

  return (
    <div>
      {Heading && section.headingText && <Heading>{section.headingText}</Heading>}
      <div dangerouslySetInnerHTML={{ __html: section.bodyContent }} />
    </div>
  );
}
