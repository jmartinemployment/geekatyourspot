import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the bustling offices of small businesses across Miami-Dade, Broward, and West Palm Beach, a silent battle
        unfolds daily. Business owners and their teams are constantly juggling invoices, scrambling to meet payment
        deadlines dictated by standard terms like Net 30, only to be blindsided by human delays in payment
        processing. This seemingly minor oversight can spiral into significant cash flow disruptions, leaving
        businesses vulnerable to unexpected financial strain. The reliance on static due dates without accounting
        for real-world payment behaviors creates a blindspot that can lead to costly surprises.</p>
      <p className="text-md text-white shadow-text pt-3">
        Imagine this: a business owner diligently plans their monthly expenses based on expected cash inflows, only
        to find that payments are delayed, throwing their entire financial plan into chaos. This scenario is all too
        common, and it highlights a critical gap in traditional&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash
        flow forecasting</GlossaryLink>&nbsp;methods. These methods often lack the flexibility and insight needed to
        adjust for unpredictable payment patterns, leading to a cycle of financial uncertainty. For small
        businesses, where every dollar counts, this kind of volatility can hinder growth and stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter the solution: Automating Spreadsheet Data. By integrating
        advanced&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;tools that analyze historical payment data and
        predict future trends, businesses can transform their cash flow management. This approach not only
        anticipates delays but also provides a dynamic view of financial health, enabling proactive decision-making.
        Automated systems offer a level of precision and foresight that manual processes simply cannot match,
        allowing business owners to focus on strategic growth rather than firefighting cash flow issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those in the Miami-Dade, Broward, and West Palm Beach counties, adopting automated solutions tailored to
        local business needs can be a game-changer. With tools like Helmhq&#39;s AI-driven systems, businesses gain
        the ability to navigate the complexities of cash flow forecasting with ease and accuracy. This
        transformation not only mitigates the risk of financial surprises but also empowers businesses to thrive in
        a competitive market. By embracing automation, small businesses can shift from reactive to proactive
        financial management, ensuring long-term success and stability.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
