import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every multi-state sales&nbsp;<GlossaryLink slug="tax-compliance">tax
        compliance</GlossaryLink>&nbsp;rollout fails or succeeds on the quality and reach of its data. The
        system can only automate what it can see, and most small businesses underestimate just how scattered
        their sales data is. You need a single, complete picture of every transaction, across every sales
        channel, payment processor, and inventory location, in real time. Miss a source, and you risk
        underreporting, late filings, or missing a new nexus trigger entirely.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with transaction data. This is not just a download from Shopify or your accounting platform. You
        need sales broken down by state, city, county, and sometimes even down to the rooftop level, because
        local rules change within a single ZIP code. TaxCloud, for example, pulls in order data directly from
        Shopify, WooCommerce, Amazon, and BigCommerce, mapping each transaction to the right jurisdiction and
        applying the correct rate. This level of detail is not a nice-to-have; it is the only way to avoid
        under-collecting in places with home-rule districts or unexpected surtaxes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The second layer is payment data. Many teams assume their main e-commerce platform holds the master
        record. In reality, revenue comes in through Stripe, PayPal, Square, or even ACH for wholesale sales.
        Quaderno is built for this complexity. It connects to Stripe, PayPal, and Braintree, aggregating every
        payment and tying it back to the right invoice and buyer location. If you skip this integration, you
        cannot see your real sales volume by state, a gap that can trigger compliance failures as soon as you
        cross a threshold.</p>
      <p className="text-md text-white shadow-text pt-3">
        Inventory matters, too. If you use Amazon FBA, a third-party warehouse, or even a 3PL service, your
        physical presence can shift overnight. TaxValet tracks where inventory sits and moves, linking asset
        locations directly to the states where you may owe tax. This is critical for businesses that sell both
        direct-to-consumer and through marketplaces, since physical nexus can form in any state your inventory
        touches, even if sales stay below the economic threshold.</p>
      <p className="text-md text-white shadow-text pt-3">
        After transaction and payment data, you need to manage exemption certificates, product codes, and refund
        events. Zamp approaches this with hands-on onboarding, mapping your entire product catalog to the right
        tax codes and monitoring for errors or misclassifications. This is not just a technical step:
        misclassifying a digital service or a tax-exempt good can leave you exposed to audit risk or back taxes
        in states with strict definitions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, every integration must run in both directions. The compliance platform needs to ingest sales,
        payments, inventory, and returns, but it also needs to push back up-to-date rates, taxability rules, and
        filing statuses to your e-commerce and billing tools. TaxJar handles this with API-driven ingestion and
        real-time updates, so your checkout page always applies the right rate and your dashboard reflects
        current liabilities.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Transaction feeds from every sales channel, Shopify, WooCommerce, Amazon, BigCommerce, and more.</li>
        <li>Payment integrations (Stripe, PayPal, Braintree, ACH, credit cards) to cross-match revenue and refunds.</li>
        <li>Inventory tracking across all fulfillment centers, FBA warehouses, and 3PLs.</li>
        <li>Product catalog mapping and exemption certificate management.</li>
        <li>API-driven connections to push tax rates and compliance status back to your systems.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        No small business in Broward or Miami-Dade is starting with a clean slate. You are plugging automated
        tax compliance into a patchwork of existing tools, some cloud-based, some on-prem, some managed by
        outside bookkeepers. If you miss an integration, you are back to hand-keying data and hoping the numbers
        add up. The right environment is one where TaxCloud, Zamp, Quaderno, TaxValet, and TaxJar each connect
        to the systems you already use, pulling in every relevant transaction, payment, and inventory movement.
        Anything less is just another spreadsheet waiting to break.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-a-real-tax-compliance-environment-needs-to-supply" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Real Tax Compliance Environment Needs to Supply
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-a-real-tax-compliance-environment-needs-to-supply" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Real Tax Compliance Environment Needs to Supply
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
