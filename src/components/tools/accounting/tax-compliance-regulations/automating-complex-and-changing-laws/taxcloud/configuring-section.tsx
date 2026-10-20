import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud offers a robust set of configurations to tailor
        its&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;capabilities to your
        business needs. The platform&#39;s strength lies in its ability to automate complex tax calculations and
        compliance tasks, which can be configured through its intuitive interface. This flexibility allows
        businesses to automate tax calculations across over 13,000 jurisdictions, ensuring accuracy and
        compliance without manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of TaxCloud&#39;s configuration revolves around its automation logic, which includes real-time
        tax calculations and automated filing processes. Users can set up rules that automatically apply the
        correct tax rates at checkout based on the customer&#39;s location. This feature is particularly
        beneficial for e-commerce businesses operating across multiple states, where tax rates can vary
        significantly.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxCloud also supports economic nexus tracking, a critical feature for businesses that need to monitor
        their sales activities across state lines. The platform automatically tracks sales against each
        state&#39;s economic nexus thresholds and sends alerts when a threshold is nearing. This proactive
        monitoring helps businesses stay compliant with state tax laws and avoid penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key aspect of TaxCloud&#39;s configuration is its exemption certificate management. Businesses
        can efficiently collect, validate, and store customer exemption certificates, minimizing audit risks.
        This feature automates the management of exemption certificates, ensuring that they are always
        up-to-date and reducing the administrative burden on your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to extend TaxCloud&#39;s capabilities, the platform
        offers&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;integration. This allows for seamless
        integration with existing systems, such as e-commerce platforms and accounting software, enabling
        real-time tax calculations and compliance across all sales channels. Geek @ Your Spot LLC, as an
        implementation partner, ensures that these integrations are configured correctly, providing a seamless
        experience for users.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, TaxCloud&#39;s configuration options provide businesses with a comprehensive solution to
        automate tax compliance. By leveraging its automation logic, economic nexus tracking, and exemption
        certificate management, businesses can significantly reduce the time and effort spent on tax compliance
        tasks. Geek @ Your Spot LLC plays a crucial role in setting up these configurations, ensuring that TaxCloud
        works seamlessly within your existing business environment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-taxcloud-s-rules-and-automation-logic" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxCloud&#39;s Rules and Automation Logic
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
              <h2 id="configuring-taxcloud-s-rules-and-automation-logic" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring TaxCloud&#39;s Rules and Automation Logic
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
