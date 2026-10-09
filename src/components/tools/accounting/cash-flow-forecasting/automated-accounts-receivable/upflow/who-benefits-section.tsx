import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function WhoBenefitsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow is tailored for finance teams in mid-sized and scaling B2B companies, particularly those dealing
        with complex accounts receivable processes. It suits businesses that need to move beyond basic invoice
        follow-ups and require a more sophisticated tool to manage their&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;and collections.
        Companies operating in industries where payment behavior varies significantly will find Upflow&#39;s
        approach to forecasting based on actual payment data particularly advantageous.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Upflow might not be the best fit for very small businesses with straightforward accounts
        receivable needs or those that operate on a tight budget without the capacity to invest in integrated
        solutions. For these businesses, simpler tools like Chaser or Bill may suffice. These alternatives can
        handle basic follow-ups and reminders without the advanced forecasting capabilities that Upflow
        provides.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that find Upflow suitable, the next step involves assessing their current systems and
        processes to ensure compatibility. Geek @ Your Spot can assist in this evaluation, offering expertise in
        integrating Upflow with existing&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems and tailoring it to specific business needs.
        This includes configuring data mappings, setting up automated workflows, and providing training to
        ensure teams can fully leverage Upflow&#39;s capabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, businesses should prepare for a cultural shift towards data-driven decision-making. With
        Upflow, finance teams gain access to real-time analytics and insights, enabling them to proactively
        manage collections and cash flow. This shift not only improves financial outcomes but also enhances
        collaboration across departments, as seen with clients like Walnut, who successfully integrated finance
        and customer success teams using Upflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Upflow is an ideal choice for businesses ready to enhance their accounts receivable
        management with advanced forecasting and automation. By partnering with Geek @ Your Spot, companies can
        ensure a smooth implementation process and maximize the benefits of this powerful tool. For those
        interested in exploring how Upflow can transform their accounts receivable processes, consulting with
        experts at Geek @ Your Spot is a prudent first step.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-upflow-who-benefits-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-from-upflow-and-next-steps">
                Who Benefits from Upflow and Next Steps
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-from-upflow-and-next-steps">
                Who Benefits from Upflow and Next Steps
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
