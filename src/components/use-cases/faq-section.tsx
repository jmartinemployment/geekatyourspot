import { FAQItem } from "@/types/use-case";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8">People Also Ask</h2>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
