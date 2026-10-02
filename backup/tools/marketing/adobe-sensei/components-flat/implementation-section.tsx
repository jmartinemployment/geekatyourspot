import { GlossaryLink } from "@/components/glossary/glossary-link";
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
              <p className="text-md text-white shadow-text pt-3">Implementing Adobe Sensei into your creative workflow involves several considerations to ensure a smooth and effective deployment. By understanding these factors ahead of time, businesses can maximize the benefits of this powerful AI platform.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">Adobe Sensei offers pre-built connectors and templated setups that can significantly shorten the go-live timeline. These resources allow businesses to integrate AI capabilities with existing tools quickly, minimizing downtime and disruption to ongoing projects. A phased rollout approach can also be beneficial, allowing teams to gradually adapt to new processes and technologies.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">When implementing Adobe Sensei, it&#39;s important to consider the data structure and mapping decisions upfront. The platform relies on well-organized data to deliver accurate insights and recommendations. Businesses should ensure that their data is clean, categorized, and accessible to fully leverage Adobe Sensei&#39;s capabilities. This may involve revisiting existing data models and making necessary adjustments to align with the platform&#39;s requirements.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Adobe Sensei requires specific configuration of workflows and processes to optimize its automation logic. This includes setting up approval chains, routing, and other automation rules that align with your organization&#39;s operational needs. Proper configuration ensures that Adobe Sensei can deliver the intended efficiencies and improvements in your <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> processes.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">While Adobe Sensei primarily offers configuration-based customization, there are opportunities for extending its capabilities through APIs and SDKs. Organizations with specific needs can leverage these tools to develop custom solutions that enhance the platform&#39;s functionality. However, it&#39;s important to assess whether such custom development is necessary, as the out-of-the-box features of Adobe Sensei may already meet the majority of business requirements.</p>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot can assist in closing the gap for clients by offering consultative support throughout the implementation process. From accelerated deployment strategies to data model design and workflow configuration, our team ensures that Adobe Sensei is integrated effectively into your creative operations. By addressing these considerations, businesses can fully harness the power of Adobe Sensei to enhance their content creation workflows and achieve tangible results.</p>
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
              <p className="text-md text-white shadow-text pt-3">Adobe Sensei is ideal for organizations looking to enhance their creative workflows and deliver high-quality content more efficiently. Here are some scenarios where Adobe Sensei can provide significant value:</p>
              <p className="text-md text-white shadow-text pt-3">High-Volume Content Production: Businesses that need to produce large volumes of content quickly can benefit from Adobe Sensei&#39;s automated capabilities, reducing the time and effort required for repetitive tasks.</p>
              <p className="text-md text-white shadow-text pt-3"><GlossaryLink slug="personalized-marketing">Personalized Marketing</GlossaryLink> Campaigns: Companies aiming to deliver personalized marketing experiences can use Adobe Sensei to tailor content in real-time, improving <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink> and satisfaction.</p>
              <p className="text-md text-white shadow-text pt-3">Resource-Constrained Teams: Smaller teams with limited resources can leverage Adobe Sensei to optimize their workflows, allowing them to achieve more with less.</p>
              <p className="text-md text-white shadow-text pt-3">In each of these scenarios, Adobe Sensei provides the tools necessary to streamline operations and enhance the quality of content produced. By automating routine tasks and offering intelligent insights, the platform empowers creative professionals to focus on more strategic initiatives, ultimately driving better business outcomes. Whether you&#39;re managing a large-scale content production operation or looking to personalize customer interactions, Adobe Sensei offers the capabilities needed to succeed in today&#39;s competitive digital environment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
