"use client";

import { ContentSection as ContentSectionType } from "@/types/use-case";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentSectionAccordionProps {
  sections: ContentSectionType[];
}

export default function ContentSectionAccordion({
  sections,
}: ContentSectionAccordionProps) {
  return (
    <div className="py-12">
      <div className="container">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {sections.map((section, idx) => (
            <AccordionItem key={idx} value={`section-${idx}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6">
                {section.description && (
                  <p className="text-gray-700 mb-6">{section.description}</p>
                )}

                {section.subsections?.map((subsection, sIdx) => (
                  <div key={sIdx} className="mb-6">
                    <h3 className="text-xl font-bold mb-3">
                      {subsection.heading}
                    </h3>
                    {subsection.content?.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-700 mb-3">
                        {paragraph}
                      </p>
                    ))}
                    {subsection.items && subsection.items.length > 0 && (
                      <ul className="list-disc pl-6 space-y-2">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-gray-700">
                            <strong>{item.title}</strong>: {item.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
