import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the bustling office of a small Miami-Dade business, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;team is knee-deep in
        invoices. Each one is a potential minefield of errors, delays, and fraud risks. A team member
        painstakingly checks invoice numbers against purchase orders, wary of duplicate payments that could
        slip through unnoticed. Despite their best efforts, the manual process is slow and fraught with the
        potential for costly mistakes. Duplicate invoice submissions, sometimes with minor formatting changes,
        are a common headache, often bypassing detection and leading to unnecessary financial drain. The team
        spends countless hours scrutinizing each document, aware that a single oversight could result in
        significant monetary loss and damage to the company’s reputation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Fraud &amp; Duplicate Payment Controls offer a transformative solution to these challenges.
        By harnessing the power of&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>, businesses can shift from
        reactive to proactive fraud prevention. Advanced algorithms and&nbsp;
        <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>&nbsp;analyze large volumes of
        data in real-time, swiftly identifying patterns and anomalies indicative of fraudulent activity. This
        technology not only catches duplicates and inconsistencies before payments are made but also
        continuously learns from new data to enhance detection capabilities over time. This means faster
        identification of potential fraud, reducing financial risks and enabling quicker response times. For
        small businesses in West Palm Beach, Broward, and Miami-Dade counties, implementing such controls
        could mean the difference between financial security and preventable losses.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius, a leader in accounts payable automation, exemplifies how AI can bolster financial defenses.
        Its fraud detection software, trained on over a decade of real AP outcomes, offers unparalleled
        accuracy, detecting duplicate invoices, mismatched payment details, and unauthorized supplier changes.
        With real-time alerts and automated risk scoring, accounts payable teams can swiftly address potential
        issues, ensuring the integrity of financial transactions. As businesses in these Florida counties seek
        to safeguard their assets, embracing AI-powered solutions like Medius can provide the peace of mind
        that manual processes simply cannot match.</p>
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
