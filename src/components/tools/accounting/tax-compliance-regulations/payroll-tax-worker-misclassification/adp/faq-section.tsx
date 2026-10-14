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
              Does payroll software support multi-state payroll?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ADP’s payroll software keeps up with the latest tax laws and HR rules at both the federal level
              and in every state. If your business pays people in more than one state, you may need to register
              your business in each state where your employees work.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does payroll software handle all payroll tax filings and payments (federal, state, local)?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Most automatic payroll systems, including ADP, handle federal and state tax filings. Local taxes
              are more complex, since rules can change quickly and vary by city or county. Not every provider
              covers local tax filings, so it is important to ask about this if your business needs it.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does the platform manage local county-specific discretionary tax filings?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ADP software follows the IRS Common Law Test and the Department of Labor Economic Realities Test.
              During onboarding, it guides users to review who controls work hours, who provides equipment, and
              if the worker serves other clients.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can an independent contractor waive their employee status via a signed agreement?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. ADP documentation makes clear that a contract or agreement cannot override state or federal
              rules. The actual work relationship always determines legal status, not the title or agreement.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does paying a contractor through their LLC or business entity protect against misclassification?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. ADP points to legal precedents showing that courts look at the true economic relationship.
              Even if a contractor uses an LLC or business entity, the risk of misclassification remains if they
              are economically dependent on your business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does ADP handle payroll taxes differently for W-2s vs. 1099s?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              For W-2 employees, ADP calculates, withholds, and sends federal and local taxes automatically. For
              1099 contractors, payments are made before taxes and contractors handle their own self-employment
              taxes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What forms are automatically generated during tax season?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ADP generates and files Form W-2 for employees and Form 1099-NEC for contractors. Starting with
              the 2026 tax year, the 1099-NEC threshold rises from $600 to $2,000 due to federal reporting
              changes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What specific tools does ADP offer to manage contractor compliance safely?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ADP uses WorkMarket by ADP as its Independent Contractor Management System. This tool automates
              W-9 collection, verifies U.S. Worker Tax IDs, tracks payments, and stores documents like NDAs and
              licenses to keep a clear audit trail.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the consequences of a misclassification error?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              If a business fails an audit, it can face major penalties. These include paying back-taxes for
              FICA and FUTA, unpaid overtime, workers&#39; compensation costs, and possible trust fund recovery
              penalties for willful non-compliance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
