import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        It is a Tuesday morning in Miami. The phone rings at a small plumbing company, once, twice, three times,
        before it drops to voicemail. The owner is out on a site visit, the office manager is processing last
        week’s invoices, and no one is free to answer. That caller, frustrated and in a hurry, dials the next
        number on their list. By the time the team checks messages that afternoon, the opportunity is gone. For
        many small businesses across West Palm Beach, Broward and Miami-Dade, this is not a rare event. Every
        missed call is a missed connection, and every missed connection leaves real money on the table.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain goes deeper than lost jobs. When phone lines sit unanswered or messages pile up, business
        owners face another hidden cost: fractured focus. Staff spend their best hours bouncing between urgent
        tasks, chasing callbacks, and trying to piece together what each caller needed. Voicemail and rigid
        phone trees offer little help. They cannot sort urgent from routine, capture the details that matter, or
        qualify leads while the customer is still interested. Worse, many off-the-shelf voice AI and answering
        services force you into their closed systems. You cannot change how they handle calls, adapt scripts to
        fit your business, or keep sensitive data where you want it. Each new customer means more vendor
        lock-in, less flexibility, and higher switching costs if your needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        An&nbsp;<Link id={`tools-marketing-intelligent-receptionist-lobbystack-overview-intelligent-receptionist${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-receptionist" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Receptionist</Link>&nbsp;changes the equation. Instead of letting leads slip away or tying your hands
        with a generic script, it gives small businesses full control over how calls are answered, how
        information is gathered, and how every opportunity is handled. You decide what happens when a customer
        needs urgent help, wants to book an appointment, or just has a simple question. You can update answers,
        change greetings, and set routing rules without waiting on a vendor’s timeline. And when you choose an
        open, self-hosted platform, you keep your call data, caller history, and business logic in your own
        hands, no black box, no surprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        This approach is built for local businesses who feel the cost of every lost connection. It is for owners
        who want to capture every lead, protect their data, and run their front desk on their own terms. With
        the right Intelligent Receptionist, you can recover revenue that used to walk away, automate routine
        intake, and free up your team to focus on what matters. For South Florida’s small businesses, that is
        the difference between watching opportunities vanish and building a system that works, every hour, every
        day.</p>
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
