export default function ImplementationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">Implementing Mailchimp effectively requires careful planning and consideration of several key factors. Understanding these elements can help businesses maximize the platform&#39;s potential and achieve their marketing goals efficiently.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`accelerated-deployment${idSuffix}`}>Accelerated Deployment</h3>
      <p className="text-base text-white shadow-text pt-3">Mailchimp offers pre-built connectors and templates that facilitate quick setup. Businesses can leverage these resources to get started with their email marketing campaigns without extensive delays.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`data-model-design${idSuffix}`}>Data Model Design</h3>
      <p className="text-base text-white shadow-text pt-3">Users should consider how to structure their contact lists and audience segments within Mailchimp. Proper data organization is crucial for effective segmentation and targeted marketing efforts.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`workflow-and-process-configuration${idSuffix}`}>Workflow and Process Configuration</h3>
      <p className="text-base text-white shadow-text pt-3">Mailchimp allows for the configuration of automated workflows, which can be tailored to specific business needs. Setting up these workflows correctly ensures that emails are sent at optimal times based on customer interactions.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id={`custom-code-and-development${idSuffix}`}>Custom Code and Development</h3>
      <p className="text-base text-white shadow-text pt-3">While Mailchimp is primarily a configuration-based platform, it does offer API access for more advanced customization and integration needs. Businesses with unique requirements can explore these options to extend the platform&#39;s capabilities.</p>
      <p className="text-base text-white shadow-text pt-3">Geek @ Your Spot LLC, an AI implementation consultancy, can assist businesses in navigating these considerations. By providing expertise in accelerated deployment, data model design, workflow configuration, and custom development, they help close the gap between business needs and Mailchimp&#39;s capabilities. This consultative approach ensures that businesses can leverage Mailchimp effectively to enhance their marketing strategies.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations-lg">
                Implementation Considerations
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
