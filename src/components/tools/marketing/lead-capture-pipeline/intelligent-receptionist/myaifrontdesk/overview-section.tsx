import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The front desk phone rings three times in a row while your team is out on a job, locked in a patient
        consult, or catching up on overdue paperwork. Each call is a possible new client, a returning customer,
        or a referral ready to buy. But with no one available to pick up, those calls drop to voicemail, or
        worse, to silence. If you are running a small business in South Florida, this is not just an
        inconvenience. It is a direct hit to your sales, your reputation, and your sanity. Every missed inquiry
        is a lost chance to book a job, answer a question, or keep a customer from calling a competitor. For
        solo operators or micro-teams, every hour spent on repetitive admin is another hour not spent doing
        billable work, growing the business, or taking a well-earned break.</p>
      <p className="text-base text-white shadow-text pt-3">
        You already know that most callers will not leave a message. Instead, they move on, often to a company
        that answers the phone or replies to a web chat first. The cost is not just in missed revenue, but in
        the constant distraction and context switching. Your focus is fractured by routine questions,
        rescheduling requests, and basic directions, breaking your day into fragments and making it impossible
        to concentrate on the work that matters. The more you try to keep up, the more you risk dropping
        details, missing callbacks, or letting leads slip through the cracks. Traditional answering services are
        expensive and inconsistent, and hiring a full-time front desk is out of reach for most small businesses.
        The result: inbound lead leakage, after-hours bottlenecks, and a calendar that never quite fills up.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is where an&nbsp;<Link id={`tools-marketing-intelligent-receptionist-myaifrontdesk-overview-intelligent-receptionist${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-receptionist" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Receptionist</Link>&nbsp;changes the game. Unlike voicemail or a basic phone tree, an
        AI-powered receptionist answers every call instantly, holds a real conversation in plain language,
        qualifies the lead, books appointments on your calendar, and logs every detail to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. It keeps your business open 24/7, so you never
        lose another prospect to a missed ring or an after-hours inquiry. For small teams in Miami-Dade,
        Broward, and West Palm Beach counties, it means you stay responsive and professional without adding
        headcount or burning out. Smart chatbots keep your marketing campaigns running around the
        clock,&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;surfaces the prospects
        most likely to buy, and voice assistants handle routine questions so your team can focus on real work.
        The bottom line: more sales, fewer errors, and a business that feels twice as big without doubling your
        costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are tired of seeing good opportunities slip away because you are busy with the day-to-day, this
        is the solution that lets you keep every connection, and every dollar, without hiring another person.
        Geek @ Your Spot LLC helps small businesses in South Florida put intelligent, affordable automation in
        place, so you can finally give every lead the attention it deserves.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
