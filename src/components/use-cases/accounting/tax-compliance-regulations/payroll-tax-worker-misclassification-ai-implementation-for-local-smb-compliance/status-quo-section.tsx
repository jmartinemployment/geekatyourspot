export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business owner in South Florida who keeps payroll in spreadsheets or runs HR off the side of
        their desk knows the invisible costs add up fast. The hours lost to manual payroll tax calculations,
        chasing down missing forms, or fixing data entry mistakes are just the start. For a team of a dozen, it
        can mean a full day every pay cycle spent on checking, double-checking, and fixing errors—hours that
        could have gone to sales or customer work. When overtime rules change or a new local tax kicks in, every
        misstep is a potential penalty waiting to hit the bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delays are not just about time—they create real financial risk. When payroll tax deposits are missed or
        filed late, the IRS does not negotiate. The penalty schedule is automatic and steep: even a few days
        late, and the fines quickly outstrip the cost of doing it right the first time. Missed state
        registrations, wrong county codes, or forgotten local surcharges result in fines that are not forgiven
        because a business is small or busy. The risk is absorbed by the owner, who is often personally liable
        for payroll errors, not just the company.</p>
      <p className="text-md text-white shadow-text pt-3">
        Errors in classification—treating employees as contractors or vice versa—bring a different kind of
        exposure. The immediate savings of skipping payroll taxes or benefits for a worker misclassified as a
        contractor can be wiped out in a single audit. The penalties include back taxes, interest, and often
        double payments for wage-related claims. If a contractor files for unemployment or a worker files a wage
        claim, the state will look at the facts, not the paperwork. The financial hit can be enough to threaten
        the business itself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delay is compounded by manual workflows. When every year-end means scrambling for W-2s and 1099s,
        chasing contractors for missing tax IDs, or fixing forms that bounce back from the IRS, the hours lost
        multiply. Each correction takes an owner or admin away from customers, staff, or growth projects. The
        cost is not just the penalty—it is the opportunity lost to the business while energy is spent fixing
        compliance issues that could have been prevented with the right system.</p>
      <p className="text-md text-white shadow-text pt-3">
        The risk from manual work grows as the business scales. Adding locations or hiring across county or
        state lines multiplies the paperwork and the chance for an error to slip through. A single
        misstep—forgetting a new hire’s local tax setup, missing a quarterly deposit, or failing to update a
        wage base when the law changes—can spiral into a fine or audit. The burden is not spread; it lands
        squarely on the owner or the person stuck with HR and payroll on top of their real job. In practical
        terms, this means less time for growth and more time firefighting compliance problems.</p>
      <p className="text-md text-white shadow-text pt-3">
        The ultimate cost? Trust and peace of mind. Staff who are paid late or incorrectly lose confidence in
        their employer; contractors who do not get timely 1099s or have their status mishandled may take their
        grievances to state agencies. This is how reputational risk becomes operational risk. For a small
        business, one public wage claim, one tax lien, or one high-profile audit can do lasting damage that goes
        far beyond the initial fine. In the end, the cost of doing payroll and compliance by hand is paid in
        time, money, and lost focus—the very things a business needs to survive and grow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-payroll-and-misclassification-who-pays-the-price" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Payroll and Misclassification: Who Pays the Price
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
              <h2 id="the-hidden-costs-of-manual-payroll-and-misclassification-who-pays-the-price" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Payroll and Misclassification: Who Pays the Price
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
