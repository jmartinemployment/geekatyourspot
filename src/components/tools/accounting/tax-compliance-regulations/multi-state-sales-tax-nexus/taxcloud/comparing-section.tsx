
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida weighing TaxCloud are usually looking at three main options: sticking
        with manual compliance, using accounting software with basic sales tax features, or investing in a
        dedicated tax automation platform. Each approach comes with its own costs and risks, especially as soon
        as a business crosses state lines and triggers economic or physical nexus in multiple states.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual compliance is the default for many small teams. They rely on spreadsheets, sales reports from
        each platform, and reminders on the calendar to track filing deadlines. This approach works only as long
        as the business is selling into one or two states, and even then, it&#39;s fragile. The moment sales
        cross a state’s $100,000 or 200-transaction threshold, the rules change. Now, the team has to register
        in new states, track each jurisdiction’s deadlines, and file zero-returns even in periods with no sales.
        Missing just one of these steps triggers penalties and exposes the business to audit risk. Manual
        processes break down fast as sales volume and state count grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Accounting software like QuickBooks or Xero adds some automation, but these platforms are not designed
        for multi-state sales tax. They can record payments and generate basic sales tax reports, but they do
        not track economic nexus, alert you when you cross a threshold, or handle registration and filing in new
        states. QuickBooks, for example, lets you record sales tax payments but leaves all filing and remittance
        to the business. It does not monitor where you have triggered nexus or alert you when you need to
        register. Exemption certificate management, audit trails, and support for Streamlined Sales Tax (SST)
        are missing entirely. As soon as a business needs to comply in more than one or two states, these tools
        become a bottleneck rather than a solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dedicated tax automation platforms like TaxCloud are built for this exact problem. What sets TaxCloud
        apart is its focus on end-to-end automation for small and mid-sized businesses that need to manage
        compliance across dozens of states, not just one. Unlike manual processes and generic accounting
        platforms, TaxCloud connects directly to your sales channels, Shopify, BigCommerce, WooCommerce,
        Magento, QuickBooks Online, Stripe, Chargebee, and more, so it can see every transaction, no matter
        where it happens. This unified view is critical: it means TaxCloud can track cumulative sales across all
        channels, alert you before you cross a nexus threshold, and automate registration and filing the moment
        you do.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud’s real differentiator is its Certified Service Provider (CSP) status for the Streamlined Sales
        Tax (SST) program. For eligible businesses, this means free registration, calculation, and filing in 24
        participating states. No other approach, manual, accounting software, or even some other tax platforms,
        can match this: it removes filing fees and cuts recurring compliance costs to zero in those states. For
        businesses that operate in both SST and non-SST states, TaxCloud still automates filing and remittance,
        but charges a transparent per-return fee that drops with volume. This makes the cost predictable and
        usually much lower than hiring a CPA or trying to keep up with each state’s rules by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud also delivers rooftop-level rate accuracy. Most platforms and manual methods rely on ZIP code
        tables, which can miss critical local tax districts and leave a business under-collecting or
        over-collecting tax. TaxCloud’s engine calculates rates down to the exact address, not just the ZIP
        code, so the right amount is collected at checkout every time. This is essential for compliance in
        home-rule states like Colorado and Louisiana, where tax rates can change within the same city block.</p>
      <p className="text-md text-white shadow-text pt-3">
        Compared to other tax automation vendors, TaxCloud is built for the small business segment, not just the
        enterprise. Some competitors offer deep customization and global coverage, but with steep setup fees,
        complex contracts, and a focus on large teams with dedicated tax staff. TaxCloud’s pricing,
        integrations, and support model are designed for businesses that need to automate compliance without
        hiring a tax department. US-based support, dedicated onboarding, and guided migration from other
        platforms are included, not an extra charge.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where TaxCloud stands out most is in how it reduces the risk of audit and penalty. Manual methods and
        generic tools leave gaps, missed thresholds, incorrect rates, late filings, that can trigger years of
        back taxes and fines. TaxCloud closes these gaps by automating every step, from nexus tracking to filing
        and remittance, and by keeping a full audit trail that is ready if the state comes calling. For South
        Florida businesses selling online, wholesale,
        or&nbsp;SaaS, this
        means they can grow across state lines without tripping over compliance landmines.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, TaxCloud sits in a different category from manual compliance and basic accounting software.
        It is a purpose-built platform for small and mid-sized businesses that need to automate multi-state
        sales&nbsp;tax
        compliance, with a focus on affordability, automation, and audit protection. For any
        business that has outgrown manual processes or is struggling to keep up with more than one or two
        states, TaxCloud is not just an upgrade, it is a way to keep scaling without adding compliance risk or
        administrative overhead.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxcloud-compares-to-other-approaches-for-multi-state-sales-tax-compliance" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Compares to Other Approaches for Multi-State Sales Tax Compliance
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
              <h2 id="how-taxcloud-compares-to-other-approaches-for-multi-state-sales-tax-compliance-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxCloud Compares to Other Approaches for Multi-State Sales Tax Compliance
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
