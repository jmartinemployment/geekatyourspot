
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp is designed to simplify the complexities of&nbsp;tax
        compliance&nbsp;through its configurable rules and automation logic. Businesses can
        tailor Zamp to fit their specific needs by setting up various compliance rules that automate the
        handling of sales tax across multiple states. This flexibility allows small businesses to manage complex
        tax obligations without needing a large in-house team. Zamp&#39;s automation logic is built to cover
        everything from sales tax calculations to filing and remittance, ensuring accuracy and timeliness in
        compliance tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC plays a crucial role in configuring Zamp for small businesses in Miami-Dade, Broward,
        and West Palm Beach counties. By understanding the unique challenges faced by these businesses, Geek @ Your Spot LLC ensures that Zamp&#39;s rules are aligned with local and state tax regulations. This involves
        setting up precise tax codes, exemptions, and filing schedules that reflect the latest legal
        requirements. The end result is a system that operates smoothly within the existing business framework,
        reducing the risk of errors and penalties.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp&#39;s extension capabilities further enhance its adaptability. While the platform itself does not
        require extensive coding to implement, it offers integration options through APIs, allowing businesses
        to connect Zamp with existing accounting
        and&nbsp;ERP&nbsp;systems. This integration is seamless,
        providing real-time data synchronization and reducing the need for manual data entry. Geek @ Your Spot LLC
        leverages these capabilities to ensure that Zamp not only fits into the current systems but also
        enhances them, providing a comprehensive compliance solution.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses looking to expand or modify their operations, Zamp&#39;s configurable nature means it can
        grow alongside them. Changes in business structure, such as entering new markets or altering product
        lines, can be accommodated by adjusting the rules and logic within Zamp. This adaptability is vital for
        businesses facing the ever-changing landscape of tax laws, allowing them to remain compliant without
        constant overhauls of their compliance systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Zamp&#39;s configuration options provide a robust foundation for tax compliance. By
        automating complex tasks and integrating seamlessly with existing systems, Zamp frees up valuable time
        for business owners to focus on growth and customer service. With Geek @ Your Spot LLC&#39;s expertise,
        businesses can be confident that their compliance needs are met efficiently and effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-zamp-rules-logic-and-extensions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Zamp: Rules, Logic, and Extensions
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
              <h2 id="configuring-zamp-rules-logic-and-extensions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Zamp: Rules, Logic, and Extensions
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
