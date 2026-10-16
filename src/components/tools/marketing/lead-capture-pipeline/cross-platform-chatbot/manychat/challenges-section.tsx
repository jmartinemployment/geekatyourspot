import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every small business in Miami-Dade, Broward or West Palm Beach that manages leads across Instagram,
        WhatsApp, Facebook Messenger, SMS and website chat by hand runs into the same wall. Each message
        arrives in its own inbox. Your team is forced to check five places just to keep up with a single
        conversation. The cost is not just time wasted switching tabs or chasing down who answered what. It is
        the missed sale when a hot lead drops off because no one replied in time, or when a customer’s
        question goes unanswered because the notification got buried. If your process relies on someone
        copying details from one app to a spreadsheet, you are paying for it in lost deals and staff burnout.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first problem shows up in your comments. A potential customer asks for pricing on your latest
        Instagram post, but no one sees it for hours. By the time you reply, they have moved on. Multiply this
        by every post and every channel, and you have a steady drip of lost opportunities. Manychat is built
        to break this cycle. Instead of letting comments sit unanswered, it triggers an automated direct
        message anytime someone comments or uses a specific keyword. This means that every inquiry gets a
        response, even when your staff is off the clock. You stop losing leads to simple silence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the grind of sending the same information over and over. How many times a week does your
        team paste the same link, coupon code, or answer into a DM? Doing this by hand is a recipe for
        mistakes: the wrong link, a missed reply, or a forgotten follow-up. Manychat replaces this busywork
        with guided conversations. When someone asks for details, the chatbot can identify their interest and
        deliver the right answer or offer without manual effort. This removes repetitive tasks from your staff
        and ensures every prospect gets what they need, right away.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then there is the issue of tracking. When conversations are scattered, so are your records. Staff
        might tag a lead in one system but forget to update another, or they never record the contact at all.
        This makes it impossible to follow up properly, and the same person might be pitched twice, or not at
        all. Manychat collects contact information during the chat itself, so leads are organized as they come
        in. You get a pipeline you can trust, not a jumble of half-filled spreadsheets.</p>
      <p className="text-md text-white shadow-text pt-3">
        A bigger failure happens when a DM conversation just ends. Maybe the prospect asks a question, gets an
        answer, and then nothing happens. Without a way to tag or segment that contact for the next step,
        whether it is a booking, a callback, or a targeted follow-up, you are leaving money on the table.
        Manychat solves this by letting you segment contacts based on their responses or actions, so every
        conversation moves toward a result instead of fizzling out.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, many businesses try to use a social DM tool as a replacement for their website chat or even
        their&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. This is where things break down. Without a way
        to connect captured leads to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or spreadsheet
        workflow, you end up with siloed data and no way to see the full customer journey. Manychat integrates
        with tools like Google Sheets and ActiveCampaign, so every lead captured in a chat is synced to your
        main system. You see the complete picture and can act on it without more manual entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real cost of doing this by hand is not just the hours lost or the mistakes made. It is the steady
        loss of business that comes from missed connections, delayed responses, and leads that never make it
        into your pipeline. As your audience grows, these gaps turn into real revenue left on the table.
        Manychat is designed to close those gaps by turning every comment, DM, and inquiry into a trackable,
        actionable lead, without adding more manual work to your team.</p>
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
