export default function RightFitSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Personalized email automation is the right call when the cost of missed follow-up, inconsistent messaging,
        and wasted staff hours has become too high to ignore. It is not the answer for every business, every team,
        or every list size, automation only pays off when you have enough contacts, enough repeat communication, or
        enough risk of leads falling through the cracks that manual effort simply cannot keep up.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is still managing a small, high-touch list where every contact is a top-priority client, and
        every message is unique, automation may not save time. But for most small businesses in Miami-Dade, Broward,
        or Palm Beach counties, once the lead list hits a few hundred names, manual follow-up is no longer
        sustainable. The moment you see staff spending hours a week copying, pasting, or just trying to remember who
        to email next, you are already absorbing the hidden costs of doing it all by hand, which earlier sections
        have detailed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where automation shines is in handling the repetitive, time-sensitive, or easily forgotten parts of your
        follow-up. This is where tools like Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, and Mailchimp
        actually solve the problem. Each platform is built to address common points of failure, Brevo groups
        contacts and sends at the best time for each, reducing ignored blasts and missed appointments; GetResponse
        connects web forms to nurture sequences so new leads do not get lost; MailerLite makes it possible to send
        branded, relevant emails to the right groups without a full marketing department; Moosend turns a growing
        list into a sequenced system so every contact gets the right next step; ActiveCampaign connects sales,
        marketing, and CRM data so no lead slips through; Mailchimp gives small teams automation and segmentation
        that scales without a marketing degree.</p>
      <p className="text-base text-white shadow-text pt-3">
        But automation is not a silver bullet. If your data is poor, if the team has not agreed on what a
        &quot;qualified lead&quot; looks like, or if there is no repeatable process for managing new contacts, even
        the best platform will underperform. Automation is also not the fix for one-off campaigns with no follow-up,
        or for businesses that change their offer every week. In those cases, the effort to keep automations
        relevant may outweigh the benefits.</p>
      <p className="text-base text-white shadow-text pt-3">
        The right time to automate is when you are ready to define what a &quot;good&quot; follow-up looks like,
        have enough data to segment meaningfully, and need to free staff from the grind of manual email work. It is
        not right for businesses who are still experimenting with their offer, messaging, or audience. For those, a
        simpler, more manual approach, possibly with basic templates and batch sends, may be more practical until
        the business model stabilizes.</p>
      <p className="text-base text-white shadow-text pt-3">
        When automation is a fit, it scales with you: as your list grows, as your offers become more complex, and as
        your sales cycles lengthen, the system keeps working while your staff focuses on higher-value conversations.
        But it only works if you are willing to invest upfront in clean data, clear processes, and the discipline to
        keep the workflows updated as your business changes. If you are not ready for that, or if your team is not
        on board, automation will end up as just another tool that never leaves the shelf.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-personalized-email-automation-is-the-right-move-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Personalized Email Automation Is the Right Move, and When It Is Not
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
              <h2 id="when-personalized-email-automation-is-the-right-move-and-when-it-is-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Personalized Email Automation Is the Right Move, and When It Is Not
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
