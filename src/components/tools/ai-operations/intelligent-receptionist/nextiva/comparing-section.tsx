import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida looking for an Intelligent Receptionist are not short on options. Many
        start by comparing Nextiva to traditional phone systems, basic call-forwarding services, and a growing
        list of AI-enabled platforms that promise to automate front-desk work. The choice is not just about
        features. It’s about what gets removed from the daily grind, how reliably leads are captured, and what
        kind of work still lands on your staff after the system is in place.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main alternative to Nextiva for most local teams is the patchwork setup: a business phone number on
        one carrier, a web chat plugin from another vendor, and a text-messaging app that sits on someone’s
        mobile device. This approach is cheap to start but creates silos. Calls, texts, and chats arrive in
        separate places, so staff have to check each one, often missing messages when things get busy. Nextiva,
        by contrast, brings all these channels into a single workspace. That means your team sees every
        conversation in one queue, with full history, and nothing gets lost when someone is out or distracted.
        This is not just a technical difference. It’s the difference between knowing at a glance who needs a
        follow-up and spending hours tracking down what happened last Tuesday.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some buyers also look at basic auto-attendants
        or&nbsp;<GlossaryLink slug="ivr" className="text-[#0B162A] hover:underline">IVR</GlossaryLink>&nbsp;menus.
        These systems route calls using keypad prompts, “Press 1 for sales, press 2 for support”, but do not
        understand what the caller wants in plain language. Nextiva’s AI receptionist engine listens to what
        people say, recognizes intent, and can handle multiple calls at once. This means it can answer
        questions, book appointments, and qualify leads without dropping the personal touch. Staff are not tied
        up with repetitive calls about hours or directions. Instead, they’re free to focus on in-person service
        or more complex customer issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are also competitors in the AI receptionist space that claim to offer similar automation. What
        sets Nextiva apart is its ability to train on your business details quickly, often in under five minutes
        by ingesting your website or Google Business Profile. Many other platforms require hours of manual
        setup, scripting, or technical support. With Nextiva, the onboarding is fast, and the system can be
        tested and refined before it goes live. This matters for a small team that cannot afford days of
        downtime or a steep learning curve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Cost is another area where Nextiva’s approach stands out. Instead of unpredictable per-minute billing or
        paying for several disconnected tools, Nextiva offers a flat monthly rate for its base plan, with clear
        overage pricing if you exceed your included interactions. For a small business, this makes budgeting
        easier and reduces the risk of surprise bills during busy seasons. The platform’s ability to handle
        dozens of calls, texts, and chats at once means you do not need to hire extra staff or pay for temporary
        help when call volume spikes. This scalability is not just theoretical, Nextiva’s own material describes
        cases where businesses handle 100 simultaneous calls without missing a beat.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where some platforms focus only on call handling,
        Nextiva’s&nbsp;omnichannel&nbsp;design
        means it can also manage web chats and SMS, with each interaction tied back to a unified customer
        record. This is essential for lead capture pipelines, where a conversation may start on chat, continue
        via text, and close with a phone call. The full context follows the customer, so your team never has to
        ask for the same details twice. This continuity also improves follow-up, as Nextiva can send automatic
        appointment confirmations and reminders by text, reducing no-shows and keeping your calendar full.</p>
      <p className="text-base text-white shadow-text pt-3">
        Nextiva’s real-time analytics and workflow tools give you visibility into call patterns, missed
        opportunities, and where leads drop out. Some competitors offer reporting, but Nextiva’s integration
        with&nbsp;CRM&nbsp;and
        calendar tools means the data is actionable, missed calls can trigger follow-ups, and lead information
        flows directly into your pipeline without manual entry. This is a critical difference for small
        businesses that cannot afford to let a single opportunity slip by.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to go beyond basic automation, Nextiva allows for custom call flows, branded
        greetings, and escalation rules that route complex requests to the right person with full conversation
        history attached. This level of control is not always available in entry-level platforms, where
        customization is limited or requires outside help.</p>
      <p className="text-base text-white shadow-text pt-3">
        The HVAC team in West Palm Beach that started this story would find that, with Nextiva, their Friday
        afternoons look different. Instead of chasing missed messages in three apps, they monitor one dashboard.
        Instead of letting calls ring out or chats go unanswered, every customer gets a response, whether it’s a
        quick answer, an appointment booking, or a lead handed off to sales. Competing tools may promise similar
        results, but few deliver the same combination of speed, channel coverage, and depth of integration
        without adding complexity or cost.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-nextiva-compares-to-other-approaches-small-teams-are-considering" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Compares to Other Approaches Small Teams Are Considering
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
              <h2 id="how-nextiva-compares-to-other-approaches-small-teams-are-considering-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Nextiva Compares to Other Approaches Small Teams Are Considering
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
