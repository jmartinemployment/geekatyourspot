import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Floatapp into an existing business environment involves a streamlined process that minimizes
        disruption and accelerates the time to value. The journey to going live with Floatapp is structured around
        several key stages, each designed to ensure a smooth transition from manual spreadsheet data management to
        automated&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in the implementation process is the integration with existing accounting platforms. Floatapp
        offers pre-built connectors for major platforms like Xero and QuickBooks Online. These connectors facilitate
        a one-way, read-only sync of bank transactions, invoices, and bills, which are automatically updated every
        24 hours. This seamless integration eliminates the need for manual data entry and reduces the risk of
        errors, allowing businesses to rely on accurate, up-to-date financial data from the outset.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the integration is established, the next phase involves a templated setup of the cash flow forecast.
        Floatapp provides a choice between a 13-week rolling view or a monthly view, catering to both short-term
        operational needs and long-term strategic planning. This templated setup shortens the implementation
        timeline significantly, as it leverages pre-defined structures that align with common business practices,
        reducing the need for extensive customization.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout is another critical component of the implementation process. By introducing Floatapp in
        stages, businesses can manage the transition effectively, ensuring that each department or team adjusts to
        the new system at a manageable pace. This approach not only minimizes the risk of disruption but also allows
        for feedback and adjustments to be made in real-time, enhancing the overall effectiveness of the
        implementation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the implementation, Geek @ Your Spot LLC plays a pivotal role in guiding businesses through each
        step. As an&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation consultancy, they provide
        expertise in configuring Floatapp to fit seamlessly with existing systems. This includes data mapping,
        training staff on the new platform, and offering ongoing support to address any challenges that arise. Their
        involvement ensures that the transition is not only smooth but also optimized for the specific needs of each
        client.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with Floatapp is a well-orchestrated process that combines technical integration,
        strategic setup, and phased implementation. With the support of Geek @ Your Spot LLC, businesses can expect a
        transformation in their cash flow management, moving from error-prone manual processes to a streamlined,
        automated system that delivers real-time financial insights.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-implementation-going-live-with-floatapp">
                Streamlining Implementation: Going Live with Floatapp
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-implementation-going-live-with-floatapp">
                Streamlining Implementation: Going Live with Floatapp
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
