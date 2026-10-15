import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A successful Intelligent Receptionist implementation is not just about buying the right software or
        forwarding your business number to a new service. The difference between a pipeline that quietly powers
        growth and one that fizzles after a few weeks comes down to discipline in execution and a willingness to
        treat the project as a process, not a purchase. Small businesses in South Florida see this most clearly
        when they try to fix missed calls with a quick tech install, only to find the same problems, lost leads,
        staff confusion, and customer complaints, cropping up a month later.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first risk is skipping the business objectives alignment. Teams eager to end the pain of missed
        calls often rush to deploy an AI receptionist but never define what counts as a win. Without clear
        goals, like &#39;zero voicemails after hours,&#39; or &#39;every call logged to
        the&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;within
        five minutes&#39;, there is nothing to measure against. The rollout becomes a fog of anecdotes: one
        person says it is working, another says they missed a call, but nobody can point to real numbers. A
        strong implementation ties every technical step to a business metric, so you know right away if things
        are improving, or not.</p>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">Data
        quality</GlossaryLink>&nbsp;is the next choke point. Many businesses have service menus, pricing, team
        rosters, and schedules scattered across Google Docs, email threads, and half-filled spreadsheets. When
        the AI tries to answer a question or book an appointment, it hits a dead end or gives the wrong answer.
        This is where Voksha succeeds for small teams: it only asks for the basics, your main services, your
        calendar, and your core FAQs, so you are not paralyzed by configuration. My AI Front Desk and Nextiva,
        meanwhile, need accurate, up-to-date data to route calls, confirm appointments, and sync with
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. If you
        skip this cleanup, you get frustrated callers and staff who still have to fix details by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another common stall is choosing a tool that does not fit the operational reality. Some teams want full
        control and low cost, but buy a platform with features they never use and a contract they cannot exit.
        Others pick the cheapest option, only to find it cannot escalate urgent calls or log details where they
        actually need them. LobbyStack stands out for teams that want to own their infrastructure and customize
        every rule, but it is not for businesses that want a hands-off, managed service. Smith.ai works best for
        firms where missing one high-value call is unacceptable, its hybrid model means a real human can step in
        when needed, but that makes sense only if your intake process is complex or your callers are often in
        crisis.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rollouts also fail when businesses treat setup as a one-time event. An Intelligent Receptionist is not
        &#39;set and forget.&#39; It needs weekly review of call logs, updates to scripts as your business
        changes, and regular checks that leads are being qualified and scheduled. Nextiva, for example, can
        handle calls, chats, and texts all in one, but if you never check the dashboard or update your
        workflows, leads will still slip through. My AI Front Desk logs every call and outcome, but if nobody
        looks at
        the&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or
        follows up, opportunities are wasted. The businesses that see lasting results are the ones that assign
        ownership, one person is responsible for reviewing performance and making sure the system stays in sync
        with reality.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, a rollout stalls when the process ignores the people who use it. If your front desk or field
        team is not involved in testing, they will find workarounds or revert to old habits. A strong deployment
        brings staff into the pilot: they review transcripts, flag missing answers, and help refine the flows.
        When the system is tuned on real use, not just a vendor demo or a checklist, the team trusts it, and the
        hand-offs between AI and human go smoothly.</p>
      <p className="text-md text-white shadow-text pt-3">
        What separates a rollout that sticks from one that fails is not the sophistication of the AI or the size
        of your budget. It is a clear business goal, honest data, a tool that fits your real needs, ongoing
        attention to tuning, and buy-in from the people whose work will change. When you get these right, the
        Intelligent Receptionist becomes the always-on front desk your business needed all along. When you skip
        them, you end up right back where you started, except now you are paying for software on top of it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-intelligent-receptionist-rollouts-succeed-and-others-stall-out" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Intelligent Receptionist Rollouts Succeed, and Others Stall Out
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-some-intelligent-receptionist-rollouts-succeed-and-others-stall-out" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Some Intelligent Receptionist Rollouts Succeed, and Others Stall Out
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
