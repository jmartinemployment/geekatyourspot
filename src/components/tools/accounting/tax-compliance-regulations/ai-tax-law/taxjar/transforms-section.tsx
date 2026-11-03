import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar transforms the daunting task of&nbsp;tax
        compliance&nbsp;into a streamlined process, removing the burden from small business
        owners. By handling the intricacies of tax law changes, TaxJar allows businesses to reclaim valuable
        time and resources. The platform&#39;s ability to provide rooftop-accurate tax calculations means that
        businesses no longer have to worry about billing discrepancies or compliance issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the key benefits of TaxJar is its automation of nexus tracking. This feature alerts businesses
        when they are nearing economic or physical nexus thresholds, ensuring they remain compliant without the
        need for constant manual monitoring. This proactive approach prevents costly surprises and allows
        businesses to expand their operations with confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar&#39;s integration capabilities further simplify the compliance process. The platform connects
        effortlessly with a variety of e-commerce
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems, including Shopify, Salesforce, and
        QuickBooks. This seamless integration means that businesses can manage their sales tax obligations
        without disrupting their existing workflows. The
        TaxJar&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;also allows for custom integrations,
        providing flexibility for unique business needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another significant advantage is TaxJar&#39;s AutoFile feature, which automates the filing of sales tax
        returns. This service ensures that filings are submitted accurately and on time, eliminating the risk of
        human error and freeing up staff to focus on other critical tasks. With AutoFile, businesses can rest
        assured that they are meeting all compliance requirements without dedicating additional resources to tax
        management.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real-time reporting capabilities of TaxJar provide businesses with a clear view of their sales tax
        obligations. The platform aggregates data from all sales channels, offering comprehensive reports that
        are easy to understand and act upon. This transparency allows businesses to make informed decisions and
        maintain compliance with minimal effort.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxjar-simplifies-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Simplifies Complex and Changing Laws
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-taxjar-simplifies-complex-and-changing-laws-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Simplifies Complex and Changing Laws
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
