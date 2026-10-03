import Link from "next/link";

export default function KeyDecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The success of automated approval workflows hinges on initial decisions that shape the entire
        implementation. A critical decision is selecting the right software that aligns with existing systems
        and business needs. For instance,&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-decisions-bill"
          href="/tools/accounting/accounts-payable/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;offers customizable workflows that can be tailored to specific business rules, ensuring
        a seamless integration into the current processes. This flexibility is vital for accommodating unique
        organizational structures and avoiding future bottlenecks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another pivotal decision is data management. Ensuring high-quality data input from the start prevents
        errors that could cascade through the system. This involves setting up robust data validation
        processes to maintain accuracy and consistency.&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-decisions-ramp"
          href="/tools/accounting/accounts-payable/ramp" className="text-[#0B162A] hover:underline">
          Ramp
        </Link>&nbsp;can assist by providing tools for smart approval routing, which automatically directs
        invoices to appropriate stakeholders based on predefined criteria, reducing the likelihood of human
        error.</p>
      <p className="text-md text-white shadow-text pt-3">
        The choice of integration strategy also plays a significant role. Opting for a solution that offers
        seamless integration with existing accounting software minimizes disruption. For example,&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-decisions-approvalmax"
          href="/tools/accounting/accounts-payable/approvalmax" className="text-[#0B162A] hover:underline">
          ApprovalMax
        </Link>&nbsp;integrates smoothly with platforms like QuickBooks, streamlining the approval process
        and ensuring that all financial data remains synchronized across systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lastly, securing buy-in from key stakeholders early in the process is crucial. This involves clear
        communication about the benefits and potential challenges of the new system, ensuring that everyone
        understands their role in the transition. Without this, even the best technical solution can falter
        due to a lack of internal support.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="key-decisions-for-successful-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Decisions for Successful Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="key-decisions-for-successful-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Decisions for Successful Implementation
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
