import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced suits businesses that handle a large volume of invoices and require automation to manage
        accounts receivable efficiently. Small businesses in Miami-Dade, Broward, and West Palm Beach counties
        will find Invoiced particularly useful if they struggle with manual cash flow management and need to
        improve forecasting accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that experience delays in payment collection, Invoiced can significantly reduce Days
        Sales Outstanding (DSO). By automating collections and utilizing&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven tools, businesses can expect faster payment processing
        and better cash flow management. This is ideal for companies that need to optimize their working
        capital and reduce reliance on manual processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Invoiced might not be the best fit for very small businesses or those with straightforward
        invoicing needs. If your current system is meeting your requirements without significant issues, the
        investment in a comprehensive platform may not be justified. Consider the scale of your operations and
        whether the features of Invoiced align with your business objectives.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering Invoiced, a next step would be to assess your current accounts receivable process
        and identify specific pain points. Determine if automation could address these issues and provide
        tangible benefits such as time savings and error reduction. Consulting with a specialist like Geek @
        Your Spot can also provide insights into how Invoiced can be tailored to your business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Invoiced should be based on a clear understanding of its
        capabilities and how they align with your business strategy. If you decide to proceed, Geek @ Your Spot
        can assist with the deployment and integration, ensuring a smooth transition to automated accounts
        receivable management.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-invoiced-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-invoiced-right-for-your-business">
                Is Invoiced Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-invoiced-right-for-your-business">
                Is Invoiced Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
