import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the quiet of a small office in Miami-Dade, the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;team is bogged down by a
        mountain of invoices. Each document requires manual entry, approval, and payment, consuming valuable
        hours that could be spent on more strategic tasks. Errors creep in, delays are inevitable, and the
        stress mounts as the team races against the clock to meet payment deadlines. This is a daily reality
        for many small businesses, where every minute spent on administrative tasks is a minute not spent on
        growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution can change this picture entirely. By leveraging&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven solutions like&nbsp;
        <a id="tools-accounting-payment-execution-ramp-overview-bill-pay"
          href="https://ramp.com/blog/announcing-ramp-bill-pay"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Ramp Bill Pay
        </a>, businesses can transform their accounts payable processes into efficient, error-free operations.
        Imagine a system where invoices are automatically coded and matched to purchase orders, where payments
        are scheduled and executed without manual intervention. This isn&#39;t just a time-saver—it&#39;s a
        game-changer, freeing up your team to focus on what truly matters: driving your business forward.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward, and Miami-Dade, the benefits are clear. Automated
        systems reduce the risk of human error, enhance fraud detection, and provide real-time visibility into
        financial operations. With the integration of automated payment workflows, you can ensure compliance,
        streamline approvals, and maintain control over your financial data. As a result, you not only save
        time and reduce costs but also enhance your overall business agility.</p>
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
