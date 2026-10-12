export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What&#39;s the best tax compliance software for a small SaaS company selling internationally?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              For small SaaS companies selling internationally, it&#39;s crucial to have tax compliance software
              that simplifies VAT, GST, and sales tax processes. Quaderno automates tax calculations, invoicing,
              threshold monitoring, and filing workflows, all in one platform. Designed for digital businesses
              and SaaS teams, Quaderno helps you stay compliant across various countries without adding manual
              accounting tasks. With integrations for Stripe and other billing platforms, it supports your
              growth by automating tax compliance.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              I run a SaaS on Stripe with customers in the US, UK, and EU. Can Quaderno handle sales tax, VAT, invoicing, and filing for me?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Quaderno integrates seamlessly with Stripe Billing to automate tax calculations, subscription
              invoicing, and compliance workflows. It manages VAT, GST, and US sales tax obligations across
              multiple jurisdictions, helping you monitor tax thresholds and generate reports ready for filing.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Quaderno integrate with LearnWorlds?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Quaderno integrates with LearnWorlds to calculate taxes on your sales. Once connected, it
              calculates tax directly during checkout and generates a tax-compliant invoice for each sale.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can my prices include tax?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can choose whether your product prices include taxes or have taxes added on top. This
              setting is available under Settings, Financial, VAT Management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why am I getting duplicate invoices?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Duplicate invoices can occur if payment processors in your LearnWorlds account are also connected
              to Quaderno. Ensure that only one connection is active to prevent this issue.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What billing details does LearnWorlds collect?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              LearnWorlds collects billing details such as address, country, postal code, and city at checkout.
              Quaderno uses this information to accurately calculate taxes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Quaderno track real-time tax rate changes across multi-channel sales pipelines?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno connects to your payment processors, shopping carts, and subscription billing systems
              like Stripe. It totals your sales by customer location in real time and tracks these totals
              against US economic nexus, EU OSS, and VAT and GST registration thresholds in over 150 countries.
              Quaderno sends you email alerts at 90% and 100% of each threshold, ensuring you can register
              before needing to collect tax.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the software alert local businesses before they violate out-of-state &quot;Economic Nexus&quot; laws?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno provides real-time alerts when sellers approach US economic nexus or international VAT
              and GST registration thresholds. This allows businesses to register before they are legally
              required to collect tax, helping them avoid penalties for uncollected back-taxes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Quaderno handle product-specific tax regulations, such as software versus physical goods?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno assigns the correct tax code to every line item, ensuring that SaaS, digital downloads,
              physical goods, and services are taxed appropriately. This prevents overcharging or undercharging
              customers by applying the correct tax rate for each product type.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Quaderno handle tax filing automatically when complex regional laws shift?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno automatically consolidates your sales and tax collected into jurisdiction-specific
              summaries and tracks every deadline. It can file tax returns directly on your behalf, covering
              local formats across US states, EU OSS, UK VAT, and more than 50 countries worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
