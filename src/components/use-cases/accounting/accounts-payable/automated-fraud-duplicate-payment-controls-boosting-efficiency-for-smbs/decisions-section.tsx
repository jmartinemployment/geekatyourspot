import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Automated Fraud &amp; Duplicate Payment Controls is not a plug-and-play solution. The
        early decisions you make set the course for success or failure. For small businesses in Miami-Dade,
        Broward, and West Palm Beach counties, the stakes are high. Missteps can mean continued financial
        losses and inefficiencies. The first step in a successful implementation is aligning the system with
        your business objectives. Clearly define what you want to achieve with automation. Are you looking to
        reduce processing time, cut down on errors, or improve compliance? Setting these goals ensures the
        solution is tailored to your specific needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, a thorough&nbsp;
        <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data quality</GlossaryLink>
        &nbsp;assessment is crucial. Before deploying any&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven solution,
        assess the integrity of your existing data. This involves checking for duplicates, inconsistencies,
        and missing information. Poor data quality can lead to inaccurate analysis and faulty fraud
        detection, undermining the entire system. This step is not just about cleaning data but also about
        understanding what data is essential for the system to function effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Choosing the right technology is another critical decision. Opt for platforms that integrate
        seamlessly with your current infrastructure. Tools like&nbsp;
        <Link id="use-cases-accounting-fraud-controls-decisions-medius"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius" className="text-[#0B162A] hover:underline">
          Medius
        </Link>,&nbsp;
        <Link id="use-cases-accounting-fraud-controls-decisions-tipalti"
          href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti" className="text-[#0B162A] hover:underline">
          Tipalti
        </Link>, and&nbsp;
        <Link id="use-cases-accounting-fraud-controls-decisions-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli" className="text-[#0B162A] hover:underline">
          Stampli
        </Link>&nbsp;offer robust fraud detection and duplicate payment controls that can be customized to
        fit your specific requirements. These tools provide real-time anomaly detection and automate
        processes, reducing the manual workload on your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        A pilot implementation strategy is essential to test the waters. Before a full-scale rollout, conduct
        a small-scale pilot. This allows you to identify potential issues and adjust configurations without
        disrupting your entire operation. It also provides valuable insights into how the system interacts
        with your existing processes and data. A pilot helps you fine-tune the solution, ensuring it meets
        your objectives effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, consider the human element. Training your staff to work with new systems is as important as
        the technology itself. Employees need to understand the benefits of automation and how it will change
        their roles. Engaging your team early in the process, providing adequate training, and addressing
        their concerns can ease the transition and ensure a smoother implementation. Without buy-in from your
        team, even the best technology can fall short.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="making-the-right-decisions-early-on" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Making the Right Decisions Early On
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="making-the-right-decisions-early-on" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Making the Right Decisions Early On
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
