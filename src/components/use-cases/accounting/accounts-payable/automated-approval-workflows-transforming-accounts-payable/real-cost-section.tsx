export default function RealCostSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In many small businesses, the accounts payable (AP) process is plagued by inefficiencies that go
        unnoticed until they cause significant issues. Often, the approval process is informal, relying on
        verbal confirmations or scattered email approvals. This lack of a structured system means that
        invoices can be approved without proper documentation, leading to late payments or payments made
        without adequate review. These informal methods treat approval as mere communication rather than a
        critical financial control, leaving the business vulnerable to errors and potential fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another common problem is that every invoice follows the same path, regardless of its value or risk
        level. A small recurring charge might wait for the same approval as a substantial equipment purchase,
        causing unnecessary delays. This lack of risk-based design conditions employees to circumvent the
        process, as the wait times and bottlenecks become apparent. Implementing automated approval workflows
        can streamline this by automatically processing low-risk invoices and reserving detailed reviews for
        high-stakes items.</p>
      <p className="text-md text-white shadow-text pt-3">
        For many small businesses, the owner is a bottleneck in the approval process. Owners often insist on
        reviewing every invoice to maintain control over spending. However, this centralized visibility is not
        always practical, especially when the owner is unavailable. This approach can lead to missed
        opportunities for timely payments and can strain vendor relationships. Automated approval workflows
        allow owners to retain oversight on significant expenses while delegating routine approvals, thus
        preserving control without being bogged down by minutiae.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, the lack of active monitoring in the AP process means that problems are often discovered
        too late. Without a centralized system, bookkeepers may only realize an invoice lacks approval when
        it&#39;s overdue. This reactive approach leads to missed discounts and strained vendor relations.
        Implementing a system with reminders, escalations, and dashboards can ensure that every invoice is
        tracked and processed on time, preventing these issues from arising.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, controls in many small businesses are only put in place after a loss or audit issue
        highlights their absence. Approvals often lack structured guardrails, leading to unauthorized
        purchases or duplicated payments. By implementing automated approval workflows, businesses can ensure
        that every invoice is reviewed and authorized correctly, reducing the risk of financial discrepancies
        and enhancing overall financial control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-approval-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Approval Processes
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
              <h2 id="the-real-cost-of-manual-approval-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Approval Processes
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
