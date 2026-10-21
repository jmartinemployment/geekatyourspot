import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, implementing automated
        spreadsheet data systems can
        transform&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash
        flow forecasting</GlossaryLink>&nbsp;from a cumbersome task into a streamlined, efficient process. The
        approach begins with aligning business objectives to ensure the implementation addresses specific pain
        points.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Business Objectives Alignment
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        This initial phase involves a thorough understanding of what the business aims to achieve with automation.
        Identifying specific bottlenecks, such as slow data entry or delayed financial insights, helps in setting
        measurable goals. These objectives might include reducing manual data entry time by 50% or increasing the
        accuracy of financial forecasts. This alignment ensures that the automation efforts are focused and
        strategic, paving the way for a successful implementation.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Data Quality Assessment
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Before diving into any technical setup, it&#39;s crucial to assess the quality of your existing data. This
        includes evaluating the integrity, schema, and storage of your current data. The goal is to ensure that your
        data is accurate, complete, and formatted correctly. This phase might involve cleaning up old records,
        validating data against sources, and setting up structures to prevent future errors. Tools like&nbsp;
        <Link id={`use-cases-accounting-spreadsheet-data-mechanics-dryrun${idSuffix}`}
          href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun" className="text-[#0B162A] hover:underline">
          Dryrun
        </Link>&nbsp;and&nbsp;
        <Link id={`use-cases-accounting-spreadsheet-data-mechanics-cashflowfrog${idSuffix}`}
          href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog" className="text-[#0B162A] hover:underline">
          Cashflowfrog
        </Link>&nbsp;can assist in
        maintaining&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;by providing real-time insights and highlighting discrepancies that need
        attention.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Tech Selection and Architecture
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        With objectives clear and data primed, the next step is selecting the right technology. This step is not
        just about choosing any tool but selecting those that integrate seamlessly with your existing systems. For
        instance,&nbsp;
        <Link id={`use-cases-accounting-spreadsheet-data-mechanics-clockwork${idSuffix}`}
          href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork" className="text-[#0B162A] hover:underline">
          Clockwork
        </Link>&nbsp;pulls data directly from QuickBooks and Xero, enabling businesses to automate their&nbsp;<Link id={`use-cases-accounting-spreadsheet-data-mechanics-cash-flow-forecasting${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow forecasting</Link>&nbsp;without manual intervention. Similarly,&nbsp;
        <Link id={`use-cases-accounting-spreadsheet-data-mechanics-floatapp${idSuffix}`}
          href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp" className="text-[#0B162A] hover:underline">
          Floatapp
        </Link>&nbsp;offers a user-friendly interface that automates the creation of financial forecasts based on live
        data. The architecture should be designed to support these tools, ensuring they work harmoniously with your
        current processes and systems.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Pilot Implementation Strategy
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        The final phase involves testing the chosen tools and processes in a controlled environment. This pilot
        phase allows businesses to validate their setups, ensuring everything functions as expected before a
        full-scale rollout. During this phase, smoke tests can be conducted to simulate real-world scenarios, and
        adjustments can be made based on the outcomes. For example,&nbsp;
        <Link id={`use-cases-accounting-spreadsheet-data-mechanics-takethehelm${idSuffix}`}
          href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm" className="text-[#0B162A] hover:underline">
          Take the Helm
        </Link>’s platform allows businesses to scale content operations predictably, ensuring that the implemented systems
        can handle increased loads without compromising performance. This phase is critical for identifying
        potential issues early and ensuring a smooth transition to full automation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-spreadsheet-data-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Spreadsheet Data Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-spreadsheet-data-implementation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Spreadsheet Data Implementation
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
