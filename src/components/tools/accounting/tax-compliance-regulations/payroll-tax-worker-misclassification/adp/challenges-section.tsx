export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Payroll tax and worker misclassification are not just paperwork headaches for small businesses in South
        Florida, they are direct threats to survival. In Miami-Dade, Broward, and West Palm Beach, most owners
        run lean teams. They rely on a mix of full-time staff, part-timers, and independent contractors to keep
        up with seasonal swings and project surges. But every time a new technician comes on board or a role
        shifts from W-2 to 1099, the risk of a costly error rises. The problem is not just complexity. It is the
        relentless pace of regulatory change and the real possibility that a single mistake, like misclassifying
        a worker or missing a payroll tax deadline, could wipe out months of profit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Owners who try to handle this manually face a maze of rules that change by state, by city, and by worker
        type. Each payroll run means checking overtime calculations, verifying hours, and confirming the right
        tax withholdings for every category of worker. The rules for overtime alone can shift depending on local
        ordinances, federal law, or even a change in business location. When a business expands across county
        lines or hires remote staff from out of state, the complexity multiplies. Without a dedicated HR or
        legal team, the owner is left to interpret guidance, scan for updates, and hope that nothing slips. This
        means hours lost every week to research, double-checking, and manual data entry, time that could be
        spent growing the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        The stakes are high. Misclassifying a contractor as an employee, or vice versa, does not just mean a
        slap on the wrist. It can trigger audits, back taxes, fines, and penalties that stack up fast. In
        industries like construction or hospitality, where turnover is high and roles shift constantly, the risk
        is even greater. A single flagged error can mean thousands in unexpected payroll taxes, a red flag for
        state or federal auditors, and a wave of paperwork to unravel what went wrong. And when owners use
        entry-level accounting software, they often assume compliance is built in. In reality, most basic tools
        do not track regulatory changes or flag classification risks. The result is a false sense of security
        that can unravel with one audit letter.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also make it easy for small mistakes to snowball. If overtime is miscalculated for even
        one pay period, the error can compound over weeks or months before anyone notices. The same goes for tax
        filings, if a deadline is missed or a form is filled incorrectly, the penalties can escalate quickly.
        Owners who rely on spreadsheets or siloed systems often find themselves chasing down missing data,
        correcting duplicate entries, or scrambling to explain discrepancies to tax authorities. Every payroll
        cycle becomes a high-stakes balancing act, with the owner caught between trying to scale the business
        and avoiding a compliance disaster.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support is another pain point. When a payroll or tax crisis hits, like a rejected filing or a flagged
        misclassification, owners often find themselves stuck in support queues or chatbot loops. Getting a real
        answer from a live expert can take hours, if it happens at all. In the meantime, the risk of penalties
        or disrupted payroll grows. For businesses in South Florida, where the economic landscape is gig-heavy
        and seasonal, the pace of change makes it even harder to keep up. Owners want to hire flexibly and scale
        their teams, but every new worker or contract brings a fresh set of compliance risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just in money paid to the IRS or state agencies. It is in lost hours, missed
        opportunities, and the constant anxiety that comes from never being sure if the business is truly
        compliant. Owners spend evenings and weekends trying to untangle guidance, update spreadsheets, or fix
        errors that could have been avoided with the right system. The real cost of manual payroll tax and
        worker classification is the time and energy it drains from every week, and the ever-present risk that
        one overlooked detail could bring everything to a halt.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-payroll-tax-and-worker-classification-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Payroll Tax and Worker Classification by Hand
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
              <h2 id="what-it-costs-to-keep-doing-payroll-tax-and-worker-classification-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Payroll Tax and Worker Classification by Hand
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
