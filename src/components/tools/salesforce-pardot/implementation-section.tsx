export default function ImplementationSection() {
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Salesforce Pardot effectively requires careful planning and understanding of its specific features and integration capabilities. Here are some key considerations to keep in mind:</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">Salesforce Pardot offers pre-built connectors and templated setups that can significantly reduce the time to go-live. By using these tools, businesses can quickly integrate Pardot with existing systems, ensuring a smooth transition and minimal disruption to ongoing operations.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">Designing an effective data model is crucial for leveraging Pardot’s full potential. Businesses should focus on mapping customer data accurately and ensuring that data flows seamlessly between Pardot and other systems, such as Salesforce CRM. This alignment is essential for maintaining data integrity and ensuring that marketing efforts are based on accurate and up-to-date information.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Pardot allows for the configuration of complex workflows and approval processes. Setting up these workflows correctly is vital for automating lead nurturing and ensuring that marketing campaigns are executed efficiently. Businesses should take the time to understand their specific needs and configure Pardot accordingly.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">While Pardot is largely a configuration-driven platform, it does offer APIs for integration and customization. Businesses looking to extend Pardot’s capabilities can leverage these APIs to create custom solutions tailored to their specific requirements. However, it is important to assess whether custom development is necessary or if existing features can meet business needs.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in helping businesses navigate these considerations, ensuring a successful implementation of Salesforce Pardot. Our team of experts can assist with accelerated deployment, data model design, workflow configuration, and custom development, bridging the gap between technology and business strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
              <p className="text-md text-white shadow-text pt-3">Salesforce Pardot is ideal for businesses looking to enhance their marketing efforts through automation and AI-driven insights. Here are some scenarios where Pardot can be particularly beneficial:</p>
              <p className="text-md text-white shadow-text pt-3">Growing Businesses: As businesses expand, managing marketing campaigns manually becomes increasingly challenging. Pardot provides the tools needed to automate and scale marketing efforts, allowing teams to focus on growth strategies.</p>
              <p className="text-md text-white shadow-text pt-3">Data-Driven Marketing: For businesses that rely heavily on data to drive marketing decisions, Pardot offers advanced analytics and reporting tools. These capabilities enable teams to make informed decisions and optimize campaigns based on real-time data.</p>
              <p className="text-md text-white shadow-text pt-3">Lead Management: Companies with complex sales funnels can benefit from Pardot’s lead scoring and nurturing capabilities. By automating these processes, sales teams can prioritize high-quality leads and improve conversion rates.</p>
              <p className="text-md text-white shadow-text pt-3">In conclusion, Salesforce Pardot is a versatile tool that can adapt to the needs of various businesses, from small startups to large enterprises. Its focus on automation and AI-driven insights makes it a valuable asset for any organization looking to enhance their marketing capabilities and achieve tangible results.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
