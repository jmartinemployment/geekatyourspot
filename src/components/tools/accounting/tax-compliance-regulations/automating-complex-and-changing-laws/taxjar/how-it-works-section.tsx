
export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar
        simplifies&nbsp;tax
        compliance&nbsp;by automating the entire process from calculation to filing. It begins
        with precise sales tax rate calculations, using rooftop-level accuracy to ensure rates are correct for
        each transaction. This is crucial for small businesses in Miami-Dade, Broward, and West Palm Beach,
        where tax codes frequently change.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform continuously monitors tax laws and regulations. This means businesses don&#39;t have to
        manually track changes across various jurisdictions. TaxJar&#39;s team of sales tax experts updates the
        system with the latest tax codes, ensuring compliance without the need for a dedicated legal team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once sales tax is calculated, TaxJar&#39;s AutoFile feature takes over. It automatically prepares and
        submits tax returns to the relevant state authorities. This eliminates the need for manual filing,
        saving businesses significant time and reducing the risk of errors. For example, Beautylish, a client of
        TaxJar, saved up to four hours per return by using AutoFile.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical feature is the Economic Nexus Insights dashboard. This tool alerts businesses when they
        are approaching nexus thresholds in new states. This is particularly useful for businesses expanding
        their operations, as it ensures they remain compliant with state-specific tax obligations.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar also integrates seamlessly with popular e-commerce platforms like Shopify, Amazon, and
        Squarespace. This integration allows for real-time sales tax calculations at checkout, providing
        customers with accurate tax data instantly.
        The&nbsp;API&nbsp;is
        designed to clock in at sub-25ms, ensuring a fast and smooth checkout experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses using custom-built shopping carts or direct web sales solutions, TaxJar offers
        an&nbsp;API&nbsp;that
        can be tailored to fit specific needs. This flexibility ensures that TaxJar can integrate into any
        system, making it a versatile solution for a wide range of businesses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxjar-works-step-by-step-mechanics" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Works: Step-by-Step Mechanics
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-taxjar-works-step-by-step-mechanics-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How TaxJar Works: Step-by-Step Mechanics
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
