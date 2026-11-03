export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why do I need an automation tool like Helm if I already use QuickBooks Online or Xero?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Helm connects directly with QuickBooks Online, Xero, or Sage to pull your data in real time. It
              creates automated cash flow forecasts and accounts payable and receivable plans, so you do not
              have to enter numbers into spreadsheets by hand. QuickBooks and Xero show you what has happened.
              Helm shows you what is coming, turning your invoices and bills into clear cash flow projections so
              you can avoid running out of money.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does it take to set up? I don&#39;t have weeks to train my staff on a complex system.
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Helm is built for small businesses that cannot afford long training sessions or complex setup. The
              interface is simple and fast. You can connect your accounts and start seeing automated forecasts
              within minutes, not weeks.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can this help me manage my local bills and vendor payments without hurting my bank account?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Manual tracking of accounts payable often leads to missed deadlines, lost discounts, or surprise
              withdrawals that cause overdraft fees. Helm gives you a tool to build and adjust accounts payable
              schedules, so you can see how each payment date affects your bank balance. You can plan exactly
              when to pay local suppliers, helping you keep more cash on hand and avoid unexpected hits to your
              account.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How can I protect my cash flow if my own clients are slow to pay their invoices?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Late payments can cause serious cash flow problems. Helm tracks your invoices and lets you adjust
              payment timing, add notes, and see exactly how late payments will affect your cash position. This
              helps you plan ahead and avoid running short when clients pay late.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We want to expand our team and buy new equipment next year. How do we know if we can actually afford it?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Many small businesses make big purchases based on a temporary cash surplus, without considering
              seasonal changes or inflation. Helm gives you unlimited scenario planning, so you can test what
              would happen if you hire new staff or buy equipment. You will see the long-term impact on your
              cash flow before you commit, helping you make safer decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
