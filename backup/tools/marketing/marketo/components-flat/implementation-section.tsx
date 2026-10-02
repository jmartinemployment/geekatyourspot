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
              <p className="text-md text-white shadow-text pt-3">Implementing Marketo requires careful planning and consideration to ensure a smooth and successful deployment. Here are some key factors to consider:</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">Marketo offers pre-built connectors and templated setups that can significantly shorten the go-live process. These resources help businesses quickly integrate the platform into their existing systems, reducing the time and effort required for deployment.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">A well-thought-out data model is crucial for effective use of Marketo. Businesses need to map out their data structures and ensure that the platform aligns with their existing data management practices. This involves deciding how to categorize and segment customer data to maximize the platform&#39;s capabilities.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Configuring workflows and processes in Marketo involves setting up approval chains, routing rules, and automation logic specific to the organization&#39;s needs. This customization ensures that the platform supports the unique marketing strategies of the business.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">While Marketo does not require extensive custom coding, it offers APIs and other tools for businesses that need to develop bespoke solutions. This flexibility allows for tailoring the platform to meet specific requirements without compromising its core functionality.</p>
              <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in bridging the gap for clients by providing expert guidance on these considerations. Our consultative approach ensures that businesses implement Marketo in a way that aligns with their strategic goals, optimizing their marketing operations and achieving tangible results.</p>
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
              <p className="text-md text-white shadow-text pt-3">Marketo is best utilized by businesses looking to enhance their <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> and <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink> efforts. Here are some scenarios where Marketo can be particularly beneficial:</p>
              <p className="text-md text-white shadow-text pt-3">When a business needs to manage large volumes of leads and requires a robust system to score and nurture them effectively.</p>
              <p className="text-md text-white shadow-text pt-3">When personalized and targeted marketing campaigns are essential for improving customer engagement and <GlossaryLink slug="conversion-funnel">conversion rates</GlossaryLink>.</p>
              <p className="text-md text-white shadow-text pt-3">When a company requires detailed analytics to measure the performance of its marketing efforts and make <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions.</p>
              <p className="text-md text-white shadow-text pt-3">By understanding the specific needs and challenges of their marketing operations, businesses can determine if Marketo is the right tool to help them achieve their objectives. Its comprehensive feature set and flexibility make it a valuable asset for any organization looking to optimize its marketing processes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
