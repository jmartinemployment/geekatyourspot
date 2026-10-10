export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Bill, careful consideration of data structure and mapping is crucial. The initial setup
        involves defining how your existing data will be structured within Bill to ensure compatibility and
        efficiency. This involves mapping your current data fields to Bill&#39;s data architecture, which supports a
        wide range of data types and structures. Proper mapping ensures that data flows seamlessly between your
        systems and Bill, reducing the risk of errors and data duplication.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s data architecture is designed to be flexible, accommodating various business models and data
        requirements. During the setup, it&#39;s important to align your data fields with Bill&#39;s predefined
        templates. These templates cover common data points such as customer information, invoice details, and
        payment records, ensuring that all critical information is captured accurately. This alignment is key to
        leveraging Bill&#39;s full capabilities, such as automated invoicing and payment tracking.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another crucial aspect of data mapping is setting up the approval workflows. Bill allows for customized
        workflows that can be tailored to your business processes. This involves defining the approval hierarchy and
        assigning roles and permissions within the system. By mapping these workflows accurately, you ensure that
        invoices and payments are processed efficiently and in compliance with your internal controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data security is a top priority during the mapping process. Bill employs robust security measures to protect
        sensitive information, including encryption and access controls. Ensuring that these security settings are
        correctly configured during the mapping phase protects your data from unauthorized access and potential
        breaches.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ongoing data management is essential for maintaining the integrity of your automated accounts
        receivable process. Regular audits and updates to the data mapping ensure that your system adapts to any
        changes in your business environment. This proactive approach helps in maintaining data accuracy and
        supports the continuous optimization of your financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-in-bill-deployment">
                Data Structure and Mapping in Bill Deployment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-in-bill-deployment">
                Data Structure and Mapping in Bill Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
