import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Data structure and mapping are crucial when deploying TaxJar, as they determine how effectively the
        system can automate your&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>. The
        initial setup requires careful planning to ensure that all relevant data is accurately captured and
        integrated.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first considerations is the classification of your products. TaxJar&#39;s smart product
        classification tools allow you to assign tax codes to each product, ensuring that sales tax is collected
        only when required. This step is vital for businesses selling diverse products, as misclassification can
        lead to compliance issues and financial penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping your sales data to TaxJar&#39;s system is another critical step. This involves linking your
        transaction data from various sales channels to TaxJar&#39;s platform. Geek @ Your Spot assists in
        setting up these connections, ensuring that data flows seamlessly from e-commerce platforms like Amazon
        and Squarespace into TaxJar. This integration is essential for generating accurate tax reports and
        filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, configuring the Economic Nexus Insights dashboard is important for tracking your tax
        liabilities. This tool alerts you when you are nearing nexus thresholds in different states, allowing
        you to take timely action to remain compliant. Proper setup of this feature involves mapping your sales
        data to the dashboard, enabling it to provide real-time insights into your tax obligations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Geek @ Your Spot ensures that all data privacy and security measures are in place. This
        includes setting up access controls and encryption to protect sensitive financial information. By
        addressing these data structure and mapping considerations upfront, your business can leverage
        TaxJar&#39;s full potential, ensuring accurate and efficient tax compliance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-for-taxjar-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping for TaxJar Deployment
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
              <h2 id="data-structure-and-mapping-for-taxjar-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping for TaxJar Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
