import Link from "next/link";

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
              We use QuickBooks Online/Xero. Do we have to migrate our accounting to a new system or ERP to use Jirav?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No migration is needed. Jirav connects directly to your existing accounting software in minutes
              using a secure, code-free API. It reads your trial balances and mirrors your Chart of Accounts
              without changing anything in your original financial records.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will Jirav accidentally overwrite or mess up our live accounting data?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Jirav uses a strict one-way, read-only integration. It only pulls data from your accounting
              system to build models and dashboards. It cannot push data back or change your live books, so your
              records stay secure.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Our historical data is messy, and we have multiple departments. How does Jirav handle that?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Jirav runs a nightly automated sync to clean up your data. It maps your QuickBooks Classes or Xero
              Tracking Categories into &quot;Jirav Departments&quot; for clear, department-level views. This
              skips manual Excel filtering and gives you accurate tracking by department.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is a Jirav forecast any different from the standard budget tool inside QuickBooks or Xero?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              QuickBooks and Xero show past results and only budget your Profit &amp; Loss statement. Jirav is a
              driver-based modeling tool that links your P&amp;L, Balance Sheet, and Cash Flow. When you change
              your sales forecast, Jirav instantly shows the impact on cash flow, receivables, and hiring
              timelines.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We struggle with cash flow visibility. Can this help us see when we might run out of money?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Jirav gives real-time cash flow forecasts using your live data and custom assumptions. You
              can see the exact day your cash might run out, plan for breakthroughs, and manage vendor payments
              with confidence.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we use this to model &#39;What-If&#39; business changes before pulling the trigger?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. You can duplicate your main plan and test different scenarios in minutes. Jirav lets you
              compare the financial impact of hiring, price changes, or slow sales side-by-side across all your
              financial statements.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much manual data entry or upkeep does this add to our plate every month?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Almost none. Jirav automatically pulls your financial results overnight. When your books close,
              your forecasts and dashboards update themselves, so you skip manual entry and formula fixes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Jirav factor in our shifting employee headcount and local payroll costs?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Jirav integrates with HR and payroll providers like&nbsp;<Link id="tools-accounting-intelligent-resource-planning-jirav-faq-gusto" href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto" className="text-[#C83803] hover:underline">Gusto</Link>, ADP, and&nbsp;<Link id="tools-accounting-intelligent-resource-planning-jirav-faq-justworks" href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks" className="text-[#C83803] hover:underline">Justworks</Link>. It imports your
              headcount, rosters, and wage details securely, so you can forecast salary changes, bonuses, and
              new roles based on your real local needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
