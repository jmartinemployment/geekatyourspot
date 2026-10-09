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
              What is payment collection software?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payment collection software helps businesses efficiently collect customer payments through automated
              reminders, online payment portals, and structured follow-up workflows. It simplifies the payment
              process for customers and provides finance teams with visibility into outstanding balances.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-payment-collection"
                href="https://upflow.io/payment-collection-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                payment collection software
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does payment collection software work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payment collection software connects to your billing or&nbsp;
              <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system, tracks unpaid invoices, and automatically
              sends payment reminders. It often includes a secure payment portal where customers can pay via ACH,
              card, or direct debit.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-payment-collection-2"
                href="https://upflow.io/payment-collection-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                payment collection software
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does payment collection software support online payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Most modern solutions provide secure, branded payment portals that support ACH, credit cards,
              direct debit, and features like Autopay or promise-to-pay tracking.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-payment-collection-3"
                href="https://upflow.io/payment-collection-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                payment collection software
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can payment collection software reduce late payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Automated reminders, clear payment options, and real-time balance visibility help encourage
              faster payments and reduce overdue invoices.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-payment-collection-4"
                href="https://upflow.io/payment-collection-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                payment collection software
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is the Stripe Billing integration easy to set up?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Absolutely. After creating your Upflow organization, simply click &quot;Connect&quot; and authorize
              Stripe access. The integration requires only a few permissions and takes just minutes to initiate.
              Once connected, the sync begins automatically, with no coding or custom setup required.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-stripe-integration"
                href="https://upflow.io/integrations/stripe"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stripe Billing integration
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the integration between Stripe Billing and Upflow work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow connects directly to your Stripe Billing account to import customers, invoices, and payments.
              After an initial sync, all relevant data is updated in real time, keeping your AR process current
              and accurate without manual exports or&nbsp;
              <GlossaryLink slug="api">API</GlossaryLink>&nbsp;management.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-stripe-integration-2"
                href="https://upflow.io/integrations/stripe"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stripe Billing integration
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when customers pay invoices via the Upflow portal?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payments made through the Upflow portal are automatically written back to Stripe. While
              Stripe&#39;s API doesn&#39;t allow linking payments directly to a specific invoice, Upflow ensures
              the invoice is marked paid out of band, helping you keep Stripe records in sync without disrupting
              your accounting flow.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-stripe-integration-3"
                href="https://upflow.io/integrations/stripe"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stripe Billing integration
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will all my Stripe invoices show up in Upflow automatically?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Most active invoices from Stripe will appear in Upflow automatically, ensuring your records are
              up-to-date without manual intervention.</p>
            <p className="text-md text-white shadow-text pt-3">
              Source:&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-stripe-integration-4"
                href="https://upflow.io/integrations/stripe"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stripe Billing integration
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why does Upflow avoid using Days Sales Outstanding (DSO) or invoice due dates for forecasting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow avoids using Days Sales Outstanding (DSO) or invoice due dates for forecasting because these
              methods can overstate the cash position. Instead, Upflow builds inflow forecasts from actual payment
              behavior, using billing cohort collection rates. This approach reflects the real timing of
              payments, providing a more accurate forecast that helps finance teams make better decisions.&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-best-cash-flow-forecasting"
                href="https://upflow.io/software/best-cash-flow-forecasting"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                The Best Cash Flow Forecasting Software for 2026
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a &quot;Billing Cohort Cash Forecast&quot; and how does Upflow build it?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              A &quot;Billing Cohort Cash Forecast&quot; is a method Upflow uses to calculate collection rates by
              billing cohort and project cash inflows for the next six months. Upflow builds this forecast by
              using live receivables data from your ERP or accounting tool, ensuring that the forecast updates
              automatically without manual modeling. This method leverages historical payment behavior to provide
              a reliable cash flow projection.&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-cash-flow-forecasting-software"
                href="https://upflow.io/cash-flow-forecasting-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Cash Flow Forecasting Software for B2B Finance Teams
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do automated &quot;Promises-to-Pay&quot; and disputes feed into the forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated &quot;Promises-to-Pay&quot; and disputes are factored into Upflow&#39;s cash forecasts to
              provide a realistic view of expected cash inflows. Promises-to-pay dates are integrated into the
              forecast, and disputes are identified automatically, influencing the timing of inflows. This
              ensures that forecasts are grounded in actual customer behavior and account for potential delays or
              issues.&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-analytics"
                href="https://upflow.io/features/analytics"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Cash forecasts grounded in how customers pay.
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What software tools does Upflow sync with natively?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Upflow natively syncs with several ERP and accounting tools, including NetSuite, Sage Intacct,
              QuickBooks, Xero, and Pennylane. This integration ensures that your accounts receivable data is
              always current, allowing for accurate forecasting and efficient collections management.&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-payment-collection-5"
                href="https://upflow.io/payment-collection-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Payment Collection Software for Modern Finance Teams
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the Upflow payment portal accelerate cash flow settlements?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The Upflow payment portal accelerates cash flow settlements by offering customers flexible payment
              options. Customers can review outstanding invoices and pay via ACH, credit card, or direct debit at
              their convenience. The portal also supports Autopay for recurring accounts and allows customers to
              set promise-to-pay dates, streamlining the payment process and enhancing cash flow
              predictability.&nbsp;
              <a id="tools-accounting-accounts-receivable-upflow-faq-accounts-receivable-software"
                href="https://upflow.io/accounts-receivable-software"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Accounts Receivable Software for B2B Finance Teams
              </a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
