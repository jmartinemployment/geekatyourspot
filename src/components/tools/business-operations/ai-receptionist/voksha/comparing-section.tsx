
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach counties are usually comparing Voksha
        against two types of solutions: traditional human-powered virtual receptionist services and a new wave
        of AI-driven platforms. Each approach comes with its own trade-offs in cost, reliability, and fit for
        the way a local service business actually runs day to day.</p>
      <p className="text-base text-white shadow-text pt-3">
        Traditional virtual receptionist services rely on remote human operators who answer calls, follow
        scripts, and may handle appointment booking. The pitch is a personalized touch and a live voice, but the
        reality for most small businesses is a steep price tag and limited coverage. Pricing is usually tied to
        minutes on the phone, not the number of calls, so a five-minute chat about directions costs more than a
        thirty-second message. Bills fluctuate with call length, and after-hours coverage is an added expense.
        In practice, these services often lock you into a contract with a high monthly minimum, even if your
        call volume is unpredictable or seasonal. If you have a slow month, you still pay the base fee. If your
        calls spike, you pay more, sometimes a lot more.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-first platforms like Voksha take a different approach. Voksha charges by the call, not by the minute,
        with a clear starting price: $14 per month for 15 calls, then $1 for each additional call. This means
        your bill is predictable and you are not penalized for longer conversations. There is no extra charge
        for after-hours or weekends, so you can cover every call without worrying about overtime. This model is
        designed for small businesses that cannot afford to overpay for unused minutes or get surprised by a
        spike in call length. The entry price is set so that even a solo owner or a team of two can justify it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where Voksha stands out is in how it handles the core tasks that matter to a small business. It answers
        every call on the first ring, greets the caller with your business name, and follows your set script. If
        the caller is asking for an appointment, Voksha can book it directly into your calendar (on Premium and
        up). If the caller needs information, Voksha answers common questions or routes the call as you specify.
        Spam and robocalls are filtered out and do not count against your plan. Every call ends with a summary
        sent by email or SMS, so your team never loses track of what happened.</p>
      <p className="text-base text-white shadow-text pt-3">
        The simplicity of Voksha’s interface is another point of separation. Unlike many enterprise tools that
        require IT help to adjust scripts or call flows, Voksha lets business owners make changes themselves in
        plain language. You can update what questions are asked, change how calls are routed, or adjust intake
        flows for different scenarios, all without needing to write code or wait on vendor support. This matters
        for small teams who cannot afford to wait days for a change, or who need to adapt quickly as their
        business shifts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to other AI receptionist platforms, Voksha’s per-call billing and lack of long-term contract
        commitments are the main practical advantages. Some competitors bill by the minute, which can add up
        quickly if callers need more help or if you get a rush of longer calls. Others require annual contracts
        or have higher minimums that do not make sense for a business with variable call volume. Voksha’s
        pay-as-you-go model lets you scale up and down as needed, so you do not have to overcommit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voksha is not trying to be an all-in-one customer engagement suite with every possible integration and
        feature. It is built to do three jobs: answer calls, book appointments, and log leads. That focus means
        fewer distractions, less training, and a faster setup. For businesses that need a straightforward,
        reliable way to catch every call and never lose a lead to voicemail, Voksha is a fit. For those who want
        a highly customized, multi-channel engagement platform or
        deep&nbsp;CRM&nbsp;integrations
        out of the box, another solution may be more suitable.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real-world difference shows up on a Friday afternoon when the owner is finishing up the week’s
        invoices and the phone rings three times in ten minutes. With a traditional service, those calls might
        get queued, answered late, or cost extra if they run long. With Voksha, each call is picked up
        instantly, handled according to your script, and logged for follow-up, no surprises on the bill, no
        missed leads, and no overtime charge for running late. That is the operational clarity small businesses
        need to stop losing ground to competitors who simply answer the phone.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-voksha-compares-to-traditional-receptionist-services-and-other-ai-platforms" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Voksha Compares to Traditional Receptionist Services and Other AI Platforms
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-voksha-compares-to-traditional-receptionist-services-and-other-ai-platforms-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Voksha Compares to Traditional Receptionist Services and Other AI Platforms
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
