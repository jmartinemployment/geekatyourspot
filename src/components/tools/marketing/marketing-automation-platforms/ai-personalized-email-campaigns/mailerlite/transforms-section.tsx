import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite replaces the repetitive, error-prone work of personalized email marketing with automation that
        actually feels personal. For a small team, the biggest change is that you stop hand-writing every message
        and chasing every signup. Instead, MailerLite lets you set up rules and templates so each subscriber gets
        the right content at the right time, without you lifting a finger after the initial setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="email-segmentation" className="text-[#0B162A] hover:underline">Segmentation</GlossaryLink> is
        the foundation: MailerLite organizes your contacts by interests, behaviors, and engagement. You can create
        groups for different customer types or use dynamic segments that update automatically based on actions like
        purchases, clicks, or signups. This means your list always reflects what matters to each subscriber, and you
        never have to manually move people between lists or worry about sending irrelevant offers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization goes beyond just adding a name. MailerLite lets you tailor subject lines, delivery times,
        and content blocks to match each person’s profile. For example, you can send a discount to customers who
        bought a specific product, highlight events only to those in a certain city, or show different sections of
        an email to different groups, all from one campaign. Every message lands as if it was crafted for the
        individual, but you only build it once.</p>
      <p className="text-base text-white shadow-text pt-3">
        The drag-and-drop editor and library of templates mean you do not need a designer or coder to create
        professional, on-brand emails. You set your colors, fonts, and layout once, and reuse them for every
        campaign. This keeps your branding consistent and your calls to action clear, while saving hours on every
        send. The built-in AI writing assistant helps draft copy and subject lines, so you are never stuck staring
        at a blank screen. Over time, you refine these templates based on what your audience responds to, making
        each campaign more effective without extra work.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="automation-workflow" className="text-[#0B162A] hover:underline">Automation workflows</GlossaryLink> are
        where MailerLite returns the most hours to your week. Instead of remembering to send <GlossaryLink slug="welcome-series" className="text-[#0B162A] hover:underline">welcome
        emails</GlossaryLink>, follow-ups, or special offers, you set up a visual workflow once. When someone joins
        your list, fills out a form, or takes a key action, MailerLite sends the right sequence automatically. You
        can build complex journeys with triggers, delays, and conditions, but the interface keeps it simple enough
        for non-technical staff to manage. This means every lead is nurtured consistently, even when you are busy
        elsewhere.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s reporting closes the loop. Every campaign and automation is tracked, so you can see which
        messages drive opens, clicks, and sales. The dashboard shows you at a glance what is working and what needs
        attention. You can even track revenue from linked e-commerce platforms, so you know which emails actually
        lead to purchases. This lets you focus on the campaigns that deliver real results, rather than guessing or
        sifting through spreadsheets.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with online stores, MailerLite integrates with platforms like WooCommerce, Shopify, Wix,
        Squarespace, Prestashop, and BigCommerce. This means you can trigger emails based on shopping behavior,
        segment your audience by purchase history, and track sales from each campaign, all without manual exports or
        third-party tools. Forms and pop-ups built in MailerLite can be embedded directly into your site, so every
        signup flows into the right group and automation, with no extra steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and optimization are built in at every stage. You can run <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        tests</GlossaryLink> on subject lines, content, forms, pop-ups, and <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        pages</GlossaryLink> to see what gets the best response. The platform handles the heavy lifting, splitting
        your audience, measuring results, and rolling out the winner, so you keep improving without extra work. Over
        time, this compounds into more opens, more clicks, and more sales, all with less effort from your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s no-code tools mean marketers do not have to wait for IT or outside help. Anyone on your team
        can build, launch, and update campaigns as needed, freeing up technical staff for more complex projects. For
        teams with limited resources, this is the difference between keeping up and falling behind.</p>
      <p className="text-base text-white shadow-text pt-3">
        In real use, organizations like SERP Institute have managed their email strategy with MailerLite despite not
        having a dedicated marketing team or technical background. The drag-and-drop editor, click maps, and <GlossaryLink slug="send-time-optimization" className="text-[#0B162A] hover:underline">send-time
        optimization</GlossaryLink> made it possible for them to build professional newsletters, track engagement,
        and send messages when subscribers are most likely to read them, all without outside help.</p>
      <blockquote cite="https://www.mailerlite.com/case-studies/serp-institute" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Karen Tran, Assistant Director - Bay Area at education nonprofit SERP Institute, has achieved huge results
        for her organization with email, despite not being a professional marketer and having a plate full of other
        tasks to do.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        The result for small businesses is a shift from reactive, manual work to proactive, strategic marketing.
        MailerLite removes the bottlenecks and busywork that keep teams from reaching more customers. Instead of
        spending hours on repetitive tasks, your staff can focus on building relationships, refining your message,
        and growing your business. The platform’s automation and personalization features scale as you grow, so you
        never outgrow the system or face a sudden jump in workload.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every hour you used to spend segmenting lists, writing emails, and tracking results by hand is returned to
        your team. Errors drop, follow-up is immediate and consistent, and every subscriber gets a message that
        feels relevant to them. For a small business, this is the only way to run professional, data-driven email
        marketing without hiring more staff or buying an enterprise platform. MailerLite puts the tools of big
        brands within reach of local teams, so you can compete, and win, on relevance, speed, and customer
        experience.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-mailerlite-removes-the-manual-workload-from-personalized-email-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MailerLite removes the manual workload from Personalized Email Campaigns
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
              <h2 id="how-mailerlite-removes-the-manual-workload-from-personalized-email-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MailerLite removes the manual workload from Personalized Email Campaigns
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
