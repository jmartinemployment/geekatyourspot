import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in Miami-Dade, Broward, or West Palm Beach that relies on chat to capture leads
        runs into the same wall: scattered conversations across WhatsApp, Instagram, Facebook Messenger, SMS,
        and a website chat widget. Each one is its own inbox. The team spends hours every week toggling
        between apps, trying to remember which prospect came in where, and copying details from chat windows
        into spreadsheets or a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. It is not just time lost. The
        real cost is in missed leads and slow replies. When a business owner is busy with a customer in the
        store or on a call, a new Instagram DM can sit unread for hours. A WhatsApp message that comes in
        after hours is easy to overlook by morning. Website chats vanish if no one is logged in to answer.
        Every missed reply is a lost sale that could have closed if the right person had just seen it in time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual management of these channels means the same questions get asked again and again. A customer
        might message on Facebook, then follow up on WhatsApp, and the team starts from scratch each time.
        There is no shared context, so customers repeat themselves and get frustrated. When staff members
        answer chats at different times, the information is inconsistent. One person might offer a price or
        answer a question one way, another gives a different answer. This confusion kills trust and makes the
        business look unprofessional. Worse, when a lead is finally ready to buy, their details might be stuck
        in a DM or lost in a chat log that no one checked. Sales teams end up chasing cold leads instead of
        focusing on the ones that are ready now.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just in missed opportunities. It is also in wasted staff hours. Copying names,
        numbers, and notes from one app to another is slow and error-prone. A manager might spend half a day
        each week just keeping the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;up to date, hunting
        through chat histories, or following up on half-finished conversations. This is time that could be
        spent actually moving deals forward or serving customers. When the business gets busy, these manual
        updates fall behind, and the pipeline dries up. The team is always catching up, never ahead.</p>
      <p className="text-md text-white shadow-text pt-3">
        After hours and weekends are the worst gaps. Prospects who message at night or on Sunday expect a
        reply fast. If no one is there to answer, they move on to a competitor who does. Even the best live
        chat tool on a website only works if someone is logged in and watching. Most small businesses cannot
        afford to have staff online 24/7. So leads slip through the cracks, and no one knows how many were
        lost until it is too late. The business ends up paying for ads and social posts that drive traffic,
        but the follow-through is manual and unreliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to fix this with more staff or more tools only makes things worse. Adding another app means
        another inbox to check. Hiring more people to watch chats is expensive, and it does not solve the
        problem of keeping all the information connected. The more channels the business uses, the harder it
        gets to keep track of the whole customer journey. Leads get lost, context is dropped, and follow-up is
        always a step behind. Small businesses end up spending more to get less.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real pain of cross-platform chat today: manual work that scales with every new channel,
        slow follow-up that loses hot prospects, and a sales pipeline that is always missing pieces. The cost
        shows up in staff burnout, missed revenue, and the feeling that the business is always playing
        catch-up. Without a unified system to capture, qualify, and route every chat, the business is stuck in
        a loop of busywork that never moves the needle.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
