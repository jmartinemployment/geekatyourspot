
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai is built to make the pain points of manual and rigid automated reception a thing of the past.
        It does not just answer calls, it transforms the way your business captures, qualifies, and converts
        every inquiry, no matter when or how it comes in. For a small team, this means the end of dropped calls,
        missed details, and hours lost to repetitive intake work. Smith.ai’s hybrid approach is what sets it
        apart: advanced AI handles routine screening and intake at speed and scale, while over 500 trained,
        North America–based human agents step in the moment a call requires real judgment, empathy, or
        escalation.</p>
      <p className="text-md text-white shadow-text pt-3">
        This model is not theoretical. It is the product of over a decade and 25 million calls of operational
        learning. Smith.ai’s system adapts to your business, using custom call flows that match your actual
        intake needs, whether that is qualifying leads for a law firm, booking urgent appointments for a
        plumber, or handling multi-step intake for a marketing agency. AI captures the basics quickly, but when
        a caller is upset, confused, or facing a high-stakes decision, a live agent is there instantly. The
        caller never has to repeat themselves, because the agent picks up with full context from the AI’s
        intake. This seamless handoff is the key difference: it means no lost opportunities and no awkward
        transitions that frustrate clients.</p>
      <blockquote cite="https://smith.ai/industries/home-services-answering-service" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Smith.ai provides AI receptionists and live virtual receptionists that answer, qualify, and route your
        calls 24/7, tailored to the needs of HVAC, plumbing, electrical, and contracting businesses.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai’s approach directly removes the invisible costs that drag down small businesses. Every call is
        answered 24/7, nights, weekends, holidays, so you never lose a lead to voicemail or a missed ring. The
        system does more than just take a message: it screens each caller based on your criteria, collects
        structured intake details that feed directly into your&nbsp;CRM,
        and books appointments live, without follow-up or phone tag. For the plumber from earlier, that means no
        more scrambling to return missed calls at the end of the day. For the office manager, it means fewer
        interruptions and no more double entry of intake forms. For the owner, it means a pipeline that is
        always full and a calendar that stays organized without manual chasing.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is measurable. In a published case, Convert It Marketing added Smith.ai to their process and
        saw their clients’ answer rates jump from 45% to virtually 100%. That is not just a few more calls
        picked up, it is a 122% improvement in captured leads that would have been lost otherwise.
        DiscoverMyBusiness, another client, saw booking rates climb by 10% on average after deploying Smith.ai.
        These are not hypothetical gains. They are the difference between a business treading water and one that
        grows month after month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smith.ai does not just stop at the call, either. It integrates with more than 7,000 business tools,
        CRMs, field service management, project management, scheduling platforms, and more. This deep
        integration means that every detail from a call, chat, or intake form lands exactly where your team
        needs it, without manual reentry or risk of error. The system automatically logs conversations, updates
        customer records, and triggers follow-up actions based on your workflow. For a team that already runs on
        tight margins, this removes hours of busywork each week and eliminates the risk of details slipping
        through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Spam and robocalls are filtered out before they ever reach your team, so you only pay for real business
        conversations. Bilingual fluency in English and Spanish comes standard, opening your business to a
        broader client base without hiring extra staff. Custom scripts and call flows mean that the intake
        process fits your brand and your needs, not a generic template. For urgent or emergency calls,
        Smith.ai’s routing logic ensures the right person is reached immediately, protecting both revenue and
        reputation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The bottom line is time and focus returned to your business. Smith.ai replaces the stress of chasing
        calls and cleaning up after missed connections with a system that quietly, reliably handles every
        interaction. Your team spends less time on intake and more time on the work that matters, serving
        clients, delivering projects, and growing the business. In practice, Smith.ai becomes the always-on
        front desk that never takes a break, never loses a detail, and never lets a qualified lead slip away.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-smith-ai-actually-does-for-your-intelligent-receptionist-problem" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Smith.ai Actually Does for Your Intelligent Receptionist Problem
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-smith-ai-actually-does-for-your-intelligent-receptionist-problem-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Smith.ai Actually Does for Your Intelligent Receptionist Problem
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
