import Link from "next/link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a small landscaping company in Miami-Dade, five trucks out before dawn, with a crew built from a
        mix of regulars and freelancers. The owner’s phone buzzes nonstop—one worker wants direct deposit,
        another needs a W-2 reissued, a third, a contractor from last season, calls asking about a missing tax
        form. Payroll week means a spreadsheet marathon: overtime hours, job sites across county lines, half a
        dozen 1099s to chase, and a stack of paystubs waiting to be hand-signed. Every time a worker’s status
        shifts, so do the rules. It’s not just a headache; it’s a minefield. One wrong move—classifying a
        full-timer as a contractor, missing a new local tax rule, or submitting payroll late—and the state or
        IRS is knocking. The penalties don’t care if you meant well or just didn’t have time to double-check.
        Too many South Florida businesses get caught here: the gig economy’s promise of flexibility turns into a
        compliance nightmare, with fines that can wipe out months of work.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the reality for small business owners from Broward to West Palm Beach. You want to scale up when
        the busy season hits, but every hire—full-time, part-time, or temp—brings a new tangle of payroll tax
        and worker misclassification risk. The rules change by jurisdiction, job type, and now even by remote
        location. One missed state registration, one contractor paid on the wrong form, one late payroll tax
        deposit, and the audit risk spikes. You’re not just paying workers; you’re betting your business that
        every classification, every tax filing, every deadline is right.</p>
      <p className="text-md text-white shadow-text pt-3">
        That’s where we come in. At Geek @ Your Spot, we don’t just set up accounting software and wish you
        luck. We design and implement AI-driven, automated compliance guardrails that fit your stack and your
        workflow—so even as your workforce flexes, your filings, classifications, and deadlines stay locked
        down. Payroll tax gets filed on autopilot, misclassification flags go up before you hit
        &#39;submit&#39;, and every regulatory update is built in behind the scenes. The result: no more
        late-night spreadsheet panic, no more hoping you guessed right on worker status, no more losing sleep
        over audit threats. You get the same 24/7 operational protection and bulletproof audit trail as a
        company ten times your size, and you don’t need to hire a legal team to get it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Payroll Tax &amp; Worker Misclassification isn’t just a box to check—it’s the gatekeeper for your
        business’s survival. In South Florida’s high-turnover, multi-county economy, being wrong even once can
        cost more than you made all year. Our approach means you get the flexibility and speed you need to
        compete, without gambling the business on every pay run. This page shows you, step by step, how to move
        from risk and confusion to clarity, automation, and peace of mind—so you can grow without fear of the
        next audit notice.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-accounting-payroll-tax-worker-misclassification-lede-blog" href="/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-must-know-before-choosing-compliance-solutions" className="text-[#C83803] hover:underline">What Miami Small Businesses Must Know Before Choosing Compliance Solutions</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="payroll-tax-worker-misclassification-why-small-businesses-in-south-florida-can-t-afford-to-gamble" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Payroll Tax &amp; Worker Misclassification: Why Small Businesses in South Florida Can’t Afford to Gamble
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="payroll-tax-worker-misclassification-why-small-businesses-in-south-florida-can-t-afford-to-gamble" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Payroll Tax &amp; Worker Misclassification: Why Small Businesses in South Florida Can’t Afford to Gamble
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
