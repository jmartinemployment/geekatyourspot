import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A buyer looking at TaxValet for multi-state
        sales&nbsp;tax
        compliance&nbsp;is almost always weighing it against two other approaches: trying to
        manage compliance in-house with spreadsheets or off-the-shelf software, or using another service
        provider that promises automation but leaves much of the work and risk on the business. Each path has a
        real cost, and the differences only get sharper as a small business crosses into multiple states and
        channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        DIY and basic software tools
        like&nbsp;<Link id={`tools-accounting-multi-state-sales-tax-nexus-thetaxvalet-comparing-taxjar${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>&nbsp;or
        QuickBooks Online offer entry-level automation for calculating tax on checkout and filing standard
        returns. For a business selling only through one or two channels and operating in a handful of states,
        these tools can work, up to a point. The problem is visibility. Software only tracks the transactions it
        sees. If your sales run through multiple platforms, or you take wholesale and phone orders, those
        numbers rarely get combined, and the system may show you “no nexus” in a state where you have already
        crossed the threshold. This is not a theoretical gap. For a South Florida business with inventory moving
        through Amazon FBA or a 3PL, or with remote team members in other states, the moment you cross $100,000
        or 200 transactions, you have legal duties in that state, whether or not your software caught it.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet is not just another software layer. It is a full-service operation that takes over the entire
        compliance lifecycle, starting with a comprehensive nexus analysis that covers both economic and
        physical presence triggers. Where software stops at what it can see, TaxValet’s team reviews all your
        channels, inventory locations, and overlooked triggers like affiliate marketing or drop shipping. It
        does not just flag the risk; it actually maps your exposure, handles the registration, and builds a
        compliance roadmap specific to your business’s footprint. This means you do not get stuck with a tool
        that handles the basics but leaves you exposed to audit risk for what it cannot track.</p>
      <p className="text-md text-white shadow-text pt-3">
        Other service providers may offer managed filings or support for permit registrations, but often with a
        patchwork approach. They automate what is easy and leave the hard parts, like local home-rule filings,
        data reconciliation across channels, or responding to state audit notices, back on your plate.
        TaxValet’s model is different. It is built to handle the full complexity of multi-state compliance,
        including the hard-to-catch triggers that other tools miss. This includes tracking inventory nexus,
        managing voluntary disclosure agreements to clean up past liabilities, and representing you in audits
        with a penalty guarantee. For a business that has already run into a state notice or audit, this is the
        difference between a provider who stands in for you and one who hands you a checklist.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another critical difference. Many software tools use tiered pricing based on transaction
        volume or number of states, with surprise overage fees as your business grows. TaxValet uses a flat
        monthly rate, starting at $560 per month, with no hidden charges. This is not just a billing preference,
        it is a structural difference. You know what you will pay, even if you expand into new states or your
        sales spike during the holidays. For a small team, this predictability can mean the difference between
        scaling confidently and holding back out of fear of unexpected costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Audit defense is the final dividing line. Off-the-shelf software and most semi-managed services do not
        cover you if there is an error or a missed filing. TaxValet’s guarantee is industry-leading: if a
        penalty or interest arises from their error, they cover it. In practical terms, this means you are not
        left scrambling for legal help or paying out of pocket for mistakes you did not know you made.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a South Florida small business, the choice is not just about features or automation level. It is
        about shifting the burden of compliance off your team and onto a partner who can see the whole picture,
        take on the risk, and free up your staff to focus on sales and growth. TaxValet’s approach is not for
        everyone, but in the landscape of DIY, software, and partial-service models, it is the only one that
        actually removes the weekly grind and audit anxiety from your business’s future.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxvalet-compares-to-diy-software-and-other-service-models" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Compares to DIY, Software, and Other Service Models
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxvalet-compares-to-diy-software-and-other-service-models-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxValet Compares to DIY, Software, and Other Service Models
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
