import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In small business offices across West Palm Beach, Broward, and Miami-Dade counties, accounting teams
        often find themselves bogged down by tedious manual approval processes. Picture this: a small team,
        already stretched thin, spends hours each week chasing down managers for signatures on purchase orders
        and vendor bills. Errors slip through unnoticed, invoices pile up, and the backlog becomes a mountain
        rather than a molehill. This not only delays payments but also strains relationships with suppliers
        and disrupts cash flow, creating a cycle that hinders growth and efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated approval workflows offer a lifeline. By shifting from manual to automated systems,
        businesses can streamline their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;process, ensuring accuracy
        and speed. With solutions like ApprovalMax, approvals are no longer a bottleneck. Instead, they become
        an integrated part of a seamless operation. Automated systems handle multi-step approvals, match
        purchase orders with invoices, and ensure compliance with internal controls, all while reducing the
        likelihood of human error. This shift not only saves time but also reduces operational costs and
        enhances supplier relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small enterprises looking to leverage&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>, adopting automated approval workflows can transform how
        they manage accounts payable. It allows business owners to focus on what truly matters: growing their
        business. By delegating routine approval tasks to an automated solution, teams can redirect their
        efforts towards strategic initiatives, driving innovation and efficiency. As illustrated by Paddle
        Australia&#39;s experience, using ApprovalMax can reduce errors by 80% and free up significant time
        for more value-added activities, setting a precedent for small businesses aiming to scale
        efficiently.</p>
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
