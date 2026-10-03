import Link from "next/link";

export default function CostOfManualApprovalSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual approval processes in accounts payable (AP) can be a significant drain on time and resources
        for small and medium-sized businesses. In a typical scenario, each invoice requires multiple
        touchpoints, from initial receipt to final approval. Without automation, these steps involve manual
        data entry, paper shuffling, and numerous email exchanges. This labor-intensive process not only
        consumes valuable hours but also introduces a higher likelihood of errors. Mistakes such as duplicate
        payments or missed discounts can occur, leading to financial discrepancies and potential compliance
        issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, manual processes create bottlenecks that slow down the entire workflow. A single delay in
        approval, often caused by an approver&#39;s unavailability, can hold up payment processing for days.
        This delay not only affects cash flow management but also risks damaging supplier relationships.
        Suppliers rely on timely payments to maintain their operations, and delays can result in strained
        relations and lost trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        The burden of these inefficiencies is primarily absorbed by the accounts payable team, who must
        constantly chase approvals and rectify errors. However, the ripple effect can spread throughout the
        organization, affecting financial planning, vendor relationships, and overall business efficiency. In
        some cases, the lack of visibility into the approval status of invoices can also lead to missed
        opportunities for early payment discounts, further increasing costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tools like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-cost-bill"
          href="/tools/accounting/accounts-payable/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;can help mitigate these issues by automating many of the approval steps. Bill, for
        instance, offers automated invoice routing and approval workflows that ensure invoices are processed
        efficiently and accurately. By reducing manual intervention, businesses can minimize errors and speed
        up the approval process, ultimately saving time and improving cash flow management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-manual-approval-processes-in-accounts-payable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Manual Approval Processes in Accounts Payable
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-manual-approval-processes-in-accounts-payable" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Manual Approval Processes in Accounts Payable
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
