import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A South Florida general contractor sits in a modest office, sifting through timesheets and invoices for
        a dozen workers. Some are part-time, some are on call, and a few just finished a seasonal project. The
        spreadsheet on his monitor lists W-2 employees next to 1099 contractors, but the lines are blurry. He
        tries to keep up with payroll tax deposits, overtime rules, and fluctuating schedules, but the rules
        keep shifting. One missed distinction or late tax deposit could trigger a federal or state audit. With
        no HR or legal team, every payroll cycle feels like walking a tightrope over a pit of penalties.</p>
      <p className="text-base text-white shadow-text pt-3">
        This risk is not theoretical. In Miami-Dade, Broward, and Palm Beach counties, small businesses face
        real exposure when handling&nbsp;<Link id={`tools-accounting-payroll-tax-worker-misclassification-deel-overview-payroll-tax-worker-misclassification${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-software" className="text-[#C83803] hover:underline">Payroll Tax &amp; Worker Misclassification</Link>. A single error in classifying a
        worker as a contractor instead of an employee can lead to a cascade of back taxes, fines, and lawsuits.
        The IRS and Department of Labor have ramped up audits on gig-heavy industries (hospitality, construction,
        real estate, and local services) where seasonal and project-based hiring is common. Florida’s laws add
        another layer: missing re-employment tax payments, failing to verify new hires, or not reporting
        quarterly can mean costly penalties and lost contracts. If you don’t have airtight records and
        up-to-date filings, even a routine inquiry can become an expensive crisis.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core problem: most small business owners in the region want to grow flexibly, but the administrative
        complexity of managing mixed teams, and the risk of doing it wrong, slows them down. Without a dedicated
        compliance expert, keeping up with every regulatory update, tax rule, and worker classification test is
        nearly impossible. The result is wasted hours, recurring anxiety, and real financial risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automated payroll&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;and worker
        classification software, like Deel, removes that burden. These tools track regulatory changes in real
        time, flag potential misclassification, automate tax filings, and generate audit-ready records. For
        South Florida small businesses, it means scaling teams without the constant fear of audits or penalties,
        and reclaiming the hours lost to manual admin. The cost of a mistake here is high; the right workflow
        makes it almost impossible to fall behind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
