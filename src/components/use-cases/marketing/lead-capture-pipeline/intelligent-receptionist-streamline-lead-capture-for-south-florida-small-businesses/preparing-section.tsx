import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        If you are considering an Intelligent Receptionist, the next move is to map your own bottlenecks and set
        a clear goal. Are you losing leads after hours, dropping calls while your team is busy, or struggling to
        keep call records and appointment calendars straight? Name the concrete pain point. This becomes your
        benchmark for what “working” looks like. The best deployments start with a simple pilot: forward your
        main line, set up basic intake flows, and watch what changes in the first week. Most small South Florida
        businesses can be live in under a day with tools like My AI Front Desk or Voksha, no new hardware, no
        phone number switch, and costs that are locked in before you start.</p>
      <p className="text-md text-white shadow-text pt-3">
        Expect the first days to be about tuning, not perfection. You will spot gaps in the initial call flow,
        realize which questions callers actually ask, and find the edge cases that need escalation. With
        Smith.ai, you can set the handoff rules so high-value or sensitive calls reach a human instantly, while
        routine intake is handled by the AI. This is not an all-or-nothing switch; you can phase in coverage,
        starting with after-hours or overflow, and keep the human front desk for the calls that matter most.
        Nextiva lets you unify calls, texts, and chat in one place, so you see every lead and conversation in a
        single dashboard, no more missed context or slow follow-up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data quality&nbsp;is the next hurdle. Every tool
        depends on clean, current information: your hours, pricing, service areas, and FAQs. If your website is
        outdated or your&nbsp;CRM&nbsp;is messy, fix that first.
        Integrations are only as good as the data they sync. LobbyStack is for the teams who want to own every
        detail, self-hosting, direct&nbsp;API&nbsp;connections, custom
        workflows. Here, expect a longer ramp-up, but total control over how calls are handled and data is
        stored.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once live, monitor the real outcomes. Are more leads booked? Are call summaries accurate and useful?
        Does your team actually spend less time on the phone and more time on work that matters? The answer
        should show up in your calendar, your&nbsp;CRM, and your team’s
        workload. With My AI Front Desk, you will see every call logged and every booking tracked, no more
        guessing what happened after a missed call. With Voksha, your bill matches your call volume, with no
        surprise overages and no contract lock-in. With Smith.ai, the calls that used to fall through the cracks
        during busy or sensitive moments now get answered by a professional, not a machine that guesses.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real test is not whether the system runs without errors, it is whether your business captures more
        opportunities, loses fewer leads, and spends less on manual labor or missed revenue. You should expect a
        learning curve, some initial handholding, and a few configuration tweaks. But by the end of the first
        month, you should have a clear answer: Is the phone no longer a bottleneck? Is every lead captured,
        qualified, and booked without you chasing callbacks? That is the outcome a real Intelligent Receptionist
        delivers when it is set up, integrated, and owned by a team that knows what it wants out of the tool.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`use-cases-marketing-intelligent-receptionist-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How many phone calls do you currently miss or send to voicemail each week, both during business hours and after hours?</li>
        <li>When a prospect hangs up without leaving a voicemail, what is your current process for recapturing that lead?</li>
        <li>Do you experience sudden spikes in call volume (e.g., seasonal demands, ad campaigns) that temporarily overwhelm your current staff?</li>
        <li>What is the exact sequence of events that needs to happen when a new client calls to book an appointment or request a service?</li>
        <li>Which calendar or scheduling platform do you use, and do you require the AI to write appointments directly to it?</li>
        <li>What percentage of your inbound calls are just repetitive questions regarding your location, operating hours, pricing tier, or basic services?</li>
        <li>What Customer Relationship Management (CRM), billing, or field service management software does your business rely on daily?</li>
        <li>Are you looking to unify your voice calls with other communication channels, like SMS text messaging and website live chat, into one master dashboard?</li>
        <li>Does your business require automated text-backs during a call to send digital intake forms, payment links, or address locations?</li>
        <li>What is your target market&#39;s tolerance for interacting with automated voices? Do you cater to an elite or older demographic that demands a human touch?</li>
        <li>Are there strict industry compliance guardrails (like <GlossaryLink slug="hipaa">HIPAA</GlossaryLink> for medical offices or trust account rules for lawyers) governing how client information is gathered?</li>
        <li>What specific criteria or emergency situations should trigger the AI to instantly transfer a live caller to your personal cell phone or an on-call team member?</li>
        <li>Do you prefer a predictable, fixed monthly software bill, or are you comfortable with a variable pay-per-minute or pay-per-call model as your business grows?</li>
        <li>How critical is total data ownership to your business? Do you prefer a turnkey cloud subscription, or do you want a proprietary system that your business fully owns and controls?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-to-do-next-and-what-to-expect-from-a-real-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next and What to Expect from a Real Deployment
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
              <h2 id="what-to-do-next-and-what-to-expect-from-a-real-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next and What to Expect from a Real Deployment
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
