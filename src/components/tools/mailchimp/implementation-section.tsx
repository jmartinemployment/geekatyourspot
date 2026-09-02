import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white pt-3 lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Mailchimp effectively requires careful planning and consideration of several key factors. Understanding these elements can help businesses maximize the platform&#39;s potential and achieve their marketing goals efficiently.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">Mailchimp offers pre-built connectors and templates that facilitate quick setup. Businesses can leverage these resources to get started with their <GlossaryLink slug="marketing-automation">email marketing</GlossaryLink> campaigns without extensive delays.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">Users should consider how to structure their contact lists and audience segments within Mailchimp. Proper data organization is crucial for effective segmentation and targeted marketing efforts.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Mailchimp allows for the configuration of automated workflows, which can be tailored to specific business needs. Setting up these workflows correctly ensures that emails are sent at optimal times based on customer interactions.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">While Mailchimp is primarily a configuration-based platform, it does offer API access for more advanced customization and integration needs. Businesses with unique requirements can explore these options to extend the platform&#39;s capabilities.</p>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot, an AI implementation consultancy, can assist businesses in navigating these considerations. By providing expertise in accelerated deployment, data model design, workflow configuration, and custom development, they help close the gap between business needs and Mailchimp&#39;s capabilities. This consultative approach ensures that businesses can leverage Mailchimp effectively to enhance their marketing strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
              <p className="text-md text-white shadow-text pt-3">Mailchimp is particularly useful for businesses that aim to enhance their email marketing efforts through automation and <GlossaryLink slug="analytics">data-driven</GlossaryLink> strategies. It is an ideal solution for small to medium-sized businesses that need a cost-effective and user-friendly platform to manage their marketing campaigns.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses looking to save time and reduce manual marketing efforts through automation.</p>
              <p className="text-md text-white shadow-text pt-3">Companies that want to leverage data insights to improve <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink> and campaign performance.</p>
              <p className="text-md text-white shadow-text pt-3">Mailchimp&#39;s versatility and ease of use make it a valuable tool for any business looking to streamline their marketing processes and achieve tangible results. By utilizing Mailchimp, businesses can enjoy increased efficiency, reduced costs, and enhanced customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
