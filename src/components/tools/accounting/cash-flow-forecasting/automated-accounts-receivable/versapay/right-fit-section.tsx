import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay is ideally suited for small to mid-sized businesses in Miami-Dade, Broward, and West Palm Beach
        counties that are looking to enhance their automated accounts receivable processes. Its comprehensive
        automation features make it an excellent choice for businesses that deal with a high volume of transactions
        and require efficient reconciliation and cash application.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Versapay might not be the best fit for businesses that have minimal accounts receivable activity or
        those that do not rely heavily on&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems. For such
        companies, a simpler solution with fewer integration requirements may be more appropriate.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering Versapay, the next step is to evaluate their current accounts receivable
        processes and identify specific pain points that need addressing. This evaluation will help determine how
        Versapay&#39;s features can best be utilized to improve efficiency and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once a decision is made, engaging with a consultant like Geek @ Your Spot can facilitate a smooth
        implementation. Their expertise in configuring Versapay to fit specific business needs ensures that the
        transition is seamless and effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, choosing Versapay offers the potential for significant improvements in cash flow management and
        customer satisfaction. By automating and streamlining accounts receivable processes, businesses can focus
        more on strategic growth rather than administrative tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-versapay-right-fit-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-should-choose-versapay-and-next-steps">
                Who Should Choose Versapay and Next Steps
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-should-choose-versapay-and-next-steps">
                Who Should Choose Versapay and Next Steps
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
