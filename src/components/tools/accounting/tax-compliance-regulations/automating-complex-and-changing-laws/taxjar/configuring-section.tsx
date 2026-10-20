import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar offers a robust suite of features designed to
        automate&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>, making it a vital tool
        for small businesses dealing with complex and changing tax laws. Configuring TaxJar involves setting up
        its automation logic and rules to ensure accurate and efficient tax calculations and filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in configuring TaxJar is to establish the rules for sales tax calculation. This involves
        assigning the correct product tax codes, which TaxJar supports with its deep product tax code coverage.
        By accurately categorizing products, businesses can avoid compliance issues and ensure that they are
        collecting the correct amount of sales tax.
        TaxJar&#39;s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and calculation engine apply
        rooftop-accurate rates, taking into account the customer&#39;s specific location down to the district
        level. This precision is crucial for businesses operating in multiple jurisdictions with varying tax
        rates.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic is another critical component of TaxJar&#39;s configuration. TaxJar continuously
        monitors tax laws and regulations, automatically updating its system to reflect the latest changes. This
        feature is particularly beneficial for businesses that do not have the resources to track these changes
        manually. By automating the monitoring process, TaxJar reduces the risk of non-compliance and the
        potential fines associated with it.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with unique needs, TaxJar offers customization through
        its&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. This allows for the integration of TaxJar&#39;s
        platform with custom-built shopping carts or direct web sales solutions. By leveraging
        the&nbsp;<GlossaryLink slug="api">API</GlossaryLink>, businesses can tailor the tax compliance process
        to fit their specific operational requirements, ensuring that TaxJar works seamlessly with their
        existing systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a crucial role in configuring TaxJar for small businesses in Miami-Dade, Broward,
        and West Palm Beach counties. They ensure that TaxJar is set up to meet the specific needs of each
        business, from data mapping to integration with existing platforms. This hands-on approach not only
        speeds up the implementation process but also ensures that the system operates efficiently from day one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-taxjar-for-seamless-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxJar for Seamless Automation
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
              <h2 id="configuring-taxjar-for-seamless-automation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxJar for Seamless Automation
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
