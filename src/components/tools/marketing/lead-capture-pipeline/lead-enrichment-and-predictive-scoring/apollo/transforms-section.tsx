import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Apollo is built to end the detective work in small business sales. It does not just add another tool
        to the stack, it replaces hours of manual searching, guessing, and chasing with a system that runs in
        the background and delivers qualified, ready-to-contact leads. Every feature is designed to remove a
        job from your team’s week, not just add a new button to click.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing Apollo does is surface the buyers who are already looking. It identifies companies and
        contacts visiting your website, even those who never fill out a form, and matches them against a
        database of over 240 million professionals and 30 million businesses. Instead of waiting for someone
        to raise their hand, Apollo tells you who is interested right now, with verified names, roles, and
        direct contact details. This alone means your reps start every day with a list of warm, high-intent
        leads that never would have shown up in a spreadsheet.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data enrichment is instant and automatic. Apollo fills in missing emails, phone numbers, job titles,
        company size, and more, drawing from multiple trusted sources. No more copying and pasting between
        LinkedIn, Google, and your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. Every new lead, whether
        from a form, a chat, or a website visit, arrives with complete, up-to-date information. If someone
        changes jobs or their contact details update, Apollo refreshes the record automatically. The team
        never has to go back and check, what they see is always current.</p>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="lead-scoring">Lead scoring</GlossaryLink>&nbsp;is no longer a manual point system.
        Apollo uses AI to rank every lead against your ideal customer profile, pulling in real-time
        firmographic data, intent signals, and buying behavior. The result is a mathematically prioritized
        list, your hottest prospects are always at the top, and the cold ones drop off without a second
        thought. This means your team does not waste time on dead ends. They focus only on the accounts most
        likely to buy, and the system gets smarter as it learns from your actual conversions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Outreach becomes targeted and efficient. Apollo’s&nbsp;<GlossaryLink slug="lead-scoring">lead
        scoring</GlossaryLink>&nbsp;and enrichment power automated campaigns that hit only the right people,
        decision-makers with verified contact info, filtered by location, company size, and buying intent. The
        system can trigger automatic follow-ups, assign leads to the right rep in real time, and even draft
        the first email. No more cold blasts to the wrong inboxes, and no more time spent sorting through
        lists to find the right target.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s integrations remove the double entry that slows teams down. It syncs directly with
        Salesforce, HubSpot, Gmail, and other tools, so every update, every new lead, and every score flows
        where it needs to go. The&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;stays clean and
        current without manual uploads or reconciliations. If a lead is qualified, it appears instantly in the
        sales pipeline, ready for action.</p>
      <p className="text-md text-white shadow-text pt-3">
        Smart chatbots and voice assistants are not just add-ons, they are core to Apollo’s approach. Chatbots
        engage website visitors around the clock, qualify them in real time, and capture details that feed
        straight into the pipeline. Voice assistants can handle simple queries, route calls, or even schedule
        meetings, freeing up staff to focus on closing deals instead of managing calendars or answering basic
        questions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact is clear: hours returned to your team, fewer errors, and a pipeline that fills itself with
        real opportunities. Instead of spending the week copying data, chasing dead leads, or guessing who to
        call, your sales reps spend their time selling. The system handles the busywork, and the team focuses
        on what actually drives revenue.</p>
      <blockquote cite="https://www.apollo.io/product/lead-generation" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Search verified contacts, prioritize with AI scoring, launch sequences, and sync everything to
        Salesforce or HubSpot in one click.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        The difference shows up fast. Teams using Apollo report that work which used to take 15 to 20 hours
        now happens in the background. Contact updates,&nbsp;<GlossaryLink slug="lead-scoring">lead
        scoring</GlossaryLink>, and enrichment run automatically. Every Friday, the same team that used to end
        the week with a thin pipeline now sees a list of real, qualified prospects, people who are in the
        market and ready to talk.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, this is about more than speed. It is about making every dollar and every hour
        count. Apollo removes the guesswork, the manual labor, and the missed connections that keep pipelines
        empty. The result is a sales process that works for you, not against you, and a team that spends its
        time where it matters most: closing deals, not chasing ghosts.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-apollo-removes-the-busywork-from-lead-enrichment-and-predictive-scoring" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Removes the Busywork from Lead Enrichment and Predictive Scoring
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
              <h2 id="how-apollo-removes-the-busywork-from-lead-enrichment-and-predictive-scoring" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Removes the Busywork from Lead Enrichment and Predictive Scoring
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
