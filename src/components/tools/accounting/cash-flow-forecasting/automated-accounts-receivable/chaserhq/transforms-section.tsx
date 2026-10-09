import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq revolutionizes the way small businesses handle their accounts receivable by automating processes
        that traditionally consume significant time and resources. By shifting from manual to automated systems,
        Chaserhq not only streamlines operations but also enhances cash flow predictability and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of Chaserhq is its ability to automate payment reminders. This feature ensures
        that follow-ups are consistent and timely, reducing the need for manual intervention. By automating these
        reminders, businesses can maintain a steady cash flow without dedicating staff to chase payments
        constantly. This not only saves time but also reduces the risk of human error, which can occur with
        manual processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq also provides real-time updates on receivables, integrating directly with accounting systems to
        reflect the most current data. This eliminates the reliance on static spreadsheets and outdated reports.
        With real-time insights, businesses can make informed decisions quickly, addressing potential cash flow
        issues before they become critical.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Chaserhq categorizes receivables into actionable segments such as promised, disputed, and
        at-risk cash. This segmentation allows businesses to prioritize their efforts where they will have the
        greatest impact. By focusing on high-risk accounts or large outstanding invoices, businesses can allocate
        resources more effectively, improving overall cash flow management.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s forecasting capabilities are another significant advantage. Chaserhq uses historical
        payment data and&nbsp;
        <GlossaryLink slug="predictive-analytics">predictive analytics</GlossaryLink>&nbsp;to provide a
        forward-looking view of cash flow. This allows businesses to anticipate shortfalls and plan accordingly,
        rather than reacting to issues as they arise. The ability to forecast accurately helps businesses
        maintain financial stability and make strategic decisions with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating accounts receivable processes, Chaserhq removes the burden of manual tracking and
        follow-up. This allows business owners and their teams to focus on more strategic tasks, such as growth
        and customer engagement, rather than being bogged down by administrative duties. The result is a more
        efficient operation with improved financial outcomes.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Chaser’s receivables forecasting feature solves this challenge by giving you a clear, accurate view
        of expected payments based on real receivables data.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-chaserhq-transforms-source"
          href="https://www.chaserhq.com/receivables-forecast-fact-sheet"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Chaser
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-transforms-automated-accounts-receivable-management">
                How Chaserhq Transforms Automated Accounts Receivable Management
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chaserhq-transforms-automated-accounts-receivable-management">
                How Chaserhq Transforms Automated Accounts Receivable Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
