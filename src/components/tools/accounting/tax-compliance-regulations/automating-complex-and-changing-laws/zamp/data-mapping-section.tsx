
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Zamp, careful consideration of data structure and mapping is crucial. This step ensures
        that your&nbsp;tax compliance&nbsp;processes are
        accurate and efficient. The initial focus is on understanding how your current data architecture aligns
        with Zamp&#39;s requirements, facilitating a seamless transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp&#39;s platform relies on precise data mapping to ensure that all transactions are accurately
        captured and processed. This involves mapping your existing data fields to Zamp&#39;s system, which
        supports a wide range of data types and structures. By aligning your data with Zamp&#39;s platform, you
        ensure that all tax compliance tasks are executed correctly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect of data mapping is ensuring that all relevant tax codes and exemptions are
        correctly applied. Zamp&#39;s system allows for detailed configuration of taxability rules, ensuring
        compliance with jurisdiction-specific requirements. This level of customization is essential for
        businesses operating across multiple states, where tax laws can vary significantly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp also supports real-time data synchronization, which is vital for maintaining up-to-date compliance.
        This feature ensures that any changes in your sales data are immediately reflected in your tax
        calculations, reducing the risk of errors and ensuring compliance with the latest regulations. Real-time
        synchronization is particularly beneficial for businesses with high transaction volumes or those that
        frequently update their product offerings.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Zamp&#39;s data mapping process includes a thorough validation phase. This step involves
        checking for data consistency and accuracy, ensuring that all mapped data meets the necessary standards
        before going live. This validation is crucial for preventing compliance issues and ensuring that your
        tax reporting is both accurate and reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        By focusing on data structure and mapping upfront, businesses can leverage Zamp&#39;s capabilities to
        streamline their tax compliance processes. This proactive approach not only enhances accuracy but also
        frees up valuable resources, allowing your team to focus on growth and customer service instead of
        compliance headaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-in-zamp-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping in Zamp Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="data-structure-and-mapping-in-zamp-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Data Structure and Mapping in Zamp Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
