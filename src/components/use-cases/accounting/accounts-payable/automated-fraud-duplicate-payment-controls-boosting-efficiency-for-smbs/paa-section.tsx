export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is fraud detection, and how does it actually work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Fraud detection involves identifying suspicious activities that could indicate fraudulent
              behavior. It works by using AI algorithms to analyze data patterns and transactions. When these
              algorithms detect anomalies or irregular patterns, they flag them for further review. This
              process helps businesses in the Miami-Dade, Broward, and West Palm Beach areas to prevent
              financial losses by catching fraudulent activities early.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What specific anomalies trigger automated risk alerts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated risk alerts are triggered by anomalies such as duplicate invoices, mismatched vendor
              details, or unusual transaction amounts. These alerts can also be set off by transactions
              occurring outside of normal business hours or from unfamiliar locations. By identifying these
              red flags, businesses can take prompt action to investigate potential fraud.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when a fraud system triggers a high-risk flag?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              When a fraud system triggers a high-risk flag, the transaction is usually put on hold for
              further investigation. The accounts payable team is notified to review the flagged activity. If
              the transaction is deemed legitimate after review, it is processed as usual. If fraud is
              suspected, further actions are taken, which may include contacting the vendor or taking legal
              steps to protect the business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
