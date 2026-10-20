
export default function RolesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A real cross-platform chatbot project does not just change how leads get captured; it shifts who does
        the work, and how much of it is manual. Most small businesses in South Florida run lean. Every new
        process is another task that lands on the owner, a frontline staffer, or the one person who knows how
        to find the details in a dozen inboxes. When a chatbot pipeline goes live, those jobs change,
        sometimes in ways that free up hours, sometimes in ways that take getting used to.</p>
      <p className="text-md text-white shadow-text pt-3">
        Before the rollout, the business owner or a trusted team member is the bottleneck. They are the one
        watching the Facebook page, checking Instagram after hours, and fielding WhatsApp messages from
        prospects. Every new channel is another place to miss a message. Data entry is tedious and
        error-prone: someone has to copy names and phone numbers from chats into
        a&nbsp;CRM&nbsp;or spreadsheet, then remember to follow up.
        Repetitive questions, about hours, prices, service areas, eat up prime selling time, and high-value
        leads sometimes get lost in the shuffle when the inbox is crowded. The cost is invisible until a hot
        lead slips away and no one notices until it is too late.</p>
      <p className="text-md text-white shadow-text pt-3">
        When the chatbot takes over, the pattern flips. Now an AI agent, My AI Front Desk for phone and SMS,
        BotPenguin for social and web, Manychat for comment-triggered flows, Dapta for bilingual intake, or
        Tidio for live website conversations, handles the first response, collects the right details, and
        routes the outcome. The team is no longer chained to checking every channel. Instead, they get a
        single, updated list of new leads, complete with contact info, intent, and what happened in the
        conversation. Manual entry is gone. The pipeline fills itself in the background, and follow-ups happen
        automatically or at the right moment, triggered by real engagement.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the front desk, this means fewer interruptions and less stress about missing a call or message.
        When My AI Front Desk is live, the AI picks up instantly, qualifies the caller, and logs the result.
        If a question comes in through text or chat, the bot captures it and either answers or passes it to a
        staff member if needed. No more after-hours voicemail pileups on Monday morning. The team comes in to
        a clean queue, not a mess of missed opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the owner or sales lead, the benefit is focus. Instead of chasing down every “just curious”
        inquiry, they spend their time on high-value prospects who have already been qualified. Manychat, for
        instance, segments contacts in real time, so anyone who commented on a post or messaged the business
        is already tagged, scored, and sent to the right list. No more sifting through hundreds of DMs for the
        one that matters. The&nbsp;CRM&nbsp;or dashboard is up to
        date, and the team can move on deals while the lead is still hot.</p>
      <p className="text-md text-white shadow-text pt-3">
        Customer support and service roles see the biggest shift. With Tidio, repetitive questions about
        shipping, returns, or appointments are answered automatically, freeing up agents to focus on the
        conversations that need a personal touch. If a chat goes beyond what the AI can handle, the system
        alerts a human to step in, with the full conversation history attached. This handoff is seamless,
        there is no need to ask the customer to repeat themselves, and the staffer knows exactly what was
        already covered.</p>
      <p className="text-md text-white shadow-text pt-3">
        For bilingual or multilingual teams, Dapta’s ability to handle both English and Spanish is a change in
        itself. Now, every prospect gets an instant, accurate first response, regardless of which language
        they use. No more delays while searching for someone who can translate, and no risk of losing a lead
        because the first message went unanswered.</p>
      <p className="text-md text-white shadow-text pt-3">
        There is a learning curve. Staff need to get comfortable letting the bot handle first contact,
        trusting the data it collects, and checking the new pipeline for action items. But in practice, the
        shift is straightforward: less firefighting, more closing. For a team that used to spend Friday
        afternoons sorting through five inboxes, the change is clear by the first week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Here is how the roles change day to day:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Front desk: Fewer calls to answer directly, more time for in-person service, less after-hours backlog.</li>
        <li>Sales: Only sees qualified, scored leads, not cold inquiries. Spends more time closing, less time sorting.</li>
        <li>Support: Handles only the cases the bot cannot solve. Gets context-rich handoffs, not cold transfers.</li>
        <li>Owner/manager: Sees live dashboards, tracks which channels perform best, and can shift staff to the highest-value work.</li>
        <li>IT or operations: Spends less time patching together spreadsheets and more time tuning the workflows for better outcomes.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The staff who used to carry the chaos now get their hours back. They are not just less busy, they are
        working on what actually grows the business. The best sign the system is working is when your team
        says they finally have time for the customers in front of them, and you can see every lead move
        through the pipeline without asking anyone to stay late or check their phone all weekend.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-does-the-work-now-what-changes-when-the-chatbot-takes-over" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Does the Work Now? What Changes When the Chatbot Takes Over
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-does-the-work-now-what-changes-when-the-chatbot-takes-over-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Does the Work Now? What Changes When the Chatbot Takes Over
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
