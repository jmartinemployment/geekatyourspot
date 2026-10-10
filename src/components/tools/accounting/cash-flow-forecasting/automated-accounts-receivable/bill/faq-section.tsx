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
              Is ACH secure?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, ACH is secure. The ACH network is federally regulated and overseen by the National Automated Clearing
              House Association (NACHA). NACHA enforces strict controls and procedures for all parties using ACH payments.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does using ACH help me manage my cash flow?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ACH transfers provide immediate reflection of debits in your account, unlike credit cards or checks that can
              take days to process. This means no more guessing games with your cash flow. You can schedule ACH transfers
              for specific dates or set them as recurring payments for better cash flow visibility.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I set up recurring invoices?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can set up BILL to automatically invoice customers on a preset schedule for recurring transactions.
              Set it up once and let it run on its own.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does BILL support direct debit?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, BILL supports direct debit. You can set up recurring direct debits from your customer&#39;s bank
              account with their consent. This ensures timely payments and is faster than receiving checks by mail.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What invoice statuses can I track using BILL?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              With BILL, you can track when an invoice is sent, accepted, approved, and when the payment will be
              deposited.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why should I add a bank account to my BILL receivables account?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Adding your bank account to a Basic Receivables account in BILL allows for payments via ACH, similar to
              direct deposit. This means no waiting for checks and no risk of lost payments. You can also track customer
              payments easily.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I really pay vendors with my credit card, even if they don&#39;t accept cards?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can. BILL processes your credit card payment and pays your vendors via ACH, check, or virtual card,
              depending on their setup.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long do Pay By Card payments take?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              For vendors set up for ACH, funds are usually deposited the next business day after processing. New ACH
              setups may take up to 5 business days. Check payments take 5-7 business days, depending on USPS. Virtual
              card payments are delivered the same or next business day.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will my vendor be charged for receiving Pay By Card payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, vendors are not charged for receiving Pay By Card payments.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is BILL Cash Flow Auto Forecasting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL&nbsp;<GlossaryLink slug="cash-flow-forecasting">Cash Flow Forecasting</GlossaryLink>&nbsp;provides
              clear visibility into your business&#39;s cash flow by syncing with QuickBooks Online. It allows you to
              generate forecasts using historical data, track key metrics, and run “what if” simulations. You can
              customize views and dashboards to fit your business needs, and it offers out-of-the-box dashboards to
              optimize&nbsp;<GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does BILL&#39;s AR automation speed up the forecast pipeline?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL&#39;s Accounts Receivable features streamline the process by reducing manual work and providing more
              flexible ways to get paid. With Payment Links and enhanced
              AR&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;capabilities, you can automate invoice updates and
              authorize payments, ensuring funds reach your account faster.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does billing synchronization keep forecast projections from drifting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL ensures that bills, invoices, and payments update automatically through a two-way sync with your
              accounting or payroll software. This synchronization helps maintain accurate and up-to-date financial data,
              preventing forecast projections from drifting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
