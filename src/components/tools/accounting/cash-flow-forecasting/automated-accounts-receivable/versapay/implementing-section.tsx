import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Launching Versapay in your business environment is a structured process designed to minimize disruption and
        maximize efficiency. The implementation typically involves a phased approach that leverages pre-built
        connectors and templated setups to accelerate the process.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in going live with Versapay is to integrate it with your existing enterprise resource
        planning (<GlossaryLink slug="erp">ERP</GlossaryLink>) system. This integration is seamless thanks to
        Versapay&#39;s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;connectors, which ensure that data
        flows smoothly between your systems. This step is crucial as it lays the foundation for automating your
        automated accounts receivable processes, eliminating manual data entry and reducing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once integration is complete, the next phase involves configuring the system to match your specific business
        needs. This includes setting up automated workflows for invoice processing, payment matching, and
        reconciliation. Versapay&#39;s templated setup options provide a head start by offering pre-configured
        settings that can be tailored to fit your operations. This customization ensures that the system aligns with
        your unique processes, enhancing efficiency from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        A significant advantage of Versapay is its phased rollout strategy. By implementing the system in stages,
        businesses can gradually transition to automated processes without overwhelming their teams. This approach
        allows for adjustments based on real-time feedback, ensuring that the system operates optimally before
        full-scale deployment. It also provides an opportunity to train staff incrementally, reducing the learning
        curve and ensuring smooth adoption.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the go-live phase is supported by comprehensive training and support from Geek @ Your Spot. As a
        local consultancy specializing in&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation, they
        ensure that your team is well-prepared to use Versapay effectively. They provide hands-on guidance during
        the transition, addressing any challenges that arise and ensuring that your automated accounts receivable
        processes are running smoothly from the outset.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-versapay-streamlined-go-live-process">
                Implementing Versapay: Streamlined Go-Live Process
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-versapay-streamlined-go-live-process">
                Implementing Versapay: Streamlined Go-Live Process
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
