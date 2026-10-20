import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno&#39;s architecture is built to integrate seamlessly with a variety of platforms and systems,
        making it a versatile tool for managing
        global&nbsp;tax
        compliance. The platform&#39;s robust infrastructure supports integration with popular
        payment processors, e-commerce platforms, and custom setups, ensuring that businesses can maintain
        compliance without disrupting their existing workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key components of Quaderno&#39;s architecture is its ability to connect with major e-commerce
        platforms such as Shopify, WooCommerce, and Amazon FBA. These integrations allow businesses to automate
        tax calculations and invoice generation directly from their storefronts, streamlining the compliance
        process. By centralizing tax data from multiple channels, Quaderno helps businesses maintain a clear and
        accurate view of their tax obligations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno also integrates with payment processors like Stripe and PayPal, adding another layer of
        automation to the tax compliance process. These integrations enable the platform to generate compliant
        invoices and tax reports for transactions processed through these payment gateways. This capability is
        particularly beneficial for businesses that operate across multiple payment platforms, as it ensures
        that all transactions are accounted for and compliant with relevant tax laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with unique or complex setups, Quaderno
        offers&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;and
        CSV import options, allowing them to import sales data manually or connect the platform to their custom
        systems. This flexibility ensures that Quaderno can adapt to a wide range of business needs, providing a
        tailored solution for managing tax compliance. The platform&#39;s lightweight
        REST&nbsp;API&nbsp;supports
        real-time tax rate calculations and compliant invoice generation, further enhancing its adaptability.</p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to its integrations, Quaderno&#39;s architecture includes features designed to support
        global tax compliance. The platform covers over 150 countries for nexus, VAT, and GST rules, providing
        businesses with the tools they need to navigate complex international tax landscapes. By offering
        comprehensive coverage and seamless integration capabilities, Quaderno stands out as a powerful solution
        for businesses looking to streamline their tax compliance processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="quaderno-s-architecture-and-integrations-a-seamless-compliance-ecosystem" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Quaderno&#39;s Architecture and Integrations: A Seamless Compliance Ecosystem
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="quaderno-s-architecture-and-integrations-a-seamless-compliance-ecosystem-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Quaderno&#39;s Architecture and Integrations: A Seamless Compliance Ecosystem
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
