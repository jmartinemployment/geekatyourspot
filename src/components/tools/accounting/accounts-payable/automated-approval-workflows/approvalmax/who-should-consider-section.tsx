import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function WhoShouldConsiderSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        ApprovalMax is ideally suited for small to medium-sized businesses that need to streamline their
        approval processes. It&#39;s particularly beneficial for companies dealing with high volumes of
        invoices and complex approval chains that often lead to bottlenecks and errors. By automating these
        workflows, ApprovalMax helps reduce manual intervention, ensuring faster and more accurate processing
        of financial documents.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, ApprovalMax may not be the best fit for very small businesses with low invoice volumes,
        where manual processes do not significantly impact operations. In such cases, the investment in
        automation may not justify the return, and simpler solutions might suffice.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering ApprovalMax, the next step involves assessing your current approval
        processes and identifying areas where automation can provide the most value. This assessment should
        include evaluating the number of invoices processed monthly, the complexity of approval chains, and
        the frequency of errors due to manual handling.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you have a clear understanding of your needs, reaching out to Geek @ Your Spot for a
        consultation can provide further insights. As experts in&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation, they can guide you through the setup
        process, ensuring that ApprovalMax integrates seamlessly with your existing systems and meets your
        specific requirements. This partnership not only facilitates a smoother transition but also
        maximizes the benefits of automation for your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, ApprovalMax offers a robust solution for businesses looking to enhance their financial
        approval processes. By carefully evaluating your needs and leveraging the expertise of Geek @ Your
        Spot, you can make an informed decision that aligns with your operational goals and drives
        efficiency in your&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-approval-workflows-approvalmax-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-should-consider-approvalmax-and-next-steps">
                Who Should Consider ApprovalMax and Next Steps
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-should-consider-approvalmax-and-next-steps">
                Who Should Consider ApprovalMax and Next Steps
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
