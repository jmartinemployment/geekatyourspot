import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
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
              Automating cash application improves&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
              forecasting</GlossaryLink>&nbsp;by providing real-time visibility into financial data. This eliminates the
              guesswork associated with manual accounts receivable processes, allowing finance leaders to quickly identify
              where cash is tied up and which accounts are overdue. With automated dashboards, teams can spot risks early
              and make more informed financial decisions, reducing missed opportunities and reactive decision-making.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the platform predict when payments will arrive?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Versapay uses&nbsp;<GlossaryLink slug="machine-learning">machine learning</GlossaryLink>&nbsp;to analyze
              payment patterns and segment customers by risk level.
              This&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-powered approach helps predict when payments will arrive
              by forecasting cash flow based on these insights. It allows businesses to collect payments faster and manage
              their cash flow more effectively.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are &quot;Promise-to-Pay&quot; forecasts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              &quot;Promise-to-Pay&quot; forecasts involve tracking and managing promised payments for outstanding
              invoices. Versapay allows businesses to capture these promises and send reminders before payments become
              overdue. This feature helps predict short-term cash inflows and focus collections on at-risk gaps, improving
              overall cash flow management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do customer risk segments influence the cash forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Customer risk segments influence cash forecasts by allowing businesses to categorize customers based on
              their payment behaviors and risk levels. Versapay uses AI-powered collections automation to analyze these
              segments, predict payments, and forecast cash flow. This segmentation helps businesses focus their
              collection efforts on higher-risk accounts, improving cash flow predictability.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can dispute resolution capabilities protect the forecast pipeline?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Versapay&#39;s dispute resolution capabilities can protect the forecast pipeline by resolving disputes
              quickly and efficiently. The platform provides visibility into disputes and affected customers, allowing
              businesses to spot trends and protect expected cash flow. This alignment between accounts receivable and
              sales ensures that disputes do not disrupt cash flow forecasts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Autopay integration improve treasury planning?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Autopay integration improves treasury planning by ensuring more invoices are paid on time through automatic
              payments. This reduces the uncertainty of payment timings, allowing for more accurate cash flow forecasts
              and better treasury management. By automating payments, businesses can streamline their cash application
              processes and enhance overall financial planning.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which ERPs support Versapay&#39;s forecasting features?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Versapay supports integration with several
              major&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, including Oracle NetSuite, Microsoft
              Dynamics 365 Business Central and Finance and Operations, and Sage Intacct. These built-for ERP connectors
              ensure seamless integration, allowing businesses to leverage Versapay&#39;s forecasting features without
              disrupting existing systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
