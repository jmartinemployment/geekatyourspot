import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying AvidXchange in an existing business environment involves a strategic approach that ensures
        smooth integration and maximizes the platform&#39;s benefits. Geek @ Your Spot, serving small
        businesses in West Palm Beach, Broward, and Miami-Dade counties, specializes in configuring
        AvidXchange to fit seamlessly into your current systems. This process begins with understanding your
        existing accounting setup and mapping data structures to align with AvidXchange&#39;s
        capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key steps in implementing AvidXchange is leveraging its pre-built connectors for popular
        accounting systems like QuickBooks and NetSuite. These connectors facilitate a quick setup, reducing
        the time to go-live and minimizing disruption to daily operations. By using these connectors, Geek @
        Your Spot ensures that your accounting data flows seamlessly into AvidXchange, enabling automated
        payment execution without the need for extensive manual input.</p>
      <p className="text-md text-white shadow-text pt-3">
        Configuration of approval chains and routing is another crucial aspect of the implementation process.
        AvidXchange allows for the customization of approval workflows, ensuring that invoices and payments
        are routed to the appropriate decision-makers based on pre-set criteria. This configuration helps
        maintain control over financial processes while allowing for the flexibility needed to adapt to
        changing business needs. Geek @ Your Spot works with clients to tailor these workflows to match their
        specific operational requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping decisions are critical during the implementation phase. Ensuring that your data is
        accurately mapped to AvidXchange&#39;s system is essential for maintaining data integrity and
        ensuring that payments are executed correctly. Geek @ Your Spot provides expert guidance on how to
        structure your data for optimal performance, helping to avoid common pitfalls that can lead to errors
        or delays in payment processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange&#39;s&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;integration
        capabilities offer additional customization options, allowing businesses to extend the platform&#39;s
        functionality as needed. Whether it&#39;s integrating with other business tools or customizing
        reports, the API provides the flexibility to meet unique business needs. Geek @ Your Spot leverages
        these capabilities to enhance the platform&#39;s integration with your existing systems, ensuring a
        tailored solution that supports your business goals.</p>
      <p className="text-md text-white shadow-text pt-3">
        By partnering with Geek @ Your Spot, businesses can ensure a smooth and efficient implementation of
        AvidXchange. Their expertise in local business environments and deep understanding of
        AvidXchange&#39;s architecture means that small businesses can quickly realize the benefits of
        automated payment execution. This partnership not only simplifies the implementation process but also
        provides ongoing support to adapt the system as business needs evolve.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-avidxchange-in-your-business-environment">
                Implementing AvidXchange in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementing-avidxchange-in-your-business-environment">
                Implementing AvidXchange in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
