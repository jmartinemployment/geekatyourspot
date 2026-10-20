import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a Thursday afternoon in your West Palm Beach office: the phones ring while your best technician
        is out on a job, your front desk is catching up on yesterday’s paperwork, and a high-value prospect is
        sent to voicemail, again. No one on your small team hears the call. By the time anyone notices the
        missed message, that caller is already booked with a competitor down the street. This isn’t just one
        lost sale; it is the start of a chain reaction. Every missed inquiry means lost revenue, wasted
        marketing spend, and a business owner who spends evenings returning calls instead of growing the
        company.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost goes beyond a single lost opportunity. Each call that slips through cracks in your&nbsp;<Link id="use-cases-marketing-intelligent-receptionist-lede-intelligent-lead-capture" href="/use-cases/marketing/intelligent-lead-capture-pipeline" className="text-[#C83803] hover:underline">lead capture pipeline</Link>&nbsp;hurts your reputation and tanks your conversion rates. Clients rarely leave voicemails,
        and most will not try you twice. Meanwhile, your team loses focus as they scramble to answer routine
        questions or switch tasks, breaking their concentration every time the line rings. This fractured
        attention is a silent tax on your productivity and turns your growth ceiling into a glass floor.</p>
      <p className="text-md text-white shadow-text pt-3">
        That is where an Intelligent Receptionist changes the math. Instead of leaking potential clients to
        voicemail, you get a tireless, round-the-clock virtual front desk that answers every call in English or
        Spanish, qualifies leads on the spot, books appointments straight to your calendar, and syncs the
        details into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. The cost? Less than what you pay for
        a day of staff time, with no overtime and no sick days. For small businesses in Miami-Dade, Broward, and
        Palm Beach, this means you finally stop losing business to missed connections or distracted teams, and
        you never have to wonder which calls could have been your next big win.</p>
      <p className="text-md text-white shadow-text pt-3">
        This page is for small business owners and operators in South Florida who are tired of watching
        marketing spend walk out the door every time a call goes unanswered. If your team is stretched thin,
        juggling walk-ins, paperwork, and fieldwork, you know the cost of a missed call is not just lost
        revenue, it is lost time, lost referrals, and lost momentum. Manual call handling is not built for the
        reality of small teams that cannot afford a full-time receptionist, let alone coverage after hours or on
        weekends. Every distraction pulls your staff away from the work that actually grows the business.</p>
      <p className="text-md text-white shadow-text pt-3">
        An Intelligent Receptionist closes this gap. Not a call tree or a message pad, but a virtual front desk
        that picks up the phone on the first ring, answers questions in natural language, screens out spam,
        qualifies prospects, and books real appointments, automated, but always on brand. The tools here are
        built for the scale and unpredictability of a local service business: handling dozens of calls at once,
        never letting a lead hit voicemail, and keeping your schedule full even when you are out in the field.
        No more lost weekends catching up on callbacks. No more paying for missed opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout this page, you will see what actually goes wrong in today’s lead capture pipelines, what it
        costs in time and revenue, and how a properly implemented Intelligent Receptionist, deployed with the
        right data, integrations, and processes, solves the problem at its root. We walk through the four-phase
        methodology Geek @ Your Spot uses for every AI project: clear business
        objectives,&nbsp;<GlossaryLink slug="data-quality">data quality</GlossaryLink>&nbsp;assessment,
        technology selection, and a pilot implementation designed for South Florida’s real operational
        constraints. This is not about buying another app. It is about building a lead capture workflow that
        never sleeps, never misses a call, and frees your team to focus on work that moves the needle.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-marketing-intelligent-receptionist-lede-blog" href="/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours" className="text-[#C83803] hover:underline">How Miami Small Businesses Can Stop Losing Leads After Hours</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-missed-calls-drain-your-pipeline-and-steal-your-focus" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Missed Calls Drain Your Pipeline and Steal Your Focus
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-missed-calls-drain-your-pipeline-and-steal-your-focus" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Missed Calls Drain Your Pipeline and Steal Your Focus
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
