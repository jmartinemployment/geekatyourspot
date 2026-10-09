import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Ramp&#39;s automated approval workflows are well-suited for small businesses dealing with a high
        volume of invoices and seeking to reduce manual intervention. Its features are designed to streamline
        processes, reduce errors, and free up time for more strategic tasks. However, it&#39;s not a
        one-size-fits-all solution, and understanding whether it&#39;s right for your business involves
        assessing your specific needs and challenges.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses experiencing frequent delays in invoice approvals and struggling with manual data entry
        errors, Ramp offers a compelling solution. Its ability to automate and intelligently route invoices
        ensures that approvals are handled efficiently, reducing the risk of bottlenecks and errors. This can
        be a game-changer for teams that are overwhelmed by the volume of invoices they need to process.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, if your business processes a relatively low volume of invoices and manual approvals
        do not significantly impact your operations, Ramp might not be necessary. The investment in such a
        robust automation tool should be justified by the scale of your operations and the potential
        efficiency gains.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those ready to explore automation, the next step is to assess your current workflows. Identify the
        areas where manual processes are most time-consuming and error-prone. Consider how Ramp&#39;s
        features, such as its OCR and ML capabilities, can address these specific challenges and improve your
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Engaging with a consultancy like Geek @ Your Spot can provide additional insights into how Ramp can be
        tailored to fit your business needs. Their expertise in&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation ensures that Ramp is configured to
        integrate seamlessly with your existing systems, maximizing the benefits of automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-approval-workflows-ramp-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          booking your free consultation
        </Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How many vendor invoices do you process in a typical month?</li>
        <li>Where do invoices currently arrive: email, paper mail, vendor portals, text messages, employee forwarding, or multiple locations?</li>
        <li>Is there one central AP inbox, or do invoices go to different people and departments?</li>
        <li>Who enters invoice details into QuickBooks, Xero, or your accounting system?</li>
        <li>“Invoice capture vs. AP automation: what does your business actually need?”</li>
        <li>“Can invoice software read every line—or just the total?”</li>
        <li>“Who checks an invoice when AI gets it wrong?”</li>
        <li>“Does your invoice tool create a reviewable bill or post directly to accounting?”</li>
        <li>“What does automated invoice processing really cost once line-item credits are included?”</li>
        <li>How many people touch an invoice before it is ready to pay?</li>
        <li>Can you walk me through the last invoice you paid, from the moment it arrived to the moment payment was approved?</li>
        <li>What happens when an invoice arrives without a purchase order, job number, department, or proper coding?</li>
        <li>Which types of invoices are most common: recurring bills, subcontractor invoices, inventory, utilities, rent, credit-card expenses, or project-related expenses?</li>
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business">
                Is Ramp Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-ramp-right-for-your-business">
                Is Ramp Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
