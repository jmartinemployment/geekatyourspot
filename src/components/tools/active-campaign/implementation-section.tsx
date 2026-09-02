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
              <p className="pt-3 text-md font-normal text-white shadow-text">Successful implementation of ActiveCampaign requires careful planning and consideration of several key factors. By addressing these considerations, businesses can ensure a smooth deployment and maximize the platform&#39;s benefits.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign offers pre-built connectors and templated setups that significantly reduce deployment time. These tools allow businesses to quickly integrate the platform with existing systems, minimizing disruptions to ongoing operations. A phased rollout approach can further streamline the implementation process by allowing teams to gradually adapt to the new system.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">Designing an effective data model is crucial for leveraging ActiveCampaign&#39;s full potential. Businesses must carefully map out their data structures to ensure seamless integration with the platform. This includes defining key customer attributes and determining how data will flow between ActiveCampaign and other systems. A well-designed data model facilitates accurate segmentation and targeting, leading to more effective marketing campaigns.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign&#39;s automation capabilities require thoughtful configuration of workflows and processes. Businesses need to define approval chains, routing rules, and automation logic to ensure that marketing activities align with organizational goals. By customizing these elements, businesses can create efficient processes that reduce manual effort and improve overall productivity.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="pt-3 text-md font-normal text-white shadow-text">While ActiveCampaign is primarily a configuration-based platform, it does offer an API for custom integrations and extensions. Businesses with specific requirements can leverage this API to develop tailored solutions that enhance the platform&#39;s functionality. However, most users will find that the platform&#39;s built-in features are sufficient for their needs, allowing them to focus on configuration rather than custom development.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">Geek At Your Spot can assist businesses in navigating these considerations by providing expert guidance on accelerated deployment, data model design, workflow configuration, and custom development. By partnering with an experienced consultancy, businesses can close the gap between their current operations and the enhanced capabilities offered by ActiveCampaign.</p>
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
              <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign is an ideal solution for businesses looking to enhance their marketing efforts through automation and <GlossaryLink slug="personalized-marketing">personalization</GlossaryLink>. Here are some scenarios where the platform can deliver significant value:</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">Small to Medium-Sized Businesses: ActiveCampaign&#39;s affordability and scalability make it a perfect fit for small to medium-sized businesses that need a robust <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> solution without the high costs associated with enterprise-level platforms.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">Businesses Seeking Personalization: Companies aiming to deliver personalized customer experiences will benefit from ActiveCampaign&#39;s advanced segmentation and targeting features. These capabilities allow businesses to tailor their messages to specific audience segments, improving engagement and loyalty.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">Organizations with Limited Technical Expertise: The platform&#39;s intuitive interface and configuration-based setup make it accessible to businesses with limited technical resources. This ease of use ensures that marketing teams can quickly get up to speed and start leveraging the platform&#39;s capabilities.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">In summary, ActiveCampaign is a versatile tool that can significantly enhance marketing efforts for businesses of all sizes. By automating repetitive tasks and enabling personalized communication, it helps businesses save time, reduce costs, and drive more sales. Whether you&#39;re a small business owner or part of a larger marketing team, ActiveCampaign offers the tools you need to succeed in today&#39;s competitive landscape.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
