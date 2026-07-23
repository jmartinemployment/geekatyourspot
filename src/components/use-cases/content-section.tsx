import { ContentSection as ContentSectionType } from "@/types/use-case";

interface ContentSectionProps {
  section: ContentSectionType;
  index?: number;
}

export default function ContentSection({ section, index }: ContentSectionProps) {
  const sectionNumber = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <section className="min-h-screen py-12">
      <div className="container">
        <div className="flex items-start gap-8">
          {sectionNumber && (
            <span className="text-8xl font-black text-gray-800 flex-shrink-0 leading-none">
              {sectionNumber}
            </span>
          )}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-white">{section.title}</h2>
            {section.description && (
              <p className="text-lg text-gray-300 mb-8">{section.description}</p>
            )}

            {section.subsections?.map((subsection, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{subsection.heading}</h3>
                {subsection.content?.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
                {subsection.items && subsection.items.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2">
                    {subsection.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-300">
                        <strong>{item.title}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
