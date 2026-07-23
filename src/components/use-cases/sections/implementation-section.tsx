import Image from "next/image";
import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";

export default function ImplementationSection() {
  const section = automatedAccountsPayableContent.sections.find(s => s.id === 4);

  if (!section) return null;

  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="container max-w-4xl">
        {section.image && (
          <Image
            src={section.image}
            width={800}
            height={400}
            quality={100}
            alt={section.title}
            className="w-full h-auto mb-8 rounded-lg"
          />
        )}
        <h2 className="text-5xl font-bold mb-6">{section.title}</h2>
        {section.description && (
          <p className="text-lg text-gray-700 mb-12">{section.description}</p>
        )}

        {section.subsections?.map((sub, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-3xl font-bold mb-4">{sub.heading}</h3>
            {sub.content?.map((para, pIdx) => (
              <p key={pIdx} className="text-gray-700 mb-4 leading-relaxed">
                {para}
              </p>
            ))}
            {sub.items?.map((item, iIdx) => (
              <div key={iIdx} className="mb-3 pl-4 border-l border-gray-300">
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
