import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The cost of manual email management for small businesses is measured in wasted hours, lost sales, and higher
        error rates, and the burden falls squarely on owners and staff. Every failure in the process adds up to real
        dollars out the door and lost opportunities that never return.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the hours: segmenting lists by hand, writing custom emails for each contact, and tracking who
        replied and who did not is a slow, repetitive job. For a team of two or three, this can easily absorb hours
        every week, time that cannot be spent on sales, fulfillment, or customer service. When staff are busy
        juggling calls, invoices, and in-person work, email follow-up slips to the bottom of the priority list.
        Missed follow-ups mean leads go cold, appointments are lost, and potential buyers never hear back.</p>
      <p className="text-base text-white shadow-text pt-3">
        Errors are another hidden cost. Copying and pasting contact data, updating lists, and sending one-off emails
        by hand leads to mistakes: the wrong name in a subject line, messages sent to the wrong segment, or
        follow-up reminders that never go out. These slip-ups erode trust with your audience and can trigger
        unsubscribes or even spam complaints. A single error in timing, like sending a reminder after a purchase has
        already happened, can turn a warm lead into a lost customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delays compound the problem. Without an automated system, every step waits on a person to act. If someone is
        out sick or busy with another task, leads can sit in the inbox for days before getting a response. In
        competitive markets like South Florida, speed matters: the business that replies first often wins the sale.
        When a prospect has to wait for a manual email, they are more likely to move on to another provider.</p>
      <p className="text-base text-white shadow-text pt-3">
        Risk grows as lists expand and processes stay manual. Without proper segmentation, you risk sending
        irrelevant content to the wrong people, which drives up unsubscribe rates and damages your <GlossaryLink slug="sender-reputation" className="text-[#0B162A] hover:underline">sender
        reputation</GlossaryLink>. Poor <GlossaryLink slug="list-hygiene" className="text-[#0B162A] hover:underline">list
        hygiene</GlossaryLink>, outdated contacts, duplicates, or inactive subscribers, reduces <GlossaryLink slug="email-deliverability" className="text-[#0B162A] hover:underline">deliverability</GlossaryLink>,
        meaning even your best messages may never reach the inbox. If you use old or inconsistent templates, your
        brand looks unprofessional and forgettable.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost, though, is in missed revenue. Every lead that does not get a timely, relevant follow-up is a
        sale that could have been. When staff are buried in repetitive tasks, they cannot focus on building
        relationships or closing deals. Without clear tracking and reporting, you cannot see which campaigns are
        working, so you repeat the same mistakes and miss out on learning what drives results. If your competitors
        are using automation and you are not, you are at a disadvantage before the first message goes out.</p>
      <p className="text-base text-white shadow-text pt-3">
        The people who absorb these costs are the owners, managers, and front-line staff. They spend evenings
        catching up on email, weekends building lists, and mornings chasing down leads that slipped through the
        cracks. The stress of knowing that every missed reply is money lost builds over time and leads to burnout.
        For small businesses, the difference between a system that works and one that does not is the difference
        between growth and stagnation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation platforms like Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, and Mailchimp are built
        to remove these costs. By automating segmentation, follow-up, and tracking, they free up hours each week,
        reduce errors to almost zero, and ensure that every lead gets the right message at the right time. They also
        provide reporting and analytics, so you can see what works and double down on what drives revenue. The
        result is a business that runs smoother, with fewer mistakes and more sales, without adding headcount or
        burning out your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="manual-email-management-wastes-time-drives-errors-and-leaves-money-on-the-table" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Email Management Wastes Time, Drives Errors, and Leaves Money on the Table
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
              <h2 id="manual-email-management-wastes-time-drives-errors-and-leaves-money-on-the-table-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Email Management Wastes Time, Drives Errors, and Leaves Money on the Table
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
