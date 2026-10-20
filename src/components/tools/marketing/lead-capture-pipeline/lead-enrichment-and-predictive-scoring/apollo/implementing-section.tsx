
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Apollo live in a small business environment is about speed and fit, not just turning on a
        tool. The process is shorter than most expect because Apollo comes with ready-to-use connectors,
        prebuilt data models, and a phased approach that lets you see value before every setting is tuned. For
        a team used to slow rollouts and endless spreadsheet cleanup, the difference is night and day.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting Apollo to your existing sales and marketing stack. For most small
        businesses in Miami-Dade, Broward, or West Palm Beach, this means plugging Apollo into HubSpot,
        Salesforce, or another&nbsp;CRM&nbsp;you already use. Apollo’s
        integration is built for these platforms, so you do not need to code or map every field from scratch.
        Out of the box, it syncs records, pushes enriched data, and keeps everything up to date without manual
        imports. This alone cuts setup time from weeks to days.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the data import and enrichment phase. Apollo lets you upload your current lead lists, even
        if they are incomplete or outdated. As soon as the data lands, Apollo starts appending missing phone
        numbers, job titles, and firmographics using its network of over 240 million contacts. This is not
        just a one-time sweep. The system keeps records fresh, updating emails and roles as people change jobs
        or companies. For a business that has spent years chasing dead contacts, this is where the busywork
        disappears.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real power comes in the first week, when Apollo’s&nbsp;lead
        scoring&nbsp;and intent signals light up. Instead of waiting for months of historical
        data, Apollo uses AI models trained on your&nbsp;CRM&nbsp;and
        its own database to prioritize leads right away. You set the rules, what makes a lead high-value for
        your business, which signals matter most, how to define your ideal customer profile. Apollo’s scoring
        engine then ranks every contact, so your team works only the leads most likely to buy. This is not a
        black box: you see the criteria, adjust them, and watch the pipeline change in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout is what keeps the process practical. You do not need to have every workflow mapped
        before you start. Most clients begin by automating one or two key flows, like website visitor
        identification or inbound form enrichment, then expand to outbound sequencing and advanced routing
        once the basics are proven. Apollo supports this approach with templates for common campaigns,
        out-of-the-box chatbot scripts, and sample scoring models. The result is a system that starts
        delivering qualified leads within days, not months.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where Apollo shortens go-live most is in automation. Once connected, it can instantly route inbound
        leads to the right rep, draft follow-up emails, and trigger outbound calls based on real-time
        behavior. For the owner who used to spend Friday afternoons sorting spreadsheets and assigning leads
        by hand, this is a shift from reactive cleanup to proactive selling. The system does not just speed up
        the process; it changes who does the work. Admin time drops, and the team spends more hours talking to
        buyers instead of chasing ghosts.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo also comes with a Chrome extension for instant prospecting anywhere you work online. Whether
        your team finds leads on LinkedIn, company websites, or email, they can pull verified contact details
        and push them to Apollo with one click. This is especially useful for small teams that do not have
        dedicated research staff. The extension bridges the gap between online research and
        structured&nbsp;CRM&nbsp;data, so you never lose a lead
        because it was found outside the main system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the feedback loop is built in. As your team uses Apollo, the AI models learn from every
        action, who gets contacted, who replies, which signals lead to closed deals. The system gets better at
        scoring and prioritizing over time, so your pipeline keeps improving without constant manual tweaks.
        For small businesses used to static, outdated lead lists, this means every week the system gets a
        little smarter and a little faster.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real timeline for going live with Apollo is measured in days for basic setup and a few weeks for
        full automation. Most of the work is front-loaded: once the integrations and initial data mapping are
        complete, ongoing maintenance is minimal. The system is built to scale with your business, so you are
        not locked into a static setup that needs a major overhaul every year. As your needs change, new
        products, new territories, new sales reps, Apollo adapts with you, not against you.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Apollo’s go-live process is not about endless configuration or waiting for perfect data. It
        is about connecting, enriching, scoring, and acting, fast. For small teams with limited resources, the
        biggest win is not just a shorter setup, but a pipeline that finally keeps pace with the business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-apollo-involves-steps-shortcuts-and-the-real-timeline" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Apollo Involves: Steps, Shortcuts, and the Real Timeline
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-apollo-involves-steps-shortcuts-and-the-real-timeline-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Going Live with Apollo Involves: Steps, Shortcuts, and the Real Timeline
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
