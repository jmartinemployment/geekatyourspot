import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow is best suited for mid-sized and scaling companies, particularly those within the $10M–$500M revenue
        range. It excels in environments where automated accounts receivable is a significant source of cash flow
        uncertainty. These companies often benefit from Upflow&#39;s ability to project cash inflows based on actual
        payment behaviors, providing a more reliable financial outlook.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses that face challenges with traditional forecasting methods, which often rely on static due dates,
        will find Upflow&#39;s approach refreshing. By focusing on billing cohort collection rates, Upflow offers a
        more nuanced and accurate forecast. This is especially valuable for companies with complex payment cycles or
        those experiencing rapid growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Upflow might not be the ideal fit for very small businesses that require only basic invoice
        tracking and follow-up capabilities. Such businesses might find simpler tools like Chaser or Bill more
        aligned with their needs and budget constraints. These platforms provide the necessary functionality for
        straightforward collections without the advanced forecasting features that Upflow offers.</p>
      <p className="text-md text-white shadow-text pt-3">
        For companies ready to enhance their automated accounts receivable processes with Upflow, the next step
        involves assessing their current systems and identifying integration points. Geek @ Your Spot, located in
        South Florida, specializes in implementing Upflow, ensuring seamless integration with
        existing&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;or accounting systems. This local expertise
        is invaluable for businesses in Miami-Dade, Broward, and West Palm Beach counties looking to streamline
        their financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        To move forward, businesses should evaluate their specific needs, considering factors such as the volume of
        invoices, the complexity of their payment cycles, and their growth projections. By aligning these factors
        with Upflow&#39;s capabilities, businesses can make an informed decision about whether this tool is the
        right fit for their accounts receivable automation needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-accounts-receivable-upflow-right-fit-consultation" href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-upflow-and-what-to-do-next">
                Who Benefits Most from Upflow and What to Do Next
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-upflow-and-what-to-do-next">
                Who Benefits Most from Upflow and What to Do Next
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
