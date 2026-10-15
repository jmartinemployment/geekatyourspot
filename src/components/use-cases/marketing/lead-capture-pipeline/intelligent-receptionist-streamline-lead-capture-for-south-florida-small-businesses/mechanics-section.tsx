import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        An Intelligent Receptionist changes how small businesses in Miami-Dade, Broward, and West Palm Beach
        handle every call. Instead of the phone ringing out, voicemail stacking up, or staff toggling between
        urgent work and basic phone duty, this approach puts a 24/7, bilingual virtual front desk at the center
        of your lead capture pipeline. The system is designed around four phases that turn every inbound call
        into a qualified lead, a booked appointment, or a clear next action, all for less than the cost of a
        single day’s staff time.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, you define the business objective. This is not a vague hope for &#39;better service.&#39; It is a
        concrete metric: maybe it is &#39;no more than two missed calls a week,&#39; &#39;every lead gets a
        response in under five minutes,&#39; or &#39;no more manual calendar work.&#39; The process starts by
        pinpointing where lost calls or missed connections are costing you actual revenue and reputation. The
        team at Geek @ Your Spot works with you to identify these friction points and set measurable KPIs, so
        you know what success looks like before you start.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;assessment. It is not enough to install an AI receptionist and hope for the
        best. Your contact lists, FAQs, service hours, price lists, and booking policies must be accurate, up to
        date, and complete. If this data lives in five different places, or if
        the&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;is
        missing key fields, the AI cannot answer questions or book appointments with confidence. This phase
        means pulling your real business data, what you actually offer, not just what is on the website, into a
        clean, validated format. Tools
        like&nbsp;<Link id="use-cases-marketing-intelligent-receptionist-mechanics-nextiva" href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva" className="text-[#0B162A] hover:underline">Nextiva</Link>&nbsp;and&nbsp;<Link id="use-cases-marketing-intelligent-receptionist-mechanics-my-ai-front-desk" href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk" className="text-[#0B162A] hover:underline">My
        AI Front Desk</Link>&nbsp;require this groundwork; they cannot route or book properly if the data is
        scattered or stale.</p>
      <p className="text-md text-white shadow-text pt-3">
        Now you select the right technology and build the architecture. This is where the partner tools do the
        heavy lifting. My AI Front Desk covers the basics for solo operators and small teams who miss calls
        while out in the field or with customers. It answers calls in natural language, books appointments, and
        logs every call to your system, no more black-hole voicemails. Nextiva excels when your business handles
        calls, texts, and web chats across different numbers or channels: it pulls all those conversations into
        a single dashboard, so nothing falls through the cracks and your staff can finally stop juggling
        disconnected
        apps.&nbsp;<Link id="use-cases-marketing-intelligent-receptionist-mechanics-voksha" href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha" className="text-[#0B162A] hover:underline">Voksha</Link>&nbsp;is
        the go-to when you need predictable, low-cost coverage that does not lock you into long contracts or
        charge by the minute. Its core focus is call answering, appointment setting, and lead logging, making it
        a fit for small teams who do not want enterprise complexity or surprise bills.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="use-cases-marketing-intelligent-receptionist-mechanics-smith-ai" href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith" className="text-[#0B162A] hover:underline">Smith.ai</Link>&nbsp;is
        built for those scenarios where missing a call means losing a five-figure client or a high-stakes
        opportunity, think law firms or urgent service providers. It pairs a fast, AI-first front end with a
        network of real human receptionists who step in for complex, sensitive, or high-value calls. This hybrid
        model ensures that when the AI cannot resolve the call, a live expert picks up with all the context, so
        the caller never has to start
        over.&nbsp;<Link id="use-cases-marketing-intelligent-receptionist-mechanics-lobbystack" href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack" className="text-[#0B162A] hover:underline">LobbyStack</Link>&nbsp;is
        the right choice when you want control over your data, your infrastructure, and your call logic. It is
        open source, so you can self-host, customize every workflow, and avoid vendor lock-in. For regulated
        businesses or those with strict data requirements, this is how you keep full ownership and privacy
        without giving up automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last phase is the pilot implementation. Here, you do not roll the system out to every line and hope
        for the best. Instead, you launch a pilot, maybe just after-hours calls, or calls to a single
        department. You run smoke tests, validate that calls are being answered, that leads are being booked,
        and that the right data lands in
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>.
        Adjustments happen quickly: if callers are asking questions the AI cannot answer, you add those to the
        knowledge base; if staff are missing appointment notifications, you tweak the workflow. Only when the
        system proves itself on real calls do you scale it up to cover all inbound traffic.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not a plug-and-play install. It is a sequence of aligning business goals, cleaning data, picking
        the right technical fit, and running a controlled rollout with rapid iteration. Each partner tool, My AI
        Front Desk, Nextiva, Voksha, Smith.ai, and LobbyStack, fits a specific type of business and a specific
        set of pain points, from solo operators to high-value consultancies to privacy-conscious agencies. The
        result is a lead capture pipeline that does not leak, a front desk that never sleeps, and a cost model
        that fits what small businesses can actually afford.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-the-intelligent-receptionist-approach-works-step-by-step-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How the Intelligent Receptionist Approach Works: Step by Step, for Small Teams
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-the-intelligent-receptionist-approach-works-step-by-step-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How the Intelligent Receptionist Approach Works: Step by Step, for Small Teams
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
