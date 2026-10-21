import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A plumber in West Palm Beach spends his morning juggling a full calendar, voicemails blinking on his
        phone, and a steady stream of new service requests coming in from the website. One urgent call slips
        through while he’s at a job site, another hangs up before leaving a message. By noon, three more calls
        are lost to voicemail limbo, and his office manager is buried in a backlog of half-completed intake
        forms. Each missed connection is invisible on the books, but the loss is real: in a single week, a
        handful of unanswered calls can cost thousands in projects that quietly go to competitors.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is the hidden cost of fractured focus and missed connections: every time a small business lets a
        call drop or a website chat go unanswered, the lost opportunity is more than a number, it is a job that
        never materializes, a client who never returns, or a referral that never gets made. The traditional
        front desk, stretched thin, can only do so much. Even with the best intentions, no one can be everywhere
        at once, especially across South Florida’s fast-moving service industries where timing and
        responsiveness decide who wins the work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The risk grows when you rely on pure automation. Many so-called&nbsp;<Link id={`tools-marketing-intelligent-receptionist-smith-overview-intelligent-receptionist${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-receptionist" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Intelligent Receptionist</Link>&nbsp;systems promise
        round-the-clock coverage but fall short in real-world situations. They drop the ball when a caller needs
        empathy, judgment, or fast escalation, missing the nuance in a distressed customer’s voice or failing to
        gather the right intake details for a high-value lead. Worse, a rigid automated script can pass along
        incomplete or even incorrect information, putting your reputation and revenue at risk. The result is the
        same: vital calls lost, client trust damaged, and staff left to clean up after software that cannot
        handle exceptions.</p>
      <p className="text-base text-white shadow-text pt-3">
        An Intelligent Receptionist changes the equation for small businesses in Miami-Dade, Broward, and Palm
        Beach by combining smart automation with real human backup. Instead of missed calls, every inquiry is
        captured, screened, and routed, whether it comes in by phone, website chat, or voice assistant. Your
        best prospects get a live, responsive experience, and you get accurate records, fewer errors, and time
        back to focus on the work that matters most. The cost of missed connections disappears, and your team
        delivers the kind of service that wins repeat business.</p>
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
