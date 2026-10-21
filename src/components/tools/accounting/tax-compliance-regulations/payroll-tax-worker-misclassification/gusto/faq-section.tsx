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
              Does Gusto file 1099 and W-2 forms?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Gusto handles filing both W-2s and 1099s for your business. Your employees and contractors
              get electronic copies of their forms. If you switch to Gusto partway through the year, Gusto will
              still file complete W-2s for the whole year. During setup, Gusto collects your wage details to
              help make sure all W-2s are accurate and cover the full year.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Gusto automatically calculate, file, and remit federal and Florida payroll taxes?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Gusto automatically calculates, files, and pays your federal payroll taxes and your Florida
              reemployment tax. Florida has no state income tax and no local payroll tax, so an employee who
              works in Miami-Dade, Broward, or Palm Beach County is taxed the same way in each.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if there is a calculation error or if I receive a penalty notice from the IRS or the Florida Department of Revenue?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If there is a payroll calculation error, the best outcome is catching it early and correcting it
              on the next paycheck. If not corrected, you could face unpaid payroll taxes, interest, and
              underpayment penalties. For IRS penalty notices, you may be able to avoid fees by showing
              reasonable cause and providing documentation that you did everything possible to meet your tax
              obligations. The IRS reviews each case individually, so keeping thorough records is important.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Gusto handle Workers&#39; Compensation compliance in Florida?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Gusto helps with Workers&#39; Compensation compliance by keeping your business up to date with
              changing requirements. In Florida, those requirements come from the&nbsp;<a id="tools-accounting-payroll-tax-worker-misclassification-gusto-faq-source-workers-compensation" href="https://www.myfloridacfo.com/division/wc" target="_blank" rel="noopener noreferrer" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Division
              of Workers&#39; Compensation</a>, part of the Florida Department of Financial Services. If you use a
              Professional Employer Organization (PEO) through Gusto, the PEO can take on responsibilities such
              as payroll processing, taxes, and Workers&#39; Compensation compliance, letting you focus on daily
              operations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does this accounting automation seamlessly sync with my local bookkeeping software?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Gusto lets you automatically sync your income, expenses, and deductions with your favorite
              accounting software. This helps you keep your books accurate and up to date without extra manual
              work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
