
export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing&nbsp;tax
        compliance&nbsp;automation in your South Florida business can be a game-changer, but it
        is not always the right move for everyone. Automation is ideal for businesses with complex tax
        obligations across multiple jurisdictions, like those frequently crossing county lines in Miami-Dade,
        Broward, and Palm Beach. These businesses face a high risk of errors and penalties due to the intricate
        web of local and state tax laws. The right automation tools, such as those provided by Zamp and
        TaxCloud, can significantly reduce these risks by offering real-time tax calculations and automated
        filing processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, tax compliance automation may not be necessary for very small businesses or those with
        straightforward tax obligations confined to a single jurisdiction. For instance, a local Miami bakery
        that only sells within the city limits might not benefit much from a complex automation system. The
        initial setup costs and ongoing management of such systems might outweigh the benefits for smaller
        operations with simple tax structures.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, businesses with highly variable operations or those in the early stages of growth might find
        manual systems more flexible. Automation systems require stable data inputs and defined processes to
        function effectively. If your business is still defining its sales channels or market reach, it might be
        premature to lock into a system that automates processes that are still evolving.</p>
      <p className="text-md text-white shadow-text pt-3">
        The key is to balance the complexity of your tax obligations with the capabilities of your team and the
        sophistication of your business processes. If your current system is causing bottlenecks, frequent
        errors, or missed deadlines, automation might be the solution. For instance, TaxValet offers audit
        protection and exemption certificate management, which can be invaluable for businesses that struggle
        with these aspects manually.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, if your team is capable of handling your current tax load efficiently and accurately,
        and if your operations are unlikely to reach the complexity that necessitates automation, it may be wise
        to continue with your existing processes. Businesses should evaluate their growth trajectory, existing
        pain points, and resource availability before deciding to implement tax compliance automation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-to-choose-tax-compliance-automation-and-when-to-avoid-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Choose Tax Compliance Automation and When to Avoid It
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-to-choose-tax-compliance-automation-and-when-to-avoid-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Choose Tax Compliance Automation and When to Avoid It
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
