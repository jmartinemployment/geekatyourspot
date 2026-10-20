
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Businesses shopping for an Intelligent Receptionist land in a crowded market. The choices break into
        three main camps: fully manual reception, pure AI-only systems, and hybrid models like Smith.ai. Each
        comes with its own promises and tradeoffs, but the real-world results for small businesses in South
        Florida often look very different from the marketing claims.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual reception is the old way. A human picks up every call, answers questions, and routes messages. It
        works, until it doesn’t. No single person can cover 24/7, and even a small team burns out or drops calls
        when things get busy. Staff costs climb fast, and the moment someone steps away, the phone goes to
        voicemail. For the plumber in West Palm Beach or the law office in Miami, that means real money lost
        every week. Even with the best intentions, human-only setups break down under pressure, especially on
        weekends or after hours.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pure AI-only receptionists are the new promise. They claim to answer every call, never sleep, and cost
        far less than a person. But in practice, these systems struggle where it matters most, when a caller is
        upset, confused, or needs more than a script can handle. Automated voices can’t always catch the urgency
        in a customer’s tone, and rigid flows miss key intake details. When the AI hits a wall, the call is
        dropped or the information is incomplete. That’s how brand reputations are damaged and high-value leads
        slip away. For high-stakes calls, think emergency service, legal intake, or a client ready to spend,
        these gaps are expensive.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai does not fit either extreme. Its hybrid model blends AI speed with real human backup. The
        system handles routine screening and intake at scale, but the difference comes when a call gets
        complicated. If the AI can’t answer a question or senses frustration, Smith.ai escalates the call in
        real time to one of over 500 trained, North America-based receptionists. The handoff is seamless, with
        full context passed along so the caller never has to repeat themselves. This means no call is lost just
        because the script runs out or the situation requires empathy and judgment. Smith.ai’s approach is built
        on more than a decade and 25 million calls of operational learning, a depth most new entrants can’t
        match.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real advantage for small businesses comes in the way Smith.ai closes the gap between speed and
        quality. Unlike pure AI, Smith.ai is designed to optimize for conversion, not just cost savings. Every
        inbound call is treated as a chance to qualify a lead, capture intake details, and move the prospect
        toward a booked appointment. The system’s logic adapts by caller type, urgency, and your custom rules.
        For urgent jobs, like a gas leak or a last-minute legal consult, Smith.ai routes the call based on your
        escalation plan, not a generic script. For routine questions or standard bookings, the AI handles it
        instantly. This flexibility is what separates Smith.ai from both manual and AI-only competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another line of separation. Many answering apps operate as isolated silos, dumping call
        logs into email or making you re-enter data into
        your&nbsp;CRM.
        Smith.ai natively syncs with over 7,000 business systems, CRMs, field service software, scheduling
        tools, and more. That means every qualified lead, intake form, and appointment lands directly in your
        workflow, without double entry or manual cleanup. For businesses that already rely on platforms like
        Clio, MyCase, or Ninja Forms, Smith.ai plugs in without disrupting what works.</p>
      <p className="text-md text-white shadow-text pt-3">
        Competitors often tout per-minute pricing or AI-only plans, but the billing model hides the real cost.
        Per-minute plans penalize longer, more valuable calls, exactly the ones you want to encourage.
        Smith.ai’s per-call pricing is transparent and predictable, with no charges for spam or wrong numbers.
        Case studies show the impact: when one Miami-based agency switched to Smith.ai, their clients’ captured
        calls jumped from 45% to nearly 100%, and booking rates rose by 10%.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Smith.ai addresses the real weaknesses of both manual and pure AI reception. It never drops a
        call because the AI is stumped, and it never leaves the front desk empty when staff step away. For South
        Florida businesses that need every lead, want to protect their brand, and demand real integration with
        their existing tools, Smith.ai’s hybrid model stands apart. The result is not just more calls answered,
        but more business closed, and fewer headaches cleaning up after your technology.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-smith-ai-s-hybrid-model-stacks-up-against-pure-ai-and-manual-reception" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Smith.ai’s Hybrid Model Stacks Up Against Pure AI and Manual Reception
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
              <h2 id="how-smith-ai-s-hybrid-model-stacks-up-against-pure-ai-and-manual-reception-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Smith.ai’s Hybrid Model Stacks Up Against Pure AI and Manual Reception
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
