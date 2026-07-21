"use client";

import type { FlatMdxElement } from "@/lib/content-writer/mdxFlatParser";

interface FlatMdxViewerProps {
  elements: FlatMdxElement[];
  /** When set, only paragraphs from this sectionId render below each heading. */
  activeSectionId?: string;
}

export function FlatMdxViewer({ elements, activeSectionId }: FlatMdxViewerProps) {
  const headings = elements.filter((el) => el.type === "heading" && el.depth === 2);

  const sectionParagraphs = activeSectionId
    ? elements.filter((el) => el.type === "paragraph" && el.sectionId === activeSectionId)
    : [];

  return (
    <div>
      <nav>
        <ul>
          {headings.map((h, i) => (
            <li key={i}>{h.textContent}</li>
          ))}
        </ul>
      </nav>

      {activeSectionId && (
        <section>
          <h3>Paragraphs in &quot;{activeSectionId}&quot;</h3>
          {sectionParagraphs.map((p, i) => (
            <p key={i}>{p.textContent}</p>
          ))}
        </section>
      )}

      <article>
        {elements.map((el, i) => {
          switch (el.type) {
            case "heading":
              return el.depth === 1 ? (
                <h1 key={i}>{el.textContent}</h1>
              ) : (
                <h2 key={i}>{el.textContent}</h2>
              );
            case "paragraph":
              return <p key={i}>{el.textContent}</p>;
            case "code":
              return (
                <pre key={i}>
                  <code>{el.codeValue}</code>
                </pre>
              );
            case "mdxJsxFlowElement":
              return (
                <div key={i} data-component={el.componentName}>
                  {el.textContent}
                </div>
              );
            case "html":
            case "other":
              return <div key={i}>{el.textContent}</div>;
          }
        })}
      </article>

      {/* Raw array debug view — literal type/sectionId per element, since the
          rendered article above only shows semantic tags (<p>, <h2>), not labels. */}
      <section>
        <h3>Raw flat array ({elements.length} elements)</h3>
        <ol>
          {elements.map((el, i) => (
            <li key={i}>
              <code>[{i}]</code> type=<strong>{el.type}</strong> depth=
              {el.depth ?? "null"} sectionId={el.sectionId ?? "null"} —{" "}
              {el.textContent.slice(0, 60)}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
