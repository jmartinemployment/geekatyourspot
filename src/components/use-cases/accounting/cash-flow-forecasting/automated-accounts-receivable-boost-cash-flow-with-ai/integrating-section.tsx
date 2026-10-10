import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function IntegratingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing automated accounts receivable (AR) systems requires careful integration with a business&#39;s
        existing data infrastructure. This integration is not just about connecting software; it&#39;s about
        ensuring that all financial data flows seamlessly between systems, providing real-time insights and accurate
        forecasting.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in this process is to evaluate the current state of your data. This involves identifying the
        key data sources that will feed into the AR system. Typically, these include your accounting
        software,&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, and customer relationship
        management (<GlossaryLink slug="crm">CRM</GlossaryLink>) platforms. The goal is to ensure that the AR system
        receives accurate, up-to-date information about invoices, payments, and customer interactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For example, Chaserhq offers receivables forecasting that connects directly with your accounting system,
        updating forecasts in real-time based on overdue invoices, disputes, and expected payment dates. This
        integration allows businesses to move beyond static spreadsheets and manage their cash flow with precision.</p>
      <p className="text-md text-white shadow-text pt-3">
        To achieve this level of integration, businesses need to establish a robust data pipeline. This involves
        using APIs to connect different software platforms, ensuring that data flows smoothly without manual
        intervention. APIs are crucial for maintaining data integrity and allowing systems to communicate
        effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration also involves ensuring that the AR system can access historical data. This historical
        perspective is essential for accurate forecasting and risk assessment. Upflow, for instance, uses billing
        cohort data to predict cash inflows, allowing finance teams to make informed decisions about future revenue
        streams.</p>
      <p className="text-md text-white shadow-text pt-3">
        It&#39;s important to address&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;issues
        during integration. Inaccurate or incomplete data can lead to unreliable forecasts and ineffective AR
        management. Businesses should implement validation processes to ensure data accuracy and consistency. This
        might involve using data quality tools to clean and standardize information before it enters the AR system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the user experience. Integration should not create additional complexity for users.
        Instead, it should streamline workflows and make it easier for finance teams to access the information they
        need. Tools like Invoiced provide real-time insights into cash flow, helping businesses manage their
        accounts receivable more effectively by offering intuitive dashboards and reporting features.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, integrating automated AR systems with existing data infrastructure is a strategic process that
        requires careful planning and execution. By ensuring seamless data flow and addressing quality issues,
        businesses can enhance their financial operations and achieve more
        accurate&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="integrating-automated-accounts-receivable-systems-with-existing-data-infrastructure" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Integrating Automated Accounts Receivable Systems with Existing Data Infrastructure
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="integrating-automated-accounts-receivable-systems-with-existing-data-infrastructure" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Integrating Automated Accounts Receivable Systems with Existing Data Infrastructure
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
