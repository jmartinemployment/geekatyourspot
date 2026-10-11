import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Helmhq involves critical decisions around data structure and mapping that can significantly
        influence the effectiveness of the system. At the forefront of these considerations is understanding how
        your existing data aligns with Helmhq&#39;s architecture. This alignment is essential for ensuring that data
        flows seamlessly between systems, maintaining integrity and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary steps in this process is the identification of key data points that need to be mapped
        into Helmhq. This includes financial metrics, content schedules, and customer engagement data, among others.
        Accurate mapping ensures that all relevant data is captured and utilized effectively within the platform,
        enabling comprehensive insights and informed decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq&#39;s flexibility in data structure allows for customization to fit specific business models. This
        adaptability is crucial for small businesses that may have unique data requirements or legacy systems that
        need to be integrated. By tailoring the data structure to their needs, businesses can ensure that Helmhq
        complements rather than disrupts their existing operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect of data mapping is ensuring compatibility with
        Helmhq&#39;s&nbsp;<GlossaryLink slug="predictive-analytics">predictive
        analytics</GlossaryLink>&nbsp;and&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-driven insights. By
        aligning your data inputs with these advanced features, you can leverage Helmhq&#39;s full potential to
        forecast trends, optimize content strategies, and enhance overall operational efficiency. This alignment not
        only improves the accuracy of predictions but also enhances the strategic value of the insights generated.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this process, Geek @ Your Spot provides expert guidance to navigate the complexities of data
        mapping and structure. Their role is to ensure that your data is not only correctly integrated into Helmhq
        but also optimized for performance. This support is critical in transforming raw data into actionable
        insights that drive business growth and efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-considerations-for-helmhq-deployment">
                Key Data Structure and Mapping Considerations for Helmhq Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-data-structure-and-mapping-considerations-for-helmhq-deployment">
                Key Data Structure and Mapping Considerations for Helmhq Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
