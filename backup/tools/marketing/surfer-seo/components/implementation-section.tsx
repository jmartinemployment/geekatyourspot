import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        When implementing Surfer <GlossaryLink slug="search-engine-optimization">SEO</GlossaryLink>, there are several considerations to ensure a smooth deployment and effective use of the tool.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">
        Accelerated Deployment
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        One of the primary advantages of Surfer SEO is its accelerated deployment. The tool offers pre-built connectors and templated setups that allow users to quickly integrate it into their existing systems. This means that businesses can start benefiting from Surfer SEO&apos;s capabilities almost immediately, without a lengthy setup process.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">
        Data Model Design
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Data model design is another critical aspect to consider. Surfer SEO requires users to map out their data structure to align with the tool&apos;s functionalities. This involves defining how keywords, content plans, and performance metrics are organized and tracked. Proper data model design ensures that users can effectively leverage Surfer SEO&apos;s insights and recommendations.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">
        Workflow and Process Configuration
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Workflow and process configuration is essential for optimizing the use of Surfer SEO. The tool allows for the customization of approval chains, routing, and automation logic, which can be tailored to fit the specific needs of a business. By setting up these processes, businesses can ensure that <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> is streamlined and that all team members are aligned with SEO goals.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">
        Custom Code and Development
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Surfer SEO does not require custom code or development, as it is designed to be a configuration-only tool. This makes it accessible to businesses without extensive technical resources, as they can utilize the tool&apos;s features through its user-friendly interface without needing to write or manage code.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations-desktop">
                Implementation Considerations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
