import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small business owners in Miami-Dade, Broward, and West Palm Beach counties are all too familiar with the
        frustration of manual accounts receivable processes. Each month, they spend countless hours poring over
        invoices, matching payments, and reconciling accounts. This tedious work not only consumes time but also
        increases the risk of errors, impacting cash flow and financial stability. Traditional methods often result
        in delayed payments and missed opportunities for growth—problems that can be particularly damaging for
        businesses operating on tight margins.</p>
      <p className="text-md text-white shadow-text pt-3">
        These challenges are not just about inefficiency; they directly affect the bottom line. When payments are
        delayed, it disrupts cash flow, making it difficult to plan for future expenses or seize new business
        opportunities. Unmatched payments can sit unresolved for weeks, creating a backlog that complicates
        financial reporting and decision-making. For many small businesses, these issues can mean the difference
        between thriving and merely surviving in a competitive market.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated accounts receivable solutions offer a lifeline. By
        integrating&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;and automation, businesses can streamline
        their invoicing, payment matching, and reconciliation processes. Versapay, for example, uses cutting-edge
        technology to eliminate the need for manual data entry and reduce reconciliation delays. With features like
        optical character recognition (OCR) and AI-enabled matching, it simplifies the cash application process,
        ensuring payments are matched accurately and promptly. This not only saves time but also enhances financial
        clarity and control.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, adopting an automated accounts receivable system can lead to
        significant improvements in efficiency and customer satisfaction. By reducing manual workloads and errors,
        these systems free up resources, allowing business owners to focus on growth and innovation. They transform
        accounts receivable from a burdensome task into a streamlined, efficient process that supports better cash
        flow management and financial health.</p>
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
