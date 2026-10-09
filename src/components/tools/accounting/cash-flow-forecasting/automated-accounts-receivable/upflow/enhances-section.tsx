import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EnhancesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow transforms the landscape of Automated Accounts Receivable by removing the burdens that manual
        processes impose on small businesses. Its capabilities are designed to streamline operations, reduce
        errors, and improve cash flow predictability, allowing finance teams to reclaim valuable time and focus
        on strategic growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key features of Upflow is its ability to automate follow-ups. By setting up automated reminder
        sequences, businesses no longer need to manually track and chase overdue invoices. This automation
        ensures that reminders are sent out consistently and at the right time, reducing the risk of invoices
        slipping through the cracks and improving collection efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow also offers a sophisticated forecasting tool that projects cash inflows based on actual payment
        behaviors rather than optimistic assumptions. By analyzing billing cohort collection rates, Upflow
        provides a more accurate picture of when cash will actually arrive, helping businesses plan more
        effectively and avoid cash flow surprises.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Upflow prioritizes high-value clients, ensuring that the finance team focuses their efforts
        where it matters most. By segmenting customers based on their payment behavior and invoice value, Upflow
        helps allocate resources efficiently, ensuring that significant payments are prioritized and collected
        promptly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems is seamless, allowing Upflow to pull live
        receivables data and keep forecasts current without manual updates. This connectivity eliminates the need
        for manual data entry and ensures that the finance team always has access to up-to-date information,
        reducing the likelihood of errors and improving decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        By centralizing AR analytics, collections workflows, and forecasting in one platform, Upflow provides a
        comprehensive solution that enhances the efficiency of Automated Accounts Receivable processes. This
        integration not only improves cash flow reliability but also allows businesses to focus on strategic
        initiatives, driving growth and improving financial health.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-enhances-automated-accounts-receivable">
                How Upflow Enhances Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-enhances-automated-accounts-receivable">
                How Upflow Enhances Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
