import Link from "next/link";
export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno is built for small businesses that sell across state lines and need reliable, automated
        sales&nbsp;tax compliance&nbsp;without hiring a
        dedicated tax department. If your team is running lean, one or two people in finance, a founder still
        involved in operations, and no in-house tax specialist, Quaderno is designed for your reality. The
        platform is especially strong for&nbsp;SaaS&nbsp;companies,
        digital agencies, online retailers, and any business that uses more than one sales channel or payment
        processor.</p>
      <p className="text-base text-white shadow-text pt-3">
        The fit is clearest for businesses facing these situations:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>You sell digital products, subscriptions, or services to customers in multiple states.</li>
        <li>You use a mix of payment platforms (Stripe, PayPal, Shopify, WooCommerce, Braintree) and need a single compliance engine.</li>
        <li>You have crossed or are approaching the $100,000 or 200-transaction threshold in states outside Florida, and cannot track all the rules by hand.</li>
        <li>You want tax-compliant invoices, automated threshold alerts, and CPA-ready reports without manual effort.</li>
        <li>Your team wants to avoid the cost and risk of late filings, missed registrations, or audit penalties.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno is not the best fit for every business. If you run a large operation with massive physical
        inventory, complex customs clearance, or freight management needs, Quaderno does not replace the
        specialized systems built for those logistics. Its strength is in digital-first, multi-channel sales
        where compliance risk comes from the complexity of tax rules, not from moving goods through ports and
        warehouses. If your business is entirely local, with all sales in Florida and no out-of-state customers,
        you will not see the full value of Quaderno’s multi-jurisdiction automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses early in their journey, those still selling only through one payment platform and without
        plans to expand, Quaderno may be more automation than you need right now. In these cases, the built-in
        tax tools in Stripe or Shopify can cover basic needs. But as soon as you add a second channel, or as
        sales start to rise in other states, the gaps appear. That is when the switch to Quaderno becomes
        urgent: the risk of missing a threshold or filing late is no longer theoretical.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is to map your sales footprint. Review where your customers are, which platforms you use,
        and whether you have crossed or are close to crossing state thresholds. If your business is already in
        multiple states, or if sales are trending upward, it is time to automate compliance before an audit or
        penalty forces your hand. Quaderno’s ability to pull in data from every channel means you get a clear
        picture from day one, not just a summary from one platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, the move to Quaderno is not just about reducing manual work, it
        is about protecting growth. The Friday afternoon scenario from the opening is not just a story; it is
        the weekly reality for any team trying to manage multi-state sales tax by hand. Quaderno removes that
        uncertainty, giving you the confidence to expand into new markets without the fear of hidden compliance
        debt.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business matches these criteria, the next move is to assess your current systems and data. Make
        sure your payment processors and storefronts can connect to Quaderno’s integrations. Plan for a
        straightforward implementation: the platform is designed for quick onboarding and does not require a
        full IT overhaul. For teams with more complex setups, or for those who want to ensure a smooth
        transition, working with a specialist like Geek @ Your Spot LLC can close the gap, handling configuration,
        data mapping, and integration so you get the full benefit of Quaderno’s automation from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The decision is not just about software; it is about what your business needs to stay compliant and
        focused as it grows. For digital-first, multi-channel small businesses, Quaderno is the tool that
        removes the manual burden and audit risk, so you can keep your attention on scaling, not scrambling.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-accounting-ai-multi-state-sales-tax-quaderno-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Do you sell to customers outside Florida?</li>
        <li>Where do you sell: your own website, online marketplaces (which ones), or in person?</li>
        <li>Are you registered to collect sales tax in any other state?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-accounting-tax-compliance-regulations-ai-multi-state-sales-tax-quaderno-xlink-blog${idSuffix}`} href="/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-need-to-know-and-fix-before-expanding" className="text-[#C83803] hover:underline">Sales Tax Nexus Before You Expand</Link> sets out the thresholds Florida, Texas, New York and California published as of October 20, 2026, and explains why a digital-first seller like a Quaderno customer has to reconcile Stripe, PayPal and Shopify totals itself, because no single platform reports combined sales by state. It also records what the evidence leaves out: no tool catches every edge case, and CPA-ready reports are only as accurate as the data fed in. The free diagnostic in our <Link id={`tools-accounting-tax-compliance-regulations-ai-multi-state-sales-tax-quaderno-xlink-pillar${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] hover:underline">AI Multi-State Sales Tax</Link> guide is where that data gets mapped by channel and state before Quaderno is connected.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-quaderno-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Quaderno Is For, Who It Is Not, and What to Do Next
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-quaderno-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Quaderno Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
