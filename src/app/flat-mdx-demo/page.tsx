import { parseMdxToFlatArray } from "@/lib/content-writer/mdxFlatParser";
import { FlatMdxViewer } from "@/components/content-writer/flat-mdx-viewer";

const MOCK_MDX = `
# Intro

Some intro paragraph before any H2.

## Getting Started

First paragraph of Getting Started.

<AdBanner network="acme" slot="123" />

Second paragraph of Getting Started.

### Prerequisites

A sub-heading paragraph.

\`\`\`ts
const x = 1;
\`\`\`

## Advanced Usage

<InternalTracker id="abc" />

Paragraph under Advanced Usage.

<CalloutBox tone="warning" title="Heads up">
Body content of the callout.
</CalloutBox>
`;

export default function FlatMdxDemoPage() {
  const elements = parseMdxToFlatArray(MOCK_MDX);

  return <FlatMdxViewer elements={elements} activeSectionId="getting-started" />;
}
