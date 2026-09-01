"use client";

import { linkGlossaryTerms } from "@/lib/glossary-linker";

interface AutoLinkedTextProps {
  text: string;
  skipSlug?: string;
}

export function AutoLinkedText({ text, skipSlug }: AutoLinkedTextProps) {
  const linkedHtml = linkGlossaryTerms(text, { skipSlug });

  return (
    <span dangerouslySetInnerHTML={{ __html: linkedHtml }} />
  );
}
