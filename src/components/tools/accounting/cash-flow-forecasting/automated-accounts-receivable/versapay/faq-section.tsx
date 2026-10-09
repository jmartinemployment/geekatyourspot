import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does automating cash application fix cash flow forecasting errors?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automating cash application with Versapay helps finance teams match incoming payments to outstanding
              invoices automatically. This reduces manual work and reconciliation delays, providing greater control
              over cash flow. By eliminating errors in the reconciliation process, businesses can improve the
              accuracy of their cash flow forecasts.&nbsp;
              <a id="tools-accounting-accounts-receivable-versapay-faq-cash-application"
                href="https://www.versapay.com/solutions/cash-application"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Reconcile payments automatically
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are &quot;Promise-to-Pay&quot; forecasts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Promise-to-Pay forecasts are part of Versapay&#39;s AR reporting dashboard, which includes key
              performance metrics. These forecasts help monitor trends and manage risk by predicting when customers
              are likely to pay, allowing businesses to streamline collections and improve cash flow
              predictability.&nbsp;
              <a id="tools-accounting-accounts-receivable-versapay-faq-reporting-reconciliation"
                href="https://www.versapay.com/solutions/reporting-reconciliation"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Forecast cash flow and close faster
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can dispute resolution capabilities protect the forecast pipeline?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Versapay&#39;s automated invoice processing and dispute resolution capabilities provide instant access
              to relevant documentation when a customer questions an invoice. This turns potential payment delays
              into quick resolutions, protecting the forecast pipeline by maintaining the speed and accuracy of
              cash flow predictions.&nbsp;
              <a id="tools-accounting-accounts-receivable-versapay-faq-manual-ar-heavy-industries"
                href="https://www.versapay.com/resources/why-manual-ar-in-heavy-industries-threatens-financial-stability"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Why Manual AR in Heavy Industries Threatens Financial Stability
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which ERPs support Versapay&#39;s forecasting features?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Versapay integrates seamlessly with various&nbsp;
              <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, using&nbsp;
              <GlossaryLink slug="api">API</GlossaryLink>&nbsp;connectors or native integrations. This allows
              businesses to maintain a source of truth and leverage Versapay&#39;s forecasting features
              effectively.&nbsp;
              <a id="tools-accounting-accounts-receivable-versapay-faq-versapay-vs-blackline"
                href="https://www.versapay.com/versapay-vs-blackline"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Versapay vs. BlackLine
              </a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
