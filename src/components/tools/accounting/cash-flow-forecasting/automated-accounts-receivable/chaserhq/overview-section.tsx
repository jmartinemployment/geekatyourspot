export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners across Miami-Dade, Broward, and West Palm Beach find themselves
        entangled in the tedious web of manual accounts receivable management. Whether it&#39;s the relentless
        chase of overdue invoices or the constant juggling of payment timelines, these tasks consume valuable
        hours that could be better spent on growth and innovation. The pressure mounts as cash flow becomes
        unpredictable, leading to stress and potential financial instability. For many, this scenario is all too
        familiar—an ongoing cycle that seems impossible to break.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Accounts Receivable systems offer a way out. By leveraging advanced tools like Chaser,
        businesses can streamline their processes, reduce manual workloads, and enhance cash flow predictability.
        This technology categorizes receivables into actionable segments, such as promised, disputed, and at-risk
        cash, helping teams prioritize tasks and address potential issues before they escalate. Such systems not
        only increase efficiency but also provide a clear, forward-looking view of expected payments, enabling
        businesses to plan with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        For local businesses aiming to thrive in a competitive market, adopting automated solutions is no longer
        a luxury—it&#39;s a necessity. The real-time insights and automated workflows these tools provide allow
        businesses to transform their accounts receivable processes. By reducing reliance on static reports and
        gut feelings, companies can make informed decisions that protect revenue and promote growth. With the
        right technology, the burden of manual receivables management becomes a thing of the past, paving the
        way for a more stable and prosperous future.</p>
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
