export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small e-commerce team in South Florida, like the one in the opening story, faces a sudden shift from
        local growth to national complexity the moment they cross a state’s economic nexus line. The trigger is
        not subtle: $100,000 in revenue or 200 transactions in a single state, and the compliance burden
        multiplies overnight. This is not just a new column in the spreadsheet. It is a second job layered onto
        every Friday afternoon, every payroll run, every time the owner tries to plan for next quarter instead
        of catching up on last quarter’s filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real pain of Multi-State Sales Tax Nexus is not the tax itself, but the avalanche of administrative
        work it creates. Each state has its own deadlines, forms, and rules for what is taxable and what is not.
        Shipping is taxable in some states, not in others. Digital goods, warranties, and bundled products can
        flip between categories depending on the jurisdiction. The team must track all of this in real time, or
        risk a missed filing, a penalty, or a full audit, each of which can wipe out months of margin with a
        single letter from a Department of Revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual ledger verification is the first place things fall apart. Small businesses try to reconcile
        thousands of transactions across Shopify, Amazon, their own site, and maybe a pop-up at a local event.
        Each platform exports in its own format. Trying to match orders, payments, and tax collected by hand is
        a recipe for mathematical errors. Spreadsheets break, formulas get overwritten, and the more states
        involved, the more likely it is that something gets missed. Even a single uncaught error can mean paying
        tax out of pocket months after the sale, long after the cash has been spent.</p>
      <p className="text-md text-white shadow-text pt-3">
        Delayed threshold response is the next trap. Without real-time tracking, a business might cross a nexus
        threshold in March but not realize it until June or July, when a state sends a notice. At that point,
        the business owes back taxes on every sale since crossing the line, plus penalties and interest. This is
        not just a cash flow hit, it is a credibility problem with state authorities, and it puts the business
        at risk for future audits. The owner, who thought she was growing responsibly, now faces a crisis that
        could have been avoided with better systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Marketplace double-counting is a silent killer. Platforms like Amazon and eBay often collect and remit
        sales tax on behalf of third-party sellers, but the rules are different in every state. If the business
        does not keep careful records, it can end up paying tax twice, once through the marketplace and again
        through its own filings. This destroys profit margins and creates confusion when trying to reconcile
        accounts at month-end. The team ends up spending hours tracking down which sales were handled by the
        marketplace and which were not, often with incomplete data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Regional tax rules add another layer of risk. Shipping fees might be taxable in Georgia but not in
        Florida. A warranty on a product could be taxed in one state and exempt in another. Without a granular
        engine to apply the right rules at checkout, the business either under-collects (and pays the difference
        later) or over-collects (and creates customer service headaches). The team spends time researching state
        laws, updating settings, and still worries they missed something.</p>
      <p className="text-md text-white shadow-text pt-3">
        Executive visibility is usually the last thing to go. Owners and managers lose sight of where tax
        liabilities are building up. There is no clear dashboard, just a series of spreadsheets and emails. This
        makes it impossible to plan for cash flow, budget for future tax payments, or spot risks before they
        become emergencies. The result is a business that is always reactive, fixing problems after they appear,
        never ahead of them.</p>
      <p className="text-md text-white shadow-text pt-3">
        These are not edge cases. They are the weekly reality for small businesses trying to scale across state
        lines without dedicated tax staff. Every new state is another set of rules, another deadline, another
        chance for something to slip through the cracks. The cost is measured in hours lost, errors made, and
        opportunities missed. Growth stalls, stress climbs, and the business spends more time on compliance than
        on customers. This is the wall that stops most small businesses from scaling beyond their home state.
        TaxJar exists to break it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
