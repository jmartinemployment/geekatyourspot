import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Takethehelm streamlines&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A]
        hover:underline">cash flow forecasting</GlossaryLink>&nbsp;by automating the collection and analysis of
        financial data. The process begins with connecting your accounting software, such as QuickBooks, Xero,
        or Sage, to Takethehelm. This integration allows the platform to pull in real-time data, ensuring that
        forecasts are based on the most current information available.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the accounting system is connected, Takethehelm automatically syncs with your data. This
        synchronization eliminates the need for manual data entry, reducing errors and saving time. The platform
        then generates cash flow forecasts for various time frames, including 1 month, 3 months, 6 months, and 1
        year. These forecasts provide a clear picture of future cash positions, helping businesses make informed
        decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Takethehelm offers a user-friendly interface that allows users to tailor forecasts to their specific
        needs. Users can adjust amounts, dates, and include or exclude transactions from forecasts. This
        flexibility ensures that the forecasts are not only accurate but also relevant to the business&#39;s
        unique situation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scenario planning is another key feature of Takethehelm. Users can create and compare multiple scenarios
        side-by-side, allowing them to explore various outcomes and make strategic decisions with confidence.
        This feature is particularly useful for businesses facing uncertain market conditions or planning major
        investments.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s drag-and-drop interface makes it easy to make changes and see the impact immediately.
        This visual approach helps users quickly understand how different actions affect cash flow, making it
        easier to communicate these insights to stakeholders.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-takethehelm-works-step-by-step-mechanics">
                How Takethehelm Works: Step-by-Step Mechanics
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-takethehelm-works-step-by-step-mechanics">
                How Takethehelm Works: Step-by-Step Mechanics
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
