import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";

export default function FAQSectionUseCases() {
  const faqItems = automatedAccountsPayableContent.faq;

  if (!faqItems || faqItems.length === 0) return null;

  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="container max-w-4xl">
        <h2 className="text-5xl font-bold mb-12">People Also Ask</h2>

        <div className="space-y-6">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-6">
              <h3 className="text-xl font-bold mb-3">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
