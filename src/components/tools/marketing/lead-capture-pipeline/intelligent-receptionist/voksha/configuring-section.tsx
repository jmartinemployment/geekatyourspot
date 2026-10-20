import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Voksha is built for small businesses that need their phones answered right, every time, without a maze
        of settings or a six-week rollout. The core of what gets configured in Voksha is its call handling
        logic: the rules that decide how calls are answered, what questions are asked, and what happens next.
        This is not a generic voice menu builder or a blank slate that expects you to write logic trees. Voksha
        uses a scripting interface in plain language. You describe what to ask, in what order, and Voksha
        follows that script on every call. There is no code to write and no developer needed. If you want to
        change a qualifying question or add a new step to your intake, you change it in the dashboard and the
        new flow goes live immediately.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a real estate agent, Voksha comes with a qualification flow already set up: pre-approval status,
        budget, timeline, whether the caller is already working with another agent, and which property they are
        calling about. You can use these out of the box or tweak them for your market. If you run a salon, the
        script covers hours, pricing, parking, and service menus. For HVAC, you set up questions about property
        address, equipment type, system age, and the specific problem, so your techs roll out with the right
        prep. These flows are not locked at launch. As you learn what information actually helps your team, you
        or your consultant can adjust the intake logic at any time. The changes are live for the very next call.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing logic is also configured at setup. On Premium, you can have Voksha book appointments directly
        into your Google, Outlook, or iCloud calendar. For urgent calls, you can set rules to escalate or notify
        a team member by SMS or email. Overflow and after-hours coverage are handled by simple rules: Voksha can
        take every call after your office closes, or only pick up when your team does not answer within a set
        number of rings. This means your front desk stays in control during business hours, and Voksha only
        steps in when needed. If you want Voksha to always answer first and triage, that is a configuration too.</p>
      <p className="text-md text-white shadow-text pt-3">
        Spam and robocall filtering runs automatically. Voksha screens out calls it detects as spam, and these
        do not count against your plan. You do not have to set up complex blocklists or rules for this, Voksha
        handles it in the background, so your staff only deals with real callers.</p>
      <p className="text-md text-white shadow-text pt-3">
        There is no open&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or developer SDK in Voksha’s
        published documentation. The extension mechanism is configuration: you control what happens on each call
        by describing the flow in the dashboard, not by writing code or integrating custom logic. Where
        integrations exist, such as with Dentrix for dental practices, setup is handled through Voksha support
        rather than a public&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. For most small businesses, this
        is a strength: there is little risk of breaking the system with a bad script or a failed integration.
        Configuration changes are self-serve, fast, and reversible.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where Geek @ Your Spot LLC comes in for businesses in Miami-Dade, Broward, and West Palm Beach
        counties. Most teams do not have the time or patience to map out intake flows, test escalation rules,
        and make sure the right alerts go to the right person. Geek @ Your Spot LLC handles the initial
        configuration, mapping your real-world workflow into Voksha’s scripting interface. They work with your
        team to define what counts as a qualified lead, what questions matter for your industry, and how to
        route calls that need a human touch. They also train your staff on how to adjust flows as your business
        changes, so you are not locked into the day-one setup. When something needs to change, you can do it
        yourself, or call Geek @ Your Spot LLC to handle it. This is not a set-it-and-forget-it project; it is a
        living system that adapts as your business grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, a local HVAC business might start with a standard set of intake questions and, after a
        month, realize that asking about thermostat brand saves a truck roll on 10% of jobs. Geek @ Your Spot LLC
        updates the script, tests the new flow, and rolls it out, no code, no downtime. For a dental practice,
        the initial configuration might focus on new patient bookings and insurance questions, with later
        adjustments as the team sees where callers get stuck or drop off. Every change is tracked and
        reversible, so there is no risk in iterating toward the flow that works best for your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s setup is not about building a custom app or wiring up
        an&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. It is about configuring the right questions,
        routing, and escalation rules so your Intelligent Receptionist fits your business, not the other way
        around. Geek @ Your Spot LLC’s role is to get those rules right from the start, so your team stops missing
        leads and starts seeing the real benefit of always-on, AI-powered call handling.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-voksha-rules-logic-and-how-geek-your-spot-makes-it-work-locally" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Voksha: Rules, Logic, and How Geek @ Your Spot LLC Makes It Work Locally
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-voksha-rules-logic-and-how-geek-your-spot-makes-it-work-locally" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Voksha: Rules, Logic, and How Geek @ Your Spot LLC Makes It Work Locally
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
