import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture your accounts team buried under stacks of paper receipts, emailed PDFs, and endless
        spreadsheets. This isn&#39;t just inconvenient; it&#39;s a breeding ground for human error and
        inefficiency. The constant need to manually enter data not only increases the chances of mistakes but
        also consumes valuable hours that could be spent on strategic activities. Limited real-time
        visibility into financial data further complicates decision-making, leaving businesses reactive
        rather than proactive.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where Dext comes into play. By automating data entry and processing, Dext transforms mundane
        bookkeeping tasks into streamlined operations. It captures and processes documents with over 99%
        accuracy, reducing manual handling and improving consistency. With Dext, discrepancies are flagged
        early, allowing for quick corrections before they escalate into costly problems. This approach not
        only saves time but also enhances the quality of your financial data, giving your team the freedom to
        focus on advisory and strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dext&#39;s <GlossaryLink slug="ai">AI</GlossaryLink>-powered tools provide real-time visibility and
        insights, enabling businesses to stay ahead in a competitive landscape. By integrating automation
        into your <GlossaryLink slug="accounts-payable">accounting</GlossaryLink> workflows, you can scale
        efficiency without losing the human touch essential for professional judgment and compliance control.
        For small and medium-sized businesses looking to implement AI, Dext offers a practical, affordable
        solution that aligns with your unique way of working, ensuring that automation enhances rather than
        replaces your expertise.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ready to turn your accounting challenges into opportunities for growth?&nbsp;
        <Link id="tools-accounting-dext-overview-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book a consultation
        </Link>&nbsp;with <strong>Geek At Your Spot</strong> today and discover how Dext can revolutionize
        your bookkeeping processes.</p>
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
