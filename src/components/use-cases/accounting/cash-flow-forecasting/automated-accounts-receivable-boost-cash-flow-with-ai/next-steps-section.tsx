import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function NextStepsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Once you&#39;ve decided that automated accounts receivable is the right path for your business, the next
        steps involve careful planning and execution. The process begins with aligning your business objectives with
        the capabilities of the chosen AR tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start by clearly defining what you want to achieve with automation. This involves setting measurable goals,
        such as reducing days sales outstanding (DSO) by a specific percentage or improving cash flow
        predictability. Chaserhq, for example, can help categorize receivables and provide insights into payment
        behaviors, aiding in setting realistic targets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, assess your current&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>. Ensure that
        your financial data is accurate and up-to-date, as this will form the foundation of your automated system.
        Tools like Upflow integrate seamlessly with
        existing&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, ensuring that data remains
        consistent across platforms. This integration is crucial for maintaining the reliability of your forecasts
        and financial reports.</p>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the right technology is another critical step. Evaluate the features of different automated AR
        tools to find the one that best fits your business needs. For instance, Versapay offers collaborative
        features that enhance customer communication and payment processing, which can be particularly beneficial
        for businesses with a large client base.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, develop a pilot implementation strategy. This involves testing the chosen system on a small scale
        to ensure it meets your expectations. Monitor the initial rollout closely, and be prepared to make
        adjustments based on feedback from users. The goal is to ensure the system integrates smoothly with your
        existing processes and delivers the expected benefits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this process, maintain open communication with your team. Ensure that all stakeholders understand
        the changes and are trained on the new system. This will help in achieving a smoother transition and
        maximizing the benefits of automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="use-cases-accounting-accounts-receivable-next-steps-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How does automated AR improve the accuracy of a cash flow forecast?</li>
        <li>What is a &quot;Payment Predictor&quot; or &quot;Customer Risk Score&quot;?</li>
        <li>Can automated forecasting account for unbilled revenue or recurring disputes?</li>
        <li>What data does an automated AR system need to build a cash flow forecast?</li>
        <li>How does automated invoice matching impact cash visibility?</li>
        <li>How do automated AR tools handle &quot;What-If&quot; scenario planning?</li>
        <li>How does forecasting integration optimize collection strategies?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="next-steps-for-implementing-automated-accounts-receivable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Next Steps for Implementing Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="next-steps-for-implementing-automated-accounts-receivable" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Next Steps for Implementing Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
