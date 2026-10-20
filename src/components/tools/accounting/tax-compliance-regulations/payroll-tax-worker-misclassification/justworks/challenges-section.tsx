export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Running payroll and getting worker classification right is not just a paperwork exercise for small
        businesses in South Florida. It’s a daily risk. When business owners in Miami-Dade, Broward, or Palm
        Beach counties try to manage it themselves, the cost is measured in more than just dollars. It’s the
        hours lost rechecking timesheets, the stress of guessing which forms to file, and the lingering worry
        that one mistake could trigger an audit or penalty that the business can’t absorb.</p>
      <p className="text-md text-white shadow-text pt-3">
        The complexity comes from the mix of W-2 employees and 1099 contractors that make up most small teams in
        the region. In hospitality, services, construction, and real estate, workforce needs shift fast: peak
        seasons, special projects, or last-minute coverage. Each role may require a different tax treatment and
        compliance checklist. Owners are left to decide, often without legal or HR help, who gets classified as
        what, and which taxes to withhold and remit. The IRS and state agencies don’t care about intent. If a
        worker is misclassified, the penalties can wipe out months of profit. A single error in classifying
        someone as a contractor when they should be an employee means back taxes, fines, and possibly paying out
        missed benefits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual payroll brings its own risks. Each pay period, the owner or a trusted manager sits down with
        spreadsheets, calculators, and a stack of forms. They try to keep up with changing local, state, and
        federal requirements. In Florida, the lack of state income tax is a relief, but many workers live or
        work across state lines, triggering multi-state reporting. One missed filing deadline or an underpayment
        on FICA taxes can mean a notice from the IRS or the Florida Department of Revenue. The cost is not just
        the fine. It’s the hours spent pulling records, the disruption to business, and the loss of trust from
        employees who expect their paychecks to be right every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The paperwork doesn’t end with payday. Each quarter brings new reporting deadlines. Federal forms like
        941, state unemployment filings, and annual W-2s and 1099s have to be issued on time and with the right
        numbers. Every new hire or departing worker means more forms and more decisions. Was the right tax
        withheld? Was overtime tracked and paid correctly? For a team with no dedicated HR, these questions can
        eat up Fridays and weekends, pulling focus from customers and growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest risk is the one you don’t see coming. Audits are not just for big companies; small
        businesses are often targeted because their processes are manual and their records are thin. When a
        state or federal agency questions a classification or a missing deposit, the owner has to prove every
        decision, sometimes years after the fact. Without airtight records and a clear system, this becomes a
        scramble. The business that was focused on serving clients is now in survival mode, trying to avoid
        penalties that could end the year in the red.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost of doing it by hand is not just financial. It’s the opportunity cost of lost time, the anxiety
        of not knowing if you’re fully compliant, and the risk that one misstep will bring everything to a halt.
        Small teams can’t afford to treat payroll and worker classification as side jobs. The process is too
        complex, the penalties too steep, and the margin for error too thin. That’s why the question is not
        whether to automate, but how to do it in a way that fits the business, without adding another layer of
        complexity or cost.</p>
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
              <h2 id="what-it-costs-to-keep-doing-payroll-tax-and-worker-classification-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
