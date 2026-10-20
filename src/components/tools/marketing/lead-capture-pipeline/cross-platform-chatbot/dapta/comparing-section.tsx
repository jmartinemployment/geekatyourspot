
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and West Palm Beach want to solve the same problem: too
        many customer conversations scattered across too many places. The owner is weighing Dapta against
        other chatbot and lead capture solutions because they need a single system that covers every channel,
        voice, SMS, WhatsApp, web chat, and keeps the whole conversation thread intact. The difference is not
        just the number of channels, but whether the agent actually acts on the information, qualifies leads,
        and moves the process forward without a human relaunching it every time the medium changes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dapta is not a generic chatbot that only answers questions or hands out FAQs. It is built for small
        and medium-sized businesses that want to capture, qualify, and book leads across every inbound channel
        without hiring developers or managing a complex software stack. Unlike tools that focus on chat-only
        or voice-only automation, Dapta runs one agent across phone, WhatsApp, SMS, and web chat, so a
        conversation can start in one place and finish in another, with no details lost. This is not a bolt-on
        channel or a workaround, the agent is
        truly&nbsp;omnichannel, and the same logic and data
        flow through each touchpoint.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many competing products require separate setups for each channel, which means every update, every
        workflow, and every rule has to be rebuilt for each new platform. That is how businesses end up with
        three different answers to the same customer question, or lose the deal because the chat and the call
        center do not share data. Dapta’s model means you write the answers, the qualifying rules, and the
        escalation paths once, and every channel uses them. The result is a single source of truth for
        customer conversations, lead status, and booking, no more context lost between platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another dividing line. Dapta connects to over 1,000 tools, including HubSpot,
        Salesforce, Google Calendar, Shopify, Zendesk, and Shopee. This lets it fit into the systems a
        business already runs, rather than forcing a migration or a patchwork of manual exports. The agent
        does not just record transcripts, it pushes structured lead data, booking details, and conversation
        outcomes directly into the&nbsp;CRM, so follow-up is immediate
        and nothing slips through. For a small business, this means less time spent copying notes and more
        time closing deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voice capability is where Dapta stands out. Most chatbot tools either ignore phone calls or require a
        separate, often more expensive, system to handle them. Dapta’s agent answers and makes phone calls in
        natural English and Spanish, including regional accents, and qualifies leads or books appointments
        live on the call. This is a critical point for businesses serving both English- and Spanish-speaking
        customers, especially in South Florida, where switching between languages and channels is the norm.
        The platform’s ability to route calls based on intent, urgency, value, or time of day, while logging
        every transfer to the&nbsp;CRM, means it can handle complex
        customer flows that chat-only bots cannot.</p>
      <p className="text-md text-white shadow-text pt-3">
        Other solutions may promise AI-driven lead capture, but many still rely on static scripts, manual
        handoff, or require a developer to make changes. Dapta’s no-code approach means operations and sales
        teams can build and adjust the agent themselves, using plain language and guided setup. This reduces
        the cost and delay of ongoing changes, so the system keeps up as the business grows or shifts focus.
        For teams that want to move quickly, Dapta’s setup often takes less than 30 minutes, compared to weeks
        for more technical platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are cases where Dapta is not the right fit. If a business is a software company wanting deep,
        code-level control over a custom voice&nbsp;API, or needs to
        embed call logic directly in their own application, Dapta trades that for speed and ease of use. In
        those situations, a developer-focused platform may be better, but for the vast majority of small
        businesses looking for results rather than a technical project, Dapta’s approach covers more ground
        with less friction.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Dapta’s strength is in unifying every inbound channel, voice, chat, WhatsApp, SMS, under
        one agent, with true bilingual support and
        seamless&nbsp;CRM&nbsp;integration. It is not just another
        chatbot; it is an operational tool that removes the gaps where leads are lost, and it does this
        without a developer or a major IT lift. For South Florida businesses that need to reach customers on
        their terms, in their language, and on any device, Dapta fills the gap that chat-only or voice-only
        tools leave open.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-dapta-compares-to-other-approaches-for-cross-platform-chatbots" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Dapta Compares to Other Approaches for Cross-Platform Chatbots
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
              <h2 id="how-dapta-compares-to-other-approaches-for-cross-platform-chatbots-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Dapta Compares to Other Approaches for Cross-Platform Chatbots
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
