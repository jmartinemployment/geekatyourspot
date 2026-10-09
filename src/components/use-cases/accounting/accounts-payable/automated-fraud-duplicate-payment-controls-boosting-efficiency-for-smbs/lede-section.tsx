import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners in Miami-Dade, Broward, and West Palm Beach counties face the
        grueling task of managing <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>.
        Manual processes are rife with errors, duplicate payments, and the ever-present risk of fraud. These
        businesses often find themselves drowning in paperwork, struggling to verify invoices, and losing
        money to unnoticed duplicate charges. It&#39;s a constant battle against time and accuracy, one that
        drains resources and stalls growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter Automated Fraud &amp; Duplicate Payment Controls. By leveraging advanced&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;algorithms, these controls not only detect anomalies
        in real-time but also streamline the entire invoice verification process. Imagine a system that
        automatically flags suspicious invoices, matches purchase orders with receipts, and prevents
        unauthorized transactions before they even happen. This is not a distant dream but a practical
        solution that Geek @ Your Spot is bringing to local businesses.</p>
      <p className="text-md text-white shadow-text pt-3">
        The benefits are concrete: reduced financial losses, fewer manual errors, and a significant cut in
        processing time. Businesses can now focus on growth rather than firefighting administrative issues.
        With automation, the risk of fraud diminishes, compliance improves, and the tedious task of invoice
        management becomes a seamless operation. This page will walk you through how automated controls can
        redefine your accounts payable, offering peace of mind and allowing your team to redirect their
        efforts to what truly matters.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-accounts-payable-with-automated-controls" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Accounts Payable with Automated Controls
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-accounts-payable-with-automated-controls" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Accounts Payable with Automated Controls
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
