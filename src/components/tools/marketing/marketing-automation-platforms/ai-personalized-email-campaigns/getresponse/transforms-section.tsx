import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse takes the manual work out of Personalized Email Campaigns by automating every step that slows
        small teams down. Instead of copying and pasting emails for each new lead, GetResponse lets you set up <GlossaryLink slug="email-sequence" className="text-[#0B162A] hover:underline">automated
        sequences</GlossaryLink> that deliver the right message at the right time, without extra effort from your
        staff. This means every lead, whether from a website form, Facebook ad, or landing page, enters a campaign
        that matches their interests and actions, not just a generic welcome.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the biggest time-savers is automated segmentation. GetResponse tracks how contacts interact with your
        emails and website, then groups them in real time based on their behavior and data. You do not have to
        manually sort lists or guess what each person wants. The platform assigns <GlossaryLink slug="contact-tagging" className="text-[#0B162A] hover:underline">tags</GlossaryLink>,
        scores, and <GlossaryLink slug="custom-field" className="text-[#0B162A] hover:underline">custom fields</GlossaryLink> automatically,
        so every follow-up is relevant. For example, a contact who abandons a shopping cart can receive a reminder
        tailored to what they left behind, while a new subscriber gets a welcome series that introduces your
        business step by step. This removes hours of list management and ensures no opportunity is missed because
        someone forgot to update a spreadsheet.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse also solves the problem of inconsistent follow-up. With <GlossaryLink slug="automation-workflow" className="text-[#0B162A] hover:underline">automation
        workflows</GlossaryLink>, you can build multi-step journeys that guide each contact from their first
        interaction to a sale or appointment. These workflows <GlossaryLink slug="trigger" className="text-[#0B162A] hover:underline">trigger</GlossaryLink> emails
        based on actions, like opening a message, clicking a link, or making a purchase, so every prospect moves
        forward without manual reminders. Teams no longer need to remember who got which message or when to send the
        next one. The system runs in the background, freeing up time for more valuable work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Content creation is faster and less repetitive with GetResponse. The platform offers a library of
        customizable templates for newsletters, promotions, and <GlossaryLink slug="transactional-email" className="text-[#0B162A] hover:underline">transactional
        emails</GlossaryLink>. You can use the drag-and-drop editor to build professional messages without coding,
        or let the AI-powered email writer generate subject lines and copy based on your campaign goals. This
        removes the need to start from scratch each time, and ensures your emails look polished and on-brand. For
        campaigns that require new landing pages or <GlossaryLink slug="lead-magnet" className="text-[#0B162A] hover:underline">lead
        magnets</GlossaryLink>, GetResponse provides over 200 ready-to-use templates, all optimized for conversion
        and mobile devices (<a id={`tools-marketing-personalized-email-campaigns-getresponse-transforms-source-getresponse-com${idSuffix}`} href="https://www.getresponse.com/customers/andy-rogers" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). You can reuse and adapt these assets for future promotions, reducing the cycle time for
        every new campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead capture and list growth become automatic. GetResponse integrates with contact forms, Facebook Lead Ads,
        and landing pages, so new leads are added to your campaigns instantly. There is no need to export and import
        lists or chase down data from different sources. The platform keeps your contact database up to date and
        segments new entries as they arrive. This means you never lose a lead because of a missed connection between
        your website and your email system.</p>
      <p className="text-base text-white shadow-text pt-3">
        Analytics and testing are built into every campaign. GetResponse tracks opens, clicks, conversions, and <GlossaryLink slug="engagement-score" className="text-[#0B162A] hover:underline">engagement
        scores</GlossaryLink> for each contact, so you can see what works and adjust quickly. <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink> lets you experiment with subject lines, content, and send times to improve results.
        Instead of guessing what your audience wants, you get clear data that drives better decisions. Over time,
        this means fewer errors, higher <GlossaryLink slug="open-rate" className="text-[#0B162A] hover:underline">open
        rates</GlossaryLink>, and more sales from the same list.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse also removes the need for constant oversight. Once your workflows and campaigns are live, the
        platform manages delivery, segmentation, and follow-up automatically. You do not need to check in daily or
        worry about missing a critical step. For teams with limited staff, this is a direct return of hours each
        week, time that can be spent on strategy, creative work, or serving customers. The risk of human error
        drops, and the business can scale its marketing without scaling its headcount.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, these changes are concrete. Instead of spending hours each week on
        manual email tasks, teams can focus on what drives growth. Leads are followed up quickly and personally,
        even as the list grows. Campaigns launch faster, with less rework and fewer mistakes. The business sees more
        replies, more appointments, and more sales, all without hiring extra staff or burning out the team.
        Personalized Email Campaigns become a source of leverage, not a bottleneck.</p>
      <blockquote cite="https://www.getresponse.com/features/marketing-automation" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Build personalized automation workflows to engage and guide your customers every step of the way to
        conversion.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-getresponse-personalized-email-campaigns-actually-remove-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What GetResponse Personalized Email Campaigns actually remove from your week
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-getresponse-personalized-email-campaigns-actually-remove-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What GetResponse Personalized Email Campaigns actually remove from your week
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
