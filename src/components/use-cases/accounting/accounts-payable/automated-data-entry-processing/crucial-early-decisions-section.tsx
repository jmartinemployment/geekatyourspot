import Link from "next/link";

export default function CrucialEarlyDecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When it comes to implementing automated data entry and processing in accounts payable, the decisions
        made at the outset are critical. These early choices can determine whether the system becomes a
        seamless part of your operations or a source of frustration. One key decision is selecting the right
        tools that align with your business needs.&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-decisions-dext"
          href="/tools/accounting/dext" className="text-[#0B162A] hover:underline">
          Dext
        </Link>&nbsp;is particularly effective for firms looking to streamline bookkeeping and improve
        workflow insight. Its AI-powered features help reduce manual handling and errors, making it a strong
        contender for businesses aiming to enhance their accounts payable processes. However, it&#39;s
        essential to ensure that any tool you choose integrates well with your existing systems to avoid
        additional complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another vital decision involves determining the scope of automation. Not every aspect of accounts
        payable needs to be automated, and over-automation can lead to rigidity that stifles flexibility.
        Tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-decisions-bill"
          href="/tools/accounting/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;offer customizable approval workflows, which can be tailored to suit varying business
        requirements, allowing for a balanced approach that maintains control while improving efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lastly, consider the human element. Automation is not about replacing your team but enhancing their
        capabilities. It&#39;s crucial to involve your staff in the decision-making process from the
        beginning. They can provide insights into day-to-day operations that may not be apparent at the
        management level. This involvement also ensures smoother adoption, as employees are more likely to
        embrace changes they helped shape.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, a successful implementation hinges on selecting the appropriate tools, defining the right
        level of automation, and engaging your team early on. These decisions, once made, are difficult to
        reverse and will lay the foundation for either long-term success or ongoing challenges.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="crucial-early-decisions-for-successful-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Crucial Early Decisions for Successful Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="crucial-early-decisions-for-successful-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Crucial Early Decisions for Successful Implementation
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
