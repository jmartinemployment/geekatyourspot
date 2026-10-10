import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When deploying Versapay, careful consideration of your data structure and mapping is essential to ensure a
        smooth transition and effective operation. The initial setup requires a detailed understanding of your
        existing data sources and how they will integrate with Versapay&#39;s platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first decisions involves mapping your current accounts receivable data to Versapay&#39;s system.
        This includes aligning customer records, outstanding invoices, and payment histories. Accurate mapping is
        crucial because it ensures that all transactions are correctly processed and that the system reflects your
        actual financial position. Misalignment at this stage can lead to discrepancies in reporting and
        reconciliation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s system supports various data formats, allowing you to import data from multiple sources,
        including spreadsheets, ERP systems, and other financial software. This flexibility is vital for businesses
        with complex data environments. By leveraging Versapay&#39;s advanced AI and OCR capabilities, you can
        automate the data entry process, reducing the risk of human error and ensuring
        consistent&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another critical aspect is setting up the data flow for real-time updates. Versapay integrates seamlessly
        with your existing systems, providing real-time visibility into your automated accounts receivable status.
        This integration requires configuring data pipelines that allow continuous syncing of information, ensuring
        that your financial data is always up-to-date and accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, establishing robust data governance practices is essential. This involves defining roles and
        permissions within Versapay to control access to sensitive financial data. By implementing these controls,
        you can protect your data integrity and ensure compliance with industry regulations, providing peace of mind
        as you transition to an automated accounts receivable system.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-for-versapay-deployment">
                Data Structure and Mapping for Versapay Deployment
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-structure-and-mapping-for-versapay-deployment">
                Data Structure and Mapping for Versapay Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
