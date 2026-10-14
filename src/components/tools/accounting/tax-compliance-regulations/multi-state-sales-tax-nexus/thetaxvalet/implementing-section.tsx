export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting TaxValet up and running in a small business environment is a process that cuts out much of the
        pain that comes with traditional sales tax automation tools. Unlike off-the-shelf software, which leaves
        you piecing together integrations and hoping for clean data, TaxValet is structured to reduce friction
        at every step. Most teams in Miami-Dade, Broward, or West Palm Beach come to this point after spending
        too many hours each month tracking thresholds, wrestling with spreadsheets, or chasing down filings for
        states they barely sell into. TaxValet is built to end that cycle by taking over the entire compliance
        workflow and plugging directly into your sales channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        The main shortcut in going live is TaxValet’s done-for-you approach. There is no expectation that your
        team will configure state-by-state rules or map product codes by hand. TaxValet’s own team researches
        the specific taxability of your products and applies state-specific rules for you, directly inside your
        storefronts and sales platforms. For a business that sells through Shopify, Amazon, and direct invoices,
        this means a single onboarding process covers all the channels at once. You do not have to manage
        separate connectors or worry about missing a sales stream that could trigger a new nexus obligation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The onboarding sequence starts with a full nexus analysis. TaxValet reviews your sales activity,
        fulfillment footprint, employee locations, and other triggers to map out exactly where you have
        obligations today and where you are at risk of crossing new thresholds. This is not just a software scan
        of your latest transactions. TaxValet’s team looks for hidden triggers, like inventory in third-party
        warehouses, remote employees, or affiliate marketing relationships, that most platforms miss. The result
        is a compliance roadmap that covers both economic and physical nexus, tailored to your actual
        operations.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Initial data gathering: You provide TaxValet with access to your sales channels, product catalogs, and historical transaction data. If you have multiple storefronts or sales systems, TaxValet pulls in all relevant data to ensure nothing is missed.</li>
        <li>Nexus review and compliance mapping: TaxValet’s team runs a thorough analysis to determine where you need to register, file, and collect, based on both revenue and transaction counts as well as physical presence factors.</li>
        <li>Product taxability setup: State tax rules differ not just by location but by product type. TaxValet researches your catalog and configures tax settings for each item, so you are not left guessing or applying broad categories that lead to errors.</li>
        <li>Permit registration and account setup: Where you need new sales tax permits, TaxValet manages the application process and ensures each state account is opened on time. If you have old or unneeded permits, they identify and close them to reduce your compliance workload.</li>
        <li>Filing and payment integration: With permits in place and data mapped, TaxValet sets up automated filings and payments for each jurisdiction. This includes managing deadlines, remitting funds, and confirming each payment is received and credited.</li>
        <li>Ongoing monitoring: After launch, TaxValet continuously tracks your sales activity and state law changes. If a new threshold is crossed or a state updates its requirements, your compliance plan is updated automatically.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        No two businesses start from the same place, so the actual go-live timeline depends on the number of
        states, sales channels, and historical issues to clean up. What shortens the process is TaxValet’s
        ability to handle the heavy lifting, data reconciliation, permit management, and configuration, without
        requiring your team to become tax experts. There’s no need for your staff to learn new software
        interfaces or keep up with the latest legislative changes. TaxValet’s team does that for you, and
        unlimited live support is built in if you have questions or need to walk through a complex scenario.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, this means a founder who spent Friday afternoons sorting through state notices and
        reconciling sales data can now spend that time on actual business growth. TaxValet’s onboarding removes
        the guesswork, the manual data entry, and the risk of missing a compliance deadline. You get a
        predictable monthly fee, plans start at $560 per month, and a clear handoff of responsibility. Your team
        stays focused on sales and service, not on tracking which state changed its tax rules this quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida small businesses, the main difference is in the handoff: you are not just buying a
        tool, you are transferring the compliance workload to a team that specializes in multi-state tax. This
        is what makes TaxValet’s go-live process both faster and safer than trying to bolt together generic
        software and hoping for the best.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-taxvalet-in-your-existing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch TaxValet in Your Existing Stack
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-taxvalet-in-your-existing-stack" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch TaxValet in Your Existing Stack
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
