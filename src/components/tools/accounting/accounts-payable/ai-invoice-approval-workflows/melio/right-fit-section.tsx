import Link from "next/link";
import { MELIO_AFFILIATE_URL } from "@/components/tools/accounting/accounts-payable/melio-affiliate-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryQuarter,
  faBolt,
  faFileInvoice,
  faPlug,
  faRoute,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function RightFitSection() {
  const groups = [
    {
      heading: "Right fit",
      items: [
        { icon: faFileInvoice, color: "text-[#C83803]", label: "Invoices stuck in manual approval" },
        { icon: faTriangleExclamation, color: "text-white", label: "Frequent errors and late payments" },
        { icon: faBolt, color: "text-[#BF5934]", label: "Quick setup and ease of use" },
        { icon: faPlug, color: "text-[#C83803]", label: "QuickBooks Online already in place" },
      ],
    },
    {
      heading: "Look elsewhere",
      items: [
        { icon: faBatteryQuarter, color: "text-white", label: "Low invoice volume" },
        { icon: faRoute, color: "text-[#BF5934]", label: "A straightforward approval process" },
      ],
    },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Determining if Melio is the right fit for your business involves assessing your specific needs and
        challenges. Melio is particularly suited for small to medium-sized businesses that require efficient,
        automated solutions for handling&nbsp;
        accounts payable. If your business struggles with
        manual approval processes, frequent errors, or delayed payments, Melio offers a streamlined approach
        to managing these issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        Melio excels in environments where quick setup and ease of use are priorities. Its ability to
        integrate with existing accounting software like QuickBooks Online makes it an attractive option for
        businesses seeking to minimize disruption during implementation. The platform&#39;s automation
        capabilities can significantly reduce the time spent on invoice processing and approvals, freeing up
        resources for other critical tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, if your business operates with a low volume of invoices or has a straightforward
        approval process, the investment in an automated system like Melio might not be necessary. In such
        cases, manual processes may suffice without impacting efficiency significantly. It&#39;s essential to
        weigh the potential benefits of automation against the cost and complexity of implementation.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those considering Melio, the next step is to evaluate your current workflow and identify specific
        pain points that automation could address. Consider the volume of invoices processed monthly, the
        number of approvals required, and the time spent on manual tasks. This assessment will help determine
        whether Melio&#39;s features align with your business objectives and can deliver the desired
        improvements.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, the decision to adopt Melio should be based on a clear understanding of your business
        needs and the potential for enhanced efficiency and cost savings. For businesses ready to streamline
        their accounts payable processes, Melio offers a robust solution that can transform how you manage
        approvals and payments. By focusing on automation, integration, and ease of use, Melio provides the
        tools necessary to optimize your financial operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business matches that profile, take a look at&nbsp;<a id={`tools-accounting-approval-workflows-melio-right-fit-affiliate${idSuffix}`} href={MELIO_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-[#C83803] hover:underline">Melio</a>&nbsp;directly.
        Geek @ Your Spot LLC earns a commission if you sign up through this link.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-approval-workflows-melio-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many vendor invoices do you process in a typical month?</li>
        <li>Where do invoices currently arrive: email, paper mail, vendor portals, text messages, employee forwarding, or multiple locations?</li>
        <li>Is there one central AP inbox, or do invoices go to different people and departments?</li>
        <li>Who enters invoice details into QuickBooks, Xero, or your accounting system?</li>
        <li>“Invoice capture vs. AP automation: what does your business actually need?”</li>
        <li>“Can invoice software read every line, or just the total?”</li>
        <li>“Who checks an invoice when AI gets it wrong?”</li>
        <li>“Does your invoice tool create a reviewable bill or post directly to accounting?”</li>
        <li>“What does automated invoice processing really cost once line-item credits are included?”</li>
        <li>How many people touch an invoice before it is ready to pay?</li>
        <li>Can you walk me through the last invoice you paid, from the moment it arrived to the moment payment was approved?</li>
        <li>What happens when an invoice arrives without a purchase order, job number, department, or proper coding?</li>
        <li>Which types of invoices are most common: recurring bills, subcontractor invoices, inventory, utilities, rent, credit-card expenses, or project-related expenses?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Melio’s case rests on one idea, that a $200 renewal should not need the sign-off a $40,000 invoice needs. Our post <Link id={`tools-accounting-accounts-payable-ai-invoice-approval-workflows-melio-xlink-blog${idSuffix}`} href="/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable" className="text-[#C83803] hover:underline">Accounts Payable Approval Automation</Link> shows what happens without that rule: every invoice follows the same path, trivial expenses clog the queue, and staff bypass the process to get vendors paid on time. The post places Melio at the payment stage, where bill intake and approvals are centralized so money moves only after authorization. Our <Link id={`tools-accounting-accounts-payable-ai-invoice-approval-workflows-melio-xlink-pillar${idSuffix}`} href="/use-cases/accounting/accounts-payable/ai-invoice-approval-workflows" className="text-[#C83803] hover:underline">AI Invoice Approval Workflows</Link> guide then sets out the four-phase assessment that decides whether your QuickBooks Online setup and invoice count warrant it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-melio-right-for-your-business">
                Is Melio Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
              <div className="flex w-full flex-col gap-10 text-center">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="border-b-4 border-white pb-2 text-xl font-black font-[var(--font-sora)] uppercase tracking-widest text-white shadow-text">
                      {group.heading}
                    </h3>
                    <ul className="flex flex-col items-center gap-8 pt-8">
                      {group.items.map((item) => (
                        <li key={item.label} className="flex flex-col items-center">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={item.color}
                            style={{ width: "5.5rem", height: "5.5rem" }}
                          />
                          <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                            {item.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-melio-right-for-your-business-lg">
                Is Melio Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
