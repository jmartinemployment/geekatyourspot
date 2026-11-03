
export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every hour a small business owner spends untangling tax data is an hour not spent growing the company.
        The true cost of running multi-state sales&nbsp;tax
        compliance&nbsp;by hand is not just the late-night spreadsheet work. It is the
        compounding effect of hours lost, errors made, deadlines missed, and the anxiety of not knowing what you
        owe until the penalties hit. The price tag is paid in cash, wasted time, and missed opportunities, and
        it is the team, not the tax authority, that absorbs every dollar of it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with time. Even a lean, two-person finance team can spend five to ten hours a month tracking sales
        by state, checking thresholds, and preparing filings. That figure explodes when sales channels multiply.
        Add one new marketplace or a second payment processor, and suddenly the manual reconciliation process
        can take an entire day or more. That is a full workday spent on compliance, not on sales, product, or
        customer service. For a business that wants to scale, these hours are pure overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        But time is only the surface. Errors are where the real costs show up. Missing a transaction count
        threshold in a state means you do not register when you should. By the time the mistake is caught, the
        business is liable for back taxes on every sale that should have been taxed, plus interest and
        penalties. This is not a hypothetical. It happens when the only check is a spreadsheet and the only
        alarm is a letter from a state agency. The business pays twice: first in money, then in the weeks spent
        fixing the problem and dealing with state auditors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delays stack up at every stage. Registration with a new state is rarely instant, and when a team is
        already behind, every day waiting for approval is another day of uncollected or improperly collected
        tax. Some businesses start collecting before registration is complete, creating fraud risk. Others wait
        too long and end up with a backlog of unfiled returns. Every delay is a liability that grows the longer
        it is left alone.</p>
      <p className="text-base text-white shadow-text pt-3">
        The risk is not limited to the business’s balance sheet. Inconsistent or inaccurate tax collection
        erodes customer trust. Over-collecting tax in the wrong jurisdiction leads to customer complaints and
        lost sales. Under-collecting exposes the business to audit risk and can mean paying tax out of pocket
        for sales already completed. The administrative burden is not just a problem for the finance team. It
        drags down the entire business, from sales to customer support.</p>
      <p className="text-base text-white shadow-text pt-3">
        Who absorbs all this? Not the tax software vendor, not the platform provider, and not the state. The
        business owner and their staff carry the burden. When a plugin breaks, the team is responsible for
        catching the issue and making up the difference. When a notice arrives, it is the owner who spends hours
        on the phone with state agencies. When manual reconciliation fails, the cost is paid in stress,
        distraction, and, often, lost momentum.</p>
      <p className="text-base text-white shadow-text pt-3">
        The hypothetical Broward retailer from the opening? If they miss a filing deadline in New York because
        their system did not track the threshold, they face hundreds in fines, on top of the hours spent
        scrambling to reconstruct sales history. When a plugin update disables tax collection on Shopify for a
        week, the owner must manually review every order, notify customers, and file amended returns. The hidden
        cost is not just the money paid to states. It is the time lost to tasks that should have been automated,
        and the opportunities missed while chasing compliance instead of growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the status quo: a system where small businesses pay with their own time, their own money, and
        their own peace of mind. The cost of doing nothing is not zero. It is a steady drain on every part of
        the business, felt most by the people who are supposed to be building it, not cleaning up after it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-price-of-manual-multi-state-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Price of Manual Multi-State Tax Compliance
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-price-of-manual-multi-state-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Price of Manual Multi-State Tax Compliance
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
