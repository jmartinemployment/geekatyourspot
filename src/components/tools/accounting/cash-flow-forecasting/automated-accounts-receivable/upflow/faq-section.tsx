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
              What is payment collection software?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payment collection software helps businesses collect customer payments efficiently. It uses automated
              reminders, online payment portals, and structured follow-up workflows. This makes it easier for customers to
              pay and gives finance teams a clear view of outstanding balances.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does payment collection software work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payment collection software connects to your billing
              or&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system to track unpaid invoices. It automatically
              sends payment reminders and often includes a secure payment portal where customers can pay via ACH, card, or
              direct debit.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does payment collection software support online payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, most modern solutions offer secure, branded payment portals that support ACH, credit cards, direct
              debit, and features like Autopay or promise-to-pay tracking.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can payment collection software reduce late payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, it can. Automated reminders, clear payment options, and real-time balance visibility encourage faster
              payments and help reduce overdue invoices.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is the Stripe Billing integration easy to set up?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Absolutely. After setting up your Upflow organization, you just click &quot;Connect&quot; and authorize
              Stripe access. The integration is quick, requiring only a few permissions, and starts syncing automatically
              without any coding or custom setup.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the integration between Stripe Billing and Upflow work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow connects directly to your Stripe Billing account to import customers, invoices, and payments. After
              the initial sync, all relevant data updates in real time, keeping your accounts receivable process current
              and accurate without manual exports or&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when customers pay invoices via the Upflow portal?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payments made through the Upflow portal are automatically recorded back to Stripe. Although Stripe&#39;s API
              doesn&#39;t link payments directly to a specific invoice, Upflow ensures the invoice is marked as paid,
              keeping your Stripe records in sync without disrupting your accounting flow.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why does Upflow avoid using Days Sales Outstanding (DSO) or invoice due dates for forecasting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow avoids using Days Sales Outstanding (DSO) or invoice due dates for forecasting because these methods
              can overstate the cash position. Instead, Upflow builds inflow projections from billing cohort collection
              rates, which reflect actual payment behavior. This approach provides a more accurate forecast by considering
              the real timing of payments, including those that take longer or shorter than average. This accuracy helps
              finance teams make better decisions by providing a realistic view of cash inflows.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a &quot;Billing Cohort Cash Forecast&quot; and how does Upflow build it?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              A &quot;Billing Cohort Cash Forecast&quot; groups all invoices issued in a given month and tracks the
              percentage collected over subsequent months. Upflow builds this forecast by calculating billing cohort
              collection rates automatically from your ERP data. This method replaces a single DSO average with a
              distribution of actual payment timing, providing a more accurate inflow forecast based on real customer
              payment behavior.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do automated &quot;Promises-to-Pay&quot; and disputes feed into the forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated &quot;Promises-to-Pay&quot; and disputes are factored into Upflow&#39;s cash forecasts to provide
              a realistic view of cash inflows. Promise-to-pay dates are integrated into the expected cash timing, while
              disputes are identified early and weighed into the inflow timing. This ensures that the forecast reflects
              actual payment behavior and any potential delays, allowing for more accurate financial planning.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Upflow send completely autonomous emails to my customers?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow can send autonomous emails to customers, but the level of autonomy is adjustable. Each skill, such as
              replies and promise-to-pay, has modes: off, ask before sending, or fully autonomous. This allows businesses
              to start with suggestions and expand autonomy as trust builds. In autonomous mode, emails are sent only when
              the system is confident, ensuring that communication is appropriate and effective.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What controls prevent customers from being over-communicated with?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow provides controls to prevent over-communication with customers by allowing businesses to maintain
              control over reminder frequency and segment customers for tailored communication. This approach ensures that
              reminders are sent appropriately, balancing efficiency with customer satisfaction. By combining automated
              and manual reminders, businesses can manage communication effectively and avoid negative impacts from
              unnecessary reminders.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What software tools does Upflow sync with natively?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow syncs natively with several software tools, including NetSuite, Zuora, and Rillet. These integrations
              offer real-time, two-way synchronization for payments, invoices, contacts, and more, ensuring that your
              financial data is always accurate and up-to-date. This connectivity eliminates manual data entry and reduces
              the risk of errors, streamlining collections and accelerating payment cycles.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the Upflow payment portal accelerate cash flow settlements?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The Upflow payment portal accelerates cash flow settlements by unifying payments, collections, and
              reconciliation in one system. Customers pay through a branded portal, and every transaction reconciles
              against your ERP in real time. This integration simplifies the payment process, reduces manual work, and
              ensures that cash flow is managed efficiently, leading to faster settlements.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can forecasting data be queried live into external AI systems?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Upflow&#39;s forecasting data can be queried live into
              external&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;systems through the Upflow MCP server. This
              allows businesses to leverage AI tools like Claude and ChatGPT to analyze forecasts and gain insights,
              enhancing decision-making with real-time data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
