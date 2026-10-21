
export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A cross-platform chatbot does not work in a vacuum. If it cannot see your customer data, track new
        leads across every channel, and push the result into your systems, it will leave you with the same
        scattered records you started with. The environment has to supply clean, structured data and the
        integrations to keep it flowing both ways. Without this, the bot is just another disconnected inbox.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the base level, you need every customer conversation, on your website, Facebook, Instagram,
        WhatsApp, SMS, and phone, captured and logged to a single, unified timeline. This timeline should show
        who contacted you, on which channel, what they asked, and what step happened next. My AI Front Desk,
        for example, creates a single record per contact that collects calls, texts, and emails into one view,
        so you do not have to hunt through separate logs or copy-paste details by hand. It goes further by
        converting every interaction into structured data: name, phone, email, intent, and outcome, then
        pushing it directly into your&nbsp;CRM. That is the difference
        between a bot that just chats and one that actually delivers leads you can close.</p>
      <p className="text-base text-white shadow-text pt-3">
        To pull this off, your stack needs connectors to the channels your customers actually use. BotPenguin,
        for instance, is built for teams that get leads through WhatsApp, Instagram, Facebook, and web chat
        all at once. It runs a unified AI presence across all those channels, so you do not miss a message
        just because it landed in a different app. More importantly, it can instantly push captured data,
        names, messages, tags, into your business database
        or&nbsp;CRM. That eliminates the manual work of copying
        details from DMs into your pipeline, which is where so many leads go dark.</p>
      <p className="text-base text-white shadow-text pt-3">
        The integration layer matters even more when you want to automate follow-ups or trigger workflows
        based on what happened in the conversation. Here’s where Dapta stands out for small businesses in
        South Florida. It connects chat, text, WhatsApp, and voice agents to
        your&nbsp;CRM&nbsp;and calendar and does it for both English
        and Spanish leads. This means the system can book appointments, update records, and route
        conversations to the right person without you having to transfer data by hand. For a local business
        that fields requests in both languages, that is not a nice-to-have, it is the only way to avoid double
        entry and missed context.</p>
      <p className="text-base text-white shadow-text pt-3">
        The&nbsp;data quality&nbsp;step is not optional. If
        your records are missing emails, have inconsistent formatting, or drop context between channels, the
        bot will fail to qualify leads and your team will waste time cleaning up the mess. Manychat approaches
        this by letting you set up guided conversations that collect the right info the first time, service
        interest, contact details, and tags for next steps. It can then sync those details with
        your&nbsp;CRM&nbsp;or even a spreadsheet if your workflow is
        lightweight. The payoff is simple: the business always has what it needs to follow up, and no one is
        left digging through old DMs looking for a lost phone number.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some teams want to handle complex customer questions or support tickets right in chat. This is where
        Tidio’s strength comes in, it connects its conversational AI directly to your knowledge base or help
        center, so the bot can answer from your real business facts, not just canned lines. When a customer
        asks something outside the script, Tidio’s AI agent can pull the answer from your support content, and
        if it cannot, it hands off the conversation to a human with the context intact. That keeps the
        workflow smooth and avoids making the customer repeat themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final piece is reporting. Does your pipeline show where the lead came from, which channel
        converted best, and what happened after? If not, you are still guessing. My AI Front Desk, for
        example, tracks every conversion back to its channel and conversation path, so you can see which
        bookings and dollars came from phone, web chat, SMS, or social DMs. This is what lets you double down
        on what works and fix what does not. Without it, every improvement is blind.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this all comes together in a stack that looks like this:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Channel connectors pull in messages from website, Facebook, Instagram, WhatsApp, SMS, and phone.</li>
        <li>A conversational AI (My AI Front Desk, BotPenguin, Dapta, Manychat, or Tidio) handles the first response, collects structured data, and qualifies the lead.</li>
        <li>A&nbsp;CRM&nbsp;or pipeline tool receives every conversation, tagged and sorted by intent and channel.</li>
        <li>Automated workflows trigger follow-ups, bookings, or human handoff based on real context.</li>
        <li>Reporting tools show you what is working and where leads are leaking out.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        If your data is clean and your integrations are tight, your cross-platform chatbot becomes a true
        front end for your business, catching every lead, qualifying accurately, and keeping your pipeline
        full without manual effort. If any piece is missing, you are right back where you started: chasing
        threads across five inboxes, missing deals, and burning hours on data cleanup. This is the gap that
        separates a chatbot that pays for itself from one that just adds another layer of noise.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-data-and-integrations-a-real-chatbot-pipeline-needs-to-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Real Chatbot Pipeline Needs to Work
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
              <h2 id="what-data-and-integrations-a-real-chatbot-pipeline-needs-to-work-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data and Integrations a Real Chatbot Pipeline Needs to Work
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
