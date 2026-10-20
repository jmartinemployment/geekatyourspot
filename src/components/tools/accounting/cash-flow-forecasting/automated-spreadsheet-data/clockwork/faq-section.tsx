
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
              What software does Clockwork integrate with?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Clockwork features one-click live integrations with QuickBooks Online, QuickBooks Desktop, and Xero. It can
              also ingest data from Excel, CSV, and Google Sheets.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does it take to set up?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Setting up Clockwork takes about five minutes. The platform automatically logs in, pulls up to three years
              of transactional history, maps your chart of accounts, and builds the baseline forecast without requiring
              any manual mapping or onboarding.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Clockwork write data back to my ledger?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, Clockwork is a read-only integration. This means you can test various &quot;what-if&quot; scenarios,
              model debt, or project hiring streaks without risking any changes or accidental entries in your source
              accounting books.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What exactly does the tool generate?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Clockwork generates a 52-week rolling cash flow forecast, a 5-year dynamic financial model, a 12-month
              balance sheet projection, and client-ready dashboards for every connected account.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is it different from a monthly forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Clockwork is unique in that it builds a true weekly cash flow forecast. It evaluates transaction-level data
              and customer/vendor payment behaviors to map cash movements week-by-week, rather than averaging them over a
              month.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do &quot;what-if&quot; scenarios work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Users can toggle custom drivers, such as hiring two employees or raising prices by 5%, to see the downstream
              bank balance impact live during a meeting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Mira AI?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Mira is Clockwork’s built-in conversational financial analyst. Users can ask her questions in plain English,
              like &quot;Why did my gross profit drop last month?&quot; She will instantly scan the data, write variance
              commentary, and trace the numbers back to the ledger.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Clockwork share my data with public AI models?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, Clockwork does not share your financial data with
              public&nbsp;AI&nbsp;models. Your data remains protected within
              Clockwork&#39;s secure, SOC 2 Type 2 compliant environment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need spreadsheet skills to use it?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, you don&#39;t need spreadsheet skills to use Clockwork. Unlike spreadsheet-first platforms, Clockwork
              automatically builds the financial logic and three-statement models for you. If you can read a standard
              profit and loss statement, you can navigate Clockwork with ease.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What does it do that Excel cannot?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Clockwork offers several features that Excel cannot match. It provides an hourly automated sync with your
              ledger, preventing the need for manual copy-pasting. It ensures absolute structural security, eliminating
              broken formulas and #REF! errors. Additionally, Clockwork includes a plain-English AI conversational
              interface, allowing you to ask questions and get answers quickly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
