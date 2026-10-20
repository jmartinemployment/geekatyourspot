
export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dapta changes the workweek for small businesses by removing the manual, repetitive tasks that cost
        time and money. With Dapta, you do not have to watch five inboxes or worry about missing a lead
        because someone called instead of sending a chat. Every customer interaction, whether it starts by
        phone, WhatsApp, SMS, or web chat, lands in one place, with the full conversation and context
        attached. No more chasing details or asking the same questions twice.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest gain is in response time. Dapta’s AI agents answer every inbound call, chat, or message
        instantly, day or night. No prospect waits for a staff member to finish another job or check
        voicemail. If a customer reaches out at 10 p.m. or during a busy Friday, the agent responds just as
        quickly as it does at 10 a.m. on a Tuesday. For urgent requests, like a burst pipe or a last-minute
        legal question, this means the business never misses the first, crucial contact. When a case is too
        complex for the AI to handle, Dapta hands it off to a staff member with the full conversation
        attached, so no one starts from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Appointment booking stops being a manual process. Dapta checks your live calendar, offers available
        time slots, and books the meeting or service on the spot. It sends reminders, confirms the booking,
        and updates your&nbsp;CRM&nbsp;or calendar automatically.
        Staff do not have to go back and forth with customers, and there is no risk of double booking or
        missed appointments. Every booking is logged, and the customer gets instant confirmation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Lead qualification is no longer left to chance. Dapta asks every prospect the same structured
        questions, service area, urgency, budget, and more, so your team only spends time on leads that fit
        your criteria. The agent scores each lead in real time, based on your rules, and syncs the result
        directly to your&nbsp;CRM. No more wading through unqualified
        leads or missing out on high-value prospects because the right questions were not asked. In bilingual
        markets, Dapta handles both English and Spanish conversations natively, so every customer gets the
        same experience and no detail is lost in translation.</p>
      <p className="text-md text-white shadow-text pt-3">
        All of this happens with no code and no need for technical staff. Dapta is built for small and
        medium-sized businesses that want to own their customer communication without hiring developers. You
        describe your business, set the rules for how leads are qualified and booked, and Dapta’s autonomous
        agent (Dapti) builds and runs the process for you. If you can describe the workflow, Dapta can
        automate it. Integrations with over 1,000 tools, including HubSpot, Salesforce, Google Calendar,
        Shopify, and Zendesk, mean the agent fits right into your existing stack. Every outcome, from a booked
        appointment to a qualified lead, syncs where your team already works.</p>
      <blockquote cite="https://dapta.ai/blog-posts/best-ai-chatbot-for-small-business/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        The conversational AI tools that work best for small businesses are AI chatbots that answer instantly,
        capture leads, and book appointments, and Dapta is our top pick because it covers web chat, WhatsApp,
        and voice in one no-code agent.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        The end result is that your team stops spending hours each week checking different inboxes, manually
        updating records, or following up on missed calls. No lead is forgotten. Every inquiry is answered,
        qualified, and booked or routed with zero manual effort. Staff can focus on the work that actually
        grows the business, serving customers, closing sales, or delivering services, instead of chasing
        context or fixing errors. For small businesses in South Florida, this means fewer missed
        opportunities, more booked work, and a reputation for being fast, responsive, and professional on
        every channel.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-dapta-removes-from-your-week-with-a-cross-platform-chatbot" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Dapta Removes from Your Week with a Cross-Platform Chatbot
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
              <h2 id="what-dapta-removes-from-your-week-with-a-cross-platform-chatbot-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Dapta Removes from Your Week with a Cross-Platform Chatbot
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
