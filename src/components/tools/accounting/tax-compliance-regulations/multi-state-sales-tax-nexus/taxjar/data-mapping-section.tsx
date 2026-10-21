import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The foundation of a successful TaxJar deployment is clean, well-structured data. This is not just a
        technical detail; it is the difference between accurate, automated compliance and a tangle of mismatched
        records that create more manual work. For small businesses facing multi-state sales tax, the upfront
        data mapping decisions set the tone for everything that follows.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar depends on a clear mapping between your sales data and the tax codes that drive calculation and
        filing. The platform is built to handle high-volume, multi-channel environments, but it cannot guess
        which products, services, or customer types are taxable in each state. That means the first step is
        aligning your product catalog and transaction records to the tax categories recognized by TaxJar.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most critical mapping decisions include:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Product tax codes: Every item you sell needs to be linked to the correct tax code. TaxJar supports smart product classification, letting you assign codes that reflect whether a product is taxable, exempt, or subject to special rules (like food,&nbsp;SaaS, or digital goods). This ensures the platform only collects tax where it is required, and at the right rate for each jurisdiction.</li>
        <li>Address precision: TaxJar calculates sales tax rates based on full customer addresses, not just zip codes. That means your order data must include complete, validated shipping and billing addresses. This is especially important for states with local or district-level taxes, where a single zip code can cover multiple tax zones.</li>
        <li>Marketplace and direct sales separation: For businesses selling across both marketplaces (like Amazon or Etsy) and direct channels, it is essential to flag which transactions are marketplace-facilitated. TaxJar uses this mapping to avoid double-counting sales tax on transactions where the marketplace has already collected and remitted tax on your behalf.</li>
        <li>Customer exemption status: If you sell to tax-exempt customers (like nonprofits or resellers), those records must be tagged and linked to valid exemption certificates. TaxJar supports exemption tracking and certificate storage, but only if the data is structured to identify exempt buyers at the transaction level.</li>
        <li>Historical data consistency: When importing past sales for compliance or audit purposes, make sure historical records use the same product codes, address formats, and channel tags as your current data. Inconsistent mapping is a leading cause of reconciliation errors and missed filings.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s platform includes tools and dashboards to help with this mapping. The AI-driven categorization
        feature assists with assigning product codes, while address validation APIs catch errors before they
        cause calculation mistakes. For teams with complex catalogs or legacy data, the initial mapping can be
        time-consuming, but it pays off in reduced errors and faster filings down the line.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small business in West Palm Beach, for example, might sell apparel, digital downloads, and food items
        across its own website and several marketplaces. Each product type faces different tax rules in
        different states. By mapping each SKU to the correct tax code in TaxJar, and ensuring address data is
        complete, the business can trust that sales tax is calculated and filed correctly for every order, no
        matter where it ships.</p>
      <p className="text-base text-white shadow-text pt-3">
        The data mapping process is not a one-time task. As your product catalog grows or as states update their
        tax rules, you will need to review and update mappings. TaxJar’s continuous law monitoring and AI
        recommendations help keep your codes current, but the initial structure must be solid.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Geek @ Your Spot LLC leads a TaxJar rollout, the team starts with
        a&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment: reviewing your
        product list, sales history, and customer records for gaps or inconsistencies. They work with you to
        standardize codes, validate addresses, and set up exemption tracking before the platform goes live. This
        upfront investment prevents the most common sources of compliance failure, misapplied rates, missed
        exemptions, and duplicate filings.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, the accuracy and structure of your data are what let TaxJar automate compliance instead of
        just moving manual work from spreadsheets to a dashboard. The right data decisions upfront mean less
        time troubleshooting and more time growing your business across state lines.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-mapping-and-structure-the-decisions-that-make-or-break-a-taxjar-rollout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Make or Break a TaxJar Rollout
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
              <h2 id="data-mapping-and-structure-the-decisions-that-make-or-break-a-taxjar-rollout-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Mapping and Structure: The Decisions That Make or Break a TaxJar Rollout
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
