import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Invoiced, making informed data structure and mapping decisions is crucial for ensuring the
        platform operates effectively within your existing systems. These decisions form the backbone of how
        Invoiced will interact with your financial data, impacting everything from invoice processing
        to&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        The initial step involves a thorough assessment of your current data architecture. Understanding how your
        data is organized and flows through your systems helps in mapping it accurately to Invoiced&#39;s framework.
        Geek @ Your Spot plays a pivotal role here, using their expertise to align your data structure with
        Invoiced&#39;s requirements, ensuring seamless integration and functionality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s platform requires precise mapping of data fields to ensure that information such as customer
        details, payment terms, and invoice statuses are accurately reflected. This mapping is essential for the
        platform&#39;s automation features to function correctly, such as automated invoice generation and payment
        reconciliation. Without accurate data mapping, these processes can become inefficient and error-prone.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical decision involves setting up the data synchronization process. Invoiced offers real-time
        data syncing capabilities, which means that any changes in your financial data are immediately reflected in
        the platform. This requires careful planning and setup to avoid data discrepancies and ensure that all
        information is current and accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lastly, consider the scalability of your data structure. As your business grows, your data needs will
        evolve, and Invoiced must be able to accommodate this growth. By planning for scalability from the start,
        you can ensure that Invoiced continues to meet your needs without requiring significant reconfiguration down
        the line.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="critical-data-structure-and-mapping-decisions-for-invoiced-deployment">
                Critical Data Structure and Mapping Decisions for Invoiced Deployment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="critical-data-structure-and-mapping-decisions-for-invoiced-deployment">
                Critical Data Structure and Mapping Decisions for Invoiced Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
