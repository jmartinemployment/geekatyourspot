export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting the data structure right at the start is what makes Cashflowfrog useful from day one. The
        platform is flexible, but a few key mapping choices determine whether the forecasts are clear or
        confusing, and whether the team can act on what they see.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision is how to map the business’s chart of accounts to Cashflowfrog’s forecast categories.
        For most small businesses, this means linking revenue, expense, and cash accounts from QuickBooks, Xero,
        or another accounting system to the forecast’s inflow and outflow lines. Geek @ Your Spot LLC reviews the
        existing chart of accounts with the client, then maps each account to the right forecast category. This
        is not just a technical step, it shapes how cash movement shows up on the dashboard. A poorly mapped
        structure can bury key costs or hide revenue spikes, making the forecast less useful.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that operate across multiple entities, currencies, or locations, the mapping step
        includes deciding how to consolidate and segment the data. Cashflowfrog supports unlimited entities and
        native multi-currency consolidation, but the value comes from deciding which entities to roll up
        together and which to view separately. Geek @ Your Spot LLC guides the client through these choices, so the
        leadership team sees the right level of detail for planning, whether that’s a single company view, a
        region, or the entire group.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customer and vendor mapping is another critical decision. Cashflowfrog ranks customers by payment
        punctuality, sales, and collection history. To get this right, the system needs customer records mapped
        cleanly from the accounting software. If customer names are inconsistent or accounts are duplicated,
        payment insights will be skewed. Geek @ Your Spot LLC helps clean up customer and vendor lists during setup,
        so the payment behavior analysis is accurate and actionable.</p>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to scenario planning and rolling forecasts, the mapping of recurring and one-time
        transactions matters. Cashflowfrog allows the team to set up rules for recurring expenses (like payroll
        or rent) and to tag one-off items (like a tax bill or equipment purchase). The upfront decision is which
        transactions should be automated as recurring projections and which need to be entered manually as
        unique events. Geek @ Your Spot LLC works with the client to define these patterns based on past data, so
        the forecast stays live and does not drift out of sync with reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bank account and general ledger (GL) account selection is another mapping step that affects forecast
        accuracy. Cashflowfrog lets the user choose which accounts feed into the forecast and which are
        excluded. For example, a reserve account or dormant bank account may not need to appear in daily cash
        flow planning. Geek @ Your Spot LLC reviews the list of accounts with the client, making sure only the
        relevant ones are included, so the cash view reflects what is actually available for operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams still running on spreadsheets, the initial mapping involves structuring the data so
        Cashflowfrog can ingest it. This means standardizing columns and formats for bank transactions,
        invoices, and payments. Geek @ Your Spot LLC provides templates and checks the data for completeness and
        consistency before upload, so the first forecast is not thrown off by missing or misaligned entries.</p>
      <p className="text-md text-white shadow-text pt-3">
        As the system goes live, mapping decisions must also account for user roles and access. Cashflowfrog
        supports role-based access, so not every team member sees every detail. Geek @ Your Spot LLC helps define
        who needs to view, edit, or approve forecasts and scenarios, aligning access with the client’s internal
        controls and audit requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, mapping is not a one-time task. As the business changes, adding new products, opening new
        locations, or restructuring departments, Cashflowfrog’s mapping can be updated without a full
        re-implementation. Geek @ Your Spot LLC trains the client’s admin users on how to adjust mappings as needed,
        so the forecast keeps pace with the business, not the other way around.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the upfront data structure and mapping decisions in Cashflowfrog set the foundation for
        everything that follows. When these choices are made carefully, the platform delivers forecasts and
        insights that match how the business actually runs. Geek @ Your Spot LLC’s role is to make sure the mapping
        reflects the real world, so the team can trust what they see and act with confidence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-the-decisions-that-shape-a-successful-cashflowfrog-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: The Decisions That Shape a Successful Cashflowfrog Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-the-decisions-that-shape-a-successful-cashflowfrog-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping: The Decisions That Shape a Successful Cashflowfrog Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
