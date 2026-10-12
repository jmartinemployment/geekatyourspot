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
              How does TaxJar keep our tri-county retail or e-commerce store up to date when local county rates or rules change?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar simplifies managing sales tax compliance by offering a platform that handles everything
              from calculations to reporting and filing. This ensures your business stays current with changing
              tax laws, even as you scale across states. TaxJar&#39;s automation platform is designed to keep
              you informed and compliant with the latest tax regulations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We sell across Shopify, Amazon, and WooCommerce. How do we keep track of changing out-of-state &#39;Economic Nexus&#39; thresholds?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar provides an Economic Nexus Dashboard that helps you track where your business meets
              economic nexus thresholds in different states. This tool notifies you as you approach or reach
              these thresholds, making it easier to manage your obligations across various platforms like
              Shopify, Amazon, and WooCommerce.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Product taxability laws change constantly (like SaaS vs. physical goods). How does TaxJar manage this accurately?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar&#39;s platform includes smart product classification tools and a robust API that lets you
              assign product tax codes to your offerings. This ensures you collect the correct amount of sales
              tax based on current laws. The platform continuously monitors tax law changes, applying new rules
              as needed to keep your business compliant.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              When state filing deadlines change or conflict, how does TaxJar protect us from missing a submission?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar&#39;s dashboard provides reminders for upcoming sales tax filing due dates, helping you
              avoid penalties and interest charges. The AutoFile feature can manage state tax returns and
              remittances for you, ensuring that you never miss a deadline, even when filing requirements vary
              across states.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
