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
              If we use Justworks to pay both W-2 employees and 1099 contractors, how does the platform prevent misclassification audits?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Justworks highlights the risks and costs of misclassifying workers, especially when a contractor’s
              job duties do not change after converting to employee status. The platform provides clear support
              for handling W-2 and 1099 payments, including filing the correct tax forms and managing payroll
              compliance. However, it is still up to your business to ensure workers are classified correctly
              under IRS guidelines. Justworks helps with filings and reminders but does not guarantee audit
              prevention if misclassification occurs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Florida has no state income tax, so why do I need a PEO/Compliance tool like Justworks to manage local payroll taxes?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Even though Florida does not have a state income tax, small businesses still face other payroll
              compliance needs—like federal payroll taxes, workers’ comp, unemployment insurance, and new hire
              reporting. Justworks helps you stay compliant with federal, state, and local employment
              regulations, saving you time and reducing the risk of costly errors or HR violations. Their PEO
              service also handles state setup and tax registration, making it easier to onboard new employees
              and expand your business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens to our existing Florida Department of Revenue (DOR) unemployment and withholding accounts when we move to Justworks PEO?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              When you join Justworks PEO, they handle your payroll tax withholding, reporting, and
              remitting—including state unemployment insurance. Justworks files W-2s, 1099s, and manages state
              unemployment filings as part of their compliance support. This means they take over the
              administrative burden of managing these accounts, helping you stay compliant and reducing manual
              effort on your end.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              If the IRS or the Florida DOR sends us a tax notice or penalty regarding a payroll mistake, who is liable—us or Justworks?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Justworks handles payroll processing, filings, and compliance support, and their certified PEO
              status offers added financial protections and tax benefits. However, the material on their site is
              for informational purposes only and does not constitute legal or tax advice. For specific
              liability questions, you should consult your legal or tax advisor. Justworks aims to help you stay
              compliant and avoid penalties, but ultimate responsibility may still rest with your business
              depending on the situation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
