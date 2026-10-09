import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightChoiceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Stampli is particularly well-suited for small businesses that are burdened by manual&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes. If your team is
        overwhelmed by the volume of invoices or frequently encounters delays due to manual approvals,
        Stampli&#39;s automated approval workflows can offer a substantial improvement. Its ability to
        integrate with existing systems like Sage 300 CRE, as demonstrated in Cork Howard Construction&#39;s
        case, highlights its flexibility and adaptability.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Stampli may not be the best fit for businesses with minimal invoice processing needs or those
        that already have a streamlined AP process. In such cases, the investment in an automated solution
        might not justify the return. It&#39;s crucial to assess your current workflow and identify the pain
        points that automation can address before committing to a new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses ready to transition to automated approval workflows, the next step is to evaluate your
        specific requirements. Consider the volume of invoices, the complexity of your approval processes, and
        the integrations you need. Stampli&#39;s features, such as customizable approval workflows and
        AI-powered invoice processing, are designed to address these challenges and improve your overall
        financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        To ensure a successful implementation, partnering with an experienced consultancy like Geek @ Your
        Spot can be invaluable. They specialize in configuring Stampli to fit your unique business
        environment, providing training, and ensuring seamless integration with your existing systems. Their
        expertise can help you maximize the benefits of Stampli and achieve a smoother transition to automated
        approval workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, deciding whether Stampli is right for your business involves weighing the potential
        benefits against your current operational needs and future goals. By carefully assessing these
        factors, you can make an informed decision that enhances your accounts payable processes and supports
        your business&#39;s growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <Link id="tools-accounting-approval-workflows-stampli-right-choice-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-stampli-the-right-choice-for-your-business">
                Is Stampli the Right Choice for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-stampli-the-right-choice-for-your-business">
                Is Stampli the Right Choice for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
