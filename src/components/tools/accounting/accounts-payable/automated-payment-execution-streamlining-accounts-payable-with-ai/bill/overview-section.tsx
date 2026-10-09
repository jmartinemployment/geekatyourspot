import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In small businesses across West Palm Beach, Broward, and Miami-Dade counties, business owners often
        find themselves trapped in a cycle of manual payment processes. Their evenings are spent navigating
        through stacks of paper invoices, manually entering data into spreadsheets, and double-checking for
        errors. For many, this is a frustrating routine that not only consumes valuable time but also leaves
        room for costly mistakes. The risk of human error looms large, with each typo or missed entry
        potentially leading to financial discrepancies that could affect the business&#39;s bottom line.
        These tasks, repetitive and time-consuming, steal away precious hours that could be better spent on
        growth and customer engagement. The manual approach to managing payments, while familiar, is fraught
        with inefficiencies that stifle productivity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution offers a way out of this cycle, transforming how small businesses handle
        their <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>. By integrating&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven solutions into their financial processes, businesses
        can streamline payment approvals, reduce manual entry, and enhance accuracy. This shift not only
        minimizes errors but also accelerates the entire payment workflow, freeing up time for business owners
        to focus on strategic initiatives. With automated systems, payments can be scheduled and executed
        without the constant need for oversight, ensuring that bills are paid on time and cash flow remains
        uninterrupted. The transition to an automated system is more than just a technological upgrade;
        it&#39;s a strategic move that can lead to significant time savings and improved financial
        management.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses considering this shift, the benefits of Automated Payment Execution are clear.
        It eliminates the need for manual data entry, reduces the risk of errors, and provides real-time
        visibility into financial transactions. This transformation allows businesses to operate more
        efficiently and with greater confidence, knowing that their payment processes are both reliable and
        transparent. By embracing automation, small business owners in South Florida can not only streamline
        their operations but also position themselves for growth in a competitive market. The decision to
        move away from manual processes and towards automation is not just about keeping up with
        technological advancements; it&#39;s about reclaiming time and resources to drive the business
        forward.</p>
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
