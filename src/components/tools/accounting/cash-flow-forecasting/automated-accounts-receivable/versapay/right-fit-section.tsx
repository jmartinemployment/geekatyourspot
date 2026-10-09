import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay is designed to support businesses that require robust automation in their accounts receivable
        processes. It&#39;s particularly well-suited for small to medium-sized businesses in Miami-Dade, Broward,
        and West Palm Beach counties that face challenges with manual AR processes, such as delayed payments and
        reconciliation issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        This platform is ideal for companies that need to integrate their AR operations with existing&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, offering seamless data flow and reducing the need
        for manual data entry. Its ability to handle multiple payment types and provide real-time insights makes
        it a valuable tool for businesses looking to enhance cash flow visibility and control.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Versapay may not be the best fit for every business. Companies that require only basic invoicing
        and payment tracking might find its features more than they need, potentially leading to unnecessary
        costs. For these businesses, simpler solutions like Bill or Invoiced might be more appropriate.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering Versapay, the next step is to evaluate how its features align with your operational
        needs. Consider the complexity of your current AR processes, the volume of transactions, and any specific
        integration requirements you have. Versapay&#39;s collaborative tools and automation capabilities can
        transform how your team manages accounts receivable, but it&#39;s crucial to ensure these align with your
        business objectives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot, located in West Palm Beach, Broward, and Miami-Dade counties, can assist in implementing
        Versapay effectively. Their expertise in&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation ensures that the transition to automated
        accounts receivable is smooth, with minimal disruption to your operations. They offer configuration, data
        mapping, and integration services to tailor Versapay to your business environment.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, if your business is struggling with manual AR processes and you seek to improve efficiency
        and cash flow, Versapay could be a transformative solution. Assess your needs, consider the potential
        benefits, and consult with professionals to determine if this platform is the right fit for your
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-versapay-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-versapay-right-for-your-business">
                Is Versapay Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-versapay-right-for-your-business">
                Is Versapay Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
