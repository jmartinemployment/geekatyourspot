import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function WeeklyWorkflowSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay transforms the way small businesses handle Automated Accounts Receivable by removing several
        time-consuming tasks from your weekly workflow. By automating the matching of payments to invoices, the
        platform eliminates the need for manual reconciliation. This means your team can spend less time on
        tedious data entry and more time on strategic activities that drive growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also addresses the issue of invoice disputes by providing a collaborative space for customers
        and AR teams to resolve issues quickly. With built-in exception workflows, Versapay ensures that disputes
        and missing details are routed to the right person for quick resolution. This not only speeds up the
        reconciliation process but also improves customer satisfaction by reducing the time it takes to resolve
        invoice queries.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-powered insights allow businesses to forecast cash flow with
        greater accuracy. Instead of relying on best-case scenarios, businesses can use&nbsp;
        <GlossaryLink slug="predictive-analytics">predictive analytics</GlossaryLink>&nbsp;to account for potential
        delays and disputes. This proactive approach to cash flow management helps businesses maintain a healthy
        financial position, even when facing unexpected challenges.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses struggling with manual processes, Versapay offers a digital payment portal that provides
        customers with a convenient way to view and pay invoices online. This not only accelerates the payment
        process but also reduces the likelihood of payment errors. By supporting a variety of payment methods,
        including ACH, card, and wire transfers, Versapay ensures that transactions are processed smoothly and
        efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Incorporating Versapay into your business operations means fewer errors, faster payments, and a more
        efficient accounts receivable process. By automating routine tasks and providing tools for better
        financial management, Versapay allows your team to focus on what matters most: growing your business and
        serving your customers effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapays-impact-on-your-weekly-workflow">
                Versapay&#39;s Impact on Your Weekly Workflow
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapays-impact-on-your-weekly-workflow">
                Versapay&#39;s Impact on Your Weekly Workflow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
