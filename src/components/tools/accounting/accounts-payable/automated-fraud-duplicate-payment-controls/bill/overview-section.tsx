import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners across Miami-Dade, Broward, and West Palm Beach counties watch
        valuable hours slip away as their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;teams sift through piles of
        paper and digital invoices. Mistakes are bound to happen when manually entering data, leading to costly
        errors and even duplicate payments. For many, the risk of fraud also looms large, as traditional
        processes lack the robust controls needed to detect suspicious activity early. It&#39;s a familiar
        story: overworked staff, mounting frustration, and financial reports that never quite add up, all of
        which distract from the real business of serving customers and growing revenue.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where Automated Fraud &amp; Duplicate Payment Controls become crucial. By leveraging intelligent
        systems, businesses can automate the tedious task of invoice management, significantly reducing the
        chance of duplicates and fraudulent transactions. Solutions like those offered by&nbsp;
        <a id="tools-accounting-fraud-controls-bill-overview-bill"
          href="https://www.bill.com/product/accounts-payable"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          BILL
        </a>&nbsp;provide automated invoice matching and purchase order matching, flagging potential duplicates
        before payments go through. This not only saves time but also safeguards cash flow, ensuring that money
        isn&#39;t wasted on double payments or siphoned off through fraud.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, implementing such controls translates to more than just
        operational efficiency; it&#39;s a strategic move to protect and grow their enterprise. By automating
        checks and balances, businesses can focus on their core operations, confident that their accounts
        payable processes are secure and streamlined. This shift from manual to automated systems is not a
        luxury but a necessity in today&#39;s fast-paced business environment. With the right controls in
        place, small businesses can finally spend less time worrying about errors and more time on what truly
        matters: serving their customers and increasing their bottom line.</p>
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
