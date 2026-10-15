export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The Intelligent Receptionist model is a strong fit for small businesses in Miami-Dade, Broward, and West
        Palm Beach that are losing leads to missed calls, cannot justify a full-time front desk, and want to
        automate the routine without losing control over the client experience. If your team is missing calls
        because they’re in the field or focused on clients, or if you are still sending prospects to voicemail
        and hoping they call back, this approach solves a concrete revenue leak. The model is built for owners
        who want every call answered, every lead logged, and every appointment booked, without hiring more staff
        or signing up for unpredictable answering-service bills.</p>
      <p className="text-md text-white shadow-text pt-3">
        It is not always the right answer, though. If your business depends on complex, high-empathy
        conversations with every caller, think high-stakes legal intake or emergency medical triage, an all-AI
        receptionist is not enough on its own. Smith.ai is designed for exactly these situations, blending AI
        screening with a live network of over 500 North American receptionists. When a call demands nuance or
        empathy, the AI hands it off with full context, so no detail is lost and the caller never has to repeat
        themselves. This hybrid model is the safety net that pure automation cannot offer when the cost of a
        mistake is measured in thousands of dollars or in real-world outcomes.</p>
      <p className="text-md text-white shadow-text pt-3">
        For micro-teams and solo operators, My AI Front Desk is built to stop revenue from leaking out the phone
        line while you are busy on jobs or with clients. Its 24/7 virtual front desk answers in natural
        language, books appointments straight to your calendar, and logs every call, no more black-hole
        voicemail or missed authorizations. Every lead is captured, and every routine call is handled before it
        can become a distraction. If you are losing deals simply because you cannot get to the phone, this is
        the tool that closes the loop.</p>
      <p className="text-md text-white shadow-text pt-3">
        For owners tired of paying for features they never use, or for those who have been burned by
        unpredictable minute-based billing, Voksha offers a stripped-down, budget-focused option. It locks in
        costs with per-call pricing, skips the enterprise bells and whistles, and filters out spam and robocalls
        before they reach your team. If your priority is predictable spend and you just need every call answered
        and basic logging, this is a match. But if you need deep integrations or advanced routing, the
        simplicity may become a limitation as you grow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva addresses a different pain: disconnected communication channels. If your team is juggling
        separate apps for calls, texts, and chat, or if you are losing context because nothing syncs, Nextiva
        brings it all together. Calls, SMS, and web chat are unified on one platform, with agent profiles and
        multi-language support ready in under a minute. For small businesses struggling with tool sprawl and
        slow response, this is the fix that ties every channel into a single workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        For technical teams or regulated businesses that need total control over their data or want to avoid
        vendor lock-in, LobbyStack stands out. It is open source, runs on your own servers if you want, and lets
        you customize every prompt and workflow. You can run it in the cloud for speed or self-host for
        compliance and control. If you need to audit every decision the system makes, or if you want to avoid
        being locked into pricing that grows unpredictably, this is the only tool in the group that puts you in
        the driver’s seat.</p>
      <p className="text-md text-white shadow-text pt-3">
        This approach is not for companies who want to outsource empathy, or for those who expect AI to handle
        every possible scenario without oversight. It is also not a fit if you need a receptionist who can make
        judgment calls in ambiguous, sensitive, or regulatory-heavy conversations, those still need a human. But
        for the majority of small operations, where the risk is in missed calls, distracted teams, or routine
        work that burns out your best people, an Intelligent Receptionist is the lever that lets you scale
        without hiring or losing sleep over what business you missed while you were actually working.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-an-intelligent-receptionist-is-the-right-fit-and-when-it-isn-t" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When an Intelligent Receptionist Is the Right Fit, and When It Isn’t
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
              <h2 id="when-an-intelligent-receptionist-is-the-right-fit-and-when-it-isn-t" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When an Intelligent Receptionist Is the Right Fit, and When It Isn’t
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
