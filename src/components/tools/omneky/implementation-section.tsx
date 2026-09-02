import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
            </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Implementing Omneky requires careful planning and consideration to ensure a smooth transition and optimal
                performance. Here are some key aspects to focus on during the implementation process.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Omneky offers pre-built connectors and a templated setup process that facilitate
                  quick deployment. This allows businesses to integrate the platform with their existing systems without
                  significant downtime, enabling them to start optimizing their ad spend immediately.</li>
                <li>Data Model Design: A well-structured data model is crucial for Omneky&#39;s effectiveness. Businesses need
                  to map their data accurately to ensure that the platform can analyze and utilize it effectively. This
                  involves understanding data sources and ensuring compatibility with Omneky&#39;s algorithms.</li>
                <li>Workflow and Process Configuration: Omneky allows for customization of workflows and processes to fit
                  specific business needs. This includes setting up approval chains, routing rules, and <GlossaryLink slug="marketing-automation">automation</GlossaryLink> logic to
                  ensure that the platform operates seamlessly within the existing marketing framework.</li>
                <li>Custom Code and Development: While Omneky is primarily a configuration-based platform, it offers an API for
                  further customization. Businesses with specific needs can leverage this API to extend the platform&#39;s
                  capabilities, ensuring it aligns perfectly with their unique requirements.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot specializes in helping businesses navigate these implementation considerations, ensuring a
                seamless transition to using Omneky. By focusing on these key areas, companies can maximize the benefits of
                automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> and achieve significant improvements in their marketing outcomes.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#025E73] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementation Considerations</h2>
              <p className="text-md text-white shadow-text pt-3">Implementing Omneky requires careful planning and consideration to ensure a smooth transition and optimal
                performance. Here are some key aspects to focus on during the implementation process.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Accelerated Deployment: Omneky offers pre-built connectors and a templated setup process that facilitate
                  quick deployment. This allows businesses to integrate the platform with their existing systems without
                  significant downtime, enabling them to start optimizing their ad spend immediately.</li>
                <li>Data Model Design: A well-structured data model is crucial for Omneky&#39;s effectiveness. Businesses need
                  to map their data accurately to ensure that the platform can analyze and utilize it effectively. This
                  involves understanding data sources and ensuring compatibility with Omneky&#39;s algorithms.</li>
                <li>Workflow and Process Configuration: Omneky allows for customization of workflows and processes to fit
                  specific business needs. This includes setting up approval chains, routing rules, and automation logic to
                  ensure that the platform operates seamlessly within the existing marketing framework.</li>
                <li>Custom Code and Development: While Omneky is primarily a configuration-based platform, it offers an API for
                  further customization. Businesses with specific needs can leverage this API to extend the platform&#39;s
                  capabilities, ensuring it aligns perfectly with their unique requirements.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Geek At Your Spot specializes in helping businesses navigate these implementation considerations, ensuring a
                seamless transition to using Omneky. By focusing on these key areas, companies can maximize the benefits of
                automated ad spend optimization and achieve significant improvements in their marketing outcomes.</p>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}
