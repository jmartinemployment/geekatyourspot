import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach often find themselves trapped in the cycle of
        outdated spreadsheet management. This reliance on static data can lead to severe cash flow disruptions. The
        main culprit? Assuming that accounts receivable will be settled exactly on the invoice due date, like Net
        30, without accounting for real-world payment delays. This oversight can result in unexpected financial
        shortfalls, putting the business at risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine a business owner meticulously planning their monthly budget based on these due dates, only to be
        blindsided when payments are delayed. This not only disrupts operations but can also damage critical
        relationships with vendors if&nbsp;<GlossaryLink slug="accounts-payable">accounts
        payable</GlossaryLink>&nbsp;are delayed due to insufficient funds. The manual effort required to constantly
        update spreadsheets is another drain, consuming valuable hours that could be better spent on strategic
        planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        The inability to translate spreadsheet data into real-time financial insights leaves businesses flying
        blind. Without a clear understanding of their immediate financial health, companies struggle to anticipate
        and mitigate risks associated with sudden operational changes, such as purchasing new equipment or dealing
        with inflation spikes. This lack of foresight can compromise cash safety buffers, leading to financial
        instability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq addresses these challenges by transforming erratic payment schedules into a clear, intuitive
        dashboard. This tool allows businesses to manage their cash runway effectively, ensuring that payables are
        aligned with cash flows. By providing a real-time view of financial health, Helmhq enables proactive
        decision-making, reducing the risk of cash crunches and improving overall financial stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Helmhq, businesses no longer need to spend tedious hours rebuilding spreadsheet layouts for every
        client or bank request. Instead, they gain the ability to manage and predict cash flows seamlessly, freeing
        up time for more critical tasks. This shift from manual to automated processes not only enhances efficiency
        but also provides the clarity needed to maintain strong vendor relationships and ensure operational
        continuity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="breaking-free-from-spreadsheet-constraints">
                Breaking Free from Spreadsheet Constraints
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="breaking-free-from-spreadsheet-constraints">
                Breaking Free from Spreadsheet Constraints
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
