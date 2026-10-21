import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno is ideally suited for small to mid-sized digital businesses that operate across multiple
        jurisdictions. Its automated&nbsp;tax
        compliance&nbsp;features are particularly beneficial
        for&nbsp;SaaS&nbsp;companies, e-commerce businesses, and
        digital product creators who sell internationally. These businesses often face the challenge of managing
        complex tax regulations without the resources of larger enterprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that rely on platforms like Stripe, PayPal, Shopify, and WooCommerce, Quaderno offers
        seamless integration that simplifies tax compliance. This makes it easier to manage taxes across
        different sales channels without adding manual work. The tool is also beneficial for businesses that
        need to monitor tax thresholds in real-time, ensuring they stay compliant as they grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Quaderno may not be the best fit for large multinational corporations with extensive physical
        operations or those requiring
        sophisticated&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;integrations. These organizations
        might need more complex solutions with broader capabilities beyond what Quaderno offers. Similarly,
        businesses that focus primarily on physical retail might find Quaderno&#39;s digital-first approach less
        applicable to their needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida considering Quaderno, the next step is to assess specific tax
        compliance needs and determine how Quaderno&#39;s features align with these requirements. Geek @ Your Spot LLC can assist in this evaluation, providing insights into how Quaderno can be tailored to meet unique
        business needs. This includes configuring the software to integrate with existing systems and ensuring
        data is mapped correctly for accurate compliance tracking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, the decision to implement Quaderno should be based on a clear understanding of current tax
        challenges and the potential efficiency gains from automation. By leveraging Quaderno&#39;s
        capabilities, businesses can reduce the burden of tax compliance, allowing them to focus more on growth
        and less on administrative tasks. For those ready to take the next step, consulting with Geek @ Your Spot LLC can provide the guidance needed to implement Quaderno effectively.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-accounting-complex-changing-laws-quaderno-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How does the software handle different sales tax rates between Miami-Dade, Broward, and Palm Beach?</li>
        <li>Can it manage municipal-specific taxes, like the Miami Beach resort tax?</li>
        <li>How does the system track remote workers across different South Florida zip codes?</li>
        <li>How quickly does the system update when Florida changes its corporate or sales tax rates?</li>
        <li>Does the automation adapt to localized Florida Sales Tax Holidays?</li>
        <li>How does the software shield us from audit risk if compliance laws change mid-year?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-benefits-from-quaderno-and-what-s-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Benefits from Quaderno and What&#39;s Next
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
              <h2 id="who-benefits-from-quaderno-and-what-s-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Benefits from Quaderno and What&#39;s Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
